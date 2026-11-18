import { getAdvancedCourse, getAdvancedTrack, type AdvancedSubject } from "@/data/advanced/curriculum";

export function getDegreeSemesters(courseId: string, trackId: string) {
  const course = getAdvancedCourse(courseId);
  const track = getAdvancedTrack(courseId, trackId);
  if (!course || !track || course.kind !== "college") return [];
  if (track.id.startsWith("semester-")) return [];
  return Array.from({ length: course.id === "btech" ? 8 : 6 }, (_, index) => index + 1);
}

export function getSemesterSubjects(courseId: string, trackId: string, semester: number): AdvancedSubject[] {
  if (!getDegreeSemesters(courseId, trackId).includes(semester)) return [];
  return getAdvancedTrack(courseId, trackId)?.subjects.filter(subject => subject.semester === semester) ?? [];
}