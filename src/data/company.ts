/** Company narrative, credibility blocks, and homepage copy. */

export const company = {
  name: "Mexmed Pharma",

  hero: {
    eyebrow: "Global healthcare commitment",
    title: "Science-led medicines for better outcomes",
    description:
      "We develop and supply pharmaceutical solutions with rigorous quality systems, regulatory discipline, and a patient-first mindset—partnering with healthcare systems worldwide.",
    primaryCta: { label: "Send enquiry", href: "/contact" },
    secondaryCta: { label: "Explore products", href: "/products" },
    /** Credibility strip — desktop aside; stacks below copy on small screens. */
    trustPoints: [
      "GMP-aligned operations",
      "Documented controls & traceability",
      "Audit-ready quality systems",
    ],
  },

  aboutPreview: {
    eyebrow: "Who we are",
    title: "A partner built on compliance and clarity",
    lead:
      "Mexmed Pharma combines manufacturing excellence with transparent collaboration—from development support to dependable supply.",
    body:
      "Our teams align around GMP-aligned processes, documented controls, and continuous improvement so partners can plan with confidence.",
    cta: { label: "About Mexmed", href: "/about" },
  },

  whyChooseUs: {
    eyebrow: "Why Mexmed",
    title: "What partners expect from us",
    description:
      "Structured governance, responsive teams, and a long-term view of quality—not short-term shortcuts.",
    pillars: [
      {
        title: "Regulatory rigor",
        description:
          "Documentation, validation, and audit readiness woven into everyday operations.",
      },
      {
        title: "Quality systems",
        description:
          "Consistent batch release, traceability, and CAPA discipline across the value chain.",
      },
      {
        title: "Reliable supply",
        description:
          "Forecasting and capacity planning designed to reduce disruption for critical therapies.",
      },
      {
        title: "Partnership mindset",
        description:
          "Clear communication, technical transparency, and aligned milestones with stakeholders.",
      },
    ],
  },

  qualityPreview: {
    eyebrow: "Quality & compliance",
    title: "Quality is the baseline, not a milestone",
    description:
      "Independent checks, controlled environments, and a culture where deviations are addressed with speed and precision.",
    points: [
      "GMP-aligned manufacturing and release protocols",
      "Environmental monitoring and data integrity practices",
      "Supplier qualification and ongoing oversight",
    ],
    cta: { label: "Our quality approach", href: "/quality" },
  },

  seo: {
    homeTitle: "Home",
    homeDescription:
      "Mexmed Pharma—pharmaceutical development and supply with quality, compliance, and trusted partnerships.",
  },

  contactCta: {
    title: "Start a confidential conversation",
    description:
      "Share your requirements, timelines, and regulatory context. Our team will respond with clear next steps.",
    primaryCta: { label: "Send enquiry", href: "/contact" },
    secondaryCta: { label: "Explore products", href: "/products" },
  },
} as const;
