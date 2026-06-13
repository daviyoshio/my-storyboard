(function () {
  const SUPPORTED = ['pt', 'en', 'es'];
  const DEFAULT_LANG = 'pt';
  const STORAGE_KEY = 'portfolio.lang';

  const T = {
    pt: {
      'meta.title': 'Davi Yoshio | Portfólio',
      'nav.intro': 'Início',
      'nav.origem': 'Origem',
      'nav.operacao': 'Operação',
      'nav.lideranca': 'Liderança',
      'nav.virada': 'Virada',
      'nav.academico': 'Acadêmico',
      'nav.projetos': 'Projetos',
      'nav.conquistas': 'Conquistas',
      'nav.certificados': 'Certificados',
      'nav.pagbank': 'PagBank',
      'nav.contato': 'Contato',

      'intro.eyebrow': 'Portfólio · storytelling profissional',
      'intro.title': 'Davi Yoshio',
      'intro.lead': 'Dados, tecnologia, negócios e execução. Uma trajetória construída da operação ao pensamento estratégico, transformada aqui em uma experiência visual limpa, minimalista e profissional.',
      'intro.pill1': 'Ciência de Dados & IA',
      'intro.pill2': 'Produto & E-commerce',
      'intro.pill3': 'Análise & Execução',
      'intro.cta1': 'Explorar trajetória',
      'intro.cta2': 'Ver projetos',
      'intro.label': 'Landing page em formato de apresentação',

      'origem.eyebrow': 'Capítulo 1',
      'origem.title': 'Minha carreira começou antes da tecnologia.',
      'origem.body': 'Começou quando eu tinha 15 anos nas vendas. Iniciei empreendendo com produtos high-end e escalei para a importação e venda de travesseiros no meu primeiro e-commerce. Foi nesse período que aprendi, na prática, a dinâmica de colocar a mão na massa e construir resultado desde a base.',
      'origem.quote': 'Antes do código, veio o instinto de negócio. Antes da análise, veio a execução.',
      'origem.label': 'Vendas · Empreendedorismo · E-commerce',

      'operacao.eyebrow': 'Capítulo 2',
      'operacao.title': 'Entrar na Yamá foi minha decisão de entender como uma empresa realmente funciona.',
      'operacao.body1': 'Atuei como Analista em um escritório administrativo da Yamá Cosméticos, mergulhando nas rotinas empresariais. Foi minha escola sobre faturamento, financeiro, logística e sistemas.',
      'operacao.body2': 'Mais do que trabalhar em uma área específica, essa fase representou uma escolha estratégica: entender a estrutura de uma empresa por dentro, seus fluxos, suas engrenagens e como diferentes áreas se conectam para gerar resultado.',
      'operacao.label': 'Bastidores · Rotina empresarial · Aprendizado',

      'lideranca.eyebrow': 'Capítulo 3',
      'lideranca.title': 'Depois de aprender a operação, assumi a frente dela.',
      'lideranca.body1': 'Fui convidado para integrar o time de e-commerce com um objetivo claro: aprender. Entrei para entender como uma operação digital funciona em uma empresa de grande porte e participei ativamente da jornada que levou o canal do zero aos R$ 800 mil de faturamento mensal.',
      'lideranca.body2': 'No final de 2023, assumi a liderança da operação, passando a conduzir essa estrutura com uma visão mais estratégica sobre processos, crescimento e performance do canal.',
      'lideranca.label': 'E-commerce · Crescimento · Liderança',

      'virada.eyebrow': 'Capítulo 4',
      'virada.title': 'Foi aí que percebi que meus verdadeiros clientes eram os dados.',
      'virada.body1': 'Nesse momento tive um insight: eu operava uma "loja" em que os dados eram o centro. Eu precisava atraí-los, tratá-los e fidelizá-los com inteligência, da mesma forma que fazia com consumidores.',
      'virada.body2': 'Essa virada me levou ao curso de Ciência de Dados e Inteligência Artificial no Ibmec. A decisão foi clara: unir visão de negócios com excelência técnica para transformar dados em resultado real.',
      'virada.label': 'Insight · Dados · Direção de carreira',

      'academico.eyebrow': 'Capítulo 5',
      'academico.title': 'Formação com participação ativa desde o início.',
      'academico.body1': 'Iniciei a graduação em fevereiro de 2024, participando ativamente de hackathons e projetos práticos desde o começo. Mais do que aprender, passei a construir, apresentar e testar soluções em contextos reais.',
      'academico.body2': 'Além do envolvimento técnico, conquistei posições de destaque na comunidade acadêmica: fui selecionado como Embaixador da faculdade e ingressei na Liga Acadêmica de Tecnologia.',
      'academico.skill1': 'Hackathons',
      'academico.skill2': 'Projetos práticos',
      'academico.skill3': 'Embaixador Ibmec',
      'academico.skill4': 'Liga Acadêmica',
      'academico.label': 'Hackathons · Comunidade · Protagonismo',

      'conquistas.eyebrow': 'Capítulo 6',
      'conquistas.title': 'Aprendizado transformado em performance.',
      'conquistas.body': 'Conquistei o 1º lugar no Hackathon de IA Generativa, o 3º lugar no Hackathon Green Digital Skills e também participei do Desafio Mastercard, atuando em contextos que exigiram análise, estratégia, construção de solução e apresentação de valor.',
      'conquistas.quote': 'Meu diferencial está em unir repertório de negócio, visão analítica e capacidade real de construir soluções.',
      'conquistas.label': '1º lugar IA Generativa · 3º lugar Green Digital Skills · Mastercard',

      'pagbank.eyebrow': 'Capítulo 7',
      'pagbank.title': 'Primeira experiência na indústria: Data & AI no PagBank.',
      'pagbank.body1': 'Entrei no PagBank como estagiário de Data & AI, contribuindo em iniciativas dos times de Data Engineering e AI Foundation — a fase em que minha trajetória de negócios e tecnologia ganha forma dentro de uma operação de dados em escala real.',
      'pagbank.body2': 'No Data Engineering, tive contato com a arquitetura Lakehouse, camadas de armazenamento e análise, provedores de dados, fluxos de ingestão e fundamentos de governança de dados, desenvolvendo entendimento de como esses elementos sustentam produtos analíticos em escala. No AI Foundation, apoio a documentação técnica de plataformas de IA, POCs e arquiteturas de agentes, organizando materiais sobre LLMs, RAG, APIs e platform engineering.',
      'pagbank.label': 'Data Engineering · AI Foundation · LLMs & RAG',

      'projetos.eyebrow': 'Projetos em destaque',
      'projetos.title': 'Cases que conectam tecnologia, análise e resultado.',
      'projetos.intro': 'Aqui, o portfólio deixa de ser apenas narrativa e vira evidência. Cada projeto reflete uma combinação entre visão estratégica, construção técnica e aplicação prática.',

      'projetos.tatiart.kicker': 'Projeto 01',
      'projetos.tatiart.title': 'Tatiart',
      'projetos.tatiart.body': 'Desenvolvimento de uma plataforma web focada em conversão de vendas, com front-end em HTML, CSS e JavaScript e back-end em Java Spring Boot. O projeto aplicou fundamentos de e-commerce para estruturar SEO, captação de leads e i18n, preparando a aplicação para múltiplos mercados.',

      'projetos.cittamobi.kicker': 'Projeto 02',
      'projetos.cittamobi.title': 'Projeto de Dados · Cittamobi',
      'projetos.cittamobi.body': 'Análise estratégica com dados reais de acesso ao app, utilizando Python e Power BI para mapear perfil de usuário e identificar padrões de comportamento. A análise foi aprofundada com bases externas de geografia, eventos e clima, gerando insights sobre corredores de ônibus e picos de demanda.',
      'projetos.cittamobi.skill4': 'Dados externos',
      'projetos.cittamobi.skill5': 'Insights de mobilidade',
      'projetos.cittamobi.skill3': 'Análise comportamental',

      'projetos.aurora.kicker': 'Projeto 03',
      'projetos.aurora.title': 'Aurora Viridis',
      'projetos.aurora.body': 'Projeto desenvolvido no contexto do Green Digital Skills, criando uma proposta de negócio voltada ao mercado livre de energia. A Aurora Viridis foi pensada como uma empresa capaz de impulsionar a venda de energia nesse mercado, conectando estratégia, inovação e visão de futuro para um setor em transformação.',
      'projetos.aurora.skill2': 'Modelo de negócio',
      'projetos.aurora.skill3': 'Mercado livre de energia',
      'projetos.aurora.skill4': 'Estratégia',

      'projetos.monevo.kicker': 'Projeto 04',
      'projetos.monevo.title': 'Monevo',
      'projetos.monevo.body': 'Projeto criado com foco em organização e inteligência aplicada ao contexto financeiro, combinando tecnologia, visão de produto e construção estratégica. A proposta nasceu para transformar complexidade em clareza, com uma solução pensada para gerar valor real a partir de dados, experiência e direcionamento.',
      'projetos.monevo.skill1': 'Produto digital',
      'projetos.monevo.skill2': 'Estratégia',
      'projetos.monevo.skill3': 'Finanças',
      'projetos.monevo.skill4': 'Inovação',

      'certificados.eyebrow': 'Certificados',
      'certificados.title': 'Formação contínua em dados, IA e negócios.',
      'certificados.intro': 'Cada certificado representa uma camada de aprofundamento técnico ou estratégico que sustenta minha forma de trabalhar. Da engenharia de dados ao branding, passando por machine learning, qualidade de processos e desenvolvimento socioemocional.',
      'certificados.viewLink': 'Ver certificado →',
      'certificados.showMore': 'Ver mais certificados',
      'certificados.showLess': 'Ver menos',

      'contato.eyebrow': 'Encerramento',
      'contato.title': 'Vamos construir algo relevante.',
      'contato.body': 'Este portfólio é uma síntese da minha trajetória até aqui: uma combinação entre execução, estratégia, dados e construção. Se fizer sentido para o seu contexto, vamos conversar.',
      'contato.phoneLabel': 'Telefone',
      'contato.emailLabel': 'E-mail',
      'contato.linkedinLabel': 'LinkedIn',
      'contato.skillsEyebrow': 'Core skills',
      'contato.skillsTitle': 'Tecnologias e repertório',
      'contato.backToTop': 'Voltar ao início'
    },
    en: {
      'meta.title': 'Davi Yoshio | Portfolio',
      'nav.intro': 'Home',
      'nav.origem': 'Origin',
      'nav.operacao': 'Operations',
      'nav.lideranca': 'Leadership',
      'nav.virada': 'Turning point',
      'nav.academico': 'Academic',
      'nav.projetos': 'Projects',
      'nav.conquistas': 'Achievements',
      'nav.certificados': 'Certificates',
      'nav.pagbank': 'PagBank',
      'nav.contato': 'Contact',

      'intro.eyebrow': 'Portfolio · professional storytelling',
      'intro.title': 'Davi Yoshio',
      'intro.lead': 'Data, technology, business and execution. A journey built from operations to strategic thinking, translated here into a clean, minimalist and professional visual experience.',
      'intro.pill1': 'Data Science & AI',
      'intro.pill2': 'Product & E-commerce',
      'intro.pill3': 'Analysis & Execution',
      'intro.cta1': 'Explore the journey',
      'intro.cta2': 'See projects',
      'intro.label': 'Landing page as a presentation',

      'origem.eyebrow': 'Chapter 1',
      'origem.title': 'My career started before technology.',
      'origem.body': 'It started when I was 15, in sales. I began as an entrepreneur with high-end products and scaled to importing and selling pillows in my first e-commerce. That is when I learned, hands-on, the dynamics of getting things done and building results from the ground up.',
      'origem.quote': 'Before code came business instinct. Before analysis came execution.',
      'origem.label': 'Sales · Entrepreneurship · E-commerce',

      'operacao.eyebrow': 'Chapter 2',
      'operacao.title': 'Joining Yamá was my decision to understand how a company truly works.',
      'operacao.body1': 'I worked as an Analyst at the administrative office of Yamá Cosméticos, diving into the company\'s daily routines. It was my school on billing, finance, logistics, and systems.',
      'operacao.body2': 'More than working in a specific area, this phase was a strategic choice: to understand the structure of a company from the inside, its flows, its gears, and how different areas connect to drive results.',
      'operacao.label': 'Behind the scenes · Corporate routine · Learning',

      'lideranca.eyebrow': 'Chapter 3',
      'lideranca.title': 'After learning the operation, I took the lead.',
      'lideranca.body1': 'I was invited to join the e-commerce team with one clear goal: to learn. I joined to understand how a digital operation works at a large company and took part in the journey that scaled the channel from zero to R$ 800k in monthly revenue.',
      'lideranca.body2': 'In late 2023, I took over the leadership of the operation, running this structure with a more strategic view on processes, growth and channel performance.',
      'lideranca.label': 'E-commerce · Growth · Leadership',

      'virada.eyebrow': 'Chapter 4',
      'virada.title': 'That is when I realized my real customers were the data.',
      'virada.body1': 'At that moment I had an insight: I was running a "store" where data was the core. I needed to attract, process and retain data with intelligence, just like I did with consumers.',
      'virada.body2': 'This shift led me to the Data Science and Artificial Intelligence program at Ibmec. The decision was clear: combine business vision with technical excellence to turn data into real results.',
      'virada.label': 'Insight · Data · Career direction',

      'academico.eyebrow': 'Chapter 5',
      'academico.title': 'Higher education with active engagement from day one.',
      'academico.body1': 'I started my degree in February 2024, actively taking part in hackathons and hands-on projects from the very beginning. More than learning, I started building, presenting and testing solutions in real-world contexts.',
      'academico.body2': 'Beyond the technical side, I earned standout roles in the academic community: I was selected as a University Ambassador and joined the Academic Technology League.',
      'academico.skill1': 'Hackathons',
      'academico.skill2': 'Hands-on projects',
      'academico.skill3': 'Ibmec Ambassador',
      'academico.skill4': 'Academic League',
      'academico.label': 'Hackathons · Community · Leadership',

      'conquistas.eyebrow': 'Chapter 6',
      'conquistas.title': 'Learning turned into performance.',
      'conquistas.body': 'I won 1st place at the Generative AI Hackathon, 3rd place at the Green Digital Skills Hackathon, and also took part in the Mastercard Challenge, working in contexts that required analysis, strategy, solution building and value pitching.',
      'conquistas.quote': 'My edge lies in combining business repertoire, analytical vision and real solution-building capacity.',
      'conquistas.label': '1st place Generative AI · 3rd place Green Digital Skills · Mastercard',

      'pagbank.eyebrow': 'Chapter 7',
      'pagbank.title': 'First industry experience: Data & AI at PagBank.',
      'pagbank.body1': 'I joined PagBank as a Data & AI Intern, contributing to initiatives across the Data Engineering and AI Foundation teams — the phase where my business and technology trajectory takes shape inside a real-scale data operation.',
      'pagbank.body2': 'On Data Engineering, I had exposure to the Lakehouse architecture, storage and analytics layers, data providers, ingestion flows and data governance foundations, developing an understanding of how these elements support analytical products at scale. On AI Foundation, I support technical documentation for AI platforms, POCs and agent architectures, organizing materials on LLMs, RAG, APIs and platform engineering.',
      'pagbank.label': 'Data Engineering · AI Foundation · LLMs & RAG',

      'projetos.eyebrow': 'Featured projects',
      'projetos.title': 'Cases that connect technology, analysis and results.',
      'projetos.intro': 'Here the portfolio stops being just narrative and becomes evidence. Each project reflects a combination of strategic vision, technical execution and practical application.',

      'projetos.tatiart.kicker': 'Project 01',
      'projetos.tatiart.title': 'Tatiart',
      'projetos.tatiart.body': 'A web platform focused on sales conversion, with a front-end in HTML, CSS and JavaScript and a back-end in Java Spring Boot. The project applied e-commerce fundamentals to structure SEO, lead capture and i18n, preparing the application for multiple markets.',

      'projetos.cittamobi.kicker': 'Project 02',
      'projetos.cittamobi.title': 'Data Project · Cittamobi',
      'projetos.cittamobi.body': 'Strategic analysis using real app-access data, leveraging Python and Power BI to map user profiles and identify behavior patterns. The analysis was enriched with external geography, events and weather data, generating insights on bus corridors and demand peaks.',
      'projetos.cittamobi.skill4': 'External data',
      'projetos.cittamobi.skill5': 'Mobility insights',
      'projetos.cittamobi.skill3': 'Behavioral analysis',

      'projetos.aurora.kicker': 'Project 03',
      'projetos.aurora.title': 'Aurora Viridis',
      'projetos.aurora.body': 'Project developed in the Green Digital Skills context, creating a business proposal for the free energy market. Aurora Viridis was designed as a company capable of driving energy sales in this market, connecting strategy, innovation and forward-looking vision for a sector in transformation.',
      'projetos.aurora.skill2': 'Business model',
      'projetos.aurora.skill3': 'Free energy market',
      'projetos.aurora.skill4': 'Strategy',

      'projetos.monevo.kicker': 'Project 04',
      'projetos.monevo.title': 'Monevo',
      'projetos.monevo.body': 'A project focused on organization and intelligence applied to financial context, combining technology, product vision and strategic execution. The proposal was born to turn complexity into clarity, with a solution designed to deliver real value through data, experience and direction.',
      'projetos.monevo.skill1': 'Digital product',
      'projetos.monevo.skill2': 'Strategy',
      'projetos.monevo.skill3': 'Finance',
      'projetos.monevo.skill4': 'Innovation',

      'certificados.eyebrow': 'Certificates',
      'certificados.title': 'Continuous learning in data, AI and business.',
      'certificados.intro': 'Each certificate represents a layer of technical or strategic depth that supports the way I work. From data engineering to branding, through machine learning, process quality and socio-emotional development.',
      'certificados.viewLink': 'View certificate →',
      'certificados.showMore': 'Show more certificates',
      'certificados.showLess': 'Show less',

      'contato.eyebrow': 'Closing',
      'contato.title': 'Let\'s build something relevant.',
      'contato.body': 'This portfolio is a summary of my journey so far: a combination of execution, strategy, data and construction. If it fits your context, let\'s talk.',
      'contato.phoneLabel': 'Phone',
      'contato.emailLabel': 'E-mail',
      'contato.linkedinLabel': 'LinkedIn',
      'contato.skillsEyebrow': 'Core skills',
      'contato.skillsTitle': 'Technologies and repertoire',
      'contato.backToTop': 'Back to top'
    },
    es: {
      'meta.title': 'Davi Yoshio | Portafolio',
      'nav.intro': 'Inicio',
      'nav.origem': 'Origen',
      'nav.operacao': 'Operación',
      'nav.lideranca': 'Liderazgo',
      'nav.virada': 'Giro',
      'nav.academico': 'Académico',
      'nav.projetos': 'Proyectos',
      'nav.conquistas': 'Logros',
      'nav.certificados': 'Certificados',
      'nav.pagbank': 'PagBank',
      'nav.contato': 'Contacto',

      'intro.eyebrow': 'Portafolio · storytelling profesional',
      'intro.title': 'Davi Yoshio',
      'intro.lead': 'Datos, tecnología, negocios y ejecución. Una trayectoria construida desde la operación hasta el pensamiento estratégico, traducida aquí en una experiencia visual limpia, minimalista y profesional.',
      'intro.pill1': 'Ciencia de Datos & IA',
      'intro.pill2': 'Producto & E-commerce',
      'intro.pill3': 'Análisis & Ejecución',
      'intro.cta1': 'Explorar trayectoria',
      'intro.cta2': 'Ver proyectos',
      'intro.label': 'Landing page en formato de presentación',

      'origem.eyebrow': 'Capítulo 1',
      'origem.title': 'Mi carrera empezó antes de la tecnología.',
      'origem.body': 'Empezó cuando tenía 15 años, en ventas. Comencé emprendiendo con productos high-end y escalé a la importación y venta de almohadas en mi primer e-commerce. Fue en este período que aprendí, en la práctica, la dinámica de poner manos a la obra y construir resultados desde la base.',
      'origem.quote': 'Antes del código vino el instinto de negocio. Antes del análisis vino la ejecución.',
      'origem.label': 'Ventas · Emprendimiento · E-commerce',

      'operacao.eyebrow': 'Capítulo 2',
      'operacao.title': 'Entrar a Yamá fue mi decisión de entender cómo funciona realmente una empresa.',
      'operacao.body1': 'Trabajé como Analista en una oficina administrativa de Yamá Cosméticos, sumergiéndome en las rutinas empresariales. Fue mi escuela sobre facturación, finanzas, logística y sistemas.',
      'operacao.body2': 'Más que trabajar en un área específica, esta etapa representó una elección estratégica: entender la estructura de una empresa por dentro, sus flujos, sus engranajes y cómo distintas áreas se conectan para generar resultado.',
      'operacao.label': 'Bastidores · Rutina empresarial · Aprendizaje',

      'lideranca.eyebrow': 'Capítulo 3',
      'lideranca.title': 'Después de aprender la operación, asumí su liderazgo.',
      'lideranca.body1': 'Fui invitado a integrar el equipo de e-commerce con un objetivo claro: aprender. Entré para entender cómo funciona una operación digital en una empresa de gran tamaño y participé activamente en el camino que llevó al canal de cero a R$ 800 mil en facturación mensual.',
      'lideranca.body2': 'A finales de 2023, asumí el liderazgo de la operación, conduciendo esta estructura con una visión más estratégica sobre procesos, crecimiento y desempeño del canal.',
      'lideranca.label': 'E-commerce · Crecimiento · Liderazgo',

      'virada.eyebrow': 'Capítulo 4',
      'virada.title': 'Ahí me di cuenta de que mis verdaderos clientes eran los datos.',
      'virada.body1': 'En ese momento tuve un insight: operaba una "tienda" donde los datos eran el centro. Necesitaba atraerlos, tratarlos y fidelizarlos con inteligencia, igual que hacía con los consumidores.',
      'virada.body2': 'Ese giro me llevó al curso de Ciencia de Datos e Inteligencia Artificial en Ibmec. La decisión fue clara: unir visión de negocios con excelencia técnica para transformar datos en resultados reales.',
      'virada.label': 'Insight · Datos · Dirección de carrera',

      'academico.eyebrow': 'Capítulo 5',
      'academico.title': 'Formación con participación activa desde el inicio.',
      'academico.body1': 'Inicié la carrera en febrero de 2024, participando activamente en hackathons y proyectos prácticos desde el comienzo. Más que aprender, empecé a construir, presentar y probar soluciones en contextos reales.',
      'academico.body2': 'Además del involucramiento técnico, conquisté posiciones destacadas en la comunidad académica: fui seleccionado como Embajador de la facultad e ingresé en la Liga Académica de Tecnología.',
      'academico.skill1': 'Hackathons',
      'academico.skill2': 'Proyectos prácticos',
      'academico.skill3': 'Embajador Ibmec',
      'academico.skill4': 'Liga Académica',
      'academico.label': 'Hackathons · Comunidad · Protagonismo',

      'conquistas.eyebrow': 'Capítulo 6',
      'conquistas.title': 'Aprendizaje convertido en desempeño.',
      'conquistas.body': 'Conquisté el 1.º lugar en el Hackathon de IA Generativa, el 3.º lugar en el Hackathon Green Digital Skills y también participé en el Desafío Mastercard, actuando en contextos que exigieron análisis, estrategia, construcción de solución y presentación de valor.',
      'conquistas.quote': 'Mi diferencial está en unir repertorio de negocio, visión analítica y capacidad real de construir soluciones.',
      'conquistas.label': '1.º lugar IA Generativa · 3.º lugar Green Digital Skills · Mastercard',

      'pagbank.eyebrow': 'Capítulo 7',
      'pagbank.title': 'Primera experiencia en la industria: Data & AI en PagBank.',
      'pagbank.body1': 'Entré a PagBank como pasante de Data & AI, contribuyendo en iniciativas de los equipos de Data Engineering y AI Foundation — la fase en la que mi trayectoria de negocio y tecnología toma forma dentro de una operación de datos a escala real.',
      'pagbank.body2': 'En Data Engineering, tuve contacto con la arquitectura Lakehouse, capas de almacenamiento y análisis, proveedores de datos, flujos de ingesta y fundamentos de gobernanza de datos, desarrollando comprensión de cómo estos elementos sostienen los productos analíticos a escala. En AI Foundation, apoyo la documentación técnica de plataformas de IA, POCs y arquitecturas de agentes, organizando materiales sobre LLMs, RAG, APIs y platform engineering.',
      'pagbank.label': 'Data Engineering · AI Foundation · LLMs & RAG',

      'projetos.eyebrow': 'Proyectos destacados',
      'projetos.title': 'Casos que conectan tecnología, análisis y resultado.',
      'projetos.intro': 'Aquí, el portafolio deja de ser solo narrativa y se vuelve evidencia. Cada proyecto refleja una combinación entre visión estratégica, construcción técnica y aplicación práctica.',

      'projetos.tatiart.kicker': 'Proyecto 01',
      'projetos.tatiart.title': 'Tatiart',
      'projetos.tatiart.body': 'Desarrollo de una plataforma web enfocada en la conversión de ventas, con front-end en HTML, CSS y JavaScript y back-end en Java Spring Boot. El proyecto aplicó fundamentos de e-commerce para estructurar SEO, captación de leads e i18n, preparando la aplicación para múltiples mercados.',

      'projetos.cittamobi.kicker': 'Proyecto 02',
      'projetos.cittamobi.title': 'Proyecto de Datos · Cittamobi',
      'projetos.cittamobi.body': 'Análisis estratégico con datos reales de acceso al app, utilizando Python y Power BI para mapear perfil de usuario e identificar patrones de comportamiento. El análisis fue profundizado con bases externas de geografía, eventos y clima, generando insights sobre corredores de buses y picos de demanda.',
      'projetos.cittamobi.skill4': 'Datos externos',
      'projetos.cittamobi.skill5': 'Insights de movilidad',
      'projetos.cittamobi.skill3': 'Análisis comportamental',

      'projetos.aurora.kicker': 'Proyecto 03',
      'projetos.aurora.title': 'Aurora Viridis',
      'projetos.aurora.body': 'Proyecto desarrollado en el contexto del Green Digital Skills, creando una propuesta de negocio orientada al mercado libre de energía. Aurora Viridis fue pensada como una empresa capaz de impulsar la venta de energía en este mercado, conectando estrategia, innovación y visión de futuro para un sector en transformación.',
      'projetos.aurora.skill2': 'Modelo de negocio',
      'projetos.aurora.skill3': 'Mercado libre de energía',
      'projetos.aurora.skill4': 'Estrategia',

      'projetos.monevo.kicker': 'Proyecto 04',
      'projetos.monevo.title': 'Monevo',
      'projetos.monevo.body': 'Proyecto creado con foco en organización e inteligencia aplicada al contexto financiero, combinando tecnología, visión de producto y construcción estratégica. La propuesta nació para transformar complejidad en claridad, con una solución pensada para generar valor real a partir de datos, experiencia y dirección.',
      'projetos.monevo.skill1': 'Producto digital',
      'projetos.monevo.skill2': 'Estrategia',
      'projetos.monevo.skill3': 'Finanzas',
      'projetos.monevo.skill4': 'Innovación',

      'certificados.eyebrow': 'Certificados',
      'certificados.title': 'Formación continua en datos, IA y negocios.',
      'certificados.intro': 'Cada certificado representa una capa de profundización técnica o estratégica que sostiene mi forma de trabajar. De la ingeniería de datos al branding, pasando por machine learning, calidad de procesos y desarrollo socioemocional.',
      'certificados.viewLink': 'Ver certificado →',
      'certificados.showMore': 'Ver más certificados',
      'certificados.showLess': 'Ver menos',

      'contato.eyebrow': 'Cierre',
      'contato.title': 'Construyamos algo relevante.',
      'contato.body': 'Este portafolio es una síntesis de mi trayectoria hasta aquí: una combinación entre ejecución, estrategia, datos y construcción. Si tiene sentido para tu contexto, hablemos.',
      'contato.phoneLabel': 'Teléfono',
      'contato.emailLabel': 'E-mail',
      'contato.linkedinLabel': 'LinkedIn',
      'contato.skillsEyebrow': 'Core skills',
      'contato.skillsTitle': 'Tecnologías y repertorio',
      'contato.backToTop': 'Volver al inicio'
    }
  };

  function detectLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED.includes(saved)) return saved;
    const browser = (navigator.language || 'pt').slice(0, 2).toLowerCase();
    return SUPPORTED.includes(browser) ? browser : DEFAULT_LANG;
  }

  function applyTranslations(lang) {
    const dict = T[lang] || T[DEFAULT_LANG];
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
    if (dict['meta.title']) document.title = dict['meta.title'];

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria-label');
      if (dict[key] != null) el.setAttribute('aria-label', dict[key]);
    });

    document.querySelectorAll('.lang-switch [data-lang]').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
      btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === lang);
    });
  }

  function setLang(lang) {
    if (!SUPPORTED.includes(lang)) return;
    localStorage.setItem(STORAGE_KEY, lang);
    applyTranslations(lang);
  }

  function init() {
    applyTranslations(detectLang());
    document.querySelectorAll('.lang-switch [data-lang]').forEach((btn) => {
      btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang')));
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
