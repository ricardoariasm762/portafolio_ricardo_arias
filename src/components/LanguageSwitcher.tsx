"use client";

import { useI18n } from "../i18n/I18nProvider";

export default function LanguageSwitcher() {
  const { lang, setLang } = useI18n();

  return (
    <div className="inline-flex items-center p-0.5 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)]/90 backdrop-blur-md">
      <button
        type="button"
        onClick={() => setLang("es")}
        aria-pressed={lang === "es"}
        className={`px-2.5 py-1 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 ${
          lang === "es"
            ? "bg-[#38bdf8] text-[#030712] shadow-sm shadow-cyan-500/20"
            : "text-[color:var(--muted)] hover:text-[color:var(--foreground)]"
        }`}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`px-2.5 py-1 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 ${
          lang === "en"
            ? "bg-[#38bdf8] text-[#030712] shadow-sm shadow-cyan-500/20"
            : "text-[color:var(--muted)] hover:text-[color:var(--foreground)]"
        }`}
      >
        EN
      </button>
    </div>
  );
}
