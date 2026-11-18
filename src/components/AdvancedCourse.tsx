import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Atom, ChartNoAxesCombined, Landmark, CodeXml, Activity, Cog, Building2, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { AdvancedCourse } from "@/data/advanced/curriculum";
import engineering from "@/assets/engineering-workbench.jpg";
import study from "@/assets/advanced-study.jpg";

const icons = { science: Atom, finance: ChartNoAxesCombined, humanities: Landmark, code: CodeXml, signal: Activity, mechanical: Cog, structure: Building2, analysis: BookOpen };
export function DisciplineMark({ motion }: { motion: string }) {
 const Icon = icons[motion as keyof typeof icons] ?? BookOpen;
 return <div aria-hidden="true" className={`discipline-mark discipline-${motion}`}><Icon className="h-8 w-8" /><span className="discipline-line" />{motion === "code" && <span className="discipline-code-glyph">{'{ }'}</span>}</div>;
}
export function AdvancedPicker({ course }: { course: AdvancedCourse }) {
 const noun = course.kind === "senior" ? "stream" : course.id === "btech" ? "branch" : ["bsc","ba"].includes(course.id) ? "major" : "semester";
 return <main className="mx-auto max-w-6xl px-5 pb-14 pt-5">
  <Link to="/" hash="courses" className="text-sm font-semibold text-primary">← All courses</Link>
  <div className="mt-6 grid items-end gap-5 border-b border-border pb-7 sm:grid-cols-[1fr_260px]">
   <div><p className="mb-2 text-xs font-bold uppercase text-muted-foreground">{course.kind === "senior" ? "Senior secondary" : "Undergraduate studies"}</p><h1 className="font-display text-4xl font-extrabold text-hero">{course.name}</h1><p className="mt-3 text-sm text-muted-foreground">{course.kind === "senior" ? "NCERT-based study track · subject combinations vary by school" : "Core study units · university syllabi and semester order vary"}</p></div>
   <img src={course.id === "btech" || course.id === "bca" ? engineering : study} width={1536} height={768} alt={course.id === "btech" || course.id === "bca" ? "Electronics workbench with circuits and code" : "Advanced study desk with mathematics and scientific instruments"} className="aspect-[2/1] max-h-24 w-full rounded-lg object-cover sm:max-h-none" />
  </div>
  <h2 className="mb-5 mt-7 text-xl font-bold">Select your {noun}</h2>
  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{course.tracks.map(track => <Button key={track.id} asChild variant="plain" className="group h-auto whitespace-normal rounded-lg border border-border bg-card p-5 text-left transition hover:border-primary">
   <Link to="/learn/$course/$track" params={{course:course.id,track:track.id}} preload="intent" className="flex flex-col items-start"><div className="flex w-full items-center justify-between"><DisciplineMark motion={track.motion}/><ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:text-primary"/></div><h3 className="mt-4 text-lg font-bold">{track.name}</h3><p className="mt-1 text-xs text-muted-foreground">{course.kind === "college" && !track.id.startsWith("semester-") ? `${course.id === "btech" ? 8 : 6} semesters · ` : ""}{track.subjects.length} subjects</p><p className="mt-3 text-xs font-normal text-muted-foreground">{track.subjects.slice(0,3).map(s=>s.name).join(" · ")}</p></Link>
  </Button>)}</div>
 </main>;
}
export function advancedHead(title: string, description: string) {
 return {meta:[{title:`${title} — ShikshaVerse`},{name:"description",content:description},{property:"og:title",content:`${title} — ShikshaVerse`},{property:"og:description",content:description},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]};
}
