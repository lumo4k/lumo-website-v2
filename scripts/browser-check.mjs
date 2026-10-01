import { chromium } from "@playwright/test";
import fs from "node:fs";
const browser = await chromium.launch({ channel: "msedge", headless: true });
const failures = [];
const widths = [320, 360, 375, 390, 430, 768, 1024, 1280, 1440, 1920];
fs.mkdirSync("test-results", { recursive: true });
for (const reducedMotion of ["no-preference", "reduce"]) {
  const page = await browser.newPage({ reducedMotion });
  page.on("pageerror", (e) => failures.push(`Runtime: ${e.message}`));
  for (const width of widths) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
    await page.waitForTimeout(1200);
    const check = await page.evaluate(() => ({
      overflow: document.documentElement.scrollWidth > innerWidth + 1,
      h1: document.querySelectorAll("h1").length,
      heroImage:
        document.querySelector(".portrait-frame img")?.naturalWidth > 0,
    }));
    if (check.overflow || check.h1 !== 1 || !check.heroImage)
      failures.push(`${width} / ${reducedMotion}: ${JSON.stringify(check)}`);
    if (width === 1440 || width === 390)
      await page.screenshot({
        path: `test-results/home-${width}-${reducedMotion}.png`,
        fullPage: reducedMotion === "reduce",
      });
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(300);
    if (
      await page.evaluate(
        () => document.documentElement.scrollWidth > innerWidth + 1,
      )
    )
      failures.push(`Overflow after scroll: ${width}/${reducedMotion}`);
  }
  if (reducedMotion === "reduce") {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("http://localhost:3000");
    await page.getByRole("button", { name: "Abrir menu" }).click();
    await page
      .locator("#mobile-menu")
      .getByRole("link", { name: "Contato" })
      .click();
    if (await page.locator("#mobile-menu").count())
      failures.push("Menu did not close");
    await page.locator('[name="name"]').fill("Teste de contato");
    await page.locator('[name="phone"]').fill("11999999999");
    await page
      .getByRole("button", { name: "Preparar conversa no WhatsApp" })
      .click();
    await page
      .getByText("Seu resumo está pronto no WhatsApp.", {
        exact: false,
      })
      .waitFor();
    await page.locator(".faq-list summary").first().click();
    if (
      !(
        (await page
          .locator(".faq-list details")
          .first()
          .getAttribute("open")) !== null
      )
    )
      failures.push("FAQ not open");
  }
  await page.close();
}
const page = await browser.newPage();
for (const slug of ["terra", "forma", "clara", "brisa"]) {
  await page.goto(`http://localhost:3000/projetos/${slug}`, {
    waitUntil: "networkidle",
  });
  if (
    !(await page
      .locator(".concept-hero img")
      .evaluate((img) => img.naturalWidth > 0))
  )
    failures.push(`Image failed: ${slug}`);
}
for (const route of ["robots.txt", "sitemap.xml", "opengraph-image"]) {
  const response = await page.request.get(`http://localhost:3000/${route}`);
  if (!response.ok()) failures.push(`${route}: ${response.status()}`);
}
await browser.close();
console.log(JSON.stringify({ widths, modes: 2, failures }, null, 2));
if (failures.length) process.exitCode = 1;
