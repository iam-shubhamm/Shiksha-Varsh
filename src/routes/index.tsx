import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { GraduationCap, BookOpen, School, PlayCircle, FileText, NotebookPen, ListChecks, Layers, Clock, Users, Award, ArrowRight, Mail, MessageSquare, ChevronDown, Atom, Calculator, FlaskConical, Languages, PenTool, Download, Youtube } from "lucide-react";
import { COURSES, CLASS_WEBSITE_LINKS, UPPER_CLASS_GRADE, type Course } from "@/lib/edu-data";
import { ADVANCED_COURSE_LINKS } from "@/data/advanced/curriculum";
import { Tilt } from "@/components/Tilt";
import { HelpForm } from "@/components/HelpForm";
import { SiteHeader } from "@/components/SiteHeader";
import { HeroScene, FormulaRain } from "@/components/HeroScene";
import { LessonDemo } from "@/components/LessonDemo";
import { useT, type TKey } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ShikshaVerse — Class 1–12, B.Tech, B.Sc courses" },
      { name: "description", content: "Video lectures, PDF notebooks, notes and lesson-wise quizzes for Class 1–12 and graduation courses, in English and Hindi." },
      { property: "og:title", content: "ShikshaVerse — Choose your course" },
      { property: "og:description", content: "Videos, PDF notes and quizzes for every lesson, Class 1 to graduation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-wider text-primary">{eyebrow}</p>
      <h2 className="mt-1 text-2xl font-bold md:text-3xl">{title}</h2>
      {sub && <p className="mt-2 text-sm text-muted-foreground">{sub}</p>}
    </div>
  );
}

function CourseGroup({ title, icon: Icon, items, onPick }: { title: string; icon: typeof School; items: Course[]; onPick: (c: Course) => void }) {
  const { t } = useT();
  return (
    <div className="mt-8">
      <div className="mb-3 flex items-center gap-2">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary"><Icon className="h-4 w-4" /></span>
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
        {items.map((c, i) => (
          <Tilt key={c.name} to={CLASS_WEBSITE_LINKS[c.name]} grade={UPPER_CLASS_GRADE[c.name]} course={ADVANCED_COURSE_LINKS[c.name]} onClick={() => onPick(c)} className="course-card group rounded-lg border bg-card p-3.5 text-left">
            {c.fx.map((f, k) => (
              <span key={k} aria-hidden="true" className="fx text-sm" style={{ left: `${8 + k * 13}%`, bottom: "8px", ["--d" as string]: `${k * 0.16}s`, ["--dx" as string]: `${(k % 2 ? 1 : -1) * (12 + k * 4)}px`, ["--rot" as string]: `${(k % 2 ? 1 : -1) * 20}deg` } as React.CSSProperties}>{f}</span>
            ))}
            <p className="relative font-display text-lg font-bold leading-tight transition group-hover:text-primary">{c.name}</p>
            <p className="relative mt-0.5 truncate text-[11px] text-muted-foreground">{t(c.sub)}</p>
            <span className="relative mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-primary">{t("start")} <ArrowRight className="h-3 w-3 transition group-hover:translate-x-1" /></span>
          </Tilt>
        ))}
      </div>
    </div>
  );
}

function Faq() {
  const { t } = useT();
  const [open, setOpen] = useState<number | null>(0);
  const qs = [["q1", "a1"], ["q2", "a2"], ["q3", "a3"], ["q4", "a4"]] as const;
  return (
    <div className="mt-6 space-y-2">
      <h3 className="font-bold">{t("faqTitle")}</h3>
      {qs.map(([q, a], i) => (
        <div key={q} className="rounded-lg border bg-card">
          <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between px-3 py-2.5 text-left text-sm font-medium">
            {t(q)} <ChevronDown className={`h-4 w-4 transition ${open === i ? "rotate-180" : ""}`} />
          </button>
          {open === i && <p className="animate-rise px-3 pb-3 text-sm text-muted-foreground">{t(a)}</p>}
        </div>
      ))}
    </div>
  );
}

