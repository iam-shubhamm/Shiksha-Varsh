import { createServerFn } from "@tanstack/react-start";
import { generateAiText } from "@/lib/ai-client";

// Translates short lesson texts into Hindi for the "Lecture language" option.
export const translateTexts = createServerFn({ method: "POST" })
  .inputValidator((d: { texts: string[] }) => ({ texts: (Array.isArray(d.texts) ? d.texts : []).slice(0, 80).map((t) => String(t).slice(0, 600)) }))
  .handler(async ({ data }) => {
    if (!data.texts.length) return { texts: [] as string[] };
    try {
      const raw = await generateAiText([
        { role: "system", content: "Translate each string into simple Hindi (Devanagari) for young school children. Keep numbers, symbols and English alphabet examples unchanged. Reply ONLY with a JSON array of strings, same length and order." },
        { role: "user", content: JSON.stringify(data.texts) },
      ]);
      if (!raw) return { texts: data.texts };
      const out = JSON.parse(raw.replace(/^```(json)?|```$/gm, "").trim());
      return { texts: Array.isArray(out) && out.length === data.texts.length ? out.map(String) : data.texts };
    } catch (e) {
      console.error("translateTexts failed", e);
      return { texts: data.texts };
    }
  });
