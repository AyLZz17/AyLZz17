export type Language = "es" | "en"

interface ProfileFact {
  value: string
  label: string
}

interface ProjectTranslation {
  category: string
  description: string
  tags: string[]
}

interface FocusStep {
  title: string
  description: string
}

interface CertificateTranslation {
  issuer: string
  type: string
}

interface PortfolioTranslations {
  metadata: {
    title: string

    description: string
  }

  brandHome: string

  switchLanguage: string

  navigation: {
    label: string

    profile: string

    projects: string

    stack: string

    focus: string

    certificates: string

    contact: string

    talk: string
  }

  hero: {
    eyebrow: string
    greeting: string

    summary: string

    viewProjects: string

    talk: string

    identityLabel: string

    avatarAlt: string

    data: string

    footerLeft: string

    footerLink: string

    footerRight: string
  }

  profile: {
    title: string

    subtitle: string

    photoAlt: string

    photoCaption: string

    lead: string

    paragraphs: [string, string, string]

    githubLink: string

    facts: ProfileFact[]
  }

  projects: {
    title: string

    subtitle: string

    intro: string

    label: string

    code: string

    more: string

    items: ProjectTranslation[]
  }

  stack: {
    title: string

    subtitle: string

    intro: string

    categories: [string, string, string]
  }

  focus: {
    title: string

    subtitle: string

    steps: FocusStep[]

    learning: string

    learningTitle: string

    learningDescription: string
  }

  github: {
    title: string

    subtitle: string

    description: string

    visit: string

    statsAlt: string
  }

  certificates: {
    title: string

    subtitle: string

    intro: string

    items: CertificateTranslation[]

    badgeAlt: string

    label: string

    view: string
  }

  contact: {
    eyebrow: string

    title: [string, string]

    description: string

    email: string

    whatsapp: string

    whatsappMessage: string

    sendMessage: string

    socials: string
  }

  social: {
    handles: [string, string, string, string]

    socials: string
  }

  footer: {
    copyright: string

    backToTop: string
  }
}

