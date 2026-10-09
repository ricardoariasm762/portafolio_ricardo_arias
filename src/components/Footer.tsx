"use client";

import { useI18n } from "../i18n/I18nProvider";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const { t } = useI18n();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--muted)] py-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Role */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="font-bold tracking-tight text-base text-[color:var(--foreground)] font-[family-name:var(--font-space-grotesk)]">
              {t("footer.brand")}
            </span>
            <span className="text-[color:var(--muted)]/50">•</span>
            <span className="text-xs font-mono text-sky-600 dark:text-[#38bdf8] font-semibold">{t("footer.role")}</span>
          </div>
          <p className="text-xs text-[color:var(--muted)] mt-1">{t("footer.university")}</p>
          <p className="text-[11px] font-mono text-emerald-500 mt-1 flex items-center justify-center md:justify-start gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Pasto, Colombia (GMT-5) • Disponible para proyectos
          </p>
        </div>

        {/* Navigation Anchors */}
        <nav aria-label="Enlaces de pie de página" className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-mono">
          <a href="#hero" className="hover:text-[color:var(--primary)] transition-colors cursor-pointer">
            {t("nav.home")}
          </a>
          <a href="#sobre-mi" className="hover:text-[color:var(--primary)] transition-colors cursor-pointer">
            {t("nav.about")}
          </a>
          <a href="#habilidades" className="hover:text-[color:var(--primary)] transition-colors cursor-pointer">
            {t("nav.skills")}
          </a>
          <a href="#proyectos" className="hover:text-[color:var(--primary)] transition-colors cursor-pointer">
            {t("nav.projects")}
          </a>
          <a href="#trayectoria" className="hover:text-[color:var(--primary)] transition-colors cursor-pointer">
            {t("nav.experience")}
          </a>
          <a href="#testimonios" className="hover:text-[color:var(--primary)] transition-colors cursor-pointer">
            {t("nav.testimonials")}
          </a>
          <a href="#contacto" className="hover:text-[color:var(--primary)] transition-colors cursor-pointer">
            {t("nav.contact")}
          </a>
        </nav>

        {/* Social Icons, Back to top & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex items-center gap-2 text-[color:var(--foreground)]">
            <a
              href="https://github.com/ricardoariasm762"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl hover:bg-[color:var(--surface-container)] hover:text-[color:var(--primary)] transition cursor-pointer hover:scale-105 active:scale-95"
              aria-label="GitHub"
              title="GitHub"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/ricardo-arias-m9"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl hover:bg-[color:var(--surface-container)] hover:text-[color:var(--primary)] transition cursor-pointer hover:scale-105 active:scale-95"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href="mailto:ricardo.ariasm9@gmail.com"
              className="p-2.5 rounded-xl hover:bg-[color:var(--surface-container)] hover:text-[color:var(--primary)] transition cursor-pointer hover:scale-105 active:scale-95"
              aria-label="Correo"
              title="Correo"
            >
              <FaEnvelope size={16} />
            </a>
            <a
              href="https://wa.me/573104961222"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl hover:bg-[color:var(--surface-container)] hover:text-emerald-500 transition cursor-pointer hover:scale-105 active:scale-95"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <FaWhatsapp size={16} />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[color:var(--surface-container)] hover:bg-[color:var(--surface-container-high)] text-[color:var(--primary)] transition cursor-pointer hover:scale-105 active:scale-95 ml-2"
              aria-label="Volver arriba"
              title="Volver arriba"
            >
              <FaArrowUp size={13} />
            </button>
          </div>
          <span className="text-[11px] font-mono text-[color:var(--muted)]">
            {t("footer.copyright")}
          </span>
        </div>
      </div>
    </footer>
  );
}
