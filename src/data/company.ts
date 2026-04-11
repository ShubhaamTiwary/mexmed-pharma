/**
 * Company narrative and homepage sections.
 * Grounded in the legacy mexmedpharma.com structure (audit, April 2026):
 * company introduction; mission, vision, quality, safety; 7+ years’ experience;
 * pharmaceutical & nutraceutical services; enquiry touchpoints; Serampore + Forbesganj offices.
 */

export const company = {
  name: "Mexmed Pharma",

  hero: {
    eyebrow: "Pharmaceutical & nutraceutical formulations",
    title: "Quality-led formulations for prescribers and partners",
    description:
      "Mexmed Pharma develops and supplies pharmaceutical and nutraceutical products from India—with mission, vision, quality, and safety at the centre of how we work. Share your requirement by enquiry; we respond on our published phone and email.",
    primaryCta: { label: "Send enquiry", href: "/contact" },
    secondaryCta: { label: "Explore products", href: "/products" },
    trustPoints: [
      "Mission, vision, quality, and safety—themes that have framed Mexmed’s public story",
      "More than seven years’ experience in the field (as positioned on the prior site)",
      "Head office in Serampore, Hoogly, West Bengal; branch in Forbesganj, Bihar",
    ],
  },

  aboutPreview: {
    eyebrow: "Who we are",
    title: "India-based, enquiry-ready, partner-focused",
    lead:
      "We serve healthcare markets with a portfolio spanning tablets, capsules, syrups, and drops—rooted in West Bengal with a Bihar branch and a straightforward route to product and distribution questions.",
    body:
      "Mexmed’s prior website combined company narrative with mission, vision, quality, and safety messaging, product showcases, and enquiry forms. This site carries that intent forward in clearer language: disciplined execution, transparent communication, and accountable follow-up.",
    cta: { label: "About Mexmed", href: "/about" },
  },

  whyChooseUs: {
    eyebrow: "Why Mexmed",
    title: "Mission, vision, quality, and safety—in practice",
    description:
      "These four anchors appeared consistently on the legacy Mexmed homepage. They still describe how we prioritise decisions and communicate with partners.",
    pillars: [
      {
        title: "Mission",
        description:
          "Make dependable formulations available to professionals and patients who count on consistent supply and honest specifications.",
      },
      {
        title: "Vision",
        description:
          "Strengthen Mexmed’s role as a trusted Indian pharmaceutical and nutraceutical supplier for distributors and clinicians.",
      },
      {
        title: "Quality",
        description:
          "Hold every batch and every hand-off to documented standards—no shortcuts on verification or traceability.",
      },
      {
        title: "Safety",
        description:
          "Design processes so product integrity and patient safety stay ahead of speed or volume pressures.",
      },
    ],
  },

  qualityPreview: {
    eyebrow: "Quality & safety",
    title: "Operational discipline, not slogans",
    description:
      "Quality and safety sat alongside mission and vision on the legacy site. Here we state plainly: controlled procedures, clear ownership, and continuous improvement—not marketing claims we cannot stand behind.",
    points: [
      "Structured manufacturing and release documentation appropriate to our product categories",
      "Safety-conscious handling from warehouse through to dispatch",
      "Governance and certificate materials can be discussed through commercial and quality channels as your diligence requires",
    ],
    cta: { label: "Quality approach", href: "/quality" },
  },

  seo: {
    homeTitle: "Home",
    homeDescription:
      "Mexmed Pharma—pharmaceutical and nutraceutical formulations from Serampore and Forbesganj, India. Browse the catalog and reach us on +91 88862 19335 or info@mexmedpharma.com.",
  },

  contactCta: {
    title: "Start with an enquiry",
    description:
      "Tell us your name, mobile number, email, location, city, and message—the same practical fields the legacy site used for lead capture. We reply via the contact details in the footer.",
    primaryCta: { label: "Send enquiry", href: "/contact" },
    secondaryCta: { label: "Explore products", href: "/products" },
  },
} as const;
