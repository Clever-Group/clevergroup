// Conteúdo textual do site centralizado aqui. Antes ficava espalhado (e
// duplicado) direto no JSX de cada seção — qualquer alteração de texto ou
// link exigia caçar a string certa em Landingpage.jsx.

export const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
  { label: "Suporte", href: "#contato" },
];

export const CONTACT_INFO = {
  email: "clevergroupcontato@gmail.com",
  phone: "(00) 00000-0000",
  instagram: "clevergroup_",
  instagramUrl: "https://instagram.com/clevergroup_",
};

export const FOOTER_CONTENT = {
  tagline: "Soluções digitais sob medida para o seu nicho.",
  navLabel: "Navegação",
  contactLabel: "Contato",
};

export const HERO_CONTENT = {
  eyebrow: "Tecnologia sob medida para o seu nicho",
  titleLines: ["Do seu nicho,", "para o seu sucesso."],
  subtitle: "Estratégia, design e desenvolvimento num só lugar, do briefing ao lançamento.",
  cta: "Venha nos conhecer",
  secondaryCta: "Fale com a gente",
};

export const FEATURES_CONTENT = {
  eyebrow: "O que você recebe",
  title: "Tudo que o seu negócio precisa pra crescer online",
  items: [
    {
      icon: "responsive",
      title: "Design responsivo",
      description: "Perfeito em qualquer tela, do celular ao desktop.",
    },
    {
      icon: "performance",
      title: "Performance",
      description: "Sites rápidos, pensados pra converter visitante em cliente.",
    },
    {
      icon: "seo",
      title: "SEO otimizado",
      description: "Construído desde o início pra ser encontrado no Google.",
    },
    {
      icon: "security",
      title: "Segurança",
      description: "Boas práticas de segurança aplicadas desde o primeiro dia.",
    },
    {
      icon: "support",
      title: "Suporte contínuo",
      description: "Acompanhamento real depois que o site vai pro ar.",
    },
    {
      icon: "control",
      title: "Painel simples",
      description: "Você no controle do conteúdo, sem depender de ninguém.",
    },
  ],
};

// Copy de partida (edite pra sua realidade) — assim como o Lorem Ipsum
// acima, o texto de cada etapa é só um placeholder de tom, não uma
// descrição final do processo da CleverGroup.
export const PROCESS_CONTENT = {
  eyebrow: "Como trabalhamos",
  title: "Da ideia ao lançamento",
  steps: [
    {
      icon: "discovery",
      label: "01",
      title: "Descoberta",
      description:
        "Entendemos o seu nicho, seu público e o que faz o seu negócio diferente.",
    },
    {
      icon: "design",
      label: "02",
      title: "Design",
      description:
        "Criamos uma identidade visual que comunica antes mesmo de alguém ler uma linha.",
    },
    {
      icon: "tech",
      label: "03",
      title: "Desenvolvimento",
      description:
        "Construímos o produto com tecnologia moderna, rápida e fácil de manter.",
    },
    {
      icon: "launch",
      label: "04",
      title: "Lançamento",
      description:
        "Colocamos no ar e acompanhamos os primeiros passos do seu negócio online.",
    },
  ],
};

export const WHY_CONTENT = {
  eyebrow: "Diferenciais",
  title: "Por que a CleverGroup?",
  bullets: [
    "Time enxuto e decisões rápidas — sem burocracia de agência grande.",
    "Cada projeto nasce do seu nicho, não de um modelo pronto.",
    "Acompanhamento direto do início ao lançamento.",
  ],
};

export const CONTACT_FORM_CONTENT = {
  title: "Nos conte sua ideia, seu negócio começa aqui.",
  paragraph:
    "Preencha o formulário com um pouco sobre o seu negócio e o que você precisa.",
  fields: {
    name: { label: "Nome completo", placeholder: "Como podemos te chamar?" },
    email: { label: "E-mail", placeholder: "voce@empresa.com" },
    message: { label: "Sua ideia", placeholder: "Conte um pouco sobre o seu negócio" },
  },
  submitCta: "Enviar mensagem",
  successMessage: "Recebemos sua mensagem! Em breve entraremos em contato.",
};
