"use client";

import { useI18n } from "../i18n/I18nProvider";
import { FaGraduationCap, FaBriefcase, FaCode, FaFlask } from "react-icons/fa";

export default function TimelineSection() {
  const { t } = useI18n();

  const items = [
    {
      year: t("timeline.item1.year"),
      title: t("timeline.item1.title"),
      place: t("timeline.item1.place"),
      desc: t("timeline.item1.desc"),
      tags: t("timeline.item1.tags").split(" • "),
      status: "En curso • Semestre 7",
      icon: FaGraduationCap,
      isCurrent: true,
    },
    {
      year: t("timeline.item2.year"),
      title: t("timeline.item2.title"),
      place: t("timeline.item2.place"),
      desc: t("timeline.item2.desc"),
      tags: t("timeline.item2.tags").split(" • "),
      status: "Completado • Portafolio",
      icon: FaCode,
      isCurrent: false,
    },
    {
      year: t("timeline.item3.year"),
      title: t("timeline.item3.title"),
      place: t("timeline.item3.place"),
      desc: t("timeline.item3.desc"),
      tags: t("timeline.item3.tags").split(" • "),
      status: "2 Semestres • Base Científica",
      icon: FaFlask,
      isCurrent: false,
    },
    {
      year: t("timeline.item4.year"),
      title: t("timeline.item4.title"),
      place: t("timeline.item4.place"),
      desc: t("timeline.item4.desc"),
      tags: t("timeline.item4.tags").split(" • "),
      status: "Graduado • Base Analítica",
      icon: FaBriefcase,
      isCurrent: false,
    },
  ];

  return (
    <section id="trayectoria" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-mono font-bold tracking-widest text-sky-600 dark:text-[#38bdf8] uppercase block mb-2">
            {t("timeline.tag")}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[color:var(--foreground)] font-[family-name:var(--font-space-grotesk)]">
            {t("timeline.title")}
          </h2>
          <p className="text-sm sm:text-base text-[color:var(--muted)] mt-2 max-w-xl">
            {t("timeline.subtitle")}
          </p>
        </div>

        {/* Timeline Guide & Nodes */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-sky-500/20 dark:border-[#38bdf8]/20 ml-2 sm:ml-4 space-y-12">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="relative group">
                {/* Glowing Node Dot with Icon */}
                <div
                  className={`absolute -left-[33px] sm:-left-[49px] top-1.5 w-7 h-7 rounded-full border-2 transition-all duration-300 flex items-center justify-center text-xs ${
                    item.isCurrent
                      ? "bg-[#0284c7] border-[#0284c7] text-white dark:bg-[#38bdf8] dark:border-[#38bdf8] dark:text-[#030712] shadow-[0_0_20px_rgba(2,132,199,0.5)] dark:shadow-[0_0_20px_rgba(56,189,248,0.7)] ring-4 ring-sky-500/20 dark:ring-[#38bdf8]/20"
                      : "bg-[color:var(--surface)] border-sky-500/40 text-[color:var(--muted)] dark:border-[#38bdf8]/40 group-hover:border-[color:var(--primary)] group-hover:text-[color:var(--primary)] group-hover:scale-110"
                  }`}
                >
                  <Icon size={12} />
                </div>

                {/* Milestone Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-[color:var(--surface)] border border-[color:var(--border)] hover:border-[color:var(--primary)] hover:shadow-xl dark:hover:shadow-[0_0_28px_rgba(56,189,248,0.15)] transition-all duration-300 shadow-sm hover:-translate-y-1 cursor-default">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider border border-sky-500/30 bg-sky-500/10 text-sky-600 dark:border-[#38bdf8]/40 dark:bg-[#38bdf8]/10 dark:text-[#38bdf8]">
                        {item.year}
                      </span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-[color:var(--surface-container)] text-[color:var(--muted)]">
                        {item.status}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-[color:var(--muted)] font-medium">
                      {item.place}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-[color:var(--foreground)] mt-2 mb-3 group-hover:text-[color:var(--primary)] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[color:var(--muted)] leading-relaxed mb-6 font-[family-name:var(--font-jakarta)]">
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[color:var(--border)]">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono border border-[color:var(--border)] bg-[color:var(--surface-container)] text-[color:var(--foreground)] hover:border-[color:var(--border-active)] transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
