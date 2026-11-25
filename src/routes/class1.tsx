import { LiteYouTube } from "@/components/LiteYouTube";
import { ClassBoardPicker } from "@/components/ClassBoardPicker";
import { Button } from "@/components/ui/button";
import { PrimaryTextbook } from "@/components/PrimaryTextbook";
import { SiteHeader } from "@/components/SiteHeader";
import { AllCoursesLink } from "@/components/ClassStudyHeader";
import { LectureLangToggle, useLectureLang, useTranslated, type LectureLang } from "@/components/LectureLang";
import { findLessonVideos } from "@/lib/classes/video.functions";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { lectures, notes, quizBank, quizSubjects, levels, type Level, type QuizSubject, type Lecture, type Note } from "@/lib/classes/class1-content";

export const Route = createFileRoute("/class1")({
  head: () => ({
    meta: [
      { title: "Class 1 Learning Corner – Quiz, Lectures & PDF Notes" },
      { name: "description", content: "Class 1 ke bachchon ke liye fun quizzes, lectures aur PDF notes ek hi jagah." },
      { property: "og:title", content: "Class 1 Learning Corner" },
      { property: "og:description", content: "Quizzes, lectures aur PDF notes – Class 1 ke liye." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ClassPage,
});

function ClassPage() { return <><SiteHeader nav={false} /><Index /></>; }

function youtubeId(url: string) {
  const m = url.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);
  return m ? m[1] : null;
}

const boards = {
  cbse: { name: "CBSE", full: "Central Board of Secondary Education", emoji: "🏫", books: ["Sarangi (हिंदी) – NCERT", "Joyful Mathematics – NCERT", "Mridang (English) – NCERT", "EVS practice"] },
  icse: { name: "ICSE", full: "Council for the Indian School Certificate Examinations", emoji: "🎓", books: ["New Learning to Communicate (English)", "Understanding Mathematics", "Navrang Hindi Pathmala", "Environmental Studies (EVS)"] },
  bihar: { name: "State Board", full: "SCERT Bihar / BSEB", emoji: "🌾", books: ["कोंपल (हिंदी) – SCERT Bihar", "गिनतारा (गणित) – SCERT Bihar", "Rainbow (English) – SCERT Bihar", "आस-पास (पर्यावरण)"] },
} as const;
type BoardKey = keyof typeof boards;

function isBoardSelection(value: unknown): value is BoardKey | "" {
  return value === "" || (typeof value === "string" && Object.prototype.hasOwnProperty.call(boards, value));
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function isScoreMap(value: unknown): value is Record<string, number> {
  return typeof value === "object" && value !== null && !Array.isArray(value) && Object.values(value).every((score) => typeof score === "number" && Number.isFinite(score));
}

function useStored<T>(key: string, init: T, isValid: (value: unknown) => value is T) {
  const [v, setV] = useState<T>(init);
  useEffect(() => {
    const stored = localStorage.getItem(key);
    if (!stored) return;
    try {
      const parsed: unknown = JSON.parse(stored);
      if (isValid(parsed)) setV(parsed);
      else localStorage.removeItem(key);
    } catch {
      localStorage.removeItem(key);
    }
  }, [isValid, key]);
  const set = (n: T) => { setV(n); localStorage.setItem(key, JSON.stringify(n)); };
  return [v, set] as const;
}

function printNote(n: Note, label: string) {
  const w = window.open("", "_blank");
  if (!w) return alert("Popup blocked – please allow popups to download.");
  const body = n.sections.map((sec) => `<h2>${sec.heading}</h2><div class="g" style="grid-template-columns:repeat(${sec.cols ?? 2},1fr)">${sec.items.map((i) => `<div>${i}</div>`).join("")}</div>`).join("");
  w.document.write(`<html><head><meta charset="utf-8"><title>${n.title}</title><style>:root{--print-ink:CanvasText;--print-line:GrayText}body{font-family:sans-serif;padding:32px}h1{color:var(--print-ink);margin:0}h2{margin-top:24px;border-bottom:2px solid var(--print-line);padding-bottom:4px}.g{display:grid;gap:6px}.g div{border:1px solid var(--print-line);border-radius:8px;padding:8px;font-size:18px}h2,.g{break-inside:avoid}</style></head><body><h1>${n.title}</h1><p>${n.subject} • Class 1 • ${label}</p>${body}<p style="margin-top:32px;color:var(--print-ink)">Class 1 Corner</p><script>window.onload=()=>{window.print()}<\/script></body></html>`);
  w.document.close();
}

const SUBJ_EMOJI: Record<string, string> = { English: "🔤", Maths: "🔢", Hindi: "📖", EVS: "🌱" };

function Index() {
  const [board, setBoard] = useStored<BoardKey | "">("c1-board", "", isBoardSelection);
  const [done, setDone] = useStored<string[]>("c1-done", [], isStringArray);
  const [bestAll, setBestAll] = useStored<Record<string, number>>("c1-best-levels", {}, isScoreMap);
  const [tab, setTab] = useState<"lectures" | "notes" | "quiz">("lectures");
  const [open, setOpen] = useState<Lecture | null>(null);
  const [level, setLevel] = useState<Level>("easy");
  const [qSubject, setQSubject] = useState<QuizSubject | null>(null);
  const [practice, setPractice] = useState<Record<number, number>>({});
  const [note, setNote] = useState<Note | null>(null);
  const [lang, setLang] = useLectureLang(qSubject?.toLowerCase() === "hindi" ? "hi" : "en");
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const questions = qSubject ? quizBank[qSubject][level] : [];
  const qKey = `${qSubject}-${level}`;
  const score = questions.filter((q, i) => answers[i] === q.a).length;

  const openLecture = (l: Lecture) => { setOpen(l); setPractice({}); };
  const finish = () => { if (open && !done.includes(open.id)) setDone([...done, open.id]); setOpen(null); };
  const submit = () => {
    if (Object.keys(answers).length < questions.length) return alert("Please answer all questions 🙂");
    setSubmitted(true); if (score > (bestAll[qKey] ?? 0)) setBestAll({ ...bestAll, [qKey]: score });
  };

  if (!board || !boards[board]) return <><AllCoursesLink /><ClassBoardPicker grade={1} onSelect={setBoard} /></>;
  const b = boards[board];

  return (
    <div className="h-auto whitespace-normal min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-6xl px-5 py-12">
        <Button variant="plain" onClick={() => (qSubject ? setQSubject(null) : setBoard(""))} className="h-auto whitespace-normal p-0 text-sm font-semibold text-primary">
          {qSubject ? `← ${b.name} subjects` : "← All boards"}
        </Button>
        {!qSubject ? (<>
          <h1 data-reveal className="mt-3 rounded-3xl border border-primary/10 bg-gradient-to-r from-primary/10 via-accent/20 to-secondary/10 px-4 py-7 text-center font-display text-3xl font-extrabold text-primary">🎒 Class 1 Corner · {b.name}</h1>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {quizSubjects.map((sub, i) => (
              <Button variant="plain" key={sub} onClick={() => { setQSubject(sub); setTab("lectures"); setAnswers({}); setSubmitted(false); }}
                data-reveal data-direction="scale" style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
                className="h-auto whitespace-normal flex-col rounded-2xl border border-primary/10 bg-card/80 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-primary hover:shadow-3d">
                <span className="class-cartoon-play text-5xl">{SUBJ_EMOJI[sub] ?? "📘"}</span>
                <span className="mt-3 block font-display text-2xl font-bold">{sub}</span>
                <span className="block text-sm text-muted-foreground">{lectures.filter((l) => l.subject === sub).length} lessons</span>
              </Button>
            ))}
          </div>
        </>) : (<>
          <h1 data-reveal className="mt-3 rounded-3xl border border-primary/10 bg-gradient-to-r from-primary/10 via-accent/20 to-secondary/10 px-4 py-6 font-display text-3xl font-extrabold sm:text-4xl">{SUBJ_EMOJI[qSubject] ?? "📘"} {qSubject}</h1>
          <div className="mt-4" data-reveal><LectureLangToggle lang={lang} onChange={setLang} /></div>
          <div role="tablist" data-reveal className="mt-3 grid grid-cols-3 gap-2 rounded-2xl border border-border bg-card/70 p-2">
            {([["lectures", "🎬 Lectures"], ["notes", "📄 PDF Notes"], ["quiz", "🧩 Quiz"]] as const).map(([k, t]) => (
              <Button variant="plain" key={k} role="tab" aria-selected={tab === k} onClick={() => setTab(k)}
                className={`h-auto whitespace-normal rounded-xl py-3 font-display text-sm font-bold sm:text-2xl ${tab === k ? "bg-primary text-primary-foreground shadow-pop" : "hover:bg-muted"}`}>{t}</Button>
            ))}
          </div>
          <section className="mt-6 space-y-3 py-6" data-reveal>
            {board === "cbse" && <PrimaryTextbook key={`${qSubject}-${tab}`} grade={1} subject={qSubject} step={tab === "lectures" ? "lecture" : tab === "notes" ? "pdf" : "quiz"} lang={lang} />}
            {tab === "lectures" && lectures.filter((l) => l.subject === qSubject).map((l, i) => (
              <Button variant="plain" key={l.id} onClick={() => openLecture(l)}
                data-reveal style={{ ["--reveal-delay" as string]: `${i * 50}ms` }}
                className="h-auto whitespace-normal flex w-full items-center justify-start gap-3 rounded-2xl border border-primary/10 bg-card/80 px-4 py-4 text-left font-semibold shadow-sm transition hover:border-primary hover:shadow-3d">
                <span className="text-xl">📺</span>
                <span className="flex-1"><span className="block font-display text-lg font-bold">Lesson {i + 1}</span><span className="block text-sm text-muted-foreground">{l.title}</span></span>
                {done.includes(l.id) && <span className="rounded-full bg-success px-3 py-1 text-xs font-bold text-primary-foreground">✓ Done</span>}
              </Button>
            ))}
            {tab === "notes" && notes.filter((x) => x.subject === qSubject && (!x.boards || x.boards.includes(board))).map((x, i) => (
              <div key={x.id} data-reveal style={{ ["--reveal-delay" as string]: `${i * 50}ms` }} className="flex flex-wrap items-center gap-3 rounded-2xl border border-primary/10 bg-card/80 px-4 py-4 shadow-sm">
                <span className="text-xl">📄</span>
                <span className="flex-1"><span className="block font-display text-lg font-bold">Lesson {i + 1} PDF</span><span className="block text-sm text-muted-foreground">{x.title}</span></span>
                <Button variant="plain" onClick={() => setNote(x)} className="h-auto rounded-full bg-muted px-4 py-1.5 text-sm font-bold">👁 View</Button>
                <Button variant="plain" onClick={() => printNote(x, b.name)} className="h-auto rounded-full border-2 border-primary px-4 py-1.5 text-sm font-bold text-primary">⬇ PDF</Button>
              </div>
            ))}
            {tab === "notes" && !notes.some((x) => x.subject === qSubject && (!x.boards || x.boards.includes(board))) && <p className="rounded-lg bg-muted p-6 text-center">Notes coming soon 📚</p>}
            {tab === "quiz" && (<>
              <div className="flex flex-wrap gap-2">
                {(Object.keys(levels) as Level[]).map((k) => (
                  <Button variant="plain" key={k} onClick={() => { setLevel(k); setAnswers({}); setSubmitted(false); }} className={`h-auto whitespace-normal rounded-full px-5 py-2 font-bold ${level === k ? "bg-primary text-primary-foreground shadow-pop" : "bg-muted"}`}>
                    {levels[k].emoji} {levels[k].label} {bestAll[`${qSubject}-${k}`] != null && <span className="opacity-80">• best {bestAll[`${qSubject}-${k}`]}</span>}
                  </Button>
                ))}
              </div>
              <div className="mt-6 space-y-5">
                {questions.map((q, i) => (
                  <div key={i} data-reveal style={{ ["--reveal-delay" as string]: `${i * 50}ms` }} className="rounded-2xl border border-primary/10 bg-card/80 p-6 shadow-sm">
                    <p className="text-lg font-bold">{i + 1}. {q.q}</p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      {q.options.map((o, j) => {
                        const sel = answers[i] === j;
                        const st = submitted ? (j === q.a ? "bg-success text-primary-foreground" : sel ? "bg-destructive text-destructive-foreground" : "bg-muted") : sel ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-accent";
                        return <Button variant="plain" key={o} disabled={submitted} onClick={() => setAnswers({ ...answers, [i]: j })} className={`h-auto whitespace-normal rounded-full px-5 py-2 font-bold transition ${st}`}>{o}</Button>;
                      })}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                {submitted ? (<div>
                  <p className="font-display text-3xl">{score === questions.length ? "🏆" : "⭐"} You: {score} / {questions.length}</p>
                  <Button variant="plain" onClick={() => { setAnswers({}); setSubmitted(false); }} className="h-auto mt-4 rounded-full bg-secondary px-6 py-3 font-bold text-secondary-foreground">Try Again</Button>
                </div>) : (
                  <Button variant="plain" onClick={submit} className="h-auto rounded-full bg-primary px-8 py-3 text-lg font-bold text-primary-foreground shadow-pop">Submit Quiz</Button>
                )}
              </div>
            </>)}
          </section>
        </>)}
      </main>

      <footer className="h-auto whitespace-normal mt-12 border-t-2 border-border py-8 text-center text-sm text-muted-foreground">© 2026 Class 1 Corner • Happy Learning 🌟</footer>

      {open && (
        <Modal onClose={() => { setOpen(null); }}>
          <p className="h-auto whitespace-normal text-sm font-bold uppercase text-primary">{open.subject}</p>
          <h3 className="h-auto whitespace-normal mb-4 font-display text-2xl">{open.title}</h3>
          {lang === "hi" ? <HindiVideo query={`class 1 ${open.subject} ${open.title} in hindi`} /> : <VideoPlayer url={open.video} onEnded={() => undefined} />}
          <div className="h-auto whitespace-normal mt-5 space-y-3">
            <p className="h-auto whitespace-normal font-display text-xl">✏️ Practice questions</p>
            {open.practice.map((q, i) => (
              <div key={i} className="h-auto whitespace-normal rounded-lg bg-muted p-4">
                <p className="h-auto whitespace-normal text-xs font-bold uppercase text-primary">{q.type}</p>
                <p className="h-auto whitespace-normal font-bold">{i + 1}. {q.q}</p>
                <div className="h-auto whitespace-normal mt-2 flex flex-wrap gap-2">
                  {q.options.map((o, j) => {
                    const picked = practice[i];
                    const st = picked == null ? "bg-card hover:bg-accent" : j === q.a ? "bg-success text-primary-foreground" : picked === j ? "bg-destructive text-destructive-foreground" : "bg-card";
                    return <Button variant="plain" key={o} disabled={picked != null} onClick={() => { setPractice({ ...practice, [i]: j }); }} className={`h-auto whitespace-normal rounded-full px-4 py-1.5 font-bold ${st}`}>{o}</Button>;
                  })}
                </div>
              </div>
            ))}
          </div>
          <div className="h-auto whitespace-normal mt-4 flex items-center justify-between gap-2">
            <span className="h-auto whitespace-normal text-sm text-muted-foreground">{done.includes(open.id) ? "✓ Already completed" : `Answered ${Object.keys(practice).length}/${open.practice.length} • Score ${open.practice.filter((q, i) => practice[i] === q.a).length}`}</span>
            <Button variant="plain" onClick={finish} className="h-auto whitespace-normal rounded-full bg-success px-5 py-2 font-bold text-primary-foreground">✓ Mark Complete</Button>
          </div>
        </Modal>
      )}

      {note && <NoteView note={note} lang={lang} label={b.name} onClose={() => setNote(null)} />}
    </div>
  );
}

function Modal({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  return (
    <div onClick={onClose} className="h-auto whitespace-normal fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 p-4">
      <div onClick={(e) => e.stopPropagation()} className="h-auto whitespace-normal relative w-full max-h-[92vh] max-w-3xl overflow-y-auto rounded-lg bg-card p-6 shadow-pop">
        <Button variant="plain" onClick={onClose} aria-label="Close" className="h-auto whitespace-normal absolute right-4 top-4 rounded-full bg-muted px-3 py-1 font-bold">✕</Button>
        {children}
      </div>
    </div>
  );
}

function VideoPlayer({ url, onEnded }: { url: string; onEnded: () => void }) {
  if (!url) return <div className="h-auto whitespace-normal flex aspect-video items-center justify-center rounded-lg bg-muted">Video coming soon</div>;
  const yt = youtubeId(url);
  if (yt) return <LiteYouTube id={yt} />;
  return <video key={url} src={url} controls autoPlay playsInline onEnded={onEnded} className="h-auto whitespace-normal aspect-video w-full rounded-lg bg-foreground" />;
}

function NoteView({ note, lang, label, onClose }: { note: Note; lang: LectureLang; label: string; onClose: () => void }) {
  const src = [note.title, ...note.sections.map((s) => s.heading)];
  const { texts, loading } = useTranslated(src, lang);
  const n: Note = { ...note, title: texts[0] ?? note.title, sections: note.sections.map((s, i) => ({ ...s, heading: texts[i + 1] ?? s.heading })) };
  return (
    <Modal onClose={onClose}>
      <p className="text-sm font-bold uppercase text-primary">{n.subject}</p>
      <h3 className="font-display text-2xl">{n.title}</h3>
      {loading && <p className="mt-2 text-sm text-muted-foreground">हिंदी में बदल रहे हैं…</p>}
      <div className="my-5 space-y-5">
        {n.sections.map((sec, k) => (
          <div key={k}>
            <p className="mb-2 font-display text-xl text-primary">{sec.heading}</p>
            <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(auto-fit, minmax(72px, 1fr))` }}>
              {sec.items.map((it) => <div key={it} className="rounded-xl bg-muted px-2 py-2 text-center font-bold">{it}</div>)}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end gap-2">
        <Button variant="plain" onClick={onClose} className="h-auto rounded-full bg-muted px-5 py-2 font-bold">Close</Button>
        <Button variant="plain" disabled={loading} onClick={() => printNote(n, label)} className="h-auto rounded-full bg-primary px-5 py-2 font-bold text-primary-foreground">⬇ Download PDF</Button>
      </div>
    </Modal>
  );
}

function HindiVideo({ query }: { query: string }) {
  const { data, isLoading } = useQuery({ queryKey: ["lesson-videos", "hi", query], queryFn: () => findLessonVideos({ data: { query, lang: "hi", fallback: query.replace(/^class \d+ /, "") } }), staleTime: Infinity });
  if (isLoading) return <div className="aspect-video w-full animate-pulse rounded-lg bg-muted" />;
  const id = data?.ids?.[0];
  if (!id) return <p className="text-muted-foreground">हिंदी वीडियो अभी उपलब्ध नहीं है।</p>;
  return <LiteYouTube id={id} title="Hindi lecture video" />;
}
