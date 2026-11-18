import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { SiteHeader } from "@/components/SiteHeader";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/reset-password")({
  head: () => ({
    meta: [
      { title: "Reset password — ShikshaVerse" },
      { name: "description", content: "Set a new password for your ShikshaVerse account." },
      { property: "og:title", content: "Reset password — ShikshaVerse" },
      { property: "og:description", content: "Set a new password for your account." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ResetPassword,
});

function ResetPassword() {
  const { t } = useT();
  const navigate = useNavigate();
  const [pw, setPw] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState("");

  async function save(e: React.FormEvent) {
    e.preventDefault();
    if (pw.length < 6) return setMsg(t("pwMin"));
    setBusy(true);
    const { error } = await supabase.auth.updateUser({ password: pw });
    setBusy(false);
    if (error) return setMsg(error.message);
    setMsg(t("pwSaved"));
    setTimeout(() => navigate({ to: "/" }), 1200);
  }

  return (
    <div className="min-h-screen">
      <SiteHeader nav={false} />
      <div className="mx-auto max-w-sm px-5 py-16">
        <form onSubmit={save} className="animate-rise space-y-3 rounded-xl border bg-card p-6 shadow-3d">
          <h1 className="text-2xl font-bold">{t("authResetT")}</h1>
          <input type="password" value={pw} onChange={(e) => setPw(e.target.value)} placeholder={t("newPw")} maxLength={72} autoComplete="new-password"
            className="w-full rounded-lg border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30" />
          {msg && <p className="text-sm text-muted-foreground">{msg}</p>}
          <button disabled={busy} className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-2.5 text-sm font-semibold text-primary-foreground disabled:opacity-60">
            {busy && <Loader2 className="h-4 w-4 animate-spin" />} {t("savePw")}
          </button>
        </form>
      </div>
    </div>
  );
}
