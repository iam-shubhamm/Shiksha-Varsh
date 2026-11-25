import { LiteYouTube } from "@/components/LiteYouTube";
import { LectureLangToggle, useLectureLang, useTranslated, type LectureLang } from "@/components/LectureLang";
import { Button } from "@/components/ui/button";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { findLessonVideos } from "@/lib/classes/video.functions";
import { useLang } from "@/lib/classes/class3-i18n";
import { getBoard, getSubject, youtubeSearch, type Chapter } from "@/data/class3";

export const Route = createFileRoute("/class3/$board_/$subject")({
  loader: ({ params }) => {
    if (!getSubject(params.board, params.subject)) throw notFound();
    return { board: params.board, subject: params.subject };
  },
  head: ({ params }) => {
    const b = getBoard(params.board)?.name ?? "";
    const s = getSubject(params.board, params.subject)?.name ?? "Subject";
    return {
      meta: [
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { title: `Class 3 ${b} ${s} — Lecture, PDF, Quiz` },
        { name: "description", content: `Class 3 ${b} ${s}: video lecture, notes PDF and quiz.` },
        { property: "og:title", content: `Class 3 ${b} ${s}` },
        { property: "og:description", content: `Lecture, PDF and quiz — Class 3 ${s}` },
      ],
    };
  },
  component: SubjectPage,
});

type Step = "lecture" | "pdf" | "quiz";
const steps: { id: Step; label: string }[] = [
  { id: "lecture", label: "🎬 Lectures" },
  { id: "pdf", label: "📄 PDF Notes" },
  { id: "quiz", label: "🧩 Quiz" },
];

function SubjectPage() {
  const { board: bId, subject: sId } = Route.useLoaderData();
  const board = getBoard(bId);
  const subject = getSubject(bId, sId);
  const [chapterId, setChapterId] = useState<string | null>(null);
  const [step, setStep] = useState<Step>("lecture");
  const [printAll, setPrintAll] = useState(false);
  const { t } = useLang();
  const [lang, setLang] = useLectureLang(subject?.id === "hindi" ? "hi" : "en");
  if (!board || !subject) return null;
  const chapter = subject.chapters.find((c) => c.id === chapterId);

  return (
    <><main className="h-auto whitespace-normal mx-auto max-w-6xl px-5 py-12 print:p-0">
      <Link to="/class3/$board" params={{ board: bId }} className="h-auto whitespace-normal text-sm font-semibold text-primary print:hidden">
        ← {board.id === "bihar" ? t("bihar") : board.name} {t("subjectsBack")}
      </Link>
      <div className="h-auto whitespace-normal mt-2 flex flex-wrap items-center justify-between gap-3 print:hidden" data-reveal>
        <h1 className="h-auto whitespace-normal font-display text-4xl font-extrabold">{subject.emoji} {subject.name}</h1>
        <Button variant="plain" onClick={() => { setPrintAll(true); setTimeout(() => { window.print(); setPrintAll(false); }, 50); }}
          className="h-auto whitespace-normal rounded-lg border-2 border-foreground bg-primary px-4 py-2 font-bold text-primary-foreground shadow-pop">
          {t("downloadAll")}
        </Button>
      </div>
      {printAll && (
        <div className="h-auto whitespace-normal hidden print:block">
          <h1 className="h-auto whitespace-normal font-display text-3xl font-extrabold">Class 3 · {board.name} · {subject.name}</h1>
          {subject.chapters.map((c, i) => (
            <div key={c.id} className="h-auto whitespace-normal mt-6 break-inside-avoid">
              <h2 className="h-auto whitespace-normal font-display text-2xl font-bold">{i + 1}. {c.title}</h2>
              <Notes chapter={c} />
            </div>
          ))}
        </div>
      )}
      <div className={printAll ? "print:hidden" : ""}>

      <div className="mt-4 print:hidden" data-reveal><LectureLangToggle lang={lang} onChange={setLang} /></div>
      <div role="tablist" data-reveal className="h-auto whitespace-normal mt-3 grid grid-cols-3 gap-2 rounded-2xl border border-border bg-card/70 p-2 print:hidden">
        {steps.map((s) => (
          <Button variant="plain" key={s.id} role="tab" aria-selected={step === s.id} onClick={() => { setStep(s.id); setChapterId(null); }}
            className={`h-auto whitespace-normal rounded-lg py-3 font-display text-sm font-bold sm:text-2xl ${step === s.id ? "bg-primary text-primary-foreground shadow-pop" : "hover:bg-card"}`}>
            {s.label}
          </Button>
        ))}
      </div>

      <section className="h-auto whitespace-normal mt-6 py-6 print:border-0" data-reveal>
        {!chapter ? (
          <div className="h-auto whitespace-normal space-y-2">
            {subject.chapters.map((c, i) => (
              <Button variant="plain" key={c.id} onClick={() => setChapterId(c.id)}
                data-reveal data-direction="left" style={{ ["--reveal-delay" as string]: `${i * 40}ms` }}
                className="h-auto whitespace-normal flex w-full justify-start items-center gap-3 rounded-2xl border border-primary/10 bg-card/80 px-4 py-4 text-left font-semibold shadow-sm transition hover:border-primary hover:shadow-3d">
                <span className="h-auto whitespace-normal text-xl">{step === "lecture" ? "📺" : step === "pdf" ? "📄" : "🧠"}</span>
                <span>
                  <span className="h-auto whitespace-normal block font-display text-lg font-bold">Chapter {i + 1}{step === "pdf" ? " PDF" : step === "quiz" ? " Quiz" : ""}</span>
                  <span className="h-auto whitespace-normal block text-sm text-muted-foreground">{c.title}</span>
                </span>
              </Button>
            ))}
          </div>
        ) : (
          <>
            <Button variant="plain" onClick={() => setChapterId(null)} className="h-auto whitespace-normal mb-4 text-sm font-semibold text-primary print:hidden">← All chapters</Button>
            {step === "lecture" && <Lecture chapter={chapter} board={board.name} subject={subject.name} lang={lang} />}
            {step === "pdf" && <Pdf chapter={chapter} board={board.name} subject={subject.name} lang={lang} />}
            {step === "quiz" && <QuizLevels key={chapter.id} chapter={chapter} />}
          </>
        )}
      </section>
      </div>
    </main></>
  );
}

