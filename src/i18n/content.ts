/**
 * Localized copy for the whole site (PT / EN / ES).
 * Language-neutral data (images, URLs, tech stacks, certificate metadata)
 * lives in `src/data/*`. This file holds only what changes by language.
 */

export type Lang = "pt" | "en" | "es";

export const LANGS: Lang[] = ["pt", "en", "es"];

export interface ChapterCopy {
  kicker: string;
  title: string;
  body: string[];
  tags: string[];
}

export interface ProjectCopy {
  kicker: string;
  description: string;
  tags: string[];
}

export interface Stat {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export interface Evidence {
  title: string;
  description: string;
}

export interface Pillar {
  title: string;
  description: string;
}

export interface Dictionary {
  htmlLang: string;
  metaTitle: string;

  nav: {
    inicio: string;
    trajetoria: string;
    impacto: string;
    projetos: string;
    skills: string;
    certificados: string;
    contato: string;
  };
  langLabel: string;
  menuLabel: string;

  hero: {
    eyebrow: string;
    role: string;
    headlineLead: string;
    headlineAccent: string;
    subheadline: string;
    badges: string[];
    ctaJourney: string;
    ctaProjects: string;
    ctaCV: string;
    ctaContact: string;
    availability: string;
  };

  story: {
    eyebrow: string;
    title: string;
    intro: string;
    chapters: Record<string, ChapterCopy>;
  };

  coin: {
    eyebrow: string;
  };

  impact: {
    eyebrow: string;
    title: string;
    intro: string;
    stats: Stat[];
    evidence: Evidence[];
  };

  projects: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Record<string, ProjectCopy>;
    liveLabel: string;
    codeLabel: string;
    deckLabel: string;
    soonLabel: string;
  };

  skills: {
    eyebrow: string;
    title: string;
    intro: string;
    groups: Record<string, string>;
  };

  certificates: {
    eyebrow: string;
    title: string;
    intro: string;
    categories: Record<string, string>;
    viewLabel: string;
    showMore: string;
    showLess: string;
  };

  mindset: {
    eyebrow: string;
    title: string;
    body: string;
    pillars: Pillar[];
  };

  contact: {
    eyebrow: string;
    title: string;
    body: string;
    phoneLabel: string;
    emailLabel: string;
    linkedinLabel: string;
    githubLabel: string;
    ctaLinkedin: string;
    ctaGithub: string;
    ctaEmail: string;
    ctaCV: string;
    backToTop: string;
  };

  footer: {
    tagline: string;
    rights: string;
  };
}

