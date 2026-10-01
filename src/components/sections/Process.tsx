import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";
export function Process() {
  const steps = [
    [
      "Conversa",
      "Entendo seu negócio, seu público e o que o site precisa resolver.",
    ],
    ["Escopo", "Definimos páginas, funcionalidades, conteúdo, prazo e valor."],
    ["Contrato", "Formalizamos o combinado para proteger os dois lados."],
    [
      "Início",
      `${siteConfig.payment.upfrontPercentage}% para reservar a agenda e começar o projeto.`,
    ],
    [
      "Desenvolvimento",
      "Design, implementação e atenção à experiência em cada tela.",
    ],
    [
      "Revisão",
      "Você revisa e alinhamos os ajustes dentro do escopo contratado.",
    ],
    [
      "Pagamento final",
      `${100 - siteConfig.payment.upfrontPercentage}% restantes nas condições acordadas, antes ou conforme a entrega/publicação.`,
    ],
    [
      "Publicação",
      "Site no ar, entrega documentada e orientações para os próximos passos.",
    ],
  ];
  return (
    <section id="processo" className="section process-section">
      <div className="container">
        <SectionHeading number="11" label="Um caminho claro">
          Você acompanha.
          <br />
          <span className="muted">A gente constrói.</span>
        </SectionHeading>
        <div className="process-grid">
          {steps.map(([title, text], i) => (
            <div className="process-step" key={title} data-reveal>
              <span className="process-number">0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
