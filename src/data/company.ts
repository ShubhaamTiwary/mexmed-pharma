/**
 * Company narrative and homepage sections for Mexmed Pharma.
 */

export const company = {
  name: "Mexmed Pharma",

  hero: {
    eyebrow: "Pharmaceutical & nutraceutical formulations",
    title: "Quality-led formulations for prescribers and partners",
    description:
      "Mexmed Pharma develops and supplies pharmaceutical and nutraceutical products from India—with mission, vision, quality, and safety at the centre of how we work. Share your requirement by enquiry; we respond on the phone number and email listed on our contact page.",
    primaryCta: { label: "Send enquiry", href: "/contact" },
    secondaryCta: { label: "Explore products", href: "/products" },
    trustPoints: [
      "Mission, vision, quality, and safety guide how we prioritise work",
      "More than seven years of experience serving healthcare markets",
      "Head office in Serampore, Hoogly, West Bengal; branch in Forbesganj, Bihar",
    ],
  },

  aboutPreview: {
    eyebrow: "Who we are",
    title: "India-based, enquiry-ready, partner-focused",
    lead:
      "We serve healthcare markets with a portfolio spanning tablets, capsules, syrups, and drops—rooted in West Bengal with a Bihar branch and a straightforward route to product and distribution questions.",
    body:
      "Mexmed combines company narrative with mission, vision, quality, and safety messaging, product showcases, and enquiry forms. This site expresses that intent in clear language: disciplined execution, transparent communication, and accountable follow-up.",
    cta: { label: "About Mexmed", href: "/about" },
  },

  whyChooseUs: {
    eyebrow: "Why Mexmed",
    title: "Mission, vision, quality, and safety—in practice",
    description:
      "These four anchors have long framed how Mexmed presents itself publicly. They still describe how we prioritise decisions and communicate with partners.",
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
      "Quality and safety sit alongside mission and vision in how we communicate. We focus on controlled procedures, clear ownership, and continuous improvement—stated plainly, without marketing claims we cannot support.",
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
      "Tell us your name, mobile number, email, location, city, and message. We reply using the contact details in the footer.",
    primaryCta: { label: "Send enquiry", href: "/contact" },
    secondaryCta: { label: "Explore products", href: "/products" },
  },
} as const;
