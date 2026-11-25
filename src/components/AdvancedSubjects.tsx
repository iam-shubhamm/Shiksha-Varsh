import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { AdvancedCourse, AdvancedTrack, AdvancedSubject } from "@/data/advanced/curriculum";
export function AdvancedSubjects({course,track,subjects}:{course:AdvancedCourse;track:AdvancedTrack;subjects:AdvancedSubject[]}) {
 return <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{subjects.map((subject, index)=><Button asChild variant="plain" key={subject.id} data-reveal data-direction="scale" style={{ ["--reveal-delay" as string]: `${index * 50}ms` }} className="group h-auto whitespace-normal rounded-2xl border border-primary/10 bg-card/80 p-5 text-left shadow-sm transition hover:-translate-y-1 hover:border-primary hover:shadow-3d"><Link to="/learn/$course/$track/$subject" params={{course:course.id,track:track.id,subject:subject.id}} preload="intent" className="flex flex-col items-start"><div className="flex w-full justify-between text-xs text-muted-foreground"><span>{course.kind==="senior"?"NCERT study":`Semester ${subject.semester}`}</span><ArrowUpRight className="h-4 w-4"/></div><h3 className="mt-3 text-xl font-bold">{subject.name}</h3><p className="mt-2 text-xs font-normal text-muted-foreground">{subject.chapters.length} {course.kind==="senior"?"chapters / readings":"core units"}</p></Link></Button>)}</div>;
}
