import { LOCALE_LABEL, LOCALE_PATH, SWITCHER_LOCALES, type Locale } from "@/lib/config";
import type { Messages } from "@/lib/i18n";

/** Floating pill menu: Home, Work, Contact + language switcher. */
export function Nav({ locale, t }: { locale: Locale; t: Messages["nav"] }) {
  const items = [
    { href: "#home", label: t.home },
    { href: "#work", label: t.work },
    { href: "#contact", label: t.contact },
  ];

  return (
    <header className="fixed inset-x-0 top-5 z-50 flex justify-center px-4 sm:top-10">
      <nav className="flex items-center gap-4 rounded-lg border border-dark-700 bg-dark-200 px-5 py-3 text-sm font-medium sm:gap-8 sm:px-8 sm:py-4 sm:text-base">
        <ul className="flex items-center gap-4 sm:gap-8">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-stone-200/70 transition-colors hover:text-stone-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {SWITCHER_LOCALES.length > 1 && (
          <>
            <span aria-hidden className="h-4 w-px bg-dark-700" />
            <ul className="flex items-center gap-1.5 text-xs tracking-wider sm:text-sm">
              {SWITCHER_LOCALES.map((code, index) => (
                <li key={code} className="flex items-center gap-1.5">
                  {index > 0 && (
                    <span aria-hidden className="text-stone-200/30">
                      ·
                    </span>
                  )}
                  <a
                    href={LOCALE_PATH[code]}
                    hrefLang={code}
                    lang={code}
                    aria-current={code === locale ? "page" : undefined}
                    className={
                      code === locale
                        ? "font-bold text-stone-200"
                        : "text-stone-200/50 transition-colors hover:text-stone-200"
                    }
                  >
                    {LOCALE_LABEL[code]}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </nav>
    </header>
  );
}
