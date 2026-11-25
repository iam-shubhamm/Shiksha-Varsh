import { LiteYouTube } from "@/components/LiteYouTube";
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { useTranslated, type LectureLang } from "@/components/LectureLang";
import { findLessonVideos, getSavedLessonVideos } from "@/lib/classes/video.functions";
import { lectureSearch, videoCacheKey } from "@/lib/classes/lecture-queries";
import { getChapterPack, type ChapterPack } from "@/lib/classes/chapter-pack.functions";
import { getPrimarySubject } from "@/data/primary-curriculum";
import { getUpperSubject, UPPER_BOARDS, type UpperBoard, type UpperSubject } from "@/data/upper/curriculum";
export type Step = "lecture" | "pdf" | "quiz";
export type AdvancedStudyContext = { course: string; track: string; label: string };
function usePack(grade: number, board: string, subject: string, chapter: number, title: string | undefined, advanced?: AdvancedStudyContext) {
  return useQuery({ queryKey: ["chapter-pack", grade, advanced ? `${advanced.course}:${advanced.track}` : board === "icse" && grade >= 9 ? "icse" : "ncert", subject, chapter, title], queryFn: () => getChapterPack({ data: { grade, board, subject, chapter, ...(advanced ? { course: advanced.course, track: advanced.track } : {}) } }), staleTime: Infinity, retry: false });
}

const videoOptions = (query: string, lang: "en" | "hi", fallback: string) => ({ queryKey: ["lesson-videos", lang, query], queryFn: () => findLessonVideos({ data: { query, lang, fallback } }), staleTime: Infinity });

