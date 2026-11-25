import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ChapterView, usePrefetchChapterVideos, type Step } from "@/components/ChapterStudy";
import { Button } from "@/components/ui/button";
import { LectureLangToggle, useLectureLang, useTranslated, type LectureLang } from "@/components/LectureLang";
import { getUpperSubject, isUpperBoard, UPPER_BOARDS, type UpperBoard, type UpperSubject } from "@/data/upper/curriculum";

export const Route = createFileRoute("/study/$grade/$board/$subject")({
  loader: ({ params }) => {
    if (!getUpperSubject(Number(params.grade), params.board, params.subject)) throw notFound();
    return { grade: Number(params.grade), board: params.board as UpperBoard, subject: params.subject };
  },
  head: ({ params }) => {
    const b = isUpperBoard(params.board) ? UPPER_BOARDS[params.board] : "";
    const s = getUpperSubject(Number(params.grade), params.board, params.subject)?.name ?? "Subject";
    return { meta: [
      { title: `Class ${params.grade} ${b} ${s} — Lectures, PDF Notes, Quiz` },
      { name: "description", content: `Class ${params.grade} ${b} ${s}: chapter-wise video lectures, PDF notes and quizzes.` },
      { property: "og:title", content: `Class ${params.grade} ${b} ${s}` },
      { property: "og:description", content: `Lectures, notes and quizzes for every chapter of Class ${params.grade} ${s}.` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ] };
  },
  component: SubjectPage,
});

const steps: { id: Step; label: string }[] = [{ id: "lecture", label: "🎬 Lectures" }, { id: "pdf", label: "📄 PDF Notes" }, { id: "quiz", label: "🧩 Quiz" }];

function SubjectPage() {
  const { grade, board, subject: sId } = Route.useLoaderData();
  const subject = getUpperSubject(grade, board, sId) as UpperSubject;
  const [step, setStep] = useState<Step>("lecture");
  const [idx, setIdx] = useState<number | null>(null);
  const [lang, setLang] = useLectureLang(subject.id === "hindi" ? "hi" : "en");
  usePrefetchChapterVideos(grade, subject, lang);
  return (
    <main className="mx-auto max-w-6xl px-5 py-12 print:p-0">
      <Link to="/study/$grade/$board" params={{ grade: String(grade), board }} className="text-sm font-semibold text-primary print:hidden">← {UPPER_BOARDS[board]} subjects</Link>
      <h1 data-reveal className="mt-3 rounded-3xl border border-primary/10 bg-gradient-to-r from-primary/10 via-accent/20 to-secondary/10 px-4 py-6 font-display text-3xl font-extrabold print:hidden sm:text-4xl">{subject.emoji} {subject.name}</h1>
      <p data-reveal className="mt-2 text-sm text-muted-foreground print:hidden">Class {grade} · {subject.book}</p>
      <div className="mt-4 print:hidden" data-reveal><LectureLangToggle lang={lang} onChange={setLang} /></div>
      <div role="tablist" data-reveal className="mt-3 grid grid-cols-3 gap-2 rounded-2xl border border-border bg-card/70 p-2 print:hidden">
        {steps.map((s) => (
          <Button variant="plain" key={s.id} role="tab" aria-selected={step === s.id} onClick={() => { setStep(s.id); setIdx(null); }}
            className={`h-auto whitespace-normal rounded-lg py-3 font-display text-sm font-bold sm:text-2xl ${step === s.id ? "bg-primary text-primary-foreground shadow-pop" : "hover:bg-card"}`}>{s.label}</Button>
        ))}
      </div>
      <section className="mt-6 py-6">
        {idx === null ? (
          <div className="space-y-2">
            {subject.chapters.map((c, i) => (
              <Button variant="plain" key={c} onClick={() => setIdx(i)}
                data-reveal data-direction="left" style={{ ["--reveal-delay" as string]: `${i * 40}ms` }}
                className="h-auto whitespace-normal flex w-full items-center justify-start gap-3 rounded-2xl border border-primary/10 bg-card/80 px-4 py-4 text-left font-semibold shadow-sm transition hover:border-primary hover:shadow-3d">
                <span className="text-xl">{step === "lecture" ? "📺" : step === "pdf" ? "📄" : "🧠"}</span>
                <span><span className="block font-display text-lg font-bold">Chapter {i + 1}{step === "pdf" ? " PDF" : step === "quiz" ? " Quiz" : ""}</span><span className="block text-sm text-muted-foreground">{c}</span></span>
              </Button>
            ))}
          </div>
        ) : (
          <>
            <Button variant="plain" onClick={() => setIdx(null)} className="h-auto mb-4 p-0 text-sm font-semibold text-primary print:hidden">← All chapters</Button>
            <ChapterView key={`${idx}-${step}`} grade={grade} board={board} subject={subject} idx={idx} step={step} lang={lang} />
          </>
        )}
      </section>
    </main>
  );
}

