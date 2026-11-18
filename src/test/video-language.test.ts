import { describe, it, expect } from "vitest";
import { matchesLectureLanguage as m } from "@/lib/classes/video-language";
describe("lecture video language", () => {
  it("English mode rejects Hindi titles", () => { expect(m({ title: "Arrays in Hindi", channel: "X" }, "en")).toBe(false); expect(m({ title: "ऐरे क्या है", channel: "X" }, "en")).toBe(false); });
  it("English mode keeps English titles", () => { expect(m({ title: "Arrays explained", channel: "MIT" }, "en")).toBe(true); });
  it("Hindi mode requires a Hindi signal", () => { expect(m({ title: "Arrays explained", channel: "MIT" }, "hi")).toBe(false); expect(m({ title: "Arrays हिंदी में", channel: "X" }, "hi")).toBe(true); });
});
