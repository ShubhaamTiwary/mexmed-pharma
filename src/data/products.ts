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
  urovive: `${cloudinaryBase}/q_auto/f_auto/v1777866152/WhatsApp_Image_2026-04-30_at_11.13.20_1_crf4at.jpg`,
  obemex: `${cloudinaryBase}/q_auto/f_auto/v1777866150/WhatsApp_Image_2026-04-30_at_11.13.20_2_yxrrto.jpg`,
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
    seoTitle: "Cefron-250 — Cefuroxime Axetil 250 mg Tablets",
    metaDescription:
      "Cefron-250 by Mexmed Pharma is a cefuroxime axetil 250 mg tablet — a second-generation cephalosporin antibiotic. View composition, pack sizes & enquiry details.",
    regulatoryClass: "prescription",
    molecule: ["Cefuroxime Axetil"],
    drugClass: "Second-generation cephalosporin antibiotic",
    uses: [
      "Cefuroxime axetil is a second-generation cephalosporin antibiotic.",
      "Cefuroxime-class antibiotics are prescribed by doctors for certain bacterial infections.",
      "Cefron-250 is the 250 mg strength; a 500 mg strength is available as Cefron-500.",
      "Prescription antibiotic — use only under medical supervision and complete the full course as directed.",
    ],
    directions:
      "Use exactly as prescribed by a registered medical practitioner. Do not self-medicate with antibiotics.",
    storage:
      "Store in a cool, dry place below 25°C, protected from light. Keep out of reach of children.",
    faqs: [
      {
        question: "What is Cefron-250?",
        answer:
          "Cefron-250 is Mexmed Pharma's cefuroxime axetil 250 mg tablet, a second-generation cephalosporin antibiotic. It is a prescription medicine — use only as directed by a doctor.",
      },
      {
        question: "What is the difference between Cefron-250 and Cefron-500?",
        answer:
          "They are the same molecule, cefuroxime axetil, at different strengths — 250 mg and 500 mg. Your doctor decides the appropriate strength.",
      },
      {
        question: "How should Cefron-250 be taken?",
        answer:
          "Exactly as prescribed by your doctor. Complete the full antibiotic course even if you feel better.",
      },
      {
        question: "Is Cefron-250 available over the counter?",
        answer:
          "No. It is a prescription antibiotic and should be used under medical supervision.",
      },
    ],
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
      alt: "Cefron-250 tablets carton — cefuroxime axetil 250 mg cephalosporin antibiotic by Mexmed Pharma",
    },
    featured: true,
  }),
  productEntry({
    id: "cefron-500",
    seoTitle: "Cefron-500 — Cefuroxime Axetil 500 mg Tablets",
    metaDescription:
      "Cefron-500 by Mexmed Pharma is a cefuroxime axetil 500 mg tablet — a second-generation cephalosporin antibiotic. View composition, pack sizes & enquiry details.",
    regulatoryClass: "prescription",
    molecule: ["Cefuroxime Axetil"],
    drugClass: "Second-generation cephalosporin antibiotic",
    uses: [
      "Cefuroxime axetil is a second-generation cephalosporin antibiotic.",
      "Cefuroxime-class antibiotics are prescribed by doctors for certain bacterial infections.",
      "Cefron-500 is the higher 500 mg strength; a 250 mg strength is available as Cefron-250.",
      "Prescription antibiotic — use only under medical supervision and complete the full course as directed.",
    ],
    directions:
      "Use exactly as prescribed by a registered medical practitioner. Do not self-medicate with antibiotics.",
    storage:
      "Store in a cool, dry place below 25°C, protected from light. Keep out of reach of children.",
    faqs: [
      {
        question: "What is Cefron-500?",
        answer:
          "Cefron-500 is Mexmed Pharma's cefuroxime axetil 500 mg tablet, a second-generation cephalosporin antibiotic. It is a prescription medicine — use only as directed by a doctor.",
      },
      {
        question: "What is the difference between Cefron-500 and Cefron-250?",
        answer:
          "They are the same molecule, cefuroxime axetil, at different strengths — 500 mg and 250 mg. Your doctor decides the appropriate strength.",
      },
      {
        question: "How should Cefron-500 be taken?",
        answer:
          "Exactly as prescribed by your doctor. Complete the full antibiotic course even if you feel better.",
      },
      {
        question: "Is Cefron-500 available over the counter?",
        answer:
          "No. It is a prescription antibiotic and should be used under medical supervision.",
      },
    ],
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
      alt: "Cefron-500 tablets carton — cefuroxime axetil 500 mg cephalosporin antibiotic by Mexmed Pharma",
    },
    featured: false,
  }),
  productEntry({
    id: "pantamex-40",
    seoTitle: "Pantamex-40 — Pantoprazole 40 mg Gastro-Resistant Tablets",
    metaDescription:
      "Pantamex-40 by Mexmed Pharma is a pantoprazole 40 mg gastro-resistant tablet — a proton pump inhibitor (PPI). View composition, pack sizes & enquiry details.",
    regulatoryClass: "prescription",
    molecule: ["Pantoprazole"],
    drugClass: "Proton pump inhibitor (PPI)",
    uses: [
      "Pantoprazole is a proton pump inhibitor (PPI) that lowers stomach acid production.",
      "PPIs are prescribed by doctors for acid-related conditions.",
      "Pantamex-40 is the single-agent pantoprazole tablet; a pantoprazole + domperidone combination is available as Pantamex-DSR.",
      "Prescription medicine — use under medical supervision.",
    ],
    directions:
      "Use as prescribed by a doctor, usually before food. Follow your prescription.",
    storage:
      "Store in a cool, dry place below 25°C, protected from light. Keep out of reach of children.",
    faqs: [
      {
        question: "What is Pantamex-40 used for?",
        answer:
          "Pantamex-40 contains pantoprazole, a proton pump inhibitor that reduces stomach acid. It is prescribed by doctors for acid-related conditions — use as directed.",
      },
      {
        question: "Is Pantamex-40 taken before or after food?",
        answer:
          "Pantoprazole is generally taken before food, but always follow your doctor's instructions.",
      },
      {
        question: "How is Pantamex-40 different from Pantamex-DSR?",
        answer:
          "Pantamex-40 is pantoprazole only; Pantamex-DSR combines pantoprazole with prolonged-release domperidone.",
      },
      {
        question: "Is Pantamex-40 a prescription medicine?",
        answer:
          "Yes. Use it only under medical supervision.",
      },
    ],
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
      alt: "Pantamex-40 tablets carton — pantoprazole 40 mg gastro-resistant proton pump inhibitor by Mexmed Pharma",
    },
    featured: true,
  }),
  productEntry({
    id: "pantamex-dsr",
    seoTitle: "Pantamex-DSR — Pantoprazole + Domperidone Capsules",
    metaDescription:
      "Pantamex-DSR by Mexmed Pharma pairs pantoprazole (gastro-resistant) with prolonged-release domperidone in a capsule. View composition, packs & enquiry details.",
    regulatoryClass: "prescription",
    molecule: ["Pantoprazole", "Domperidone"],
    drugClass: "Proton pump inhibitor + prokinetic combination",
    uses: [
      "Combines pantoprazole, a proton pump inhibitor, with prolonged-release domperidone, a prokinetic.",
      "This PPI + prokinetic combination is prescribed by doctors for acid-related symptoms.",
      "The single-agent pantoprazole tablet is available as Pantamex-40.",
      "Prescription medicine — use under medical supervision.",
    ],
    directions:
      "Use as prescribed by a doctor, usually before food. Follow your prescription.",
    storage:
      "Store in a cool, dry place below 25°C, protected from light. Keep out of reach of children.",
    faqs: [
      {
        question: "What is Pantamex-DSR?",
        answer:
          "Pantamex-DSR is a capsule combining pantoprazole (gastro-resistant) with prolonged-release domperidone. It is a prescription medicine — use as directed by a doctor.",
      },
      {
        question: "How is Pantamex-DSR different from Pantamex-40?",
        answer:
          "Pantamex-DSR adds prolonged-release domperidone to pantoprazole, whereas Pantamex-40 is pantoprazole alone.",
      },
      {
        question: "When is Pantamex-DSR taken?",
        answer:
          "Generally before food, but follow your doctor's instructions.",
      },
      {
        question: "Is Pantamex-DSR a prescription medicine?",
        answer:
          "Yes. Use it only under medical supervision.",
      },
    ],
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
      alt: "Pantamex-DSR carton — pantoprazole and prolonged-release domperidone capsules by Mexmed Pharma",
    },
    featured: true,
  }),
  productEntry({
    id: "calinmex",
    seoTitle: "CALINMEX — Calcium, Vitamin D3 & Manganese Tablets",
    metaDescription:
      "CALINMEX by Mexmed Pharma is a calcium citrate malate, vitamin D3 & manganese tablet for bone & mineral nutrition. View composition, directions & pack details.",
    regulatoryClass: "supplement",
    molecule: ["Calcium Citrate Malate", "Vitamin D3", "Manganese"],
    drugClass: "Calcium + vitamin D3 bone-health supplement",
    uses: [
      "Provides calcium as calcium citrate malate, with vitamin D3 and manganese.",
      "Calcium and vitamin D3 support the maintenance of normal bones.",
      "Formulated as a compact 30-tablet bone & mineral nutrition supplement.",
      "A broader bone-health formulation is available as Calinmex Forte.",
    ],
    directions:
      "One tablet daily, or as directed by a healthcare professional or dietician.",
    storage:
      "Store in a cool, dry place, protected from light. Keep out of reach of children.",
    faqs: [
      {
        question: "What is CALINMEX?",
        answer:
          "CALINMEX is a dietary supplement providing calcium (calcium citrate malate), vitamin D3, and manganese for bone and mineral nutrition. It is not intended to diagnose, treat, cure, or prevent disease.",
      },
      {
        question: "How is CALINMEX different from Calinmex Forte?",
        answer:
          "CALINMEX is a compact calcium + vitamin D3 + manganese tablet, while Calinmex Forte adds calcitriol, methylcobalamin, vitamin K2-7, folic acid, and zinc.",
      },
      {
        question: "How is CALINMEX taken?",
        answer:
          "One tablet daily, or as directed by a healthcare professional.",
      },
    ],
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
      alt: "CALINMEX tablets carton — calcium citrate malate with vitamin D3 and manganese bone-health supplement by Mexmed Pharma",
    },
    featured: true,
  }),
  productEntry({
    id: "calinmex-forte",
    seoTitle: "Calinmex Forte — Calcitriol, Calcium & Multimineral Tablets",
    metaDescription:
      "Calinmex Forte by Mexmed Pharma combines calcitriol, calcium citrate, methylcobalamin, vitamin K2-7, folic acid & zinc for bone-health support. View details.",
    regulatoryClass: "prescription",
    molecule: [
      "Calcitriol",
      "Calcium Citrate",
      "Methylcobalamin",
      "Vitamin K2-7",
      "Folic Acid",
      "Zinc Sulphate",
    ],
    drugClass: "Calcitriol + calcium multimineral bone-health formulation",
    uses: [
      "Combines calcitriol (an active form of vitamin D) with calcium citrate and supporting nutrients.",
      "Adds methylcobalamin, vitamin K2-7, folic acid, and zinc to the calcium base.",
      "Positioned as the broader bone-health formulation compared with CALINMEX.",
      "Contains calcitriol — use under medical supervision.",
    ],
    directions:
      "Use as directed by a registered medical practitioner.",
    storage:
      "Store in a cool, dry place, protected from light. Keep out of reach of children.",
    faqs: [
      {
        question: "What is Calinmex Forte?",
        answer:
          "Calinmex Forte is a bone-health formulation combining calcitriol, calcium citrate, methylcobalamin, vitamin K2-7, folic acid, and zinc. Because it contains calcitriol, use it under medical supervision.",
      },
      {
        question: "How is Calinmex Forte different from CALINMEX?",
        answer:
          "Calinmex Forte has a broader composition (including calcitriol, methylcobalamin, vitamin K2-7, folic acid, and zinc), whereas CALINMEX is a compact calcium + vitamin D3 + manganese tablet.",
      },
      {
        question: "How is Calinmex Forte taken?",
        answer:
          "As directed by a registered medical practitioner.",
      },
    ],
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
      alt: "Calinmex Forte tablets carton — calcitriol, calcium citrate, methylcobalamin, vitamin K2-7, folic acid and zinc bone-health formulation by Mexmed Pharma",
    },
    featured: false,
  }),
  productEntry({
    id: "capup-d3-drops",
    seoTitle: "CAPUP-D3 Drops — Cholecalciferol (Vitamin D3) Drops",
    metaDescription:
      "CAPUP-D3 Drops by Mexmed Pharma is a liquid cholecalciferol (vitamin D3) drops presentation for daily supplementation. View composition, directions & pack details.",
    regulatoryClass: "supplement",
    molecule: ["Cholecalciferol (Vitamin D3)"],
    drugClass: "Vitamin D3 oral drops supplement",
    uses: [
      "Provides cholecalciferol (vitamin D3) in an easy-to-dose liquid drops format.",
      "Vitamin D3 supports the normal absorption of calcium and the maintenance of normal bones.",
      "The drops format suits low daily dosing, including pediatric use under guidance.",
      "A high-strength 60000 IU softgel is available as CAPUP-D3 60K.",
    ],
    directions:
      "Use as directed by a healthcare professional; suited to daily drop-based dosing.",
    storage:
      "Store in a cool, dry place, protected from light. Keep out of reach of children.",
    faqs: [
      {
        question: "What is CAPUP-D3 Drops?",
        answer:
          "CAPUP-D3 Drops is a liquid vitamin D3 (cholecalciferol) supplement in a drops format, suited to daily low-dose supplementation. Use as directed by a healthcare professional.",
      },
      {
        question: "How is CAPUP-D3 Drops different from CAPUP-D3 60K?",
        answer:
          "CAPUP-D3 Drops is a liquid for daily dosing; CAPUP-D3 60K is a high-strength 60000 IU softgel, commonly taken weekly.",
      },
      {
        question: "Can children take CAPUP-D3 Drops?",
        answer:
          "The drops format is designed for flexible dosing, but always use it under the guidance of a healthcare professional, especially for children.",
      },
    ],
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
      alt: "CAPUP-D3 Drops carton — cholecalciferol (vitamin D3) oral drops by Mexmed Pharma",
    },
    featured: false,
  }),
  productEntry({
    id: "capup-d3-capsules",
    seoTitle: "CAPUP-D3 60K — Cholecalciferol 60000 IU Softgels",
    metaDescription:
      "CAPUP-D3 60K by Mexmed Pharma is a cholecalciferol (vitamin D3) 60000 IU softgel capsule. View composition, directions, pack details & enquiry information.",
    regulatoryClass: "supplement",
    molecule: ["Cholecalciferol (Vitamin D3) 60000 IU"],
    drugClass: "High-strength vitamin D3 (cholecalciferol) supplement",
    uses: [
      "Provides high-strength cholecalciferol (vitamin D3) at 60000 IU per softgel.",
      "Vitamin D3 supports the normal absorption of calcium and phosphorus and the maintenance of normal bones.",
      "Suited to periodic vitamin D3 supplementation under professional guidance.",
    ],
    directions:
      "Take as directed by a healthcare professional. High-strength 60000 IU vitamin D3 is commonly taken on a weekly schedule.",
    storage:
      "Store in a cool, dry place, protected from light. Keep out of reach of children.",
    faqs: [
      {
        question: "What is CAPUP-D3 60K?",
        answer:
          "CAPUP-D3 60K is a vitamin D3 (cholecalciferol) softgel providing 60000 IU per capsule. Because it is high-strength, take it as directed by a healthcare professional.",
      },
      {
        question: "How is CAPUP-D3 60K taken?",
        answer:
          "As directed by a healthcare professional; 60000 IU vitamin D3 is commonly taken on a weekly schedule.",
      },
      {
        question: "What does each CAPUP-D3 60K softgel contain?",
        answer:
          "Each softgel contains cholecalciferol (vitamin D3) USP 60000 IU.",
      },
      {
        question: "How is CAPUP-D3 60K different from CAPUP-D3 Drops?",
        answer:
          "CAPUP-D3 60K is a high-strength 60000 IU softgel capsule, while CAPUP-D3 Drops is a liquid vitamin D3 presentation suited to lower daily dosing.",
      },
    ],
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
      alt: "CAPUP-D3 60K carton — cholecalciferol (vitamin D3) 60000 IU softgel capsules by Mexmed Pharma",
    },
    featured: true,
  }),
  productEntry({
    id: "cartimex-pro",
    seoTitle: "Cartimex Pro — Glucosamine, Collagen & Chondroitin Tablets",
    metaDescription:
      "Cartimex Pro by Mexmed Pharma combines glucosamine, collagen peptide type-II, chondroitin, cissus, vitamin C & hyaluronate for joint & mobility nutrition support.",
    regulatoryClass: "supplement",
    molecule: [
      "Glucosamine Sulphate",
      "Collagen Peptide Type-II",
      "Chondroitin Sulphate",
      "Cissus Quadrangularis",
      "Vitamin C",
      "Sodium Hyaluronate",
    ],
    drugClass: "Joint & mobility (musculoskeletal) nutrition supplement",
    uses: [
      "Provides glucosamine, chondroitin, and collagen peptide type-II, ingredients commonly used in joint nutrition.",
      "Adds cissus quadrangularis, vitamin C, and sodium hyaluronate to the formulation.",
      "Formulated as a daily musculoskeletal nutrition supplement for adults seeking joint and mobility support.",
    ],
    directions:
      "As directed by a healthcare professional or dietician.",
    storage:
      "Store in a cool, dry place, protected from light. Keep out of reach of children.",
    faqs: [
      {
        question: "What is Cartimex Pro?",
        answer:
          "Cartimex Pro is a dietary supplement combining glucosamine, collagen peptide type-II, chondroitin, cissus quadrangularis, vitamin C, and sodium hyaluronate for joint and mobility nutrition. It is not intended to diagnose, treat, cure, or prevent disease.",
      },
      {
        question: "Who is Cartimex Pro for?",
        answer:
          "It is positioned as a daily musculoskeletal nutrition supplement for adults; consult a healthcare professional for joint concerns.",
      },
      {
        question: "How is Cartimex Pro taken?",
        answer:
          "As directed by a healthcare professional or dietician.",
      },
    ],
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
      alt: "Cartimex Pro tablets carton — glucosamine, collagen peptide type-II, chondroitin and hyaluronate joint-support supplement by Mexmed Pharma",
    },
    featured: false,
  }),
  productEntry({
    id: "extenvit",
    seoTitle: "Extenvit — Amino Acids, Vitamins & Minerals Tablets",
    metaDescription:
      "Extenvit by Mexmed Pharma is a broad-spectrum amino acids, vitamins, natural extract & minerals tablet — a daily nutritional supplement. View composition & details.",
    regulatoryClass: "supplement",
    molecule: ["Amino Acids", "Vitamins", "Natural Extract", "Minerals"],
    drugClass: "Broad-spectrum multivitamin & nutrition supplement",
    uses: [
      "Provides a broad blend of amino acids, vitamins, a natural extract, and minerals in one tablet.",
      "Positioned as a general daily nutritional-support supplement for adults.",
      "Marked on the pack as a dietary supplement, not for medicinal use.",
    ],
    directions:
      "One tablet daily, or as directed by a healthcare professional or dietician.",
    storage:
      "Store in a cool, dry place, protected from light. Keep out of reach of children.",
    faqs: [
      {
        question: "What is Extenvit?",
        answer:
          "Extenvit is a broad-spectrum dietary supplement combining amino acids, vitamins, a natural extract, and minerals for general daily nutritional support. It is not intended to diagnose, treat, cure, or prevent disease.",
      },
      {
        question: "How is Extenvit taken?",
        answer:
          "One tablet daily, or as directed by a healthcare professional or dietician.",
      },
      {
        question: "Is Extenvit a medicine?",
        answer:
          "No. It is marked on the pack as a dietary supplement, not for medicinal use.",
      },
    ],
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
      alt: "Extenvit tablets carton — amino acids, vitamins, natural extract and minerals dietary supplement by Mexmed Pharma",
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
    seoTitle: "Fericom-XT — Iron, Folic Acid & Zinc Tablets",
    metaDescription:
      "Fericom-XT by Mexmed Pharma is a ferrous fumarate, folic acid & zinc tablet — an iron-support dietary supplement. View composition, directions & pack details.",
    regulatoryClass: "supplement",
    molecule: ["Ferrous Fumarate", "Folic Acid", "Zinc Sulphate"],
    drugClass: "Iron, folic acid & zinc dietary supplement (haematinic support)",
    uses: [
      "Provides iron from ferrous fumarate together with folic acid and zinc.",
      "Iron and folic acid are nutrients associated with the normal formation of red blood cells.",
      "Formulated as a daily dietary supplement for nutritional iron support in adults.",
    ],
    directions:
      "One tablet daily, or as directed by a healthcare professional or dietician.",
    storage:
      "Store in a cool, dry place, protected from light. Keep out of reach of children.",
    faqs: [
      {
        question: "What is Fericom-XT used for?",
        answer:
          "Fericom-XT is a dietary supplement providing iron (ferrous fumarate), folic acid, and zinc for daily nutritional iron support. It is not intended to diagnose, treat, cure, or prevent disease — consult a doctor for anaemia or any medical concern.",
      },
      {
        question: "What does each Fericom-XT tablet contain?",
        answer:
          "Ferrous fumarate, folic acid, and zinc sulphate (see the pack for exact quantities).",
      },
      {
        question: "How is Fericom-XT taken?",
        answer:
          "One tablet daily, or as directed by a healthcare professional or dietician.",
      },
      {
        question: "Is Fericom-XT a medicine?",
        answer:
          "Fericom-XT is marked on the pack as a dietary supplement, not for medicinal use.",
      },
    ],
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
      alt: "Fericom-XT tablets carton — ferrous fumarate, folic acid and zinc iron-support dietary supplement by Mexmed Pharma",
    },
    featured: true,
  }),
  productEntry({
    id: "mexorex-d",
    seoTitle: "Mexorex-D — Dextromethorphan Cough & Cold Syrup",
    metaDescription:
      "Mexorex-D by Mexmed Pharma is a dextromethorphan, phenylephrine & chlorpheniramine cough-and-cold syrup. View composition, directions & pack details.",
    regulatoryClass: "otc",
    molecule: [
      "Dextromethorphan Hydrobromide",
      "Phenylephrine Hydrochloride",
      "Chlorpheniramine Maleate",
    ],
    drugClass: "Antitussive, decongestant & antihistamine cough-cold syrup",
    uses: [
      "Dextromethorphan is a cough suppressant (antitussive).",
      "Phenylephrine is a decongestant and chlorpheniramine is an antihistamine.",
      "Together they form a combination cough-and-cold syrup.",
      "Read the label and use as directed; consult a doctor for persistent symptoms.",
    ],
    directions:
      "Use as directed on the label or by a healthcare professional. For young children, use only under medical advice.",
    storage:
      "Store in a cool, dry place below 25°C, protected from light. Keep out of reach of children.",
    faqs: [
      {
        question: "What is Mexorex-D used for?",
        answer:
          "Mexorex-D is a cough-and-cold syrup combining dextromethorphan (cough suppressant), phenylephrine (decongestant), and chlorpheniramine (antihistamine). Use as directed; consult a doctor for persistent symptoms.",
      },
      {
        question: "What does Mexorex-D contain?",
        answer:
          "Dextromethorphan hydrobromide, phenylephrine hydrochloride, and chlorpheniramine maleate in a syrup base.",
      },
      {
        question: "Can children take Mexorex-D?",
        answer:
          "For young children, use only under medical advice and follow the label directions.",
      },
    ],
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
      alt: "Mexorex-D syrup bottle — dextromethorphan, phenylephrine and chlorpheniramine cough-and-cold syrup by Mexmed Pharma",
    },
    featured: false,
  }),
  productEntry({
    id: "urovive",
    seoTitle: "Urovive — Cranberry & D-Mannose Urinary-Support Tablets",
    metaDescription:
      "Urovive by Mexmed Pharma is a cranberry, D-mannose, potassium citrate & magnesium sulphate tablet — a urinary-support dietary supplement. View composition & details.",
    regulatoryClass: "supplement",
    molecule: [
      "Cranberry",
      "D-Mannose",
      "Potassium Citrate",
      "Magnesium Sulphate",
    ],
    drugClass: "Cranberry & D-mannose urinary-support supplement",
    uses: [
      "Provides cranberry extract and D-mannose, ingredients commonly used in urinary-tract nutritional support.",
      "Adds potassium citrate and magnesium sulphate to the formulation.",
      "Formulated as a non-antibiotic urinary-support dietary supplement for adults.",
    ],
    directions:
      "As directed by a healthcare professional or dietician.",
    storage:
      "Store in a cool, dry place, protected from light. Keep out of reach of children.",
    faqs: [
      {
        question: "What is Urovive?",
        answer:
          "Urovive is a dietary supplement providing cranberry, D-mannose, potassium citrate, and magnesium sulphate for urinary-tract nutritional support. It is not intended to diagnose, treat, cure, or prevent disease.",
      },
      {
        question: "Is Urovive an antibiotic?",
        answer:
          "No. Urovive is a non-antibiotic dietary supplement. For urinary infections, consult a doctor.",
      },
      {
        question: "How is Urovive taken?",
        answer:
          "As directed by a healthcare professional or dietician.",
      },
    ],
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
      alt: "Urovive tablets carton — cranberry, D-mannose, potassium citrate and magnesium sulphate urinary-support supplement by Mexmed Pharma",
    },
    featured: false,
  }),
  productEntry({
    id: "obemex",
    seoTitle: "OBEMEX — Myo-Inositol & D-Chiro-Inositol Tablets",
    metaDescription:
      "OBEMEX by Mexmed Pharma is a myo-inositol & D-chiro-inositol tablet — a specialty-nutrition dietary supplement. View composition, directions & pack details.",
    regulatoryClass: "supplement",
    molecule: ["Myo-Inositol", "D-Chiro-Inositol"],
    drugClass: "Inositol-based specialty nutrition supplement",
    uses: [
      "Provides myo-inositol and D-chiro-inositol, two naturally occurring inositols.",
      "Inositols are commonly included in nutritional supplements supporting metabolic wellness.",
      "Formulated as a specialty-nutrition dietary supplement for adults.",
    ],
    directions:
      "As directed by a healthcare professional or dietician.",
    storage:
      "Store in a cool, dry place, protected from light. Keep out of reach of children.",
    faqs: [
      {
        question: "What is OBEMEX?",
        answer:
          "OBEMEX is a dietary supplement providing myo-inositol and D-chiro-inositol. It is not intended to diagnose, treat, cure, or prevent any disease — consult a registered medical practitioner or dietician for medical advice.",
      },
      {
        question: "What does each OBEMEX tablet contain?",
        answer:
          "Each tablet contains myo-inositol combined with D-chiro-inositol (see the pack for exact quantities).",
      },
      {
        question: "How is OBEMEX taken?",
        answer:
          "As directed by a healthcare professional or dietician.",
      },
      {
        question: "Is OBEMEX a medicine?",
        answer:
          "No. OBEMEX is a dietary supplement and is not intended to diagnose, treat, cure, or prevent disease.",
      },
    ],
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
      alt: "OBEMEX Tablets carton — myo-inositol with D-chiro-inositol specialty-nutrition dietary supplement by Mexmed Pharma",
    },
    featured: false,
  }),
  productEntry({
    id: "mexopam-p",
    seoTitle: "MEXOPAM-P — Aceclofenac + Paracetamol Tablets",
    metaDescription:
      "MEXOPAM-P by Mexmed Pharma is an aceclofenac + paracetamol tablet — an analgesic & anti-inflammatory combination. View composition, packs & enquiry details.",
    regulatoryClass: "prescription",
    molecule: ["Aceclofenac", "Paracetamol"],
    drugClass: "NSAID + analgesic (pain-management) combination",
    uses: [
      "Aceclofenac is a non-steroidal anti-inflammatory drug (NSAID); paracetamol is an analgesic and antipyretic.",
      "This combination is prescribed by doctors for pain and inflammation.",
      "A broader combination that adds serratiopeptidase is available as MEXOPAM-SP.",
      "Prescription medicine — use under medical supervision.",
    ],
    directions:
      "Use as prescribed by a registered medical practitioner, usually after food.",
    storage:
      "Store in a cool, dry place below 25°C, protected from light. Keep out of reach of children.",
    faqs: [
      {
        question: "What is MEXOPAM-P used for?",
        answer:
          "MEXOPAM-P combines aceclofenac (an NSAID) with paracetamol and is prescribed by doctors for pain and inflammation. It is a prescription medicine — use as directed.",
      },
      {
        question: "How is MEXOPAM-P different from MEXOPAM-SP?",
        answer:
          "MEXOPAM-SP adds the enzyme serratiopeptidase to the aceclofenac + paracetamol base of MEXOPAM-P.",
      },
      {
        question: "Is MEXOPAM-P a prescription medicine?",
        answer:
          "Yes. Use it only under medical supervision, typically after food.",
      },
    ],
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
      alt: "MEXOPAM-P tablets carton — aceclofenac and paracetamol analgesic combination by Mexmed Pharma",
    },
    featured: false,
  }),
  productEntry({
    id: "mexopam-sp",
    seoTitle: "MEXOPAM-SP — Aceclofenac, Paracetamol & Serratiopeptidase",
    metaDescription:
      "MEXOPAM-SP by Mexmed Pharma combines aceclofenac, paracetamol & serratiopeptidase — an analgesic, anti-inflammatory & enzyme tablet. View composition & details.",
    regulatoryClass: "prescription",
    molecule: ["Aceclofenac", "Paracetamol", "Serratiopeptidase"],
    drugClass: "NSAID + analgesic + proteolytic enzyme combination",
    uses: [
      "Aceclofenac (an NSAID) with paracetamol, plus the proteolytic enzyme serratiopeptidase.",
      "This combination is prescribed by doctors for pain and inflammation.",
      "The base aceclofenac + paracetamol tablet without serratiopeptidase is available as MEXOPAM-P.",
      "Prescription medicine — use under medical supervision.",
    ],
    directions:
      "Use as prescribed by a registered medical practitioner, usually after food.",
    storage:
      "Store in a cool, dry place below 25°C, protected from light. Keep out of reach of children.",
    faqs: [
      {
        question: "What is MEXOPAM-SP used for?",
        answer:
          "MEXOPAM-SP combines aceclofenac, paracetamol, and serratiopeptidase and is prescribed by doctors for pain and inflammation. It is a prescription medicine — use as directed.",
      },
      {
        question: "How is MEXOPAM-SP different from MEXOPAM-P?",
        answer:
          "MEXOPAM-SP adds the enzyme serratiopeptidase to the aceclofenac + paracetamol combination found in MEXOPAM-P.",
      },
      {
        question: "Is MEXOPAM-SP a prescription medicine?",
        answer:
          "Yes. Use it only under medical supervision, typically after food.",
      },
    ],
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
      alt: "MEXOPAM-SP tablets carton — aceclofenac, paracetamol and serratiopeptidase combination by Mexmed Pharma",
    },
    featured: false,
  }),
  productEntry({
    id: "hepamed",
    seoTitle: "HEPAMED — Silymarin Liver-Support Tablets",
    name: "HEPAMED Tablets",
    dosageForm: "Tablets",
    category: "Liver support",
    regulatoryClass: "supplement",
    molecule: [
      "Silymarin",
      "L-Ornithine",
      "L-Aspartic Acid",
      "Vitamin B6",
      "Folic Acid",
    ],
    drugClass: "Hepatoprotective nutritional (liver-support) supplement",
    packaging: "1 x 10 film-coated tablets",
    composition: [
      "Silymarin Extract 140 mg",
      "L-Ornithine 125 mg",
      "L-Aspartic Acid 125 mg",
      "Vitamin B6 (Pyridoxine) 2.4 mg",
      "Folic Acid 175 mcg",
    ],
    summary:
      "Silymarin, L-ornithine, L-aspartic acid, vitamin B6, and folic acid film-coated tablets — a liver-support dietary supplement in the Mexmed range.",
    metaDescription:
      "HEPAMED by Mexmed Pharma is a silymarin, L-ornithine, L-aspartic acid, vitamin B6 & folic acid tablet — a once-daily liver-support dietary supplement.",
    detailIntro:
      "HEPAMED is Mexmed Pharma's liver-support dietary supplement, pairing standardized silymarin (from milk thistle) with the amino acids L-ornithine and L-aspartic acid, plus vitamin B6 and folic acid, in a once-daily film-coated tablet.",
    uses: [
      "Provides standardized silymarin, a flavonolignan complex from milk thistle that is widely used in nutritional liver support for its antioxidant properties.",
      "Supplies the amino acids L-ornithine and L-aspartic acid.",
      "Includes vitamin B6 and folic acid as part of the daily formulation.",
      "Formulated as a once-daily dietary supplement for adults seeking nutritional liver support.",
    ],
    directions:
      "One tablet per day, or as directed by a dietician or healthcare professional.",
    storage:
      "Store in a cool, dry, and dark place below 25°C. Keep out of reach of children.",
    highlights: [
      "Five-in-one liver-support formulation: silymarin 140 mg with L-ornithine, L-aspartic acid, vitamin B6, and folic acid.",
      "Convenient once-daily film-coated tablet in a 1 x 10 pack.",
      "Dietary-supplement framing — not for medicinal use — suited to daily nutritional liver support for adults.",
    ],
    labelNotes: [
      "Front panel reads 'Silymarin Extract, L-Ornithine, L-Aspartic Acid, Vitamin B6, With Folic Acid Tablets'.",
      "Carton is marked 'Dietary supplement not for medicinal use' with a '1 x 10 Tablets' pack count.",
      "%RDA is calculated on ICMR 2021 guidelines; vitamin B6 (100% RDA) and folic acid (98% RDA) are declared on the pack.",
    ],
    faqs: [
      {
        question: "What is HEPAMED used for?",
        answer:
          "HEPAMED is a dietary supplement that provides silymarin (milk thistle), L-ornithine, L-aspartic acid, vitamin B6, and folic acid for daily nutritional liver support. It is not intended to diagnose, treat, cure, or prevent any disease — consult a registered medical practitioner or dietician for medical advice.",
      },
      {
        question: "What does each HEPAMED tablet contain?",
        answer:
          "Each film-coated tablet contains Silymarin Extract 140 mg, L-Ornithine 125 mg, L-Aspartic Acid 125 mg, Vitamin B6 2.4 mg, and Folic Acid 175 mcg.",
      },
      {
        question: "How is HEPAMED taken?",
        answer:
          "The recommended use is one tablet per day, or as directed by a dietician or healthcare professional.",
      },
      {
        question: "Is HEPAMED a medicine?",
        answer:
          "No. HEPAMED is labelled as a dietary supplement, not for medicinal use, and is not intended to diagnose, treat, cure, or prevent disease.",
      },
    ],
    image: {
      src: "/images/products/hepamed.jpg",
      alt: "HEPAMED tablets carton — silymarin, L-ornithine, L-aspartic acid, vitamin B6 and folic acid liver-support dietary supplement by Mexmed Pharma",
    },
    featured: true,
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

/* --------------------------------------------------------------------------
 * Therapeutic-category hub pages (/products/category/[slug])
 * ------------------------------------------------------------------------ */

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function categorySlug(category: string): string {
  return slugify(category);
}

export type ProductCategory = {
  name: string;
  slug: string;
  count: number;
};

/** Unique product categories with slugs and counts, alphabetically sorted. */
export function getProductCategories(): ProductCategory[] {
  const counts = new Map<string, number>();
  for (const product of products) {
    counts.set(product.category, (counts.get(product.category) ?? 0) + 1);
  }
  return Array.from(counts.entries())
    .map(([name, count]) => ({ name, slug: slugify(name), count }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return getProductCategories().find((category) => category.slug === slug);
}

export function getProductsByCategory(slug: string): Product[] {
  return products.filter((product) => slugify(product.category) === slug);
}

/** Hand-authored intro + SERP description per therapeutic category. */
export const categoryContent: Record<
  string,
  { intro: string; metaDescription: string }
> = {
  "Anti-infective": {
    intro:
      "Mexmed Pharma's anti-infective range covers antibiotic tablet formulations, including the cefuroxime axetil Cefron line in 250 mg and 500 mg strengths. Each product page lists composition, strength, and pack detail for prescribers and trade partners.",
    metaDescription:
      "Anti-infective (antibiotic) formulations from Mexmed Pharma, including cefuroxime axetil tablets. Browse the range with composition, strengths and pack detail.",
  },
  Gastrointestinal: {
    intro:
      "The Mexmed Pharma gastrointestinal range covers acid-management formulations such as the pantoprazole Pantamex line — the single-agent Pantamex-40 tablet and the pantoprazole + domperidone Pantamex-DSR capsule.",
    metaDescription:
      "Gastrointestinal formulations from Mexmed Pharma — pantoprazole (Pantamex) tablets and pantoprazole + domperidone capsules. View composition and pack detail.",
  },
  "Bone & mineral nutrition": {
    intro:
      "Mexmed Pharma's bone & mineral nutrition range brings together calcium, vitamin D3, and supporting nutrients — from the compact CALINMEX tablet to the broader Calinmex Forte formulation.",
    metaDescription:
      "Bone & mineral nutrition from Mexmed Pharma — calcium, vitamin D3 and multimineral tablets (CALINMEX, Calinmex Forte). View composition and pack detail.",
  },
  Vitamins: {
    intro:
      "The Mexmed Pharma vitamins range covers vitamin D3 (cholecalciferol) presentations, including the high-strength CAPUP-D3 60K softgel and CAPUP-D3 Drops liquid format.",
    metaDescription:
      "Vitamin formulations from Mexmed Pharma — cholecalciferol (vitamin D3) softgels and drops. Browse the range with composition and pack detail.",
  },
  Musculoskeletal: {
    intro:
      "Mexmed Pharma's musculoskeletal range focuses on joint and mobility nutrition, led by Cartimex Pro with glucosamine, collagen peptide type-II, chondroitin, and hyaluronate.",
    metaDescription:
      "Musculoskeletal (joint & mobility) nutrition from Mexmed Pharma — glucosamine, collagen and chondroitin tablets. View composition and pack detail.",
  },
  Multivitamin: {
    intro:
      "The Mexmed Pharma multivitamin range covers broad-spectrum nutritional-support tablets such as Extenvit, combining amino acids, vitamins, natural extract, and minerals.",
    metaDescription:
      "Multivitamin & nutrition-support formulations from Mexmed Pharma — amino acids, vitamins and minerals (Extenvit). View composition and pack detail.",
  },
  Haematinics: {
    intro:
      "Mexmed Pharma's haematinics range provides iron-support tablet formulations with folic acid and zinc, including Fericom-XT and Feriflex-XT.",
    metaDescription:
      "Haematinic (iron-support) formulations from Mexmed Pharma — iron, folic acid and zinc tablets (Fericom-XT, Feriflex-XT). View composition and pack detail.",
  },
  Respiratory: {
    intro:
      "The Mexmed Pharma respiratory range covers cough-and-cold liquid formulations, led by the Mexorex-D syrup with dextromethorphan, phenylephrine, and chlorpheniramine.",
    metaDescription:
      "Respiratory (cough & cold) formulations from Mexmed Pharma — dextromethorphan syrup (Mexorex-D). View composition, directions and pack detail.",
  },
  "Urology support": {
    intro:
      "Mexmed Pharma's urology-support range offers non-antibiotic urinary-tract nutrition, led by Urovive with cranberry, D-mannose, potassium citrate, and magnesium sulphate.",
    metaDescription:
      "Urology-support supplements from Mexmed Pharma — cranberry & D-mannose urinary-support tablets (Urovive). View composition and pack detail.",
  },
  "Specialty nutrition": {
    intro:
      "The Mexmed Pharma specialty-nutrition range covers focused supplement formulations such as OBEMEX with myo-inositol and D-chiro-inositol.",
    metaDescription:
      "Specialty-nutrition supplements from Mexmed Pharma — myo-inositol & D-chiro-inositol tablets (OBEMEX). View composition and pack detail.",
  },
  "Pain management": {
    intro:
      "Mexmed Pharma's pain-management range covers analgesic and anti-inflammatory tablet combinations, including MEXOPAM-P (aceclofenac + paracetamol) and MEXOPAM-SP (with serratiopeptidase).",
    metaDescription:
      "Pain-management formulations from Mexmed Pharma — aceclofenac, paracetamol & serratiopeptidase tablets (MEXOPAM-P, MEXOPAM-SP). View composition and pack detail.",
  },
  "Liver support": {
    intro:
      "The Mexmed Pharma liver-support range covers hepatoprotective nutrition, led by HEPAMED with silymarin (milk thistle), L-ornithine, L-aspartic acid, vitamin B6, and folic acid.",
    metaDescription:
      "Liver-support supplements from Mexmed Pharma — silymarin, L-ornithine & L-aspartic acid tablets (HEPAMED). View composition and pack detail.",
  },
};
