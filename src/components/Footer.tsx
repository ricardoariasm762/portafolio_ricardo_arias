"use client";

import { useI18n } from "../i18n/I18nProvider";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="px-6 py-10 bg-[color:var(--surface)] text-[color:var(--foreground)] border-t border-[color:var(--border)]">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 items-start">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Ricardo Arias</h3>
          <p className="text-sm text-[color:var(--muted)]">{t("footer.bio")}</p>
        </div>

        <nav className="grid grid-cols-2 gap-2 text-sm">
          <a href="#home" className="hover:text-[color:var(--primary)]">{t("nav.home")}</a>
          <a href="#habilidades" className="hover:text-[color:var(--primary)]">{t("nav.skills")}</a>
          <a href="#acerca" className="hover:text-[color:var(--primary)]">{t("nav.about")}</a>
          <a href="#proyectos" className="hover:text-[color:var(--primary)]">{t("nav.projects")}</a>
          <a href="#testimonios" className="hover:text-[color:var(--primary)]">{t("nav.testimonials")}</a>
          <a href="#experiencia" className="hover:text-[color:var(--primary)]">{t("nav.experience")}</a>
          <a href="#contacto" className="hover:text-[color:var(--primary)]">{t("nav.contact")}</a>
        </nav>
      </div>

      <div className="mt-6 max-w-6xl mx-auto flex items-center justify-between text-sm">
        <p className="text-[color:var(--muted)]">{t("footer.copyright")}</p>
        <a
          href="https://ucc.edu.co/programas/pregrados/Paginas/pasto/ingenieria-de-software-pasto.aspx"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[color:var(--primary)] hover:underline"
        >
          Universidad Cooperativa de Colombia
        </a>
      </div>
    </footer>
  );
}



