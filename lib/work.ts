import { LINKS } from "@/lib/config";
import type { Messages } from "@/lib/i18n";

export type WorkCardId = keyof Messages["work"]["cards"];

export type WorkCard = {
  id: WorkCardId;
  /** Path inside public/. Until the file exists, the card shows a placeholder. */
  image: string;
  /** Section of the Silver-Udochki README. */
  repoHref: string;
  tags: string[];
};

// Anchors match the real headings in the Silver-Udochki README
// (checked 14.11.2026): "Схема архитектуры", "Схема CI/CD",
// "Как устроен мониторинг".
export const WORK_CARDS: WorkCard[] = [
  {
    id: "stack",
    image: "/work/stack.webp",
    repoHref: `${LINKS.repo}#схема-архитектуры`,
    tags: ["Docker Compose", "Nginx", "PHP-FPM", "PostgreSQL 17", "Kafka (KRaft)"],
  },
  {
    id: "cicd",
    image: "/work/cicd.webp",
    repoHref: `${LINKS.repo}#схема-cicd`,
    tags: ["GitHub Actions", "Pint", "PHPStan", "PHPUnit", "ShellCheck", "Gitleaks"],
  },
  {
    id: "ansible",
    image: "/work/ansible.webp",
    // [TODO] The README has no section about Ansible / server provisioning yet,
    // so this links to the repository root. Add an anchor once the section exists.
    repoHref: LINKS.repo,
    tags: ["Ansible", "Certbot", "Tailscale", "Linux"],
  },
  {
    id: "monitoring",
    image: "/work/monitoring.webp",
    repoHref: `${LINKS.repo}#как-устроен-мониторинг`,
    tags: [
      "Prometheus",
      "Grafana",
      "node-exporter",
      "cAdvisor",
      "postgres-exporter",
      "nginx-exporter",
    ],
  },
];
