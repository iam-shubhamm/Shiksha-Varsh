import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Moon, Sun, GraduationCap, Globe, ChevronDown, LogIn, LogOut, Menu, X } from "lucide-react";
import { LANGS, useT, type Lang } from "@/lib/i18n";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { t } = useT();
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const sync = () => {
      const savedDark = localStorage.getItem("theme") === "dark";
      setDark(savedDark);
      document.documentElement.classList.toggle("dark", savedDark);
      document.documentElement.style.colorScheme = savedDark ? "dark" : "light";
    };
    sync();
    window.addEventListener("theme-change", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("theme-change", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);
  const chooseTheme = (value: boolean) => {
    localStorage.setItem("theme", value ? "dark" : "light");
    window.dispatchEvent(new Event("theme-change"));
  };
  return (
    <div role="group" aria-label="Theme" className="flex items-center rounded-full border bg-muted p-0.5">
      {[{ v: false, I: Sun, l: t("light") }, { v: true, I: Moon, l: t("dark") }].map(({ v, I, l }) => (
        <Button variant="ghost" key={String(v)} onClick={() => chooseTheme(v)} aria-pressed={dark === v} aria-label={l}
          className={`flex h-7 items-center gap-1 rounded-full px-2.5 text-xs font-medium transition ${dark === v ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>
          <I className="h-3.5 w-3.5" />
        </Button>
      ))}
    </div>
  );
}

export function LangSelect() {
  const { lang, setLang, t } = useT();
  return (
    <label className="relative flex h-8 items-center gap-1.5 rounded-full border bg-muted pl-2.5 pr-7 text-xs font-medium">
      <Globe className="h-3.5 w-3.5 text-muted-foreground" />
      <span className="sr-only">{t("language")}</span>
      <select value={lang} onChange={(e) => setLang(e.target.value as Lang)} className="cursor-pointer appearance-none bg-transparent outline-none">
        {Object.entries(LANGS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
      </select>
      <ChevronDown className="pointer-events-none absolute right-2 h-3.5 w-3.5 text-muted-foreground" />
    </label>
  );
}

function AuthButton() {
  const { t } = useT();
  const [email, setEmail] = useState<string | null>(null);
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setEmail(data.session?.user.email ?? null));
    const { data } = supabase.auth.onAuthStateChange((_e, s) => setEmail(s?.user.email ?? null));
    return () => data.subscription.unsubscribe();
  }, []);
  if (email)
    return (
      <button onClick={() => supabase.auth.signOut()} title={email} className="inline-flex h-8 items-center gap-1.5 rounded-full border bg-card px-3 text-xs font-semibold hover:bg-muted">
        <LogOut className="h-3.5 w-3.5" /> <span className="hidden sm:inline">{t("logout")}</span>
      </button>
    );
  return (
    <Link to="/auth" className="inline-flex h-8 items-center gap-1.5 rounded-full bg-primary px-3.5 text-xs font-semibold text-primary-foreground hover:opacity-90">
      <LogIn className="h-3.5 w-3.5" /> {t("login")}
    </Link>
  );
}

export function SiteHeader({ nav = true }: { nav?: boolean }) {
  const { t } = useT();
  const [open, setOpen] = useState(false);
  const items = [["top", t("navHome")], ["courses", t("navCourses")], ["features", t("navFeatures")], ["material", t("navMaterial")], ["how", t("navHow")], ["help", t("navHelp")]] as const;
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-5">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-extrabold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-hero text-primary-foreground"><GraduationCap className="h-4 w-4" /></span>
          <span className="hidden sm:inline">ShikshaVerse</span>
        </Link>
        {nav && (
          <nav className="hidden items-center gap-5 text-sm font-medium text-muted-foreground lg:flex">
            {items.map(([id, l]) => <a key={id} href={`/#${id}`} className="transition hover:text-foreground">{l}</a>)}
          </nav>
        )}
        <div className="flex items-center gap-2">
          <LangSelect /><ThemeToggle /><AuthButton />
          {nav && (
            <button onClick={() => setOpen(!open)} aria-label="Menu" className="grid h-8 w-8 place-items-center rounded-full border lg:hidden">
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          )}
        </div>
      </div>
      {nav && open && (
        <nav className="animate-rise border-t bg-background px-5 py-3 lg:hidden">
          {items.map(([id, l]) => <a key={id} href={`/#${id}`} onClick={() => setOpen(false)} className="block py-2 text-sm font-medium">{l}</a>)}
        </nav>
      )}
    </header>
  );
}
