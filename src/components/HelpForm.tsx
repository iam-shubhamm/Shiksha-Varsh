import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useT } from "@/lib/i18n";

const field = "w-full rounded-lg border bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30";

export function HelpForm() {
  const { t } = useT();
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState("");
  const topics = [t("t1"), t("t2"), t("t3"), t("t4"), t("t5")];

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const schema = z.object({
      name: z.string().trim().min(1, t("eName")).max(100),
      email: z.string().trim().email(t("eEmail")).max(255),
      phone: z.string().trim().max(20).optional(),
      topic: z.string().min(1).max(60),
      message: z.string().trim().min(5, t("eMsg")).max(2000),
    });
    const fd = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const parsed = schema.safeParse({ ...fd, phone: fd["phone"] || undefined });
    if (!parsed.success) return setError(parsed.error.issues[0]?.message ?? t("eMsg"));
    setStatus("sending");
    const { error } = await supabase.from("help_requests").insert({ ...parsed.data, phone: parsed.data.phone ?? null });
    if (error) { setStatus("idle"); return setError(t("eFail")); }
    setStatus("done");
  }

  if (status === "done")
    return (
      <div className="animate-rise flex flex-col items-center rounded-xl border bg-card p-8 text-center">
        <CheckCircle2 className="h-10 w-10 text-secondary" />
        <h3 className="mt-3 text-xl font-bold">{t("doneT")}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{t("doneD")}</p>
        <button onClick={() => setStatus("idle")} className="mt-4 text-sm font-medium text-primary hover:underline">{t("again")}</button>
      </div>
    );

  return (
    <form onSubmit={onSubmit} className="space-y-3 rounded-xl border bg-card p-5 shadow-3d">
      <div className="grid gap-3 sm:grid-cols-2">
        <input name="name" placeholder={t("fName")} className={field} maxLength={100} />
        <input name="email" type="email" placeholder={t("fEmail")} className={field} maxLength={255} />
        <input name="phone" placeholder={t("fPhone")} className={field} maxLength={20} />
        <select name="topic" className={field}>{topics.map((x) => <option key={x}>{x}</option>)}</select>
      </div>
      <textarea name="message" rows={4} placeholder={t("fMsg")} className={field} maxLength={2000} />
      {error && <p className="text-sm text-destructive">{error}</p>}
      <button disabled={status === "sending"} className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-60">
        {status === "sending" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />} {t("fSend")}
      </button>
    </form>
  );
}
