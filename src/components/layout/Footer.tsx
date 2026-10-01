import Link from "next/link";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";
export function Footer() {
  return (
    <>
      <footer className="container footer">
        <Link className="wordmark" href="/">
          {siteConfig.brand}
          <span>®</span>
        </Link>
        <p>
          Design e desenvolvimento por {siteConfig.name || siteConfig.brand}.
          <br />© {new Date().getFullYear()} · Feito com intenção.
        </p>
        <div className="footer-links">
          <a href={getWhatsAppUrl()}>WhatsApp ↗</a>
          {(["instagram", "github", "linkedin"] as const).map(
            (key) =>
              siteConfig[key] && (
                <a
                  href={siteConfig[key]}
                  key={key}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {key} ↗
                </a>
              ),
          )}
          <a href="/privacidade">Privacidade</a>
        </div>
      </footer>
      <a className="mobile-cta" href={getWhatsAppUrl()}>
        Vamos falar do seu site <span>↗</span>
      </a>
    </>
  );
}
