import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getUpperSubjects, isUpperBoard, isUpperGrade, UPPER_BOARDS } from "@/data/upper/curriculum";

export const Route = createFileRoute("/study/$grade/$board/")({
  loader: ({ params }) => {
    const g = Number(params.grade);
    if (!isUpperGrade(g) || !isUpperBoard(params.board)) throw notFound();
    return { grade: g, board: params.board };
  },
  head: ({ params }) => {
    const b = isUpperBoard(params.board) ? UPPER_BOARDS[params.board] : "Board";
    return { meta: [
      { title: `Class ${params.grade} ${b} — All Subjects` },
      { name: "description", content: `Class ${params.grade} ${b}: every subject with chapter-wise lectures, notes and quizzes.` },
      { property: "og:title", content: `Class ${params.grade} ${b} Subjects` },
      { property: "og:description", content: `Lectures, PDF notes and quizzes for Class ${params.grade} ${b}.` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ] };
  },
  component: Subjects,
});

function Subjects() {
  const { grade, board } = Route.useLoaderData();
  const subjects = getUpperSubjects(grade, board);
  return (
    <main className="mx-auto max-w-6xl px-5 py-12">
      <Link to="/study/$grade" params={{ grade: String(grade) }} className="text-sm font-semibold text-primary">← All boards</Link>
      <h1 data-reveal className="mt-3 rounded-3xl border border-primary/10 bg-gradient-to-r from-primary/10 via-accent/20 to-secondary/10 px-4 py-7 text-center font-display text-3xl font-extrabold text-primary">Class {grade} · {UPPER_BOARDS[board]}</h1>
      <p data-reveal className="mt-4 text-center text-sm text-muted-foreground">{board === "icse" && grade < 9 ? "NCERT practice resources · ICSE textbooks vary by school" : board === "bihar" ? "NCERT-based study track · not a state-specific book list" : "Core academic subjects · language and optional subjects vary by school"}</p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
        {subjects.map((s, i) => (
          <Link key={s.id} to="/study/$grade/$board/$subject" params={{ grade: String(grade), board, subject: s.id }} preload="intent"
            data-reveal data-direction="scale" style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}
            className="group rounded-2xl border border-primary/10 bg-card/80 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-primary hover:shadow-3d">
            <div className="class-board-symbol text-5xl">{s.emoji}</div>
            <h2 className="mt-3 font-display text-2xl font-bold">{s.name}</h2>
            <p className="text-sm text-muted-foreground">{s.chapters.length} chapters</p>
            <p className="mt-1 text-xs font-semibold text-primary">{s.book}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
