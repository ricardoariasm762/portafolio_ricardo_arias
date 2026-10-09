"use client";

import { useEffect, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useI18n } from "../i18n/I18nProvider";
import ThemeToggle from "./ThemeToggle";

const NAV_ITEMS = [
  { id: "hero", href: "#hero", key: "nav.home" },
  { id: "sobre-mi", href: "#sobre-mi", key: "nav.about" },
  { id: "habilidades", href: "#habilidades", key: "nav.skills" },
  { id: "proyectos", href: "#proyectos", key: "nav.projects" },
  { id: "trayectoria", href: "#trayectoria", key: "nav.experience" },
  { id: "testimonios", href: "#testimonios", key: "nav.testimonials" },
  { id: "contacto", href: "#contacto", key: "nav.contact" },
];

export default function Navbar() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open & listen for Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[color:var(--surface)]/90 backdrop-blur-xl border-b border-[color:var(--border)] py-2.5 shadow-md shadow-slate-200/40 dark:shadow-black/50"
            : "bg-transparent py-4 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand */}
          <a href="#hero" className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg p-1">
            <span className="font-bold tracking-tight text-base sm:text-lg text-[color:var(--foreground)] font-[family-name:var(--font-space-grotesk)] group-hover:text-[color:var(--primary)] transition-colors">
              Ricardo Arias
            </span>
            <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-semibold border border-sky-500/30 bg-sky-500/10 text-sky-600 dark:border-[#38bdf8]/40 dark:bg-[#38bdf8]/10 dark:text-[#38bdf8]">
              {t("nav.roleBadge")}
            </span>
          </a>

          {/* Desktop Navigation Links with Active ScrollSpy */}
          <nav aria-label="Navegación principal" className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs xl:text-sm font-medium text-[color:var(--muted)] bg-[color:var(--surface-container)]/60 p-1.5 rounded-full border border-[color:var(--border)] backdrop-blur-md">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-full transition-all duration-200 relative ${
                    isActive
                      ? "text-white dark:text-[#030712] font-semibold bg-[#0284c7] dark:bg-[#38bdf8] shadow-sm shadow-sky-500/25"
                      : "hover:text-[color:var(--foreground)] hover:bg-[color:var(--surface)]"
                  }`}
                >
                  {t(item.key)}
                </a>
              );
            })}
          </nav>

          {/* Right actions: Theme, Language, CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            <ThemeToggle />
            <LanguageSwitcher />
            <a
              href="#contacto"
              className="ml-1 inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-semibold tracking-wider font-[family-name:var(--font-space-grotesk)] uppercase bg-[#0284c7] hover:bg-[#0369a1] text-white dark:bg-[#38bdf8] dark:hover:bg-[#7bd0ff] dark:text-[#030712] shadow-sm shadow-sky-500/20 hover:shadow-sky-500/35 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              {t("nav.cta")}
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <LanguageSwitcher />
            <button
              type="button"
              className="inline-flex flex-col items-center justify-center h-10 w-10 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--foreground)] hover:border-[color:var(--primary)] transition shadow-sm"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span
                className={`block w-4 h-0.5 bg-[color:var(--foreground)] transition-all duration-300 ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`block w-4 h-0.5 bg-[color:var(--foreground)] mt-1 transition-all duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block w-4 h-0.5 bg-[color:var(--foreground)] mt-1 transition-all duration-300 ${
                  open ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation with backdrop blur */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="lg:hidden fixed inset-0 z-[60] bg-[color:var(--background)]/95 backdrop-blur-2xl transition-all"
        >
          <div className="h-full flex flex-col justify-between p-6 pt-20 overflow-y-auto">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 inline-flex items-center justify-center h-10 w-10 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--foreground)] hover:border-[color:var(--primary)] transition shadow"
              aria-label="Cerrar menú"
            >
              ✕
            </button>

            <nav className="flex flex-col gap-2 max-w-sm mx-auto w-full">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    onClick={() => setOpen(false)}
                    href={item.href}
                    className={`px-5 py-3.5 rounded-2xl text-base font-medium transition flex items-center justify-between border ${
                      isActive
                        ? "bg-[#0284c7] text-white dark:bg-[#38bdf8] dark:text-[#030712] border-transparent font-semibold shadow-md"
                        : "bg-[color:var(--surface)] text-[color:var(--foreground)] border-[color:var(--border)] hover:border-[color:var(--primary)]"
                    }`}
                  >
                    <span>{t(item.key)}</span>
                    {isActive && <span className="text-xs font-mono">●</span>}
                  </a>
                );
              })}
            </nav>

            <div className="max-w-sm mx-auto w-full pt-6 flex flex-col gap-3">
              <a
                onClick={() => setOpen(false)}
                href="#contacto"
                className="w-full text-center py-3.5 rounded-full text-sm font-semibold uppercase tracking-wider bg-[#0284c7] text-white dark:bg-[#38bdf8] dark:text-[#030712] shadow-md shadow-sky-500/20 transition hover:opacity-95"
              >
                {t("nav.cta")}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