function Notes({ chapter, lang = "en" }: { chapter: Chapter; lang?: LectureLang }) {
  const { texts, loading } = useTranslated(chapter.notes, lang);
  if (loading) return <p className="mt-4 text-sm text-muted-foreground">हिंदी में बदल रहे हैं…</p>;
  return (
    <ul className="h-auto whitespace-normal mt-4 space-y-3">
      {texts.map((n, i) => (
        <li key={i} className="h-auto whitespace-normal flex gap-3 rounded-lg bg-muted p-3"><span className="h-auto whitespace-normal font-bold text-primary">{i + 1}.</span>{n}</li>
      ))}
    </ul>
  );
}

function VideoPlayer({ query }: { query: string }) {
  const { t } = useLang();
  const { data, isLoading } = useQuery({
    queryKey: ["lesson-videos", query],
    queryFn: () => findLessonVideos({ data: { query, lang: /in hindi$/.test(query) ? "hi" : "en", fallback: query.replace(/^class 3 \S+ /, "") } }),
    staleTime: Infinity,
  });
  const [idx, setIdx] = useState(0);
  const ids = data?.ids ?? [];
  if (isLoading) return <div className="h-auto whitespace-normal mt-4 aspect-video w-full animate-pulse rounded-lg bg-muted" />;
  if (!ids.length) return <p className="h-auto whitespace-normal mt-4 text-muted-foreground">{t("noVideo")}</p>;
  return (
    <div className="h-auto whitespace-normal mt-4">
      <LiteYouTube id={ids[idx] ?? ""} className="border-2 border-foreground" />
      {ids.length > 1 && (
        <div className="h-auto whitespace-normal mt-2 flex flex-wrap gap-2">
          {ids.map((_, i) => (
            <Button variant="plain" key={i} onClick={() => setIdx(i)}
              className={`h-auto whitespace-normal rounded-full border-2 border-foreground px-3 py-0.5 text-sm font-semibold ${i === idx ? "bg-primary text-primary-foreground" : "bg-card"}`}>
              {t("video")} {i + 1}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}

function Lecture({ chapter, board, subject, lang }: { chapter: Chapter; board: string; subject: string; lang: LectureLang }) {
  const { t } = useLang();
  return (
    <div>
      <h2 className="h-auto whitespace-normal font-display text-2xl font-bold">📺 {chapter.title}</h2>
      <VideoPlayer key={chapter.id} query={`class 3 ${board} ${subject} ${chapter.title}${lang === "hi" ? " in hindi" : " in english"}`} />
      <a href={youtubeSearch(board, subject, chapter.title)} target="_blank" rel="noreferrer"
        className="h-auto whitespace-normal mt-3 inline-block text-sm font-semibold text-primary underline">
        {t("moreVideos")}
      </a>
      <h3 className="h-auto whitespace-normal mt-6 font-display text-xl font-bold">{t("textNotes")}</h3>
      <Notes chapter={chapter} lang={lang} />
    </div>
  );
}

function Pdf({ chapter, board, subject, lang }: { chapter: Chapter; board: string; subject: string; lang: LectureLang }) {
  const { t } = useLang();
  return (
    <div>
      <p className="h-auto whitespace-normal text-sm text-muted-foreground">Class 3 · {board} · {subject}</p>
      <h2 className="h-auto whitespace-normal font-display text-2xl font-bold">📄 {chapter.title} — {t("notes")}</h2>
      <Notes chapter={chapter} lang={lang} />
      <div className="h-auto whitespace-normal mt-6 flex flex-wrap gap-3 print:hidden">
        <Button variant="plain" onClick={() => window.print()} className="h-auto whitespace-normal rounded-lg border-2 border-foreground bg-primary px-5 py-3 font-bold text-primary-foreground shadow-pop">{t("download")}</Button>
      </div>
    </div>
  );
}

const levels = [
  { id: "easy", label: "🟢 Easy", from: 0, to: 10 },
  { id: "medium", label: "🟡 Medium", from: 10, to: 20 },
  { id: "hard", label: "🔴 Hard", from: 20, to: 30 },
] as const;

function QuizLevels({ chapter }: { chapter: Chapter }) {
  const [lvl, setLvl] = useState<(typeof levels)[number]["id"]>("easy");
  const L = levels.find((l) => l.id === lvl) ?? levels[0];
  const sub = { ...chapter, quiz: chapter.quiz.slice(L.from, L.to) };
  return (
    <div>
      <div className="h-auto whitespace-normal mb-5 grid grid-cols-3 gap-2">
        {levels.map((l) => (
          <Button variant="plain" key={l.id} onClick={() => setLvl(l.id)}
            className={`h-auto whitespace-normal rounded-lg border-2 border-foreground py-2 font-bold ${lvl === l.id ? "bg-primary text-primary-foreground" : "bg-background"}`}>
            {l.label}
          </Button>
        ))}
      </div>
      <QuizView key={lvl} chapter={sub} level={L.label} />
    </div>
  );
}

function QuizView({ chapter, level }: { chapter: Chapter; level: string }) {
  const { t } = useLang();
  const [picked, setPicked] = useState<(number | null)[]>(chapter.quiz.map(() => null));
  const [submitted, setSubmitted] = useState(false);
  const answered = picked.filter((p) => p !== null).length;
  const score = picked.filter((p, i) => p === chapter.quiz[i]?.answer).length;
  const reset = () => { setPicked(chapter.quiz.map(() => null)); setSubmitted(false); };
  return (
    <div>
      <h2 className="h-auto whitespace-normal font-display text-2xl font-bold">🧠 {chapter.title} · {level}</h2>
      <div className="h-auto whitespace-normal mt-4 space-y-5">
        {chapter.quiz.map((q, qi) => (
          <div key={qi}>
            <p className="h-auto whitespace-normal font-semibold">{qi + 1}. {q.q}</p>
            <div className="h-auto whitespace-normal mt-2 grid gap-2 sm:grid-cols-2">
              {q.options.map((o, oi) => {
                const p = picked[qi];
                const cls = !submitted
                  ? (oi === p ? "bg-primary text-primary-foreground" : "bg-card hover:bg-muted")
                  : oi === q.answer ? "bg-success text-primary-foreground"
                  : oi === p ? "bg-destructive text-destructive-foreground" : "bg-card opacity-60";
                return (
                  <Button variant="plain" key={oi} disabled={submitted}
                    onClick={() => setPicked((s) => s.map((v, i) => (i === qi ? oi : v)))}
                    className={`h-auto whitespace-normal rounded-lg border-2 border-foreground px-4 py-2 text-left font-semibold ${cls}`}>{o}</Button>
                );
              })}
            </div>
            {submitted && picked[qi] !== q.answer && (
              <p className="h-auto whitespace-normal mt-1 text-sm font-semibold text-success">✔ {q.options[q.answer]}</p>
            )}
          </div>
        ))}
      </div>
      {!submitted ? (
        <Button variant="plain" onClick={() => setSubmitted(true)}
          className="h-auto whitespace-normal mt-6 w-full rounded-lg border-2 border-foreground bg-primary py-3 font-display text-xl font-bold text-primary-foreground shadow-pop">
          Submit ({answered}/{chapter.quiz.length})
        </Button>
      ) : (
        <div className="h-auto whitespace-normal mt-6 flex items-center justify-between rounded-lg bg-accent p-4 font-display text-xl font-bold text-accent-foreground">
          Score: {score}/{chapter.quiz.length} {score === chapter.quiz.length ? "🎉" : "👍"}
          <Button variant="plain" onClick={reset} className="h-auto whitespace-normal rounded-lg bg-foreground px-4 py-1 text-base text-background">{t("retry")}</Button>
        </div>
      )}
    </div>
  );
}
