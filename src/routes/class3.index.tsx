import { ClassBoardPicker } from "@/components/ClassBoardPicker";
import { AllCoursesLink } from "@/components/ClassStudyHeader";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/class3/")({
  head: () => ({
    meta: [
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      { title: "Class 3 — Choose Board | CBSE, ICSE, State Board" },
      { name: "description", content: "All Class 3 subjects with lectures, PDFs and quizzes — CBSE, ICSE and State Board." },
      { property: "og:title", content: "Class 3 — Choose Board" },
      { property: "og:description", content: "Class 3 lectures, PDFs and quizzes." },
    ],
  }),
  component: Index,
});

function Index() { return <><AllCoursesLink /><ClassBoardPicker grade={3} /></>; }
