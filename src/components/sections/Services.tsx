import { ArrowUpRight, MapPin, Check } from "lucide-react";
import { services } from "@/config/services";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
export function Services() {
  return (
    <section id="servicos" className="section container">
      <SectionHeading number="06" label="Como posso ajudar">
        Do primeiro clique
        <br />
        <span className="muted">ao próximo contato.</span>
      </SectionHeading>
      <div className="services-list">
        {services.map(([n, title, text]) => (
          <a href="#valores" className="service-row" key={n}>
            <span className="eyebrow">{n}</span>
            <h3>{title}</h3>
            <p>{text}</p>
            <ArrowUpRight strokeWidth={1} />
          </a>
        ))}
      </div>
      <div className="section-end">
        <p>
          Não sabe qual formato faz sentido? A gente começa pelo seu objetivo.
        </p>
        <Button>Falar sobre meu projeto</Button>
      </div>
    </section>
  );
}
export function GoogleBusiness() {
  return (
    <section className="section container google-section">
      <div>
        <SectionHeading number="08" label="Presença local">
          Bom de encontrar.
          <br />
          <span className="accent">Fácil de escolher.</span>
        </SectionHeading>
        <p className="large-copy">Seu negócio também precisa ser encontrado.</p>
        <p className="body-copy">
          Para empresas elegíveis, o Perfil da Empresa no Google — antigo Google
          Meu Negócio — ajuda a apresentar informações na Pesquisa Google e no
          Maps.
        </p>
        <p className="body-copy">
          Eu cuido da configuração e organização: categorias, descrição,
          serviços, horários, telefone, site, localização e fotos que você
          fornece. Você também recebe orientação sobre avaliações.
        </p>
        <Button message="Quero organizar minha presença local no Google.">
          Melhorar minha presença local
        </Button>
      </div>
      <div className="google-preview">
        <div className="search-preview">
          <SearchIcon />
          <span>Seu negócio, na sua região</span>
        </div>
        <div className="map-art">
          <span className="map-pin">
            <MapPin size={32} />
          </span>
          <span className="map-label">SUA EMPRESA AQUI</span>
        </div>
        <div className="google-preview-info">
          <p className="eyebrow">SIMULAÇÃO VISUAL / SEM AVALIAÇÕES FICTÍCIAS</p>
          <h3>Informação que ajuda a decidir.</h3>
          {[
            "Horários e endereço organizados",
            "Serviços e contatos atualizados",
            "Site e fotos em um só lugar",
          ].map((t) => (
            <p key={t}>
              <Check size={16} />
              {t}
            </p>
          ))}
        </div>
        <p className="small-note">
          O perfil é uma ferramenta gratuita do Google. O valor do serviço
          corresponde ao trabalho de configuração e otimização. Elegibilidade e
          verificação seguem as regras do Google. Sem promessa de posição no
          ranking.
        </p>
      </div>
    </section>
  );
}
function SearchIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="6" />
      <path d="m15 15 6 6" />
    </svg>
  );
}
