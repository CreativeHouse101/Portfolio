"use client";

import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

const themeStorageKey = "idea-house-theme";

function isTheme(value: string | null): value is Theme {
  return value === "light" || value === "dark";
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(themeStorageKey);
    const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

    setTheme(isTheme(savedTheme) ? savedTheme : preferredTheme);
    setHydrated(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");

    if (hydrated) {
      window.localStorage.setItem(themeStorageKey, theme);
    }
  }, [hydrated, theme]);

  return { setTheme, theme };
}
