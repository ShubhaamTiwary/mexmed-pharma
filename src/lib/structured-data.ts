import { absoluteUrl, getSiteUrl } from "@/lib/seo";
import { site } from "@/data/site";
import type { Product } from "@/types/product";

/**
 * Reusable JSON-LD builders. Each function returns a plain object that can be
 * embedded with the `<JsonLd />` component (or any `<script type="application/ld+json">`).
 * Keep these aligned with schema.org; do not add fields without verifiable data.
 */

export function organizationJsonLd() {
  const headOffice = site.contact.locations[0];
  const branchOffice = site.contact.locations[1];

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${getSiteUrl()}#organization`,
    name: site.name,
    url: getSiteUrl(),
    logo: absoluteUrl(site.brand.logoSrc),
    description: site.summary,
    telephone: site.contact.phoneDisplay,
    email: site.contact.emailDisplay,
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: headOffice.lines[0],
        addressLocality: "Serampore",
        addressRegion: "West Bengal",
        postalCode: "712202",
        addressCountry: "IN",
      },
      branchOffice
        ? {
            "@type": "PostalAddress",
            streetAddress: branchOffice.lines[0],
            addressLocality: "Forbesganj",
            addressRegion: "Bihar",
            postalCode: "854318",
            addressCountry: "IN",
          }
        : undefined,
    ].filter(Boolean),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: site.contact.phoneHref.replace("tel:", ""),
        email: site.contact.emailDisplay,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
      },
    ],
  } as const;
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${getSiteUrl()}#website`,
    url: getSiteUrl(),
    name: site.name,
    description: site.summary,
    publisher: { "@id": `${getSiteUrl()}#organization` },
    inLanguage: "en-IN",
  } as const;
}

export function localBusinessJsonLd() {
  const headOffice = site.contact.locations[0];

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${getSiteUrl()}#localbusiness`,
    name: site.name,
    image: absoluteUrl(site.brand.logoSrc),
    url: getSiteUrl(),
    telephone: site.contact.phoneDisplay,
    email: site.contact.emailDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: headOffice.lines[0],
      addressLocality: "Serampore",
      addressRegion: "West Bengal",
      postalCode: "712202",
      addressCountry: "IN",
    },
  } as const;
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; url: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  } as const;
}

export function productJsonLd(product: Product) {
  const additionalProperty = [
    ...(product.composition?.map((c) => ({
      "@type": "PropertyValue" as const,
      name: "Composition",
      value: c,
    })) ?? []),
    ...(product.dosageForm
      ? [
          {
            "@type": "PropertyValue" as const,
            name: "Dosage form",
            value: product.dosageForm,
          },
        ]
      : []),
    ...(product.packaging
      ? [
          {
            "@type": "PropertyValue" as const,
            name: "Packaging",
            value: product.packaging,
          },
        ]
      : []),
  ];

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.summary,
    image: [product.image.src],
    brand: {
      "@type": "Brand",
      name: site.name,
    },
    manufacturer: { "@id": `${getSiteUrl()}#organization` },
    category: product.category,
    sku: product.id,
    url: absoluteUrl(product.href),
    ...(additionalProperty.length ? { additionalProperty } : {}),
  } as const;
}

export function itemListJsonLd(
  items: Array<{ name: string; url: string; image?: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: item.url,
      name: item.name,
      ...(item.image ? { image: item.image } : {}),
    })),
  } as const;
}
