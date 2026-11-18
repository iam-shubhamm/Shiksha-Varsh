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
    setMsgs((m) => [...m, { from: "me", text: text.slice(0, 1000) }, { from: "bot", key: "chatThanks" }]);
    setText("");
  };

  return (
    <>
      <button onClick={() => setOpen(!open)} aria-label="Open AI learning assistant"
        className="fixed bottom-5 right-5 z-50 group grid h-16 w-16 place-items-center rounded-full border-2 border-primary/30 bg-card shadow-3d transition-transform hover:scale-105">
        {open ? <X className="h-6 w-6 text-primary" /> : (
          <span className="relative block h-12 w-12" aria-hidden="true">
            <span className="absolute left-1/2 top-0 h-2 w-1 -translate-x-1/2 rounded-full bg-primary" />
            <span className="absolute left-1/2 top-1 h-2 w-2 -translate-x-1/2 rounded-full bg-secondary animate-pulse" />
            <span className="ai-robot-head absolute left-1/2 top-3 h-8 w-10 -translate-x-1/2 rounded-[10px] border-2 border-primary bg-hero">
              <span className="absolute left-1.5 top-2 h-2 w-2 rounded-full bg-card ai-robot-eye" />
              <span className="absolute right-1.5 top-2 h-2 w-2 rounded-full bg-card ai-robot-eye" />
              <span className="absolute bottom-1.5 left-1/2 h-1 w-4 -translate-x-1/2 rounded-full bg-card/90" />
            </span>
            <span className="absolute bottom-0 left-1/2 h-2 w-8 -translate-x-1/2 rounded-full bg-primary/20" />
          </span>
        )}
      </button>
      {open && (
        <div className="animate-rise fixed bottom-20 right-5 z-50 flex h-[420px] w-[min(340px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-xl border bg-card shadow-3d">
          <div className="bg-hero p-3 text-primary-foreground">
            <p className="font-display font-bold">{t("chatTitle")}</p>
            <div className="mt-2 flex gap-2 text-xs">
              {(["ai", "help"] as const).map((x) => (
                <button key={x} onClick={() => setTab(x)} className={`rounded-full px-3 py-1 ${tab === x ? "bg-background text-foreground" : "bg-background/20"}`}>
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
                    <p className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${m.from === "me" ? "bg-primary text-primary-foreground" : "bg-muted"}`}>{"key" in m ? t(m.key) : m.text}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-2 border-t p-2">
                <input value={text} onChange={(e) => setText(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send()} placeholder={t("chatPh")} className="flex-1 rounded-full border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" />
                <button onClick={send} aria-label="Send" className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground"><Send className="h-4 w-4" /></button>
              </div>
            </>
          ) : (
            <div className="space-y-2 overflow-y-auto p-3 text-sm">
              {(["q1", "q2", "q3", "q4"] as const).map((q) => (
                <a key={q} href="#help" onClick={() => setOpen(false)} className="flex items-center gap-2 rounded-lg bg-muted p-3 hover:bg-muted/70"><LifeBuoy className="h-4 w-4 shrink-0 text-secondary" />{t(q)}</a>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
