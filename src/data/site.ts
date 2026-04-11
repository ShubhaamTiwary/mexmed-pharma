/** Site-wide copy for footer, SEO, and contact blocks. Replace placeholders in production. */

export const site = {
  name: "Mexmed Pharma",
  summary:
    "A pharmaceutical company focused on quality manufacturing, regulatory compliance, and trusted partnerships across healthcare.",
  contact: {
    phoneDisplay: "+1 (555) 000-0000",
    phoneHref: "tel:+15550000000",
    emailDisplay: "info@mexmedpharma.com",
    emailHref: "mailto:info@mexmedpharma.com",
    addressLines: [
      "123 Science Park Drive",
      "Suite 400",
      "Wilmington, DE 19801",
      "United States",
    ],
  },
} as const;
