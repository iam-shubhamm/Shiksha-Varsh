export const boardOptions = [
  { id: "cbse", name: "CBSE", full: "Central Board of Secondary Education", emoji: "🏫", label: "Fun & Play", available: true },
  { id: "icse", name: "ICSE", full: "Indian Certificate of Secondary Education", emoji: "🎓", label: "Creative Learning", available: true },
  { id: "bihar", name: "State Board", full: "State curriculum · SCERT Bihar", emoji: "🪁", label: "देसी पढ़ाई", available: true },
];
export type AvailableBoard = "cbse" | "icse" | "bihar";
export function isAvailableBoard(id: string): id is AvailableBoard {
  return id === "cbse" || id === "icse" || id === "bihar";
}