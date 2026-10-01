import { Button } from "@/components/ui/Button";
export function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container">
        <p className="eyebrow">SEU NEGÓCIO / SEU PRÓXIMO CAPÍTULO</p>
        <h2 data-reveal>
          Seu próximo cliente
          <br />
          vai te pesquisar.
          <br />
          <span>Vamos receber bem?</span>
        </h2>
        <div className="final-bottom">
          <p>
            Uma presença que mostra seu valor.
            <br />E facilita a próxima conversa.
          </p>
          <Button>Quero começar meu site</Button>
          <a className="text-link" href="#contato">
            Contar minha ideia ↗
          </a>
        </div>
      </div>
    </section>
  );
}