export const translations: Record<Language, PortfolioTranslations> = {
  es: {
    metadata: {
      title: "Daniel Ayala (AYLZZ) | Desarrollador de software",

      description:
        "Portafolio de Daniel Ayala, AYLZZ. Especializado en desarrollo backend, APIs, bases de datos y automatización; conocimientos básicos de frontend.",
    },

    brandHome: "Daniel Ayala, inicio",

    switchLanguage: "Cambiar a inglés",

    navigation: {
      label: "Navegación principal",

      profile: "Perfil",

      projects: "Proyectos",

      stack: "Stack",

      focus: "Enfoque",

      certificates: "Certificados",

      contact: "Contacto",

      talk: "Hablemos",
    },

    hero: {
      eyebrow: "DESARROLLADOR DE SOFTWARE",
      greeting: "Hola, soy",

      summary:
        "Desarrollador de software enfocado en crear soluciones web y APIs claras, escalables y mantenibles. Trabajo con desarrollo Backend y MVPs Frontend, bases de datos y automatización, y sigo aprendiendo sobre cloud, machine learning e inteligencia artificial.",

      viewProjects: "Ver proyectos",

      talk: "Hablemos",

      identityLabel: "Perfil y redes sociales",

      avatarAlt: "Foto de perfil de GitHub de AYLZZ",

      data: "DATOS",

      footerLeft: "DESARROLLO FULL-STACK",

      footerLink: "CONOCE MÁS SOBRE MÍ",

      footerRight: "APRENDIENDO Y CONSTRUYENDO",
    },

    profile: {
      title: "Un poco sobre mí",

      subtitle: "Perfil",

      photoAlt: "Daniel Ayala en retrato",

      photoCaption: "DESARROLLADOR DE SOFTWARE",

      lead: "Convierto necesidades reales en soluciones digitales claras, escalables y mantenibles.",

      paragraphs: [
        "Como desarrollador de software, estoy enfocado en transformar necesidades reales de negocio en soluciones digitales claras, funcionales y altamente escalables. Mi trabajo combina la ingeniería de software aplicada al backend, la construcción de APIs robustas y el despliegue en la nube, garantizando productos estables que aportan valor tangible desde el primer día.",

        "Me especializo en crear el backend para aplicaciones web full-stack: desde la arquitectura de bases de datos y la integración de servicios hasta MVPs con interfaces ágiles e intuitivas. Abordo cada proyecto con buenas prácticas, automatización, seguridad y rendimiento. Si buscas llevar una idea al mundo digital, estructurar una plataforma para tu negocio o potenciar tus servicios web, construyamos algo juntos.",

        "Actualmente sigo aprendiendo sobre machine learning, AWS y herramientas de inteligencia artificial aplicadas al desarrollo.",
      ],

      githubLink: "Explorar mi perfil de GitHub",

      facts: [
        { value: "Backend", label: "Especialidad" },

        { value: "Colombia", label: "Ubicación" },

        { value: "AYLZZ", label: "Mi nickname" },
      ],
    },

    projects: {
      title: "Del código a lo concreto",

      subtitle: "Proyectos en desarrollo continuo",

      intro:
        "Dos proyectos en evolución constante, con una misma intención: construir soluciones útiles.",

      label: "PROYECTO",

      code: "Código",

      more: "MÁS PROYECTOS EN GITHUB",

      items: [
        {
          category: "Datos · Machine learning",

          description:
            "Análisis de datos históricos de Monero y experimentación con modelos para explorar tendencias y generar predicciones.",

          tags: ["Python", "Análisis de datos", "Predicción"],
        },

        {
          category: "Desarrollo web · E-commerce",

          description:
            "Experiencia web para una marca de repostería, creada para presentar sus productos y facilitar el contacto con sus clientes.",

          tags: ["Desarrollo web", "Diseño responsive", "Tienda"],
        },
      ],
    },

    stack: {
      title: "Las piezas con las que construyo",

      subtitle: "Stack & herramientas",

      intro:
        "Un ecosistema para conectar interfaces, lógica de negocio, datos e infraestructura.",

      categories: [
        "Lenguajes",
        "Desarrollo web",
        "Datos, cloud y herramientas",
      ],
    },

    focus: {
      title: "Construir. Entender. Evolucionar.",

      subtitle: "Enfoque",

      steps: [
        {
          title: "Entender antes de construir.",

          description:
            "Partir de necesidades reales y conectar cada decisión técnica con el valor que puede aportar al negocio.",
        },

        {
          title: "Cuidar lo que no se ve.",

          description:
            "Arquitectura clara, control de versiones y documentación para crear soluciones escalables y mantenibles.",
        },
      ],

      learning: "APRENDIZAJE CONTINUO",

      learningTitle: "Machine learning, AWS e inteligencia artificial.",

      learningDescription:
        "Continúo fortaleciendo mis conocimientos y explorando cómo aplicar estas herramientas al desarrollo de soluciones digitales.",
    },

    github: {
      title: "Más sobre mi trabajo",

      subtitle: "GitHub",

      description:
        "Siempre aprendiendo, construyendo y mejorando soluciones digitales.",

      visit: "Visitar mi GitHub",

      statsAlt: "Estadísticas públicas de GitHub de AyLZz17",
    },

    certificates: {
      title: "Formación y certificados",

      subtitle: "Certificaciones",

      intro:
        "Insignias y documentos de formación que respaldan mi aprendizaje continuo.",

      items: [
        { issuer: "AWS Academy", type: "Insignia de formación" },

        {
          issuer: "Certificado de asistencia · Daniel Alejandro Ayala Porras",

          type: "Curso de desarrollo con inteligencia artificial",
        },
      ],

      badgeAlt: "Insignia AWS Academy Cloud Foundations",

      label: "CERTIFICADO",

      view: "Ver certificado",
    },

    contact: {
      eyebrow: "CONTACTO",

      title: ["¿Creamos algo", "bueno juntos?"],

      description:
        "Cuéntame sobre tu idea o proyecto. Será un gusto conversar contigo.",

      email: "ESCRÍBEME POR CORREO",

      whatsapp: "HABLEMOS POR WHATSAPP",

      whatsappMessage: "Hola Daniel, vi tu portafolio y me gustaría conversar.",

      sendMessage: "Enviar un mensaje",

      socials: "Redes sociales",
    },

    social: {
      handles: [
        "@d.aylzz__",
        "Enviar un mensaje",
        "Daniel Ayala",
        "Enlace próximamente",
      ],

      socials: "Redes sociales",
    },

    footer: {
      copyright: "TODOS LOS DERECHOS RESERVADOS.",

      backToTop: "VOLVER ARRIBA",
    },
  },

  en: {
    metadata: {
      title: "Daniel Ayala (AYLZZ) | Software Developer",

      description:
        "Portfolio of Daniel Ayala, AYLZZ. Focused on backend development, APIs, databases, and automation, with foundational frontend skills.",
    },

    brandHome: "Daniel Ayala, home",

    switchLanguage: "Switch to Spanish",

    navigation: {
      label: "Main navigation",

      profile: "About",

      projects: "Projects",

      stack: "Tech stack",

      focus: "Approach",

      certificates: "Certificates",

      contact: "Contact",

      talk: "Let's talk",
    },

    hero: {
      eyebrow: "SOFTWARE DEVELOPER",
      greeting: "Hi, I'm",

      summary:
        "Software developer focused on building clear, scalable, and maintainable web solutions and APIs. I work on backend development, frontend MVPs, databases, and automation, while continuing to learn about cloud, machine learning, and artificial intelligence.",

      viewProjects: "View projects",

      talk: "Let's talk",

      identityLabel: "Profile and social media",

      avatarAlt: "AYLZZ's GitHub profile picture",

      data: "DATA",

      footerLeft: "FULL-STACK DEVELOPMENT",

      footerLink: "LEARN MORE ABOUT ME",

      footerRight: "LEARNING AND BUILDING",
    },

    profile: {
      title: "A little about me",

      subtitle: "Profile",

      photoAlt: "Portrait of Daniel Ayala",

      photoCaption: "SOFTWARE DEVELOPER",

      lead: "I turn real needs into clear, scalable, and maintainable digital solutions.",

      paragraphs: [
        "As a software developer, I focus on turning real business needs into clear, functional, and highly scalable digital solutions. My work combines backend software engineering, robust API development, and cloud deployment to deliver stable products that create tangible value from day one.",

        "I specialize in building the backend for full-stack web applications, from database architecture and service integration to MVPs with agile, intuitive interfaces. I approach every project with best practices, automation, security, and performance in mind. If you want to bring an idea online, structure a platform for your business, or enhance your web services, let's build something together.",

        "I'm currently continuing to learn about machine learning, AWS, and AI tools applied to software development.",
      ],

      githubLink: "Explore my GitHub profile",

      facts: [
        { value: "Backend", label: "Specialty" },

        { value: "Colombia", label: "Location" },

        { value: "AYLZZ", label: "Nickname" },
      ],
    },

    projects: {
      title: "From code to creation",

      subtitle: "Projects in continuous development",

      intro:
        "Two constantly evolving projects with one shared goal: building useful solutions.",

      label: "PROJECT",

      code: "Code",

      more: "MORE PROJECTS ON GITHUB",

      items: [
        {
          category: "Data · Machine learning",

          description:
            "Analysis of historical Monero data and experimentation with models to explore trends and generate predictions.",

          tags: ["Python", "Data analysis", "Forecasting"],
        },

        {
          category: "Web development · E-commerce",

          description:
            "A web experience for a bakery brand, created to showcase its products and make it easy for customers to get in touch.",

          tags: ["Web development", "Responsive design", "Online store"],
        },
      ],
    },

    stack: {
      title: "The building blocks I use",

      subtitle: "Tech stack & tools",

      intro:
        "An ecosystem connecting interfaces, business logic, data, and infrastructure.",

      categories: ["Languages", "Web development", "Data, cloud & tools"],
    },

    focus: {
      title: "Build. Understand. Evolve.",

      subtitle: "Approach",

      steps: [
        {
          title: "Understand before building.",

          description:
            "Start with real needs and connect every technical decision to the value it can bring to the business.",
        },

        {
          title: "Care about what isn't visible.",

          description:
            "Clear architecture, version control, and documentation help create scalable, maintainable solutions.",
        },
      ],

      learning: "CONTINUOUS LEARNING",

      learningTitle: "Machine learning, AWS, and artificial intelligence.",

      learningDescription:
        "I continue to strengthen my knowledge and explore how these tools can be applied to building digital solutions.",
    },

    github: {
      title: "More about my work",

      subtitle: "GitHub",

      description:
        "Always learning, building, and improving digital solutions.",

      visit: "Visit my GitHub",

      statsAlt: "Public GitHub statistics for AyLZz17",
    },

    certificates: {
      title: "Education & certificates",

      subtitle: "Certifications",

      intro:
        "Badges and training documents that support my continued learning.",

      items: [
        { issuer: "AWS Academy", type: "Training badge" },

        {
          issuer: "Certificate of attendance · Daniel Alejandro Ayala Porras",

          type: "Artificial intelligence development course",
        },
      ],

      badgeAlt: "AWS Academy Cloud Foundations badge",

      label: "CERTIFICATE",

      view: "View certificate",
    },

    contact: {
      eyebrow: "CONTACT",

      title: ["Shall we build", "something great?"],

      description:
        "Tell me about your idea or project. I'd be glad to talk with you.",

      email: "EMAIL ME",

      whatsapp: "LET'S TALK ON WHATSAPP",

      whatsappMessage:
        "Hi Daniel, I saw your portfolio and would like to talk.",

      sendMessage: "Send a message",

      socials: "Social media",
    },

    social: {
      handles: [
        "@d.aylzz__",
        "Send a message",
        "Daniel Ayala",
        "Link coming soon",
      ],

      socials: "Social media",
    },

    footer: {
      copyright: "ALL RIGHTS RESERVED.",

      backToTop: "BACK TO TOP",
    },
  },
}
