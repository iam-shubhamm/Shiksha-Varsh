import { describe, expect, it } from "vitest";
import { COURSES } from "@/lib/edu-data";
import { lectures as class1 } from "@/lib/classes/class1-content";
import { lectures as class2 } from "@/lib/classes/class2-content";
import { boards } from "@/data/class3";

describe("Uploaded class websites", () => {
  it("opens the Class 1 website from Class 1", () => {
    expect(COURSES.find(c => c.name === "Class 1")?.link["en"]).toBe("/class1");
    expect(class1[0]?.title).toBe("A to Z Alphabet");
  });
  it("opens the Class 2 website from Class 2", () => {
    expect(COURSES.find(c => c.name === "Class 2")?.link["en"]).toBe("/class2");
    expect(class2[0]?.title).toBe("Naming Words (Nouns)");
  });
  it("opens the Class 3 website from Class 3", () => {
    expect(COURSES.find(c => c.name === "Class 3")?.link["en"]).toBe("/class3");
    expect(boards.map(b => b.id)).toEqual(["cbse", "icse", "bihar"]);
  });
});