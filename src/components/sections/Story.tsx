import {
  ArrowUpRight,
  Globe,
  Search,
  MessageCircle,
  Instagram,
  Check,
  Smartphone,
  Monitor,
  Tablet,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
export function Problem() {
  return (
    <section id="problema" className="section container">
      <SectionHeading number="01" label="Antes do primeiro contato">
        Seu cliente te procura.
        <br />
        <span className="muted">O que ele encontra?</span>
      </SectionHeading>
      <div className="offset-copy">
        <p className="large-copy">
          Antes de mandar uma mensagem, ele pesquisa, compara e tenta entender
          se sua empresa é a escolha certa.
        </p>
        <p>
          Serviços claros. Endereço atualizado. Um site que funciona no celular.
          Um botão de contato fácil de encontrar. São detalhes que ajudam uma
          pessoa a dar o próximo passo com confiança.
        </p>
        <a className="text-link" href="#contato">
          Vamos olhar para sua presença digital <ArrowUpRight size={18} />
        </a>
      </div>
      <div className="question-strip">
        <span>Você aparece na busca?</span>
        <span>Seu serviço é fácil de entender?</span>
        <span>O contato está a um toque?</span>
      </div>
    </section>
  );
}
export function DigitalPresence() {
  return (
    <section className="section presence-section">
      <div className="container grid editorial-grid">
        <div>
          <SectionHeading number="02" label="Canais conectados">
            Instagram é uma porta.
            <br />
            <span className="accent">Seu site é sua casa.</span>
          </SectionHeading>
          <p className="body-copy">
            O Instagram aproxima. O Google ajuda na descoberta. Seu site
            organiza a história, os serviços e o caminho para o contato. Eles
            trabalham melhor juntos.
          </p>
          <p className="small-note">
            Um endereço próprio. Conteúdo sob seu controle. Menos dependência de
            um único canal.
          </p>
        </div>
        <div className="journey">
          <div className="journey-line" />
          <div className="journey-entry">
            <span>
              <Search size={18} /> Google
            </span>
            <span>
              <Instagram size={18} /> Instagram
            </span>
          </div>
          <div className="journey-node">
            <span className="eyebrow">01 / DESCOBERTA</span>
            <span>As pessoas chegam.</span>
          </div>
          <div className="journey-node journey-main">
            <Globe size={30} strokeWidth={1} />
            <strong>Seu site.</strong>
            <span>02 / CLAREZA + CONFIANÇA</span>
          </div>
          <div className="journey-node">
            <span className="eyebrow">03 / CONTATO</span>
            <strong>
              <MessageCircle size={22} /> Vamos conversar?
            </strong>
            <span>WhatsApp, no momento certo.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
export function WebsiteValue() {
  return (
    <section className="section container">
      <div className="grid editorial-grid">
        <SectionHeading number="03" label="Um ativo do seu negócio">
          Seu site trabalha.
          <br />
          <span className="muted">
            Mesmo quando
            <br />
            você descansa.
          </span>
        </SectionHeading>
        <div className="value-list">
          {[
            "Apresenta sua empresa com clareza",
            "Explica serviços e responde dúvidas",
            "Organiza seu portfólio e suas informações",
            "Recebe visitas e facilita o contato",
          ].map((s, i) => (
            <div key={s}>
              <span className="eyebrow">0{i + 1}</span>
              <p>{s}</p>
              <Check size={18} />
            </div>
          ))}
          <p className="small-note">
            Estar disponível é uma base. Resultados dependem também da oferta,
            do conteúdo e da divulgação.
          </p>
        </div>
      </div>
      <div className="clock">
        <div className="clock-line" />
        <div>
          {["00:00", "06:00", "12:00", "18:00", "24:00"].map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <p>
          <span className="status-dot" /> Sua presença, online o tempo inteiro.
        </p>
      </div>
    </section>
  );
}
export function ValueComparison() {
  return (
    <section className="section container">
      <SectionHeading number="05" label="O cuidado faz diferença">
        Uma página na internet?
        <br />
        <span className="muted">Dá para entregar muito mais.</span>
      </SectionHeading>
      <div className="comparison-grid">
        <div>
          <p className="eyebrow">Quando falta direção</p>
          {[
            "Informações espalhadas",
            "Mobile tratado como adaptação",
            "Visual sem consistência",
            "Contato difícil de encontrar",
          ].map((t) => (
            <p key={t} className="comparison-item muted">
              — {t}
            </p>
          ))}
        </div>
        <div>
          <p className="eyebrow accent">Quando existe intenção</p>
          {[
            "Objetivo e hierarquia claros",
            "Experiência pensada para o celular",
            "Design coerente com a empresa",
            "Velocidade e caminho para contato",
          ].map((t) => (
            <p key={t} className="comparison-item">
              <Check size={18} /> {t}
            </p>
          ))}
        </div>
      </div>
      <div className="value-equation">
        Estratégia <span>+</span> Design <span>+</span> Desenvolvimento{" "}
        <span>+</span> Mobile <span>+</span> SEO <span>+</span> Publicação{" "}
        <ArrowUpRight />
        <strong>Presença digital.</strong>
      </div>
    </section>
  );
}
export function ResponsiveDemo() {
  return (
    <section className="section responsive-section">
      <div className="container">
        <SectionHeading number="07" label="Em qualquer tela">
          Seu cliente não precisa
          <br />
          estar no computador.
        </SectionHeading>
        <div
          className="devices"
          aria-label="Demonstração de layout adaptado a desktop, tablet e celular"
        >
          {[
            { type: "desktop", Icon: Monitor },
            { type: "tablet", Icon: Tablet },
            { type: "phone", Icon: Smartphone },
          ].map(({ type, Icon }) => (
            <div className={`device ${type}`} data-reveal key={type}>
              <div className="device-toolbar">
                <Icon size={14} />
                <span>forma / arquitetura</span>
                <span>↗</span>
              </div>
              <div className="device-art">
                <span>
                  Espaços para
                  <br />
                  viver. E sentir.
                </span>
                <div className="architecture-art" />
              </div>
              <div className="device-caption">Design que se adapta à vida.</div>
            </div>
          ))}
        </div>
        <p className="small-note">
          Hierarquia, navegação e contato ajustados para cada tela.
          Responsividade vai além de diminuir o tamanho.
        </p>
        <Button>Quero aparecer profissionalmente</Button>
      </div>
    </section>
  );
}
