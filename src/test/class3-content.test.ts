import { describe, expect, it } from "vitest";
import { boards } from "@/data/class3";

describe("Class 3 content", () => {
  it("has CBSE, ICSE and Bihar Board", () => {
    expect(boards.map((b) => b.id)).toEqual(["cbse", "icse", "bihar"]);
  });

  it("every chapter has 30 quiz (10 easy, 10 medium, 10 hard) questions with 4 options and a valid answer", () => {
    for (const b of boards)
      for (const s of b.subjects)
        for (const c of s.chapters) {
          expect(c.quiz.length, `${b.id}/${s.id}/${c.id}`).toBe(30);
          for (const q of c.quiz) {
            expect(q.options.length).toBe(4);
            expect(q.answer).toBeGreaterThanOrEqual(0);
            expect(q.answer).toBeLessThan(4);
            expect(new Set(q.options).size, q.q).toBe(4);
          }
        }
  });
});
