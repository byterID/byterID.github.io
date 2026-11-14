import { Container, mutedClass } from "@/components/Section";
import { LINKS } from "@/lib/config";
import type { Messages } from "@/lib/i18n";

type FooterLink = { label: string; href: string; external?: boolean };

function Column({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <p className="text-sm font-bold tracking-widest uppercase">{title}</p>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={`${mutedClass} transition-colors hover:text-stone-200`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer({ t, nav }: { t: Messages["footer"]; nav: Messages["nav"] }) {
  return (
    <footer className="border-t border-dark-700/50">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1fr_auto_auto_auto] lg:gap-20">
        <div>
          <p className="text-2xl font-bold">{t.name}</p>
          <p className={`mt-2 text-sm ${mutedClass}`}>{t.copyright}</p>
        </div>
        <Column
          title={t.navigate}
          links={[
            { label: nav.home, href: "#home" },
            { label: nav.work, href: "#work" },
            { label: nav.contact, href: "#contact" },
          ]}
        />
        <Column
          title={t.project}
          links={[
            { label: t.repository, href: LINKS.repo, external: true },
            { label: t.liveSite, href: LINKS.liveSite, external: true },
          ]}
        />
        <Column
          title={t.socials}
          links={[
            { label: "GitHub", href: LINKS.github, external: true },
            { label: "LinkedIn", href: LINKS.linkedin, external: true },
            { label: "Telegram", href: LINKS.telegram, external: true },
          ]}
        />
      </Container>
    </footer>
  );
}
