import type { Product } from "@/types/product";

/** Canonical product catalog for Mexmed Pharma—IDs map to `/products/[slug]`. */

function productEntry(entry: Omit<Product, "href"> & { id: string }): Product {
  return {
    ...entry,
    href: `/products/${entry.id}`,
  };
}

export const products: Product[] = [
  productEntry({
    id: "cefron-250",
    name: "Cefron-250",
    dosageForm: "Tablets",
    category: "Anti-infective",
    composition: "Cefuroxime Axetil IP 250 mg",
    summary:
      "Cefuroxime axetil tablets—250 mg strength for antibacterial therapy as prescribed.",
    featured: true,
  }),
  productEntry({
    id: "cefron-500",
    name: "Cefron-500",
    dosageForm: "Tablets",
    category: "Anti-infective",
    composition: "Cefuroxime Axetil IP 500 mg",
    summary:
      "Cefuroxime axetil tablets at 500 mg for appropriate systemic infections.",
    featured: false,
  }),
  productEntry({
    id: "pantamex-40",
    name: "Pantamex-40",
    dosageForm: "Tablet",
    category: "Gastrointestinal",
    composition: "Pantoprazole gastro-resistant tablets IP",
    summary:
      "Gastro-resistant pantoprazole tablet for acid-related disorders under medical supervision.",
    featured: true,
  }),
  productEntry({
    id: "pantamex-dsr",
    name: "Pantamex-DSR",
    dosageForm: "Capsules",
    category: "Gastrointestinal",
    composition:
      "Pantoprazole (gastro-resistant) and domperidone (prolonged-release) capsules IP",
    summary:
      "Fixed-dose pantoprazole and domperidone capsule for GI symptom control.",
    featured: true,
  }),
  productEntry({
    id: "calinmex",
    name: "CALINMEX",
    dosageForm: "Tablets",
    category: "Bone & mineral nutrition",
    composition:
      "Calcium citrate malate with cholecalciferol (Vitamin D3) and manganese",
    summary:
      "Calcium and vitamin D–based mineral tablet for bone and mineral nutrition support.",
    featured: true,
  }),
  productEntry({
    id: "calinmex-forte",
    name: "Calinmex Forte",
    dosageForm: "Tablets",
    category: "Bone & mineral nutrition",
    composition:
      "Calcitriol, calcium citrate, methylcobalamin, vitamin K2-7, folic acid, zinc sulphate",
    summary:
      "Multicomponent tablet with calcium, vitamin D pathway support, and B-vitamins for mineral therapy programmes.",
    featured: false,
  }),
  productEntry({
    id: "capup-d3-drops",
    name: "CAPUP-D3",
    dosageForm: "Drops",
    category: "Vitamins",
    composition: "Cholecalciferol (Vitamin D3) drops",
    summary:
      "Cholecalciferol drops for convenient vitamin D supplementation.",
    featured: false,
  }),
  productEntry({
    id: "capup-d3-capsules",
    name: "Capup-D3",
    dosageForm: "Softgel capsules",
    category: "Vitamins",
    composition: "Cholecalciferol softgel capsules 60000 IU",
    summary:
      "High-strength cholecalciferol softgel for vitamin D repletion where indicated.",
    featured: true,
  }),
  productEntry({
    id: "cartimex-pro",
    name: "Cartimex Pro",
    dosageForm: "Tablets",
    category: "Musculoskeletal",
    composition:
      "Glucosamine sulphate, collagen peptide type I, chondroitin sulphate sodium, Cissus quadrangularis, vitamin C, sodium hyaluronate",
    summary:
      "Joint-care combination tablet with glucosamine, chondroitin, and supporting actives.",
    featured: false,
  }),
  productEntry({
    id: "extenvit",
    name: "Extenvit",
    dosageForm: "Tablets",
    category: "Multivitamin",
    composition:
      "Amino acids, vitamins, natural extracts with minerals",
    summary:
      "Broad amino acid, vitamin, and mineral tablet for nutritional supplementation.",
    featured: false,
  }),
  productEntry({
    id: "feriflex-xt",
    name: "Feriflex-XT",
    dosageForm: "Tablets",
    category: "Haematinics",
    composition: "Ferrous ascorbate, folic acid, zinc sulphate",
    summary:
      "Oral iron with folic acid and zinc for deficiency states as prescribed.",
    featured: false,
  }),
  productEntry({
    id: "fericom-xt",
    name: "Fericom-XT",
    dosageForm: "Tablets",
    category: "Haematinics",
    composition: "Ferrous ascorbate, folic acid, zinc sulphate",
    summary:
      "Iron, folate, and zinc tablet for iron-deficiency and nutritional support.",
    featured: true,
  }),
  productEntry({
    id: "mexorex-d",
    name: "Mexorex-D",
    dosageForm: "Syrup",
    category: "Respiratory",
    composition:
      "Dextromethorphan hydrobromide, phenylephrine, chlorpheniramine",
    summary:
      "Cough and cold combination syrup for symptomatic relief under medical advice.",
    featured: false,
  }),
];

export function getFeaturedProducts(limit = 6): Product[] {
  const featured = products.filter((p) => p.featured);
  return featured.slice(0, limit);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.id === slug);
}

export function getRelatedProducts(productId: string, limit = 3): Product[] {
  const current = products.find((p) => p.id === productId);
  if (!current) return [];

  const sameCategory = products.filter(
    (p) => p.id !== productId && p.category === current.category,
  );
  const other = products.filter(
    (p) => p.id !== productId && p.category !== current.category,
  );

  return [...sameCategory, ...other].slice(0, limit);
}

export const featuredProductsSection = {
  eyebrow: "Portfolio",
  title: "Mexmed formulations",
  description:
    "A selection from our tablet, capsule, and liquid range—open any item for composition detail and enquiry options.",
  cta: { label: "Explore products", href: "/products" },
} as const;

export const productsListingPage = {
  eyebrow: "Portfolio",
  title: "Product catalog",
  description:
    "Browse Mexmed Pharma formulations by therapeutic category and dosage form. For availability, packs, and distribution, contact our team.",
  metaTitle: "Products",
  metaDescription:
    "Mexmed Pharma product catalog—tablets, capsules, syrups, and more. Enquiries: +91 88862 19335, info@mexmedpharma.com.",
  gridEyebrow: "Formulations",
  gridTitle: "Browse the full range",
  gridDescription:
    "Each entry shows category, dosage form, and a short description. Select a product for composition detail and enquiry options.",
} as const;

export const productsCatalogEnquiry = {
  title: "Discuss packs, pricing, or distribution",
  description:
    "Share your market, volumes, and timelines—we respond on the phone number and email shown on our contact page.",
  primaryCta: { label: "Send enquiry", href: "/contact" },
  secondaryLabel: "Call us",
} as const;
