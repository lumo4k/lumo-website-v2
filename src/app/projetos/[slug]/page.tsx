import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/config/projects";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  return {
    title: p ? `${p.title} — Projeto autoral` : "Projeto",
    description: p?.description,
  };
}
export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  if (!p) notFound();
  return (
    <main
      id="conteudo"
      className="concept-page"
      style={{ "--concept-accent": p.accent } as React.CSSProperties}
    >
      <div className="concept-notice">
        <Link href="/#projetos">← Voltar ao portfólio</Link>
        <span>PROJETO AUTORAL / EMPRESA FICTÍCIA</span>
      </div>
      <nav className="concept-nav container" aria-label="Navegação do conceito">
        <strong>{p.title}</strong>
        <div className="header-actions">
          <a href="#conceito">A experiência ↗</a>
          <ThemeToggle />
        </div>
      </nav>
      <section className="concept-hero">
        <Image
          src={p.image}
          alt={`Referência visual de ${p.category}`}
          fill
          priority
          sizes="100vw"
        />
        <div className="container">
          <p className="eyebrow">{p.category}</p>
          <h1>{p.headline}</h1>
          <a className="button" href="#conceito">
            Conheça a proposta ↗
          </a>
        </div>
      </section>
      <section className="section container" id="conceito">
        <p className="eyebrow">DO VISUAL À EXPERIÊNCIA</p>
        <h2>{p.description}</h2>
        <div className="concept-details">
          <div>
            <h3>O objetivo</h3>
            <p>
              Apresentar o negócio com uma linguagem visual coerente, organizar
              informações e facilitar o primeiro contato.
            </p>
          </div>
          <div>
            <h3>O cuidado</h3>
            <p>
              Tipografia, leitura no celular, contraste e um caminho claro para
              agir. Este conceito demonstra direção visual, sem apresentar
              clientes ou resultados fictícios.
            </p>
          </div>
        </div>
        <div className="project-tags">
          {p.technologies.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </section>
      <section className="section container concept-contact">
        <h2>
          Esse cuidado.
          <br />
          No seu negócio.
        </h2>
        <Button
          message={`Gostei do conceito ${p.title} e quero conversar sobre meu site.`}
        >
          Quero um projeto assim
        </Button>
        <Link href="/#contato" className="text-link">
          Contar minha ideia ↗
        </Link>
      </section>
    </main>
  );
}
