import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("uses the vertical Vturb player responsively", async () => {
  const [page, staticPage, appCss, staticCss] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../github-pages/index.html", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../github-pages/styles.css", import.meta.url), "utf8"),
  ]);

  for (const source of [page, staticPage]) {
    assert.match(source, /vid-6ad6e00b0a87c725d2c60ece/);
    assert.match(source, /players\/6ad6e00b0a87c725d2c60ece\/v4\/player\.js/);
    assert.match(source, /padding:177\.77777777777777% 0 0/);
    assert.doesNotMatch(source, /6ac82242b7192639646f535d/);
  }

  for (const css of [appCss, staticCss]) {
    assert.match(css, /\.video-frame\{width:min\(400px,100%\)/);
  }
});
