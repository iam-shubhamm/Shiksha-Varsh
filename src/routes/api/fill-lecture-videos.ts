import { createFileRoute } from "@tanstack/react-router";
import type { VideoCandidate } from "@/lib/classes/video-language";
import type { VideoLang } from "@/lib/classes/lecture-queries";

type Ingest = { key: string; lang: VideoLang; results: VideoCandidate[][] };

// Development-only job: saves lecture videos ahead of time so visitors never wait for a YouTube search.
// GET lists lectures still without a saved video; POST takes YouTube search results, checks the spoken language and saves.
// The published site answers 404 because import.meta.env.DEV is false in production builds.
export const Route = createFileRoute("/api/fill-lecture-videos")({
  server: {
    handlers: {
      GET: async () => {
        if (!import.meta.env.DEV) return new Response("Not found", { status: 404 });
        const { allLectureJobs } = await import("@/lib/classes/all-lectures");
        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const saved = new Set<string>();
        for (let from = 0; ; from += 1000) {
          const { data } = await supabaseAdmin.from("lesson_videos").select("key").range(from, from + 999);
          for (const r of data ?? []) saved.add(r.key);
          if (!data || data.length < 1000) break;
        }
        const all = allLectureJobs();
        return Response.json({ total: all.length, pending: all.filter(j => !saved.has(j.key)) });
      },
      POST: async ({ request }) => {
        if (!import.meta.env.DEV) return new Response("Not found", { status: 404 });
        const body = (await request.json()) as { jobs: Ingest[]; saveEmpty?: boolean };
        const jobs = body.jobs.slice(0, 20);
        const { pickAndSave } = await import("@/lib/classes/video-search.server");
        const out = await Promise.all(jobs.map(j => pickAndSave(j.key, j.lang === "hi" ? "hi" : "en", j.results, 25000, !!body.saveEmpty).catch(() => ({ ids: [], saved: false }))));
        return Response.json({ filled: out.filter(o => o.saved).length, missing: out.filter(o => !o.saved).length });
      },
    },
  },
});
