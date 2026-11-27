import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

import { EXTRA } from "./i18n-extra";

export const LANGS = {
  en: "English", hi: "हिन्दी", bn: "বাংলা", ta: "தமிழ்", te: "తెలుగు", kn: "ಕನ್ನಡ",
  ml: "മലയാളം", mr: "मराठी", gu: "ગુજરાતી", pa: "ਪੰਜਾਬੀ",
} as const;
export type Lang = keyof typeof LANGS;

const dict = {
  en: {
    navCourses: "Courses", navFeatures: "Features", navHelp: "Help", light: "Light", dark: "Dark", language: "Language",
    badge: "From Class 1 to Graduation", heroA: "A new world of", heroB: "Learning",
    heroSub: "Pick your course and jump straight to your lectures — simple, fast and reliable.",
    ctaCourse: "Choose course", ctaHelp: "Get help",
    coursesEyebrow: "Courses", coursesTitle: "Choose your class or course",
    gSchool: "School — Class 1 to 10", gSenior: "Senior Secondary — Class 11 & 12", gCollege: "Graduation Courses", start: "Start",
    primary: "Primary", middle: "Middle School", secondary: "Secondary", streams: "Science • Commerce • Arts",
    eng: "Engineering", sci: "Science", com: "Commerce", arts: "Arts", bca: "Computer Applications", bba: "Business Administration",
    whyEyebrow: "Why us", whyTitle: "Learning made easier",
    f1: "Video lectures", f1d: "Easy lectures for every subject", f2: "Anytime, anywhere", f2d: "Study at your own pace",
    f3: "Expert teachers", f3d: "Learn from experienced teachers", f4: "Full syllabus", f4d: "School to graduation",
    helpEyebrow: "Help Center", helpTitle: "Facing an issue? Tell us",
    helpSub: "Write your question or concern and our team will reply as soon as possible.",
    emailSupport: "Email support", emailSupportD: "Reply within 24 hours", liveChat: "Live chat", liveChatD: "Tap Help in the top bar to open the chat.",
    faqTitle: "Frequently asked questions",
    q1: "How do I open lectures?", a1: "Choose your class or course above — you'll be taken straight to its lectures.",
    q2: "Is the content available in Hindi?", a2: "Yes, switch the language from the top bar any time.",
    q3: "A lecture won't open, what do I do?", a3: "Fill the help form with details and our team will fix it quickly.",
    q4: "How do I contact support?", a4: "Use the help form or tap Help in the top bar to open the chat.",
    fName: "Your name *", fEmail: "Email *", fPhone: "Mobile (optional)", fMsg: "Describe your issue or question *", fSend: "Send message",
    t1: "Question about a course", t2: "Lecture not opening", t3: "Payment / Fees", t4: "Technical issue", t5: "Other",
    eName: "Please enter your name", eEmail: "Please enter a valid email", eMsg: "Please describe your issue in a bit more detail", eFail: "Couldn't send, please try again.",
    doneT: "Message received!", doneD: "Our team will get back to you soon.", again: "Send another message",
    soon: "link coming soon", rights: "All rights reserved.",
    chatHi: "Hi! How can I help you?", chatThanks: "Thanks! Your message will reach our team.", chatPh: "Type your question...",
    chatTitle: "Help Center",
    navHome: "Home", navMaterial: "Study Material", navHow: "How it works", login: "Login", logout: "Logout", scroll: "Scroll to explore",
    s1: "Courses", s2: "Lesson-wise quizzes", s3: "Free PDF & notes", s4: "Languages",
    f5: "PDF notebooks", f5d: "Download complete notebooks as PDF", f6: "Lesson notes", f6d: "Short, clear notes for every lesson",
    f7: "Lesson-wise quiz", f7d: "Test yourself after every lesson", f8: "Lesson-wise structure", f8d: "Every chapter split into easy lessons",
    f1d2: "Watch YouTube lectures right here on the site",
    matEyebrow: "Study material", matTitle: "Everything for every lesson",
    matSub: "Each lesson comes with its video, notes, PDF notebook and a quiz — all in one place.",
    m1: "Watch video", m1d: "Plays directly on this site", m2: "Read notes", m2d: "Key points of the lesson", m3: "Download PDF", m3d: "Full notebook PDF", m4: "Take quiz", m4d: "Check what you learned",
    howEyebrow: "How it works", howTitle: "Start in 3 simple steps",
    h1: "Choose your course", h1d: "Pick your class or graduation course", h2: "Open a lesson", h2d: "Watch video, read notes, download PDF", h3: "Take the quiz", h3d: "Practice and track your progress",
    authLogin: "Login", authSignup: "Create account", authForgot: "Forgot password?", authWelcome: "Welcome back", authWelcomeD: "Login to continue your learning",
    authNew: "Create your account", authNewD: "Join and start learning today", authResetT: "Reset your password", authResetD: "We'll email you a link to reset your password",
    pw: "Password", fullName: "Full name", sendLink: "Send reset link", backLogin: "Back to login", noAcc: "Don't have an account?", haveAcc: "Already have an account?",
    checkEmail: "Check your email to confirm your account.", resetSent: "Reset link sent — check your email.", newPw: "New password", savePw: "Save password", pwSaved: "Password updated!", pwMin: "Password must be at least 6 characters",
    demoTag: "Live demo lesson", lessonName: "Pythagorean Theorem", lessonMeta: "Class 10 • Maths • Lesson 1",
    dlNotes: "Download notes (PDF)", quizTitle: "Quick quiz", quizSub: "5 questions on this lesson", check: "Submit answers",
    scoreTxt: "Your score", retry: "Try again", correct: "Correct", wrong: "Correct answer:", pickAll: "Answer all questions first",
  },
  hi: {
    navCourses: "कोर्स", navFeatures: "विशेषताएँ", navHelp: "मदद", light: "लाइट", dark: "डार्क", language: "भाषा",
    badge: "Class 1 से Graduation तक", heroA: "पढ़ाई का", heroB: "नया संसार",
    heroSub: "अपना course चुनें और सीधे अपने lectures तक पहुँचें — आसान, तेज़ और भरोसेमंद।",
    ctaCourse: "Course चुनें", ctaHelp: "मदद लें",
    coursesEyebrow: "कोर्स", coursesTitle: "अपनी Class या Course चुनें",
    gSchool: "School — Class 1 से 10", gSenior: "Senior Secondary — Class 11 और 12", gCollege: "Graduation कोर्स", start: "शुरू करें",
    primary: "प्राथमिक", middle: "माध्यमिक", secondary: "उच्च माध्यमिक", streams: "विज्ञान • वाणिज्य • कला",
    eng: "इंजीनियरिंग", sci: "विज्ञान", com: "वाणिज्य", arts: "कला", bca: "कंप्यूटर एप्लीकेशन", bba: "बिज़नेस एडमिनिस्ट्रेशन",
    whyEyebrow: "क्यों चुनें", whyTitle: "सीखना अब और आसान",
    f1: "Video Lectures", f1d: "हर विषय के आसान lectures", f2: "कभी भी, कहीं भी", f2d: "अपने समय पर पढ़ें",
    f3: "अनुभवी शिक्षक", f3d: "अनुभवी शिक्षकों से सीखें", f4: "पूरा Syllabus", f4d: "School से Graduation तक",
    helpEyebrow: "Help Center", helpTitle: "कोई समस्या है? हमें बताइए",
    helpSub: "अपनी समस्या या सवाल लिखें, हमारी टीम जल्द से जल्द जवाब देगी।",
    emailSupport: "Email सहायता", emailSupportD: "24 घंटे में जवाब", liveChat: "Live chat", liveChatD: "Chat खोलने के लिए ऊपर Help बटन दबाएँ।",
    faqTitle: "अक्सर पूछे जाने वाले सवाल",
    q1: "Lectures कैसे खोलें?", a1: "ऊपर अपनी class या course चुनें — आप सीधे उसके lectures पर पहुँच जाएँगे।",
    q2: "क्या सामग्री हिन्दी में है?", a2: "हाँ, ऊपर से कभी भी भाषा बदल सकते हैं।",
    q3: "Lecture नहीं खुल रहा, क्या करें?", a3: "Help form में पूरी जानकारी भरें, हमारी टीम जल्दी ठीक करेगी।",
    q4: "Support से कैसे संपर्क करें?", a4: "Help form भरें या chat खोलने के लिए ऊपर Help बटन दबाएँ।",
    fName: "आपका नाम *", fEmail: "Email *", fPhone: "Mobile (वैकल्पिक)", fMsg: "अपनी समस्या या सवाल यहाँ लिखें *", fSend: "संदेश भेजें",
    t1: "Course से जुड़ा सवाल", t2: "Lecture नहीं खुल रहा", t3: "Payment / Fees", t4: "Technical समस्या", t5: "अन्य",
    eName: "नाम लिखें", eEmail: "सही email लिखें", eMsg: "अपनी समस्या थोड़ा विस्तार से लिखें", eFail: "भेजने में समस्या हुई, फिर से कोशिश करें।",
    doneT: "आपका संदेश मिल गया!", doneD: "हमारी टीम जल्द ही आपसे संपर्क करेगी।", again: "एक और संदेश भेजें",
    soon: "link जल्द जोड़ा जाएगा", rights: "सर्वाधिकार सुरक्षित।",
    chatHi: "नमस्ते! मैं आपकी क्या मदद कर सकती हूँ?", chatThanks: "धन्यवाद! आपका संदेश हमारी टीम तक पहुँचेगा।", chatPh: "अपना सवाल लिखें...",
    chatTitle: "Help Center",
    navHome: "होम", navMaterial: "पढ़ाई सामग्री", navHow: "कैसे काम करता है", login: "Login", logout: "Logout", scroll: "नीचे scroll करें",
    s1: "कोर्स", s2: "पाठ-वार क्विज़", s3: "PDF और नोट्स", s4: "भाषाएँ",
    f5: "PDF नोटबुक", f5d: "पूरी नोटबुक PDF में डाउनलोड करें", f6: "पाठ के नोट्स", f6d: "हर पाठ के छोटे, साफ़ नोट्स",
    f7: "पाठ-वार क्विज़", f7d: "हर पाठ के बाद खुद को जाँचें", f8: "पाठ-वार पढ़ाई", f8d: "हर अध्याय आसान पाठों में बँटा",
    f1d2: "YouTube lectures सीधे इसी website पर देखें",
    matEyebrow: "पढ़ाई सामग्री", matTitle: "हर पाठ के लिए सब कुछ",
    matSub: "हर पाठ के साथ video, notes, PDF नोटबुक और quiz — सब एक ही जगह।",
    m1: "Video देखें", m1d: "सीधे इसी website पर चलेगा", m2: "Notes पढ़ें", m2d: "पाठ के मुख्य बिंदु", m3: "PDF डाउनलोड", m3d: "पूरी नोटबुक PDF", m4: "Quiz दें", m4d: "जो सीखा उसे जाँचें",
    howEyebrow: "कैसे काम करता है", howTitle: "3 आसान कदमों में शुरू करें",
    h1: "Course चुनें", h1d: "अपनी class या graduation course चुनें", h2: "पाठ खोलें", h2d: "Video देखें, notes पढ़ें, PDF लें", h3: "Quiz दें", h3d: "अभ्यास करें और प्रगति देखें",
    authLogin: "Login", authSignup: "नया account बनाएँ", authForgot: "Password भूल गए?", authWelcome: "फिर से स्वागत है", authWelcomeD: "अपनी पढ़ाई जारी रखने के लिए login करें",
    authNew: "अपना account बनाएँ", authNewD: "जुड़ें और आज ही पढ़ाई शुरू करें", authResetT: "Password reset करें", authResetD: "हम आपके email पर reset link भेजेंगे",
    pw: "Password", fullName: "पूरा नाम", sendLink: "Reset link भेजें", backLogin: "Login पर वापस", noAcc: "Account नहीं है?", haveAcc: "पहले से account है?",
    checkEmail: "Account confirm करने के लिए अपना email देखें।", resetSent: "Reset link भेज दिया — email देखें।", newPw: "नया password", savePw: "Password सेव करें", pwSaved: "Password बदल गया!", pwMin: "Password कम से कम 6 अक्षर का हो",
    demoTag: "Live demo पाठ", lessonName: "पाइथागोरस प्रमेय", lessonMeta: "Class 10 • गणित • पाठ 1",
    dlNotes: "Notes डाउनलोड करें (PDF)", quizTitle: "छोटा Quiz", quizSub: "इस पाठ पर 5 सवाल", check: "उत्तर जमा करें",
    scoreTxt: "आपका स्कोर", retry: "फिर से करें", correct: "सही", wrong: "सही उत्तर:", pickAll: "पहले सभी सवालों के उत्तर दें",
  },
} satisfies Record<"en" | "hi", Record<string, string>>;

export type TKey = keyof typeof dict.en;
const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (k: TKey) => string }>({
  lang: "en", setLang: () => {}, t: (k) => dict.en[k],
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  useEffect(() => {
    const s = localStorage.getItem("lang");
    if (s && s in LANGS) setLang(s as Lang);
  }, []);
  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);
  return <Ctx.Provider value={{ lang, setLang, t: (k) => (lang === "en" || lang === "hi" ? dict[lang][k] : EXTRA[lang]?.[k] ?? dict.en[k]) }}>{children}</Ctx.Provider>;
}
export const useT = () => useContext(Ctx);
