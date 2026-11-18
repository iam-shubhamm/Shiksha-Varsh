export type VideoCandidate = { id: string; title: string; channel: string; snippet: string; seconds: number };
const DEVANAGARI = /[\u0900-\u097F]/;
const HINDI_WORD = /\b(hindi|hinglish)\b|हिंदी|हिन्दी/i;
const OTHER_SCRIPT = /[\u0600-\u06FF\u0980-\u0DFF\u0E00-\u0E7F\u3040-\u30FF\u4E00-\u9FFF\uAC00-\uD7AF\u0400-\u04FF]/;
/** Title/channel pre-check: English keeps no Hindi signals at all; Hindi requires a clear Hindi signal. */
export function matchesLectureLanguage(c: Pick<VideoCandidate, "title" | "channel">, lang: "en" | "hi"): boolean {
  const text = `${c.title} ${c.channel}`;
  const hindi = DEVANAGARI.test(text) || HINDI_WORD.test(text);
  if (lang === "hi") return hindi;
  return !hindi && !OTHER_SCRIPT.test(text);
}
