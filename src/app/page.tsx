"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { useI18n } from "../i18n/I18nProvider";

export default function Habilidades() {
  const { t } = useI18n();
  const habilidades = [
    { nombre: "HTML", desc: "Estructuración semántica de páginas web." },
    { nombre: "CSS", desc: "Diseño adaptable y uso de frameworks modernos." },
    { nombre: "JavaScript", desc: "Desarrollo dinámico del lado del cliente." },
    { nombre: "React", desc: "Creación de interfaces interactivas y reactivas." },
    { nombre: "Angular", desc: "Desarrollo de aplicaciones SPA estructuradas." },
    { nombre: "Node.js", desc: "Desarrollo backend eficiente y escalable." },
  ];

  const proyectos = [
    {
      titulo: t("projects.interfaces.title"),
      descripcion: t("projects.interfaces.desc"),
      imagen: "/project1.png",
    },
    {
      titulo: t("projects.paginas.title"),
      descripcion: t("projects.paginas.desc"),
      imagen: "/project2.png",
    },
    {
      titulo: t("projects.tareas.title"),
      descripcion: t("projects.tareas.desc"),
      imagen: "/project3.png",
    },
  ];

  const experiencias = [
    {
      titulo: t("experience.tecInv.title"),
      desc: t("experience.tecInv.desc"),
    },
    {
      titulo: t("experience.quimica.title"),
      desc: t("experience.quimica.desc"),
    },
    {
      titulo: t("experience.diseno.title"),
      desc: t("experience.diseno.desc"),
    },
  ];


  const [index, setIndex] = useState(0);
  const [indexExp, setIndexExp] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);


  const nextExp = () => setIndexExp((prev) => (prev + 1) % experiencias.length);
  const prevExp = () => setIndexExp((prev) => (prev - 1 + experiencias.length) % experiencias.length);
  const nextSlide = () => setIndex((prev) => (prev + 1) % habilidades.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + habilidades.length) % habilidades.length);

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
        <div className="relative flex justify-center items-center">
          <div className="w-full max-w-5xl overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {habilidades.map((hab, i) => (
                <div key={i} className="min-w-full flex justify-center items-center">
                  <div className="bg-[color:var(--surface)] border border-[color:var(--border)] rounded-3xl w-72 h-[400px] flex flex-col justify-center items-center text-center">
                    <h3 className="font-semibold text-lg">{hab.nombre}</h3>
                    <p className="text-[color:var(--muted)] text-sm mt-3 px-4">{hab.desc}</p>
                  </div>
                </div>
              ))}
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
            <div className="ml-4 w-28 h-1 bg-gradient-to-r from-blue-500 to-indigo-700 rounded-full"></div>
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
        className="py-16 px-10 flex flex-col md:flex-row items-center justify-between rounded-t-[60px] bg-[color:var(--surface)] text-[color:var(--foreground)]"
      >
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold">{t("sections.about.title")}</h2>
          <p className="leading-relaxed">
            {t("about.paragraph")}
          </p>
        </div>
        <img src="/laptop.png" alt="Laptop" className="w-80 mt-10 md:mt-0" />
      </section>

      {/* 🔹 PROYECTOS CON ACORDEÓN */}
      <section id="proyectos" className="py-20 px-10 text-center">
        <h2 className="text-3xl font-bold mb-8">{t("sections.projects.title")}</h2>

        <div className="max-w-4xl mx-auto space-y-6 text-left">
          {proyectos.map((proyecto, i) => (
            <div
              key={i}
              className="bg-[color:var(--surface)] shadow-md rounded-2xl overflow-hidden border border-[color:var(--border)]"
            >
              <button
                onClick={() => toggleAcordeon(i)}
                className="w-full flex justify-between items-center px-6 py-4 font-semibold text-[color:var(--foreground)] hover:bg-[color:var(--surface)]/80 transition"
              >
                {proyecto.titulo}
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
                  >
                    <p className="text-[color:var(--muted)] mb-4">{proyecto.descripcion}</p>
                    <img
                      src={proyecto.imagen}
                      alt={proyecto.titulo}
                      className="rounded-lg shadow-md w-full h-56 object-cover"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 Testimonios */}
      <section id="testimonios" className="py-20 px-10 text-center bg-[color:var(--surface)]">
        <h2 className="text-3xl font-bold mb-8">{t("sections.testimonials.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[color:var(--surface)] shadow-md rounded-2xl p-6 border border-[color:var(--border)]">
            <p className="text-[color:var(--muted)] mb-4">“{t("testimonials.one.text") }”</p>
            <h4 className="font-semibold">Andres Parra</h4>
            <span className="text-sm text-[color:var(--muted)]">Profesor - Pasto</span>
          </div>
          <div className="bg-[color:var(--surface)] shadow-md rounded-2xl p-6 border border-[color:var(--border)]">
            <p className="text-[color:var(--muted)] mb-4">“{t("testimonials.two.text") }”</p>
            <h4 className="font-semibold">Cristian Gómez</h4>
            <span className="text-sm text-[color:var(--muted)]">Proyecto - Nariño</span>
          </div>
          <div className="bg-[color:var(--surface)] shadow-md rounded-2xl p-6 border border-[color:var(--border)]">
            <p className="text-[color:var(--muted)] mb-4">“{t("testimonials.three.text") }”</p>
            <h4 className="font-semibold">Nicolas Wagmim</h4>
            <span className="text-sm text-[color:var(--muted)]">Profesor - Nariño</span>
          </div>
        </div>
      </section>

      {/* EXPERIENCIA (con slider como habilidades) */}
      <section id="experiencia" className="py-20 px-6 text-center relative">
        <h2 className="text-3xl font-bold mb-6">{t("sections.experience.title")}</h2>
        <div className="relative flex justify-center items-center">
          <div className="w-full max-w-5xl overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${indexExp * 100}%)` }}
            >
              {experiencias.map((exp, i) => (
                <div key={i} className="min-w-full flex justify-center items-center">
                  <div className="bg-[color:var(--surface)] border border-[color:var(--border)] rounded-3xl w-72 h-[400px] flex flex-col justify-center items-center text-center">
                    <h3 className="font-semibold text-lg">{exp.titulo}</h3>
                    <p className="text-[color:var(--muted)] text-sm mt-3 px-4">{exp.desc}</p>
                  </div>
                </div>
              ))}
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
            <div className="ml-4 w-28 h-1 bg-gradient-to-r from-blue-500 to-indigo-700 rounded-full"></div>
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
