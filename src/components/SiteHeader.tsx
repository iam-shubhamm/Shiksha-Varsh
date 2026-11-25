import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { GraduationCap, Globe, ChevronDown, LogIn, LogOut, Menu, X } from "lucide-react";
import { LANGS, useT, type Lang } from "@/lib/i18n";
import { isSupabaseConfigured, supabase } from "@/integrations/supabase/client";

export function LangSelect() {
  const { lang, setLang, t } = useT();
  return (
    <label className="relative flex h-8 items-center gap-1.5 rounded-full border border-white/40 bg-white pl-2.5 pr-7 text-xs font-medium text-foreground">
      <Globe className="h-3.5 w-3.5 text-primary" />
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
  const configured = isSupabaseConfigured();
  useEffect(() => {
    if (!configured) return;
    supabase.auth.getSession().then(({ data }) => setEmail(data.session?.user.email ?? null));
    const { data } = supabase.auth.onAuthStateChange((_e, s) => setEmail(s?.user.email ?? null));
    return () => data.subscription.unsubscribe();
  }, [configured]);
  if (email)
    return (
      <button onClick={() => supabase.auth.signOut()} title={email} className="inline-flex h-8 items-center gap-1.5 rounded-full border border-white/40 bg-white/15 px-3 text-xs font-semibold text-white hover:bg-white/25">
        <LogOut className="h-3.5 w-3.5" /> <span className="hidden sm:inline">{t("logout")}</span>
      </button>
    );
  return (
    <Link to="/auth" className="inline-flex h-8 items-center gap-1.5 rounded-full bg-white px-3.5 text-xs font-semibold text-primary hover:bg-white/90">
      <LogIn className="h-3.5 w-3.5" /> {t("login")}
    </Link>
  );
}

export function SiteHeader({ nav = true }: { nav?: boolean }) {
  const { t } = useT();
  const [open, setOpen] = useState(false);
  const items = [["top", t("navHome")], ["courses", t("navCourses")], ["features", t("navFeatures")], ["material", t("navMaterial")], ["how", t("navHow")], ["help", t("navHelp")]] as const;
  useEffect(() => {
    if (nav) return;

    const selector = "[data-reveal]";
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = !prefersReducedMotion && "IntersectionObserver" in window
      ? new IntersectionObserver((entries, intersectionObserver) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            intersectionObserver.unobserve(entry.target);
          });
        }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" })
      : null;

    const reveal = (element: HTMLElement) => {
      if (!observer) {
        element.classList.add("is-visible");
        return;
      }
      if (element.classList.contains("scroll-reveal")) return;
      element.classList.add("scroll-reveal");
      observer.observe(element);
    };
    const discover = (node: Node) => {
      if (!(node instanceof HTMLElement)) return;
      if (node.matches(selector)) reveal(node);
      node.querySelectorAll<HTMLElement>(selector).forEach(reveal);
    };

    discover(document.body);
    const mutations = new MutationObserver((records) => {
      records.forEach((record) => record.addedNodes.forEach(discover));
    });
    mutations.observe(document.body, { childList: true, subtree: true });
    return () => {
      mutations.disconnect();
      observer?.disconnect();
    };
  }, [nav]);

  return (
    <header className="sticky top-0 z-40 border-b border-primary/30 bg-primary text-primary-foreground shadow-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-extrabold">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/15 text-white"><GraduationCap className="h-4 w-4" /></span>
          <span className="hidden sm:inline">ShikshaVerse</span>
        </Link>
        {nav && (
          <nav className="hidden items-center gap-5 text-sm font-medium text-white/85 lg:flex">
            {items.map(([id, l]) => <a key={id} href={`/#${id}`} className="transition hover:text-white">{l}</a>)}
          </nav>
        )}
        <div className="flex items-center gap-2">
          <LangSelect /><AuthButton />
          {nav && (
            <button onClick={() => setOpen(!open)} aria-label="Menu" className="grid h-8 w-8 place-items-center rounded-full border border-white/40 text-white lg:hidden">
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          )}
        </div>
      </div>
      {nav && open && (
        <nav className="animate-rise border-t border-primary/20 bg-background px-5 py-3 text-foreground lg:hidden">
          {items.map(([id, l]) => <a key={id} href={`/#${id}`} onClick={() => setOpen(false)} className="block py-2 text-sm font-medium">{l}</a>)}
        </nav>
      )}
    </header>
  );
}
