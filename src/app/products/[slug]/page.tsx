import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  ProductDetailContent,
  ProductDetailHero,
  ProductEnquiryCta,
  RelatedProducts,
} from "@/components/products";
import { JsonLd } from "@/components/seo/json-ld";
import {
  categorySlug,
  getProductBySlug,
  getRelatedProducts,
  products,
} from "@/data/products";
import { absoluteUrl, alternatesForPath } from "@/lib/seo";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  productJsonLd,
} from "@/lib/structured-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.id }));
}

/** Only the pre-generated product slugs are servable; everything else 404s. */
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return {
      title: "Product not found",
      description: "The product you are looking for is not available.",
      robots: { index: false, follow: false },
    };
  }

  const canonical = `/products/${product.id}`;
  const nameHasForm =
    product.dosageForm &&
    product.name.toLowerCase().includes(product.dosageForm.toLowerCase());
  const title =
    product.seoTitle ??
    (nameHasForm
      ? product.name
      : `${product.name} — ${product.dosageForm ?? product.category}`);
  const description =
    product.metaDescription ?? product.detailIntro ?? product.summary;

  return {
    title,
    description,
    keywords: [
      product.name,
      product.category,
      product.dosageForm ?? "",
      ...(product.composition ?? []),
      "Mexmed Pharma",
      "pharmaceutical product",
    ].filter(Boolean),
    alternates: alternatesForPath(canonical),
    openGraph: {
      type: "website",
      url: canonical,
      title: `${product.name} | Mexmed Pharma`,
      description,
      images: [
        {
          url: product.image.src,
          alt: product.image.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Mexmed Pharma`,
      description,
      images: [product.image.src],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product.id, 3);

  return (
    <article>
      <ProductDetailHero product={product} />
      <ProductDetailContent product={product} />
      <ProductEnquiryCta product={product} />
      <RelatedProducts products={related} />

      <JsonLd id={`ld-product-${product.id}`} data={productJsonLd(product)} />
      <JsonLd
        id={`ld-product-breadcrumb-${product.id}`}
        data={breadcrumbJsonLd([
          { name: "Home", url: absoluteUrl("/") },
          { name: "Products", url: absoluteUrl("/products") },
          {
            name: product.category,
            url: absoluteUrl(
              `/products/category/${categorySlug(product.category)}`,
            ),
          },
          { name: product.name, url: absoluteUrl(product.href) },
        ])}
      />
      {product.faqs?.length ? (
        <JsonLd
          id={`ld-product-faq-${product.id}`}
          data={faqPageJsonLd(product.faqs)}
        />
      ) : null}
    </article>
  );
}
