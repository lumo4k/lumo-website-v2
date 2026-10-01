import { chromium } from "@playwright/test";
import assert from "node:assert/strict";
const browser = await chromium.launch({ channel: "msedge", headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.waitForTimeout(1500);
assert.ok(
  await page.locator("html").evaluate((el) => el.classList.contains("lenis")),
);
assert.equal(await page.locator(".pin-spacer").count(), 1);
const top = await page
  .locator(".portfolio")
  .evaluate((el) => el.getBoundingClientRect().top + scrollY);
await page.evaluate((y) => window.scrollTo(0, y), top + 600);
await page.waitForTimeout(1200);
assert.ok(
  await page
    .locator(".project-track")
    .evaluate((el) => new DOMMatrix(getComputedStyle(el).transform).m41 < -50),
);
await page.setViewportSize({ width: 1280, height: 800 });
await page.waitForTimeout(700);
assert.equal(await page.locator(".pin-spacer").count(), 1);
assert.ok(
  await page
    .locator(".project-track")
    .evaluate((el) =>
      Number.isFinite(new DOMMatrix(getComputedStyle(el).transform).m41),
    ),
);
await page.setViewportSize({ width: 390, height: 844 });
await page.waitForTimeout(700);
assert.equal(await page.locator(".pin-spacer").count(), 0);
assert.equal(
  await page
    .locator(".project-track")
    .evaluate((el) => new DOMMatrix(getComputedStyle(el).transform).m41),
  0,
);
await page.emulateMedia({ reducedMotion: "reduce" });
await page.setViewportSize({ width: 1440, height: 900 });
await page.waitForTimeout(700);
assert.equal(await page.locator(".pin-spacer").count(), 0);
assert.equal(
  await page.locator("html").evaluate((el) => el.classList.contains("lenis")),
  false,
);
await browser.close();
console.log("Lenis, scroll horizontal, resize e movimento reduzido: OK");
