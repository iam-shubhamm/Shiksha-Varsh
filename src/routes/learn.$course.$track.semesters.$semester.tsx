import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getAdvancedCourse, getAdvancedTrack } from "@/data/advanced/curriculum";
import { getDegreeSemesters, getSemesterSubjects } from "@/data/advanced/semesters";
import { advancedHead, DisciplineMark } from "@/components/AdvancedCourse";
import { AdvancedSubjects } from "@/components/AdvancedSubjects";
export const Route = createFileRoute("/learn/$course/$track/semesters/$semester")({
 loader:({params})=>{const course=getAdvancedCourse(params.course),track=getAdvancedTrack(params.course,params.track),semester=Number(params.semester);if(!course||!track||String(semester)!==params.semester||!getDegreeSemesters(course.id,track.id).includes(semester))throw notFound();return {course,track,semester,subjects:getSemesterSubjects(course.id,track.id,semester)};},
 head:({params})=>advancedHead(`${getAdvancedCourse(params.course)?.name ?? "Degree"} · ${getAdvancedTrack(params.course,params.track)?.name ?? "Track"} · Semester ${params.semester}`,"Semester subjects with video lectures, audio, PDF notes and quizzes."),component:Page
});
function Page(){const {course,track,semester,subjects}=Route.useLoaderData();return <main className="mx-auto max-w-6xl px-5 pb-12 pt-5"><Link to="/learn/$course/$track" params={{course:course.id,track:track.id}} preload="intent" className="text-sm font-semibold text-primary">← All semesters</Link><div className="mt-6 flex items-center gap-4 border-b pb-6"><DisciplineMark motion={track.motion}/><div className="min-w-0"><p className="text-xs font-bold text-muted-foreground">{course.name} · {track.name}</p><h1 className="text-3xl font-bold">Semester {semester}</h1></div></div><h2 className="mb-5 mt-7 text-xl font-semibold">Subjects</h2><AdvancedSubjects course={course} track={track} subjects={subjects}/></main>;}
