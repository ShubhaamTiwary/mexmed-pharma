import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/container";
import {
  ProductDetailHero,
  ProductEnquiryCta,
  RelatedProducts,
} from "@/components/products";
import { buttonVariants } from "@/components/ui/button";
import {
  getProductBySlug,
  getRelatedProducts,
  products,
} from "@/data/products";
import { sectionPadding } from "@/lib/section-styles";
import { surfaceCard } from "@/lib/surface";
import { cn } from "@/lib/utils";

const detailSectionClass = cn(
  sectionPadding,
  "border-b border-border/70 bg-background",
);

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

      <section
        className={detailSectionClass}
        aria-labelledby="product-overview-heading"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-12 lg:items-start">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2
                  id="product-overview-heading"
                  className="text-lg font-semibold tracking-tight text-foreground"
                >
                  Overview
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {product.summary}
                </p>
              </div>

              {product.composition ? (
                <div
                  className={cn(surfaceCard, "p-6 sm:p-7")}
                >
                  <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-foreground">
                    Composition
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {product.composition}
                  </p>
                  <p className="mt-4 border-t border-border/70 pt-4 text-xs leading-relaxed text-muted-foreground">
                    Information reflects legacy website extraction. Validate
                    against current approved labels and local regulations before
                    clinical or promotional use.
                  </p>
                </div>
              ) : null}
            </div>

            <div className="lg:col-span-1">
              <div className={cn(surfaceCard, "sticky top-24 p-6 sm:p-7")}>
                <h3 className="text-sm font-semibold text-foreground">
                  At a glance
                </h3>
                <dl className="mt-4 space-y-3 text-sm">
                  <div>
                    <dt className="text-muted-foreground">Category</dt>
                    <dd className="mt-0.5 font-medium text-foreground">
                      {product.category}
                    </dd>
                  </div>
                  {product.dosageForm ? (
                    <div>
                      <dt className="text-muted-foreground">Dosage form</dt>
                      <dd className="mt-0.5 font-medium text-foreground">
                        {product.dosageForm}
                      </dd>
                    </div>
                  ) : null}
                  <div>
                    <dt className="text-muted-foreground">Product code</dt>
                    <dd className="mt-0.5 font-mono text-xs text-foreground">
                      {product.id}
                    </dd>
                  </div>
                </dl>
                <Link
                  href="/products"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "mt-6 w-full border-border/90",
                  )}
                >
                  Back to catalog
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ProductEnquiryCta product={product} />
      <RelatedProducts products={related} />
    </article>
  );
}
