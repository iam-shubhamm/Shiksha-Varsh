import type { Chapter } from "@/data/types";

// Each fact: sentence with one "___", correct answer, three distractors.
export type Fact = readonly [string, string, string, string, string];

// Fact2: [before, correct, after, wrong1, wrong2, wrong3]
export type Fact2 = [string, string, string, string, string, string];

export function makeChapter2(id: string, title: string, facts: Fact2[], q1: string, q2: string): Chapter {
  return {
    id,
    title,
    notes: facts.map(([b, c, a]) => b + c + a),
    quiz: facts.flatMap(([b, c, a, ...wrong], i) =>
      [0, 1].map((kind) => {
        const answer = (i + kind + 1) % 4;
        const choices = [...wrong];
        choices.splice(answer, 0, c);
        return {
          q: kind === 0 ? `${q1}: ${b}____${a}` : `${q2}: “${b}____${a}”`,
          options: choices.map((x) => (kind === 0 ? x : b + x + a)),
          answer,
        };
      }),
    ),
  };
}

export function makeChapter(id: string, title: string, facts: Fact[], lang: "en" | "hi" = "en"): Chapter {
  const fill = (s: string, w: string) => s.replace("___", w);
  return {
    id,
    title,
    notes: facts.map(([s, c]) => fill(s, c)),
    quiz: facts.flatMap(([s, c, ...wrong], i) => {
      const answer = i % 4;
      const options = [...wrong];
      options.splice(answer, 0, c);
      const sa = (i + 2) % 4;
      const statements = wrong.map((w) => fill(s, w));
      statements.splice(sa, 0, fill(s, c));
      return [
        { q: lang === "hi" ? `सही शब्द चुनकर वाक्य पूरा करें: ${s}` : `Fill in the blank: ${s}`, options, answer },
        { q: lang === "hi" ? `‘${title}’ के बारे में सही कथन कौन-सा है?` : `Which statement is correct about "${title}"?`, options: statements, answer: sa },
      ];
    }),
  };
}
