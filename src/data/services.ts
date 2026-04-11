export type Service = {
  id: string;
  name: string;
  summary: string;
  href: string;
};

export const services: Service[] = [
  {
    id: "contract-development",
    name: "Contract development & manufacturing",
    summary:
      "End-to-end support from process design through tech transfer, scaled to your milestones.",
    href: "/services",
  },
  {
    id: "analytical",
    name: "Analytical & stability",
    summary:
      "Method development, validation, and stability programs aligned to regulatory expectations.",
    href: "/services",
  },
  {
    id: "supply-chain",
    name: "Supply & logistics",
    summary:
      "Cold-chain aware planning, serialization readiness, and distribution coordination.",
    href: "/services",
  },
  {
    id: "regulatory",
    name: "Regulatory affairs",
    summary:
      "Dossier strategy, variations, and agency correspondence with clear ownership.",
    href: "/services",
  },
];

export const servicesPreview = {
  eyebrow: "Capabilities",
  title: "Services that scale with your program",
  description:
    "From early clinical supply to commercial readiness—modular engagement with clear deliverables.",
  cta: { label: "View all services", href: "/services" },
  /** Homepage cards (subset). */
  featured: services.slice(0, 3),
} as const;
