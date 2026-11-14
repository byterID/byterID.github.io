import { Noto_Sans_Armenian, Raleway } from "next/font/google";

/** Main font, as in the reference. Variable font: weights 100 to 900. */
export const raleway = Raleway({
  subsets: ["latin", "cyrillic"],
  variable: "--font-raleway",
  display: "swap",
});

/**
 * Raleway has no Armenian glyphs. This font sits second in the stack, and its
 * @font-face unicode-range makes browsers download it only for Armenian text.
 */
export const notoArmenian = Noto_Sans_Armenian({
  subsets: ["armenian"],
  variable: "--font-armenian",
  display: "swap",
  preload: false,
});
