export const SITE_URL = "https://byterid.github.io";

/**
 * Armenian is a draft until a native speaker proofreads it.
 * While false, /hy/ is still built but hidden from the language switcher,
 * left out of hreflang alternates and marked noindex.
 */
export const HY_ENABLED = false;

export const LOCALES = ["en", "ru", "hy"] as const;
export type Locale = (typeof LOCALES)[number];

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export const LOCALE_PATH: Record<Locale, string> = {
  en: "/",
  ru: "/ru/",
  hy: "/hy/",
};

export const LOCALE_LABEL: Record<Locale, string> = {
  en: "EN",
  ru: "RU",
  hy: "HY",
};

export const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  ru: "ru_RU",
  hy: "hy_AM",
};

/** Locales shown in the switcher: EN · RU, plus HY once HY_ENABLED is true. */
export const SWITCHER_LOCALES: Locale[] = LOCALES.filter(
  (locale) => locale !== "hy" || HY_ENABLED,
);

/** Copied from assets/ to public/cv/ by scripts/copy-cv.mjs. */
export const CV_PATH: Record<Locale, string> = {
  en: "/cv/Gladkov_Artemii_CV_en.pdf",
  ru: "/cv/Gladkov_Artemii_CV_ru.pdf",
  hy: "/cv/Gladkov_Artemii_CV_ru.pdf",
};

export const LINKS = {
  github: "https://github.com/byterID",
  linkedin: "https://www.linkedin.com/in/artemii-gladkov-dev/",
  telegram: "https://t.me/PandemWanted",
  email: "mailto:lfeanite@gmail.com",
  repo: "https://github.com/byterID/Silver-Udochki",
  liveSite: "https://silver-udochki.ru",
} as const;
