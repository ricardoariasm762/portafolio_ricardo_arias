"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useI18n } from "../i18n/I18nProvider";
import { FaFileDownload, FaPaperPlane } from "react-icons/fa";

export default function Hero() {
  const { t } = useI18n();
  const [usePhoto, setUsePhoto] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden cyber-grid"
    >
      {/* Radial atmospheric ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 dark:bg-[#38bdf8]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 dark:bg-[#2563eb]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT: Asymmetric Floating Hero Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-3xl bg-[color:var(--surface)]/95 backdrop-blur-xl border border-[color:var(--border)] p-6 sm:p-10 md:p-12 shadow-xl shadow-slate-200/50 dark:shadow-2xl dark:shadow-black/60 transition-all hover:border-sky-500/30 dark:hover:border-[#38bdf8]/30">
              {/* Subtle top ambient indicator with Live Beacon */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider border border-sky-500/30 bg-sky-500/10 text-sky-600 dark:border-[#38bdf8]/40 dark:bg-[#38bdf8]/10 dark:text-[#38bdf8] mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500 dark:bg-[#38bdf8]" />
                </span>
                {t("hero.badge")}
              </div>

              {/* Massive Display Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-[color:var(--foreground)] font-[family-name:var(--font-space-grotesk)] leading-[1.08] mb-4">
                <span>{t("hero.greeting1")} </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 dark:from-[#38bdf8] dark:via-[#60a5fa] dark:to-[#93c5fd] text-glow">
                  {t("hero.greeting2")}
                </span>
              </h1>

              {/* Subtitle Description */}
              <p className="text-base sm:text-lg text-[color:var(--muted)] leading-relaxed max-w-2xl mb-8 font-[family-name:var(--font-jakarta)]">
                {t("hero.description")}
              </p>

              {/* Tech Tags / Specialization Pills */}
              <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-8">
                {[t("hero.tag1"), t("hero.tag2"), t("hero.tag3"), t("hero.tag4")].map(
                  (tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wide border border-[color:var(--border)] bg-[color:var(--surface-container)] text-slate-700 dark:text-[#93c5fd] hover:border-[color:var(--primary)] hover:text-[color:var(--primary)] transition-all cursor-default"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
                <a
                  href="/CV%20Ricardo%20Arias.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold tracking-wider uppercase font-[family-name:var(--font-space-grotesk)] bg-[#0284c7] hover:bg-[#0369a1] text-white dark:bg-[#38bdf8] dark:hover:bg-[#7bd0ff] dark:text-[#030712] shadow-md shadow-sky-500/20 dark:shadow-cyan-500/30 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg active:translate-y-0"
                >
                  <FaFileDownload size={14} />
                  <span>{t("hero.downloadCv")}</span>
                </a>
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold tracking-wider uppercase font-[family-name:var(--font-space-grotesk)] border border-[color:var(--border-active)] bg-[color:var(--surface)] text-[color:var(--foreground)] hover:border-[color:var(--primary)] hover:text-[color:var(--primary)] transition-all duration-200 hover:-translate-y-1 active:translate-y-0 shadow-sm"
                >
                  <FaPaperPlane size={13} />
                  <span>{t("hero.contactMe")}</span>
                </a>
              </div>

              {/* Bottom Quick Info & Education */}
              <div className="pt-6 border-t border-[color:var(--border)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-[color:var(--muted)]">
                <span className="flex items-center gap-2 text-sky-600 dark:text-[#38bdf8] font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  {t("hero.availability")}
                </span>
                <span>{t("hero.education")}</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Futuristic Avatar Reticle Radar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">
              {/* Radar Reticle Crosshairs */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-sky-500 dark:text-cyan-400 font-mono text-xs select-none">
                +
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-sky-500 dark:text-cyan-400 font-mono text-xs select-none">
                +
              </div>
              <div className="absolute top-1/2 -left-3 -translate-y-1/2 text-sky-500 dark:text-cyan-400 font-mono text-xs select-none">
                +
              </div>
              <div className="absolute top-1/2 -right-3 -translate-y-1/2 text-sky-500 dark:text-cyan-400 font-mono text-xs select-none">
                +
              </div>

              {/* Technical Reticle Corner Brackets */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-sky-500 dark:border-[#38bdf8] select-none" />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-sky-500 dark:border-[#38bdf8] select-none" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-sky-500 dark:border-[#38bdf8] select-none" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-sky-500 dark:border-[#38bdf8] select-none" />

              {/* Ambient Ring Glow */}
              <div className="absolute inset-0 rounded-2xl border border-sky-500/20 dark:border-[#38bdf8]/30 shadow-[0_0_35px_rgba(2,132,199,0.15)] dark:shadow-[0_0_40px_rgba(56,189,248,0.25)] pointer-events-none" />

              {/* Outer Container Card */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[color:var(--surface)] border border-[color:var(--border)] p-3 flex flex-col items-center justify-center group shadow-xl">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-900">
                  <Image
                    src={usePhoto ? "/ricardo.jpeg" : "/stitch_avatar.png"}
                    alt="Ricardo Arias"
                    fill
                    priority
                    sizes="(max-width: 768px) 320px, 384px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle Tech Scanline & Radial Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
                </div>

                {/* Floating Status Pill */}
                <div className="absolute bottom-6 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-wide bg-[color:var(--surface)]/95 border border-[color:var(--border)] text-[color:var(--foreground)] shadow-lg backdrop-blur-md flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  {t("hero.radarStatus")}
                </div>

                {/* Photo / Avatar toggle button */}
                <button
                  type="button"
                  onClick={() => setUsePhoto(!usePhoto)}
                  className="absolute top-5 right-5 px-3 py-1.5 rounded-lg text-[10px] font-mono tracking-wider bg-slate-900/85 hover:bg-slate-900 text-slate-200 border border-slate-700 hover:border-sky-500 transition shadow cursor-pointer active:scale-95"
                  title="Alternar entre avatar tech y fotografía real"
                >
                  {usePhoto ? t("hero.viewAvatar") : t("hero.viewPhoto")}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
