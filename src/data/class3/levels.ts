import type { Chapter, Quiz, Subject } from "@/data/types";

const isHi = (s: string) => /[\u0900-\u097F]/.test(s);
const blank = /_{3,}/;
const strip = (q: string) => q.replace(/^[^:]{0,60}:\s*/, "").replace(/^[“"]|[”"]$/g, "");

function place<T>(correct: T, others: T[], pos: number) {
  const o = others.slice(0, 3);
  o.splice(pos % 4, 0, correct);
  return o;
}

// Medium: same question, but distractors are other correct answers from this chapter (more confusing).
function medium(base: Quiz[], hi: boolean): Quiz[] {
  return base.map((q, i) => {
    const correct = (q.options[q.answer] ?? "");
    const pool = [
      ...base.filter((_, j) => j !== i).map((x) => (x.options[x.answer] ?? "")),
      ...q.options.filter((_, k) => k !== q.answer),
    ];
    const others = [...new Set(pool.filter((x) => x !== correct))];
    // rotate so each question gets different distractors
    const rot = others.slice(i % others.length).concat(others.slice(0, i % others.length));
    const pos = (i * 3 + 1) % 4;
    return { q: (hi ? "ध्यान से सोचें — " : "Think carefully — ") + q.q, options: place(correct, rot, pos), answer: pos };
  });
}

// Hard: find the one WRONG statement among four.
function hard(base: Quiz[], hi: boolean): Quiz[] {
  const make = (q: Quiz, ans: string) => {
    const s = strip(q.q);
    return blank.test(s) ? s.replace(blank, ans) : `${s} → ${ans}`;
  };
  const truths = base.map((q) => make(q, (q.options[q.answer] ?? "")));
  return base.map((q, i) => {
    const wrongOpt = (q.options[(q.answer + 1 + (i % 3)) % 4] ?? "");
    const lie = make(q, wrongOpt);
    const others = [1, 2, 3].map((d) => (truths[(i + d * 3) % truths.length] ?? "")).filter((t) => t !== lie);
    while (others.length < 3) others.push((truths[(i + others.length + 1) % truths.length] ?? ""));
    const pos = (i * 2 + 3) % 4;
    return {
      q: hi ? "इनमें से कौन-सा कथन गलत है?" : "Which one of these statements is WRONG?",
      options: place(lie, others, pos),
      answer: pos,
    };
  });
}

export function withLevels(s: Subject): Subject {
  return {
    ...s,
    chapters: s.chapters.map((c): Chapter => {
      const base = c.quiz.slice(0, 10);
      const hi = isHi(c.title + base[0]?.q);
      return { ...c, quiz: [...base, ...medium(base, hi), ...hard(base, hi)] };
    }),
  };
}
