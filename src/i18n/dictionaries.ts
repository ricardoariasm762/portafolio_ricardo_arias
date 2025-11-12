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

    // About paragraphs
    "about.paragraph1":
      "Desde pequeño descubrí en el diseño gráfico una forma de dar vida a las ideas, y con el tiempo encontré en la Ingeniería de Software la posibilidad de transformar esa creatividad en soluciones digitales reales.",
    "about.paragraph2":
      "Me gradué del colegio La Rosa en 2017, estudié un técnico en Investigación Judicial y dos semestres de Química en la Universidad de Nariño, pero mi verdadera pasión apareció frente a la pantalla: programar, diseñar e imaginar interfaces que conecten con las personas.",
    "about.paragraph3":
      "Hoy curso el quinto semestre de Ingeniería de Software, donde combino mi experiencia en diseño con mis conocimientos en programación. He trabajado con lenguajes como Java, Python, JavaScript, TypeScript y C#, junto con bases de datos como MySQL y MongoDB. Además, mi experiencia en Gráficas AM Pasto me ha dado un enfoque práctico y creativo para comunicar visualmente cada proyecto.",
    "about.paragraph4":
      "Me considero curioso, autodidacta y apasionado por aprender, porque creo que la tecnología es más poderosa cuando logra resolver problemas reales y acercarse a las personas que la usan.",

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
    "testimonials.one.text": "Ricardo se destaca por su disciplina y compromiso con cada proyecto. Tiene la capacidad de integrar la lógica de la programación con la creatividad del diseño, lo que le permite presentar soluciones completas y bien pensadas.",
    "testimonials.two.text": "Trabajar con Ricardo en proyectos universitarios ha sido una experiencia enriquecedora. Su habilidad para manejar distintos lenguajes de programación y su disposición para colaborar hacen que el trabajo en equipo sea más fluido. Siempre aporta ideas innovadoras y busca mejorar la experiencia del usuario en cada interfaz.",
    "testimonials.three.text": "Ricardo es responsable, creativo y domina el diseño digital y el desarrollo de software en equipo.",

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

    // About paragraphs
    "about.paragraph1":
      "Since I was young, I found in graphic design a way to bring ideas to life, and over time I found in Software Engineering the possibility of transforming that creativity into real digital solutions.",
    "about.paragraph2":
      "I graduated from La Rosa school in 2017, studied a technical degree in Judicial Investigation and two semesters of Chemistry at the University of Nariño, but my true passion appeared in front of the screen: programming, designing and imagining interfaces that connect with people.",
    "about.paragraph3":
      "Today I am in my fifth semester of Software Engineering, where I combine my design experience with my programming knowledge. I have worked with languages such as Java, Python, JavaScript, TypeScript and C#, along with databases like MySQL and MongoDB. Additionally, my experience at Gráficas AM Pasto has given me a practical and creative approach to visually communicate each project.",
    "about.paragraph4":
      "I consider myself curious, self-taught and passionate about learning, because I believe technology is more powerful when it manages to solve real problems and get closer to the people who use it.",

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


