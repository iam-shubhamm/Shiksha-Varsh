export type Quiz = { q: string; options: string[]; answer: number };
export type Chapter = { id: string; title: string; notes: string[]; quiz: Quiz[] };
export type Subject = { id: string; name: string; emoji: string; chapters: Chapter[] };
export type Board = { id: string; name: string; full: string; subjects: Subject[] };
