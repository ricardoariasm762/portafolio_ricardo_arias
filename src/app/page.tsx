"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Habilidades() {
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
      titulo: "Interfaces de Software",
      descripcion:
        "Proyecto académico centrado en el diseño de interfaces intuitivas y usables, utilizando Figma, React y buenas prácticas de UI/UX.",
      imagen: "/project1.png",
    },
    {
      titulo: "Páginas Web - Trabajos Finales",
      descripcion:
        "Desarrollo de sitios web académicos funcionales y adaptativos, aplicando HTML, CSS, JavaScript y Angular.",
      imagen: "/project2.png",
    },
    {
      titulo: "Aplicación de Gestión de Tareas",
      descripcion:
        "App creada con Node.js y MongoDB para gestionar proyectos de forma colaborativa. Incluye autenticación y CRUD completo.",
      imagen: "/project3.png",
    },
  ];

  const experiencias = [
    {
      titulo: "Técnico Investigación Judicial",
      desc: "Graduado del Colegio la Presentación - Nariño",
    },
    {
      titulo: "2 Semestres Química",
      desc: "Universidad de Nariño",
    },
    {
      titulo: "Diseño Gráfico",
      desc: "Formación técnica en Adobe y Figma",
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
    <main className="min-h-screen bg-white scroll-smooth">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-md shadow-md rounded-b-3xl px-8 py-3 flex justify-center space-x-6 text-sm font-medium text-gray-700">
        <a href="#home" className="hover:text-blue-600 transition">Home</a>
        <a href="#habilidades" className="hover:text-blue-600 transition">Habilidades</a>
        <a href="#acerca" className="hover:text-blue-600 transition">Acerca de mí</a>
        <a href="#proyectos" className="hover:text-blue-600 transition">Proyectos</a>
        <a href="#testimonios" className="hover:text-blue-600 transition">Testimonios</a>
        <a href="#experiencia" className="hover:text-blue-600 transition">Experiencia</a>
        <a href="#contacto" className="hover:text-blue-600 transition">Contacto</a>
      </nav>

      {/* 🔹 HERO SECTION */}
      <section
        id="home"
        className="relative bg-cover bg-center h-[500px] flex items-center justify-between px-10 md:px-20"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Tarjeta izquierda */}
        <div className="relative z-10 bg-white/60 backdrop-blur-md shadow-lg px-10 py-8 rounded-r-3xl w-fit ml-0 mt-10 md:mt-0 md:ml-0 md:translate-x-0">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">¡HOLA! SOY RICARDO</h1>
          <p className="text-gray-800 mb-6 text-lg max-w-md">
            Soy estudiante de Ingeniería de Software apasionado por el diseño y desarrollo de soluciones digitales.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg text-white font-semibold shadow">
              Descargar CV
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 px-5 py-2 rounded-lg text-gray-800 font-semibold shadow">
              Contactos
            </button>
          </div>
        </div>

        {/* Imagen derecha */}
        <div className="relative z-10 flex justify-end w-full md:w-[45%]">
          <img
            src="/ricardo.jpg"
            alt="Ricardo"
            className="w-60 h-60 md:w-72 md:h-72 rounded-full border-4 border-white shadow-2xl object-cover"
          />
        </div>
      </section>

      {/* 🔹 HABILIDADES TÉCNICAS */}
      <section id="habilidades" className="py-20 px-6 text-center relative">
        <h2 className="text-3xl font-bold mb-2">Habilidades Técnicas</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Estas son mis principales habilidades técnicas, desarrolladas a lo largo
          de mi formación académica y experiencia práctica.
        </p>

        {/* Slider principal */}
        <div className="relative flex justify-center items-center">
          <div className="w-full max-w-5xl overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${index * 100}%)`,
                width: `${habilidades.length * 100}%`,
              }}
            >
              {habilidades.map((hab, i) => (
                <div key={i} className="w-full flex-shrink-0 flex justify-center items-center">
                  <div className="bg-white border border-gray-300 rounded-3xl w-72 h-[400px] flex flex-col justify-center items-center text-center">
                    <h3 className="font-semibold text-lg">{hab.nombre}</h3>
                    <p className="text-gray-600 text-sm mt-3 px-4">{hab.desc}</p>
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
            <button onClick={prevSlide} className="bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-md transition">◀</button>
            <button onClick={nextSlide} className="bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-md transition">▶</button>
          </div>
        </div>
      </section>

      {/* 🔹 ACERCA DE MÍ */}
      <section
        id="acerca"
        className="bg-gradient-to-r from-indigo-950 to-indigo-800 text-white py-16 px-10 flex flex-col md:flex-row items-center justify-between rounded-t-[60px]"
      >
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold">Acerca de mí</h2>
          <p className="leading-relaxed">
            Desde pequeño descubrí en el diseño gráfico una forma de dar vida a las ideas.
            Hoy estudio Ingeniería de Software donde combino mi creatividad con el razonamiento lógico para resolver problemas.
            He trabajado con tecnologías como Angular, Python, TypeScript, y Java.
          </p>
        </div>
        <img src="/laptop.png" alt="Laptop" className="w-80 mt-10 md:mt-0" />
      </section>

      {/* 🔹 PROYECTOS CON ACORDEÓN */}
      <section id="proyectos" className="py-20 px-10 text-center">
        <h2 className="text-3xl font-bold mb-8">Mis Proyectos</h2>

        <div className="max-w-4xl mx-auto space-y-6 text-left">
          {proyectos.map((proyecto, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-2xl overflow-hidden border border-gray-200"
            >
              <button
                onClick={() => toggleAcordeon(i)}
                className="w-full flex justify-between items-center px-6 py-4 font-semibold text-gray-800 hover:bg-gray-100 transition"
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
                    <p className="text-gray-600 mb-4">{proyecto.descripcion}</p>
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
      <section id="testimonios" className="py-20 px-10 text-center bg-gray-100">
        <h2 className="text-3xl font-bold mb-8">Testimonios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-2xl p-6">
            <p className="text-gray-600 mb-4">
              “Ricardo se destaca por su dedicación y compromiso con cada proyecto...”
            </p>
            <h4 className="font-semibold">Andres Parra</h4>
            <span className="text-sm text-gray-500">Profesor - Pasto</span>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-6">
            <p className="text-gray-600 mb-4">
              “Trabajar con Ricardo fue una experiencia enriquecedora...”
            </p>
            <h4 className="font-semibold">Cristian Gómez</h4>
            <span className="text-sm text-gray-500">Proyecto - Nariño</span>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-6">
            <p className="text-gray-600 mb-4">
              “Ricardo es responsable, creativo y domina el diseño digital...”
            </p>
            <h4 className="font-semibold">Nicolas Wagmim</h4>
            <span className="text-sm text-gray-500">Profesor - Nariño</span>
          </div>
        </div>
      </section>

      {/* EXPERIENCIA (con slider como habilidades) */}
      <section id="experiencia" className="py-20 px-6 text-center relative">
        <h2 className="text-3xl font-bold mb-6">Experiencia Académica y Laboral</h2>
        <div className="relative flex justify-center items-center">
          <div className="w-full max-w-5xl overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${indexExp * 100}%)`,
                width: `${experiencias.length * 100}%`,
              }}
            >
              {experiencias.map((exp, i) => (
                <div key={i} className="w-full flex-shrink-0 flex justify-center items-center">
                  <div className="bg-white border border-gray-300 rounded-3xl w-72 h-[400px] flex flex-col justify-center items-center text-center">
                    <h3 className="font-semibold text-lg">{exp.titulo}</h3>
                    <p className="text-gray-600 text-sm mt-3 px-4">{exp.desc}</p>
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
            <button onClick={prevExp} className="bg-white/80 p-3 rounded-full shadow-md">◀</button>
            <button onClick={nextExp} className="bg-white/80 p-3 rounded-full shadow-md">▶</button>
          </div>
        </div>
      </section>

      {/* 🔹 Contacto */}
      <section id="contacto" className="py-20 px-10 text-center bg-gray-50">
        <h2 className="text-3xl font-bold mb-8">Contactos</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <div className="flex items-center gap-2 bg-blue-100 text-blue-800 px-6 py-3 rounded-lg">
            <span className="font-semibold">📧 ricardo.ariasr9@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 bg-blue-100 text-blue-800 px-6 py-3 rounded-lg">
            <span className="font-semibold">📞 (+57) 310 496 1222</span>
          </div>
        </div>
      </section>

      <footer className="bg-indigo-950 text-gray-300 py-6 text-center text-sm">
        <p>© 2025 Ricardo Arias. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}
