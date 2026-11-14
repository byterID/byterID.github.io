import {
  siAnsible,
  siDocker,
  siGit,
  siGithubactions,
  siGnubash,
  siGrafana,
  siLinux,
  siNginx,
  siPhp,
  siPostgresql,
  siPrometheus,
  type SimpleIcon,
} from "simple-icons";
import type { Messages } from "@/lib/i18n";

export type TechId = keyof Messages["tech"]["items"];

export type Tech = {
  id: TechId;
  name: string;
  /** Brand color without "#". The icon tile uses it at 0.2 opacity. */
  hex: string;
  /** SVG path for a 24×24 viewBox from Simple Icons (CC0). */
  path?: string;
  /** Text badge for technologies without a Simple Icons logo. */
  badge?: string;
};

function fromIcon(id: TechId, name: string, icon: SimpleIcon): Tech {
  return { id, name, hex: icon.hex, path: icon.path };
}

/** Order as in stack.md: 12 cards, grid 1 / 2 / 4 columns. */
export const TECH: Tech[] = [
  fromIcon("linux", "Linux", siLinux),
  fromIcon("bash", "Bash", siGnubash),
  fromIcon("docker", "Docker", siDocker),
  fromIcon("nginx", "Nginx", siNginx),
  fromIcon("git", "Git", siGit),
  fromIcon("githubActions", "GitHub Actions", siGithubactions),
  fromIcon("ansible", "Ansible", siAnsible),
  fromIcon("prometheus", "Prometheus", siPrometheus),
  fromIcon("grafana", "Grafana", siGrafana),
  // [TODO] Simple Icons has no AWS logo (removed at Amazon's request).
  // A text badge stands in until the owner picks an icon source.
  { id: "aws", name: "AWS", hex: "FF9900", badge: "AWS" },
  fromIcon("postgresql", "PostgreSQL", siPostgresql),
  fromIcon("phpLaravel", "PHP / Laravel", siPhp),
];
