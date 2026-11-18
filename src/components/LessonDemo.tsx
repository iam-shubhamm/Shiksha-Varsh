import { useState } from "react";
import { Download, ListChecks, CheckCircle2, XCircle, RotateCcw } from "lucide-react";
import { useT } from "@/lib/i18n";

const VIDEO_ID = "AA6RfgP-AHU"; // Khan Academy — The Pythagorean theorem intro

const QUIZ = [
  { q: "In a right triangle, the longest side is called the…", o: ["Base", "Hypotenuse", "Height", "Median"], a: 1 },
  { q: "Which formula is the Pythagorean theorem?", o: ["a + b = c", "a² − b² = c²", "a² + b² = c²", "2a + 2b = c"], a: 2 },
  { q: "Legs are 3 and 4. The hypotenuse is…", o: ["5", "6", "7", "12"], a: 0 },
  { q: "Hypotenuse is 13 and one leg is 5. The other leg is…", o: ["8", "10", "12", "18"], a: 2 },
  { q: "The theorem works for which triangles?", o: ["All triangles", "Only right triangles", "Only equilateral", "Only isosceles"], a: 1 },
];

export function LessonDemo() {
  const { t } = useT();
  const [ans, setAns] = useState<(number | null)[]>(QUIZ.map(() => null));
  const [done, setDone] = useState(false);
  const [msg, setMsg] = useState("");
  const score = QUIZ.reduce((s, q, i) => s + (ans[i] === q.a ? 1 : 0), 0);

  return (
    <div className="grid gap-5 lg:grid-cols-[1.2fr_1fr]">
      <div className="rounded-xl border bg-card p-3 shadow-3d">
        <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?rel=0&modestbranding=1`}
            title={t("lessonName")}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3 px-1">
          <div>
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">{t("demoTag")}</span>
            <p className="mt-1 font-display text-lg font-bold">{t("lessonName")}</p>
            <p className="text-xs text-muted-foreground">{t("lessonMeta")}</p>
          </div>
          <a href="/downloads/pythagorean-theorem-notes.pdf" download="pythagorean-theorem-notes.pdf"
            className="inline-flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground transition hover:-translate-y-0.5 hover:opacity-90">
            <Download className="h-4 w-4" /> {t("dlNotes")}
          </a>
        </div>
      </div>

      <div className="rounded-xl border bg-card p-4 shadow-3d">
        <div className="flex items-center gap-2">
          <ListChecks className="h-5 w-5 text-primary" />
          <div><p className="font-bold">{t("quizTitle")}</p><p className="text-xs text-muted-foreground">{t("quizSub")}</p></div>
        </div>
        <ol className="mt-3 max-h-[26rem] space-y-3 overflow-y-auto pr-1">
          {QUIZ.map((q, i) => (
            <li key={i} className="text-sm">
              <p className="font-medium">{i + 1}. {q.q}</p>
              <div className="mt-1.5 grid grid-cols-2 gap-1.5">
                {q.o.map((o, j) => {
                  const picked = ans[i] === j;
                  const state = done ? (j === q.a ? "border-secondary bg-secondary/15" : picked ? "border-destructive bg-destructive/10" : "") : picked ? "border-primary bg-primary/10" : "";
                  return (
                    <button key={j} disabled={done} onClick={() => setAns((a) => a.map((v, k) => (k === i ? j : v)))}
                      className={`rounded-md border px-2 py-1.5 text-left text-xs transition hover:border-primary ${state}`}>{o}</button>
                  );
                })}
              </div>
              {done && (ans[i] === q.a
                ? <p className="mt-1 flex items-center gap-1 text-xs text-secondary"><CheckCircle2 className="h-3.5 w-3.5" />{t("correct")}</p>
                : <p className="mt-1 flex items-center gap-1 text-xs text-destructive"><XCircle className="h-3.5 w-3.5" />{t("wrong")} {q.o[q.a]}</p>)}
            </li>
          ))}
        </ol>
        {msg && !done && <p className="mt-2 text-xs text-destructive">{msg}</p>}
        {done ? (
          <div className="animate-rise mt-4 flex items-center justify-between rounded-lg bg-muted p-3">
            <p className="text-sm">{t("scoreTxt")}: <span className="font-display text-2xl font-extrabold text-hero">{score}/{QUIZ.length}</span></p>
            <button onClick={() => { setAns(QUIZ.map(() => null)); setDone(false); }} className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"><RotateCcw className="h-3.5 w-3.5" />{t("retry")}</button>
          </div>
        ) : (
          <button onClick={() => (ans.includes(null) ? setMsg(t("pickAll")) : (setMsg(""), setDone(true)))}
            className="mt-4 w-full rounded-lg bg-primary py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90">{t("check")}</button>
        )}
      </div>
    </div>
  );
}
