import { Button } from "@/components/ui/button";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getBoard } from "@/data/class3";
import { useLang } from "@/lib/classes/class3-i18n";

export const Route = createFileRoute("/class3/$board")({
  loader: ({ params }) => {
    const board = getBoard(params.board);
    if (!board) throw notFound();
    return { boardId: board.id };
  },
  head: ({ params }) => {
    const name = getBoard(params.board)?.name ?? "Board";
    return {
      meta: [
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { title: `Class 3 ${name} — All Subjects` },
        { name: "description", content: `Class 3 ${name} lectures, PDFs and quizzes for all subjects.` },
        { property: "og:title", content: `Class 3 ${name} Subjects` },
        { property: "og:description", content: `Class 3 ${name} lectures, PDFs, quizzes.` },
      ],
    };
  },
  component: BoardPage,
});

function BoardPage() {
  const board = getBoard(Route.useLoaderData().boardId);
  const { t } = useLang();
  if (!board) return null;
  const name = board.id === "bihar" ? t("bihar") : board.name;
  return (
    <main className="h-auto whitespace-normal mx-auto max-w-6xl px-5 py-12">
      <Link to="/class3" className="h-auto whitespace-normal text-sm font-semibold text-primary">{t("allBoards")}</Link>
      <h1 className="h-auto whitespace-normal mt-2 text-center font-display text-3xl font-extrabold text-primary">🎒 {t("classLabel")} Corner · {name}</h1>
      <div className="h-auto whitespace-normal mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
        {board.subjects.map((s) => (
          <Link key={s.id} to="/class3/$board/$subject" params={{ board: board.id, subject: s.id }}
             className="h-auto whitespace-normal rounded-lg border-2 border-border bg-card p-6 text-center shadow-pop transition hover:-translate-y-1 hover:border-primary">
            <div className="class-cartoon-discover text-5xl">{s.emoji}</div>
            <h2 className="h-auto whitespace-normal mt-3 font-display text-2xl font-bold">{s.name}</h2>
            <p className="h-auto whitespace-normal text-sm text-muted-foreground">{s.chapters.length} {t("chapters")}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
