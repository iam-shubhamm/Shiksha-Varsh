import { createFileRoute, Outlet, notFound } from "@tanstack/react-router";
import { getAdvancedCourse } from "@/data/advanced/curriculum";
import { ClassStudyHeader } from "@/components/ClassStudyHeader";
export const Route = createFileRoute("/learn/$course")({loader:({params})=>{if(!getAdvancedCourse(params.course)) throw notFound();},component:()=> <><ClassStudyHeader/><Outlet/></>});
