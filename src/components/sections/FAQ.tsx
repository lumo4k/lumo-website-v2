import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";
import { plans, formatPrice } from "@/config/pricing";
export function FAQ() {
  const questions = [
    [
      "Quanto custa um site?",
      `A Landing Page Start tem preço inicial de ${formatPrice(plans[0].price)}. Sites institucionais começam em ${formatPrice(plans[1].price)}. O valor final depende das páginas, funcionalidades e conteúdo definidos no escopo.`,
    ],
    [
      "Quanto tempo demora?",
      "O prazo é definido depois de entender o escopo e a disponibilidade. Entrega de conteúdo, aprovações e integrações também influenciam o cronograma. Tudo fica registrado antes do início.",
    ],
    [
      "Preciso ter domínio?",
      "Para publicar com um endereço próprio, sim. Posso orientar a escolha e a configuração. Registro e renovação do domínio são custos separados.",
    ],
    [
      "Você cria os textos?",
      "Organizo os textos fornecidos e ajusto a clareza da apresentação. Copywriting completo é um serviço separado e precisa estar previsto no escopo.",
    ],
    [
      "Posso alterar o site depois?",
      "Sim. Alterações podem ser contratadas avulsamente ou por um plano de manutenção. Um painel de edição não está automaticamente incluído: depende do projeto.",
    ],
    [
      "Funciona no celular?",
      "Sim. Todos os planos de site incluem design responsivo, com atenção à navegação, leitura e contato no celular.",
    ],
    [
      "Você configura Google Meu Negócio?",
      "Sim, o nome atual é Perfil da Empresa no Google. O trabalho inclui configuração e organização para negócios elegíveis. A ferramenta do Google é gratuita; o valor é pelo serviço. Verificação depende do Google e não há garantia de ranking.",
    ],
    [
      "Como funciona o pagamento?",
      `${siteConfig.payment.upfrontPercentage}% para iniciar e ${100 - siteConfig.payment.upfrontPercentage}% restantes conforme as condições do contrato, antes ou conforme a entrega/publicação acordada.`,
    ],
    [
      "Existe contrato?",
      "Sim. Escopo, prazo, valores, responsabilidades e revisões ficam documentados. O contrato traz previsibilidade e protege ambas as partes.",
    ],
    [
      "Você aceita projetos urgentes?",
      `Conforme disponibilidade e com escopo definido. Projetos urgentes aceitos trabalham com ${siteConfig.payment.rushUpfrontPercentage}% antecipado. O prazo precisa ser viável e confirmado antes.`,
    ],
    [
      "Posso pagar tudo antecipado?",
      "Sim. O pagamento integral antecipado pode ser combinado e registrado no contrato, mesmo em projetos sem urgência.",
    ],
  ];
  return (
    <section className="section container faq-section">
      <SectionHeading number="15" label="Sem dúvida antes de começar">
        Vamos deixar
        <br />
        <span className="muted">tudo claro.</span>
      </SectionHeading>
      <div className="faq-list">
        {questions.map(([q, a], i) => (
          <details key={q}>
            <summary>
              <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
              <h3>{q}</h3>
              <span className="faq-plus" aria-hidden="true">
                +
              </span>
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
