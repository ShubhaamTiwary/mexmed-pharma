/**
 * Global site identity and contact data for Mexmed Pharma.
 */

export const site = {
  name: "Mexmed Pharma",
  brand: {
    logoSrc: "/images/brand/mexmed-pharma-logo-clean.png",
    logoAlt: "Mexmed Pharma logo",
  },

  summary:
    "Mexmed Pharma is an India-based company offering pharmaceutical and nutraceutical formulations with operating reach across India and Nepal. We operate from Serampore (West Bengal) with a branch in Forbesganj (Bihar). Enquiries are handled on the phone number and email below.",

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
