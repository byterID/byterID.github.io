import { SecondaryButton } from "@/components/Buttons";
import { ArrowUpRightIcon, CheckIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { Container, headingClass, mutedClass } from "@/components/Section";
import { LINKS } from "@/lib/config";
import type { Messages } from "@/lib/i18n";

export function Freelance({ t }: { t: Messages["freelance"] }) {
  return (
    <section id="freelance" className="py-32">
      <Container>
        <div className="grid gap-10 rounded-lg bg-dark-200 p-6 sm:p-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
              <h2 className={headingClass}>{t.title}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className={`mt-4 text-lg ${mutedClass}`}>{t.text}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8">
                <SecondaryButton href={LINKS.telegram} external>
                  {t.cta}
                  <ArrowUpRightIcon />
                </SecondaryButton>
              </div>
            </Reveal>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {t.services.map((service, index) => (
              <Reveal as="li" key={service} delay={0.05 * index}>
                <div className="flex h-full items-center gap-3 rounded-xl border border-dark-700 bg-dark-100 p-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-blue-500/20 text-blue-500">
                    <CheckIcon />
                  </span>
                  <span className="font-medium">{service}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