/* ===================================================================== */
/*  PORTUGUÊS                                                            */
/* ===================================================================== */
const pt: Dictionary = {
  htmlLang: "pt-BR",
  metaTitle: "Davi Yoshio | Dados, IA & Negócios",

  nav: {
    inicio: "Início",
    trajetoria: "Trajetória",
    impacto: "Impacto",
    projetos: "Projetos",
    skills: "Skills",
    certificados: "Certificados",
    contato: "Contato",
  },
  langLabel: "Idioma",
  menuLabel: "Menu",

  hero: {
    eyebrow: "Data & AI · Business & Technology",
    role: "Estagiário de Data & AI no PagBank · Ciência de Dados e IA no Ibmec",
    headlineLead: "Conecto dados, IA e visão de negócio para transformar",
    headlineAccent: "execução em impacto real.",
    subheadline:
      "Minha trajetória começou na operação e evoluiu para tecnologia, dados e inteligência artificial, unindo execução prática, pensamento analítico e construção de soluções.",
    badges: [
      "Data & AI",
      "Business Strategy",
      "E-commerce",
      "Machine Learning",
      "BI & Analytics",
      "Automation",
    ],
    ctaJourney: "Ver trajetória",
    ctaProjects: "Ver projetos",
    ctaCV: "Baixar CV",
    ctaContact: "Entrar em contato",
    availability: "Disponível para projetos",
  },

  story: {
    eyebrow: "A trajetória",
    title: "Uma trajetória construída entre operação, dados e IA.",
    intro:
      "Cada capítulo é uma camada: do contato direto com o mercado à construção de soluções de dados em escala real.",
    chapters: {
      origem: {
        kicker: "Capítulo 01",
        title: "Antes da tecnologia, veio a execução.",
        body: [
          "Comecei aos 15 anos nas vendas. Empreendi com produtos high-end e escalei para a importação e venda de travesseiros no meu primeiro e-commerce.",
          "Foi nesse período que aprendi, na prática, a dinâmica de colocar a mão na massa e gerar receita desde a base.",
        ],
        tags: ["Vendas", "Empreendedorismo", "E-commerce", "Mercado"],
      },
      operacao: {
        kicker: "Capítulo 02",
        title: "Entendendo como uma empresa funciona por dentro.",
        body: [
          "Atuei como Analista no escritório administrativo da Yamá Cosméticos, mergulhando nas rotinas de faturamento, financeiro, logística e sistemas.",
          "Mais do que uma área, foi uma decisão consciente: entender as engrenagens de uma empresa e como diferentes áreas se conectam para gerar resultado.",
        ],
        tags: ["Faturamento", "Logística", "Processos", "Sistemas (Protheus)"],
      },
      lideranca: {
        kicker: "Capítulo 03",
        title: "E-commerce: do zero a R$ 800 mil por mês.",
        body: [
          "Entrei no time de e-commerce para entender como uma operação digital funciona em uma empresa de grande porte.",
          "Participei ativamente do crescimento do canal, do zero a R$ 800 mil de faturamento por mês, contribuindo em processos, marca, SEO, marketplaces e performance.",
        ],
        tags: ["Operação digital", "SEO", "Marketplaces", "Growth", "Automação"],
      },
      virada: {
        kicker: "Capítulo 04",
        title: "A virada para os dados.",
        body: [
          "Tive um insight: eu operava uma “loja” em que os dados eram o centro. Precisava atraí-los, tratá-los e fidelizá-los com inteligência, como fazia com clientes.",
          "Essa virada me levou à Ciência de Dados e IA no Ibmec, para unir visão de negócio com excelência técnica e transformar dados em resultado.",
        ],
        tags: ["Insight", "Dados", "Decisão", "Direção de carreira"],
      },
      academico: {
        kicker: "Capítulo 05",
        title: "Ciência de Dados, IA e construção prática.",
        body: [
          "Na graduação, participei de hackathons e projetos práticos desde o início, construindo, apresentando e testando soluções com Python, machine learning, BI e analytics.",
          "Conquistei 1º lugar no Hackathon de IA Generativa e 3º no Green Digital Skills, fui selecionado Embaixador Ibmec e entrei na Liga Acadêmica de Tecnologia.",
        ],
        tags: [
          "Machine Learning",
          "Power BI",
          "Hackathons",
          "Embaixador Ibmec",
          "Liga Acadêmica",
        ],
      },
      pagbank: {
        kicker: "Capítulo 06",
        title: "Data & AI em escala real, no PagBank.",
        body: [
          "Como estagiário de Data & AI, contribuo com os times de Data Engineering e AI Foundation, onde minha trajetória de negócio e tecnologia ganha forma em uma operação de dados em escala.",
          "Tenho contato com arquitetura Lakehouse, camadas de armazenamento, provedores e ingestão de dados; e apoio documentação técnica de plataformas de IA, POCs e arquiteturas de agentes, organizando materiais sobre LLMs, RAG, APIs e platform engineering.",
        ],
        tags: [
          "Lakehouse",
          "Data Ingestion",
          "LLMs & RAG",
          "LangChain",
          "Platform Engineering",
        ],
      },
    },
  },

  coin: {
    eyebrow: "Por onde passei",
  },

  impact: {
    eyebrow: "Evidências de impacto",
    title: "Resultados que conectam negócio, dados e tecnologia.",
    intro:
      "Números e marcos que sustentam a narrativa, da operação de e-commerce à atuação em dados e IA.",
    stats: [
      {
        value: 800,
        prefix: "R$ ",
        suffix: "k",
        label: "Faturamento mensal do e-commerce, construído do zero",
      },
      {
        value: 1,
        suffix: "º",
        label: "Lugar no Hackathon de IA Generativa",
      },
      {
        value: 3,
        suffix: "º",
        label: "Lugar no Green Digital Skills",
      },
      {
        value: 11,
        suffix: "+",
        label: "Certificações em dados, IA, BI e negócios",
      },
    ],
    evidence: [
      {
        title: "Data & AI no PagBank",
        description:
          "Atuação junto a Data Engineering e AI Foundation: Lakehouse, ingestão, LLMs, RAG e arquiteturas de agentes.",
      },
      {
        title: "Ciência de Dados & IA no Ibmec",
        description:
          "Graduação em andamento (conclusão em 12/2027), com hackathons, projetos práticos e protagonismo acadêmico.",
      },
      {
        title: "Projetos multidisciplinares",
        description:
          "Soluções com Python, Power BI, Java, Web e IA, conectando negócio, análise e tecnologia.",
      },
    ],
  },

  projects: {
    eyebrow: "Projetos em destaque",
    title: "Cases que conectam tecnologia, análise e resultado.",
    intro:
      "Aqui o portfólio deixa de ser narrativa e vira evidência. Cada projeto combina visão de negócio, execução técnica e dados.",
    items: {
      tatiart: {
        kicker: "Projeto 01",
        description:
          "Plataforma web focada em conversão, SEO, captação de leads e internacionalização, conectando front-end, back-end em Java Spring Boot e fundamentos de e-commerce.",
        tags: ["HTML", "CSS", "JavaScript", "Java Spring Boot", "SEO", "i18n"],
      },
      cittamobi: {
        kicker: "Projeto 02",
        description:
          "Análise estratégica com Python e Power BI usando dados reais e bases externas (geografia, eventos e clima) para identificar padrões de comportamento, mobilidade e demanda.",
        tags: [
          "Python",
          "Power BI",
          "Dados externos",
          "Analytics",
          "Mobilidade",
        ],
      },
      aurora: {
        kicker: "Projeto 03",
        description:
          "Projeto de negócio para o mercado livre de energia, conectando sustentabilidade, estratégia, proposta de valor e inovação, da oportunidade ao pitch.",
        tags: ["Estratégia", "Energia", "Sustentabilidade", "Produto", "Pitch"],
      },
      monevo: {
        kicker: "Projeto 04",
        description:
          "Conceito de produto para organização financeira pessoal, transformando complexidade em clareza para o usuário, do problema à proposta de valor.",
        tags: ["Fintech", "Produto Digital", "Finanças", "UX", "Estratégia"],
      },
    },
    liveLabel: "Ver projeto",
    codeLabel: "Ver código",
    deckLabel: "Ver apresentação",
    soonLabel: "Em breve",
  },

  skills: {
    eyebrow: "Stack",
    title: "Stack que conecta análise, IA e negócio.",
    intro:
      "Ferramentas e repertório organizados por camada, do dado bruto à decisão de negócio.",
    groups: {
      dataAi: "Dados & IA",
      dataEng: "Data Engineering & Platforms",
      aiEng: "AI Engineering",
      dev: "Desenvolvimento",
      business: "Negócios & Growth",
    },
  },

  certificates: {
    eyebrow: "Formação contínua",
    title: "Uma trilha de aprendizado em dados, IA e negócios.",
    intro:
      "Cada certificado é uma camada de aprofundamento, da engenharia de dados ao branding, passando por machine learning, BI, qualidade de processos e soft skills.",
    categories: {
      aiCloud: "IA & Cloud",
      ml: "Machine Learning",
      dataEng: "Data Engineering",
      biAnalytics: "BI & Analytics",
      business: "Negócios & Processos",
      soft: "Soft Skills",
    },
    viewLabel: "Ver certificado",
    showMore: "Ver todos os certificados",
    showLess: "Ver menos",
  },

  mindset: {
    eyebrow: "Como eu penso",
    title: "Meu diferencial não é só saber ferramentas. É conectar contexto.",
    body: "Gosto de entender o problema antes da solução. Minha base em operação e negócios me ajuda a enxergar o impacto real por trás dos dados. A tecnologia entra como meio: para automatizar, analisar, escalar e transformar decisões.",
    pillars: [
      {
        title: "Contexto de negócio",
        description:
          "Entendo a operação, o cliente, o processo e o objetivo antes de abrir qualquer ferramenta.",
      },
      {
        title: "Pensamento analítico",
        description:
          "Uso dados para estruturar problemas, validar hipóteses e encontrar padrões que sustentam decisões.",
      },
      {
        title: "Construção prática",
        description:
          "Transformo análise em solução: automação, dashboard, documentação, produto ou protótipo.",
      },
    ],
  },

  contact: {
    eyebrow: "Vamos conversar",
    title: "Vamos construir algo relevante?",
    body: "Se você procura alguém que entende operação, pensa com dados e constrói com tecnologia, vamos conversar.",
    phoneLabel: "Telefone",
    emailLabel: "E-mail",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    ctaLinkedin: "LinkedIn",
    ctaGithub: "GitHub",
    ctaEmail: "Enviar e-mail",
    ctaCV: "Baixar CV (PDF)",
    backToTop: "Voltar ao início",
  },

  footer: {
    tagline: "Negócio, dados e IA. Execução transformada em impacto.",
    rights: "Todos os direitos reservados.",
  },
};

