// Copies the CV PDFs from assets/ to public/cv/ before every build.
// EN page links /cv/Gladkov_Artemii_CV_en.pdf, RU and HY link the _ru file.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const target = join(root, "public", "cv");
const files = ["Gladkov_Artemii_CV_en.pdf", "Gladkov_Artemii_CV_ru.pdf"];

mkdirSync(target, { recursive: true });

for (const file of files) {
  const source = join(root, "assets", file);
  if (!existsSync(source)) {
    console.error(`copy-cv: missing ${source}`);
    process.exit(1);
  }
  copyFileSync(source, join(target, file));
  console.log(`copy-cv: assets/${file} -> public/cv/${file}`);
}
