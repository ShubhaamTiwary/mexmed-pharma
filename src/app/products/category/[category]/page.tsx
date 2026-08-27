import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/container";
import { CatalogEnquirySection } from "@/components/products/catalog-enquiry-section";
import { ProductCatalogGridSection } from "@/components/products/product-catalog-grid-section";
import { JsonLd } from "@/components/seo/json-ld";
import {
  categoryContent,
  getCategoryBySlug,
  getProductCategories,
  getProductsByCategory,
} from "@/data/products";
import {
  absoluteUrl,
  alternatesForPath,
  primaryOpenGraphImages,
  primaryTwitterImage,
} from "@/lib/seo";
import { sectionPadding } from "@/lib/section-styles";
import {
  breadcrumbJsonLd,
  collectionPageJsonLd,
  itemListJsonLd,
} from "@/lib/structured-data";
import { cn } from "@/lib/utils";

type Props = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return getProductCategories().map((category) => ({
    category: category.slug,
  }));
}

/** Only the pre-generated category slugs are servable; everything else 404s. */
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) {
    return {
      title: "Category not found",
      description: "The category you are looking for is not available.",
      robots: { index: false, follow: false },
    };
  }

  const canonical = `/products/category/${cat.slug}`;
  const title = `${cat.name} products`;
  const description =
    categoryContent[cat.name]?.metaDescription ??
    `Explore Mexmed Pharma's ${cat.name.toLowerCase()} formulations with composition, dosage form, and pack detail.`;

  return {
    title,
    description,
    alternates: alternatesForPath(canonical),
    openGraph: {
      url: canonical,
      title: `${cat.name} products | Mexmed Pharma`,
      description,
      type: "website",
      images: primaryOpenGraphImages(),
    },
    twitter: {
      title: `${cat.name} products | Mexmed Pharma`,
      description,
      images: [primaryTwitterImage()],
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) {
    notFound();
  }

  const items = getProductsByCategory(cat.slug);
  const intro =
    categoryContent[cat.name]?.intro ??
    `Explore the Mexmed Pharma ${cat.name.toLowerCase()} range with composition, dosage form, and pack detail for each product.`;

  return (
    <>
      <section className={cn(sectionPadding, "border-b border-border/50 bg-card")}>
        <Container>
          <nav
            className="text-[0.75rem] leading-relaxed tracking-[0.02em] text-muted-foreground"
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
              <li>
                <Link
                  href="/products"
                  className="transition-colors duration-200 hover:text-foreground"
                >
                  Products
                </Link>
              </li>
              <li aria-hidden className="text-border/80">
                /
              </li>
              <li className="font-medium text-foreground">{cat.name}</li>
            </ol>
          </nav>

          <header className="mt-8 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-14">
            <div className="max-w-3xl">
              <p className="text-[0.625rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Therapeutic area
              </p>
              <h1 className="mt-4 text-balance text-[2rem] font-semibold leading-[1.08] tracking-[-0.035em] text-foreground sm:text-[2.25rem] lg:text-[2.5rem]">
                {cat.name}
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-[0.9375rem] leading-[1.68] text-muted-foreground sm:text-base sm:leading-relaxed">
                {intro}
              </p>
            </div>

            <div className="shrink-0 lg:pb-1">
              <div className="inline-flex items-center gap-4 rounded-full border border-border/55 bg-background/90 px-5 py-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9),0_8px_30px_rgba(10,18,32,0.05)] sm:px-6 sm:py-3.5">
                <span className="text-[1.75rem] font-semibold tabular-nums leading-none tracking-tight text-foreground sm:text-[2rem]">
                  {cat.count}
                </span>
                <span className="h-10 w-px shrink-0 bg-border/70" aria-hidden />
                <span className="max-w-[9rem] text-[0.6875rem] font-semibold uppercase leading-snug tracking-[0.14em] text-muted-foreground">
                  {cat.count === 1 ? "Product" : "Products"}
                </span>
              </div>
            </div>
          </header>
        </Container>
      </section>

      <section className="border-b border-border/45 bg-background py-12 sm:py-16 lg:py-20 xl:py-24">
        <Container>
          <ProductCatalogGridSection products={items} />
        </Container>
      </section>

      <CatalogEnquirySection />

      <JsonLd
        id={`ld-category-collection-${cat.slug}`}
        data={collectionPageJsonLd({
          name: `${cat.name} products`,
          description: intro,
          url: absoluteUrl(`/products/category/${cat.slug}`),
        })}
      />
      <JsonLd
        id={`ld-category-breadcrumb-${cat.slug}`}
        data={breadcrumbJsonLd([
          { name: "Home", url: absoluteUrl("/") },
          { name: "Products", url: absoluteUrl("/products") },
          { name: cat.name, url: absoluteUrl(`/products/category/${cat.slug}`) },
        ])}
      />
      <JsonLd
        id={`ld-category-itemlist-${cat.slug}`}
        data={itemListJsonLd(
          items.map((product) => ({
            name: product.name,
            url: absoluteUrl(product.href),
            image: product.image.src,
          })),
        )}
      />
    </>
  );
}
