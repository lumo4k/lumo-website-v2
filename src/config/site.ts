export const siteConfig = {
  brand: "lumo",
  name: process.env.NEXT_PUBLIC_OWNER_NAME || "", // TODO: nome público
  role: "Desenvolvimento web & design",
  url: process.env.NEXT_PUBLIC_SITE_URL || "",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5511963023011",
  email: "",
  instagram: "",
  github: "",
  linkedin: "",
  availability: true,
  payment: { upfrontPercentage: 50, rushUpfrontPercentage: 100 },
  maintenance: {
    price: 149,
    description:
      "Pequenas alterações, atualizações de conteúdo, monitoramento básico e suporte. Limites e frequência definidos em contrato.",
  },
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "JavaScript",
    "Node.js",
    "PHP",
    "Git",
    "GitHub",
    "Vercel",
  ],
};
