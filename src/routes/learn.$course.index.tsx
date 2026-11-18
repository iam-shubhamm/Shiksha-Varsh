import { createFileRoute, notFound } from "@tanstack/react-router";
import { getAdvancedCourse } from "@/data/advanced/curriculum";
import { AdvancedPicker, advancedHead } from "@/components/AdvancedCourse";
export const Route = createFileRoute("/learn/$course/")({loader:({params})=>{const c=getAdvancedCourse(params.course);if(!c)throw notFound();return c;},head:({params})=>advancedHead(`${getAdvancedCourse(params.course)?.name ?? "Course"} Study Hub`,"Streams, branches and semester subjects with lectures, printable notes and chapter quizzes."),component:Page});
function Page(){const course=Route.useLoaderData();return <AdvancedPicker course={course}/>;}
