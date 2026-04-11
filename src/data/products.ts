import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "cardio-ace",
    name: "CardioAce™ Tablets",
    category: "Cardiovascular",
    summary:
      "Fixed-dose antihypertensive support with established stability and packaging options.",
    href: "/products",
    featured: true,
  },
  {
    id: "neuro-rest",
    name: "NeuroRest™ ER",
    category: "Neurology",
    summary:
      "Extended-release formulation designed for consistent plasma profiles.",
    href: "/products",
    featured: true,
  },
  {
    id: "met-form",
    name: "MetForm Balance",
    category: "Metabolic",
    summary:
      "Oral therapy aligned with modern prescribing patterns and shelf-life requirements.",
    href: "/products",
    featured: true,
  },
  {
    id: "resp-clear",
    name: "RespClear Inhalation",
    category: "Respiratory",
    summary:
      "Device-compatible presentation with controlled particulate standards.",
    href: "/products",
    featured: true,
  },
  {
    id: "onco-support",
    name: "OncoSupport Injectable",
    category: "Oncology support",
    summary:
      "Aseptic processing pathways with batch records built for traceability.",
    href: "/products",
    featured: true,
  },
];

export function getFeaturedProducts(limit = 6): Product[] {
  return products.filter((p) => p.featured).slice(0, limit);
}

export const featuredProductsSection = {
  eyebrow: "Portfolio",
  title: "Featured formulations",
  description:
    "Representative portfolio areas—final SKUs, indications, and dossier details will be confirmed for your market.",
  cta: { label: "Explore products", href: "/products" },
} as const;
