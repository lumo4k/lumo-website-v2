import { Check, ArrowUpRight } from "lucide-react";
import { plans, formatPrice } from "@/config/pricing";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
export function Pricing() {
  return (
    <section id="valores" className="section pricing-section">
      <div className="container">
        <SectionHeading number="13" label="Investimento claro">
          Seu próximo passo.
          <br />
          <span className="muted">Com o valor à vista.</span>
        </SectionHeading>
        <p className="body-copy">
          Escolha um ponto de partida. O escopo final, o prazo e as condições
          são definidos juntos, antes de começar.
        </p>
        <div className="pricing-grid">
          {plans.map((p) => (
            <article
              className={`plan ${p.featured ? "plan-featured" : ""}`}
              key={p.name}
            >
              <p className="eyebrow">
                {p.tag}
                <ArrowUpRight size={16} />
              </p>
              <h3>{p.name}</h3>
              <p className="plan-description">{p.description}</p>
              <div className="price">
                <span>
                  {p.startingAt ? "A partir de" : "Preço inicial / promocional"}
                </span>
                <strong>{formatPrice(p.price)}</strong>
                <span>Projeto · pagamento em duas etapas</span>
              </div>
              <ul>
                {p.features.map((f) => (
                  <li key={f}>
                    <Check size={15} />
                    {f}
                  </li>
                ))}
              </ul>
              <Button message={p.message}>
                {p.featured
                  ? "Quero minha landing page"
                  : "Conversar sobre este plano"}
              </Button>
              {p.name === "Presença Local" && (
                <p className="small-note">
                  Sujeito à elegibilidade. Serviço de configuração, sem garantia
                  de ranking.
                </p>
              )}
            </article>
          ))}
        </div>
        <div className="maintenance">
          <div>
            <p className="eyebrow">DEPOIS DA ENTREGA / OPCIONAL</p>
            <h3>Seu site continua cuidado.</h3>
            <p>{siteConfig.maintenance.description}</p>
          </div>
          <div>
            <strong>
              {formatPrice(siteConfig.maintenance.price)}
              <span>/mês</span>
            </strong>
            <a className="text-link" href="#contato">
              Conhecer a manutenção <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
        <p className="small-note">
          Domínio, hospedagem e serviços pagos são separados, salvo contratação
          expressa. Os planos não incluem automaticamente copywriting completo,
          fotografia ou identidade visual completa. Integrações preparadas não
          significam tracking ativo.
        </p>
      </div>
    </section>
  );
}
