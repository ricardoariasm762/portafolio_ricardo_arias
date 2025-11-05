"use client";

import { useI18n } from "../i18n/I18nProvider";

export default function LanguageSwitcher() {
  const { lang, setLang, t } = useI18n();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLang("es")}
        aria-pressed={lang === "es"}
        className={`px-3 py-1 rounded-md text-sm transition ${lang === "es" ? "bg-[color:var(--primary)] text-[color:var(--primary-foreground)]" : "bg-[color:var(--surface)] text-[color:var(--foreground)]"}`}
      >
        {t("lang.es")}
      </button>
      <button
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`px-3 py-1 rounded-md text-sm transition ${lang === "en" ? "bg-[color:var(--primary)] text-[color:var(--primary-foreground)]" : "bg-[color:var(--surface)] text-[color:var(--foreground)]"}`}
      >
        {t("lang.en")}
      </button>
    </div>
  );
}



