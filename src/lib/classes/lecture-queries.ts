import type { UpperSubject } from "@/data/upper/curriculum";

export type VideoLang = "en" | "hi";
export type LectureSearch = { query: string; fallback: string };
export type AdvancedLabel = { label: string };

// Turns placeholder paper names ("Physics Core Paper I", "Open Elective 2") into a searchable topic.
export function topicName(name: string, label: string) {
  const t = name.replace(/\b(Core Paper|Paper|Elective|Lab|Laboratory|Practical)\b.*$/i, "").replace(/\b(Professional|Open|Generic|Discipline Specific)\s*$/i, "").trim();
  return t || label.replace(/^\S+\s/, "");
}

/** The YouTube search used for one chapter lecture (Classes 1–2 textbooks, 4–10 and /learn courses). */
export function lectureSearch(grade: number, subject: UpperSubject, title: string | undefined, advanced?: AdvancedLabel): LectureSearch {
  return advanced
    ? { query: `${topicName(subject.name, advanced.label)} ${(title ?? "").replace(/^(Introduction to|Core Concepts of|Methods and Techniques in|Applications of|Problems and Case Studies in) /, "")}`, fallback: topicName(subject.name, advanced.label) }
    : { query: `class ${grade} ${subject.book} ${subject.name} ${title}`, fallback: `class ${grade} ${subject.name} ${title}` };
}

/** Saved-video key: the same lecture in the same language always maps to one stored row. */
export function videoCacheKey(query: string, lang: VideoLang) {
  return `${lang}:${String(query).slice(0, 200).replace(/\s+in (hindi|english)$/i, "")}`;
}