/* ===================================================================== */
/*  ENGLISH                                                              */
/* ===================================================================== */
const en: Dictionary = {
  htmlLang: "en",
  metaTitle: "Davi Yoshio | Data, AI & Business",

  nav: {
    inicio: "Home",
    trajetoria: "Journey",
    impacto: "Impact",
    projetos: "Projects",
    skills: "Skills",
    certificados: "Certificates",
    contato: "Contact",
  },
  langLabel: "Language",
  menuLabel: "Menu",

  hero: {
    eyebrow: "Data & AI · Business & Technology",
    role: "Data & AI Intern at PagBank · Data Science & AI at Ibmec",
    headlineLead: "I connect data, AI and business vision to turn",
    headlineAccent: "execution into real impact.",
    subheadline:
      "My journey started in operations and evolved into technology, data and artificial intelligence, combining hands-on execution, analytical thinking and solution building.",
    badges: [
      "Data & AI",
      "Business Strategy",
      "E-commerce",
      "Machine Learning",
      "BI & Analytics",
      "Automation",
    ],
    ctaJourney: "See the journey",
    ctaProjects: "See projects",
    ctaCV: "Download CV",
    ctaContact: "Get in touch",
    availability: "Available for work",
  },

  story: {
    eyebrow: "The journey",
    title: "A path built between operations, data and AI.",
    intro:
      "Each chapter is a layer: from direct contact with the market to building data solutions at real scale.",
    chapters: {
      origem: {
        kicker: "Chapter 01",
        title: "Before technology came execution.",
        body: [
          "I started in sales at 15. I began as an entrepreneur with high-end products and scaled into importing and selling pillows in my first e-commerce.",
          "That is when I learned, hands-on, the dynamics of getting things done and generating revenue from the ground up.",
        ],
        tags: ["Sales", "Entrepreneurship", "E-commerce", "Market"],
      },
      operacao: {
        kicker: "Chapter 02",
        title: "Understanding how a company works from the inside.",
        body: [
          "I worked as an Analyst at the administrative office of Yamá Cosméticos, diving into billing, finance, logistics and systems.",
          "More than an area, it was a deliberate decision: to understand a company's gears and how different areas connect to drive results.",
        ],
        tags: ["Billing", "Logistics", "Processes", "Systems (Protheus)"],
      },
      lideranca: {
        kicker: "Chapter 03",
        title: "E-commerce: from zero to R$ 800k per month.",
        body: [
          "I joined the e-commerce team to understand how a digital operation works at a large company.",
          "I actively took part in the channel's growth, from zero to R$ 800k in monthly revenue, contributing to processes, brand, SEO, marketplaces and performance.",
        ],
        tags: ["Digital operation", "SEO", "Marketplaces", "Growth", "Automation"],
      },
      virada: {
        kicker: "Chapter 04",
        title: "The turn toward data.",
        body: [
          "I had an insight: I was running a “store” where data was the core. I had to attract, process and retain it intelligently, just like I did with customers.",
          "That shift led me to Data Science and AI at Ibmec, to combine business vision with technical excellence and turn data into results.",
        ],
        tags: ["Insight", "Data", "Decision", "Career direction"],
      },
      academico: {
        kicker: "Chapter 05",
        title: "Data Science, AI and hands-on building.",
        body: [
          "In my degree I joined hackathons and practical projects from day one, building, presenting and testing solutions with Python, machine learning, BI and analytics.",
          "I won 1st place at the Generative AI Hackathon and 3rd at Green Digital Skills, was selected as an Ibmec Ambassador and joined the Academic Technology League.",
        ],
        tags: [
          "Machine Learning",
          "Power BI",
          "Hackathons",
          "Ibmec Ambassador",
          "Academic League",
        ],
      },
      pagbank: {
        kicker: "Chapter 06",
        title: "Data & AI at real scale, at PagBank.",
        body: [
          "As a Data & AI intern, I contribute to the Data Engineering and AI Foundation teams, where my business and technology path takes shape in a data operation at scale.",
          "I work with Lakehouse architecture, storage layers, data providers and ingestion; and support technical documentation for AI platforms, POCs and agent architectures, organizing materials on LLMs, RAG, APIs and platform engineering.",
        ],
        tags: [
          "Lakehouse",
          "Data Ingestion",
          "LLMs & RAG",
          "LangChain",
          "Platform Engineering",
        ],
      },
    },
  },

  coin: {
    eyebrow: "Where I've been",
  },

  impact: {
    eyebrow: "Evidence of impact",
    title: "Results that connect business, data and technology.",
    intro:
      "Numbers and milestones that back the narrative, from e-commerce operations to data and AI work.",
    stats: [
      {
        value: 800,
        prefix: "R$ ",
        suffix: "k",
        label: "Monthly e-commerce revenue, built from zero",
      },
      {
        value: 1,
        suffix: "st",
        label: "Place at the Generative AI Hackathon",
      },
      {
        value: 3,
        suffix: "rd",
        label: "Place at Green Digital Skills",
      },
      {
        value: 11,
        suffix: "+",
        label: "Certificates in data, AI, BI and business",
      },
    ],
    evidence: [
      {
        title: "Data & AI at PagBank",
        description:
          "Working with Data Engineering and AI Foundation: Lakehouse, ingestion, LLMs, RAG and agent architectures.",
      },
      {
        title: "Data Science & AI at Ibmec",
        description:
          "Degree in progress (graduating 12/2027), with hackathons, hands-on projects and academic leadership.",
      },
      {
        title: "Cross-disciplinary projects",
        description:
          "Solutions with Python, Power BI, Java, Web and AI, connecting business, analysis and technology.",
      },
    ],
  },

  projects: {
    eyebrow: "Featured projects",
    title: "Cases that connect technology, analysis and results.",
    intro:
      "Here the portfolio stops being narrative and becomes evidence. Each project combines business vision, technical execution and data.",
    items: {
      tatiart: {
        kicker: "Project 01",
        description:
          "A web platform focused on conversion, SEO, lead capture and internationalization, connecting front-end, a Java Spring Boot back-end and e-commerce fundamentals.",
        tags: ["HTML", "CSS", "JavaScript", "Java Spring Boot", "SEO", "i18n"],
      },
      cittamobi: {
        kicker: "Project 02",
        description:
          "Strategic analysis with Python and Power BI using real and external data (geography, events and weather) to identify behavior, mobility and demand patterns.",
        tags: [
          "Python",
          "Power BI",
          "External data",
          "Analytics",
          "Mobility",
        ],
      },
      aurora: {
        kicker: "Project 03",
        description:
          "A business project for the free energy market, connecting sustainability, strategy, value proposition and innovation, from opportunity to pitch.",
        tags: ["Strategy", "Energy", "Sustainability", "Product", "Pitch"],
      },
      monevo: {
        kicker: "Project 04",
        description:
          "A product concept for personal financial organization, turning complexity into clarity for the user, from problem to value proposition.",
        tags: ["Fintech", "Digital Product", "Finance", "UX", "Strategy"],
      },
    },
    liveLabel: "View project",
    codeLabel: "View code",
    deckLabel: "View deck",
    soonLabel: "Coming soon",
  },

  skills: {
    eyebrow: "Stack",
    title: "A stack that connects analysis, AI and business.",
    intro:
      "Tools and repertoire organized by layer, from raw data to the business decision.",
    groups: {
      dataAi: "Data & AI",
      dataEng: "Data Engineering & Platforms",
      aiEng: "AI Engineering",
      dev: "Development",
      business: "Business & Growth",
    },
  },

  certificates: {
    eyebrow: "Continuous learning",
    title: "A learning track in data, AI and business.",
    intro:
      "Each certificate is a layer of depth, from data engineering to branding, through machine learning, BI, process quality and soft skills.",
    categories: {
      aiCloud: "AI & Cloud",
      ml: "Machine Learning",
      dataEng: "Data Engineering",
      biAnalytics: "BI & Analytics",
      business: "Business & Processes",
      soft: "Soft Skills",
    },
    viewLabel: "View certificate",
    showMore: "View all certificates",
    showLess: "Show less",
  },

  mindset: {
    eyebrow: "How I think",
    title: "My edge isn't just knowing tools. It's connecting context.",
    body: "I like to understand the problem before the solution. My background in operations and business helps me see the real impact behind the data. Technology comes in as a means: to automate, analyze, scale and transform decisions.",
    pillars: [
      {
        title: "Business context",
        description:
          "I understand the operation, the customer, the process and the goal before opening any tool.",
      },
      {
        title: "Analytical thinking",
        description:
          "I use data to frame problems, validate hypotheses and find patterns that support decisions.",
      },
      {
        title: "Practical building",
        description:
          "I turn analysis into a solution: automation, dashboard, documentation, product or prototype.",
      },
    ],
  },

  contact: {
    eyebrow: "Let's talk",
    title: "Shall we build something relevant?",
    body: "If you're looking for someone who understands operations, thinks with data and builds with technology, let's talk.",
    phoneLabel: "Phone",
    emailLabel: "E-mail",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    ctaLinkedin: "LinkedIn",
    ctaGithub: "GitHub",
    ctaEmail: "Send e-mail",
    ctaCV: "Download CV (PDF)",
    backToTop: "Back to top",
  },

  footer: {
    tagline: "Business, data and AI. Execution turned into impact.",
    rights: "All rights reserved.",
  },
};

