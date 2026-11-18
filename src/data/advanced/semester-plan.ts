import { fillSemesters } from "@/data/advanced/semester-fill";
import type { AdvancedCourse, AdvancedSubject } from "@/data/advanced/curriculum";
const unit = (id: string, name: string, semester: number, chapters: string[]): AdvancedSubject => ({ id, name, semester, chapters, emoji: "", book: "Undergraduate core topic units" });
export function applySemesterPlan(course: AdvancedCourse): AdvancedCourse {
 if (course.kind !== "college") return course;
 if (["bcom", "bca", "bba"].includes(course.id)) return { ...course, tracks: course.tracks.map(t => ({ ...t, subjects: fillSemesters(course.id, t.id, t.name, t.subjects) })) };
 return { ...course, tracks: course.tracks.map(track => {
  const placement = course.id === "btech" ? [1,1,2,3,3,4,4,5,5,6,7,8] : track.subjects.length === 5 ? [1,2,3,5,6] : [1,2,3,4,5,6];
  const subjects = track.subjects.map((subject,index) => ({...subject, semester: placement[index] ?? 6}));
  if(course.id === "btech") subjects.push(
   unit("technical-communication","Technical Communication",1,["Technical Reading","Report Writing","Presentations and Professional Communication"]),
   unit("engineering-workshop","Engineering Workshop & Drawing",2,["Engineering Drawing","Measurement and Workshop Safety","Prototype Fabrication"]),
   unit("discipline-lab",`${track.name} Laboratory`,3,["Experimental Design","Measurements and Data Collection","Analysis and Lab Reporting"]),
   unit("numerical-methods","Numerical Methods",4,["Numerical Errors","Linear and Nonlinear Equations","Numerical Integration and Differential Equations"]),
   unit("discipline-design",`${track.name} Design Practice`,5,["Design Requirements","Modelling and Simulation","Validation and Optimisation"]),
   unit("mini-project",`${track.name} Mini Project`,6,["Problem Selection","Prototype Implementation","Testing and Demonstration"]),
   unit("professional-elective",`${track.name} Advanced Practice`,7,["Current Developments","Applied Case Studies","Engineering Ethics and Sustainability"]),
   unit("internship","Internship & Industry Practice",8,["Industry Problem Analysis","Professional Practice","Internship Report and Viva"])
  ); else {
   if(track.subjects.length===5) subjects.push(unit("academic-writing","Academic Writing & Analysis",4,["Critical Reading","Evidence and Argument","Academic Essays and Referencing"]));
   subjects.push(
    unit("communication","Communication Skills",1,["Reading and Comprehension","Academic Communication","Presentations"]),
    unit("digital-skills","Digital Skills",2,["Information Literacy","Spreadsheets and Data","Digital Safety"]),
    unit("discipline-practice",`${track.name} Applied Practice`,3,["Methods and Tools","Worked Applications","Evidence and Interpretation"]),
    unit("discipline-analysis",`${track.name} Advanced Study`,4,["Advanced Concepts","Case Study Analysis","Independent Investigation"]),
    unit("seminar",`${track.name} Seminar`,5,["Literature Search","Critical Review","Seminar Presentation"]),
    unit("career-practice","Professional Practice",6,["Portfolio Development","Professional Ethics","Career and Interview Preparation"])
   );
  }
  return {...track,subjects: fillSemesters(course.id, track.id, track.name, subjects)};
 })};
}
