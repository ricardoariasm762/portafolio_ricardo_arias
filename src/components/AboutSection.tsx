"use client";

import { useState } from "react";
import { useI18n } from "../i18n/I18nProvider";
import { FaCode, FaCheck, FaCopy, FaTerminal, FaLaptopCode, FaPalette } from "react-icons/fa";

type TabId = "profile" | "philosophy" | "stack";

export default function AboutSection() {
  const { t } = useI18n();
  const [activeTab, setActiveTab] = useState<TabId>("profile");
  const [copied, setCopied] = useState(false);

  const getCodeSnippet = () => {
    switch (activeTab) {
      case "profile":
        return `export const developer: DeveloperProfile = {
  name: "Ricardo Arias",
  role: "Software Engineering Student",
  university: "Universidad Cooperativa de Colombia",
  semester: 7,
  stack: ["TypeScript", "Next.js", "Angular", "Java", "Python"],
  focus: ["UI/UX Architecture", "Clean Code", "Design Systems"],
  passion: "Crafting pixel-perfect, high-impact products"
};`;
      case "philosophy":
        return `## Engineering Philosophy

1. Architecture First: Scalable, modular code > temporary patches.
2. User-Centric: Micro-interactions & accessibility matter.
3. Continuous Growth: Experimenting with modern web standards.
4. Performance: Optimized bundles, zero layout shifts, fast loads.`;
      case "stack":
        return `{
  "languages": ["TypeScript", "JavaScript", "Java", "Python", "C#"],
  "frameworks": ["Next.js 15", "React 19", "Angular", "Spring Boot"],
  "design": ["Figma", "Tailwind CSS v4", "Design Systems"],
  "databases": ["PostgreSQL", "MongoDB", "SQLite"]
}`;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getCodeSnippet());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="sobre-mi" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Tag */}
        <div className="mb-3">
          <span className="text-xs font-mono font-bold tracking-widest text-sky-600 dark:text-[#38bdf8] uppercase">
            {t("about.tag")}
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[color:var(--foreground)] font-[family-name:var(--font-space-grotesk)] mb-12">
          {t("about.title")}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative & Metrics */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-base sm:text-lg text-[color:var(--foreground)] leading-relaxed font-[family-name:var(--font-jakarta)]">
              {t("about.paragraph1")}
            </p>
            <p className="text-sm sm:text-base text-[color:var(--muted)] leading-relaxed">
              {t("about.paragraph2")}
            </p>
            <p className="text-sm sm:text-base text-[color:var(--muted)] leading-relaxed">
              {t("about.paragraph3")}
            </p>

            {/* 3 Highlight Metrics Cards with tactile hover lift */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-[color:var(--surface)] border border-[color:var(--border)] hover:border-sky-500/50 dark:hover:border-[#38bdf8]/50 transition-all duration-300 text-center group shadow-sm hover:-translate-y-1 hover:shadow-md cursor-default">
                <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-sky-500/10 text-sky-600 dark:text-[#38bdf8] flex items-center justify-center text-sm group-hover:scale-110 transition-transform">
                  <FaLaptopCode />
                </div>
                <div className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-sky-600 dark:text-[#38bdf8]">
                  {t("about.metric1.val")}
                </div>
                <div className="text-[11px] sm:text-xs font-mono text-[color:var(--muted)] mt-1">
                  {t("about.metric1.lbl")}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[color:var(--surface)] border border-[color:var(--border)] hover:border-sky-500/50 dark:hover:border-[#38bdf8]/50 transition-all duration-300 text-center group shadow-sm hover:-translate-y-1 hover:shadow-md cursor-default">
                <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-sky-500/10 text-sky-600 dark:text-[#38bdf8] flex items-center justify-center text-sm group-hover:scale-110 transition-transform">
                  <FaPalette />
                </div>
                <div className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-sky-600 dark:text-[#38bdf8]">
                  {t("about.metric2.val")}
                </div>
                <div className="text-[11px] sm:text-xs font-mono text-[color:var(--muted)] mt-1">
                  {t("about.metric2.lbl")}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[color:var(--surface)] border border-[color:var(--border)] hover:border-sky-500/50 dark:hover:border-[#38bdf8]/50 transition-all duration-300 text-center group shadow-sm hover:-translate-y-1 hover:shadow-md cursor-default">
                <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-sky-500/10 text-sky-600 dark:text-[#38bdf8] flex items-center justify-center text-sm group-hover:scale-110 transition-transform">
                  <FaCode />
                </div>
                <div className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-sky-600 dark:text-[#38bdf8]">
                  {t("about.metric3.val")}
                </div>
                <div className="text-[11px] sm:text-xs font-mono text-[color:var(--muted)] mt-1">
                  {t("about.metric3.lbl")}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Interactive Tech Workbench / IDE Window */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden hover:border-slate-700 transition-all">
              {/* Window Header with Tabs */}
              <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                  
                  {/* Interactive File Tabs */}
                  <div className="flex items-center gap-1 ml-3 overflow-x-auto">
                    {[
                      { id: "profile", label: "developer.ts" },
                      { id: "philosophy", label: "filosofia.md" },
                      { id: "stack", label: "stack.json" },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTab(tab.id as TabId)}
                        className={`px-3 py-1 rounded-md font-mono text-xs transition cursor-pointer flex items-center gap-1.5 ${
                          activeTab === tab.id
                            ? "bg-slate-950 text-cyan-400 border border-slate-800 font-semibold"
                            : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                        }`}
                      >
                        <FaTerminal size={9} />
                        <span>{tab.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Copy button */}
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition cursor-pointer"
                  title="Copiar contenido"
                >
                  {copied ? (
                    <>
                      <FaCheck className="text-emerald-400" size={11} />
                      <span className="text-emerald-400 text-[10px]">Copiado</span>
                    </>
                  ) : (
                    <>
                      <FaCopy size={11} />
                      <span className="text-[10px]">Copiar</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Snippet Content */}
              <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-slate-300 min-h-[220px]">
                {activeTab === "profile" && (
                  <div>
                    <p>
                      <span className="text-purple-400">export const</span>{" "}
                      <span className="text-sky-400">developer</span>
                      <span className="text-slate-400">:</span>{" "}
                      <span className="text-amber-300">DeveloperProfile</span>{" "}
                      <span className="text-slate-400">=</span> &#123;
                    </p>
                    <div className="pl-4 space-y-1 my-1">
                      <p>
                        <span className="text-slate-400">name:</span>{" "}
                        <span className="text-emerald-300">&quot;Ricardo Arias&quot;</span>,
                      </p>
                      <p>
                        <span className="text-slate-400">role:</span>{" "}
                        <span className="text-emerald-300">&quot;Software Engineering Student&quot;</span>,
                      </p>
                      <p>
                        <span className="text-slate-400">university:</span>{" "}
                        <span className="text-emerald-300">&quot;Universidad Cooperativa de Colombia&quot;</span>,
                      </p>
                      <p>
                        <span className="text-slate-400">semester:</span>{" "}
                        <span className="text-amber-400">7</span>,
                      </p>
                      <p>
                        <span className="text-slate-400">stack:</span> [
                        <span className="text-emerald-300">&quot;TypeScript&quot;</span>,{" "}
                        <span className="text-emerald-300">&quot;Next.js&quot;</span>,{" "}
                        <span className="text-emerald-300">&quot;Angular&quot;</span>,{" "}
                        <span className="text-emerald-300">&quot;Java&quot;</span>,{" "}
                        <span className="text-emerald-300">&quot;Python&quot;</span>],
                      </p>
                      <p>
                        <span className="text-slate-400">focus:</span> [
                        <span className="text-emerald-300">&quot;UI/UX Architecture&quot;</span>,{" "}
                        <span className="text-emerald-300">&quot;Clean Code&quot;</span>,{" "}
                        <span className="text-emerald-300">&quot;Design Systems&quot;</span>],
                      </p>
                      <p>
                        <span className="text-slate-400">passion:</span>{" "}
                        <span className="text-emerald-300">&quot;Crafting pixel-perfect, high-impact products&quot;</span>
                      </p>
                    </div>
                    <p>&#125;;</p>
                  </div>
                )}

                {activeTab === "philosophy" && (
                  <div className="space-y-2 text-slate-300">
                    <p className="text-cyan-400 font-bold">## Filosofía de Ingeniería</p>
                    <p>1. <span className="text-emerald-300">Arquitectura Primero:</span> Código limpio, modular y testeable sobre parches apresurados.</p>
                    <p>2. <span className="text-emerald-300">UI/UX Riguroso:</span> Toda interacción debe sentirse fluida, rápida y accesible.</p>
                    <p>3. <span className="text-emerald-300">Rendimiento Extremo:</span> Cero desplazamientos de diseño, optimización de bundles.</p>
                    <p>4. <span className="text-emerald-300">Diseño Responsivo:</span> Adaptabilidad milimétrica desde móviles compactos hasta pantallas 4K.</p>
                  </div>
                )}

                {activeTab === "stack" && (
                  <div className="space-y-1.5 text-slate-300">
                    <p><span className="text-purple-400">&#123;</span></p>
                    <div className="pl-4 space-y-1">
                      <p><span className="text-sky-400">&quot;frontend&quot;</span>: [<span className="text-emerald-300">&quot;Next.js 15&quot;</span>, <span className="text-emerald-300">&quot;React 19&quot;</span>, <span className="text-emerald-300">&quot;Angular&quot;</span>, <span className="text-emerald-300">&quot;Tailwind v4&quot;</span>],</p>
                      <p><span className="text-sky-400">&quot;backend&quot;</span>: [<span className="text-emerald-300">&quot;Java Spring Boot&quot;</span>, <span className="text-emerald-300">&quot;Node.js&quot;</span>, <span className="text-emerald-300">&quot;Python&quot;</span>, <span className="text-emerald-300">&quot;C#&quot;</span>],</p>
                      <p><span className="text-sky-400">&quot;databases&quot;</span>: [<span className="text-emerald-300">&quot;PostgreSQL&quot;</span>, <span className="text-emerald-300">&quot;MongoDB&quot;</span>, <span className="text-emerald-300">&quot;SQLite&quot;</span>],</p>
                      <p><span className="text-sky-400">&quot;design&quot;</span>: [<span className="text-emerald-300">&quot;Figma&quot;</span>, <span className="text-emerald-300">&quot;UI/UX Systems&quot;</span>, <span className="text-emerald-300">&quot;Responsive Design&quot;</span>]</p>
                    </div>
                    <p><span className="text-purple-400">&#125;</span></p>
                  </div>
                )}
              </div>

              {/* Window Footer with Badges */}
              <div className="px-5 py-3.5 bg-slate-900 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono border border-cyan-500/30 bg-cyan-500/10 text-cyan-300">
                    {t("about.workbench.cleanCode")}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono border border-sky-500/30 bg-sky-500/10 text-sky-300">
                    {t("about.workbench.responsive")}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono border border-blue-500/30 bg-blue-500/10 text-blue-300">
                    {t("about.workbench.designSystems")}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {t("about.workbench.status")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
