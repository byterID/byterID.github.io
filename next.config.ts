import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages: `next build` writes the site to out/.
  output: "export",
  // /ru -> out/ru/index.html, so GitHub Pages serves /ru/ without extra config.
  trailingSlash: true,
  // Next.js cannot optimize images in a static export.
  // Screenshots go to public/work/ already as WebP, about 1600 px wide.
  images: { unoptimized: true },
};

export default nextConfig;
