import { useEffect, useState, type ReactNode } from "react";

import { HelpWidgetContext } from "@/components/HelpWidgetContext";

export function HelpWidgetProvider({
  children,
  pathname,
}: {
  children: ReactNode;
  pathname: string;
}) {
  const [open, setOpen] = useState(pathname === "/");

  useEffect(() => {
    if (pathname !== "/") setOpen(false);
  }, [pathname]);

  return (
    <HelpWidgetContext.Provider value={{ open, setOpen, pathname }}>
      {children}
    </HelpWidgetContext.Provider>
  );
}
