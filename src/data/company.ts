/**
 * Company narrative and homepage sections for Mexmed Pharma.
 */

export const company = {
  name: "Mexmed Pharma",

  hero: {
    eyebrow: "Pharmaceutical & nutraceutical formulations",
    headline: {
      lead: "Quality-led formulations",
      accent: "for prescribers and partners",
    },
    description:
      "Mexmed Pharma develops and supplies pharmaceutical and nutraceutical products from India—with mission, vision, quality, and safety at the centre of how we work. Share your requirement by enquiry; we respond on the phone number and email listed on our contact page.",
    /** Editorial hero image (Unsplash — pharma / laboratory). */
    backgroundImage:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1600&q=80",

    trustPoints: [
      "Mission, vision, quality, and safety guide how we prioritise work",
      "More than twelve years of experience serving healthcare markets",
      "Operating across India and Nepal with support from Serampore and Forbesganj",
    ],
    metrics: [
      { label: "Years experience", value: "12+" },
      { label: "Operating reach", value: "India + Nepal" },
      { label: "Listed products", value: "17" },
    ],
  },

  aboutPreview: {
    eyebrow: "Who we are",
    title: "India-based, enquiry-ready, partner-focused",
    lead: "We serve healthcare markets with a portfolio spanning tablets, capsules, syrups, and drops—rooted in West Bengal with a Bihar branch and a straightforward route to product and distribution questions.",
    body: "Mexmed combines company narrative with mission, vision, quality, and safety messaging, product showcases, and enquiry forms. This site expresses that intent in clear language: disciplined execution, transparent communication, and accountable follow-up.",
    cta: { label: "About Mexmed", href: "/about" },
  },

  homeMissionVision: {
    eyebrow: "Welcome to Mexmed Pharma",
    title: "Mission, vision, quality, and safety at the centre of how we work",
    description:
      "Mexmed Pharma is a trusted provider of medicines, tablets, syrups, and related formulations from Serampore, Hooghly, West Bengal, with branch support in Forbesganj, Bihar and operating reach across India and Nepal. Our operating approach is shaped by quality standards, practical innovation, customer-focused follow-up, and accountable healthcare-market support.",
    body: [
      "We work to keep product communication clear, reliable, and commercially useful for partners reviewing the current catalog. That means visible pack references, structured product detail, and direct contact paths for availability and business enquiries.",
      "The old site repeated mission, vision, quality, and safety as the core company themes. Here they are preserved in a sharper, easier-to-scan format that supports the upgraded website experience.",
    ],
    highlightCards: [
      {
        title: "Trusted base",
        summary: "Serampore head office with Forbesganj branch support",
        detail: "Dependable communication with steady operating follow-up.",
      },
      {
        title: "Working style",
        summary: "Clear catalog and direct enquiry path",
        detail:
          "Quality stays visible through structured listings and clearer product presentation.",
      },
      {
        title: "Mexmed focus",
        summary: "Mission, vision, quality, and safety made easier to review",
        detail:
          "Safety-minded communication and disciplined processes support lasting trust.",
      },
    ],
    cards: [
      {
        title: "Our mission",
        summary:
          "Develop practical formulations with quality, accessibility, and long-term partner value in view.",
        points: [
          "Innovation guided by real healthcare needs",
          "Responsible product communication",
          "Disciplined execution across the catalog",
        ],
      },
      {
        title: "Our vision",
        summary:
          "Build a dependable healthcare business where access, reliability, and ethical growth move together.",
        points: [
          "Trusted products and clearer standards",
          "Contribution to patient well-being",
          "Sustainable, reputation-led growth",
        ],
      },
    ],
  },

  whyChooseUs: {
    eyebrow: "What sets us apart",
    title: "Partnership built on clarity, range, and accountable follow-up",
    description:
      "Quality and safety anchor our operations; our catalogue breadth and enquiry discipline are how partners experience that commitment day to day.",
    pillars: [
      {
        title: "Quality",
        description:
          "Documented expectations for manufacturing, release, and traceability—so specifications and hand-offs stand up to professional scrutiny.",
      },
      {
        title: "Safety",
        description:
          "Processes designed so product integrity and patient safety are not traded away for speed, volume, or convenience.",
      },
      {
        title: "Product range",
        description:
          "Tablets, capsules, syrups, drops, and related forms across major therapeutic categories—review the catalog for strengths and presentations.",
      },
      {
        title: "Responsive enquiry support",
        description:
          "Availability, packs, and distribution questions handled through the phone and email we publish—transparent channels and accountable responses.",
      },
    ],
  },

  seo: {
    homeTitle: "Home",
    homeDescription:
      "Mexmed Pharma—pharmaceutical and nutraceutical formulations with India and Nepal operating reach, supported from Serampore and Forbesganj. Browse the catalog and reach us on +91 88862 19335 or info@mexmedpharma.com.",
  },

  contactCta: {
    title: "Start with an enquiry",
    description:
      "Tell us your name, mobile number, email, location, city, and message. We reply using the contact details in the footer.",
    primaryCta: { label: "Send enquiry", href: "/contact" },
    secondaryCta: { label: "Explore products", href: "/products" },
  },
} as const;
