/**
 * Mexmed service model: pharmaceutical and nutraceutical pillars,
 * plus enquiry-led commercial support.
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
      "Prescription-oriented medicines across dosage forms in the Mexmed catalog—including tablets, capsules, and syrups—with structured quality and safety practices.",
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
      "Availability, packs, and distribution questions: contact Mexmed on +91 88862 19335 or info@mexmedpharma.com.",
    href: "/contact",
  },
];

export const servicesPreview = {
  eyebrow: "What we offer",
  title: "Pharmaceuticals and nutraceuticals",
  description:
    "Two formulation pillars—pharmaceutical and nutraceutical—supported by responsive enquiry handling for partners and distributors.",
  cta: { label: "View services", href: "/services" },
  featured: services,
} as const;
