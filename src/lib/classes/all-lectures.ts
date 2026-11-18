import { UPPER_GRADES, UPPER_BOARDS, getUpperSubjects, type UpperBoard } from "@/data/upper/curriculum";
import { getPrimarySubjects } from "@/data/primary-curriculum";
import { ADVANCED_COURSES } from "@/data/advanced/curriculum";
import { boards as class3Boards } from "@/data/class3";
import { lectures as class1Lectures } from "@/lib/classes/class1-content";
import { lectures as class2Lectures } from "@/lib/classes/class2-content";
import { lectureSearch, videoCacheKey, type VideoLang } from "@/lib/classes/lecture-queries";

export type LectureJob = { key: string; query: string; fallback: string; lang: VideoLang };

/** Every lecture video the site can show, in both languages, deduplicated by saved-video key. */
export function allLectureJobs(): LectureJob[] {
  const jobs = new Map<string, LectureJob>();
  const add = (query: string, fallback: string, lang: VideoLang) => {
    const key = videoCacheKey(query, lang);
    if (!jobs.has(key)) jobs.set(key, { key, query, fallback, lang });
  };
  const both = (s: { query: string; fallback: string }) => { add(s.query, s.fallback, "en"); add(s.query, s.fallback, "hi"); };
  for (const g of [1, 2]) for (const s of getPrimarySubjects(g)) for (const t of s.chapters) both(lectureSearch(g, s, t));
  for (const [g, list] of [[1, class1Lectures], [2, class2Lectures]] as const)
    for (const l of list) { const q = `class ${g} ${l.subject} ${l.title} in hindi`; add(q, q.replace(/^class \d+ /, "").replace(/ in hindi$/, ""), "hi"); }
  for (const b of class3Boards) for (const s of b.subjects) for (const c of s.chapters)
    for (const lang of ["en", "hi"] as const) { const q = `class 3 ${b.id} ${s.id} ${c.title}${lang === "hi" ? " in hindi" : " in english"}`; add(q, q.replace(/^class 3 \S+ /, ""), lang); }
  for (const g of UPPER_GRADES) for (const b of Object.keys(UPPER_BOARDS) as UpperBoard[]) for (const s of getUpperSubjects(g, b)) for (const t of s.chapters) both(lectureSearch(g, s, t));
  for (const c of ADVANCED_COURSES) for (const tr of c.tracks) for (const s of tr.subjects) for (const t of s.chapters) both(lectureSearch(c.level, s, t, { label: `${c.name} ${tr.name}` }));
  return [...jobs.values()];
}
