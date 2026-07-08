import { Moon, Sun } from "lucide-react";

import { type Theme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

type ThemeSwitchProps = {
  mobile?: boolean;
  setTheme: (theme: Theme) => void;
  theme: Theme;
};

export function ThemeSwitch({ mobile = false, setTheme, theme }: ThemeSwitchProps) {
  return (
    <div className={cn("grid grid-cols-2 rounded-[8px] border border-line bg-surface p-1 shadow-sm", mobile ? "w-full" : "hidden sm:grid")}>
      <button
        aria-pressed={theme === "light"}
        className={cn(
          "inline-flex h-8 items-center justify-center gap-1.5 rounded-[6px] px-3 text-xs font-semibold transition",
          theme === "light" ? "bg-paper text-signal" : "text-muted hover:text-signal"
        )}
        onClick={() => setTheme("light")}
        title="Light mode"
        type="button"
      >
        <Sun size={15} />
        <span>Light</span>
      </button>
      <button
        aria-pressed={theme === "dark"}
        className={cn(
          "inline-flex h-8 items-center justify-center gap-1.5 rounded-[6px] px-3 text-xs font-semibold transition",
          theme === "dark" ? "bg-paper text-signal" : "text-muted hover:text-signal"
        )}
        onClick={() => setTheme("dark")}
        title="Dark mode"
        type="button"
      >
        <Moon size={15} />
        <span>Dark</span>
      </button>
    </div>
  );
}
