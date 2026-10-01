import { chromium } from "@playwright/test";
import assert from "node:assert/strict";
import fs from "node:fs";
const browser = await chromium.launch({ channel: "msedge", headless: true });
try {
  fs.mkdirSync("test-results", { recursive: true });
  for (const scheme of ["dark", "light"]) {
    const page = await browser.newPage({
      colorScheme: scheme,
      reducedMotion: "reduce",
    });
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
    assert.equal(await page.locator("html").getAttribute("data-theme"), scheme);
    for (const width of [320, 390, 768, 1024, 1440, 1920]) {
      await page.setViewportSize({ width, height: 900 });
      assert.equal(
        await page.evaluate(
          () => document.documentElement.scrollWidth > innerWidth + 1,
        ),
        false,
        `${scheme}/${width} overflow`,
      );
      const button = page.getByRole("button", {
        name: scheme === "dark" ? "Ativar modo claro" : "Ativar modo escuro",
      });
      assert.ok(await button.isVisible());
      if (width === 390 || width === 1440)
        await page.screenshot({
          path: `test-results/theme-${scheme}-${width}.png`,
        });
    }
    const next = scheme === "dark" ? "light" : "dark";
    await page
      .getByRole("button", {
        name: scheme === "dark" ? "Ativar modo claro" : "Ativar modo escuro",
      })
      .click();
    assert.equal(await page.locator("html").getAttribute("data-theme"), next);
    await page.reload({ waitUntil: "networkidle" });
    assert.equal(await page.locator("html").getAttribute("data-theme"), next);
    await page.goto("http://localhost:3000/projetos/forma", {
      waitUntil: "networkidle",
    });
    assert.equal(await page.locator("html").getAttribute("data-theme"), next);
    await page
      .getByRole("button", {
        name: next === "dark" ? "Ativar modo claro" : "Ativar modo escuro",
      })
      .focus();
    await page.keyboard.press("Enter");
    assert.equal(await page.locator("html").getAttribute("data-theme"), scheme);
    assert.deepEqual(errors, []);
    await page.close();
  }
  console.log(
    "Dark/light, preferência do sistema, persistência, teclado e responsividade: OK",
  );
} finally {
  await browser.close();
}
