import { createContext, useContext } from "react";

export type HelpWidgetContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
  pathname: string;
};

export const HelpWidgetContext = createContext<HelpWidgetContextValue | null>(null);

export function useHelpWidget() {
  const context = useContext(HelpWidgetContext);
  if (!context) throw new Error("useHelpWidget must be used within HelpWidgetProvider");
  return context;
}
