import { describe, it, expect } from "vitest";
import { boardOptions, isAvailableBoard } from "@/lib/classes/board-options";

describe("Class board options", () => {
  it("offers exactly three existing curricula", () => {
    expect(boardOptions.map(b => b.id)).toEqual(["cbse", "icse", "bihar"]);
    expect(boardOptions.every(b => b.available && isAvailableBoard(b.id))).toBe(true);
  });
  it("keeps removed state curricula unavailable", () => {
    for (const id of ["up", "delhi", "telangana", "andhra"]) {
      expect(boardOptions.some(b => b.id === id)).toBe(false);
      expect(isAvailableBoard(id)).toBe(false);
    }
  });
});
