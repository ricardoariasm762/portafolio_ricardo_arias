export type Locale = "es" | "en";

type Dictionary = Record<string, string>;

export const dictionaries: Record<Locale, Dictionary> = {
  es: {
    "nav.home": "Home",
    "nav.skills": "Habilidades",
    "nav.about": "Acerca de mí",
    "nav.projects": "Proyectos",
    "nav.testimonials": "Testimonios",
    "nav.experience": "Experiencia",
    "nav.contact": "Contacto",

    "hero.greeting": "¡HOLA! SOY RICARDO",
    "hero.description":
      "Soy estudiante de Ingeniería de Software apasionado por el diseño y desarrollo de soluciones digitales.",
    "hero.downloadCv": "Descargar CV",
    "hero.contacts": "Contactos",

    "sections.skills.title": "Habilidades Técnicas",
    "sections.skills.subtitle":
      "Estas son mis principales habilidades técnicas, desarrolladas a lo largo de mi formación académica y experiencia práctica.",
    "sections.about.title": "Acerca de mí",
    "sections.projects.title": "Mis Proyectos",
    "sections.testimonials.title": "Testimonios",
    "sections.experience.title": "Experiencia Académica y Laboral",
    "sections.contact.title": "Contactos",

    "footer.copyright": "© 2025 Ricardo Arias. Todos los derechos reservados.",
    "lang.es": "ES",
    "lang.en": "EN",

    // About paragraph
    "about.paragraph":
      "Desde pequeño descubrí en el diseño gráfico una forma de dar vida a las ideas. Hoy estudio Ingeniería de Software donde combino mi creatividad con el razonamiento lógico para resolver problemas. He trabajado con tecnologías como Angular, Python, TypeScript, y Java.",

    // Projects
    "projects.interfaces.title": "Interfaces de Software",
    "projects.interfaces.desc":
      "Proyecto académico centrado en el diseño de interfaces intuitivas y usables, utilizando Figma, React y buenas prácticas de UI/UX.",
    "projects.paginas.title": "Páginas Web - Trabajos Finales",
    "projects.paginas.desc":
      "Desarrollo de sitios web académicos funcionales y adaptativos, aplicando HTML, CSS, JavaScript y Angular.",
    "projects.tareas.title": "Aplicación de Gestión de Tareas",
    "projects.tareas.desc":
      "App creada con Node.js y MongoDB para gestionar proyectos de forma colaborativa. Incluye autenticación y CRUD completo.",

    // Testimonials
    "testimonials.one.text": "Ricardo se destaca por su dedicación y compromiso con cada proyecto...",
    "testimonials.two.text": "Trabajar con Ricardo fue una experiencia enriquecedora...",
    "testimonials.three.text": "Ricardo es responsable, creativo y domina el diseño digital...",

    // Experience
    "experience.tecInv.title": "Técnico Investigación Judicial",
    "experience.tecInv.desc": "Graduado del Colegio la Presentación - Nariño",
    "experience.quimica.title": "2 Semestres Química",
    "experience.quimica.desc": "Universidad de Nariño",
    "experience.diseno.title": "Diseño Gráfico",
    "experience.diseno.desc": "Formación técnica en Adobe y Figma",
  },
  en: {
    "nav.home": "Home",
    "nav.skills": "Skills",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.testimonials": "Testimonials",
    "nav.experience": "Experience",
    "nav.contact": "Contact",

    "hero.greeting": "HI! I AM RICARDO",
    "hero.description":
      "I am a Software Engineering student passionate about designing and building digital solutions.",
    "hero.downloadCv": "Download CV",
    "hero.contacts": "Contacts",

    "sections.skills.title": "Technical Skills",
    "sections.skills.subtitle":
      "These are my main technical skills, developed through my academic training and practical experience.",
    "sections.about.title": "About Me",
    "sections.projects.title": "My Projects",
    "sections.testimonials.title": "Testimonials",
    "sections.experience.title": "Academic and Work Experience",
    "sections.contact.title": "Contacts",

    "footer.copyright": "© 2025 Ricardo Arias. All rights reserved.",
    "lang.es": "ES",
    "lang.en": "EN",

    // About paragraph
    "about.paragraph":
      "Since I was young, I found in graphic design a way to bring ideas to life. Today I study Software Engineering, combining creativity with logical reasoning to solve problems. I have worked with technologies such as Angular, Python, TypeScript, and Java.",

    // Projects
    "projects.interfaces.title": "Software Interfaces",
    "projects.interfaces.desc":
      "Academic project focused on designing intuitive and usable interfaces, using Figma, React, and UI/UX best practices.",
    "projects.paginas.title": "Web Pages - Final Assignments",
    "projects.paginas.desc":
      "Development of functional and responsive academic websites using HTML, CSS, JavaScript, and Angular.",
    "projects.tareas.title": "Task Management App",
    "projects.tareas.desc":
      "App built with Node.js and MongoDB to manage projects collaboratively. Includes authentication and full CRUD.",

    // Testimonials
    "testimonials.one.text": "Ricardo stands out for his dedication and commitment to every project...",
    "testimonials.two.text": "Working with Ricardo was an enriching experience...",
    "testimonials.three.text": "Ricardo is responsible, creative, and masters digital design...",

    // Experience
    "experience.tecInv.title": "Judicial Investigation Technician",
    "experience.tecInv.desc": "Graduate of Colegio la Presentación - Nariño",
    "experience.quimica.title": "Chemistry - 2 Semesters",
    "experience.quimica.desc": "University of Nariño",
    "experience.diseno.title": "Graphic Design",
    "experience.diseno.desc": "Technical training in Adobe and Figma",
  },
};


