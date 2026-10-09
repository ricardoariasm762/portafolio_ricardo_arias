export type Locale = "es" | "en";

type Dictionary = Record<string, string>;

export const dictionaries: Record<Locale, Dictionary> = {
  es: {
    // Nav
    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.skills": "Habilidades",
    "nav.projects": "Proyectos",
    "nav.experience": "Trayectoria",
    "nav.testimonials": "Testimonios",
    "nav.contact": "Contacto",
    "nav.cta": "Hablemos",
    "nav.roleBadge": "INGENIERO DE SOFTWARE",

    // Hero
    "hero.badge": "ESTUDIANTE DE INGENIERÍA DE SOFTWARE",
    "hero.greeting1": "¡HOLA! SOY",
    "hero.greeting2": "RICARDO",
    "hero.description":
      "Estudiante de Ingeniería de Software apasionado por la convergencia entre arquitecturas robustas y el diseño de interfaces limpias, modernas e intuitivas.",
    "hero.tag1": "Ingeniería de Software",
    "hero.tag2": "Desarrollo Web",
    "hero.tag3": "Diseño Gráfico",
    "hero.tag4": "UI/UX",
    "hero.downloadCv": "Descargar CV",
    "hero.contactMe": "Contactarme",
    "hero.availability": "DISPONIBLE PARA PROYECTOS",
    "hero.education": "7mo Semestre • Universidad Cooperativa de Colombia",
    "hero.radarStatus": "Disponible para proyectos",
    "hero.viewPhoto": "Ver foto real",
    "hero.viewAvatar": "Ver avatar tech",

    // About
    "about.tag": "01 // SOBRE MI PERFIL",
    "about.title": "Sobre mí",
    "about.paragraph1":
      "Desde pequeño encontré en el diseño gráfico una forma de dar vida a las ideas, y con el tiempo descubrí en la Ingeniería de Software la posibilidad de transformar esa creatividad en soluciones digitales reales y escalables.",
    "about.paragraph2":
      "Hoy curso el séptimo semestre de Ingeniería de Software en la Universidad Cooperativa de Colombia, combinando la lógica de programación con sensibilidad estética para crear interfaces intuitivas, código limpio y arquitecturas sólidas. He trabajado con tecnologías como TypeScript, Next.js, React, Angular, Java y Python.",
    "about.paragraph3":
      "Me considero curioso, autodidacta y apasionado por resolver problemas reales a través de la tecnología, asegurando que cada producto digital sea tanto técnicamente eficiente como visualmente impactante.",
    "about.metric1.val": "3+ Años",
    "about.metric1.lbl": "Código & Desarrollo",
    "about.metric2.val": "+15",
    "about.metric2.lbl": "Interfaces Prototipadas",
    "about.metric3.val": "100%",
    "about.metric3.lbl": "Pasión Creativa",
    "about.workbench.title": "developer.config.ts",
    "about.workbench.cleanCode": "Clean Code",
    "about.workbench.responsive": "Responsive First",
    "about.workbench.designSystems": "Design Systems",
    "about.workbench.status": "Sistemas operativos ● Listo para desplegar",

    // Skills
    "skills.tag": "02 // STACK TECNOLÓGICO",
    "skills.title": "Habilidades Técnicas.",
    "skills.subtitle":
      "Stack tecnológico y herramientas de desarrollo y diseño aplicadas en entornos académicos y profesionales.",
    "skills.filterAll": "Todos",
    "skills.filterFrontend": "Frontend",
    "skills.filterBackend": "Backend",
    "skills.filterTools": "Diseño & Herramientas",
    "skills.levelAdvanced": "Avanzado",
    "skills.levelIntermediate": "Intermedio",
    "skills.levelProficient": "Competente",
    "skills.descHtml": "Estructuración semántica, accesibilidad web (a11y) y estándares SEO modernos.",
    "skills.descCss": "Sistemas de diseño adaptables, animaciones, Flexbox, CSS Grid y Tailwind CSS.",
    "skills.descJs": "ESNext, programación asíncrona, promesas y manipulación dinámica del DOM.",
    "skills.descTs": "Tipado estático robusto, interfaces, genéricos y programación moderna orientada a tipos.",
    "skills.descReact": "Componentes funcionales, Server Components, Custom Hooks y el ecosistema Next.js.",
    "skills.descAngular": "Arquitectura modular SPA, TypeScript, RxJS, inyección de dependencias y servicios.",
    "skills.descNode": "APIs RESTful escalables, Express, microservicios y persistencia de datos.",
    "skills.descPython": "Lógica algorítmica, estructuras de datos avanzadas, scripting y backend.",
    "skills.descJava": "Programación Orientada a Objetos, Spring Boot, JPA/Hibernate y patrones empresariales.",
    "skills.descCsharp": "Ecosistema .NET, desarrollo de aplicaciones empresariales y lógica estructurada.",
    "skills.descFigma": "Diseño UI/UX de alta fidelidad, prototipado interactivo, wireframes y design systems.",

    // Projects
    "projects.tag": "03 // PROYECTOS DESTACADOS",
    "projects.title": "Proyectos Destacados.",
    "projects.subtitle": "Showcase interactivo de ingeniería de software, arquitectura de sistemas y diseño visual.",
    "projects.tabShowcase": "Casos de Estudio Principales",
    "projects.tabGithub": "Repositorios de GitHub en Vivo",
    "projects.viewDemo": "Ver Demo / Caso",
    "projects.viewGithub": "Código en GitHub",
    "projects.p1.num": "01 // 04",
    "projects.p1.category": "FULLSTACK / ENTERPRISE",
    "projects.p1.title": "Sistema de Mantenimiento Vehicular",
    "projects.p1.desc":
      "Plataforma integral para la gestión y trazabilidad de flotas vehiculares, agendamiento de revisiones preventivas, telemetría de fallas mecánicas y control de stock de repuestos críticos.",
    "projects.p1.metric1.val": "240+",
    "projects.p1.metric1.lbl": "Vehículos Activos",
    "projects.p1.metric2.val": "80",
    "projects.p1.metric2.lbl": "Reportes / Mes",
    "projects.p1.metric3.val": "99.4%",
    "projects.p1.metric3.lbl": "Eficiencia Operativa",

    "projects.p2.num": "02 // 04",
    "projects.p2.category": "BACKEND & DATABASE",
    "projects.p2.title": "Sistema de Inventario & Telemetría",
    "projects.p2.desc":
      "Arquitectura distribuida para el control y auditoría de inventarios en tiempo real, alertas automáticas de reabastecimiento, reportería analítica y autenticación con control de acceso.",
    "projects.p2.metric1.val": "+1.2k",
    "projects.p2.metric1.lbl": "Ítems Registrados",
    "projects.p2.metric2.val": "<150ms",
    "projects.p2.metric2.lbl": "Latencia de Consulta",
    "projects.p2.metric3.val": "100%",
    "projects.p2.metric3.lbl": "Trazabilidad CRUD",

    "projects.p3.num": "03 // 04",
    "projects.p3.category": "FRONTEND & CREATIVE UX",
    "projects.p3.title": "Portafolio Creativo Personal",
    "projects.p3.desc":
      "Sitio web personal desarrollado con Next.js 15, Tailwind CSS y Framer Motion. Integra sistema de internacionalización bilingüe, modo oscuro cinético y diseño responsivo estricto.",
    "projects.p3.metric1.val": "100/100",
    "projects.p3.metric1.lbl": "Lighthouse Score",
    "projects.p3.metric2.val": "2 Idiomas",
    "projects.p3.metric2.lbl": "i18n Integrado",
    "projects.p3.metric3.val": "60 FPS",
    "projects.p3.metric3.lbl": "Animaciones Fluidas",

    "projects.p4.num": "04 // 04",
    "projects.p4.category": "INVESTIGACIÓN & DATOS",
    "projects.p4.title": "Plataforma Forense & Judicial",
    "projects.p4.desc":
      "Herramienta web para la sistematización y consulta de evidencias forenses, estructuración cronológica de expedientes y análisis de correlación de datos judiciales.",
    "projects.p4.metric1.val": "Forense",
    "projects.p4.metric1.lbl": "Enfoque Técnico",
    "projects.p4.metric2.val": "Seguro",
    "projects.p4.metric2.lbl": "Control de Acceso",
    "projects.p4.metric3.val": "Modular",
    "projects.p4.metric3.lbl": "Arquitectura",

    "projects.github.loading": "Cargando repositorios en vivo desde GitHub...",
    "projects.github.empty": "No se encontraron repositorios públicos.",
    "projects.github.updated": "Actualizado:",
    "projects.github.search": "Buscar repositorios...",
    "projects.github.viewRepo": "Ver en GitHub",
    "projects.github.demo": "Demo en Vivo",

    // Timeline
    "timeline.tag": "04 // TRAYECTORIA Y FORMACIÓN",
    "timeline.title": "Trayectoria y Formación.",
    "timeline.subtitle": "Evolución académica, formación complementaria y experiencia práctica en ingeniería.",
    "timeline.item1.year": "2023 - Presente",
    "timeline.item1.title": "Ingeniería de Software",
    "timeline.item1.place": "7mo Semestre • Universidad Cooperativa de Colombia",
    "timeline.item1.desc":
      "Formación especializada en ingeniería y arquitectura de software, bases de datos relacionales y NoSQL, desarrollo web fullstack, diseño centrado en el usuario y metodologías ágiles de trabajo en equipo.",
    "timeline.item1.tags": "Arquitectura Software • Diseño Interfaces • Desarrollo Web • Bases de Datos",

    "timeline.item2.year": "2024",
    "timeline.item2.title": "Diseño Gráfico & Prototipado UI",
    "timeline.item2.place": "Gráficas AM Pasto / Formación Especializada",
    "timeline.item2.desc":
      "Experiencia práctica en diseño visual, maquetación publicitaria, identidad corporativa y prototipado interactivo con Figma y suites de diseño vectoriales.",
    "timeline.item2.tags": "Figma • Corel Draw • Adobe Suite • Identidad Visual",

    "timeline.item3.year": "2022 - 2023",
    "timeline.item3.title": "Estudios Universitarios en Química",
    "timeline.item3.place": "2 Semestres • Universidad de Nariño",
    "timeline.item3.desc":
      "Cursados dos semestres del programa de Química en la Universidad de Nariño. Desarrollo de rigurosidad metodológica, análisis deductivo, experimentación y pensamiento científico aplicados a la resolución estructurada de problemas.",
    "timeline.item3.tags": "Pensamiento Científico • Rigor Metodológico • Análisis Cuantitativo • Experimentación",

    "timeline.item4.year": "2018 - 2021",
    "timeline.item4.title": "Técnico en Investigación Judicial & Ciencias",
    "timeline.item4.place": "Instituto Técnico Colsup",
    "timeline.item4.desc":
      "Desarrollo de habilidades en pensamiento analítico, rigurosidad metodológica, recolección estructurada de datos y resolución de problemas complejos.",
    "timeline.item4.tags": "Pensamiento Analítico • Metodología • Resolución de Problemas",

    // Testimonials
    "testimonials.tag": "05 // RECOMENDACIONES",
    "testimonials.title": "Testimonios.",
    "testimonials.subtitle": "Lo que docentes, compañeros de equipo y colaboradores destacan sobre mi trabajo.",
    "testimonials.one.text":
      "Ricardo se destaca por su disciplina y compromiso con cada proyecto. Tiene la capacidad de integrar la lógica de la programación con la creatividad del diseño, lo que le permite presentar soluciones completas y bien pensadas.",
    "testimonials.one.author": "Andres Parra",
    "testimonials.one.role": "Docente / Tutor de Interfaces",
    "testimonials.one.city": "Pasto, Nariño",

    "testimonials.two.text":
      "Trabajar con Ricardo en proyectos universitarios ha sido una experiencia enriquecedora. Su habilidad para manejar distintos lenguajes y su disposición para colaborar hacen que el trabajo en equipo sea muy fluido. Siempre aporta ideas innovadoras.",
    "testimonials.two.author": "Cristian Gómez",
    "testimonials.two.role": "Compañero de Desarrollo Fullstack",
    "testimonials.two.city": "Pasto, Nariño",

    "testimonials.three.text":
      "Ricardo es responsable, sumamente creativo y domina tanto la parte visual como el desarrollo técnico en equipo. Su capacidad para traducir requerimientos complejos en interfaces limpias es sobresaliente.",
    "testimonials.three.author": "Nicolas Wagmim",
    "testimonials.three.role": "Colaborador de Diseño & Software",
    "testimonials.three.city": "Pasto, Nariño",

    // Contact
    "contact.tag": "06 // CONTACTO DIRECTO",
    "contact.title1": "¿Tienes un proyecto?",
    "contact.title2": "Hablemos.",
    "contact.subtitle":
      "Disponible para nuevos proyectos, colaboraciones interdisciplinarias y oportunidades laborales en desarrollo de software.",
    "contact.emailLabel": "Correo Electrónico",
    "contact.phoneLabel": "Teléfono / WhatsApp",
    "contact.githubLabel": "GitHub",
    "contact.linkedinLabel": "LinkedIn",
    "contact.locationLabel": "Ubicación",
    "contact.locationVal": "Pasto, Nariño, Colombia",
    "contact.copied": "¡Copiado al portapapeles!",
    "contact.copyAction": "Copiar",
    "contact.formTitle": "Envíame un mensaje",
    "contact.intentProject": "🚀 Nuevo Proyecto",
    "contact.intentCollab": "🤝 Colaboración",
    "contact.intentHire": "💼 Contratación",
    "contact.namePlaceholder": "Tu Nombre Completo",
    "contact.emailPlaceholder": "tu.correo@ejemplo.com",
    "contact.msgPlaceholder": "Cuéntame sobre tu proyecto o idea...",
    "contact.sendBtn": "Enviar Mensaje 🚀",
    "contact.sending": "Preparando...",
    "contact.successMsg": "¡Gracias! Tu mensaje ha sido registrado.",

    // Footer
    "footer.brand": "Ricardo Arias",
    "footer.role": "Estudiante de Ingeniería de Software",
    "footer.bio": "Apasionado por la innovación técnica, el diseño de interfaces modernas y el trabajo en equipo colaborativo.",
    "footer.copyright": "© 2026 Ricardo Arias. Todos los derechos reservados.",
    "footer.university": "Universidad Cooperativa de Colombia • Pasto, Colombia",
    "lang.es": "ES",
    "lang.en": "EN",
  },

  en: {
    // Nav
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.experience": "Timeline",
    "nav.testimonials": "Testimonials",
    "nav.contact": "Contact",
    "nav.cta": "Let's Talk",
    "nav.roleBadge": "SOFTWARE ENGINEER",

    // Hero
    "hero.badge": "SOFTWARE ENGINEERING STUDENT",
    "hero.greeting1": "HI! I AM",
    "hero.greeting2": "RICARDO",
    "hero.description":
      "Software Engineering student passionate about the intersection of robust architectures and clean, modern, intuitive user interfaces.",
    "hero.tag1": "Software Engineering",
    "hero.tag2": "Web Development",
    "hero.tag3": "Graphic Design",
    "hero.tag4": "UI/UX",
    "hero.downloadCv": "Download CV",
    "hero.contactMe": "Contact Me",
    "hero.availability": "AVAILABLE FOR PROJECTS",
    "hero.education": "7th Semester • Universidad Cooperativa de Colombia",
    "hero.radarStatus": "Available for projects",
    "hero.viewPhoto": "View real photo",
    "hero.viewAvatar": "View tech avatar",

    // About
    "about.tag": "01 // ABOUT MY PROFILE",
    "about.title": "About Me",
    "about.paragraph1":
      "Since I was young, I found in graphic design a way to bring ideas to life. Over time, I discovered in Software Engineering the power to turn that creative impulse into real, scalable digital solutions.",
    "about.paragraph2":
      "Today I am in my 7th semester of Software Engineering at Universidad Cooperativa de Colombia, merging programming logic with aesthetic sensibility to build intuitive interfaces, clean code, and solid architectures. I work with technologies like TypeScript, Next.js, React, Angular, Java, and Python.",
    "about.paragraph3":
      "I consider myself curious, self-taught, and passionate about solving real problems through technology, ensuring that every digital product is both technically sound and visually engaging.",
    "about.metric1.val": "3+ Years",
    "about.metric1.lbl": "Code & Development",
    "about.metric2.val": "+15",
    "about.metric2.lbl": "Prototyped Interfaces",
    "about.metric3.val": "100%",
    "about.metric3.lbl": "Creative Passion",
    "about.workbench.title": "developer.config.ts",
    "about.workbench.cleanCode": "Clean Code",
    "about.workbench.responsive": "Responsive First",
    "about.workbench.designSystems": "Design Systems",
    "about.workbench.status": "All systems operational ● Ready to deploy",

    // Skills
    "skills.tag": "02 // TECH STACK",
    "skills.title": "Technical Skills.",
    "skills.subtitle":
      "Technology stack and design tools applied across academic and professional environments.",
    "skills.filterAll": "All",
    "skills.filterFrontend": "Frontend",
    "skills.filterBackend": "Backend",
    "skills.filterTools": "Design & Tools",
    "skills.levelAdvanced": "Advanced",
    "skills.levelIntermediate": "Intermediate",
    "skills.levelProficient": "Proficient",
    "skills.descHtml": "Semantic markup, web accessibility (a11y), and modern SEO standards.",
    "skills.descCss": "Adaptive design systems, smooth animations, Flexbox, CSS Grid, and Tailwind CSS.",
    "skills.descJs": "ESNext, asynchronous programming, promises, and dynamic DOM manipulation.",
    "skills.descTs": "Robust static typing, interfaces, generics, and modern type-driven architecture.",
    "skills.descReact": "Functional components, Server Components, Custom Hooks, and Next.js ecosystem.",
    "skills.descAngular": "Modular SPA architecture, TypeScript, RxJS, dependency injection, and services.",
    "skills.descNode": "Scalable RESTful APIs, Express, microservices, and data persistence.",
    "skills.descPython": "Algorithmic logic, advanced data structures, automation scripting, and backend.",
    "skills.descJava": "Object-Oriented Programming, Spring Boot, JPA/Hibernate, and enterprise patterns.",
    "skills.descCsharp": ".NET ecosystem, enterprise software development, and structured business logic.",
    "skills.descFigma": "High-fidelity UI/UX design, interactive prototyping, wireframing, and design systems.",

    // Projects
    "projects.tag": "03 // FEATURED PROJECTS",
    "projects.title": "Featured Projects.",
    "projects.subtitle": "Interactive showcase of software engineering, system architecture, and visual design.",
    "projects.tabShowcase": "Core Case Studies",
    "projects.tabGithub": "Live GitHub Repositories",
    "projects.viewDemo": "View Demo / Case",
    "projects.viewGithub": "Code on GitHub",
    "projects.p1.num": "01 // 04",
    "projects.p1.category": "FULLSTACK / ENTERPRISE",
    "projects.p1.title": "Vehicle Fleet Maintenance System",
    "projects.p1.desc":
      "Comprehensive platform for vehicle fleet management, preventive maintenance scheduling, mechanical telemetry diagnosis, and critical spare parts inventory control.",
    "projects.p1.metric1.val": "240+",
    "projects.p1.metric1.lbl": "Active Vehicles",
    "projects.p1.metric2.val": "80",
    "projects.p1.metric2.lbl": "Reports / Month",
    "projects.p1.metric3.val": "99.4%",
    "projects.p1.metric3.lbl": "Operational Efficiency",

    "projects.p2.num": "02 // 04",
    "projects.p2.category": "BACKEND & DATABASE",
    "projects.p2.title": "Inventory & Telemetry System",
    "projects.p2.desc":
      "Distributed architecture for real-time inventory tracking and auditing, automated restock alerts, analytical reporting, and role-based access control.",
    "projects.p2.metric1.val": "+1.2k",
    "projects.p2.metric1.lbl": "Tracked Items",
    "projects.p2.metric2.val": "<150ms",
    "projects.p2.metric2.lbl": "Query Latency",
    "projects.p2.metric3.val": "100%",
    "projects.p2.metric3.lbl": "CRUD Traceability",

    "projects.p3.num": "03 // 04",
    "projects.p3.category": "FRONTEND & CREATIVE UX",
    "projects.p3.title": "Creative Personal Portfolio",
    "projects.p3.desc":
      "Personal portfolio platform engineered with Next.js 15, Tailwind CSS, and Framer Motion. Features bilingual internationalization, kinetic dark mode, and strict responsive design.",
    "projects.p3.metric1.val": "100/100",
    "projects.p3.metric1.lbl": "Lighthouse Score",
    "projects.p3.metric2.val": "2 Locales",
    "projects.p3.metric2.lbl": "Full i18n",
    "projects.p3.metric3.val": "60 FPS",
    "projects.p3.metric3.lbl": "Fluid Motion",

    "projects.p4.num": "04 // 04",
    "projects.p4.category": "INVESTIGATION & DATA",
    "projects.p4.title": "Forensic & Judicial Platform",
    "projects.p4.desc":
      "Web tool for forensic evidence indexing and retrieval, chronological case file structuring, and judicial data correlation analysis.",
    "projects.p4.metric1.val": "Forensic",
    "projects.p4.metric1.lbl": "Technical Focus",
    "projects.p4.metric2.val": "Secure",
    "projects.p4.metric2.lbl": "Access Control",
    "projects.p4.metric3.val": "Modular",
    "projects.p4.metric3.lbl": "Architecture",

    "projects.github.loading": "Fetching live repositories from GitHub...",
    "projects.github.empty": "No public repositories found.",
    "projects.github.updated": "Updated:",
    "projects.github.search": "Search repositories...",
    "projects.github.viewRepo": "View on GitHub",
    "projects.github.demo": "Live Demo",

    // Timeline
    "timeline.tag": "04 // CAREER & EDUCATION",
    "timeline.title": "Trajectory & Education.",
    "timeline.subtitle": "Academic progression, specialized technical training, and hands-on engineering experience.",
    "timeline.item1.year": "2023 - Present",
    "timeline.item1.title": "Software Engineering",
    "timeline.item1.place": "7th Semester • Universidad Cooperativa de Colombia",
    "timeline.item1.desc":
      "Specialized training in software engineering and architecture, relational & NoSQL databases, fullstack web development, microservices, human-centered UI design, and agile teamwork methodologies.",
    "timeline.item1.tags": "Software Architecture • UI/UX Design • Web Development • Databases",

    "timeline.item2.year": "2024",
    "timeline.item2.title": "Graphic Design & UI Prototyping",
    "timeline.item2.place": "Gráficas AM Pasto / Specialized Training",
    "timeline.item2.desc":
      "Hands-on experience in visual design, marketing layouts, brand identity, and interactive prototyping using Figma and vector design software.",
    "timeline.item2.tags": "Figma • Corel Draw • Adobe Suite • Visual Identity",

    "timeline.item3.year": "2022 - 2023",
    "timeline.item3.title": "Chemistry Studies",
    "timeline.item3.place": "2 Semesters • Universidad de Nariño",
    "timeline.item3.desc":
      "Completed two semesters of the Chemistry program at Universidad de Nariño. Cultivated scientific rigor, deductive analysis, experimentation, and systematic problem-solving methods.",
    "timeline.item3.tags": "Scientific Thinking • Methodological Rigor • Quantitative Analysis • Experimentation",

    "timeline.item4.year": "2018 - 2021",
    "timeline.item4.title": "Judicial Investigation & Sciences Technician",
    "timeline.item4.place": "Colsup Technical Institute",
    "timeline.item4.desc":
      "Cultivated structured analytical thinking, rigorous methodology, systematic data gathering, and complex problem-solving abilities.",
    "timeline.item4.tags": "Analytical Thinking • Methodology • Problem Solving",

    // Testimonials
    "testimonials.tag": "05 // RECOMMENDATIONS",
    "testimonials.title": "Testimonials.",
    "testimonials.subtitle": "What professors, team members, and collaborators highlight about my work.",
    "testimonials.one.text":
      "Ricardo stands out for his discipline and commitment to every project. He possesses the ability to seamlessly bridge programming logic with design creativity, delivering comprehensive, well-thought-out solutions.",
    "testimonials.one.author": "Andres Parra",
    "testimonials.one.role": "Professor / Interfaces Tutor",
    "testimonials.one.city": "Pasto, Nariño",

    "testimonials.two.text":
      "Working with Ricardo on university projects has been an enriching experience. His proficiency across programming languages and willingness to collaborate makes teamwork very fluid. He consistently brings fresh ideas.",
    "testimonials.two.author": "Cristian Gómez",
    "testimonials.two.role": "Fullstack Engineering Peer",
    "testimonials.two.city": "Pasto, Nariño",

    "testimonials.three.text":
      "Ricardo is dependable, exceptionally creative, and excels both in visual design and collaborative software engineering. His ability to translate complex specifications into clean interfaces is outstanding.",
    "testimonials.three.author": "Nicolas Wagmim",
    "testimonials.three.role": "Design & Software Collaborator",
    "testimonials.three.city": "Pasto, Nariño",

    // Contact
    "contact.tag": "06 // DIRECT CONTACT",
    "contact.title1": "Have a project in mind?",
    "contact.title2": "Let's Talk.",
    "contact.subtitle":
      "Available for new projects, interdisciplinary collaborations, and software development engineering opportunities.",
    "contact.emailLabel": "Email Address",
    "contact.phoneLabel": "Phone / WhatsApp",
    "contact.githubLabel": "GitHub",
    "contact.linkedinLabel": "LinkedIn",
    "contact.locationLabel": "Location",
    "contact.locationVal": "Pasto, Nariño, Colombia",
    "contact.copied": "Copied to clipboard!",
    "contact.copyAction": "Copy",
    "contact.formTitle": "Send me a message",
    "contact.intentProject": "🚀 New Project",
    "contact.intentCollab": "🤝 Collaboration",
    "contact.intentHire": "💼 Hiring",
    "contact.namePlaceholder": "Your Full Name",
    "contact.emailPlaceholder": "your.email@example.com",
    "contact.msgPlaceholder": "Tell me about your project or idea...",
    "contact.sendBtn": "Send Message 🚀",
    "contact.sending": "Preparing...",
    "contact.successMsg": "Thank you! Your message has been recorded.",

    // Footer
    "footer.brand": "Ricardo Arias",
    "footer.role": "Software Engineering Student",
    "footer.bio": "Passionate about technical innovation, modern interface design, and collaborative teamwork.",
    "footer.copyright": "© 2026 Ricardo Arias. All rights reserved.",
    "footer.university": "Universidad Cooperativa de Colombia • Pasto, Colombia",
    "lang.es": "ES",
    "lang.en": "EN",
  },
};
