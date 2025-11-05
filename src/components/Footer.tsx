"use client";

import { useI18n } from "../i18n/I18nProvider";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="py-6 text-center text-sm bg-[color:var(--surface)] text-[color:var(--muted)]">
      <p>{t("footer.copyright")}</p>
    </footer>
  );
}



