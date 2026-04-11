import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  ProductDetailContent,
  ProductDetailHero,
  ProductEnquiryCta,
  RelatedProducts,
} from "@/components/products";
import {
  getProductBySlug,
  getRelatedProducts,
  products,
} from "@/data/products";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return { title: "Product" };
  }
  return {
    title: product.name,
    description: product.summary,
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
    </article>
  );
}
