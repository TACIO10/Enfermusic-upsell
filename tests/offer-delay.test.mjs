import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("keeps the offer hidden for 259 seconds after each page load", async () => {
  const [page, staticPage, appCss, staticCss] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../github-pages/index.html", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../github-pages/styles.css", import.meta.url), "utf8"),
  ]);

  for (const source of [page, staticPage]) {
    assert.match(source, /setTimeout[\s\S]*259000/);
    assert.doesNotMatch(source, /displayHiddenElements\(259/);
    assert.match(source, /payt-offer delayed-offer/);
    assert.match(source, /deny-button delayed-offer/);
  }

  for (const css of [appCss, staticCss]) {
    assert.match(css, /\.delayed-offer\{display:none\}/);
  }
});
