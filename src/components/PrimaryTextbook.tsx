import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChapterView, usePrefetchChapterVideos, type Step } from "@/components/ChapterStudy";
import type { LectureLang } from "@/components/LectureLang";
import { getPrimarySubject } from "@/data/primary-curriculum";

// Official NCERT chapter list for CBSE Classes 1–2, shown before the existing practice lessons.
export function PrimaryTextbook({ grade, subject, step, lang }: { grade: 1 | 2; subject: string; step: Step; lang: LectureLang }) {
  const [idx, setIdx] = useState<number | null>(null);
  const book = getPrimarySubject(grade, subject.toLowerCase());
  usePrefetchChapterVideos(grade, book, lang);
  if (!book) return null;
  if (idx !== null) return <div><Button variant="plain" onClick={() => setIdx(null)} className="h-auto mb-4 p-0 text-sm font-semibold text-primary">← All chapters</Button><ChapterView key={`${idx}-${step}`} grade={grade} board="cbse" subject={book} idx={idx} step={step} lang={lang} /></div>;
  return <div className="space-y-2">
    <h2 className="font-display text-xl font-bold">📘 {book.book}</h2>
    {book.chapters.map((c, i) => <Button variant="plain" key={c} onClick={() => setIdx(i)} className="h-auto whitespace-normal flex w-full items-center justify-start gap-3 rounded-lg border-2 border-border bg-card px-4 py-4 text-left font-semibold shadow-pop hover:border-primary">
      <span className="text-xl">{step === "lecture" ? "📺" : step === "pdf" ? "📄" : "🧠"}</span>
      <span><span className="block font-display text-lg font-bold">Chapter {i + 1}{step === "pdf" ? " PDF" : step === "quiz" ? " Quiz" : ""}</span><span className="block text-sm text-muted-foreground">{c}</span></span>
    </Button>)}
    <h2 className="pt-6 font-display text-xl font-bold">✏️ Extra practice</h2>
  </div>;
}
