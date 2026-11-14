import type { Locale } from "@/lib/config";
import { notoArmenian, raleway } from "@/lib/fonts";

/** Shared <html>/<body> for the two root layouts: (en) and [locale]. */
export function RootDocument({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <html lang={locale} className={`dark ${raleway.variable} ${notoArmenian.variable}`}>
      <body className="min-h-svh bg-dark-100 font-sans text-stone-200 antialiased">
        {/* Without JS framer-motion never runs, so show reveal items as-is. */}
        <noscript>
          <style>{"[data-reveal]{opacity:1!important;filter:none!important}"}</style>
        </noscript>
        <div aria-hidden className="bg-grid pointer-events-none fixed inset-0 -z-10" />
        {children}
      </body>
    </html>
  );
}
