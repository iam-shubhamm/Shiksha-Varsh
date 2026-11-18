import { createServerFn } from "@tanstack/react-start";

type Lang = "en" | "hi";

// Finds YouTube lecture videos for a lesson in exactly the chosen lecture language (saved after the first search).
export const findLessonVideos = createServerFn({ method: "GET" })
  .inputValidator((d: { query: string; lang?: Lang; fallback?: string }) => ({ query: String(d.query).slice(0, 200), lang: (d.lang === "hi" ? "hi" : "en") as Lang, fallback: d.fallback ? String(d.fallback).slice(0, 200) : "" }))
  .handler(async ({ data }) => {
    try {
      const { resolveLessonVideos } = await import("@/lib/classes/video-search.server");
      const { ids } = await resolveLessonVideos(data.query, data.lang, data.fallback);
      return { ids };
    } catch {
      return { ids: [] as string[] };
    }
  });

// Returns the saved videos for a whole chapter list in one quick request.
export const getSavedLessonVideos = createServerFn({ method: "POST" })
  .inputValidator((d: { keys: string[] }) => ({ keys: (Array.isArray(d.keys) ? d.keys : []).slice(0, 80).map(k => String(k).slice(0, 210)) }))
  .handler(async ({ data }) => {
    try {
      const { readSavedVideos } = await import("@/lib/classes/video-search.server");
      return { videos: await readSavedVideos(data.keys) };
    } catch {
      return { videos: {} as Record<string, string[]> };
    }
  });
