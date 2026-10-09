"use client";

import React from "react";
import { useTheme } from "../theme/ThemeProvider";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Cambiar tema"
        className="inline-flex items-center justify-center h-9 w-9 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)]/90 text-[color:var(--muted)] opacity-60 transition"
      >
        <span className="w-4 h-4" />
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
      title={isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
      className="inline-flex items-center justify-center h-9 w-9 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--foreground)] hover:border-[color:var(--primary)] hover:text-[color:var(--primary)] hover:shadow-sm transition-all duration-200 cursor-pointer active:scale-95 group"
    >
      {isDark ? (
        <FaSun size={15} className="text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
      ) : (
        <FaMoon size={14} className="text-sky-600 dark:text-[#38bdf8] group-hover:-rotate-12 transition-transform duration-300" />
      )}
    </button>
  );
}
