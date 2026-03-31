export type Lang = "en" | "pt";

export const content = {
  en: {
    nav: {
      education: "Education",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    statusBar: {
      ver: "VER V1.0",
      status: "STATUS: ONLINE",
      loc: "LOC: PARAIBA-BR",
    },
    hero: {
      prompt: 'C:\\USERS\\PAULOGX77> whoami --verbose',
      name: "PAULO_GX77",
      fullName: "// PAULO GUILHERME COSTA NASCIMENTO",
      bio: "Software developer with a strong interest in hardware.\n" +
           "Currently, I am studying Systems Analysis and Development at IFPB and also Microelectronics with a focus on Design Verification track at UFCG." +
           "Passionate and very curious about technology, always seeking new experiences and knowledge about Full-Stack Development, Embedded Systems, Chip Design, Artificial Intelligence, and everything that involves this fantastic universe of technology.",
      github: "[ GITHUB ]",
      linkedin: "[ LINKEDIN ]",
      email: "[ EMAIL ]",
    },
    typingPhrases: [
      "Full Stack Developer...",
      "Microelectronics @ UFCG...",
      "Cloud & AI Enthusiast...",
      "ICT Competition Participant 2025...",
      "ADS @ IFPB...",
    ],
    award: {
      title: ">> 3RD PLACE — HUAWEI ICT COMPETITION",
      sub: "TRACK: CLOUD & ARTIFICIAL INTELLIGENCE  |  IFPB × HUAWEI  |  2025",
      tag: "VERIFIED",
    },
    education: {
      sectionTitle: "> EDUCATION",
      sectionMeta: "// ACADEMIC LOG",
      items: [
        {
          inst: "IFPB",
          badge: "TECHNOLOGIST",
          degree: "Technologist Degree (B.Tech)",
          course: "Systems Analysis & Development",
          period: "2024 — 2027 · 5TH SEMESTER (ONGOING)",
          items: [
            "Databases I & II",
            "Web Development I, II & III",
            "Artificial Intelligence",
            "Software Project I",
            "POO",
            "Project Patterns",
            "and more..."
          ],
        },
        {
          inst: "UFCG",
          badge: "TECH RESIDENCY",
          degree: null,
          course: "Microelectronics Residency · CI Expert Program",
          period: "2026 — 2027",
          items: [
            "Synopsys Purple Verification",
            "Functional IC Verification",
            "Digital Systems Design",
            "EDA Synopsys Tools",
          ],
        },
      ],
    },
    experience: {
      sectionTitle: "> EXPERIENCE",
      sectionMeta: "// ACTIVITY LOG",
      items: [
        {
          date: "2023 → 2024",
          badge: "WORK",
          company: "CAGEPA",
          role: "IT Assistant · Young Apprentice Program",
          desc: "Technical support, infrastructure maintenance, hardware inventory management (PCs, peripherals, monitors), and helpdesk. Hands-on experience with Active Directory in a real corporate environment.",
        },
      ],
    },
    projects: {
      sectionTitle: "> PROJECTS",
      sectionMeta: "// ACTIVE REPOSITORIES",
      items: [
        {
          status: "ACTIVE",
          statusClass: "s-dev",
          name: "IFCONNECTED",
          role: "// Co-developer · Frontend & API Integration",
          desc: "Academic social network for IFPB students. Regional feed via geolocation (PostGIS), JWT auth, integrated portfolio, and a corporate job board module.",
          tags: ["Spring Boot", "Next.js", "PostGIS", "MongoDB", "Redis", "MinIO"],
          github: "https://github.com/euAllanDev/IFConnected-front",
          wide: false,
        },
        {
          status: "ACTIVE",
          statusClass: "s-dev",
          name: "HUBFY",
          role: "// Solo Developer · Mobile",
          desc: "Mobile app that centralizes all pending Pull Requests from your GitHub repositories in a single dashboard.",
          tags: ["React Native", "TypeScript", "GitHub API"],
          github: null,
          wide: false,
        },
        {
          status: "PLANNED",
          statusClass: "s-plan",
          name: "IT INVENTORY SYSTEM",
          role: "// Creator & Developer · Based on real experience at CAGEPA",
          desc: "Corporate system for hardware inventory management, helpdesk ticketing, invoice generation, and Active Directory integration — inspired by real needs observed as an IT Assistant.",
          tags: ["Next.js", "Spring Boot", "PostgreSQL", "Active Directory", "TypeScript", "Docker"],
          github: null,
          wide: true,
        },
      ],
    },
    skills: {
      sectionTitle: "> SKILLS",
      sectionMeta: "// TECH STACK",
      groups: [
        { label: "FRONTEND", chips: ["Next.js", "React", "TypeScript", "Tailwind CSS", "React Native"] },
        { label: "BACKEND", chips: ["Spring Boot", "Spring Security", "JWT", "REST API"] },
        { label: "DATABASE", chips: ["PostgreSQL", "MongoDB", "Redis", "PostGIS", "Liquibase"] },
        { label: "CLOUD & AI", chips: ["Huawei Cloud", "Docker", "Python", "ML Basics"] },
        { label: "MICROELECTRONICS", chips: ["SystemVerilog", "Synopsys Tools", "Functional Verif.", "CI Design"] },
        { label: "TOOLS", chips: ["Git", "GitHub", "Linux", "MinIO", "Swagger/OpenAPI"] },
      ],
    },
    footer: "PARAÍBA, BR · github.com/paulogx77 · 2026",
  },

  pt: {
    nav: {
      education: "Formação",
      experience: "Experiência",
      projects: "Projetos",
      skills: "Skills",
      contact: "Contato",
    },
    statusBar: {
      ver: "VER V1.0",
      status: "STATUS: ONLINE",
      loc: "LOC: PARAIBA-BR",
    },
    hero: {
      prompt: 'C:\\USERS\\PAULOGX77> whoami --verbose',
      name: "PAULO_GX77",
      fullName: "// PAULO GUILHERME COSTA NASCIMENTO",
      bio: "Desenvolvedor de software com grande interesse em hardware." +
           "Atualmente, estudo Análise e Desenvolvimento de Sistemas no IFPB e também Microeletrônica com foco na área de Verificação de Design na UFCG." +
           "Sou apaixonado e muito curioso por tecnologia, sempre em busca de novas experiências e conhecimento sobre Desenvolvimento Full-Stack, Sistemas Embarcados, Projeto de Chips, Inteligência Artificial e tudo o que envolve este fantástico universo da tecnologia.",
      github: "[ GITHUB ]",
      linkedin: "[ LINKEDIN ]",
      email: "[ EMAIL ]",
    },
    typingPhrases: [
      "Desenvolvedor Full Stack...",
      "Microeletrônica @ UFCG...",
      "Entusiasta de Cloud & IA...",
      "Participante ICT Competition 2025...",
      "ADS @ IFPB..."
    ],
    award: {
      title: ">> 3º LUGAR — HUAWEI ICT COMPETITION",
      sub: "TRILHA: CLOUD & INTELIGÊNCIA ARTIFICIAL  |  IFPB × HUAWEI  |  2025",
      tag: "VERIFICADO",
    },
    education: {
      sectionTitle: "> FORMAÇÃO",
      sectionMeta: "// LOG ACADÊMICO",
      items: [
        {
          inst: "IFPB",
          badge: "TECNÓLOGO",
          degree: "Tecnólogo (CST)",
          course: "Análise e Desenvolvimento de Sistemas",
          period: "2024 — 2027 · 5º PERÍODO (CURSANDO)",
          items: [
            "Banco de Dados I e II",
            "Desenvolvimento Web I, II e III",
            "Inteligência Artificial",
            "Projeto de Software I e II",
            "Sistemas Operacionais",
            "Padrões de Projeto",
            "e mais...",
          ],
        },
        {
          inst: "UFCG",
          badge: "RESIDÊNCIA TECNOLÓGICA",
          degree: null,
          course: "Residência em Microeletrônica · CI Expert Program",
          period: "2026 — 2027",
          items: [
            "Synopsys Purple Verification",
            "Verificação Funcional de CIs",
            "Design de Sistemas Digitais",
            "Ferramentas EDA Synopsys",
          ],
        },
      ],
    },
    experience: {
      sectionTitle: "> EXPERIÊNCIA",
      sectionMeta: "// LOG DE ATIVIDADES",
      items: [
        {
          date: "2023 → 2024",
          badge: "TRABALHO",
          company: "CAGEPA",
          role: "Assistente de TI · Jovem Aprendiz",
          desc: "Suporte técnico, manutenção de infraestrutura, controle de inventário de equipamentos (PCs, periféricos, monitores) e atendimento de chamados. Vivência com Active Directory em ambiente corporativo real.",
        },
      ],
    },
    projects: {
      sectionTitle: "> PROJETOS",
      sectionMeta: "// REPOSITÓRIOS ATIVOS",
      items: [
        {
          status: "ATIVO",
          statusClass: "s-dev",
          name: "IFCONNECTED",
          role: "// Co-desenvolvedor · Frontend & Integração de API",
          desc: "Rede social acadêmica para estudantes do IFPB. Feed regional por geolocalização (PostGIS), JWT, portfólio integrado e módulo de vagas empresariais.",
          tags: ["Spring Boot", "Next.js", "PostGIS", "MongoDB", "Redis", "MinIO"],
          github: "https://github.com/euAllanDev/IFConnected-front",
          wide: false,
        },
        {
          status: "ATIVO",
          statusClass: "s-dev",
          name: "HUBFY",
          role: "// Desenvolvedor Solo · Mobile",
          desc: "App mobile que centraliza todos os Pull Requests pendentes dos seus repositórios GitHub em um único painel.",
          tags: ["React Native", "TypeScript", "GitHub API"],
          github: null,
          wide: false,
        },
        {
          status: "PLANEJADO",
          statusClass: "s-plan",
          name: "SISTEMA DE INVENTÁRIO DE TI",
          role: "// Idealizador & Desenvolvedor · Baseado em experiência real na CAGEPA",
          desc: "Sistema corporativo para gestão de inventário de equipamentos, atendimento de chamados, geração de notas fiscais e integração com Active Directory.",
          tags: ["Next.js", "Spring Boot", "PostgreSQL", "Active Directory", "TypeScript", "Docker"],
          github: null,
          wide: true,
        },
      ],
    },
    skills: {
      sectionTitle: "> SKILLS",
      sectionMeta: "// STACK TÉCNICO",
      groups: [
        { label: "FRONTEND", chips: ["Next.js", "React", "TypeScript", "Tailwind CSS", "React Native"] },
        { label: "BACKEND", chips: ["Spring Boot", "Spring Security", "JWT", "REST API"] },
        { label: "BANCO DE DADOS", chips: ["PostgreSQL", "MongoDB", "Redis", "PostGIS", "Liquibase"] },
        { label: "CLOUD & IA", chips: ["Huawei Cloud", "Docker", "Python", "ML Basics"] },
        { label: "MICROELETRÔNICA", chips: ["SystemVerilog", "Synopsys Tools", "Verificação Func.", "CI Design"] },
        { label: "FERRAMENTAS", chips: ["Git", "GitHub", "Linux", "MinIO", "Swagger/OpenAPI"] },
      ],
    },
    footer: "PARAÍBA, BR · github.com/paulogx77 · 2026",
  },
};
