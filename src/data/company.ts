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
    primaryCta: { label: "Send enquiry", href: "/contact" },
    secondaryCta: { label: "Explore products", href: "/products" },
    trustPoints: [
      "Mission, vision, quality, and safety guide how we prioritise work",
      "More than seven years of experience serving healthcare markets",
      "Head office in Serampore, Hoogly, West Bengal; branch in Forbesganj, Bihar",
    ],
    metrics: [
      { label: "Years experience", value: "7+" },
      { label: "Office locations", value: "2" },
      { label: "Audited products", value: "13" },
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
