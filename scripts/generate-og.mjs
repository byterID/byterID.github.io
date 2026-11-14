// Generates the Open Graph previews public/og/{en,ru,hy}.png (1200×630).
// Run once with `npm run og` after changing the name or title in messages/*.json,
// then commit the PNGs. Needs network: fonts come from Google Fonts.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { createElement as h } from "react";
import { ImageResponse } from "next/og.js";

const root = process.cwd();
const outDir = join(root, "public", "og");
const locales = ["en", "ru", "hy"];

/** Google Fonts serves TTF to clients without a browser User-Agent; satori needs TTF/OTF. */
async function loadGoogleFont(family, weight, text) {
  const url = `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, "+")}:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const match = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/);
  if (!match) throw new Error(`No TTF for ${family} ${weight}`);
  return (await fetch(match[1])).arrayBuffer();
}

const grid =
  "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)";

function card(t) {
  const { hero, footer } = t;
  return h(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 96px",
        backgroundColor: "#0A0A0A",
        backgroundImage: grid,
        backgroundSize: "32px 32px",
        color: "#E7E5E4",
        fontFamily: "Raleway, Noto Sans Armenian",
      },
    },
    h(
      "div",
      {
        style: {
          fontSize: 26,
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "rgba(231,229,228,0.7)",
        },
      },
      hero.location,
    ),
    h("div", { style: { marginTop: 28, fontSize: 92, fontWeight: 700, lineHeight: 1.1 } }, footer.name),
    h(
      "div",
      { style: { display: "flex", marginTop: 24, fontSize: 52, fontWeight: 600 } },
      h("span", { style: { color: "#3B82F6" } }, hero.titleAccent),
      h("span", { style: { marginLeft: 16 } }, `${hero.titleJoin} ${hero.titleLine2}`),
    ),
    h(
      "div",
      {
        style: {
          position: "absolute",
          left: 96,
          bottom: 64,
          fontSize: 24,
          color: "rgba(231,229,228,0.5)",
        },
      },
      "byterid.github.io",
    ),
  );
}

mkdirSync(outDir, { recursive: true });

for (const locale of locales) {
  const t = JSON.parse(readFileSync(join(root, "messages", `${locale}.json`), "utf8"));
  // The font is subset to these characters; the location is rendered uppercase.
  const text = [t.hero.location.toUpperCase(), t.footer.name, t.hero.titleAccent, t.hero.titleJoin, t.hero.titleLine2, "byterid.github.io"].join(" ");

  const fonts = [
    { name: "Raleway", data: await loadGoogleFont("Raleway", 700, text), weight: 700 },
    { name: "Raleway", data: await loadGoogleFont("Raleway", 600, text), weight: 600 },
    { name: "Raleway", data: await loadGoogleFont("Raleway", 400, text), weight: 400 },
  ];
  if (locale === "hy") {
    for (const weight of [400, 600, 700]) {
      fonts.push({ name: "Noto Sans Armenian", data: await loadGoogleFont("Noto Sans Armenian", weight, text), weight });
    }
  }

  const image = new ImageResponse(card(t), { width: 1200, height: 630, fonts });
  const file = join(outDir, `${locale}.png`);
  writeFileSync(file, Buffer.from(await image.arrayBuffer()));
  console.log(`og: ${file}`);
}
