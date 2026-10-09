"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useI18n } from "../i18n/I18nProvider";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiAngular,
  SiNodedotjs,
  SiPython,
  SiDotnet,
  SiFigma,
} from "react-icons/si";
import { FaJava, FaChevronLeft, FaChevronRight } from "react-icons/fa";

type SkillCategory = "all" | "frontend" | "backend" | "tools";

export default function SkillsSection() {
  const { t } = useI18n();
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("all");
  const sliderRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const skills = [
    {
      id: "html",
      name: "HTML5",
      category: "frontend",
      badge: "WEB CORE",
      level: t("skills.levelAdvanced"),
      percentage: 95,
      desc: t("skills.descHtml"),
      icon: SiHtml5,
      color: "#E34F26",
    },
    {
      id: "css",
      name: "CSS3 / Tailwind",
      category: "frontend",
      badge: "STYLING",
      level: t("skills.levelAdvanced"),
      percentage: 95,
      desc: t("skills.descCss"),
      icon: SiCss3,
      color: "#38BDF8",
    },
    {
      id: "js",
      name: "JavaScript",
      category: "frontend",
      badge: "ESNEXT",
      level: t("skills.levelAdvanced"),
      percentage: 90,
      desc: t("skills.descJs"),
      icon: SiJavascript,
      color: "#F7DF1E",
    },
    {
      id: "ts",
      name: "TypeScript",
      category: "frontend",
      badge: "TYPE-SAFE",
      level: t("skills.levelAdvanced"),
      percentage: 92,
      desc: t("skills.descTs"),
      icon: SiTypescript,
      color: "#3178C6",
    },
    {
      id: "react",
      name: "React / Next.js",
      category: "frontend",
      badge: "FRAMEWORK",
      level: t("skills.levelAdvanced"),
      percentage: 92,
      desc: t("skills.descReact"),
      icon: SiReact,
      color: "#61DAFB",
    },
    {
      id: "angular",
      name: "Angular",
      category: "frontend",
      badge: "ENTERPRISE",
      level: t("skills.levelIntermediate"),
      percentage: 85,
      desc: t("skills.descAngular"),
      icon: SiAngular,
      color: "#DD0031",
    },
    {
      id: "node",
      name: "Node.js",
      category: "backend",
      badge: "RUNTIME",
      level: t("skills.levelIntermediate"),
      percentage: 82,
      desc: t("skills.descNode"),
      icon: SiNodedotjs,
      color: "#68A063",
    },
    {
      id: "python",
      name: "Python",
      category: "backend",
      badge: "BACKEND / LOGIC",
      level: t("skills.levelIntermediate"),
      percentage: 80,
      desc: t("skills.descPython"),
      icon: SiPython,
      color: "#3776AB",
    },
    {
      id: "java",
      name: "Java",
      category: "backend",
      badge: "OOP / SPRING",
      level: t("skills.levelIntermediate"),
      percentage: 82,
      desc: t("skills.descJava"),
      icon: FaJava,
      color: "#ED8B00",
    },
    {
      id: "csharp",
      name: "C#",
      category: "backend",
      badge: ".NET",
      level: t("skills.levelProficient"),
      percentage: 78,
      desc: t("skills.descCsharp"),
      icon: SiDotnet,
      color: "#512BD4",
    },
    {
      id: "figma",
      name: "Figma & UI Design",
      category: "tools",
      badge: "PROTOTYPING",
      level: t("skills.levelAdvanced"),
      percentage: 92,
      desc: t("skills.descFigma"),
      icon: SiFigma,
      color: "#F24E1E",
    },
  ];

  const filteredSkills = skills.filter((item) => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });

  const updateScrollProgress = useCallback(() => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      const maxScroll = scrollWidth - clientWidth;
      setScrollProgress(maxScroll > 0 ? scrollLeft / maxScroll : 0);
    }
  }, []);

  useEffect(() => {
    const el = sliderRef.current;
    if (el) {
      el.addEventListener("scroll", updateScrollProgress, { passive: true });
      return () => el.removeEventListener("scroll", updateScrollProgress);
    }
  }, [updateScrollProgress]);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      scrollLeft();
    } else if (e.key === "ArrowRight") {
      scrollRight();
    }
  };

  return (
    <section id="habilidades" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Top Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-sky-600 dark:text-[#38bdf8] uppercase block mb-2">
              {t("skills.tag")}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[color:var(--foreground)] font-[family-name:var(--font-space-grotesk)]">
              {t("skills.title")}
            </h2>
            <p className="text-sm sm:text-base text-[color:var(--muted)] mt-2 max-w-xl">
              {t("skills.subtitle")}
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={scrollLeft}
              aria-label="Anterior habilidad"
              className="w-10 h-10 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--foreground)] hover:border-[color:var(--primary)] hover:text-[color:var(--primary)] transition-all flex items-center justify-center text-sm shadow-sm cursor-pointer hover:scale-105 active:scale-95"
            >
              <FaChevronLeft size={12} />
            </button>
            <button
              type="button"
              onClick={scrollRight}
              aria-label="Siguiente habilidad"
              className="w-10 h-10 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--foreground)] hover:border-[color:var(--primary)] hover:text-[color:var(--primary)] transition-all flex items-center justify-center text-sm shadow-sm cursor-pointer hover:scale-105 active:scale-95"
            >
              <FaChevronRight size={12} />
            </button>
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {[
            { key: "all", label: t("skills.filterAll") },
            { key: "frontend", label: t("skills.filterFrontend") },
            { key: "backend", label: t("skills.filterBackend") },
            { key: "tools", label: t("skills.filterTools") },
          ].map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveCategory(cat.key as SkillCategory)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                activeCategory === cat.key
                  ? "bg-[#0284c7] text-white dark:bg-[#38bdf8] dark:text-[#030712] shadow-sm shadow-sky-500/25 scale-102"
                  : "bg-[color:var(--surface)] border border-[color:var(--border)] text-[color:var(--muted)] hover:border-[color:var(--primary)] hover:text-[color:var(--foreground)] hover:bg-[color:var(--surface-container)]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Horizontal Slider Cards Container */}
        <div
          ref={sliderRef}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          aria-label="Carrusel de habilidades técnicas"
          className="flex gap-5 overflow-x-auto pb-6 pt-2 scroll-smooth no-scrollbar scrollbar-none snap-x focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-500/50 rounded-2xl"
          style={{ scrollbarWidth: "none" }}
        >
          {filteredSkills.map((hab) => {
            const Icon = hab.icon;
            return (
              <div
                key={hab.id}
                className="flex-shrink-0 w-72 sm:w-80 rounded-2xl bg-[color:var(--surface)] border border-[color:var(--border)] p-6 hover:border-[color:var(--primary)] hover:shadow-lg dark:hover:shadow-[0_0_24px_rgba(56,189,248,0.18)] transition-all duration-300 flex flex-col justify-between group snap-start shadow-sm hover:-translate-y-1.5 cursor-default"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center bg-[color:var(--surface-container)] border border-[color:var(--border)] group-hover:scale-110 transition-transform shadow-xs"
                      style={{ color: hab.color }}
                    >
                      <Icon size={28} />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-semibold border border-sky-500/30 bg-sky-500/10 text-sky-600 dark:border-[#38bdf8]/30 dark:bg-[#38bdf8]/10 dark:text-[#38bdf8]">
                      {hab.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] text-[color:var(--foreground)] group-hover:text-[color:var(--primary)] transition-colors mb-2">
                    {hab.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[color:var(--muted)] leading-relaxed font-[family-name:var(--font-jakarta)] mb-4">
                    {hab.desc}
                  </p>
                </div>

                <div>
                  {/* Visual Proficiency Meter */}
                  <div className="space-y-1.5 pt-3 border-t border-[color:var(--border)]">
                    <div className="flex items-center justify-between text-[11px] font-mono text-[color:var(--muted)]">
                      <span>Nivel: <strong className="text-[color:var(--foreground)]">{hab.level}</strong></span>
                      <span className="font-semibold text-sky-600 dark:text-[#38bdf8]">{hab.percentage}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-[color:var(--surface-container-high)] overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-sky-500 to-blue-600 dark:from-[#38bdf8] dark:to-[#60a5fa] rounded-full transition-all duration-700"
                        style={{ width: `${hab.percentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Slider Dot / Progress Track Indicator */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[color:var(--muted)]">01</span>
            <div className="w-32 h-1.5 rounded-full bg-[color:var(--surface-container-high)] overflow-hidden">
              <div
                className="h-full bg-[color:var(--primary)] transition-all duration-300 rounded-full"
                style={{ width: `${Math.max(15, scrollProgress * 100)}%` }}
              />
            </div>
            <span className="text-xs font-mono text-[color:var(--muted)]">
              {String(filteredSkills.length).padStart(2, "0")}
            </span>
          </div>

          <span className="text-xs font-mono text-[color:var(--muted)] hidden sm:inline">
            Desliza o usa las flechas del teclado ← → para explorar
          </span>
        </div>
      </div>
    </section>
  );
}
