import type { Product } from "@/types/product";

/** Canonical audit-approved product catalog for Mexmed Pharma. */

const cloudinaryBase = "https://res.cloudinary.com/dcy0lkiq9/image/upload";

const productImages = {
  fericomXt: `${cloudinaryBase}/q_auto/f_auto/v1777358315/WhatsApp_Image_2026-04-22_at_12.27.38_1_uyue6j.jpg`,
  calinmex: `${cloudinaryBase}/q_auto/f_auto/v1777358315/WhatsApp_Image_2026-04-22_at_12.27.38_2_lsxyvu.jpg`,
  cefron250: `${cloudinaryBase}/q_auto/f_auto/v1777358315/WhatsApp_Image_2026-04-22_at_12.27.38_r2csy3.jpg`,
  extenvit: `${cloudinaryBase}/q_auto/f_auto/v1777358317/WhatsApp_Image_2026-04-22_at_12.27.39_1_caf5at.jpg`,
  cartimexPro: `${cloudinaryBase}/q_auto/f_auto/v1777358319/WhatsApp_Image_2026-04-22_at_12.27.43_2_seerrj.jpg`,
  calinmexForte: `${cloudinaryBase}/q_auto/f_auto/v1777358317/WhatsApp_Image_2026-04-22_at_12.27.40_3_ery65v.jpg`,
  pantamexDsr: `${cloudinaryBase}/q_auto/f_auto/v1777358318/WhatsApp_Image_2026-04-22_at_12.27.40_fvgscy.jpg`,
  capupD3Capsules: `${cloudinaryBase}/q_auto/f_auto/v1777358318/WhatsApp_Image_2026-04-22_at_12.27.41_1_clwise.jpg`,
  feriflexXt: `${cloudinaryBase}/q_auto/f_auto/v1777358318/WhatsApp_Image_2026-04-22_at_12.27.41_ehvksw.jpg`,
  capupD3Drops: `${cloudinaryBase}/q_auto/f_auto/v1777358318/WhatsApp_Image_2026-04-22_at_12.27.42_1_olvfi1.jpg`,
  pantamex40: `${cloudinaryBase}/q_auto/f_auto/v1777358318/WhatsApp_Image_2026-04-22_at_12.27.42_2_gfjvhd.jpg`,
  cefron500: `${cloudinaryBase}/q_auto/f_auto/v1777358319/WhatsApp_Image_2026-04-22_at_12.27.43_1_exdrsv.jpg`,
  mexorexD: `${cloudinaryBase}/q_auto/f_auto/v1777358319/WhatsApp_Image_2026-04-22_at_12.27.43_bemtv1.jpg`,
} as const;

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
    packaging: "1 x 10 tablets",
    composition: ["Cefuroxime Axetil IP 250 mg"],
    summary:
      "Cefuroxime axetil 250 mg tablets for antibacterial therapy as prescribed.",
    image: {
      src: productImages.cefron250,
      alt: "Cefron-250 tablet packshot",
    },
    featured: true,
  }),
  productEntry({
    id: "cefron-500",
    name: "Cefron-500",
    dosageForm: "Tablets",
    category: "Anti-infective",
    packaging: "1 x 10 tablets",
    composition: ["Cefuroxime Axetil IP 500 mg"],
    summary:
      "Cefuroxime axetil 500 mg tablets for appropriate systemic infections under medical supervision.",
    image: {
      src: productImages.cefron500,
      alt: "Cefron-500 tablet packshot",
    },
    featured: false,
  }),
  productEntry({
    id: "pantamex-40",
    name: "Pantamex-40",
    dosageForm: "Tablets",
    category: "Gastrointestinal",
    packaging: "1 x 10 tablets",
    composition: ["Pantoprazole gastro-resistant tablets IP"],
    summary:
      "Pantoprazole gastro-resistant tablets for acid-related disorders and reflux-management programmes.",
    image: {
      src: productImages.pantamex40,
      alt: "Pantamex-40 tablet packshot",
    },
    featured: true,
  }),
  productEntry({
    id: "pantamex-dsr",
    name: "Pantamex-DSR",
    dosageForm: "Capsules",
    category: "Gastrointestinal",
    packaging: "10 x 10 capsules",
    composition: [
      "Pantoprazole (gastro-resistant)",
      "Domperidone (prolonged-release) capsules IP",
    ],
    summary:
      "Pantoprazole and domperidone prolonged-release capsules for GI symptom control where prescribed.",
    image: {
      src: productImages.pantamexDsr,
      alt: "Pantamex-DSR capsule packshot",
    },
    featured: true,
  }),
  productEntry({
    id: "calinmex",
    name: "CALINMEX",
    dosageForm: "Tablets",
    category: "Bone & mineral nutrition",
    packaging: "30 tablets",
    composition: [
      "Calcium citrate malate",
      "Vitamin D3",
      "Manganese",
    ],
    summary:
      "Calcium and vitamin D support tablet with manganese for bone and mineral nutrition programmes.",
    image: {
      src: productImages.calinmex,
      alt: "CALINMEX tablet packshot",
    },
    featured: true,
  }),
  productEntry({
    id: "calinmex-forte",
    name: "Calinmex Forte",
    dosageForm: "Tablets",
    category: "Bone & mineral nutrition",
    packaging: "10 x 1 x 10 tablets",
    composition: [
      "Calcitriol",
      "Calcium citrate",
      "Methylcobalamin",
      "Vitamin K2-7",
      "Folic acid",
      "Zinc sulphate",
    ],
    summary:
      "Advanced bone-health tablet combining calcium pathway support, methylcobalamin, and zinc.",
    image: {
      src: productImages.calinmexForte,
      alt: "Calinmex Forte tablet packshot",
    },
    featured: false,
  }),
  productEntry({
    id: "capup-d3-drops",
    name: "CAPUP-D3 Drops",
    dosageForm: "Drops",
    category: "Vitamins",
    packaging: "30 ml bottle",
    composition: ["Cholecalciferol (Vitamin D3) drops"],
    summary:
      "Cholecalciferol oral drops for convenient vitamin D supplementation, including paediatric use as advised.",
    image: {
      src: productImages.capupD3Drops,
      alt: "CAPUP-D3 vitamin D3 drops packshot",
    },
    featured: false,
  }),
  productEntry({
    id: "capup-d3-capsules",
    name: "CAPUP-D3 60K",
    dosageForm: "Softgel capsules",
    category: "Vitamins",
    packaging: "Softgel capsule pack",
    composition: ["Cholecalciferol softgel capsules USP 60000 IU"],
    summary:
      "High-strength vitamin D3 softgel for repletion and maintenance protocols where indicated.",
    image: {
      src: productImages.capupD3Capsules,
      alt: "CAPUP-D3 60K softgel capsule packshot",
    },
    featured: true,
  }),
  productEntry({
    id: "cartimex-pro",
    name: "Cartimex Pro",
    dosageForm: "Tablets",
    category: "Musculoskeletal",
    packaging: "10 x 1 x 10 tablets",
    composition: [
      "Glucosamine sulphate",
      "Collagen peptide type-II",
      "Chondroitin sulphate sodium",
      "Cissus quadrangularis",
      "Vitamin C",
      "Sodium hyaluronate sulphate",
    ],
    summary:
      "Joint-support formulation combining glucosamine, chondroitin, collagen, and mobility-support actives.",
    image: {
      src: productImages.cartimexPro,
      alt: "Cartimex Pro tablet packshot",
    },
    featured: false,
  }),
  productEntry({
    id: "extenvit",
    name: "Extenvit",
    dosageForm: "Tablets",
    category: "Multivitamin",
    packaging: "2 x 10 tablets",
    composition: [
      "Amino acids",
      "Vitamins",
      "Natural extract",
      "Minerals",
    ],
    summary:
      "Broad-spectrum nutritional supplementation tablet with amino acids, vitamins, extracts, and minerals.",
    image: {
      src: productImages.extenvit,
      alt: "Extenvit tablet packshot",
    },
    featured: false,
  }),
  productEntry({
    id: "feriflex-xt",
    name: "Feriflex-XT",
    dosageForm: "Tablets",
    category: "Haematinics",
    packaging: "10 x 1 x 10 tablets",
    composition: [
      "Ferrous ascorbate",
      "Folic acid",
      "Zinc sulphate",
    ],
    summary:
      "Iron, folate, and zinc tablet for deficiency management and nutritional support plans.",
    image: {
      src: productImages.feriflexXt,
      alt: "Feriflex-XT tablet packshot",
    },
    featured: false,
  }),
  productEntry({
    id: "fericom-xt",
    name: "Fericom-XT",
    dosageForm: "Tablets",
    category: "Haematinics",
    packaging: "1 x 10 tablets",
    composition: [
      "Ferric pyrophosphate",
      "Folic acid",
      "Zinc sulphate",
    ],
    summary:
      "Haematinic tablet combining iron, folic acid, and zinc for supportive deficiency-care programmes.",
    image: {
      src: productImages.fericomXt,
      alt: "Fericom-XT tablet packshot",
    },
    featured: true,
  }),
  productEntry({
    id: "mexorex-d",
    name: "Mexorex-D",
    dosageForm: "Syrup",
    category: "Respiratory",
    packaging: "100 ml bottle",
    composition: [
      "Dextromethorphan hydrobromide",
      "Phenylephrine hydrochloride",
      "Chlorpheniramine maleate",
    ],
    summary:
      "Respiratory symptom-relief syrup combining cough suppressant, decongestant, and antihistamine support.",
    image: {
      src: productImages.mexorexD,
      alt: "Mexorex-D syrup bottle packshot",
    },
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
    "A selection from our audited tablet, capsule, drop, and syrup range with real packshots and composition detail.",
  cta: { label: "Explore products", href: "/products" },
} as const;

export const productsListingPage = {
  eyebrow: "Portfolio",
  title: "Product catalog",
  description:
    "Browse the Mexmed Pharma formulations identified in the migration audit. Each product page includes packshot, composition, dosage form, and pack information where available.",
  metaTitle: "Products",
  metaDescription:
    "Mexmed Pharma audited product catalog with real packshots for tablets, capsules, drops, and syrup. Enquiries: +91 88862 19335, info@mexmedpharma.com.",
  gridEyebrow: "Formulations",
  gridTitle: "Browse the full range",
  gridDescription:
    "The catalog is limited to the products confirmed in the migration audit and paired with current product imagery.",
} as const;

export const productsCatalogEnquiry = {
  title: "Discuss packs, pricing, or distribution",
  description:
    "Share your market, volumes, and timelines. We respond on the phone number and email shown on our contact page.",
  primaryCta: { label: "Send enquiry", href: "/contact" },
  secondaryLabel: "Call us",
} as const;
