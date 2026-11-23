import { useState } from "react";
import { X, Send, Bot, LifeBuoy } from "lucide-react";
import { useT, type TKey } from "@/lib/i18n";

type Msg = { from: "me" | "bot"; text: string } | { from: "bot"; key: TKey };

function RobotAvatar({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 140" role="img" aria-label="Mechanical learning assistant robot">
      <g className="shiksha-bot">
        <ellipse cx="80" cy="126" rx="52" ry="7" fill="#111439" opacity=".12" />
        <path d="M48 87h64l12 35H36l12-35Z" fill="#C53678" stroke="#111439" strokeWidth="4" strokeLinejoin="round" />
        <rect x="48" y="96" width="64" height="20" rx="3" fill="#FFFFFF" opacity=".92" />
        <path d="M56 96v20M104 96v20" stroke="#FF5841" strokeWidth="4" />
        <rect x="44" y="28" width="72" height="58" rx="10" fill="#E9ECF6" stroke="#111439" strokeWidth="5" />
        <path d="M80 28V15" stroke="#111439" strokeWidth="5" />
        <circle cx="80" cy="12" r="6" fill="#FF5841" stroke="#111439" strokeWidth="3" />
        <rect x="55" y="43" width="50" height="28" rx="5" fill="#111439" />
        <rect x="61" y="49" width="38" height="16" rx="3" fill="#4E6DB5" />
        <rect x="66" y="54" width="12" height="6" rx="2" fill="#FF5841" className="robot-sensor" />
        <rect x="82" y="54" width="12" height="6" rx="2" fill="#FF5841" className="robot-sensor" />
        <circle cx="80" cy="78" r="3" fill="#FF5841" />
        <rect x="68" y="86" width="24" height="7" rx="3" fill="#FF5841" />
        <g className="shiksha-arm">
          <path d="M44 93l-18 4-8 17" fill="none" stroke="#111439" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M44 93l-18 4-8 17" fill="none" stroke="#E9ECF6" strokeWidth="5" strokeLinecap="round" />
          <circle cx="17" cy="116" r="7" fill="#FF5841" stroke="#111439" strokeWidth="3" />
        </g>
        <g>
          <path d="M116 93l16 4 7 18" fill="none" stroke="#111439" strokeWidth="10" strokeLinecap="round" />
          <path d="M116 93l16 4 7 18" fill="none" stroke="#E9ECF6" strokeWidth="5" strokeLinecap="round" />
          <circle cx="140" cy="117" r="7" fill="#C53678" stroke="#111439" strokeWidth="3" />
        </g>
        <path d="M43 122h74" stroke="#111439" strokeWidth="5" strokeLinecap="round" />
        <rect x="52" y="122" width="18" height="8" rx="2" fill="#111439" />
        <rect x="90" y="122" width="18" height="8" rx="2" fill="#111439" />
        <circle cx="80" cy="106" r="5" fill="#FFFFFF" stroke="#C53678" strokeWidth="3" />
      </g>
    </svg>
  );
}

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
        className="fixed bottom-5 right-5 z-50 grid h-20 w-20 place-items-center bg-transparent transition-transform hover:scale-105">
        {open ? <X className="h-6 w-6 text-primary" /> : (
          <RobotAvatar className="h-18 w-18 shiksha-floating" />
        )}
      </button>
      {open && (
        <div className="animate-rise fixed bottom-20 right-5 z-50 flex h-[420px] w-[min(340px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-xl border bg-card shadow-3d">
          <div className="bg-hero p-3 text-primary-foreground">
            <div className="flex items-center gap-2">
              <RobotAvatar className="h-12 w-12 rounded-lg bg-white/90 p-0.5" />
              <p className="font-display font-bold">{t("chatTitle")}</p>
            </div>
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
