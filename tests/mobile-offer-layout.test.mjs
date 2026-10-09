import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("keeps the delayed offer inside narrow mobile viewports", async () => {
  const stylesheets = await Promise.all([
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../github-pages/styles.css", import.meta.url), "utf8"),
  ]);

  for (const css of stylesheets) {
    assert.match(css, /html,body\{[^}]*overflow-x:hidden/);
    assert.match(css, /@media\(max-width:420px\)\{\.payt-offer\{/);
    assert.match(css, /\.payt-offer h2\{font-size:26px;overflow-wrap:anywhere\}/);
    assert.match(css, /\.current-price\{flex-wrap:wrap/);
    assert.match(css, /\.offer-benefits\{width:100%\}/);
  }
});
