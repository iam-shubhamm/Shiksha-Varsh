import { createServerFn } from "@tanstack/react-start";
import { generateResponse } from "@lovable.dev/ai-gateway";
import { getPrimarySubject } from "@/data/primary-curriculum";
import { getAdvancedCourse, getAdvancedSubject, getAdvancedTrack } from "@/data/advanced/curriculum";
import { getUpperSubject, UPPER_BOARDS, type UpperBoard } from "@/data/upper/curriculum";

export type PackQuiz = { q: string; options: string[]; answer: number };
export type ChapterPack = { notes: string[]; quiz: PackQuiz[] };

const valid = (p: unknown): p is ChapterPack => {
  const x = p as ChapterPack;
  return !!x && Array.isArray(x.notes) && x.notes.length >= 4 && Array.isArray(x.quiz) && x.quiz.length >= 15 &&
    x.quiz.every((q) => typeof q.q === "string" && Array.isArray(q.options) && q.options.length === 4 && Number.isInteger(q.answer) && q.answer >= 0 && q.answer < 4);
};

function fallbackPack(title: string, hindi: boolean): ChapterPack {
  const notes = hindi ? [
    `${title}: इस अध्याय के मुख्य विषय और उद्देश्य समझना।`,
    `यह अध्याय ${title} से जुड़ी बुनियादी अवधारणाएँ बताता है।`,
    `मुख्य शब्द, परिभाषाएँ और महत्वपूर्ण उदाहरण याद करें।`,
    `प्रत्येक उदाहरण को अपनी भाषा में दोहराकर अभ्यास करें।`,
    `अध्याय में दिए गए नियमों और तथ्यों के बीच संबंध समझें।`,
    `कठिन शब्दों को सरल अर्थ के साथ लिखें।`,
    `अंतर और समानता पहचानने की छोटी सूची बनाएँ।`,
    `पाठ से जुड़े दिन-प्रतिदिन के उदाहरण खोजें।`,
    `महत्वपूर्ण बिंदुओं का संक्षिप्त सार पाँच वाक्यों में लिखें।`,
    `परीक्षा से पहले इस अध्याय के सभी उदाहरण फिर से पढ़ें।`,
  ] : [
    `${title}: understand the main aim and central idea of the chapter.`,
    `Learn the key terms, definitions and concepts introduced in ${title}.`,
    `Connect each main concept with a simple real-life example.`,
    `Identify important facts and separate them from supporting details.`,
    `Practise explaining each key idea clearly in your own words.`,
    `Review diagrams, activities or examples included in the chapter.`,
    `Compare related ideas to remember similarities and differences.`,
    `Make short revision points from the chapter's main sections.`,
    `Answer sample questions using complete and exam-friendly sentences.`,
    `Revise the chapter summary and the examples before attempting the quiz.`,
  ];
  const quiz = Array.from({ length: 15 }, (_, i) => ({
    q: hindi ? `${title} से संबंधित मूल अवधारणा का कौन-सा कथन सही है?` : `Which statement is correct for the main idea of ${title}?`,
    options: hindi
      ? ["मुख्य अवधारणा को समझना सीखना है", "केवल नाम रटना है", "कोई विषय नहीं है", "केवल चित्र ही सब हैं"]
      : ["We should understand the main concept", "We should only memorise names", "The chapter has no topic", "Only pictures are important"],
    answer: i % 4,
  }));
  return { notes, quiz };
}

// Returns notes + a 15-question quiz for one chapter. Generated once, then served from the database for everyone.
export const getChapterPack = createServerFn({ method: "POST" })
  .inputValidator((d: { grade: number; board: string; subject: string; chapter: number; course?: string; track?: string }) => ({ grade: Number(d.grade), board: String(d.board), subject: String(d.subject), chapter: Number(d.chapter), course: d.course, track: d.track }))
  .handler(async ({ data }): Promise<ChapterPack | null> => {
    const course = data.course ? getAdvancedCourse(data.course) : undefined;
    const track = course && data.track ? getAdvancedTrack(course.id, data.track) : undefined;
    const sub = data.course ? (track ? getAdvancedSubject(data.course, track.id, data.subject) : undefined) : data.grade < 3 && data.board === "cbse" ? getPrimarySubject(data.grade, data.subject) : getUpperSubject(data.grade, data.board, data.subject);
    const title = sub?.chapters[data.chapter];
    if (!sub || !title) return null;
    const curriculum = course && track ? `advanced:${course.id}:${track.id}` : data.board === "icse" && data.grade >= 9 ? "icse" : "ncert";
    const grade = course?.level ?? data.grade;
    const key = `${grade}:${curriculum}:${sub.id}:${data.chapter}:${title}`;
    try {
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
      const { data: row } = await supabaseAdmin.from("chapter_packs").select("notes, quiz").eq("key", key).maybeSingle();
      if (row && valid(row)) return { notes: row.notes, quiz: row.quiz.slice(0, 15) };
    } catch (e) {
      console.warn("chapter_pack cache unavailable", e);
    }

    const hindi = sub.id === "hindi";
    const context = course && track ? `${course.name}, ${track.name}, ${course.kind === "college" ? "undergraduate core topic study, not a specific university syllabus" : "senior secondary NCERT-based study"}` : `Class ${data.grade}, ${UPPER_BOARDS[data.board as UpperBoard]} board`;
    const prompt = `${context}, subject ${sub.name}, book "${sub.book}", chapter: "${title}".
Write accurate exam-oriented study material that follows this exact book chapter.
Return ONLY JSON: {"notes": string[], "quiz": [{"q": string, "options": [4 strings], "answer": index 0-3}]}.
- notes: 10 to 14 clear points (key ideas, definitions, formulas, important facts, summary). ${course?.kind === "college" ? "Use university-level reasoning, worked examples and code where appropriate. Do not invent textbook quotations or institutional requirements." : `Age-appropriate for Class ${grade}.`}
- quiz: exactly 15 MCQs — first 5 easy, next 5 medium, last 5 hard. One correct option each; vary the answer position.
${hindi ? "Write everything in Hindi (Devanagari)." : "Write in simple English."}`;
    try {
      const res = await generateResponse({ model: "openai/gpt-6-astra", input: prompt });
      let raw = "";
      for (const item of (res.output ?? []) as Array<{ type: string; content?: Array<{ type: string; text?: string }> }>)
        if (item.type === "message") for (const c of item.content ?? []) if (c.type === "output_text") raw += c.text ?? "";
      const m = raw.match(/\{[\s\S]*\}/);
      const pack = m ? JSON.parse(m[0]) : null;
      if (!valid(pack)) return fallbackPack(title, hindi);
      const clean: ChapterPack = { notes: pack.notes.map(String), quiz: pack.quiz.slice(0, 15) };
      await supabaseAdmin.from("chapter_packs").upsert({ key, grade, board: curriculum, subject: sub.id, chapter: title, notes: clean.notes, quiz: clean.quiz });
      return clean;
    } catch (e) {
      console.error("getChapterPack failed", e);
      return fallbackPack(title, hindi);
    }
  });
