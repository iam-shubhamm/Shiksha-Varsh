import type { AdvancedSubject } from "@/data/advanced/curriculum";
/** Typical subject counts per semester (AICTE model curriculum for B.Tech incl. labs; UGC/NEP for others). */
export const SEMESTER_TARGET: Record<string, number[]> = { btech: [8,8,8,8,8,8,6,4], bsc: [6,6,6,6,6,6], ba: [6,6,6,6,6,6], bcom: [6,6,6,6,6,6], bca: [6,6,6,6,6,6], bba: [6,6,6,6,6,6] };
const slug = (s: string) => s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const units = (n: string) => n.endsWith("Lab") || n.includes("Laboratory")
 ? [`Lab Safety and Instruments for ${n.replace(/ Lab(oratory)?$/, "")}`, "Core Experiments", "Measurement and Observation", "Data Analysis and Error", "Lab Record and Viva"]
 : [`Introduction to ${n}`, `Core Concepts of ${n}`, `Methods and Techniques in ${n}`, `Applications of ${n}`, `Problems and Case Studies in ${n}`];
const BTECH_COMMON: Record<number, string[]> = {
 1: ["Engineering Physics", "Basic Electrical Engineering", "Engineering Graphics & Design", "Physics Lab", "Basic Electrical Engineering Lab", "Programming for Problem Solving Lab"],
 2: ["Engineering Mathematics II", "Engineering Chemistry", "Programming for Problem Solving", "English for Communication", "Chemistry Lab", "Workshop Practice Lab", "Environmental Science"],
};
const BRANCH: Record<string, string[]> = {
 cse: ["Discrete Mathematics","Computer Organization & Architecture","Design & Analysis of Algorithms","Theory of Computation","Web Technologies","Machine Learning","Computer Graphics","Information Security","Distributed Systems","Data Structures Lab","DBMS Lab","Operating Systems Lab","Computer Networks Lab","Machine Learning Lab","Big Data Analytics","Open Elective","Professional Elective"],
 it: ["Discrete Mathematics","Computer Organization & Architecture","Design & Analysis of Algorithms","Object-Oriented Programming","Mobile Application Development","Data Mining","Machine Learning","Internet of Things","Information Security","Data Structures Lab","DBMS Lab","Web Development Lab","Computer Networks Lab","Big Data Analytics","DevOps","Open Elective","Professional Elective"],
 "ai-data": ["Discrete Mathematics","Linear Algebra for AI","Probability for Data Science","Operating Systems","Deep Learning","Natural Language Processing","Computer Vision","Big Data Analytics","Data Visualization","Reinforcement Learning","Python Lab","Machine Learning Lab","Deep Learning Lab","DBMS Lab","AI Ethics","Open Elective","Professional Elective"],
 ece: ["Network Theory","Electromagnetic Waves","Microprocessors & Microcontrollers","Digital Signal Processing","VLSI Design","Antenna & Wave Propagation","Wireless Communication","Optical Communication","Analog Electronics Lab","Digital Electronics Lab","Communication Lab","DSP Lab","Microprocessor Lab","Internet of Things","Open Elective","Professional Elective"],
 electrical: ["Network Analysis","Electromagnetic Fields","Measurements & Instrumentation","Power Electronics","Microprocessors & Microcontrollers","Switchgear & Protection","Electric Drives","Renewable Energy Systems","High Voltage Engineering","Electrical Machines Lab","Power Electronics Lab","Measurements Lab","Control Systems Lab","Power Systems Lab","Open Elective","Professional Elective"],
 mechanical: ["Kinematics of Machinery","Dynamics of Machinery","Materials Science","Applied Thermodynamics","Metrology & Measurements","IC Engines","Refrigeration & Air Conditioning","CAD/CAM","Industrial Engineering","Finite Element Analysis","Fluid Mechanics Lab","Manufacturing Lab","Heat Transfer Lab","Machine Drawing Lab","CAD Lab","Open Elective","Professional Elective"],
 civil: ["Building Materials & Construction","Engineering Geology","Hydraulics & Hydraulic Machines","Design of Concrete Structures","Design of Steel Structures","Environmental Engineering","Water Resources Engineering","Estimation & Costing","Construction Management","Foundation Engineering","Surveying Lab","Concrete Lab","Geotechnical Lab","Fluid Mechanics Lab","Environmental Engineering Lab","Open Elective","Professional Elective"],
 chemical: ["Mechanical Operations","Chemical Engineering Thermodynamics","Process Instrumentation","Process Dynamics & Control","Chemical Process Technology","Transport Phenomena","Process Equipment Design","Plant Design & Economics","Petroleum Refining","Fluid Mechanics Lab","Heat Transfer Lab","Mass Transfer Lab","Reaction Engineering Lab","Process Control Lab","Open Elective","Professional Elective"],
 biotech: ["Biochemistry","Microbiology","Cell & Molecular Biology","Genetic Engineering","Immunology","Bioprocess Engineering","Bioinformatics","Enzyme Technology","Downstream Processing","Biochemistry Lab","Microbiology Lab","Molecular Biology Lab","Bioprocess Lab","Bioinformatics Lab","Open Elective","Professional Elective"],
 aerospace: ["Aircraft Materials","Aircraft Structures","Propulsion","Flight Mechanics","Gas Dynamics","Aircraft Systems & Instrumentation","Space Mechanics","Computational Fluid Dynamics","Avionics","Aerodynamics Lab","Structures Lab","Propulsion Lab","Fluid Mechanics Lab","CAD Lab","Open Elective","Professional Elective"],
 automobile: ["Kinematics of Machinery","Materials Science","Automotive Engines","Automotive Chassis","Automotive Transmission","Vehicle Dynamics","Automotive Electrical & Electronics","Electric & Hybrid Vehicles","Vehicle Body Engineering","Engines Lab","Chassis Lab","Manufacturing Lab","Fluid Mechanics Lab","CAD Lab","Open Elective","Professional Elective"],
 robotics: ["Kinematics of Machinery","Sensors & Actuators","Microprocessors & Microcontrollers","Robot Kinematics & Dynamics","Industrial Automation & PLC","Computer Vision","Machine Learning","Hydraulics & Pneumatics","Mechatronic System Design","Electronics Lab","Embedded Systems Lab","Robotics Lab","Automation Lab","CAD Lab","Open Elective","Professional Elective"],
};
const GENERAL: Record<string, (t: string) => string[]> = {
 bsc: t => [`${t} Core Paper I`,`${t} Core Paper II`,`${t} Practical`,"Generic Elective","Environmental Studies","Ability Enhancement (English)","Skill Enhancement Course","Value Added Course","Indian Knowledge Systems","Discipline Specific Elective"],
 ba: t => [`${t} Core Paper I`,`${t} Core Paper II`,"Generic Elective","Environmental Studies","Ability Enhancement (Language)","Skill Enhancement Course","Value Added Course","Indian Knowledge Systems","Discipline Specific Elective","Minor Paper"],
 bcom: () => ["Financial Accounting","Business Law","Business Statistics","Cost Accounting","Corporate Accounting","Income Tax Law & Practice","Management Accounting","Auditing","Banking & Insurance","Financial Management","Goods & Services Tax","E-Commerce","Business Economics","Environmental Studies","Business Communication"],
 bca: () => ["Computer Fundamentals","C Programming","Mathematics for Computing","Data Structures","Java Programming","Computer Architecture","Web Design","Python Programming","Software Testing","Computer Graphics","Programming Lab","Data Structures Lab","Java Lab","Web Lab","Environmental Studies"],
 bba: () => ["Principles of Management","Business Economics","Financial Accounting","Business Communication","Organisational Behaviour","Marketing Management","Human Resource Management","Financial Management","Business Law","Operations Management","Business Statistics","Strategic Management","International Business","Environmental Studies","Management Information Systems"],
};
export function fillSemesters(courseId: string, trackId: string, trackName: string, subjects: AdvancedSubject[]): AdvancedSubject[] {
 const target = SEMESTER_TARGET[courseId]; if (!target) return subjects;
 const out = [...subjects]; const names = new Set(out.map(s => s.name.toLowerCase())); const ids = new Set(out.map(s => s.id));
 const base = trackName.replace(/^Semester \d+$/, "");
 const fixedSem = /^semester-(\d)$/.exec(trackId)?.[1];
 const sems = fixedSem ? [Number(fixedSem)] : target.map((_, i) => i + 1);
 const pool = courseId === "btech" ? (BRANCH[trackId] ?? []) : GENERAL[courseId]!(base);
 let p = 0, elective = 0;
 for (const sem of sems) {
  const common = courseId === "btech" && sem <= 2;
  const list = common ? BTECH_COMMON[sem]! : pool;
  let i = common ? 0 : fixedSem ? (sem - 1) * 2 : p;
  while (out.filter(s => s.semester === sem).length < target[sem - 1]!) {
   let name: string;
   if (i < list.length) { name = list[i++]!; if (names.has(name.toLowerCase())) continue; }
   else name = `${elective++ % 2 ? "Open" : "Professional"} Elective ${Math.floor(elective / 2) + 1}`;
   if (names.has(name.toLowerCase())) continue;
   let id = slug(name); while (ids.has(id)) id += "-x";
   names.add(name.toLowerCase()); ids.add(id);
   out.push({ id, name, semester: sem, chapters: units(name), emoji: "", book: "Undergraduate core topic units" });
  }
  if (!common) p = i;
 }
 return out;
}
