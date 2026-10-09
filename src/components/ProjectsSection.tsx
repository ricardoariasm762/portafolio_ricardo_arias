"use client";

import { useState, useEffect } from "react";
import { useI18n } from "../i18n/I18nProvider";
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch, FaSearch, FaTimes, FaLayerGroup } from "react-icons/fa";

type GithubRepo = {
  id: number;
  name: string;
  fork: boolean;
  archived: boolean;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  html_url: string;
  homepage?: string | null;
  topics?: string[];
};

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  Java: "#b07219",
  Python: "#3572A5",
  "C#": "#178600",
  HTML: "#e34c26",
  CSS: "#563d7c",
};

export default function ProjectsSection() {
  const { t } = useI18n();
  const [activeTab, setActiveTab] = useState<"showcase" | "github">("showcase");
  const [selectedProject, setSelectedProject] = useState(0);
  const [projectCategory, setProjectCategory] = useState<string>("all");

  // GitHub State
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loadingRepos, setLoadingRepos] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const showcaseProjects = [
    {
      num: t("projects.p1.num"),
      category: t("projects.p1.category"),
      type: "fullstack",
      title: t("projects.p1.title"),
      desc: t("projects.p1.desc"),
      status: "Empresarial • Producción",
      tags: ["Angular", "TypeScript", "Spring Boot", "Java", "PostgreSQL"],
      metrics: [
        { val: t("projects.p1.metric1.val"), lbl: t("projects.p1.metric1.lbl") },
        { val: t("projects.p1.metric2.val"), lbl: t("projects.p1.metric2.lbl") },
        { val: t("projects.p1.metric3.val"), lbl: t("projects.p1.metric3.lbl") },
      ],
      githubUrl: "https://github.com/ricardoariasm762",
      demoUrl: "https://github.com/ricardoariasm762",
    },
    {
      num: t("projects.p2.num"),
      category: t("projects.p2.category"),
      type: "backend",
      title: t("projects.p2.title"),
      desc: t("projects.p2.desc"),
      status: "Arquitectura • APIs",
      tags: ["Java", "Spring Boot", "MongoDB", "REST API", "Docker"],
      metrics: [
        { val: t("projects.p2.metric1.val"), lbl: t("projects.p2.metric1.lbl") },
        { val: t("projects.p2.metric2.val"), lbl: t("projects.p2.metric2.lbl") },
        { val: t("projects.p2.metric3.val"), lbl: t("projects.p2.metric3.lbl") },
      ],
      githubUrl: "https://github.com/ricardoariasm762",
      demoUrl: "https://github.com/ricardoariasm762",
    },
    {
      num: t("projects.p3.num"),
      category: t("projects.p3.category"),
      type: "frontend",
      title: t("projects.p3.title"),
      desc: t("projects.p3.desc"),
      status: "En Vivo • Open Source",
      tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion", "i18n"],
      metrics: [
        { val: t("projects.p3.metric1.val"), lbl: t("projects.p3.metric1.lbl") },
        { val: t("projects.p3.metric2.val"), lbl: t("projects.p3.metric2.lbl") },
        { val: t("projects.p3.metric3.val"), lbl: t("projects.p3.metric3.lbl") },
      ],
      githubUrl: "https://github.com/ricardoariasm762/portafolio_ricardo_arias",
      demoUrl: "https://github.com/ricardoariasm762/portafolio_ricardo_arias",
    },
    {
      num: t("projects.p4.num"),
      category: t("projects.p4.category"),
      type: "fullstack",
      title: t("projects.p4.title"),
      desc: t("projects.p4.desc"),
      status: "Prototipo • Académico",
      tags: ["React", "Node.js", "Express", "SQLite", "Tailwind CSS"],
      metrics: [
        { val: t("projects.p4.metric1.val"), lbl: t("projects.p4.metric1.lbl") },
        { val: t("projects.p4.metric2.val"), lbl: t("projects.p4.metric2.lbl") },
        { val: t("projects.p4.metric3.val"), lbl: t("projects.p4.metric3.lbl") },
      ],
      githubUrl: "https://github.com/ricardoariasm762",
      demoUrl: "https://github.com/ricardoariasm762",
    },
  ];

  useEffect(() => {
    if (activeTab === "github" && repos.length === 0) {
      setLoadingRepos(true);
      fetch("https://api.github.com/users/ricardoariasm762/repos?sort=updated&per_page=100")
        .then((res) => (res.ok ? res.json() : []))
        .then((data: GithubRepo[]) => {
          const sorted = data
            .filter((r) => !r.archived)
            .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
          setRepos(sorted);
        })
        .catch(() => setRepos([]))
        .finally(() => setLoadingRepos(false));
    }
  }, [activeTab, repos.length]);

  const filteredShowcase = showcaseProjects.filter((p) => {
    if (projectCategory === "all") return true;
    return p.type === projectCategory;
  });

  const activeProject = showcaseProjects[selectedProject] || showcaseProjects[0];

  const filteredRepos = repos.filter((r) =>
    r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (r.description && r.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section id="proyectos" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag & Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-sky-600 dark:text-[#38bdf8] uppercase block mb-2">
              {t("projects.tag")}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[color:var(--foreground)] font-[family-name:var(--font-space-grotesk)]">
              {t("projects.title")}
            </h2>
            <p className="text-sm sm:text-base text-[color:var(--muted)] mt-2 max-w-xl">
              {t("projects.subtitle")}
            </p>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="inline-flex p-1.5 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] shadow-sm backdrop-blur-md self-start md:self-auto">
            <button
              type="button"
              onClick={() => setActiveTab("showcase")}
              className={`px-4 py-2 rounded-full text-xs font-mono font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === "showcase"
                  ? "bg-[#0284c7] text-white dark:bg-[#38bdf8] dark:text-[#030712] shadow-sm shadow-sky-500/25"
                  : "text-[color:var(--muted)] hover:text-[color:var(--foreground)]"
              }`}
            >
              {t("projects.tabShowcase")}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("github")}
              className={`px-4 py-2 rounded-full text-xs font-mono font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === "github"
                  ? "bg-[#0284c7] text-white dark:bg-[#38bdf8] dark:text-[#030712] shadow-sm shadow-sky-500/25"
                  : "text-[color:var(--muted)] hover:text-[color:var(--foreground)]"
              }`}
            >
              {t("projects.tabGithub")}
            </button>
          </div>
        </div>

        {/* TAB 1: STITCH INTERACTIVE ACCORDION SHOWCASE */}
        {activeTab === "showcase" && (
          <div>
            {/* Showcase Quick Filter */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <span className="text-xs font-mono text-[color:var(--muted)] mr-2 flex items-center gap-1.5">
                <FaLayerGroup size={12} />
                Filtrar:
              </span>
              {[
                { key: "all", label: "Todos los proyectos" },
                { key: "fullstack", label: "Fullstack" },
                { key: "backend", label: "Backend & Base de datos" },
                { key: "frontend", label: "Frontend & UI/UX" },
              ].map((cat) => (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => {
                    setProjectCategory(cat.key);
                    // Reset selected project index if needed
                    const firstMatch = showcaseProjects.findIndex(
                      (p) => cat.key === "all" || p.type === cat.key
                    );
                    if (firstMatch !== -1) setSelectedProject(firstMatch);
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-wide transition-all cursor-pointer ${
                    projectCategory === cat.key
                      ? "bg-sky-500/15 border border-sky-500/40 text-sky-600 dark:text-[#38bdf8] font-semibold"
                      : "bg-[color:var(--surface)] border border-[color:var(--border)] text-[color:var(--muted)] hover:border-[color:var(--border-active)]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left: Expanded Main Case Study Card */}
              <div className="lg:col-span-7">
                <div className="rounded-3xl bg-[color:var(--surface)] border border-[color:var(--border)] p-6 sm:p-8 md:p-10 shadow-xl shadow-slate-200/50 dark:shadow-2xl dark:shadow-black/50 relative overflow-hidden group hover:border-[color:var(--primary)] transition-all duration-300">
                  {/* Large Background Watermark Numeral */}
                  <span className="absolute -top-6 -right-6 text-8xl md:text-9xl font-bold font-mono text-slate-900/[0.04] dark:text-white/[0.03] select-none pointer-events-none">
                    {String(selectedProject + 1).padStart(2, "0")}
                  </span>

                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-widest font-semibold border border-sky-500/30 bg-sky-500/10 text-sky-600 dark:border-[#38bdf8]/40 dark:bg-[#38bdf8]/10 dark:text-[#38bdf8]">
                      {activeProject.category}
                    </span>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[color:var(--surface-container)] text-[color:var(--muted)] border border-[color:var(--border)]">
                      {activeProject.status}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] text-[color:var(--foreground)] mb-4">
                    {activeProject.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[color:var(--muted)] leading-relaxed mb-8 font-[family-name:var(--font-jakarta)]">
                    {activeProject.desc}
                  </p>

                  {/* KPI Metrics Dashboard Bar */}
                  <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[color:var(--surface-container)] border border-[color:var(--border)] mb-8">
                    {activeProject.metrics.map((metric, i) => (
                      <div key={i} className="text-center">
                        <div className="text-xl sm:text-2xl font-bold font-mono text-sky-600 dark:text-[#38bdf8]">
                          {metric.val}
                        </div>
                        <div className="text-[10px] sm:text-xs font-mono text-[color:var(--muted)] mt-0.5">
                          {metric.lbl}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {activeProject.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs font-mono border border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--foreground)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons with hover lift */}
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={activeProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase font-[family-name:var(--font-space-grotesk)] bg-[#0284c7] hover:bg-[#0369a1] text-white dark:bg-[#38bdf8] dark:hover:bg-[#7bd0ff] dark:text-[#030712] shadow-md shadow-sky-500/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <span>{t("projects.viewDemo")}</span>
                      <FaExternalLinkAlt size={11} />
                    </a>
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase font-[family-name:var(--font-space-grotesk)] border border-[color:var(--border-active)] bg-[color:var(--surface)] text-[color:var(--foreground)] hover:border-[color:var(--primary)] hover:text-[color:var(--primary)] transition-all hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <FaGithub size={14} />
                      <span>{t("projects.viewGithub")}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: Expandable Selection List */}
              <div className="lg:col-span-5 space-y-3">
                {filteredShowcase.map((p, idx) => {
                  const actualIdx = showcaseProjects.indexOf(p);
                  const isSelected = selectedProject === actualIdx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedProject(actualIdx)}
                      className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 cursor-pointer hover:-translate-y-0.5 ${
                        isSelected
                          ? "bg-[color:var(--surface)] border-[color:var(--primary)] shadow-md dark:shadow-[0_0_20px_rgba(56,189,248,0.2)] ring-1 ring-[color:var(--primary)]"
                          : "bg-[color:var(--surface-container)] border-[color:var(--border)] hover:border-[color:var(--border-active)] opacity-85 hover:opacity-100"
                      }`}
                    >
                      <span
                        className={`text-lg font-bold font-mono transition-colors ${
                          isSelected ? "text-sky-600 dark:text-[#38bdf8]" : "text-[color:var(--muted)]"
                        }`}
                      >
                        {String(actualIdx + 1).padStart(2, "0")}
                      </span>

                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[10px] font-mono tracking-wider uppercase text-[color:var(--muted)]">
                            {p.category}
                          </span>
                          {isSelected && (
                            <span className="w-2 h-2 rounded-full bg-sky-500 dark:bg-[#38bdf8] animate-pulse" />
                          )}
                        </div>
                        <h4
                          className={`text-base font-semibold font-[family-name:var(--font-space-grotesk)] mt-1 transition-colors ${
                            isSelected ? "text-sky-600 dark:text-[#38bdf8]" : "text-[color:var(--foreground)]"
                          }`}
                        >
                          {p.title}
                        </h4>
                        <p className="text-xs text-[color:var(--muted)] line-clamp-2 mt-1">
                          {p.desc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: LIVE GITHUB REPOSITORIES */}
        {activeTab === "github" && (
          <div>
            {/* Search filter input with icon & clear */}
            <div className="mb-6 max-w-md relative">
              <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[color:var(--muted)]" size={13} />
              <input
                type="text"
                placeholder={t("projects.github.search")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-[color:var(--surface)] border border-[color:var(--border)] text-sm text-[color:var(--foreground)] placeholder-[color:var(--muted)] focus:outline-none focus:border-[color:var(--primary)] transition-colors shadow-sm"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition cursor-pointer"
                  title="Limpiar búsqueda"
                >
                  <FaTimes size={13} />
                </button>
              )}
            </div>

            {loadingRepos ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <div
                    key={n}
                    className="p-5 rounded-2xl bg-[color:var(--surface)] border border-[color:var(--border)] animate-pulse space-y-4"
                  >
                    <div className="flex justify-between items-center">
                      <div className="w-8 h-8 rounded-lg bg-[color:var(--surface-container-high)]" />
                      <div className="w-16 h-4 rounded bg-[color:var(--surface-container-high)]" />
                    </div>
                    <div className="w-3/4 h-5 rounded bg-[color:var(--surface-container-high)]" />
                    <div className="w-full h-12 rounded bg-[color:var(--surface-container)]" />
                    <div className="w-24 h-4 rounded bg-[color:var(--surface-container-high)]" />
                  </div>
                ))}
              </div>
            ) : filteredRepos.length === 0 ? (
              <div className="text-center py-16 bg-[color:var(--surface)] rounded-2xl border border-[color:var(--border)]">
                <FaSearch className="mx-auto text-[color:var(--muted)] mb-3" size={28} />
                <p className="text-sm font-mono text-[color:var(--muted)]">
                  {t("projects.github.empty")}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredRepos.map((repo) => {
                  const langColor = repo.language ? LANGUAGE_COLORS[repo.language] || "#38bdf8" : "#94a3b8";
                  return (
                    <div
                      key={repo.id}
                      className="p-5 rounded-2xl bg-[color:var(--surface)] border border-[color:var(--border)] hover:border-[color:var(--primary)] transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md hover:-translate-y-1 cursor-default"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <FaGithub size={20} className="text-sky-600 dark:text-[#38bdf8] group-hover:scale-110 transition-transform" />
                          <div className="flex items-center gap-3 text-xs font-mono text-[color:var(--muted)]">
                            {repo.stargazers_count > 0 && (
                              <span className="flex items-center gap-1">
                                <FaStar className="text-amber-400" size={12} />
                                {repo.stargazers_count}
                              </span>
                            )}
                            {repo.forks_count > 0 && (
                              <span className="flex items-center gap-1">
                                <FaCodeBranch size={12} />
                                {repo.forks_count}
                              </span>
                            )}
                          </div>
                        </div>

                        <h4 className="text-base font-bold font-[family-name:var(--font-space-grotesk)] text-[color:var(--foreground)] group-hover:text-[color:var(--primary)] transition-colors mb-2">
                          {repo.name}
                        </h4>

                        <p className="text-xs text-[color:var(--muted)] leading-relaxed line-clamp-3 mb-4">
                          {repo.description || "Repositorio de desarrollo de software"}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-[color:var(--border)] flex items-center justify-between">
                        <span className="text-[11px] font-mono flex items-center gap-1.5 text-[color:var(--muted)]">
                          <span
                            className="w-2.5 h-2.5 rounded-full inline-block"
                            style={{ backgroundColor: langColor }}
                          />
                          {repo.language || "Código"}
                        </span>
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono text-[color:var(--primary)] hover:underline flex items-center gap-1 cursor-pointer font-medium"
                        >
                          {t("projects.github.viewRepo")} →
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
