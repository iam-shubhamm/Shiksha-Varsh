import { createFileRoute } from "@tanstack/react-router";
import { ClassBoardPicker } from "@/components/ClassBoardPicker";
import { AllCoursesLink } from "@/components/ClassStudyHeader";

export const Route = createFileRoute("/study/$grade/")({
  head: ({ params }) => ({
    meta: [
      { title: `Class ${params.grade} — Choose Board | CBSE, ICSE, State Board` },
      { name: "description", content: `Class ${params.grade} chapter-wise lectures, PDF notes and quizzes for CBSE, ICSE and State Board.` },
      { property: "og:title", content: `Class ${params.grade} — Choose Board` },
      { property: "og:description", content: `Class ${params.grade} lectures, notes and quizzes.` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Picker,
});

function Picker() {
  const { grade } = Route.useParams();
  return <><AllCoursesLink /><ClassBoardPicker grade={Number(grade)} /></>;
}
