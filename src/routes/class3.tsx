import { createFileRoute, Outlet } from "@tanstack/react-router";
import { ClassStudyHeader } from "@/components/ClassStudyHeader";

export const Route = createFileRoute("/class3")({
  component: () => <><ClassStudyHeader /><Outlet /></>,
});