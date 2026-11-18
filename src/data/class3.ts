import type { Board } from "@/data/types";
import { subject as cbseEnglish } from "./class3/cbse/english";
import { subject as cbseHindi } from "./class3/cbse/hindi";
import { subject as cbseMaths } from "./class3/cbse/maths";
import { subject as cbseEvs } from "./class3/cbse/evs";
import { subject as computer } from "./class3/shared/computer";
import { subject as icseEnglish } from "./class3/icse/english";
import { subject as icseHindi } from "./class3/icse/hindi";
import { subject as icseMaths } from "./class3/icse/maths";
import { subject as icseScience } from "./class3/icse/science";
import { subject as icseSocial } from "./class3/icse/social";
import { subject as biharHindi } from "./class3/bihar/hindi";
import { subject as biharEnglish } from "./class3/bihar/english";
import { subject as biharMaths } from "./class3/bihar/maths";
import { subject as biharEvs } from "./class3/bihar/evs";

import { withLevels } from "./class3/levels";

export type { Quiz, Chapter, Subject, Board } from "@/data/types";

const raw: Board[] = [
  { id: "cbse", name: "CBSE", full: "Central Board of Secondary Education", subjects: [cbseEnglish, cbseHindi, cbseMaths, cbseEvs, computer] },
  { id: "icse", name: "ICSE", full: "Indian Certificate of Secondary Education", subjects: [icseEnglish, icseHindi, icseMaths, icseScience, icseSocial, computer] },
  { id: "bihar", name: "State Board", full: "Bihar School Examination Board", subjects: [biharHindi, biharEnglish, biharMaths, biharEvs] },
];

export const boards: Board[] = raw.map((b) => ({ ...b, subjects: b.subjects.map(withLevels) }));

export const getBoard = (id: string) => boards.find((b) => b.id === id);
export const getSubject = (b: string, s: string) => getBoard(b)?.subjects.find((x) => x.id === s);
export const youtubeSearch = (board: string, subject: string, chapter: string) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(`class 3 ${board} ${subject} ${chapter}`)}`;
