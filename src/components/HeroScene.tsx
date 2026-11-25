import { GraduationCap } from "lucide-react";
import study from "@/assets/advanced-study.jpg";

export function HeroScene() {
  return (
    <div className="relative mx-auto w-full max-w-[34rem] px-3 py-5">
      <div aria-hidden="true" className="absolute right-0 top-0 h-28 w-28 rounded-full bg-accent" />
      <div aria-hidden="true" className="absolute bottom-0 left-0 h-28 w-28 rounded-full bg-primary/10" />
      <div className="relative aspect-video overflow-hidden rounded-3xl border-4 border-white bg-muted shadow-[0_25px_70px_-22px_rgba(41,38,45,0.35)]">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={study}
          aria-hidden="true"
          className="h-full w-full object-contain"
        >
          <source src="/videos/shikshaverse-intro.mp4" type="video/mp4" />
        </video>
      </div>
      <div
        aria-hidden="true"
        className="absolute -bottom-1 right-0 grid h-[4.5rem] w-[4.5rem] place-items-center rounded-2xl border-4 border-background bg-primary text-primary-foreground shadow-xl"
      >
        <GraduationCap className="h-8 w-8" />
      </div>
    </div>
  );
}
