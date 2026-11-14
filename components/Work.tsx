import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import { TextLink } from "@/components/Buttons";
import { ArrowUpRightIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { Container, headingClass, mutedClass } from "@/components/Section";
import { LINKS } from "@/lib/config";
import type { Messages } from "@/lib/i18n";
import { WORK_CARDS, type WorkCard } from "@/lib/work";

/** Checked at build time: the screenshot shows up once the owner adds the file. */
function hasImage(card: WorkCard) {
  return existsSync(join(process.cwd(), "public", card.image));
}

function Screenshot({ card, title }: { card: WorkCard; title: string }) {
  const frame = "aspect-video w-full rounded-md border border-dark-700";

  if (hasImage(card)) {
    return (
      <Image
        src={card.image}
        alt={title}
        width={1600}
        height={900}
        loading="lazy"
        className={`${frame} bg-dark-100 object-cover object-top`}
      />
    );
  }

  // Placeholder until public/work/*.webp exists (see plan.md, "Скриншоты").
  return (
    <div aria-hidden className={`${frame} bg-grid flex items-center justify-center bg-dark-100`}>
      <span className="px-4 text-center text-lg font-semibold text-stone-200/40">{title}</span>
    </div>
  );
}

export function Work({ t }: { t: Messages["work"] }) {
  return (
    <section id="work" className="py-32">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <Reveal>
              <h2 className={headingClass}>{t.title}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className={`mt-4 text-lg ${mutedClass}`}>{t.intro}</p>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="flex shrink-0 flex-wrap gap-x-8 gap-y-3">
              <TextLink href={LINKS.github} external accent>
                {t.allProjects}
                <ArrowUpRightIcon />
              </TextLink>
              <TextLink href={LINKS.liveSite} external accent>
                {t.liveSite}
                <ArrowUpRightIcon />
              </TextLink>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {WORK_CARDS.map((card, index) => {
            const text = t.cards[card.id];
            return (
              <Reveal key={card.id} delay={0.05 * index}>
                <article className="flex h-full flex-col space-y-8 rounded-lg bg-dark-200 p-4 sm:p-8">
                  <Screenshot card={card} title={text.title} />
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold sm:text-3xl">{text.title}</h3>
                    <p className={mutedClass}>{text.text}</p>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md border border-dark-700 px-2.5 py-1 text-sm text-stone-200/80"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <TextLink href={card.repoHref} external accent>
                      {t.viewInRepo}
                      <ArrowUpRightIcon />
                    </TextLink>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
