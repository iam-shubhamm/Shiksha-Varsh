import { createServerFn } from "@tanstack/react-start";
import { generateResponse } from "@lovable.dev/ai-gateway";

// Translates short lesson texts into Hindi for the "Lecture language" option.
export const translateTexts = createServerFn({ method: "POST" })
  .inputValidator((d: { texts: string[] }) => ({ texts: (Array.isArray(d.texts) ? d.texts : []).slice(0, 80).map((t) => String(t).slice(0, 600)) }))
  .handler(async ({ data }) => {
    if (!data.texts.length) return { texts: [] as string[] };
    try {
      const res = await generateResponse({
        model: "openai/gpt-6-astra",
        instructions: "Translate each string into simple Hindi (Devanagari) for young school children. Keep numbers, symbols and English alphabet examples unchanged. Reply ONLY with a JSON array of strings, same length and order.",
        input: JSON.stringify(data.texts),
      });
      let raw = "";
      for (const item of (res.output ?? []) as Array<{ type: string; content?: Array<{ type: string; text?: string }> }>)
        if (item.type === "message") for (const c of item.content ?? []) if (c.type === "output_text") raw += c.text ?? "";
      const out = JSON.parse(raw.replace(/^```(json)?|```$/gm, "").trim());
      return { texts: Array.isArray(out) && out.length === data.texts.length ? out.map(String) : data.texts };
    } catch (e) {
      console.error("translateTexts failed", e);
      return { texts: data.texts };
    }
  });
