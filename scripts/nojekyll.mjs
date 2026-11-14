// GitHub Pages runs Jekyll by default, and Jekyll skips folders that start
// with "_" (like out/_next). An empty .nojekyll file turns that off.
import { existsSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const out = join(process.cwd(), "out");

if (!existsSync(out)) {
  console.error("nojekyll: out/ not found, did `next build` run?");
  process.exit(1);
}

writeFileSync(join(out, ".nojekyll"), "");
console.log("nojekyll: wrote out/.nojekyll");
