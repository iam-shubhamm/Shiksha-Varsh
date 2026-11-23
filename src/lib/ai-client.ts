export type AiMessage = {
  role: "system" | "user";
  content: string;
};

export async function generateAiText(
  messages: AiMessage[],
  options: { timeoutMs?: number } = {},
): Promise<string | null> {
  const baseUrl = process.env.AI_API_URL?.replace(/\/+$/, "");
  const apiKey = process.env.AI_API_KEY;
  const model = process.env.AI_MODEL;
  if (!baseUrl || !apiKey || !model) return null;

  try {
    const response = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ model, messages, temperature: 0.2 }),
      signal: AbortSignal.timeout(options.timeoutMs ?? 10000),
    });
    if (!response.ok) return null;
    const payload = await response.json() as {
      choices?: Array<{ message?: { content?: string } }>;
    };
    return payload.choices?.[0]?.message?.content?.trim() || null;
  } catch (error) {
    console.warn("AI provider request failed", error);
    return null;
  }
}
