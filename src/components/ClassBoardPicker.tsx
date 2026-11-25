import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { boardOptions, isAvailableBoard, type AvailableBoard } from "@/lib/classes/board-options";
import playmates from "@/assets/class1-playmates.jpg";
import explorers from "@/assets/class2-explorers.jpg";
import discoverers from "@/assets/class3-discoverers.jpg";

const themes = {
  1: { image: playmates, motion: "class-cartoon-play", symbols: ["🧸", "🐰", "🎈", "⭐"], topics: ["🔤 ABC", "🔢 Counting", "🎨 Colours", "🐾 Animals"], welcome: "पहली कक्षा की मज़ेदार पढ़ाई!" },
  2: { image: explorers, motion: "class-cartoon-explore", symbols: ["🦉", "🦋", "✏️", "🌈"], topics: ["✖️ Tables 2–10", "➕ Carry Addition", "🔟 Tens & Ones", "🏷️ Nouns", "✍️ मात्राएँ", "🏡 Animal Homes"], welcome: "अब दूसरी कक्षा की पढ़ाई!" },
  3: { image: discoverers, motion: "class-cartoon-discover", symbols: ["🚀", "🌍", "🔭", "🧩"], topics: ["✖️ Multiplication", "➗ Division", "📚 Stories", "🌱 Our World"], welcome: "तीसरी कक्षा की नई खोज!" },
};

const upperThemes: Record<number, { emblem: string; motion: string; symbols: string[]; topics: string[]; welcome: string }> = {
  4: { emblem: "🗺️", motion: "grade-motion-quest", symbols: ["🧭", "🌈"], topics: ["🔢 Maths Mela", "🌱 Our Wondrous World", "📖 वीणा", "🔤 Santoor"], welcome: "Adventure mode — हर दिन नई खोज!" },
  5: { emblem: "🧭", motion: "grade-motion-voyage", symbols: ["⛵", "🌍"], topics: ["➗ Fractions", "🌊 Journey of a River", "🗺️ Maps", "📖 वीणा 5"], welcome: "Explorer mode — सवाल पूछो, जवाब खोजो।" },
  6: { emblem: "🔭", motion: "grade-motion-orbit", symbols: ["🪐", "✨"], topics: ["📐 Ganita Prakash", "🔬 Curiosity", "🌏 Exploring Society", "🔤 Poorvi"], welcome: "Middle school starts — think like a scientist." },
  7: { emblem: "🧪", motion: "grade-motion-pulse", symbols: ["⚗️", "💡"], topics: ["➖ Integers", "🌿 Life Processes", "🏰 Rise of Empires", "⚡ Electricity"], welcome: "Experiment, observe, conclude." },
  8: { emblem: "⚙️", motion: "grade-motion-gear", symbols: ["🔧", "📊"], topics: ["🧮 Algebra Play", "🦠 Invisible Living World", "🗳️ Electoral System", "🔍 Mirrors & Lenses"], welcome: "Build strong concepts for high school." },
  9: { emblem: "⚛️", motion: "grade-motion-atom", symbols: ["🧬", "📈"], topics: ["📍 Coordinates", "⚛️ Inside the Atom", "🗳️ Democracy", "🚀 Motion"], welcome: "Board foundation year — build strong concepts." },
  10: { emblem: "🎯", motion: "grade-motion-focus", symbols: ["🏆", "📐"], topics: ["📐 Trigonometry", "⚡ Electricity", "🧪 Carbon Compounds", "🇮🇳 Nationalism in India"], welcome: "Board exam year — focused revision." },
};

