import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ThemeToggle } from "@/components/SiteHeader";

vi.mock("@/lib/i18n", () => ({ useT: () => ({ t: (key: string) => key }) }));
vi.mock("@/integrations/supabase/client", () => ({
  supabase: {},
  isSupabaseConfigured: () => false,
}));

afterEach(() => {
  cleanup();
  localStorage.clear();
  document.documentElement.classList.remove("dark");
});

describe("Theme selection", () => {
  it("defaults to Dark Mode when no preference is saved", () => {
    render(<ThemeToggle />);
    expect(document.documentElement).toHaveClass("dark");
    expect(screen.getByRole("button", { name: "dark" })).toHaveAttribute("aria-pressed", "true");
  });
  it("keeps saved Dark Mode when another header mounts", () => {
    localStorage.setItem("theme", "dark");
    const first = render(<ThemeToggle />);
    expect(document.documentElement).toHaveClass("dark");
    first.unmount();
    render(<ThemeToggle />);
    expect(localStorage.getItem("theme")).toBe("dark");
    expect(screen.getByRole("button", { name: "dark" })).toHaveAttribute("aria-pressed", "true");
  });
  it("applies Light Mode to the document and synchronizes both headers", () => {
    localStorage.setItem("theme", "dark");
    render(<><ThemeToggle /><ThemeToggle /></>);
    const lightButton = screen.getAllByRole("button", { name: "light" }).at(0);
    if (!lightButton) throw new Error("Light Mode control missing");
    fireEvent.click(lightButton);
    expect(document.documentElement).not.toHaveClass("dark");
    expect(localStorage.getItem("theme")).toBe("light");
    for (const button of screen.getAllByRole("button", { name: "light" })) {
      expect(button).toHaveAttribute("aria-pressed", "true");
    }
  });
});