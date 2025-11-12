"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { dictionaries, type Locale } from "./dictionaries";

type I18nContextValue = {
  lang: Locale;
  setLang: (lang: Locale) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function I18nProvider({ children, defaultLang = "es" as Locale }: { children: React.ReactNode; defaultLang?: Locale }) {
  const [lang, setLangState] = useState<Locale>(defaultLang);

  const setLang = useCallback((l: Locale) => {
    setLangState(l);
  }, []);

  const t = useCallback(
    (key: string) => {
      const dict = dictionaries[lang] ?? dictionaries.es;
      return dict[key] ?? key;
    },
    [lang]
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}






