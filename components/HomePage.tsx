import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Freelance } from "@/components/Freelance";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Technologies } from "@/components/Technologies";
import { Work } from "@/components/Work";
import type { Locale } from "@/lib/config";
import { getMessages } from "@/lib/i18n";

/** One page, three languages. Block order follows plan.md. */
export function HomePage({ locale }: { locale: Locale }) {
  const t = getMessages(locale);

  return (
    <>
      <Nav locale={locale} t={t.nav} />
      <main>
        <Hero locale={locale} t={t.hero} />
        <Technologies t={t.tech} />
        <Work t={t.work} />
        <Freelance t={t.freelance} />
        <Contact t={t.contact} />
      </main>
      <Footer t={t.footer} nav={t.nav} />
    </>
  );
}
