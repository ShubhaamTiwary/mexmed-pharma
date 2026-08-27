import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { CatalogEnquirySection } from "@/components/products/catalog-enquiry-section";
import { ProductCatalogGridSection } from "@/components/products/product-catalog-grid-section";
import { JsonLd } from "@/components/seo/json-ld";
import {
  getProductCategories,
  products,
  productsListingPage,
} from "@/data/products";
import { sectionPadding } from "@/lib/section-styles";
import { absoluteUrl, alternatesForPath, primaryOpenGraphImages, primaryTwitterImage } from "@/lib/seo";
import {
  breadcrumbJsonLd,
  itemListJsonLd,
} from "@/lib/structured-data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: productsListingPage.metaTitle,
  description: productsListingPage.metaDescription,
  alternates: alternatesForPath("/products"),
  openGraph: {
    url: "/products",
    title: `${productsListingPage.metaTitle} | Mexmed Pharma`,
    description: productsListingPage.metaDescription,
    type: "website",
    images: primaryOpenGraphImages(),
  },
  twitter: {
    title: `${productsListingPage.metaTitle} | Mexmed Pharma`,
    description: productsListingPage.metaDescription,
    images: [primaryTwitterImage()],
  },
};

export default function ProductsListingPage() {
  const count = products.length;

  return (
    <>
      <section
        className={cn(
          sectionPadding,
          "border-b border-border/50 bg-card",
        )}
      >
        <Container>
          <nav
            className="mb-8 text-[0.75rem] leading-relaxed tracking-[0.02em] text-muted-foreground"
            aria-label="Breadcrumb"
          >
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1" role="list">
              <li>
                <Link
                  href="/"
                  className="transition-colors duration-200 hover:text-foreground"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden className="text-border/80">
                /
              </li>
              <li className="font-medium text-foreground">Products</li>
            </ol>
          </nav>

          <header className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-14 xl:gap-20">
            <div className="max-w-3xl">
              <p className="text-[0.625rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                {productsListingPage.eyebrow}
              </p>
              <h1
                id="products-list-heading"
                className="mt-4 text-balance text-[2rem] font-semibold leading-[1.08] tracking-[-0.035em] text-foreground sm:text-[2.25rem] lg:text-[2.5rem] lg:leading-[1.06]"
              >
                {productsListingPage.title}
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-[0.9375rem] leading-[1.68] text-muted-foreground sm:text-base sm:leading-relaxed">
                {productsListingPage.description}
              </p>
            </div>

            <div className="shrink-0 lg:pb-1">
              <div
                className="inline-flex items-center gap-4 rounded-full border border-border/55 bg-background/90 px-5 py-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9),0_8px_30px_rgba(10,18,32,0.05)] sm:px-6 sm:py-3.5"
                aria-live="polite"
              >
                <span className="text-[1.75rem] font-semibold tabular-nums leading-none tracking-tight text-foreground sm:text-[2rem]">
                  {count}
                </span>
                <span
                  className="h-10 w-px shrink-0 bg-border/70"
                  aria-hidden
                />
                <span className="max-w-[9rem] text-[0.6875rem] font-semibold uppercase leading-snug tracking-[0.14em] text-muted-foreground">
                  Listed formulations
                </span>
              </div>
            </div>
          </header>

          <nav aria-label="Browse by therapeutic area" className="mt-10">
            <p className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Browse by therapeutic area
            </p>
            <ul className="mt-4 flex flex-wrap gap-2" role="list">
              {getProductCategories().map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/products/category/${category.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background px-3 py-1.5 text-[0.75rem] font-medium text-foreground/90 transition-colors hover:border-primary/30 hover:bg-muted/50"
                  >
                    {category.name}
                    <span className="text-[0.6875rem] tabular-nums text-muted-foreground">
                      {category.count}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </section>

      <section
        className={cn(
          "border-b border-border/45 bg-background py-12 sm:py-16 lg:py-20 xl:py-24",
        )}
      >
        <Container>
          <ProductCatalogGridSection products={products} />
        </Container>
      </section>

      <CatalogEnquirySection />

      <JsonLd
        id="ld-products-breadcrumb"
        data={breadcrumbJsonLd([
          { name: "Home", url: absoluteUrl("/") },
          { name: "Products", url: absoluteUrl("/products") },
        ])}
      />
      <JsonLd
        id="ld-products-itemlist"
        data={itemListJsonLd(
          products.map((p) => ({
            name: p.name,
            url: absoluteUrl(p.href),
            image: p.image.src,
          })),
        )}
      />
    </>
  );
}
