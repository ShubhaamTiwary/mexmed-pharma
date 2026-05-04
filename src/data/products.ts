import type { Product } from "@/types/product";

/** Canonical product catalog for Mexmed Pharma. */

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
  mexopamP: `${cloudinaryBase}/q_auto/f_auto/v1777866150/WhatsApp_Image_2026-04-30_at_11.13.20_jc2kqw.jpg`,
  urovive: `${cloudinaryBase}/q_auto/f_auto/v1777866150/WhatsApp_Image_2026-04-30_at_11.13.20_2_yxrrto.jpg`,
  obemex: `${cloudinaryBase}/q_auto/f_auto/v1777866152/WhatsApp_Image_2026-04-30_at_11.13.20_1_crf4at.jpg`,
  mexopamSp: `${cloudinaryBase}/q_auto/f_auto/v1777866153/WhatsApp_Image_2026-04-30_at_11.13.21_xplrou.jpg`,
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
      "Cefuroxime axetil 250 mg tablet presentation in the Mexmed anti-infective portfolio.",
    detailIntro:
      "Cefron-250 is the lower-strength cefuroxime axetil entry in the Mexmed anti-infective line, presented as a straightforward tablet SKU for routine product review and trade reference.",
    highlights: [
      "Single-ingredient cefuroxime axetil tablet at 250 mg strength.",
      "Lower-strength Cefron option within the anti-infective range.",
      "Clear tablet presentation supports quick identification during prescriber-side or distributor-side review.",
    ],
    labelNotes: [
      "Front panel reads 'Cefuroxime Axetil Tablets IP 250 mg'.",
      "Published reference includes the outer carton together with the matching lower pack presentation.",
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
      "Cefuroxime axetil 500 mg tablet presentation in the Mexmed anti-infective portfolio.",
    detailIntro:
      "Cefron-500 is the higher-strength cefuroxime axetil entry in the Mexmed anti-infective line, positioned as the companion tablet reference to Cefron-250.",
    highlights: [
      "Single-ingredient cefuroxime axetil tablet at 500 mg strength.",
      "Higher-strength Cefron option within the same anti-infective product family.",
      "Straightforward tablet SKU for product listing, stock review, and enquiry discussions.",
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
      "Pantoprazole gastro-resistant tablet presentation in the Mexmed gastrointestinal portfolio.",
    detailIntro:
      "Pantamex-40 is the pantoprazole-only entry in the Mexmed gastrointestinal range, offering a direct gastro-resistant tablet reference alongside the combination Pantamex-DSR capsule.",
    highlights: [
      "Single-agent pantoprazole gastro-resistant tablet presentation.",
      "Core acid-management reference within the Pantamex family.",
      "Tablet format gives buyers and trade partners a clearly differentiated option from the DSR capsule variant.",
    ],
    labelNotes: [
      "Front panel reads 'Pantoprazole Gastro-Resistant Tablets I.P.'.",
      "Published reference pairs the outer carton with the matching blister presentation.",
      "Visible strip presentation helps identify the tablet SKU clearly during trade review.",
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
      "Pantoprazole with prolonged-release domperidone capsule presentation in the Mexmed gastrointestinal portfolio.",
    detailIntro:
      "Pantamex-DSR is the combination gastrointestinal entry in the Mexmed range, pairing pantoprazole with prolonged-release domperidone in a capsule-based presentation.",
    highlights: [
      "Two-component GI formulation combining pantoprazole with prolonged-release domperidone.",
      "Capsule format distinguishes the DSR SKU from the single-agent Pantamex tablet.",
      "Useful as the combination Pantamex reference in product comparison and distributor discussions.",
    ],
    labelNotes: [
      "Front panel reads 'Pantoprazole Gastro-Resistant and Domperidone Prolonged-Release Capsules I.P.'.",
      "Published reference pairs the carton artwork with the capsule blister strip.",
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
      "Calcium, vitamin D3, and manganese tablet presentation for bone and mineral nutrition.",
    detailIntro:
      "CALINMEX is the compact bone and mineral nutrition entry in the Mexmed range, built around calcium citrate malate with vitamin D3 and manganese in a smaller 30-tablet presentation.",
    highlights: [
      "Three-part bone-support formulation centered on calcium, vitamin D3, and manganese.",
      "30-tablet format makes it the more compact option in the Calinmex line.",
      "Suitable as the base Calinmex reference when compared with the broader Forte variant.",
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
      "Expanded bone-health tablet presentation with calcium, calcitriol, methylcobalamin, vitamin K2-7, folic acid, and zinc.",
    detailIntro:
      "Calinmex Forte is the broader bone-health entry in the Mexmed range, combining calcium support with calcitriol, methylcobalamin, vitamin K2-7, folic acid, and zinc in a larger tablet pack.",
    highlights: [
      "Multi-nutrient bone-support formulation with a broader composition than standard CALINMEX.",
      "Combines calcium pathway support with vitamin, mineral, and methylcobalamin components.",
      "Larger tablet presentation makes it the premium Calinmex-family reference for product review.",
    ],
    labelNotes: [
      "Pack face includes calcitriol, calcium citrate, methylcobalamin, vitamin K2-7, folic acid, and zinc sulphate.",
      "Published reference includes both the outer pack and the matching lower pack presentation for the Forte variant.",
      "Carton artwork emphasizes the Calinmex Forte identity within the bone-health range.",
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
      "Liquid cholecalciferol drops presentation for vitamin D3 supplementation.",
    detailIntro:
      "CAPUP-D3 Drops is the liquid vitamin D3 entry in the Mexmed range, offering a drops-based cholecalciferol presentation alongside the higher-strength CAPUP-D3 60K softgel.",
    highlights: [
      "Liquid cholecalciferol format suited to vitamin D3 drops presentation.",
      "30 ml pack reference keeps the product distinct from the softgel capsule SKU.",
      "Useful when the catalog needs a non-capsule vitamin D3 option.",
    ],
    labelNotes: [
      "Front panel reads 'Cholecalciferol (Vitamin D3) Drops'.",
      "The carton carries a 'Nano Technology' mark on the lower-right side.",
      "Carton graphics use a pediatric-friendly visual treatment to distinguish the drops SKU from the capsule entry.",
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
      "High-strength cholecalciferol 60000 IU softgel presentation in the Mexmed vitamin portfolio.",
    detailIntro:
      "CAPUP-D3 60K is the higher-strength softgel entry in the Mexmed vitamin range, built around cholecalciferol USP 60000 IU for a single-strength vitamin D3 reference.",
    highlights: [
      "Single-ingredient vitamin D3 softgel at 60000 IU strength.",
      "Softgel presentation clearly separates the SKU from CAPUP-D3 Drops.",
      "Useful as the higher-strength CAPUP reference in product and market discussions.",
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
      "Multi-ingredient musculoskeletal tablet presentation centered on joint and mobility support.",
    detailIntro:
      "Cartimex Pro is the musculoskeletal tablet entry in the Mexmed portfolio, combining glucosamine, collagen peptide, chondroitin, cissus quadrangularis, vitamin C, and sodium hyaluronate in one formulation.",
    highlights: [
      "Broad musculoskeletal composition with glucosamine, collagen peptide, chondroitin, and sodium hyaluronate.",
      "Built as a single tablet reference around joint and mobility support positioning.",
      "Suited to musculoskeletal product review where a multi-component composition is preferred.",
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
      "Broad-spectrum nutritional supplement tablet presentation with amino acids, vitamins, extracts, and minerals.",
    detailIntro:
      "Extenvit is the Mexmed multivitamin-style nutrition entry, presented as a dietary supplement tablet combining amino acids, vitamins, natural extract, and minerals.",
    highlights: [
      "Broad composition built around amino acids, vitamins, natural extract, and minerals.",
      "Dietary supplement positioning makes it distinct from the prescription-style therapy products in the range.",
      "Useful as a general nutritional-support tablet reference in catalog discussions.",
    ],
    labelNotes: [
      "Front panel reads 'Amino Acids, Vitamins & Natural Extract With All Minerals Tablets'.",
      "The carton includes the note 'Dietary supplement not for medicinal use'.",
      "Published pack references show multiple strip presentations rather than one uniform strip count.",
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
      "Ferrous ascorbate, folic acid, and zinc tablet presentation in the Mexmed haematinic portfolio.",
    detailIntro:
      "Feriflex-XT is the core haematinic tablet entry in the Mexmed range, combining ferrous ascorbate with folic acid and zinc sulphate in a straightforward multi-strip presentation.",
    highlights: [
      "Three-part haematinic composition centered on iron, folic acid, and zinc.",
      "Suitable as a core iron-support reference within the Mexmed catalog.",
      "Clear tablet presentation supports quick comparison with the related Fericom-XT entry.",
    ],
    labelNotes: [
      "Front panel reads 'Ferrous Ascorbate, Folic Acid & Zinc Sulphate Tablets'.",
      "Published reference includes both the larger outer pack and the lower strip box.",
      "Blood-cell artwork on the carton reinforces the product's haematinic positioning.",
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
      "Iron, folic acid, and zinc tablet presentation as a second haematinic option in the Mexmed portfolio.",
    detailIntro:
      "Fericom-XT is the second haematinic tablet entry in the Mexmed range, pairing iron, folic acid, and zinc in a presentation that sits alongside Feriflex-XT.",
    highlights: [
      "Three-part haematinic composition built around iron, folic acid, and zinc.",
      "Alternative Mexmed haematinic reference alongside Feriflex-XT.",
      "Useful where the catalog needs a second iron-support tablet option with a distinct pack identity.",
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
      "Three-component respiratory syrup presentation in the Mexmed portfolio.",
    detailIntro:
      "Mexorex-D is the liquid respiratory entry in the Mexmed range, combining dextromethorphan hydrobromide, phenylephrine hydrochloride, and chlorpheniramine maleate in a syrup presentation.",
    highlights: [
      "Three-component cough-and-cold formulation reference.",
      "Liquid dosage form separates the product from the tablet- and capsule-led sections of the catalog.",
      "Useful as the respiratory syrup SKU for product listing and trade-side review.",
    ],
    labelNotes: [
      "The bottle label references dextromethorphan hydrobromide, phenylephrine hydrochloride, and chlorpheniramine maleate.",
      "Published reference confirms the liquid syrup format directly.",
      "100 ml bottle presentation is used as the primary pack reference on the detail page.",
    ],
    image: {
      src: productImages.mexorexD,
      alt: "Mexorex-D syrup bottle packshot",
    },
    featured: false,
  }),
  productEntry({
    id: "urovive",
    name: "Urovive Tablet",
    dosageForm: "Tablets",
    category: "Urology support",
    packaging: "10 x 1 x 10 tablets",
    composition: [
      "Cranberry",
      "D-Mannose",
      "Potassium Citrate",
      "Magnesium Sulphate",
    ],
    summary:
      "Urinary-support dietary supplement tablet presentation with cranberry, D-mannose, potassium citrate, and magnesium sulphate.",
    detailIntro:
      "Urovive Tablet adds a urinary-support dietary supplement entry to the Mexmed range, combining cranberry, D-mannose, potassium citrate, and magnesium sulphate in a tablet presentation.",
    highlights: [
      "Four-component dietary supplement formulation with cranberry and D-mannose at the core.",
      "Tablet presentation gives the catalog a distinct urinary-support supplement entry.",
      "Useful as a non-antibiotic urology-support reference in product discussions.",
    ],
    labelNotes: [
      "Front panel reads 'Cranberry, D-Mannose, Potassium Citrate & Magnesium Sulphate Tablets'.",
      "The carton carries a visible 'Dietary Supplement' note on the upper-left area.",
      "Pack count is shown as '10 x 1 x 10 Tablet' on the carton and '1 x 10 Tablet' on the lower pack reference.",
    ],
    image: {
      src: productImages.urovive,
      alt: "Urovive Tablet packshot",
    },
    featured: false,
  }),
  productEntry({
    id: "obemex",
    name: "OBEMEX Tablets",
    dosageForm: "Tablets",
    category: "Specialty nutrition",
    packaging: "10 x 1 x 10 tablets",
    composition: [
      "Myo-Inositol",
      "D-Chiro-inositol",
    ],
    summary:
      "Myo-inositol and D-chiro-inositol tablet presentation for specialty nutritional support.",
    detailIntro:
      "OBEMEX Tablets adds a two-component inositol-based nutritional entry to the Mexmed range, built around myo-inositol and D-chiro-inositol in tablet form.",
    highlights: [
      "Two-component inositol formulation with myo-inositol and D-chiro-inositol.",
      "Tablet dosage form provides a clear specialty-nutrition reference within the expanded catalog.",
      "Useful where the product mix needs a focused inositol-based support entry.",
    ],
    labelNotes: [
      "Front panel reads 'Myo-Inositol With D-Chiro-inositol Tablets'.",
      "The carton shows a '10 x 1 x 10 Tablets' count on the upper-left edge.",
      "Branding is presented as 'OBEMEX Tablets' on both the upper carton and lower pack.",
    ],
    image: {
      src: productImages.obemex,
      alt: "OBEMEX Tablets packshot",
    },
    featured: false,
  }),
  productEntry({
    id: "mexopam-p",
    name: "MEXOPAM-P Tablets",
    dosageForm: "Tablets",
    category: "Pain management",
    packaging: "10 x 10 tablets with blister",
    composition: [
      "Aceclofenac",
      "Paracetamol",
    ],
    summary:
      "Aceclofenac and paracetamol tablet presentation in the Mexmed pain-management portfolio.",
    detailIntro:
      "MEXOPAM-P Tablets is a two-component pain-management entry in the Mexmed range, combining aceclofenac and paracetamol in a tablet presentation.",
    highlights: [
      "Two-component analgesic composition built around aceclofenac and paracetamol.",
      "Tablet format supports straightforward pain-management product reference.",
      "Useful as the base Mexopam variant when compared with the broader MEXOPAM-SP formulation.",
    ],
    labelNotes: [
      "Front panel reads 'Aceclofenac & Paracetamol Tablets IP'.",
      "The carton displays a visible 'Rx' mark and a '10x10 Tablets' count.",
      "Branding appears as 'MEXOPAM-P Tablets' on both the top flap and lower-left panel.",
    ],
    image: {
      src: productImages.mexopamP,
      alt: "MEXOPAM-P Tablets packshot",
    },
    featured: false,
  }),
  productEntry({
    id: "mexopam-sp",
    name: "MEXOPAM-SP Tablets",
    dosageForm: "Tablets",
    category: "Pain management",
    packaging: "10 x 10 tablets with blister",
    composition: [
      "Aceclofenac",
      "Paracetamol",
      "Serratiopeptidase",
    ],
    summary:
      "Aceclofenac, paracetamol, and serratiopeptidase tablet presentation in the Mexmed pain-management portfolio.",
    detailIntro:
      "MEXOPAM-SP Tablets is the broader pain-management entry in the Mexmed range, combining aceclofenac, paracetamol, and serratiopeptidase in a tablet presentation.",
    highlights: [
      "Three-component pain-management composition with serratiopeptidase added to the aceclofenac-paracetamol base.",
      "Tablet format keeps the SKU directly comparable with MEXOPAM-P.",
      "Useful as the expanded Mexopam reference when a broader combination is required.",
    ],
    labelNotes: [
      "Front panel reads 'Aceclofenac, Paracetamol & Serratiopeptidase Tablets'.",
      "The carton carries an 'Rx' mark and a '10x10 Tablets' count on the front face.",
      "Branding appears as 'MEXOPAM-SP Tablets' on the top flap and lower-left portion of the carton.",
    ],
    image: {
      src: productImages.mexopamSp,
      alt: "MEXOPAM-SP Tablets packshot",
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
    "A selection from the Mexmed tablet, capsule, drop, and syrup range with real packshots and composition detail.",
  cta: { label: "Explore products", href: "/products" },
} as const;

export const productsListingPage = {
  eyebrow: "Portfolio",
  title: "Product catalog",
  description:
    "Browse the Mexmed Pharma formulations currently published on the website. Each product page includes packshot, composition, dosage form, and pack information where available.",
  metaTitle: "Products",
  metaDescription:
    "Mexmed Pharma product catalog with real packshots for tablets, capsules, drops, and syrup. Enquiries: +91 88862 19335, info@mexmedpharma.com.",
  gridEyebrow: "Formulations",
  gridTitle: "Browse the full range",
  gridDescription:
    "Explore the current Mexmed range paired with visible product imagery and structured product detail.",
} as const;

export const productsCatalogEnquiry = {
  title: "Discuss packs, pricing, or distribution",
  description:
    "Share your market, volumes, and timelines. We respond on the phone number and email shown on our contact page.",
  primaryCta: { label: "Send enquiry", href: "/contact" },
  secondaryLabel: "Call us",
} as const;
