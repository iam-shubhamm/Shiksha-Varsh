import { createFileRoute, notFound, Outlet } from "@tanstack/react-router";
import { ClassStudyHeader } from "@/components/ClassStudyHeader";
import { isUpperGrade } from "@/data/upper/curriculum";

export const Route = createFileRoute("/study/$grade")({
  loader: ({ params }) => { if (!isUpperGrade(Number(params.grade))) throw notFound(); return { grade: Number(params.grade) }; },
  component: () => <><ClassStudyHeader /><Outlet /></>,
});
