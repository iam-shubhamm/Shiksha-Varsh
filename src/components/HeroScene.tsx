import { useRef } from "react";
import { GraduationCap, Atom, Calculator, FlaskConical, Languages, PenTool, BookOpen, Globe2, Microscope, Music } from "lucide-react";

const OUTER = [Atom, Calculator, FlaskConical, Languages, PenTool, BookOpen];
const INNER = [Globe2, Microscope, Music, Calculator];

/** Mouse-reactive 3D scene: two counter-rotating glowing orbits, pulsing core, sparkles. */
export function HeroScene() {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `rotateY(${x * 22}deg) rotateX(${-y * 22}deg)`;
  };
  const ring = (icons: typeof OUTER, radius: string, tilt: number, cls: string, size: string) => (
    <div className="absolute inset-0" style={{ transformStyle: "preserve-3d", transform: `rotateX(${tilt}deg)` }}>
      <div className={`absolute inset-0 rounded-full ${cls}`} style={{ transformStyle: "preserve-3d" }}>
        {icons.map((I, i) => {
          const deg = (360 / icons.length) * i;
          return (
            <div key={i} className="absolute left-1/2 top-1/2" style={{ transform: `rotate(${deg}deg) translateX(${radius}) rotate(${-deg}deg)`, transformStyle: "preserve-3d" }}>
              <div className={cls.includes("reverse") ? "animate-orbit" : "animate-orbit-counter"} style={{ transformStyle: "preserve-3d" }}>
                <div className={`grid ${size} -translate-x-1/2 -translate-y-1/2 place-items-center rounded-xl border bg-card text-primary shadow-3d ring-2 ring-primary/20`} style={{ transform: `rotateX(${-tilt}deg)` }}>
                  <I className="h-1/2 w-1/2" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="relative grid h-72 w-72 place-items-center md:h-96 md:w-96" style={{ perspective: 1000 }}
      onMouseMove={onMove} onMouseLeave={() => ref.current && (ref.current.style.transform = "")}>
      <div ref={ref} className="relative h-full w-full transition-transform duration-300 ease-out" style={{ transformStyle: "preserve-3d" }}>
        {/* glowing rings */}
        <div className="absolute inset-0" style={{ transform: "rotateX(68deg)", transformStyle: "preserve-3d" }}>
          <div className="shadow-orbit absolute inset-0 rounded-full border-2 border-primary/40" />
          <div className="animate-orbit absolute inset-0 rounded-full" style={{ background: "var(--orbit-trail)", mask: "radial-gradient(circle, transparent 69%, black 70%, black 71%, transparent 72%)", WebkitMask: "radial-gradient(circle, transparent 69%, black 70%, black 71%, transparent 72%)" }} />
        </div>
        <div className="absolute inset-[22%]" style={{ transform: "rotateX(68deg) rotateY(-20deg)", transformStyle: "preserve-3d" }}>
          <div className="absolute inset-0 rounded-full border border-dashed border-secondary/50" />
        </div>
        {ring(OUTER, "min(11rem, 46vw)", 68, "animate-orbit", "h-11 w-11")}
        {ring(INNER, "5.2rem", 68, "animate-orbit-reverse reverse", "h-8 w-8")}
        {/* core */}
        <div className="absolute left-1/2 top-1/2" style={{ transform: "translate(-50%,-50%) translateZ(60px)" }}>
          <span className="animate-pulse-ring absolute inset-0 rounded-2xl border-2 border-primary" />
          <span className="animate-pulse-ring absolute inset-0 rounded-2xl border-2 border-secondary" style={{ animationDelay: "1.3s" }} />
          <div className="animate-bob relative grid h-24 w-24 place-items-center rounded-2xl bg-hero text-primary-foreground shadow-3d md:h-28 md:w-28">
            <GraduationCap className="h-12 w-12 md:h-14 md:w-14" />
          </div>
        </div>
        {/* sparkles */}
        {[[12, 20], [80, 14], [88, 70], [18, 82], [50, 4], [62, 92]].map(([l, tp], i) => (
          <span key={i} className="absolute h-1.5 w-1.5 animate-ping rounded-full bg-accent" style={{ left: `${l}%`, top: `${tp}%`, animationDelay: `${i * 0.4}s`, animationDuration: "2.4s" }} />
        ))}
      </div>
    </div>
  );
}

/** Floating formula particles drifting up behind the hero. */
export function FormulaRain() {
  const items = ["a²+b²=c²", "E=mc²", "π", "∑", "H₂O", "√2", "sin θ", "∫", "ABC", "x+y", "∞", "Δ", "F=ma", "%"];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((s, i) => (
        <span key={i} className="animate-drift-up absolute bottom-[-10%] font-display text-sm font-bold text-primary/30 md:text-base"
          style={{ left: `${(i * 71) % 100}%`, animationDelay: `${-i * 1.7}s`, ["--dur" as string]: `${16 + (i % 5) * 3}s`, ["--rot" as string]: `${(i % 2 ? 1 : -1) * 90}deg` } as React.CSSProperties}>{s}</span>
      ))}
    </div>
  );
}
