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
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-50 backdrop-blur-md shadow-md rounded-b-3xl px-4 sm:px-6 md:px-8 py-2 sm:py-3 flex items-center gap-3 sm:gap-5 md:gap-6 text-xs sm:text-sm font-medium bg-[color:var(--surface)]/90 text-[color:var(--foreground)] border border-[color:var(--border)]">
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
      {/* Hamburger for mobile */}
      <button
        type="button"
        className="sm:hidden ml-auto inline-flex items-center justify-center h-10 w-10 rounded-lg border border-[color:var(--border)] bg-[color:var(--background)] hover:opacity-90 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--primary)]"
        aria-label="Abrir menú"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span
          className={`block w-5 h-0.5 bg-[color:var(--foreground)] transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`}
        />
        <span
          className={`block w-5 h-0.5 bg-[color:var(--foreground)] mt-1 transition-opacity ${open ? "opacity-0" : "opacity-100"}`}
        />
        <span
          className={`block w-5 h-0.5 bg-[color:var(--foreground)] mt-1 transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
        />
      </button>

      {/* Mobile overlay and dropdown */}
      {open && (
        <>
          <div
            className="sm:hidden fixed inset-0 z-40 bg-black/40"
            onClick={() => setOpen(false)}
          />
          <div className="sm:hidden absolute left-2 right-2 top-full z-50 mt-2 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)]/95 backdrop-blur p-3 flex flex-col gap-1 shadow-2xl">
            <a onClick={() => setOpen(false)} href="#home" className="px-3 py-3 rounded-lg hover:bg-[color:var(--background)]/50 transition">{t("nav.home")}</a>
            <a onClick={() => setOpen(false)} href="#habilidades" className="px-3 py-3 rounded-lg hover:bg-[color:var(--background)]/50 transition">{t("nav.skills")}</a>
            <a onClick={() => setOpen(false)} href="#acerca" className="px-3 py-3 rounded-lg hover:bg-[color:var(--background)]/50 transition">{t("nav.about")}</a>
            <a onClick={() => setOpen(false)} href="#proyectos" className="px-3 py-3 rounded-lg hover:bg-[color:var(--background)]/50 transition">{t("nav.projects")}</a>
            <a onClick={() => setOpen(false)} href="#testimonios" className="px-3 py-3 rounded-lg hover:bg-[color:var(--background)]/50 transition">{t("nav.testimonials")}</a>
            <a onClick={() => setOpen(false)} href="#experiencia" className="px-3 py-3 rounded-lg hover:bg-[color:var(--background)]/50 transition">{t("nav.experience")}</a>
            <a onClick={() => setOpen(false)} href="#contacto" className="px-3 py-3 rounded-lg hover:bg-[color:var(--background)]/50 transition">{t("nav.contact")}</a>
            <div className="mt-2 pt-2 border-t border-[color:var(--border)] flex items-center justify-between">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
          </div>
        </>
      )}
    </nav>
  );
}



