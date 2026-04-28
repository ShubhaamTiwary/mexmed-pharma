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
    detailIntro:
      "Cefron-250 is the audit-confirmed 250 mg cefuroxime axetil tablet presentation in the Mexmed anti-infective line, shown in a compact strip-based pack for routine trade and product enquiries.",
    highlights: [
      "250 mg cefuroxime axetil strength is stated clearly on the front panel.",
      "Outer carton and strip artwork stay visually consistent across the Cefron range.",
      "Tablet presentation keeps the SKU easy to identify in catalog, stock, and distributor discussions.",
    ],
    labelNotes: [
      "Front panel reads 'Cefuroxime Axetil Tablets IP 250 mg'.",
      "Packshot shows both the carton and the matching tablet strip.",
      "Blue-and-white Cefron line styling distinguishes the lower-strength anti-infective reference.",
    ],
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
    detailIntro:
      "Cefron-500 is the higher-strength cefuroxime axetil tablet presentation captured in the audit materials, using the same clear Mexmed pack architecture as the Cefron-250 reference.",
    highlights: [
      "500 mg strength is called out prominently on the main display panel.",
      "Outer carton and strip artwork are aligned to the Cefron anti-infective family look.",
      "Strip-based tablet presentation is straightforward for quoting, stocking, and product identification.",
    ],
    labelNotes: [
      "Front panel reads 'Cefuroxime Axetil Tablets IP 500 mg'.",
      "Packshot includes both the outer carton and the lower strip presentation.",
      "Mexmed branding remains visible on the lower-right corner of the pack face.",
    ],
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
    packaging: "1 x 10 tablets with blister",
    composition: ["Pantoprazole gastro-resistant tablets IP"],
    summary:
      "Pantoprazole gastro-resistant tablets for acid-related disorders and reflux-management programmes.",
    detailIntro:
      "Pantamex-40 represents the single-agent pantoprazole tablet presentation in the Mexmed gastrointestinal range, shown with both carton and blister imagery in the supplied references.",
    highlights: [
      "The pack identifies the product as a gastro-resistant pantoprazole tablet I.P. presentation.",
      "Blister strip photography makes the tablet format immediately clear on the detail page.",
      "The Pantamex line gives the GI portfolio a consistent, easily recognizable visual family.",
    ],
    labelNotes: [
      "Front panel reads 'Pantoprazole Gastro-Resistant Tablets I.P.'.",
      "Packshot shows the outer carton together with the blister presentation.",
      "The visible strip format supports quick trade reference without relying on generic stock imagery.",
    ],
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
    detailIntro:
      "Pantamex-DSR is the combination GI presentation in the audited Mexmed range, pairing pantoprazole with prolonged-release domperidone in a capsule-led blister format.",
    highlights: [
      "Combination pack copy highlights both the gastro-resistant and prolonged-release components.",
      "Capsule blister presentation is visible directly in the supplied pack reference.",
      "The DSR naming distinguishes the combination SKU cleanly from the single-agent Pantamex tablet pack.",
    ],
    labelNotes: [
      "Front panel reads 'Pantoprazole Gastro-Resistant and Domperidone Prolonged-Release Capsules I.P.'.",
      "Packshot shows both carton artwork and the capsule blister strip.",
      "The carton keeps the same Pantamex family treatment while clearly marking the DSR variant.",
    ],
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
    detailIntro:
      "CALINMEX is the compact 30-tablet bone and mineral nutrition pack in the audited range, centered on calcium citrate malate with vitamin D3 and manganese.",
    highlights: [
      "30-tablet pack count is visible on the front face of the carton.",
      "Core bone-support actives are listed directly on the pack front for quick identification.",
      "The smaller mono-carton format gives this SKU a distinct presence within the calcium-support line.",
    ],
    labelNotes: [
      "Front panel reads 'Calcium citrate with Vitamin D3 & Manganese Tablets'.",
      "Packshot shows a 30-tablet callout on the upper-right of the carton.",
      "Blue pack styling differentiates CALINMEX from the stronger Forte presentation.",
    ],
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
    detailIntro:
      "Calinmex Forte is the expanded bone-support presentation in the audited portfolio, with a broader nutrient stack and a larger multi-strip tablet pack than the base CALINMEX SKU.",
    highlights: [
      "Front-panel copy lists the broader active combination directly on the carton.",
      "10 x 1 x 10 tablet presentation is visible on the reference packshot.",
      "Orange-and-gold pack styling separates the Forte variant from the standard CALINMEX carton.",
    ],
    labelNotes: [
      "Pack face includes calcitriol, calcium citrate, methylcobalamin, vitamin K2-7, folic acid, and zinc sulphate.",
      "The supplied image shows matching outer and strip artwork for the Forte variant.",
      "Carton artwork emphasizes the Calinmex-Forte label without relying on generic category imagery.",
    ],
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
    packaging: "30 ml drops bottle",
    composition: ["Cholecalciferol (Vitamin D3) drops"],
    summary:
      "Cholecalciferol oral drops for convenient vitamin D supplementation, including paediatric use as advised.",
    detailIntro:
      "CAPUP-D3 Drops is the liquid vitamin D3 presentation in the audited Mexmed set, shown in a 30 ml pack with nano-technology labeling and pediatric-oriented pack graphics.",
    highlights: [
      "Drops format gives the vitamin D3 line a clearly distinct presentation from the softgel capsule SKU.",
      "30 ml pack size is visible on the front panel of the carton.",
      "Reference artwork includes a nano-technology callout on the main display face.",
    ],
    labelNotes: [
      "Front panel reads 'Cholecalciferol (Vitamin D3) Drops'.",
      "The carton carries a 'Nano Technology' mark on the lower-right side.",
      "Pack graphics use child-focused imagery to differentiate the drops SKU visually.",
    ],
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
    detailIntro:
      "CAPUP-D3 60K is the high-strength vitamin D3 softgel presentation from the audited materials, with the 60000 IU strength called out directly on the visible pack reference.",
    highlights: [
      "USP 60000 IU strength is prominently displayed on the front panel.",
      "Softgel capsule format is visually distinct from the CAPUP-D3 drops presentation.",
      "The supplied reference shows both carton and strip artwork for fast SKU confirmation.",
    ],
    labelNotes: [
      "Front panel reads 'Cholecalciferol Softgel Capsules USP 60000 IU'.",
      "The CAPUP D3 60K naming is emphasized on both the carton and the strip.",
      "Orange-and-blue line styling helps separate the 60K softgel SKU from the drops carton.",
    ],
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
    detailIntro:
      "Cartimex Pro is the audit-confirmed musculoskeletal tablet reference in the Mexmed line, using a prominent joint-health visual system and visible front-pack benefit bullets.",
    highlights: [
      "Pack copy highlights clinical-strength glucosamine, chondroitin, and sodium hyaluronate positioning.",
      "Front-panel messaging states that the formulation soothes achy joints and promotes mobility and flexibility.",
      "The larger multi-strip tablet pack is clearly shown in both carton and lower-strip views.",
    ],
    labelNotes: [
      "Front panel includes the actives list with collagen peptide type-II and Cissus quadrangularis.",
      "Visible pack bullet reads 'Clinical-strength doses of glucosamine/chondroitin & sodium hyaluronate'.",
      "A second visible bullet reads 'Soothes Achy-joints Promotes mobility & Flexibility'.",
    ],
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
    packaging: "Multiple strip presentations shown on pack",
    composition: [
      "Amino acids",
      "Vitamins",
      "Natural extract",
      "Minerals",
    ],
    summary:
      "Broad-spectrum nutritional supplementation tablet with amino acids, vitamins, extracts, and minerals.",
    detailIntro:
      "Extenvit is the audited multivitamin tablet reference from Mexmed, positioned on pack as a broad-spectrum nutritional supplement with amino acids, vitamins, natural extract, and minerals.",
    highlights: [
      "Front-pack copy names amino acids, vitamins, natural extract, and minerals in one presentation.",
      "The supplied packshot shows more than one strip configuration, indicating multiple visible tablet presentations.",
      "Red-and-ivory line styling makes Extenvit easy to separate from the haematinic and bone-support cartons.",
    ],
    labelNotes: [
      "Front panel reads 'Amino Acids, Vitamins & Natural Extract With All Minerals Tablets'.",
      "The carton includes the note 'Dietary supplement not for medicinal use'.",
      "Reference artwork shows two strip counts on the supplied packshot rather than a single uniform presentation.",
    ],
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
    detailIntro:
      "Feriflex-XT is the audit-confirmed haematinic tablet reference in the Mexmed set, with ferrous ascorbate, folic acid, and zinc sulphate called out across a large multi-strip carton format.",
    highlights: [
      "10 x 1 x 10 tablet count is visible on the outer carton.",
      "Front-panel typography makes the iron, folate, and zinc combination immediately legible.",
      "The white, green, and red pack system keeps the haematinic line distinct inside the catalog grid.",
    ],
    labelNotes: [
      "Front panel reads 'Ferrous Ascorbate, Folic Acid & Zinc Sulphate Tablets'.",
      "The supplied image shows both the larger outer pack and the lower strip box.",
      "Blood-cell visuals on the carton reinforce the product's haematinic identity without using stock imagery.",
    ],
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
    packaging: "Multiple strip presentations shown on pack",
    composition: [
      "Ferrous fumarate",
      "Folic acid",
      "Zinc sulphate",
    ],
    summary:
      "Haematinic tablet combining iron, folic acid, and zinc for supportive deficiency-care programmes.",
    detailIntro:
      "Fericom-XT is the second haematinic tablet reference captured in the audit materials, using a darker carton style and front-pack 'extra iron gain' messaging for quick commercial identification.",
    highlights: [
      "Front panel names ferrous fumarate, folic acid, and zinc sulphate directly on the pack.",
      "The artwork includes a visible 'For EXTRA IRON Gain' line on the main face.",
      "The supplied image shows more than one strip count on the packaging, so the product is best referenced as a multi-strip tablet presentation.",
    ],
    labelNotes: [
      "Front panel includes the note 'Dietary supplement not for medicinal use'.",
      "Visible carton copy reads 'For EXTRA IRON Gain'.",
      "Packshot shows a larger outer box together with a lower strip box carrying a different visible strip count.",
    ],
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
    detailIntro:
      "Mexorex-D is the audited respiratory syrup presentation in the Mexmed range, shown as a bottle-led format that visually separates it from the tablet and capsule-heavy parts of the catalog.",
    highlights: [
      "Bottle presentation gives the respiratory SKU a clearly distinct silhouette in the product lineup.",
      "Front-label text supports quick identification of the three-part cough and cold combination.",
      "The supplied reference keeps the page grounded in the actual bottle artwork rather than category stock photography.",
    ],
    labelNotes: [
      "The bottle label references dextromethorphan hydrobromide, phenylephrine hydrochloride, and chlorpheniramine maleate.",
      "Packshot shows the liquid format directly, which resolves the old-site syrup versus tablet inconsistency.",
      "100 ml bottle presentation is used as the primary pack reference on the detail page.",
    ],
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
