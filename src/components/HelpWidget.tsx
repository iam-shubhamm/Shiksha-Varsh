import { useState } from "react";
import { X, Send, Bot, LifeBuoy } from "lucide-react";
import { useT, type TKey } from "@/lib/i18n";

type Msg = { from: "me" | "bot"; text: string } | { from: "bot"; key: TKey };

export function HelpWidget() {
  const { t } = useT();
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<"ai" | "help">("ai");
  const [msgs, setMsgs] = useState<Msg[]>([{ from: "bot", key: "chatHi" }]);
  const [text, setText] = useState("");

  const send = () => {
    if (!text.trim()) return;
    setMsgs((m) => [
      ...m,
      { from: "me", text: text.slice(0, 1000) },
      { from: "bot", key: "chatThanks" },
    ]);
    setText("");
  };

  return (
    <>
      {!open && (
        <div
          role="status"
          className="assistant-greeting fixed bottom-[5.25rem] right-5 z-50 flex max-w-[calc(100vw-2.5rem)] items-center gap-2 rounded-2xl border border-primary/10 bg-card px-4 py-3 text-sm font-semibold text-foreground shadow-lg"
        >
          <span aria-hidden="true" className="assistant-greeting-dot h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
          {t("chatHi")}
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close AI learning assistant" : "Open AI learning assistant"}
        aria-expanded={open}
        aria-controls="ai-learning-assistant"
        className="assistant-launcher fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-hero text-white ring-4 ring-background/90 transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
      >
        {open ? (
          <X className="h-6 w-6" />
        ) : (
          <>
            <Bot className="h-7 w-7" />
            <span aria-hidden="true" className="absolute right-0 top-0 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-background" />
          </>
        )}
      </button>
      {open && (
        <div id="ai-learning-assistant" role="dialog" aria-label={t("chatTitle")} className="animate-rise fixed bottom-20 right-5 z-50 flex h-[420px] w-[min(340px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-xl border bg-card shadow-3d">
          <div className="bg-hero p-3 text-primary-foreground">
            <div className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/15">
                <Bot aria-hidden="true" className="h-6 w-6" />
              </span>
              <p className="font-display font-bold">{t("chatTitle")}</p>
            </div>
            <div className="mt-2 flex gap-2 text-xs">
              {(["ai", "help"] as const).map((x) => (
                <button
                  key={x}
                  onClick={() => setTab(x)}
                  className={`rounded-full px-3 py-1 ${tab === x ? "bg-background text-foreground" : "bg-background/20"}`}
                >
                  {x === "ai" ? t("tabAi") : t("tabHelp")}
                </button>
              ))}
            </div>
          </div>
          {tab === "ai" ? (
            <>
              <div className="flex-1 space-y-2 overflow-y-auto p-3">
                {msgs.map((m, i) => (
                  <div key={i} className={`flex gap-2 ${m.from === "me" ? "justify-end" : ""}`}>
                    {m.from === "bot" && <Bot className="mt-1 h-4 w-4 shrink-0 text-primary" />}
                    <p
                      className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${m.from === "me" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                    >
                      {"key" in m ? t(m.key) : m.text}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex gap-2 border-t p-2">
                <input
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && send()}
                  placeholder={t("chatPh")}
                  className="flex-1 rounded-full border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
                <button
                  onClick={send}
                  aria-label="Send"
                  className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </>
          ) : (
            <div className="space-y-2 overflow-y-auto p-3 text-sm">
              {(["q1", "q2", "q3", "q4"] as const).map((q) => (
                <a
                  key={q}
                  href="#help"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 rounded-lg bg-muted p-3 hover:bg-muted/70"
                >
                  <LifeBuoy className="h-4 w-4 shrink-0 text-secondary" />
                  {t(q)}
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
