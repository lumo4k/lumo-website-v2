import fs from "node:fs";
import vm from "node:vm";
import assert from "node:assert/strict";
import ts from "typescript";
function load(file, require) {
  const code = ts.transpileModule(fs.readFileSync(file, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText;
  const context = { exports: {}, require, Intl, process: { env: {} } };
  vm.runInNewContext(code, context);
  return context.exports;
}
const { plans } = load("src/config/pricing.ts");
const { siteConfig } = load("src/config/site.ts");
assert.equal(plans[0].price, 497);
assert.equal(siteConfig.payment.upfrontPercentage, 50);
assert.equal(siteConfig.payment.rushUpfrontPercentage, 100);
const helper = load("src/lib/whatsapp.ts", () => ({ siteConfig }));
assert.equal(siteConfig.whatsappNumber, "5511963023011");
const message = "Olá! Projeto: Site + Google\nOrçamento: R$ 1.497 & dúvidas?";
const url = new URL(helper.getWhatsAppUrl(message));
assert.equal(url.hostname, "wa.me");
assert.equal(url.pathname, "/5511963023011");
assert.equal(url.searchParams.get("text"), message);
console.log("Preços, pagamento e URL WhatsApp: OK");