/* ===================================================================== */
/*  ESPAÑOL                                                              */
/* ===================================================================== */
const es: Dictionary = {
  htmlLang: "es",
  metaTitle: "Davi Yoshio | Datos, IA & Negocios",

  nav: {
    inicio: "Inicio",
    trajetoria: "Trayectoria",
    impacto: "Impacto",
    projetos: "Proyectos",
    skills: "Skills",
    certificados: "Certificados",
    contato: "Contacto",
  },
  langLabel: "Idioma",
  menuLabel: "Menú",

  hero: {
    eyebrow: "Data & AI · Negocio & Tecnología",
    role: "Pasante de Data & AI en PagBank · Ciencia de Datos e IA en Ibmec",
    headlineLead: "Conecto datos, IA y visión de negocio para transformar",
    headlineAccent: "la ejecución en impacto real.",
    subheadline:
      "Mi trayectoria empezó en la operación y evolucionó hacia tecnología, datos e inteligencia artificial, uniendo ejecución práctica, pensamiento analítico y construcción de soluciones.",
    badges: [
      "Data & AI",
      "Business Strategy",
      "E-commerce",
      "Machine Learning",
      "BI & Analytics",
      "Automation",
    ],
    ctaJourney: "Ver trayectoria",
    ctaProjects: "Ver proyectos",
    ctaCV: "Descargar CV",
    ctaContact: "Contactar",
    availability: "Disponible para proyectos",
  },

  story: {
    eyebrow: "La trayectoria",
    title: "Una trayectoria construida entre operación, datos e IA.",
    intro:
      "Cada capítulo es una capa: del contacto directo con el mercado a la construcción de soluciones de datos a escala real.",
    chapters: {
      origem: {
        kicker: "Capítulo 01",
        title: "Antes de la tecnología vino la ejecución.",
        body: [
          "Empecé a los 15 años en ventas. Emprendí con productos high-end y escalé a la importación y venta de almohadas en mi primer e-commerce.",
          "Fue en ese período que aprendí, en la práctica, la dinámica de poner manos a la obra y generar ingresos desde la base.",
        ],
        tags: ["Ventas", "Emprendimiento", "E-commerce", "Mercado"],
      },
      operacao: {
        kicker: "Capítulo 02",
        title: "Entender cómo funciona una empresa por dentro.",
        body: [
          "Trabajé como Analista en la oficina administrativa de Yamá Cosméticos, sumergiéndome en facturación, finanzas, logística y sistemas.",
          "Más que un área, fue una decisión consciente: entender los engranajes de una empresa y cómo distintas áreas se conectan para generar resultado.",
        ],
        tags: ["Facturación", "Logística", "Procesos", "Sistemas (Protheus)"],
      },
      lideranca: {
        kicker: "Capítulo 03",
        title: "E-commerce: de cero a R$ 800 mil por mes.",
        body: [
          "Entré al equipo de e-commerce para entender cómo funciona una operación digital en una empresa de gran tamaño.",
          "Participé activamente del crecimiento del canal, de cero a R$ 800 mil de facturación por mes, contribuyendo en procesos, marca, SEO, marketplaces y desempeño.",
        ],
        tags: ["Operación digital", "SEO", "Marketplaces", "Growth", "Automatización"],
      },
      virada: {
        kicker: "Capítulo 04",
        title: "El giro hacia los datos.",
        body: [
          "Tuve un insight: operaba una “tienda” donde los datos eran el centro. Necesitaba atraerlos, tratarlos y fidelizarlos con inteligencia, igual que con los clientes.",
          "Ese giro me llevó a la Ciencia de Datos e IA en Ibmec, para unir visión de negocio con excelencia técnica y transformar datos en resultados.",
        ],
        tags: ["Insight", "Datos", "Decisión", "Dirección de carrera"],
      },
      academico: {
        kicker: "Capítulo 05",
        title: "Ciencia de Datos, IA y construcción práctica.",
        body: [
          "En la carrera participé en hackathons y proyectos prácticos desde el inicio, construyendo, presentando y probando soluciones con Python, machine learning, BI y analytics.",
          "Gané el 1.º lugar en el Hackathon de IA Generativa y el 3.º en Green Digital Skills, fui seleccionado Embajador Ibmec e ingresé a la Liga Académica de Tecnología.",
        ],
        tags: [
          "Machine Learning",
          "Power BI",
          "Hackathons",
          "Embajador Ibmec",
          "Liga Académica",
        ],
      },
      pagbank: {
        kicker: "Capítulo 06",
        title: "Data & AI a escala real, en PagBank.",
        body: [
          "Como pasante de Data & AI, contribuyo con los equipos de Data Engineering y AI Foundation, donde mi trayectoria de negocio y tecnología toma forma en una operación de datos a escala.",
          "Tengo contacto con arquitectura Lakehouse, capas de almacenamiento, proveedores e ingesta de datos; y apoyo documentación técnica de plataformas de IA, POCs y arquitecturas de agentes, organizando materiales sobre LLMs, RAG, APIs y platform engineering.",
        ],
        tags: [
          "Lakehouse",
          "Data Ingestion",
          "LLMs & RAG",
          "LangChain",
          "Platform Engineering",
        ],
      },
    },
  },

  coin: {
    eyebrow: "Por dónde pasé",
  },

  impact: {
    eyebrow: "Evidencias de impacto",
    title: "Resultados que conectan negocio, datos y tecnología.",
    intro:
      "Números e hitos que sostienen la narrativa, de la operación de e-commerce al trabajo en datos e IA.",
    stats: [
      {
        value: 800,
        prefix: "R$ ",
        suffix: "k",
        label: "Facturación mensual del e-commerce, construida desde cero",
      },
      {
        value: 1,
        suffix: "º",
        label: "Lugar en el Hackathon de IA Generativa",
      },
      {
        value: 3,
        suffix: "º",
        label: "Lugar en Green Digital Skills",
      },
      {
        value: 11,
        suffix: "+",
        label: "Certificaciones en datos, IA, BI y negocios",
      },
    ],
    evidence: [
      {
        title: "Data & AI en PagBank",
        description:
          "Trabajo con Data Engineering y AI Foundation: Lakehouse, ingesta, LLMs, RAG y arquitecturas de agentes.",
      },
      {
        title: "Ciencia de Datos & IA en Ibmec",
        description:
          "Carrera en curso (finaliza en 12/2027), con hackathons, proyectos prácticos y protagonismo académico.",
      },
      {
        title: "Proyectos multidisciplinarios",
        description:
          "Soluciones con Python, Power BI, Java, Web e IA, conectando negocio, análisis y tecnología.",
      },
    ],
  },

  projects: {
    eyebrow: "Proyectos destacados",
    title: "Casos que conectan tecnología, análisis y resultado.",
    intro:
      "Aquí el portafolio deja de ser narrativa y se vuelve evidencia. Cada proyecto combina visión de negocio, ejecución técnica y datos.",
    items: {
      tatiart: {
        kicker: "Proyecto 01",
        description:
          "Plataforma web enfocada en conversión, SEO, captación de leads e internacionalización, conectando front-end, back-end en Java Spring Boot y fundamentos de e-commerce.",
        tags: ["HTML", "CSS", "JavaScript", "Java Spring Boot", "SEO", "i18n"],
      },
      cittamobi: {
        kicker: "Proyecto 02",
        description:
          "Análisis estratégico con Python y Power BI usando datos reales y bases externas (geografía, eventos y clima) para identificar patrones de comportamiento, movilidad y demanda.",
        tags: [
          "Python",
          "Power BI",
          "Datos externos",
          "Analytics",
          "Movilidad",
        ],
      },
      aurora: {
        kicker: "Proyecto 03",
        description:
          "Proyecto de negocio para el mercado libre de energía, conectando sostenibilidad, estrategia, propuesta de valor e innovación, de la oportunidad al pitch.",
        tags: ["Estrategia", "Energía", "Sostenibilidad", "Producto", "Pitch"],
      },
      monevo: {
        kicker: "Proyecto 04",
        description:
          "Concepto de producto para organización financiera personal, transformando complejidad en claridad para el usuario, del problema a la propuesta de valor.",
        tags: ["Fintech", "Producto Digital", "Finanzas", "UX", "Estrategia"],
      },
    },
    liveLabel: "Ver proyecto",
    codeLabel: "Ver código",
    deckLabel: "Ver presentación",
    soonLabel: "Próximamente",
  },

  skills: {
    eyebrow: "Stack",
    title: "Un stack que conecta análisis, IA y negocio.",
    intro:
      "Herramientas y repertorio organizados por capa, del dato bruto a la decisión de negocio.",
    groups: {
      dataAi: "Datos & IA",
      dataEng: "Data Engineering & Platforms",
      aiEng: "AI Engineering",
      dev: "Desarrollo",
      business: "Negocios & Growth",
    },
  },

  certificates: {
    eyebrow: "Formación continua",
    title: "Una ruta de aprendizaje en datos, IA y negocios.",
    intro:
      "Cada certificado es una capa de profundización, de la ingeniería de datos al branding, pasando por machine learning, BI, calidad de procesos y soft skills.",
    categories: {
      aiCloud: "IA & Cloud",
      ml: "Machine Learning",
      dataEng: "Data Engineering",
      biAnalytics: "BI & Analytics",
      business: "Negocios & Procesos",
      soft: "Soft Skills",
    },
    viewLabel: "Ver certificado",
    showMore: "Ver todos los certificados",
    showLess: "Ver menos",
  },

  mindset: {
    eyebrow: "Cómo pienso",
    title: "Mi diferencial no es solo saber herramientas. Es conectar contexto.",
    body: "Me gusta entender el problema antes de la solución. Mi base en operación y negocios me ayuda a ver el impacto real detrás de los datos. La tecnología entra como medio: para automatizar, analizar, escalar y transformar decisiones.",
    pillars: [
      {
        title: "Contexto de negocio",
        description:
          "Entiendo la operación, el cliente, el proceso y el objetivo antes de abrir cualquier herramienta.",
      },
      {
        title: "Pensamiento analítico",
        description:
          "Uso datos para estructurar problemas, validar hipótesis y encontrar patrones que sostienen decisiones.",
      },
      {
        title: "Construcción práctica",
        description:
          "Transformo análisis en solución: automatización, dashboard, documentación, producto o prototipo.",
      },
    ],
  },

  contact: {
    eyebrow: "Hablemos",
    title: "¿Construimos algo relevante?",
    body: "Si buscas a alguien que entiende la operación, piensa con datos y construye con tecnología, hablemos.",
    phoneLabel: "Teléfono",
    emailLabel: "E-mail",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    ctaLinkedin: "LinkedIn",
    ctaGithub: "GitHub",
    ctaEmail: "Enviar e-mail",
    ctaCV: "Descargar CV (PDF)",
    backToTop: "Volver al inicio",
  },

  footer: {
    tagline: "Negocio, datos e IA. Ejecución transformada en impacto.",
    rights: "Todos los derechos reservados.",
  },
};

export const content: Record<Lang, Dictionary> = { pt, en, es };
