import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/config/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
export function Portfolio() {
  return (
    <>
      <section className="portfolio" id="projetos">
        <div className="container portfolio-heading">
          <SectionHeading number="04" label="Projetos selecionados">
            Feitos para serem usados.
            <br />
            <span className="muted">Não apenas vistos.</span>
          </SectionHeading>
          <p className="small-note">
            Estudos autorais de design e desenvolvimento.
            <br />
            Projetos conceituais, sem vínculo com clientes reais.
          </p>
        </div>
        <div className="project-track">
          {projects.map((p, i) => (
            <article className="project-card" key={p.slug}>
              <Link href={p.url} className="project-image">
                <div className="browser-bar">
                  <span>● ● ●</span>
                  <span>{p.title.toLowerCase()} / conceito</span>
                  <ArrowUpRight size={13} />
                </div>
                <div className="project-visual">
                  <Image
                    src={p.image}
                    alt={`Ambiente de referência para o projeto conceitual ${p.title}`}
                    fill
                    sizes="(max-width: 767px) 90vw, 70vw"
                  />
                  <div className="project-overlay">
                    <span className="eyebrow">{p.category}</span>
                    <h3>{p.headline}</h3>
                    <span className="mock-cta">Conheça o espaço ↗</span>
                  </div>
                  <span className="project-view">
                    Ver conceito <ArrowUpRight size={18} />
                  </span>
                </div>
              </Link>
              <div className="project-info">
                <span className="project-number">0{i + 1}</span>
                <div>
                  <h3>
                    <Link href={p.url}>{p.title}</Link>
                  </h3>
                  <p>{p.description}</p>
                  <div className="project-tags">
                    <span>Projeto autoral</span>
                    {p.technologies.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
                <span className="eyebrow">{p.year}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
      <div className="container portfolio-outro">
        <p>Imagine esse cuidado aplicado ao seu negócio.</p>
        <Button>Vamos construir o seu</Button>
      </div>
    </>
  );
}
