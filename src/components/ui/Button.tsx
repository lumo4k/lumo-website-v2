import { ArrowUpRight } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
export function Button({
  children = "Quero meu site",
  href,
  message,
  secondary = false,
}: {
  children?: React.ReactNode;
  href?: string;
  message?: string;
  secondary?: boolean;
}) {
  const target = href || getWhatsAppUrl(message);
  return (
    <a
      className={`button ${secondary ? "button-secondary" : ""}`}
      href={target}
      {...(target.startsWith("https://wa.me")
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
      <ArrowUpRight size={18} strokeWidth={1.5} />
    </a>
  );
}
