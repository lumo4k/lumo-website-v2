import Image from "next/image";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
export function About() {
  return (
    <section className="section container about-section">
      <div className="about-photo">
        <Image
          src="/Eu.png"
          alt="O desenvolvedor por trás do seu projeto"
          fill
          sizes="(max-width: 767px) 90vw, 35vw"
        />
        <span>UMA PESSOA. ENVOLVIMENTO DE VERDADE.</span>
      </div>
      <div>
        <SectionHeading number="09" label="Quem vai construir com você">
          Você não está
          <br />
          comprando código.
        </SectionHeading>
        <p className="large-copy">
          Está investindo na forma como as pessoas enxergam e encontram seu
          negócio.
        </p>
        <p className="body-copy">
          {siteConfig.name ? `Sou ${siteConfig.name}. ` : ""}Uno
          desenvolvimento, design e atenção à experiência para criar sites que
          fazem sentido para quem usa e para quem contrata.
        </p>
        <p className="body-copy">
          Gosto de alinhar expectativas, explicar decisões e cuidar dos
          detalhes. Um bom resultado começa em uma conversa e continua até uma
          entrega organizada.
        </p>
        <div className="signature">
          {siteConfig.name || siteConfig.brand}
          <span>Design + desenvolvimento + presença digital</span>
        </div>
      </div>
    </section>
  );
}
export function WhyMe() {
  const items = [
    [
      "Comunicação",
      "Atualizações claras, espaço para perguntas e decisões alinhadas.",
    ],
    [
      "Organização",
      "Escopo, responsabilidades e etapas definidos antes de começar.",
    ],
    ["Design", "Hierarquia, identidade visual aplicada e atenção a cada tela."],
    [
      "Desenvolvimento",
      "Código moderno, manutenção possível e performance em mente.",
    ],
    [
      "Responsividade",
      "Contato e navegação fáceis no celular, tablet e desktop.",
    ],
    [
      "Transparência",
      "Você sabe o que está incluído, o que precisa fornecer e o que será entregue.",
    ],
  ];
  return (
    <section className="section container">
      <SectionHeading number="10" label="A experiência de trabalhar juntos">
        Mais do que
        <br />
        <span className="muted">entregar arquivos.</span>
      </SectionHeading>
      <div className="qualities">
        {items.map(([title, text], i) => (
          <div key={title} data-reveal>
            <span className="eyebrow">0{i + 1}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
      <div className="relationship">
        <h3>
          Projeto bom começa antes
          <br />
          da primeira linha de código.
        </h3>
        <p>
          Antes, alinhamento. Durante, comunicação. Depois, entrega organizada.
          Respeito, acompanhamento e clareza fazem parte do trabalho.
        </p>
      </div>
    </section>
  );
}