/** While the chapter list is on screen, finds each chapter's lecture videos one by one so a click plays instantly. */
export function usePrefetchChapterVideos(grade: number, subject: UpperSubject | undefined, lang: LectureLang, advanced?: AdvancedStudyContext) {
  const qc = useQueryClient();
  const l = lang === "hi" ? "hi" : "en";
  const key = subject ? `${subject.id}:${subject.chapters.join("|")}:${advanced?.course ?? ""}:${advanced?.track ?? ""}` : "";
  useEffect(() => {
    if (!subject) return;
    let stop = false;
    (async () => {
      const items = subject.chapters.map(title => lectureSearch(grade, subject, title, advanced));
      // One quick request fills every chapter whose video is already saved, so those clicks play instantly.
      const { videos } = await getSavedLessonVideos({ data: { keys: items.map(i => videoCacheKey(i.query, l)) } }).catch(() => ({ videos: {} as Record<string, string[]> }));
      if (stop) return;
      const missing = items.filter(i => {
        const ids = videos[videoCacheKey(i.query, l)];
        if (ids) qc.setQueryData(videoOptions(i.query, l, i.fallback).queryKey, { ids });
        return !ids;
      });
      for (const { query, fallback } of missing.slice(0, 15)) {
        if (stop) return;
        await qc.prefetchQuery(videoOptions(query, l, fallback)).catch(() => undefined);
      }
    })();
    return () => { stop = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qc, grade, l, key]);
}

export function ChapterView({ grade, board, subject, idx, step, lang, advanced }: { grade: number; board: UpperBoard; subject: UpperSubject; idx: number; step: Step; lang: LectureLang; advanced?: AdvancedStudyContext }) {
  const title = subject.chapters[idx];
  const { data: pack, isLoading, refetch, isFetching } = usePack(grade, board, subject.id, idx, title, advanced);
  const body = isLoading ? <p className="mt-4 animate-pulse rounded-lg bg-muted p-6 text-center text-muted-foreground">📚 Chapter tayaar ho raha hai… (pehli baar kuch samay lag sakta hai)</p>
    : !pack ? <div className="mt-4 rounded-lg border-2 border-dashed border-primary/30 bg-muted p-6 text-center">Notes abhi load nahi hue. <Button variant="plain" disabled={isFetching} onClick={() => refetch()} className="h-auto ml-2 rounded-full bg-primary px-4 py-1 font-bold text-primary-foreground">{isFetching ? "Loading…" : "Try again"}</Button></div>
    : null;
  if (step === "quiz") return <div><h2 data-reveal className="font-display text-2xl font-bold">🧠 {title}</h2>{body ?? <QuizLevels pack={pack as ChapterPack} />}</div>;
  return (
    <div>
      <p data-reveal className="text-sm text-muted-foreground">{advanced?.label ?? `Class ${grade} · ${UPPER_BOARDS[board]}`} · {subject.name}</p>
      <h2 data-reveal className="font-display text-2xl font-bold">{step === "lecture" ? "📺" : "📄"} Chapter {idx + 1}: {title}</h2>
      {step === "lecture" && <VideoPlayer lang={lang === "hi" ? "hi" : "en"} {...lectureSearch(grade, subject, title, advanced)} />}
      {step === "pdf"
        ? body ?? <PdfPreview pack={pack as ChapterPack} title={title} grade={grade} subject={subject.name} lang={subject.id === "hindi" ? "en" : lang} />
        : body ?? <Notes notes={(pack as ChapterPack).notes} lang={subject.id === "hindi" ? "en" : lang} />}
    </div>
  );
}

function PdfPreview({ pack, title, grade, subject, lang }: { pack: ChapterPack; title: string; grade: number; subject: string; lang: LectureLang }) {
  const { texts, loading } = useTranslated(pack.notes, lang);
  const download = () => printChapterPdf(title, grade, subject, texts);
  return (
    <div className="mt-5">
      <div className="overflow-hidden rounded-xl border-2 border-primary/20 bg-card shadow-3d print:border-0 print:shadow-none">
        <div className="flex items-center gap-2 border-b bg-primary px-5 py-3 text-primary-foreground print:border-0">
          <span className="text-xl">📄</span>
          <div><p className="text-xs font-bold uppercase tracking-wider">ShikshaVerse notes</p><p className="font-display font-bold">Class {grade} · {subject}</p></div>
        </div>
        <div className="p-5 print:p-0" data-reveal>
          <h3 className="font-display text-2xl font-bold">{title}</h3>
          {loading ? <p className="mt-4 text-sm text-muted-foreground">Notes translate ho rahe hain…</p> : (
            <ol className="mt-4 grid gap-3">{texts.map((note, i) => <li key={i} data-reveal data-direction="left" style={{ ["--reveal-delay" as string]: `${i * 45}ms` }} className="rounded-2xl border border-primary/10 bg-muted/60 p-3"><span className="mr-2 font-bold text-primary">{i + 1}.</span>{note}</li>)}</ol>
          )}
        </div>
      </div>
      <Button variant="plain" disabled={loading} onClick={download} className="h-auto mt-6 rounded-lg bg-primary px-5 py-3 font-bold text-primary-foreground shadow-pop print:hidden">⬇ Download / Print PDF</Button>
    </div>
  );
}

function printChapterPdf(title: string, grade: number, subject: string, notes: string[]) {
  const w = window.open("", "_blank");
  if (!w) return alert("Popup blocked – please allow popups to download.");
  w.document.write(`<html><head><meta charset="utf-8"><title>${title}</title><style>body{font-family:Arial,sans-serif;padding:32px;color:#172033}header{border-bottom:3px solid #2563eb;padding-bottom:12px;margin-bottom:24px}h1{font-size:26px;margin:8px 0}li{margin:10px 0;padding:12px;border:1px solid #dbe3f0;border-radius:8px;break-inside:avoid}ol{padding-left:24px}</style></head><body><header><strong>ShikshaVerse</strong><h1>${title}</h1><p>Class ${grade} · ${subject}</p></header><ol>${notes.map(n => `<li>${n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</li>`).join("")}</ol><script>window.onload=()=>window.print()<\\/script></body></html>`);
  w.document.close();
}

function Notes({ notes, lang }: { notes: string[]; lang: LectureLang }) {
  const { texts, loading } = useTranslated(notes, lang);
  const [speaking, setSpeaking] = useState(false);
  useEffect(() => () => { window.speechSynthesis?.cancel(); }, []);
  const listen = () => {
    const synth = window.speechSynthesis; if (!synth) return;
    if (speaking) { synth.cancel(); setSpeaking(false); return; }
    const u = new SpeechSynthesisUtterance(texts.join(". "));
    u.lang = /[\u0900-\u097F]/.test(texts.join("")) ? "hi-IN" : "en-IN"; u.rate = 0.95;
    u.onend = () => setSpeaking(false); synth.cancel(); synth.speak(u); setSpeaking(true);
  };
  if (loading) return <p className="mt-4 text-sm text-muted-foreground">हिंदी में बदल रहे हैं…</p>;
  return (
    <div className="mt-5">
      <div className="flex items-center justify-between gap-2 print:hidden" data-reveal>
        <h3 className="font-display text-xl font-bold">📝 Notes</h3>
        <Button variant="plain" onClick={listen} aria-pressed={speaking} className="h-auto rounded-full border-2 border-primary px-4 py-1.5 text-sm font-bold text-primary">{speaking ? "⏹ Stop audio" : "🔊 Listen"}</Button>
      </div>
      <ul className="mt-3 space-y-3">{texts.map((n, i) => <li key={i} data-reveal data-direction="left" style={{ ["--reveal-delay" as string]: `${i * 45}ms` }} className="flex gap-3 rounded-2xl border border-primary/10 bg-muted/70 p-3"><span className="font-bold text-primary">{i + 1}.</span>{n}</li>)}</ul>
    </div>
  );
}

function VideoPlayer({ query, lang, fallback }: { query: string; lang: "en" | "hi"; fallback: string }) {
  const { data, isLoading } = useQuery(videoOptions(query, lang, fallback));
  const [i, setI] = useState(0);
  const ids = data?.ids ?? [];
  if (isLoading) return <div className="mt-4 aspect-video w-full animate-pulse rounded-lg bg-muted" />;
  if (!ids.length) return (
    <div className="mt-4 overflow-hidden rounded-xl border-2 border-primary/20 bg-card shadow-3d">
      <div className="relative aspect-video min-h-52 overflow-hidden bg-gradient-to-br from-primary/15 via-secondary/10 to-accent">
        <div className="absolute inset-0 grid place-items-center">
          <div className="text-center">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-red-600 text-2xl text-white shadow-lg">▶</div>
            <p className="mt-3 font-display text-lg font-bold">Video lecture preview</p>
            <p className="mt-1 max-w-md px-4 text-sm text-muted-foreground">YouTube par best matching lecture open karein</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 p-4">
        <p className="text-sm font-semibold">{query}</p>
        <a className="h-auto rounded-lg bg-primary px-4 py-2 text-sm font-bold text-primary-foreground" target="_blank" rel="noreferrer" href={`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`}>▶ Open YouTube</a>
      </div>
    </div>
  );
  return (
    <div className="mt-4 print:hidden">
      <LiteYouTube id={ids[i] ?? ""} className="border-2 border-border" />
      {ids.length > 1 && <div className="mt-2 flex flex-wrap gap-2">{ids.map((_, k) => <Button variant="plain" key={k} onClick={() => setI(k)} className={`h-auto rounded-full px-3 py-0.5 text-sm font-semibold ${k === i ? "bg-primary text-primary-foreground" : "bg-muted"}`}>Video {k + 1}</Button>)}</div>}
    </div>
  );
}

const levels = [{ id: "easy", label: "🟢 Easy", from: 0, to: 5 }, { id: "medium", label: "🟡 Medium", from: 5, to: 10 }, { id: "hard", label: "🔴 Hard", from: 10, to: 15 }] as const;

function QuizLevels({ pack }: { pack: ChapterPack }) {
  const [lvl, setLvl] = useState(0);
  const L = levels[lvl] ?? levels[0];
  return (
    <div className="mt-4">
      <div className="mb-5 grid grid-cols-3 gap-2">{levels.map((l, k) => <Button variant="plain" key={l.id} onClick={() => setLvl(k)} className={`h-auto rounded-lg border-2 border-border py-2 font-bold ${lvl === k ? "bg-primary text-primary-foreground" : "bg-card"}`}>{l.label}</Button>)}</div>
      <Quiz key={lvl} quiz={pack.quiz.slice(L.from, L.to)} />
    </div>
  );
}

function Quiz({ quiz }: { quiz: ChapterPack["quiz"] }) {
  const [picked, setPicked] = useState<(number | null)[]>(quiz.map(() => null));
  const [done, setDone] = useState(false);
  const score = picked.filter((p, i) => p === quiz[i]?.answer).length;
  return (
    <div>
      <div className="space-y-5">
        {quiz.map((q, qi) => (
          <div key={qi} data-reveal data-direction="scale" style={{ ["--reveal-delay" as string]: `${qi * 45}ms` }} className="rounded-2xl border border-primary/10 bg-card/80 p-4 shadow-sm">
            <p className="font-semibold">{qi + 1}. {q.q}</p>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {q.options.map((o, oi) => {
                const p = picked[qi];
                const cls = !done ? (oi === p ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-accent") : oi === q.answer ? "bg-success text-primary-foreground" : oi === p ? "bg-destructive text-destructive-foreground" : "bg-muted opacity-60";
                return <Button variant="plain" key={oi} disabled={done} onClick={() => setPicked((s) => s.map((v, i) => (i === qi ? oi : v)))} className={`h-auto whitespace-normal justify-start rounded-lg px-4 py-2 text-left font-semibold ${cls}`}>{o}</Button>;
              })}
            </div>
          </div>
        ))}
      </div>
      {!done ? <Button variant="plain" onClick={() => setDone(true)} className="h-auto mt-6 w-full rounded-lg bg-primary py-3 font-display text-xl font-bold text-primary-foreground shadow-pop">Submit ({picked.filter((p) => p !== null).length}/{quiz.length})</Button>
        : <div className="mt-6 flex items-center justify-between rounded-lg bg-accent p-4 font-display text-xl font-bold text-accent-foreground">Score: {score}/{quiz.length} {score === quiz.length ? "🎉" : "👍"}<Button variant="plain" onClick={() => { setPicked(quiz.map(() => null)); setDone(false); }} className="h-auto rounded-lg bg-primary px-4 py-1 text-base text-primary-foreground">Retry</Button></div>}
    </div>
  );
}
