/**
 * Service model from legacy our-service.php (audit, April 2026):
 * two pillars—Pharmaceutical and Nutraceutical—with supporting expertise narrative;
 * commercial follow-up via the published enquiry channels.
 */

export type Service = {
  id: string;
  name: string;
  summary: string;
  href: string;
};

export const services: Service[] = [
  {
    id: "pharmaceutical",
    name: "Pharmaceutical formulations",
    summary:
      "Prescription-oriented medicines across dosage forms the Mexmed catalog lists—including tablets, capsules, and syrups—supported by structured quality and safety practices.",
    href: "/services",
  },
  {
    id: "nutraceutical",
    name: "Nutraceutical formulations",
    summary:
      "Nutrition-led products such as mineral, vitamin, and combination supplements that complement the pharmaceutical line for wellness-oriented prescribing.",
    href: "/services",
  },
  {
    id: "enquiry-partner-support",
    name: "Enquiry & commercial support",
    summary:
      "Direct lines for availability, packs, and distribution questions: reach Mexmed on +91 88862 19335 or info@mexmedpharma.com, consistent with the contact block on the legacy site.",
    href: "/contact",
  },
];

export const servicesPreview = {
  eyebrow: "What we offer",
  title: "Pharmaceuticals and nutraceuticals",
  description:
    "The prior Mexmed service page presented two formulation pillars—pharmaceutical and nutraceutical—followed by expertise narrative. Enquiries remain the practical entry point for partners.",
  cta: { label: "View services", href: "/services" },
  featured: services,
} as const;
