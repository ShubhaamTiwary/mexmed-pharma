/**
 * Global site identity and contact data.
 * Factual source: mexmedpharma.com extraction (site audit inventory, April 2026).
 */

export const site = {
  name: "Mexmed Pharma",

  summary:
    "Mexmed Pharma is an India-based company offering pharmaceutical and nutraceutical formulations. We operate from Serampore (West Bengal) with a branch in Forbesganj (Bihar), and we handle commercial and product enquiries on the phone number and email published below.",

  publicUrl: "https://mexmedpharma.com",

  contact: {
    phoneDisplay: "+91 88862 19335",
    phoneHref: "tel:+918886219335",
    emailDisplay: "info@mexmedpharma.com",
    emailHref: "mailto:info@mexmedpharma.com",

    locations: [
      {
        label: "Head office",
        lines: [
          "83/45, Samridhi Niwas, Khatir, Bazar Lane",
          "Serampore, Hoogly, West Bengal 712202",
          "India",
        ],
      },
      {
        label: "Branch office",
        lines: [
          "Block Road, Jumman Chowk, Ward-05",
          "P.O. + P.S. Forbesganj, Araria, Bihar 854318",
          "India",
        ],
      },
    ],
  },
} as const;
