import { ShimmerButton, TextLink } from "@/components/Buttons";
import { ArrowRightIcon, DownloadIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { Container, mutedClass } from "@/components/Section";
import { CV_PATH, type Locale } from "@/lib/config";
import type { Messages } from "@/lib/i18n";

export function Hero({ locale, t }: { locale: Locale; t: Messages["hero"] }) {
  return (
    <section id="home" className="flex min-h-svh items-center">
      <Container className="pt-32 pb-20 text-center">
        <Reveal>
          <p className={`text-sm font-bold tracking-widest uppercase ${mutedClass}`}>
            {t.location}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-6 text-4xl leading-tight font-bold xs:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-blue-500">{t.titleAccent}</span> {t.titleJoin}
            <br />
            {t.titleLine2}
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className={`mx-auto mt-6 max-w-2xl text-lg ${mutedClass}`}>{t.about}</p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-5">
            <ShimmerButton href="#work">
              {t.ctaWork}
              <ArrowRightIcon />
            </ShimmerButton>
            <TextLink href={CV_PATH[locale]} download>
              <DownloadIcon />
              {t.ctaCv}
            </TextLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
