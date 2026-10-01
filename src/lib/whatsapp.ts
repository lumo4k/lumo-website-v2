import { siteConfig } from "@/config/site";
export function getWhatsAppUrl(
  message = "Olá! Vim pelo seu site e quero conversar sobre um projeto.",
) {
  const number = siteConfig.whatsappNumber.replace(/\D/g, "");
  return /^\d{10,15}$/.test(number)
    ? `https://wa.me/${number}?text=${encodeURIComponent(message)}`
    : "#contato";
}
export const hasWhatsApp = () => getWhatsAppUrl().startsWith("https://");
export function getWhatsAppDisplayNumber() {
  const number = siteConfig.whatsappNumber.replace(/\D/g, "");
  return number.replace(/^55(\d{2})(\d{5})(\d{4})$/, "+55 ($1) $2-$3");
}
