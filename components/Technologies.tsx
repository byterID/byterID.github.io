import { Reveal } from "@/components/Reveal";
import { Container, headingClass, mutedClass } from "@/components/Section";
import type { Messages } from "@/lib/i18n";
import { TECH, type Tech } from "@/lib/tech";

function TechLogo({ tech }: { tech: Tech }) {
  return (
    <span
      className="flex size-14 shrink-0 items-center justify-center rounded-lg"
      style={{ backgroundColor: `#${tech.hex}33` /* brand color at 0.2 */ }}
    >
      {tech.path ? (
        <svg viewBox="0 0 24 24" aria-hidden className="size-7" fill={`#${tech.hex}`}>
          <path d={tech.path} />
        </svg>
      ) : (
        <span aria-hidden className="text-sm font-bold" style={{ color: `#${tech.hex}` }}>
          {tech.badge}
        </span>
      )}
    </span>
  );
}

export function Technologies({ t }: { t: Messages["tech"] }) {
  return (
    <section id="technologies" className="py-32">
      <Container>
        <Reveal>
          <h2 className={headingClass}>{t.title}</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className={`mt-4 max-w-2xl text-lg ${mutedClass}`}>{t.intro}</p>
        </Reveal>

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TECH.map((tech, index) => (
            <Reveal as="li" key={tech.id} delay={0.04 * index}>
              <div className="flex items-center gap-5 rounded-xl border border-transparent bg-dark-200 p-2.5 transition-colors duration-200 hover:border-dark-700 hover:bg-dark-300">
                <TechLogo tech={tech} />
                <div>
                  <p className="text-lg font-medium">{tech.name}</p>
                  <p className={`text-sm ${mutedClass}`}>{t.items[tech.id]}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
