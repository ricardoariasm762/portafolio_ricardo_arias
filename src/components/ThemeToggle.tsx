"use client";

import React from "react";
import { useTheme } from "../theme/ThemeProvider";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  function cycle() {
    const next = theme === "light" ? "dark" : theme === "dark" ? "system" : "light";
    setTheme(next);
  }

  const currentLabel = mounted ? (theme === "light" ? "☀️" : theme === "dark" ? "🌙" : "🖥️") : "🖥️";
  const currentTitle = mounted ? (theme === "light" ? "Claro" : theme === "dark" ? "Oscuro" : "Sistema") : "Sistema";

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label="Cambiar tema"
      className="inline-flex items-center justify-center h-8 w-8 rounded-full border border-[color:var(--border)] bg-[color:var(--background)] text-[color:var(--foreground)] hover:opacity-80 transition"
      title={currentTitle}
      suppressHydrationWarning
    >
      <span className="text-base leading-none">{currentLabel}</span>
    </button>
  );
}


