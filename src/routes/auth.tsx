import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Loader2, GraduationCap, PlayCircle, FileText, ListChecks } from "lucide-react";
import { isSupabaseConfigured, supabase } from "@/integrations/supabase/client";
import { SiteHeader } from "@/components/SiteHeader";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Login — ShikshaVerse" },
      { name: "description", content: "Login or create your ShikshaVerse account to continue learning." },
      { property: "og:title", content: "Login — ShikshaVerse" },
      { property: "og:description", content: "Login or create your ShikshaVerse account." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AuthPage,
});

type Mode = "login" | "signup" | "forgot";
const field = "w-full rounded-lg border bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30";

function AuthPage() {
  const { t } = useT();
  const navigate = useNavigate();
  const [mode, setMode] = useState<Mode>("login");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const [info, setInfo] = useState("");

  const go = (m: Mode) => { setMode(m); setErr(""); setInfo(""); };

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr(""); setInfo("");
    const fd = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const email = z.string().trim().email().max(255).safeParse(fd["email"]);
    if (!email.success) return setErr(t("eEmail"));
    if (mode !== "forgot" && (fd["password"] ?? "").length < 6) return setErr(t("pwMin"));
    if (mode === "signup" && !(fd["name"] ?? "").trim()) return setErr(t("eName"));
    if (!isSupabaseConfigured()) {
      setErr("Login is temporarily unavailable because authentication is not configured.");
      return;
    }
    setBusy(true);
    try {
      if (mode === "login") {
        const { error } = await supabase.auth.signInWithPassword({ email: email.data, password: fd["password"]! });
        if (error) throw error;
        navigate({ to: "/" });
      } else if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email: email.data, password: fd["password"]!,
          options: { emailRedirectTo: window.location.origin, data: { full_name: fd["name"]!.trim().slice(0, 100) } },
        });
        if (error) throw error;
        setInfo(t("checkEmail"));
      } else {
        const { error } = await supabase.auth.resetPasswordForEmail(email.data, { redirectTo: `${window.location.origin}/reset-password` });
        if (error) throw error;
        setInfo(t("resetSent"));
      }
    } catch (e) {
      setErr(e instanceof Error ? e.message : String(e));
    } finally { setBusy(false); }
  }

  const title = mode === "login" ? t("authWelcome") : mode === "signup" ? t("authNew") : t("authResetT");
  const sub = mode === "login" ? t("authWelcomeD") : mode === "signup" ? t("authNewD") : t("authResetD");

  return (
    <div className="min-h-screen">
      <SiteHeader nav={false} />
      <div className="mx-auto grid min-h-[calc(100svh-3.5rem)] max-w-5xl items-center gap-10 px-5 py-10 md:grid-cols-2">
        <div className="hidden md:block">
          <div className="animate-bob grid h-16 w-16 place-items-center rounded-2xl bg-hero text-primary-foreground shadow-3d"><GraduationCap className="h-8 w-8" /></div>
          <h2 className="mt-6 text-3xl font-bold">{t("heroA")} <span className="text-hero">{t("heroB")}</span></h2>
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            {[[PlayCircle, t("f1d2")], [FileText, t("f5d")], [ListChecks, t("f7d")]].map(([I, s], i) => {
              const Icon = I as typeof PlayCircle;
              return <li key={i} className="flex items-center gap-2"><Icon className="h-4 w-4 text-primary" />{s as string}</li>;
            })}
          </ul>
        </div>

        <div className="animate-rise rounded-xl border bg-card p-6 shadow-3d">
          {mode !== "forgot" && (
            <div className="mb-5 grid grid-cols-2 rounded-lg bg-muted p-1 text-sm font-medium">
              {(["login", "signup"] as const).map((m) => (
                <button key={m} onClick={() => go(m)} className={`rounded-md py-1.5 transition ${mode === m ? "bg-card shadow-sm" : "text-muted-foreground"}`}>
                  {m === "login" ? t("authLogin") : t("authSignup")}
                </button>
              ))}
            </div>
          )}
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="mt-1 text-sm text-muted-foreground">{sub}</p>
          <form key={mode} onSubmit={submit} className="mt-5 space-y-3">
            {mode === "signup" && <input name="name" placeholder={t("fullName")} className={field} maxLength={100} autoComplete="name" />}
            <input name="email" type="email" placeholder="Email" className={field} maxLength={255} autoComplete="email" />
            {mode !== "forgot" && <input name="password" type="password" placeholder={t("pw")} className={field} maxLength={72} autoComplete={mode === "login" ? "current-password" : "new-password"} />}
            {mode === "login" && (
              <div className="text-right"><button type="button" onClick={() => go("forgot")} className="text-xs font-medium text-primary hover:underline">{t("authForgot")}</button></div>
            )}
            {err && <p className="text-sm text-destructive">{err}</p>}
            {info && <p className="rounded-lg bg-secondary/10 p-2.5 text-sm text-secondary">{info}</p>}
            <button disabled={busy} className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 disabled:opacity-60">
              {busy && <Loader2 className="h-4 w-4 animate-spin" />}
              {mode === "login" ? t("authLogin") : mode === "signup" ? t("authSignup") : t("sendLink")}
            </button>
          </form>
          <p className="mt-5 text-center text-sm text-muted-foreground">
            {mode === "login" && <>{t("noAcc")} <button onClick={() => go("signup")} className="font-semibold text-primary hover:underline">{t("authSignup")}</button></>}
            {mode === "signup" && <>{t("haveAcc")} <button onClick={() => go("login")} className="font-semibold text-primary hover:underline">{t("authLogin")}</button></>}
            {mode === "forgot" && <button onClick={() => go("login")} className="font-semibold text-primary hover:underline">{t("backLogin")}</button>}
          </p>
          <p className="mt-3 text-center"><Link to="/" className="text-xs text-muted-foreground hover:text-foreground">← ShikshaVerse</Link></p>
        </div>
      </div>
    </div>
  );
}
