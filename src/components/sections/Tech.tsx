import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
export function Tech() {
  return (
    <section className="section container">
      <SectionHeading number="12" label="A base também importa">
        Por baixo do design,
        <br />
        <span className="muted">existe engenharia.</span>
      </SectionHeading>
      <div className="tech-layout">
        <p className="body-copy">
          Bonito não basta. A construção precisa considerar carregamento,
          acessibilidade, busca e uma experiência que funciona de verdade no
          celular.
        </p>
        <div className="tech-tags">
          {siteConfig.technologies.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
      <div className="engineering">
        {[
          [
            "Performance",
            "Imagens dimensionadas, carregamento sob demanda e animações com cuidado.",
          ],
          [
            "Acessibilidade",
            "HTML semântico, contraste, navegação por teclado e movimento reduzido.",
          ],
          [
            "SEO técnico",
            "Metadata, sitemap, robots e dados estruturados como ponto de partida.",
          ],
        ].map(([t, d]) => (
          <div key={t}>
            <span className="status-dot" />
            <h3>{t}</h3>
            <p>{d}</p>
          </div>
        ))}
      </div>
      <p className="small-note">
        Sem notas de performance inventadas. Métricas dependem do conteúdo final
        e devem ser medidas após a publicação.
      </p>
    </section>
  );
}
