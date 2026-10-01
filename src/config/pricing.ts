export const plans = [
  {
    name: "Landing Page Start",
    price: 497,
    featured: true,
    startingAt: false,
    tag: "Mais acessível",
    description: "Uma oferta. Uma página. Um caminho claro para o contato.",
    features: [
      "Até 8 seções em uma landing page",
      "Design responsivo + WhatsApp + links sociais",
      "Formulário ou CTA de contato",
      "SEO técnico, metadata e performance",
      "Publicação + 1 rodada de ajustes",
    ],
    message: "Quero minha Landing Page Start de R$ 497.",
  },
  {
    name: "Site Essencial",
    price: 997,
    featured: false,
    startingAt: true,
    tag: "Sua empresa, bem apresentada",
    description:
      "O essencial para explicar seu trabalho e receber novos contatos.",
    features: [
      "Até 3 páginas institucionais",
      "Sobre, serviços e contato conforme escopo",
      "WhatsApp + formulário",
      "Responsividade + SEO básico",
      "Publicação e entrega organizada",
    ],
    message: "Quero conversar sobre o Site Essencial.",
  },
  {
    name: "Site Profissional",
    price: 1497,
    featured: false,
    startingAt: true,
    tag: "Mais espaço para o seu negócio",
    description:
      "Uma presença completa, com design e estrutura personalizados.",
    features: [
      "Até 5 páginas personalizadas",
      "Animações e páginas de serviços",
      "Formulário + Maps + WhatsApp",
      "SEO técnico + performance",
      "Estrutura preparada para Analytics",
    ],
    message: "Quero conversar sobre o Site Profissional.",
  },
  {
    name: "Presença Local",
    price: 697,
    featured: false,
    startingAt: true,
    tag: "Perfil da Empresa no Google",
    description:
      "Informações organizadas para quem procura sua empresa na região.",
    features: [
      "Análise, configuração e organização do perfil",
      "Categorias, descrição e serviços",
      "Horários, contato, site e localização",
      "Fotos fornecidas pelo cliente",
      "Orientação sobre avaliações",
    ],
    message: "Quero organizar meu Perfil da Empresa no Google.",
  },
  {
    name: "Presença Digital Completa",
    price: 1697,
    featured: false,
    startingAt: true,
    tag: "Site + Google + WhatsApp",
    description: "Uma presença coerente, da descoberta ao primeiro contato.",
    features: [
      "Site institucional conforme escopo",
      "Perfil da Empresa no Google, se elegível",
      "Integração com WhatsApp",
      "SEO técnico e presença local",
      "Preparação de Search Console e Analytics",
    ],
    message: "Quero minha Presença Digital Completa.",
  },
];
export const formatPrice = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);
