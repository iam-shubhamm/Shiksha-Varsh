import { generateResponse } from "@lovable.dev/ai-gateway";
import { matchesLectureLanguage, type VideoCandidate } from "@/lib/classes/video-language";
import { videoCacheKey, type VideoLang } from "@/lib/classes/lecture-queries";

const AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36";

export function collect(node: unknown, out: VideoCandidate[]) {
  if (Array.isArray(node)) { for (const x of node) collect(x, out); return; }
  if (!node || typeof node !== "object") return;
  const o = node as Record<string, any>;
  const v = o["videoRenderer"];
  if (v?.videoId) {
    const len = String(v.lengthText?.simpleText ?? "");
    const seconds = len.split(":").reduce((a, p) => a * 60 + Number(p), 0);
    out.push({ id: v.videoId, title: v.title?.runs?.map((r: any) => r.text).join("") ?? "", channel: v.ownerText?.runs?.[0]?.text ?? "", snippet: (v.detailedMetadataSnippets?.[0]?.snippetText?.runs ?? []).map((r: any) => r.text).join(""), seconds });
  }
  for (const x of Object.values(o)) collect(x, out);
}

export async function search(query: string, tries = 2): Promise<VideoCandidate[]> {
  const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}&hl=en`;
  let res: Response | null = null;
  for (let t = 0; t < tries && !res?.ok; t++) {
    if (t) await new Promise(r => setTimeout(r, 1500));
    // The consent cookie stops YouTube's cookie-banner redirect loop.
    res = await fetch(url, { signal: AbortSignal.timeout(10000), headers: { "User-Agent": AGENT, "Accept-Language": "en", Cookie: "CONSENT=YES+1; SOCS=CAI" } }).catch(() => null);
  }
  if (!res?.ok) return [];
  const m = (await res.text()).match(/var ytInitialData = (\{[\s\S]*?\});<\/script>/);
  if (!m) return [];
  const out: VideoCandidate[] = [];
  collect(JSON.parse(m[1]!), out);
  const seen = new Set<string>();
  return out.filter(c => c.seconds >= 120 && !seen.has(c.id) && seen.add(c.id));
}

// Asks the AI to keep only videos whose SPOKEN language is the chosen one (catches Hinglish videos with English titles).
export async function confirmSpoken(list: VideoCandidate[], lang: VideoLang): Promise<string[] | null> {
  if (!list.length) return [];
  const rule = lang === "en"
    ? "spoken fully in English. Reject Hindi or Hinglish narration, even when the title is English (e.g. Indian channels that teach in Hindi such as Apna College, CodeWithHarry, Physics Wallah, Khan Academy Hindi)."
    : "spoken in Hindi (Hindi or Hindi-English mix narration). Reject videos narrated only in English or another language.";
  const prompt = `For each YouTube video decide if it is a lecture ${rule}\nIf unsure, reject. Return ONLY JSON {"keep": [videoIds in given order]}.\n${JSON.stringify(list.map(c => ({ id: c.id, title: c.title, channel: c.channel, snippet: c.snippet.slice(0, 160) })))}`;
  try {
    const res = await generateResponse({ model: "openai/gpt-6-astra", input: prompt });
    let raw = "";
    for (const item of (res.output ?? []) as Array<{ type: string; content?: Array<{ type: string; text?: string }> }>)
      if (item.type === "message") for (const c of item.content ?? []) if (c.type === "output_text") raw += c.text ?? "";
    const keep = JSON.parse(raw.match(/\{[\s\S]*\}/)?.[0] ?? "null")?.keep;
    return Array.isArray(keep) ? keep.filter((id: unknown) => list.some(c => c.id === id)) : null;
  } catch (e) { console.error("video language check failed", e); return null; }
}

async function admin() {
  return (await import("@/integrations/supabase/client.server")).supabaseAdmin;
}

/** Reads many saved lectures in one go. */
export async function readSavedVideos(keys: string[]): Promise<Record<string, string[]>> {
  if (!keys.length) return {};
  try {
    const db = await admin();
    const { data } = await db.from("lesson_videos").select("key, ids").in("key", keys);
    return Object.fromEntries((data ?? []).map(r => [r.key, r.ids ?? []]));
  } catch {
    return {};
  }
}

/**
 * Finds (and saves) lecture videos in exactly the chosen language.
 * `aiWaitMs` limits how long a visitor waits for the language check; the fill job passes Infinity.
 */
export async function resolveLessonVideos(query: string, lang: VideoLang, fallback: string, aiWaitMs = 6000): Promise<{ ids: string[]; saved: boolean }> {
  const key = videoCacheKey(query, lang);
  const base = key.slice(3);
  try {
    const db = await admin();
    const { data: hit } = await db.from("lesson_videos").select("ids").eq("key", key).maybeSingle();
    if (hit) return { ids: hit.ids ?? [], saved: true };
  } catch { /* not saved yet */ }
  const suffix = lang === "hi" ? " in hindi" : " lecture english";
  const results = await Promise.all([base, fallback].filter(Boolean).map(q => search(q + suffix).catch(() => [] as VideoCandidate[])));
  return pickAndSave(key, lang, results, aiWaitMs);
}

/** Keeps candidates in the chosen language, confirms the spoken language with AI and saves the result. */
export async function pickAndSave(key: string, lang: VideoLang, results: VideoCandidate[][], aiWaitMs = 6000, saveEmpty = false): Promise<{ ids: string[]; saved: boolean }> {
  let checked = true;
  for (const found of results) {
    const pool = found.filter(c => matchesLectureLanguage(c, lang)).slice(0, 8);
    if (!pool.length) continue;
    const check = confirmSpoken(pool, lang);
    const keep = Number.isFinite(aiWaitMs) ? await Promise.race([check, new Promise<null>(r => setTimeout(() => r(null), aiWaitMs))]) : await check;
    if (!keep) checked = false;
    const ids = (keep ?? pool.map(c => c.id)).slice(0, 4);
    if (!ids.length) continue;
    if (keep) {
      try {
        const db = await admin();
        await db.from("lesson_videos").upsert({ key, ids }).then(() => undefined, () => undefined);
      } catch { /* continue without database cache */ }
    }
    return { ids, saved: !!keep };
  }
  // Remember "no lecture in this language" so later visitors get the YouTube link instantly instead of a slow search.
  if (saveEmpty && checked) {
    try {
      const db = await admin();
      await db.from("lesson_videos").upsert({ key, ids: [] }).then(() => undefined, () => undefined);
    } catch { /* continue without database cache */ }
  }
  return { ids: [], saved: false };
}
