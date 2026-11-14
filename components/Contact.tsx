import { SecondaryButton, ShimmerButton } from "@/components/Buttons";
import { ArrowUpRightIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { Container } from "@/components/Section";
import { LINKS } from "@/lib/config";
import type { Messages } from "@/lib/i18n";

export function Contact({ t }: { t: Messages["contact"] }) {
  return (
    <section id="contact" className="py-32">
      <Container className="text-center">
        <Reveal>
          <h2 className="mx-auto max-w-4xl text-4xl leading-tight font-bold xs:text-5xl md:text-6xl">
            {t.title}
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <ShimmerButton href={LINKS.telegram} external>
              {t.telegram}
              <ArrowUpRightIcon />
            </ShimmerButton>
            <SecondaryButton href={LINKS.email}>{t.email}</SecondaryButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
