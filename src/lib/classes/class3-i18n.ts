import { useT } from "@/lib/i18n";
const dict = {
  en: {
    classLabel: "Class 3", chooseBoard: "Choose your board", flow: "Every subject: Lecture → PDF → Quiz",
    subjects: "subjects", allBoards: "← All boards", chapters: "chapters", subjectsBack: "subjects",
    watch: "▶ Watch video lecture (YouTube)", textNotes: "Text Notes", nextPdf: "Next: PDF →",
    nextQuiz: "Next: Quiz →", notes: "Notes", download: "⬇ Download PDF", retry: "Try again", bihar: "State Board", downloadAll: "⬇ Download full subject PDF", moreVideos: "More videos on YouTube ↗", noVideo: "Video not found right now.", video: "Video",
  },
  hi: {
    classLabel: "कक्षा 3", chooseBoard: "अपना बोर्ड चुनें", flow: "हर subject में Lecture → PDF → Quiz",
    subjects: "subjects", allBoards: "← सभी बोर्ड", chapters: "chapters", subjectsBack: "subjects",
    watch: "▶ Video lecture देखें (YouTube)", textNotes: "Text Notes", nextPdf: "आगे: PDF →",
    nextQuiz: "आगे: Quiz →", notes: "Notes", download: "⬇ PDF Download", retry: "फिर से", bihar: "State Board", downloadAll: "⬇ पूरे subject की PDF", moreVideos: "YouTube पर और videos ↗", noVideo: "अभी video नहीं मिला।", video: "Video",
  },
} as const;


type Key = keyof typeof dict.en;
export function useLang() { const { lang } = useT(); return { t: (key: Key) => dict[lang === "hi" ? "hi" : "en"][key] }; }
