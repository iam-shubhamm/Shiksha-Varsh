import { useEffect, useRef, type ReactNode, type PointerEvent } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import type { ClassWebsitePath } from "@/lib/edu-data";
import { cn } from "@/lib/utils";

export function Tilt({ children, className, onClick, to, grade, course }: { children: ReactNode; className?: string; onClick?: () => void; to?: ClassWebsitePath | undefined; grade?: number | undefined; course?: string | undefined }) {
  const frame = useRef<number | null>(null);
  const cancelFrame = () => {
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    frame.current = null;
  };
  useEffect(() => () => { if (frame.current !== null) cancelAnimationFrame(frame.current); }, []);
  const onPointerMove = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
    cancelFrame();
    frame.current = requestAnimationFrame(() => {
      el.style.transform = `perspective(700px) rotateY(${(x - .5) * 10}deg) rotateX(${(.5 - y) * 10}deg) scale(1.015)`;
      el.style.setProperty("--cursor-x", `${x * 100}%`);
      el.style.setProperty("--cursor-y", `${y * 100}%`);
      frame.current = null;
    });
  };
  const onPointerLeave = (event: PointerEvent<HTMLElement>) => {
    cancelFrame();
    event.currentTarget.style.transform = "";
    event.currentTarget.style.removeProperty("--cursor-x");
    event.currentTarget.style.removeProperty("--cursor-y");
  };
  const classes = cn("card-3d block h-auto whitespace-normal", className);
  const motion = { onPointerMove, onPointerLeave, onPointerCancel: onPointerLeave };
  if (to) return <Button asChild variant="plain" className={classes}><Link to={to} preload="intent" {...motion}>{children}</Link></Button>;
  if (grade) return <Button asChild variant="plain" className={classes}><Link to="/study/$grade" params={{ grade: String(grade) }} preload="intent" {...motion}>{children}</Link></Button>;
  if (course) return <Button asChild variant="plain" className={classes}><Link to="/learn/$course" params={{ course }} preload="intent" {...motion}>{children}</Link></Button>;
  return <Button variant="plain" onClick={onClick} className={classes} {...motion}>{children}</Button>;
}