function Index() {
  const { t, lang } = useT();
  const [toast, setToast] = useState("");
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!elements.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }
    elements.forEach((element) => element.classList.add("scroll-reveal"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  const pick = (c: Course) => {
    const url = c.link[lang] || c.link["en"];
    if (url) window.location.href = url;
    else { setToast(`${c.name} — ${t("soon")}`); setTimeout(() => setToast(""), 2500); }
  };
  const features: [typeof PlayCircle, TKey, TKey][] = [
    [Youtube, "f1", "f1d2"], [FileText, "f5", "f5d"], [NotebookPen, "f6", "f6d"], [ListChecks, "f7", "f7d"],
    [Layers, "f8", "f8d"], [Clock, "f2", "f2d"], [Users, "f3", "f3d"], [Award, "f4", "f4d"],
  ];
  const stats: [string, TKey][] = [["18+", "s1"], ["1000+", "s2"], ["100%", "s3"], ["10", "s4"]];
  const material: [typeof PlayCircle, TKey, TKey][] = [[PlayCircle, "m1", "m1d"], [NotebookPen, "m2", "m2d"], [Download, "m3", "m3d"], [ListChecks, "m4", "m4d"]];
  const nav = [["courses", t("navCourses")], ["features", t("navFeatures")], ["material", t("navMaterial")], ["help", t("navHelp")]] as const;

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SiteHeader />

      {/* Front page: fills the whole first screen */}
      <section id="top" className="premium-hero relative flex min-h-[calc(100svh-3.5rem)] flex-col border-b border-primary/25">
        <FormulaRain />
        <div className="relative mx-auto grid w-full max-w-6xl flex-1 items-center gap-8 px-5 py-10 md:grid-cols-[1.3fr_1fr]">
          <div className="animate-rise" data-reveal data-direction="left">
            <span className="inline-flex items-center gap-2 border-b border-primary/40 pb-2 text-[11px] font-semibold text-primary"><GraduationCap className="h-3.5 w-3.5" />{t("badge")}</span>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] md:text-5xl">{t("heroA")} <span className="text-hero">{t("heroB")}</span></h1>
            <p className="mt-3 max-w-md text-base text-muted-foreground">{t("heroSub")}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#courses" className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-3d transition hover:-translate-y-0.5">{t("ctaCourse")} <ArrowRight className="h-4 w-4" /></a>
              <a href="#help" className="inline-flex items-center gap-2 rounded-lg border bg-card px-5 py-2.5 text-sm font-semibold transition hover:bg-muted">{t("ctaHelp")}</a>
            </div>
            <div className="mt-8 grid max-w-md grid-cols-4 gap-3">
              {stats.map(([n, k]) => (
                <div key={k}><p className="font-display text-xl font-extrabold text-hero">{n}</p><p className="text-[11px] leading-tight text-muted-foreground">{t(k)}</p></div>
              ))}
            </div>
          </div>
          <div className="grid place-items-center" data-reveal data-direction="right"><HeroScene /></div>
        </div>
        <a href="#courses" className="relative mx-auto mb-6 flex flex-col items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
          {t("scroll")} <ChevronDown className="h-4 w-4 animate-bounce" />
        </a>
      </section>

      <section id="courses" className="scroll-mt-14 border-t bg-muted/40 py-14" data-reveal>
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead eyebrow={t("coursesEyebrow")} title={t("coursesTitle")} />
          <CourseGroup title={t("gSchool")} icon={School} items={COURSES.filter((c) => c.group === "school")} onPick={pick} />
          <CourseGroup title={t("gSenior")} icon={BookOpen} items={COURSES.filter((c) => c.group === "senior")} onPick={pick} />
          <CourseGroup title={t("gCollege")} icon={GraduationCap} items={COURSES.filter((c) => c.group === "college")} onPick={pick} />
        </div>
      </section>

      <section id="features" className="scroll-mt-14 py-14" data-reveal>
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead eyebrow={t("whyEyebrow")} title={t("whyTitle")} />
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(([Icon, a, b], i) => (
              <div key={a} className="card-3d rounded-lg border bg-card p-4 hover:-translate-y-1" data-reveal data-direction="scale" style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}>
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-secondary/10 text-secondary"><Icon className="h-5 w-5" /></span>
                <h3 className="mt-3 font-bold">{t(a)}</h3>
                <p className="mt-0.5 text-sm text-muted-foreground">{t(b)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="material" className="scroll-mt-14 border-t bg-muted/40 py-14" data-reveal>
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5">
          <div>
            <SectionHead eyebrow={t("matEyebrow")} title={t("matTitle")} sub={t("matSub")} />
            <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {material.map(([Icon, a, b]) => (
                <div key={a} className="flex items-start gap-2.5 rounded-lg border bg-card p-3">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <div><p className="text-sm font-semibold">{t(a)}</p><p className="text-xs text-muted-foreground">{t(b)}</p></div>
                </div>
              ))}
            </div>
          </div>
          </div>
        <div className="mx-auto mt-8 max-w-6xl px-5"><LessonDemo /></div>
      </section>

      <section id="how" className="scroll-mt-14 py-14" data-reveal>
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead eyebrow={t("howEyebrow")} title={t("howTitle")} />
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {(["h1", "h2", "h3"] as const).map((k, i) => (
              <div key={k} className="relative rounded-lg border bg-card p-5" data-reveal data-direction="scale" style={{ ["--reveal-delay" as string]: `${i * 100}ms` }}>
                <span className="font-display text-4xl font-extrabold text-hero">0{i + 1}</span>
                <h3 className="mt-2 font-bold">{t(k)}</h3>
                <p className="mt-0.5 text-sm text-muted-foreground">{t(`${k}d` as TKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="help" className="scroll-mt-14 border-t bg-muted/40 py-14" data-reveal>
        <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-[1fr_1.3fr]">
          <div>
            <SectionHead eyebrow={t("helpEyebrow")} title={t("helpTitle")} sub={t("helpSub")} />
            <div className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
              <div className="flex items-start gap-2.5 rounded-lg border bg-card p-3"><Mail className="mt-0.5 h-4 w-4 text-primary" /><div><p className="text-sm font-semibold">{t("emailSupport")}</p><p className="text-xs text-muted-foreground">{t("emailSupportD")}</p></div></div>
              <div className="flex items-start gap-2.5 rounded-lg border bg-card p-3"><MessageSquare className="mt-0.5 h-4 w-4 text-primary" /><div><p className="text-sm font-semibold">{t("liveChat")}</p><p className="text-xs text-muted-foreground">{t("liveChatD")}</p></div></div>
            </div>
            <Faq />
          </div>
          <HelpForm />
        </div>
      </section>

      <footer className="border-t py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 text-xs text-muted-foreground sm:flex-row">
          <p>© 2026 ShikshaVerse. {t("rights")}</p>
          <div className="flex gap-5">{nav.map(([id, l]) => <a key={id} href={`#${id}`} className="hover:text-foreground">{l}</a>)}</div>
        </div>
      </footer>

      {toast && <div className="animate-rise fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-full bg-foreground px-4 py-2.5 text-sm text-background">{toast}</div>}
    </div>
  );
}
