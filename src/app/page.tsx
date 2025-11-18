"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { useI18n } from "../i18n/I18nProvider";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiAngular, SiNodedotjs, SiDjango, SiPython, SiDotnet } from "react-icons/si";
import { FaGithub, FaExternalLinkAlt, FaJava } from "react-icons/fa";

export default function Habilidades() {
  const { t } = useI18n();
  const habilidades = [
    { nombre: "Python", desc: "Desarrollo backend y scripting eficiente.", icon: SiPython, color: "#3776AB" },
    { nombre: "Java", desc: "POO y aplicaciones empresariales.", icon: FaJava, color: "#ED8B00" },
    { nombre: "C#", desc: "Desarrollo con .NET para aplicaciones robustas.", icon: SiDotnet, color: "#512BD4" },
    { nombre: "HTML", desc: "Estructuración semántica de páginas web.", icon: SiHtml5, color: "#E34F26" },
    { nombre: "CSS", desc: "Diseño adaptable y uso de frameworks modernos.", icon: SiCss3, color: "#1572B6" },
    { nombre: "JavaScript", desc: "Desarrollo dinámico del lado del cliente.", icon: SiJavascript, color: "#F7DF1E" },
    { nombre: "React", desc: "Creación de interfaces interactivas y reactivas.", icon: SiReact, color: "#61DAFB" },
    { nombre: "Angular", desc: "Desarrollo de aplicaciones SPA estructuradas.", icon: SiAngular, color: "#DD0031" },
    { nombre: "Node.js", desc: "Desarrollo backend eficiente y escalable.", icon: SiNodedotjs, color: "#339933" },
    { nombre: "Django", desc: "Desarrollo backend con Django y APIs robustas.", icon: SiDjango, color: "#092E20" },
  ];

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
  const [repositorios, setRepositorios] = useState<GithubRepo[]>([]);
  const [loadingRepos, setLoadingRepos] = useState(true);

  const experiencias = [
    {
      titulo: t("experience.tecInv.title"),
      desc: t("experience.tecInv.desc"),
      imgSrc: "/investigacion.jpg",
    },
    {
      titulo: t("experience.quimica.title"),
      desc: t("experience.quimica.desc"),
      imgSrc: "/quimica.jpg",
    },
    {
      titulo: t("experience.diseno.title"),
      desc: t("experience.diseno.desc"),
      imgSrc: "/diseño.jpg",
    },
  ];


  const [index, setIndex] = useState(0);
  const [indexExp, setIndexExp] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // 🔹 Función auxiliar para obtener color del lenguaje
  const getLanguageColor = (language: string | null): string => {
    if (!language) return "#6b7280";
    const colors: Record<string, string> = {
      JavaScript: "#F7DF1E",
      TypeScript: "#3178C6",
      Python: "#3776AB",
      Java: "#ED8B00",
      HTML: "#E34F26",
      CSS: "#1572B6",
      React: "#61DAFB",
      Angular: "#DD0031",
      "Node.js": "#339933",
      PHP: "#777BB4",
      Ruby: "#CC342D",
      Go: "#00ADD8",
      Rust: "#000000",
      C: "#A8B9CC",
      "C++": "#00599C",
      "C#": "#239120",
    };
    return colors[language] || "#6b7280";
  };

  // 🔹 Obtener repositorios de GitHub
  useEffect(() => {
    const fetchRepositorios = async () => {
      try {
        setLoadingRepos(true);
        const response = await fetch("https://api.github.com/users/ricardoariasm762/repos?sort=updated&per_page=100&type=all");
        if (response.ok) {
          const data = (await response.json()) as GithubRepo[];
          // Mostrar todos los repositorios públicos (incluyendo forks)
          // Ordenar por fecha de actualización (más recientes primero)
          const reposOrdenados = data
            .filter((repo) => !repo.archived)
            .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
          setRepositorios(reposOrdenados);
        } else {
          console.error("Error al obtener repositorios:", response.statusText);
          setRepositorios([]);
        }
      } catch (error) {
        console.error("Error al obtener repositorios:", error);
        setRepositorios([]);
      } finally {
        setLoadingRepos(false);
      }
    };

    fetchRepositorios();
  }, []);

  


  const nextExp = useCallback(() => setIndexExp((prev) => (prev + 1) % experiencias.length), [experiencias.length]);
  const prevExp = useCallback(() => setIndexExp((prev) => (prev - 1 + experiencias.length) % experiencias.length), [experiencias.length]);
  const nextSlide = useCallback(() => setIndex((prev) => (prev + 1) % habilidades.length), [habilidades.length]);
  const prevSlide = useCallback(() => setIndex((prev) => (prev - 1 + habilidades.length) % habilidades.length), [habilidades.length]);

  useEffect(() => {
    const habilidadesEl = document.getElementById("habilidades");
    const experienciaEl = document.getElementById("experiencia");
    let startX1 = 0;
    let startX2 = 0;
    const threshold = 50;

    const onStart1 = (e: TouchEvent) => {
      startX1 = e.touches[0].clientX;
    };
    const onEnd1 = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - startX1;
      if (dx > threshold) prevSlide();
      else if (dx < -threshold) nextSlide();
    };

    const onStart2 = (e: TouchEvent) => {
      startX2 = e.touches[0].clientX;
    };
    const onEnd2 = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - startX2;
      if (dx > threshold) prevExp();
      else if (dx < -threshold) nextExp();
    };

    habilidadesEl?.addEventListener("touchstart", onStart1, { passive: true });
    habilidadesEl?.addEventListener("touchend", onEnd1, { passive: true });
    experienciaEl?.addEventListener("touchstart", onStart2, { passive: true });
    experienciaEl?.addEventListener("touchend", onEnd2, { passive: true });

    return () => {
      habilidadesEl?.removeEventListener("touchstart", onStart1);
      habilidadesEl?.removeEventListener("touchend", onEnd1);
      experienciaEl?.removeEventListener("touchstart", onStart2);
      experienciaEl?.removeEventListener("touchend", onEnd2);
    };
  }, [prevSlide, nextSlide, prevExp, nextExp]);

  // 🔹 Scroll suave entre secciones
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    const smoothScroll = (e: Event) => {
      e.preventDefault();
      const target = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
      if (target) {
        const element = document.querySelector(target);
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 70,
            behavior: "smooth",
          });
        }
      }
    };
    links.forEach((link) => link.addEventListener("click", smoothScroll));
    return () => links.forEach((link) => link.removeEventListener("click", smoothScroll));
  }, []);

  // 🔹 Alternar acordeón
  const toggleAcordeon = (i: number) => {
    setActiveIndex((prev) => (prev === i ? null : i));
  };

  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)] scroll-smooth">
      <Navbar />
      <Hero />

      {/* 🔹 HABILIDADES TÉCNICAS */}
      <section id="habilidades" className="py-20 px-6 text-center relative">
        <h2 className="text-3xl font-bold mb-2">{t("sections.skills.title")}</h2>
        <p className="text-[color:var(--muted)] mb-10 max-w-2xl mx-auto">
          {t("sections.skills.subtitle")}
        </p>

        {/* Slider principal */}
        <div className="relative flex justify-center items-center" style={{ perspective: "1000px" }}>
          <div className="w-full max-w-5xl overflow-hidden">
            <div className="relative h-[400px] flex items-center justify-center">
              {habilidades.map((hab, i) => {
                const diff = i - index;
                const isActive = diff === 0;
                const isPrev = diff === -1;
                const isNext = diff === 1;
                const isVisible = Math.abs(diff) <= 1;
                
                if (!isVisible) return null;
                
                let scale, translateX, zIndex, opacity;
                
                if (isActive) {
                  // Tarjeta actual: al frente, centro
                  scale = 1;
                  translateX = 0;
                  zIndex = 10;
                  opacity = 1;
                } else if (isPrev) {
                  // Tarjeta anterior: atrás, izquierda
                  scale = 0.75;
                  translateX = -35;
                  zIndex = 5;
                  opacity = 0.6;
                } else if (isNext) {
                  // Tarjeta siguiente: atrás, derecha
                  scale = 0.75;
                  translateX = 35;
                  zIndex = 5;
                  opacity = 0.6;
                }
                
                return (
                  <motion.div
                    key={i}
                    className="absolute flex justify-center items-center"
                    initial={false}
                    animate={{
                      scale,
                      x: `${translateX}%`,
                      opacity,
                      z: isActive ? 0 : -100,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    style={{ zIndex }}
                  >
                    <div className="bg-[color:var(--surface)] border border-[color:var(--border)] rounded-3xl w-72 h-[400px] flex flex-col justify-center items-center text-center shadow-lg">
                      <div className="mb-6">
                        {hab.icon && (
                          <hab.icon 
                            size={80} 
                            style={{ color: hab.color }}
                            className="transition-transform duration-300 hover:scale-110"
                          />
                        )}
                      </div>
                      <h3 className="font-semibold text-lg">{hab.nombre}</h3>
                      <p className="text-[color:var(--muted)] text-sm mt-3 px-4">{hab.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Indicadores + botones de navegación */}
        <div className="flex justify-between items-center max-w-5xl mx-auto mt-8 px-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              {habilidades.map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${i === index ? "bg-blue-600 w-6" : "bg-gray-300"}`}
                ></div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={prevSlide} className="p-3 rounded-full shadow-md transition bg-[color:var(--surface)]/80 text-[color:var(--foreground)] hover:opacity-90">◀</button>
            <button onClick={nextSlide} className="p-3 rounded-full shadow-md transition bg-[color:var(--surface)]/80 text-[color:var(--foreground)] hover:opacity-90">▶</button>
          </div>
        </div>
      </section>

      {/* 🔹 ACERCA DE MÍ */}
      <section
        id="acerca"
        className="py-16 px-6 sm:px-10 relative overflow-visible flex flex-col md:flex-row items-start justify-between rounded-4xl bg-[#030024] text-white"
      >
        {/* Laptop - arriba en móvil/tablet, derecha en desktop */}
        <div className="relative w-full md:w-1/2 mb-6 md:mb-0 md:order-2 flex justify-center md:justify-end items-start">
          <Image 
            src="/laptop.png" 
            alt="Laptop" 
            width={800}
            height={600}
            className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl relative z-10 -mt-8 sm:-mt-12 md:-mt-0 lg:-mt-40 object-contain" 
          />
        </div>
        
        {/* Texto - abajo en móvil/tablet, izquierda en desktop */}
        <div className="md:w-1/2 md:order-1 space-y-4 z-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">{t("sections.about.title")}</h2>
          <p className="leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base text-white">
            {t("about.paragraph1")}
          </p>
          <p className="leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base text-white">
            {t("about.paragraph2")}
          </p>
          <p className="leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base text-white">
            {t("about.paragraph3")}
          </p>
          <p className="leading-relaxed text-sm sm:text-base text-white">
            {t("about.paragraph4")}
          </p>
        </div>
      </section>

      {/* 🔹 PROYECTOS CON ACORDEÓN - REPOSITORIOS DE GITHUB */}
      <section id="proyectos" className="py-20 px-10 text-center">
        <h2 className="text-3xl font-bold mb-8">{t("sections.projects.title")}</h2>

        <div className="max-w-4xl mx-auto space-y-6 text-left">
          {loadingRepos ? (
            <div className="text-center py-12">
              <p className="text-[color:var(--muted)]">Cargando repositorios...</p>
            </div>
          ) : repositorios.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[color:var(--muted)]">No se encontraron repositorios.</p>
            </div>
          ) : (
            repositorios.map((repo, i) => (
              <div
                key={repo.id}
                className="bg-[#2831A7] shadow-md rounded-2xl overflow-hidden border border-[color:var(--border)]"
              >
                <button
                  onClick={() => toggleAcordeon(i)}
                  className="w-full flex justify-between items-center px-6 py-4 font-semibold text-[color:var(--foreground)] hover:bg-[color:var(--surface)]/80 transition"
                >
                  <div className="flex items-center gap-3">
                    <FaGithub size={20} className="text-[color:var(--foreground)]" />
                    <span>{repo.name}</span>
                    {repo.fork && (
                      <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded">Fork</span>
                    )}
                  </div>
                  <span className="text-xl">{activeIndex === i ? "−" : "+"}</span>
                </button>

                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="px-6 pb-6"
                      style={{ backgroundColor: "rgba(128, 128, 128, 0.1)" }}
                    >
                      {repo.description && (
                        <p className="text-[color:var(--muted)] mb-4">{repo.description}</p>
                      )}
                      
                      {/* Información del repositorio */}
                      <div className="flex flex-wrap gap-4 mb-4 text-sm">
                        {repo.language && (
                          <div className="flex items-center gap-2">
                            <span 
                              className="w-3 h-3 rounded-full" 
                              style={{ backgroundColor: getLanguageColor(repo.language) }}
                            ></span>
                            <span className="text-[color:var(--muted)]">{repo.language}</span>
                          </div>
                        )}
                        {repo.stargazers_count > 0 && (
                          <div className="flex items-center gap-1 text-[color:var(--muted)]">
                            <span>⭐</span>
                            <span>{repo.stargazers_count}</span>
                          </div>
                        )}
                        {repo.forks_count > 0 && (
                          <div className="flex items-center gap-1 text-[color:var(--muted)]">
                            <span>🍴</span>
                            <span>{repo.forks_count}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1 text-[color:var(--muted)]">
                          <span>📅</span>
                          <span>Actualizado: {new Date(repo.updated_at).toLocaleDateString('es-ES', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                        </div>
                      </div>
                      
                      {/* Botones de enlaces */}
                      <div className="flex flex-wrap gap-3 mb-4">
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-[#24292e] hover:bg-[#2f363d] text-white rounded-lg transition-colors duration-200 font-medium text-sm shadow-md hover:shadow-lg"
                        >
                          <FaGithub size={18} />
                          Ver en GitHub
                        </a>
                        {repo.homepage && (
                          <a
                            href={repo.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium text-sm shadow-md hover:shadow-lg"
                          >
                            <FaExternalLinkAlt size={16} />
                            Ver Demo
                          </a>
                        )}
                      </div>

                      {/* Topics/Tags */}
                      {repo.topics && repo.topics.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {repo.topics.map((topic: string) => (
                            <span
                              key={topic}
                              className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))
          )}
        </div>
      </section>

      {/* 🔹 Testimonios */}
      <section id="testimonios" className="py-20 px-10 text-center bg-[color:var(--surface)]">
        <h2 className="text-3xl font-bold mb-8">{t("sections.testimonials.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="shadow-md rounded-2xl p-6 border border-[color:var(--border)]" style={{ backgroundColor: "var(--testimonial-bg)", color: "var(--testimonial-text)" }}>
            <p className="mb-4">&ldquo;{t("testimonials.one.text")}&rdquo;</p>
            <h4 className="font-semibold">Andres Parra</h4>
            <span className="text-sm opacity-70">Pasto - Nariño</span>
          </div>
          <div className="shadow-md rounded-2xl p-6 border border-[color:var(--border)]" style={{ backgroundColor: "var(--testimonial-bg)", color: "var(--testimonial-text)" }}>
            <p className="mb-4">&ldquo;{t("testimonials.two.text")}&rdquo;</p>
            <h4 className="font-semibold">Cristian Gómez</h4>
            <span className="text-sm opacity-70">Pasto - Nariño</span>
          </div>
          <div className="shadow-md rounded-2xl p-6 border border-[color:var(--border)]" style={{ backgroundColor: "var(--testimonial-bg)", color: "var(--testimonial-text)" }}>
            <p className="mb-4">&ldquo;{t("testimonials.three.text")}&rdquo;</p>
            <h4 className="font-semibold">Nicolas Wagmim</h4>
            <span className="text-sm opacity-70">Pasto - Nariño</span>
          </div>
        </div>
      </section>

      {/* EXPERIENCIA (con slider como habilidades) */}
      <section id="experiencia" className="py-20 px-6 text-center relative">
        <h2 className="text-3xl font-bold mb-6">{t("sections.experience.title")}</h2>
        <div className="relative flex justify-center items-center" style={{ perspective: "1000px" }}>
          <div className="w-full max-w-5xl overflow-hidden">
            <div className="relative h-[400px] flex items-center justify-center">
              {experiencias.map((exp, i) => {
                const diff = i - indexExp;
                const isActive = diff === 0;
                const isPrev = diff === -1;
                const isNext = diff === 1;
                const isVisible = Math.abs(diff) <= 1;
                
                if (!isVisible) return null;
                
                let scale, translateX, zIndex, opacity;
                
                if (isActive) {
                  // Tarjeta actual: al frente, centro
                  scale = 1;
                  translateX = 0;
                  zIndex = 10;
                  opacity = 1;
                } else if (isPrev) {
                  // Tarjeta anterior: atrás, izquierda
                  scale = 0.75;
                  translateX = -35;
                  zIndex = 5;
                  opacity = 0.6;
                } else if (isNext) {
                  // Tarjeta siguiente: atrás, derecha
                  scale = 0.75;
                  translateX = 35;
                  zIndex = 5;
                  opacity = 0.6;
                }
                
                return (
                  <motion.div
                    key={i}
                    className="absolute flex justify-center items-center"
                    initial={false}
                    animate={{
                      scale,
                      x: `${translateX}%`,
                      opacity,
                      z: isActive ? 0 : -100,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    style={{ zIndex }}
                  >
                    <div className="relative rounded-3xl w-72 h-[400px] overflow-hidden border border-[color:var(--border)] shadow-lg">
                      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${exp.imgSrc})` }}></div>
                      <div className="absolute inset-0 bg-black/40"></div>
                      <div className="relative z-10 h-full w-full flex flex-col justify-end items-center text-center p-4">
                        <h3
                          className="font-semibold text-lg text-white"
                          style={{textShadow: "0 0 3px rgba(0,0,0,0.9), 1px 1px 0 #000, -1px -1px 0 #000" }}
                        >
                          {exp.titulo}
                        </h3>
                        <p
                          className="text-sm mt-3 px-2 text-white/90"
                          style={{textShadow: "0 0 2px rgba(0,0,0,0.85), 1px 1px 0 #000, -1px -1px 0 #000" }}
                        >
                          {exp.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Indicadores */}
        <div className="flex justify-between items-center max-w-5xl mx-auto mt-8 px-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              {experiencias.map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${i === indexExp ? "bg-blue-600 w-6" : "bg-gray-300"}`}
                ></div>
              ))}
            </div>
            
          </div>

          <div className="flex items-center gap-4">
            <button onClick={prevExp} className="p-3 rounded-full shadow-md bg-[color:var(--surface)]/80 text-[color:var(--foreground)] hover:opacity-90">◀</button>
            <button onClick={nextExp} className="p-3 rounded-full shadow-md bg-[color:var(--surface)]/80 text-[color:var(--foreground)] hover:opacity-90">▶</button>
          </div>
        </div>
      </section>

      {/* 🔹 Contacto */}
      <section id="contacto" className="py-20 px-10 text-center bg-[color:var(--surface)]">
        <h2 className="text-3xl font-bold mb-8">{t("sections.contact.title")}</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <div className="flex items-center gap-2 bg-blue-100 text-blue-800 px-6 py-3 rounded-lg">
            <span className="font-semibold">📧 ricardo.ariasr9@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 bg-blue-100 text-blue-800 px-6 py-3 rounded-lg">
            <span className="font-semibold">📞 (+57) 310 496 1222</span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
