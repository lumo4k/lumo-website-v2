"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  getWhatsAppUrl,
  hasWhatsApp,
  getWhatsAppDisplayNumber,
} from "@/lib/whatsapp";
export function Contact() {
  const [status, setStatus] = useState("");
  const [draft, setDraft] = useState("");
  const [url, setUrl] = useState("");
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = `Olá! Vim pelo seu site.\n\nMeu nome: ${data.get("name")}\nEmpresa: ${data.get("company") || "Não informado"}\nWhatsApp: ${data.get("phone")}\nProjeto: ${data.get("project")}\nOrçamento: ${data.get("budget")}\nPrazo: ${data.get("deadline")}\n\n${data.get("message") || "Gostaria de conversar sobre o projeto."}`;
    if (!hasWhatsApp()) {
      setDraft(message);
      setStatus(
        "O contato direto ainda está em configuração. Seu resumo está pronto abaixo para copiar.",
      );
      return;
    }
    const target = getWhatsAppUrl(message);
    setUrl(target);
    window.open(target, "_blank", "noopener,noreferrer");
    setStatus(
      "Seu resumo está pronto no WhatsApp. Revise a mensagem e toque em enviar para concluir o contato.",
    );
  }
  return (
    <section id="contato" className="section container contact-section">
      <div>
        <SectionHeading number="16" label="O primeiro passo é uma conversa">
          Me conta o que
          <br />
          <span className="accent">você tem em mente.</span>
        </SectionHeading>
        <p className="body-copy">
          Pode ser uma ideia bem definida ou só a vontade de melhorar. Vamos
          entender o que faz sentido para o seu negócio.
        </p>
        {hasWhatsApp() && (
          <a
            className="text-link mt-6"
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp: {getWhatsAppDisplayNumber()} <ArrowUpRight size={18} />
          </a>
        )}
        <p className="small-note">
          O formulário prepara uma mensagem para o WhatsApp. Nada é enviado
          automaticamente e seus dados não são armazenados neste site.
        </p>
      </div>
      <form onSubmit={submit} className="lead-form">
        <div className="form-grid">
          <label>
            Seu nome <span>*</span>
            <input
              autoComplete="name"
              name="name"
              required
              maxLength={100}
              placeholder="Como posso te chamar?"
            />
          </label>
          <label>
            Empresa
            <input
              autoComplete="organization"
              name="company"
              maxLength={120}
              placeholder="Nome do seu negócio"
            />
          </label>
          <label>
            Seu WhatsApp <span>*</span>
            <input
              type="tel"
              autoComplete="tel"
              name="phone"
              required
              minLength={8}
              maxLength={24}
              pattern="[+0-9 ()-]{8,24}"
              placeholder="DDD + número"
            />
          </label>
          <label>
            Tipo de projeto
            <select name="project" defaultValue="Landing Page">
              {[
                "Landing Page",
                "Site institucional",
                "Perfil da Empresa no Google",
                "Site + Google",
                "Outro",
              ].map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </label>
          <label>
            Investimento aproximado
            <select name="budget" defaultValue="Ainda não sei">
              {[
                "Até R$ 500",
                "R$ 500–1.000",
                "R$ 1.000–2.000",
                "R$ 2.000+",
                "Ainda não sei",
              ].map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </label>
          <label>
            Prazo desejado
            <select name="deadline" defaultValue="Sem urgência">
              {["Sem urgência", "30 dias", "15 dias", "7 dias", "Urgente"].map(
                (t) => (
                  <option key={t}>{t}</option>
                ),
              )}
            </select>
          </label>
        </div>
        <label>
          Um pouco sobre o projeto
          <textarea
            name="message"
            rows={4}
            maxLength={2000}
            placeholder="O que você oferece? O que gostaria de melhorar?"
          />
        </label>
        <p className="small-note">
          Prazos são avaliados conforme escopo e disponibilidade. Urgências
          aceitas: pagamento integral antecipado.
        </p>
        <button type="submit" className="button">
          Preparar conversa no WhatsApp
          <ArrowUpRight size={18} />
        </button>
        <p role="status" className="form-status">
          {status}
        </p>
        {url && (
          <a
            className="text-link"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir WhatsApp novamente ↗
          </a>
        )}
        {draft && (
          <label>
            Resumo do projeto
            <textarea readOnly value={draft} rows={9} />
            <button
              type="button"
              className="button button-secondary"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(draft);
                  setStatus("Resumo copiado.");
                } catch {
                  setStatus("Selecione o texto do resumo para copiar.");
                }
              }}
            >
              Copiar resumo
            </button>
          </label>
        )}
      </form>
    </section>
  );
}
