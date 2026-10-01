import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
export const metadata = { title: "Privacidade" };
export default function Privacy() {
  return (
    <main id="conteudo" className="container legal-page">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-link">
          ← Voltar ao site
        </Link>
        <ThemeToggle />
      </div>
      <p className="eyebrow">PRIVACIDADE</p>
      <h1>
        Uma conversa
        <br />
        com transparência.
      </h1>
      <p>
        Este site não utiliza analytics, pixels de publicidade ou cookies de
        rastreamento não essenciais nesta versão.
      </p>
      <h2>Formulário de contato</h2>
      <p>
        Os dados preenchidos são usados no seu navegador para montar uma
        mensagem. O site não armazena esses dados em banco de dados nem os envia
        automaticamente. Você decide enviar a mensagem no WhatsApp, sujeito às
        políticas da plataforma.
      </p>
      <h2>Hospedagem e serviços</h2>
      <p>
        O provedor de hospedagem pode processar registros técnicos, como IP e
        informações de acesso, para operar e proteger o serviço. Caso
        ferramentas de análise sejam adicionadas, esta página deverá ser
        atualizada e o consentimento avaliado quando aplicável.
      </p>
      <h2>Contato</h2>
      <p>
        Para conversar sobre o uso de dados compartilhados em um projeto,
        utilize o canal de contato disponível na página inicial.
      </p>
    </main>
  );
}
