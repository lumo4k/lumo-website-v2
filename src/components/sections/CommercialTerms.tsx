import { ShieldCheck, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";
export function CommercialTerms() {
  return (
    <section className="section container">
      <p className="eyebrow">14 / COMBINADO DESDE O COMEÇO</p>
      <div className="terms-grid">
        <div>
          <ShieldCheck size={32} strokeWidth={1} />
          <h2>
            Sem surpresa
            <br />
            no meio do caminho.
          </h2>
          <p>
            Escopo definido. Prazo acordado. Entrega documentada. Todo projeto
            tem contrato com valor, responsabilidades e condições claras:
            segurança para você e para mim.
          </p>
          <p>
            <strong>
              {siteConfig.payment.upfrontPercentage}% para iniciar.
            </strong>{" "}
            O restante segue o contrato, antes ou conforme a entrega e
            publicação acordadas.
          </p>
        </div>
        <div>
          <Clock size={32} strokeWidth={1} />
          <h3>Precisa para ontem?</h3>
          <p>
            Urgências dependem da disponibilidade e de um escopo viável. Quando
            aceitas, exigem reorganização da agenda e pagamento de{" "}
            <strong>
              {siteConfig.payment.rushUpfrontPercentage}% antecipado.
            </strong>
          </p>
          <p>
            O prazo é confirmado antes da contratação. Você também pode optar
            pelo pagamento integral antecipado em projetos sem urgência.
          </p>
        </div>
      </div>
      <div className="hosting-note">
        <span className="eyebrow">DOMÍNIO & HOSPEDAGEM</span>
        <p>
          O domínio fica separado. A hospedagem depende da solução e do uso
          comercial; Vercel pode ser utilizada com um plano adequado. Custos
          recorrentes são alinhados antes da contratação, sem promessa de
          gratuidade permanente.
        </p>
      </div>
    </section>
  );
}