export function ClassBoardPicker({ grade, onSelect }: { grade: number; onSelect?: (board: AvailableBoard) => void }) {
  if (grade >= 4) return <UpperPicker grade={grade} />;
  const theme = themes[grade as 1 | 2 | 3];
  return <main className="overflow-hidden bg-background px-5 pb-10 pt-4 text-foreground">
    <div className="mx-auto max-w-5xl rounded-3xl border border-primary/10 bg-gradient-to-br from-card via-background to-accent/20 p-4 shadow-sm sm:p-8">
      <div className="flex items-center justify-center gap-3 md:gap-6" data-reveal data-direction="left">
        <div className="relative w-20 shrink-0 sm:w-28 md:w-36">
          <img src={theme.image} width={992} height={672} alt={grade === 1 ? "Teddy bear and rabbit playmates" : grade === 2 ? "Owl and backpack explorers" : "Young astronaut discovering the world"} className={`${theme.motion} aspect-[31/21] w-full rounded-lg object-contain`} />
          <span aria-hidden="true" className={`class-mascot-spark ${theme.motion} absolute -right-1 -top-2 text-xl`}>{theme.symbols[0]}</span>
        </div>
        <div className="min-w-0">
          <h1 className="flex flex-wrap items-center gap-2 font-display text-xl font-extrabold text-primary sm:text-2xl md:gap-3 md:text-4xl"><span>Class</span><span className={`class-grade-number ${theme.motion} grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-primary bg-accent text-3xl text-accent-foreground md:h-16 md:w-16 md:text-4xl`}>{grade}</span><span>Corner</span></h1>
          <p className="mt-2 text-xs font-bold text-muted-foreground md:text-sm">{theme.welcome}</p>
        </div>
      </div>
      <div className="mt-5 text-center md:mt-7" data-reveal>
        <h2 className="font-display text-xl font-bold md:text-3xl">अपना Board चुनो! 👋</h2>
        <p className="mt-1 text-sm text-muted-foreground">Choose your school board</p>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-3 md:mt-6 md:gap-5">
        {boardOptions.map((board, index) => {
          const content = <><span aria-hidden="true" className="class-board-symbol text-3xl sm:text-4xl">{board.emoji}</span><span className="min-w-0 flex-1 sm:w-full"><span className="block font-display text-xl font-bold text-primary md:text-2xl">{board.name}</span><span className="mt-1 block text-xs text-muted-foreground">{board.full}</span><span className="mt-1 block text-xs font-bold text-primary sm:mt-3">⭐ {board.label}</span></span><span aria-hidden="true" className="text-xl text-primary sm:hidden">→</span></>;
          const classes = "group flex h-auto min-h-24 w-full items-center justify-start gap-4 whitespace-normal rounded-2xl border border-border bg-background/80 px-4 py-3 text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:border-primary hover:shadow-3d sm:min-h-48 sm:flex-col sm:justify-center sm:gap-3 sm:p-5 sm:text-center";
          const delay = { ["--reveal-delay" as string]: `${index * 80}ms` };
          if (grade === 3 && isAvailableBoard(board.id)) return <Button key={board.id} asChild variant="plain" className={classes} data-reveal data-direction="scale" style={delay}><Link to="/class3/$board" params={{ board: board.id }} preload="intent">{content}</Link></Button>;
          return <Button key={board.id} variant="plain" className={classes} data-reveal data-direction="scale" style={delay} onClick={() => { if (isAvailableBoard(board.id)) onSelect?.(board.id); }}>{content}</Button>;
        })}
      </div>
      <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs font-semibold text-muted-foreground" data-reveal>{theme.topics.map(t => <span key={t} className="rounded-full border border-border bg-background/80 px-3 py-1.5">{t}</span>)}</div>
    </div>
  </main>;
}

function UpperPicker({ grade }: { grade: number }) {
  const theme = upperThemes[grade] ?? upperThemes[10];
  if (!theme) return null;
  const mature = grade >= 8;
  return <main className="overflow-hidden bg-background px-5 pb-10 pt-4 text-foreground">
    <div className="mx-auto max-w-5xl rounded-3xl border border-primary/10 bg-gradient-to-br from-card via-background to-accent/20 p-4 shadow-sm sm:p-8">
      <div className="flex items-center justify-center gap-4 md:gap-6" data-reveal data-direction="left">
        <div className={`grade-emblem ${theme.motion} relative grid h-20 w-20 shrink-0 place-items-center rounded-full border-2 border-primary bg-card text-4xl shadow-pop sm:h-24 sm:w-24 md:h-28 md:w-28 md:text-5xl`}>
          <span aria-hidden="true">{theme.emblem}</span>
          <span aria-hidden="true" className="grade-satellite absolute text-lg">{theme.symbols[0]}</span>
        </div>
        <div className="min-w-0">
          <h1 className="flex flex-wrap items-center gap-2 font-display text-xl font-extrabold text-primary sm:text-2xl md:gap-3 md:text-4xl"><span>Class</span><span className="class-grade-number grid h-11 min-w-11 shrink-0 place-items-center rounded-full border-2 border-primary bg-accent px-2 text-2xl text-accent-foreground md:h-16 md:min-w-16 md:text-4xl">{grade}</span><span>{mature ? "Study Hub" : "Corner"}</span></h1>
          <p className="mt-2 text-xs font-bold text-muted-foreground md:text-sm">{theme.welcome}</p>
        </div>
      </div>
      <div className="mt-5 text-center md:mt-7" data-reveal>
        <h2 className="font-display text-xl font-bold md:text-3xl">{mature ? "Select your board" : "अपना Board चुनो!"}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{mature ? "Chapter-wise study resources" : "Choose your school board"}</p>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-3 md:mt-6 md:gap-5">
        {boardOptions.map((board, index) => (
          <Button key={board.id} asChild variant="plain" data-reveal data-direction="scale" style={{ ["--reveal-delay" as string]: `${index * 80}ms` }} className="group flex h-auto min-h-24 w-full items-center justify-start gap-4 whitespace-normal rounded-2xl border border-border bg-background/80 px-4 py-3 text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:border-primary hover:shadow-3d sm:min-h-44 sm:flex-col sm:justify-center sm:gap-3 sm:p-5 sm:text-center">
            <Link to="/study/$grade/$board" params={{ grade: String(grade), board: board.id }} preload="intent">
              <span aria-hidden="true" className="class-board-symbol text-3xl sm:text-4xl">{board.emoji}</span>
              <span className="min-w-0 flex-1 sm:w-full"><span className="block font-display text-xl font-bold text-primary md:text-2xl">{board.name}</span><span className="mt-1 block text-xs text-muted-foreground">{board.full}</span><span className="mt-1 block text-xs font-bold text-primary sm:mt-3">{grade >= 9 ? (board.id === "icse" ? "📘 CISCE syllabus" : "📗 NCERT textbooks") : `⭐ ${board.label}`}</span></span>
              <span aria-hidden="true" className="text-xl text-primary sm:hidden">→</span>
            </Link>
          </Button>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs font-semibold text-muted-foreground" data-reveal>{theme.topics.map((t) => <span key={t} className="rounded-full border border-border bg-background/80 px-3 py-1.5">{t}</span>)}</div>
    </div>
  </main>;
}
