import type { Product } from "@/types/product";

/**
 * Catalog derived from mexmedpharma.com product detail URLs and composition table
 * (site audit, April 2026). Names and ingredients follow that extraction; validate every
 * SKU against current approved labels before medical, promotional, or regulatory use.
 */

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
      "Oral cephalosporin tablet at 250 mg strength—composition as published on the legacy Mexmed product page.",
    featured: true,
  }),
  productEntry({
    id: "cefron-500",
    name: "Cefron-500",
    dosageForm: "Tablets",
    category: "Anti-infective",
    composition: "Cefuroxime Axetil IP 500 mg",
    summary:
      "Cefuroxime axetil 500 mg tablet presentation from the Mexmed catalog.",
    featured: false,
  }),
  productEntry({
    id: "pantamex-40",
    name: "Pantamex-40",
    dosageForm: "Tablet",
    category: "Gastrointestinal",
    composition: "Pantoprazole gastro-resistant tablets IP",
    summary:
      "Gastro-resistant pantoprazole tablet for acid-related therapy pathways.",
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
      "Pantoprazole–domperidone fixed-dose capsule for GI symptom management.",
    featured: true,
  }),
  productEntry({
    id: "calinmex",
    name: "CALINMEX",
    dosageForm: "Tablets",
    category: "Bone & mineral nutrition",
    composition:
      "Calcium citrate malate with Vitamin D3 and manganese (legacy detail page; audit noted inconsistent text on the old site—confirm against approved art)",
    summary:
      "Bone–mineral tablet line; reconcile composition with the current approved label before use in customer materials.",
    featured: true,
  }),
  productEntry({
    id: "calinmex-forte",
    name: "Calinmex Forte",
    dosageForm: "Tablets",
    category: "Bone & mineral nutrition",
    composition:
      "Calcitriol, calcium citrate, methylcobalamin, vitamin K2-7, folic acid, zinc sulphate (per audit table; legacy spelling normalised)",
    summary:
      "Multicomponent mineral and B-vitamin tablet as listed under the Calinmex Forte / CalinMax-Forte naming on the legacy site.",
    featured: false,
  }),
  productEntry({
    id: "capup-d3-drops",
    name: "CAPUP-D3",
    dosageForm: "Drops",
    category: "Vitamins",
    composition: "Cholecalciferol (Vitamin D3) drops",
    summary: "Paediatric-friendly Vitamin D3 drops formulation.",
    featured: false,
  }),
  productEntry({
    id: "capup-d3-capsules",
    name: "Capup-D3",
    dosageForm: "Softgel capsules",
    category: "Vitamins",
    composition: "Cholecalciferol softgel capsules 60000 IU",
    summary:
      "High-strength cholecalciferol softgel for repletion protocols where appropriate.",
    featured: true,
  }),
  productEntry({
    id: "cartimex-pro",
    name: "Cartimex Pro",
    dosageForm: "Tablets",
    category: "Musculoskeletal",
    composition:
      "Glucosamine sulphate, collagen peptide type I, chondroitin sulphate sodium, Cissus quadrangularis, vitamin C, sodium hyaluronate (as per legacy composition list)",
    summary:
      "Joint-support combination tablet with glucosamine, chondroitin, and synergistic actives.",
    featured: false,
  }),
  productEntry({
    id: "extenvit",
    name: "Extenvit",
    dosageForm: "Tablets",
    category: "Multivitamin",
    composition:
      "Amino acids, vitamins, natural extract with minerals (legacy listing)",
    summary:
      "Broad amino-acid, vitamin, and mineral tablet for nutritional supplementation programmes.",
    featured: false,
  }),
  productEntry({
    id: "feriflex-xt",
    name: "Feriflex-XT",
    dosageForm: "Tablets",
    category: "Haematinics",
    composition:
      "Ferrous ascorbate, folic acid, zinc sulphate (per audit composition text)",
    summary:
      "Oral iron with folic acid and zinc for deficiency-oriented therapy.",
    featured: false,
  }),
  productEntry({
    id: "fericom-xt",
    name: "Fericom-XT",
    dosageForm: "Tablets",
    category: "Haematinics",
    composition: "Ferrous ascorbate, folic acid, zinc sulphate",
    summary:
      "Iron–folate–zinc tablet; coordinate brand positioning with Feriflex-XT per internal brand rules.",
    featured: true,
  }),
  productEntry({
    id: "mexorex-d",
    name: "Mexorex-D",
    dosageForm: "Syrup",
    category: "Respiratory",
    composition:
      "Dextromethorphan HBr, phenylephrine, chlorpheniramine (legacy listing; audit noted syrup vs tablet naming mismatch on old site)",
    summary:
      "Cough-and-cold syrup combination; confirm final naming and artwork with stakeholders.",
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
    "SKUs published on mexmedpharma.com—select a product for composition detail, then route questions through enquiry or the published phone line.",
  cta: { label: "Explore products", href: "/products" },
} as const;

export const productsListingPage = {
  eyebrow: "Portfolio",
  title: "Product catalog",
  description:
    "Tablets, capsules, syrups, and drops from the Mexmed range. Compositions reflect the legacy site extraction; validate against current approvals before commercial use.",
  metaTitle: "Products",
  metaDescription:
    "Browse Mexmed Pharma products—Cefron, Pantamex, Calinmex, Capup-D3, Cartimex Pro, and more. Enquiries: +91 88862 19335, info@mexmedpharma.com.",
} as const;
