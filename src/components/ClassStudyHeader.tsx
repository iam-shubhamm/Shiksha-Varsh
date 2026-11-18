import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";

export function ClassStudyHeader() {
  return <div className="print:hidden"><SiteHeader nav={false} /></div>;
}

/** Single back link shown only on a class's board picker screen. */
export function AllCoursesLink() {
  return <div className="mx-auto max-w-6xl px-5 pt-4"><Link to="/" hash="courses" className="text-sm font-semibold text-primary">← All courses</Link></div>;
}
