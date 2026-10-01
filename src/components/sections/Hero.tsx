import Image from "next/image";
import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { RevealText } from "@/components/ui/RevealText";
import { siteConfig } from "@/config/site";
export function Hero() {
  return (
    <section className="hero container" id="inicio">
      <div className="hero-top eyebrow" data-hero-eyebrow>
        <span className="status-dot" />
        {siteConfig.availability
          ? "Disponível para novos projetos"
          : "Vamos planejar seu próximo projeto"}
        <span className="hero-year">DESIGN & CÓDIGO / 2026</span>
      </div>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-specialty" data-hero-eyebrow>
            Desenvolvimento · Design · Presença digital
          </p>
          <h1>
            <RevealText>{"Seu negócio\nmerece um\nsite à altura."}</RevealText>
          </h1>
          <div className="hero-description" data-hero-detail>
            <p>
              Mais do que estar online.
              <br />
              Um site que apresenta seu valor, inspira confiança e abre caminho
              para novos contatos.
            </p>
            <div className="button-row">
              <Button />
              <Button secondary href="#projetos">
                Ver projetos
              </Button>
            </div>
          </div>
        </div>
        <div className="hero-portrait">
          <div className="portrait-frame" data-hero-image>
            <Image
              src="/Eu.png"
              alt={`Retrato de ${siteConfig.name || "quem está por trás da Lumo"}`}
              fill
              priority
              sizes="(max-width: 767px) 90vw, 40vw"
            />
            <div className="portrait-caption">
              <span>
                DESIGN COM INTENÇÃO.
                <br />
                CÓDIGO COM CUIDADO.
              </span>
              <Sparkles size={24} strokeWidth={1} />
            </div>
          </div>
          <div className="portrait-note" data-hero-detail>
            <span>Um projeto pensado para o seu negócio.</span>
            <span>Do primeiro contato à publicação. ↗</span>
          </div>
        </div>
      </div>
      <div className="hero-bottom" data-hero-detail>
        <a href="#problema">
          <ArrowDown size={15} /> Continue. Seu próximo cliente também vai.
        </a>
        <span>Sites rápidos. Presença clara. Contato fácil.</span>
      </div>
    </section>
  );
}
