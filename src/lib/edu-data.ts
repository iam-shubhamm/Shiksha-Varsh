import type { TKey } from "./i18n";

// link: अभी खाली है — बाद में असली website link यहाँ डालें (भाषा के code से, जैसे en, hi, ta)
export type Course = {
  name: string; sub: TKey; group: "school" | "senior" | "college";
  link: Partial<Record<string, string>>;
  fx: string[]; // hover पर उड़ने वाले symbols — course के स्तर के हिसाब से
};

const FX: Record<string, string[]> = {
  "Class 1": ["🎈", "⭐", "A", "B", "C", "🧸", "🍭"],
  "Class 2": ["🍎", "1", "2", "3", "🐣", "🌈", "✏️"],
  "Class 3": ["➕", "➖", "🔺", "⬛", "🌻", "🐢", "📏"],
  "Class 4": ["✖️", "➗", "🌍", "🦋", "📐", "🔢", "🎨"],
  "Class 5": ["½", "¾", "🔭", "🌱", "📖", "%", "🧩"],
  "Class 6": ["x", "∠", "🧲", "🗺️", "π", "⚖️", "🔬"],
  "Class 7": ["a+b", "≥", "∆", "🌋", "⚗️", "∥", "🧪"],
  "Class 8": ["x²", "√", "⊥", "💡", "∛", "🧬", "⚙️"],
  "Class 9": ["sin", "∆", "⚛", "Σ", "∠90°", "🔋", "F=ma"],
  "Class 10": ["△", "∠θ", "sin θ", "cos θ", "a²+b²", "tan", "⟂"],
  "Class 11": ["dy/dx", "lim", "Δv", "∞", "H₂O", "𝑓(x)", "Σ"],
  "Class 12": ["∫", "∂", "dx", "e^x", "λ", "∮", "DNA"],
  "B.Tech": ["⚙️", "</>", "⚡", "🔧", "Ω", "🤖", "∇"],
  "B.Sc": ["⚛", "🧪", "🔬", "ψ", "🧬", "ℏ", "Δ"],
  "B.Com": ["₹", "📈", "%", "💹", "🧾", "Σ", "📊"],
  "B.A": ["📜", "🎭", "🏛️", "✒️", "🌐", "📚", "🗿"],
  "BCA": ["</>", "💻", "{ }", "01", "🖱️", "SQL", "#"],
  "BBA": ["💼", "📊", "🤝", "📈", "🎯", "₹", "🏢"],
};

export type ClassWebsitePath = "/class1" | "/class2" | "/class3";
export const CLASS_WEBSITE_LINKS: Record<string, ClassWebsitePath> = {
  "Class 1": "/class1", "Class 2": "/class2", "Class 3": "/class3",
};

export const UPPER_CLASS_GRADE: Record<string, number> = Object.fromEntries([4, 5, 6, 7, 8, 9, 10].map((g) => [`Class ${g}`, g]));

const mk = (name: string, sub: TKey, group: Course["group"]): Course => ({ name, sub, group, link: CLASS_WEBSITE_LINKS[name] ? { en: CLASS_WEBSITE_LINKS[name] } : UPPER_CLASS_GRADE[name] ? { en: `/study/${UPPER_CLASS_GRADE[name]}` } : {}, fx: FX[name] ?? ["⭐"] });

export const COURSES: Course[] = [
  ...Array.from({ length: 10 }, (_, i) => mk(`Class ${i + 1}`, i < 5 ? "primary" : i < 8 ? "middle" : "secondary", "school")),
  mk("Class 11", "streams", "senior"), mk("Class 12", "streams", "senior"),
  mk("B.Tech", "eng", "college"), mk("B.Sc", "sci", "college"), mk("B.Com", "com", "college"),
  mk("B.A", "arts", "college"), mk("BCA", "bca", "college"), mk("BBA", "bba", "college"),
];
