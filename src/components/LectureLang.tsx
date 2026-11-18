import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { translateTexts } from "@/lib/classes/translate.functions";

export type LectureLang = "en" | "hi";
const KEY = "lecture-lang";

export function useLectureLang() {
  const [lang, setLang] = useState<LectureLang>("en");
  useEffect(() => { if (localStorage.getItem(KEY) === "hi") setLang("hi"); }, []);
  const set = (l: LectureLang) => { setLang(l); localStorage.setItem(KEY, l); };
  return [lang, set] as const;
}

export function LectureLangToggle({ lang, onChange }: { lang: LectureLang; onChange: (l: LectureLang) => void }) {
  return (
    <div className="flex flex-wrap items-center justify-end gap-2 text-sm font-bold">
      <span className="text-muted-foreground">🌐 Lecture language:</span>
      {([["en", "English"], ["hi", "हिंदी"]] as const).map(([k, l]) => (
        <Button variant="plain" key={k} aria-pressed={lang === k} onClick={() => onChange(k)}
          className={`h-auto rounded-full px-4 py-1.5 ${lang === k ? "bg-primary text-primary-foreground" : "bg-muted"}`}>{l}</Button>
      ))}
    </div>
  );
}

/** Returns the texts in the chosen language (Hindi via AI translation, cached). */
export function useTranslated(texts: string[], lang: LectureLang) {
  const { data, isFetching } = useQuery({
    queryKey: ["lecture-translate", texts],
    queryFn: () => translateTexts({ data: { texts } }),
    enabled: lang === "hi" && texts.length > 0,
    staleTime: Infinity,
  });
  return { texts: lang === "hi" && data ? data.texts : texts, loading: lang === "hi" && isFetching };
}
