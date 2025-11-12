"use client";

import { useEffect, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useI18n } from "../i18n/I18nProvider";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-50 backdrop-blur-md shadow-md rounded-b-3xl px-4 sm:px-6 md:px-8 py-2 sm:py-3 flex items-center gap-3 sm:gap-5 md:gap-6 text-xs sm:text-sm font-medium bg-[color:var(--surface)]/90 text-[color:var(--foreground)] border border-[color:var(--border)]">
        {/* Hamburger for mobile - LEFT */}
        <button
          type="button"
          className="sm:hidden inline-flex flex-col items-center justify-center h-10 w-10 rounded-lg border border-[color:var(--border)] bg-[color:var(--background)] hover:opacity-90 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--primary)]"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block w-5 h-0.5 bg-[color:var(--foreground)] transition-all duration-300 ${open ? "translate-y-1.5 rotate-45" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-[color:var(--foreground)] mt-1 transition-all duration-300 ${open ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`block w-5 h-0.5 bg-[color:var(--foreground)] mt-1 transition-all duration-300 ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
          />
        </button>

        {/* Desktop links */}
        <div className="hidden sm:flex justify-center items-center gap-5 md:gap-6 mx-auto">
          <a href="#home" className="transition hover:text-[color:var(--primary)]">{t("nav.home")}</a>
          <a href="#habilidades" className="transition hover:text-[color:var(--primary)]">{t("nav.skills")}</a>
          <a href="#acerca" className="transition hover:text-[color:var(--primary)]">{t("nav.about")}</a>
          <a href="#proyectos" className="transition hover:text-[color:var(--primary)]">{t("nav.projects")}</a>
          <a href="#testimonios" className="transition hover:text-[color:var(--primary)]">{t("nav.testimonials")}</a>
          <a href="#experiencia" className="transition hover:text-[color:var(--primary)]">{t("nav.experience")}</a>
          <a href="#contacto" className="transition hover:text-[color:var(--primary)]">{t("nav.contact")}</a>
        </div>
        {/* Actions right */}
        <div className="ml-auto hidden sm:flex items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      {open && (
        <div className="sm:hidden fixed inset-0 z-[60] bg-[color:var(--background)]/95 backdrop-blur-md">
          <div className="h-full flex flex-col items-center justify-center gap-6 px-6">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 inline-flex flex-col items-center justify-center h-10 w-10 rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] hover:opacity-90 transition"
              aria-label="Cerrar menú"
            >
              <span className="block w-5 h-0.5 bg-[color:var(--foreground)] translate-y-1.5 rotate-45" />
              <span className="block w-5 h-0.5 bg-[color:var(--foreground)] mt-1 opacity-0" />
              <span className="block w-5 h-0.5 bg-[color:var(--foreground)] mt-1 -translate-y-1.5 -rotate-45" />
            </button>

            <nav className="flex flex-col items-center gap-4 w-full max-w-sm">
              <a
                onClick={() => setOpen(false)}
                href="#home"
                className="w-full text-center px-6 py-4 rounded-xl text-lg font-medium bg-[color:var(--surface)]/80 hover:bg-[color:var(--surface)] transition hover:text-[color:var(--primary)]"
              >
                {t("nav.home")}
              </a>
              <a
                onClick={() => setOpen(false)}
                href="#habilidades"
                className="w-full text-center px-6 py-4 rounded-xl text-lg font-medium bg-[color:var(--surface)]/80 hover:bg-[color:var(--surface)] transition hover:text-[color:var(--primary)]"
              >
                {t("nav.skills")}
              </a>
              <a
                onClick={() => setOpen(false)}
                href="#acerca"
                className="w-full text-center px-6 py-4 rounded-xl text-lg font-medium bg-[color:var(--surface)]/80 hover:bg-[color:var(--surface)] transition hover:text-[color:var(--primary)]"
              >
                {t("nav.about")}
              </a>
              <a
                onClick={() => setOpen(false)}
                href="#proyectos"
                className="w-full text-center px-6 py-4 rounded-xl text-lg font-medium bg-[color:var(--surface)]/80 hover:bg-[color:var(--surface)] transition hover:text-[color:var(--primary)]"
              >
                {t("nav.projects")}
              </a>
              <a
                onClick={() => setOpen(false)}
                href="#testimonios"
                className="w-full text-center px-6 py-4 rounded-xl text-lg font-medium bg-[color:var(--surface)]/80 hover:bg-[color:var(--surface)] transition hover:text-[color:var(--primary)]"
              >
                {t("nav.testimonials")}
              </a>
              <a
                onClick={() => setOpen(false)}
                href="#experiencia"
                className="w-full text-center px-6 py-4 rounded-xl text-lg font-medium bg-[color:var(--surface)]/80 hover:bg-[color:var(--surface)] transition hover:text-[color:var(--primary)]"
              >
                {t("nav.experience")}
              </a>
              <a
                onClick={() => setOpen(false)}
                href="#contacto"
                className="w-full text-center px-6 py-4 rounded-xl text-lg font-medium bg-[color:var(--surface)]/80 hover:bg-[color:var(--surface)] transition hover:text-[color:var(--primary)]"
              >
                {t("nav.contact")}
              </a>
            </nav>

            <div className="mt-8 flex items-center gap-4">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </>
  );
}



