"use client";

import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import type { Product } from "@/types/product";
import { cardPadding } from "@/lib/section-styles";
import { trackProductCardClick } from "@/lib/analytics-events";
import { surfaceCard } from "@/lib/surface";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
  className?: string;
  titleAs?: "h2" | "h3";
  /** Listing/catalog: text-first clinical layout. */
  variant?: "default" | "catalog" | "featured";
  /** Prefer LCP when this card is first in the viewport grid. */
  imagePriority?: boolean;
};

function ProductCardCta({ label }: { label: string }) {
  return (
    <span
      className={cn(
        buttonVariants({ variant: "ghost", size: "sm" }),
        "mt-6 -ml-2 self-start px-2 text-[0.875rem] font-semibold text-primary hover:bg-transparent",
      )}
    >
      {label}
    </span>
  );
}

export function ProductCard({
  product,
  className,
  titleAs = "h2",
  variant = "default",
  imagePriority = false,
}: ProductCardProps) {
  const TitleTag = titleAs;

  const handleNavigate = () => {
    trackProductCardClick({
      product_id: product.id,
      product_name: product.name,
      variant,
    });
  };

  if (variant === "featured") {
    return (
      <Link
        href={product.href}
        aria-label={`View ${product.name} product details`}
        className="group block h-full rounded-[12px] outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        onClick={handleNavigate}
      >
        <article
          className={cn(
            "flex h-full min-h-0 flex-col overflow-hidden rounded-[12px] border border-border/45 bg-card",
            "shadow-[0_12px_48px_rgba(10,18,32,0.07),inset_0_1px_0_0_rgba(255,255,255,0.92)]",
            "transition-[box-shadow,transform,border-color] duration-200 group-hover:-translate-y-0.5 group-hover:border-border/70 group-hover:shadow-[0_20px_56px_rgba(10,18,32,0.1)]",
            className,
          )}
        >
          <div className="relative aspect-[4/5] overflow-hidden bg-muted sm:aspect-[16/11]">
            <Image
              src={product.image.src}
              alt={product.image.alt}
              fill
              priority={imagePriority}
              className="object-contain p-3 transition duration-500 group-hover:scale-[1.03] sm:p-5"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"
              aria-hidden
            />
            <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2">
              <span className="rounded-[6px] bg-background/90 px-2 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-primary shadow-sm backdrop-blur-sm">
                {product.category}
              </span>
              {product.dosageForm ? (
                <span className="rounded-full border border-border/60 bg-card/95 px-2.5 py-0.5 text-[0.75rem] font-medium text-muted-foreground backdrop-blur-sm">
                  {product.dosageForm}
                </span>
              ) : null}
            </div>
          </div>

          <div className="flex flex-1 flex-col p-5 sm:p-7">
            <TitleTag className="text-[1.125rem] font-semibold leading-snug tracking-[-0.02em] text-foreground transition-colors group-hover:text-primary sm:text-[1.2rem]">
              {product.name}
            </TitleTag>
            <p className="mt-2 font-mono text-[0.75rem] text-muted-foreground tabular-nums">
              Ref. {product.id}
            </p>
            <p className="mt-3 flex-1 text-[0.9375rem] leading-[1.72] text-muted-foreground line-clamp-3">
              {product.summary}
            </p>
            <ProductCardCta label="View product" />
          </div>
        </article>
      </Link>
    );
  }

  if (variant === "catalog") {
    return (
      <Link
        href={product.href}
        aria-label={`View ${product.name} specifications`}
        className="group block h-full rounded-[10px] outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        onClick={handleNavigate}
      >
        <article
          className={cn(
            "flex h-full min-h-[220px] flex-col rounded-[10px] border border-border/45 bg-card",
            "p-7 sm:p-8",
            "shadow-[0_1px_2px_rgba(10,18,32,0.05),0_10px_40px_rgba(10,18,32,0.05),inset_0_1px_0_0_rgba(255,255,255,0.9)]",
            "border-l-[3px] border-l-primary/30 transition-[box-shadow,border-color,transform] duration-200",
            "group-hover:-translate-y-0.5 group-hover:border-border/60 group-hover:shadow-[0_16px_48px_rgba(10,18,32,0.08)]",
            "sm:min-h-0",
            className,
          )}
        >
          <div className="relative mb-5 aspect-[16/9] overflow-hidden rounded-[8px] bg-muted sm:mb-6">
            <Image
              src={product.image.src}
              alt={product.image.alt}
              fill
              priority={imagePriority}
              className="object-contain p-4 opacity-95 transition duration-300 group-hover:opacity-100"
              sizes="(max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <div className="flex flex-wrap items-start justify-between gap-3 gap-y-2">
            <p className="min-w-0 flex-1 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-primary">
              {product.category}
            </p>
            {product.dosageForm ? (
              <span className="inline-flex shrink-0 rounded-full border border-border/50 bg-muted/55 px-2.5 py-1 text-[0.75rem] font-medium leading-none text-muted-foreground">
                {product.dosageForm}
              </span>
            ) : null}
          </div>

          <TitleTag className="mt-3 text-[1.125rem] font-semibold leading-snug tracking-[-0.022em] text-foreground transition-colors duration-200 group-hover:text-primary sm:text-[1.2rem]">
            {product.name}
          </TitleTag>

          <p className="mt-2.5 font-mono text-[0.75rem] text-muted-foreground/95 tabular-nums">
            Ref. {product.id}
          </p>

          <p className="mt-4 flex-1 text-[0.9375rem] leading-[1.72] text-muted-foreground line-clamp-4">
            {product.summary}
          </p>

          <ProductCardCta label="View specifications" />
        </article>
      </Link>
    );
  }

  return (
    <Link
      href={product.href}
      aria-label={`View ${product.name} product detail`}
      className="group block h-full rounded-[12px] outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      onClick={handleNavigate}
    >
      <article
        className={cn(
          surfaceCard,
          cardPadding,
          "flex h-full min-h-[200px] flex-col border-t-[3px] border-t-primary/25 transition-[box-shadow,border-color,transform] duration-200 sm:min-h-0",
          "group-hover:-translate-y-0.5 group-hover:border-primary/30 group-hover:shadow-[0_8px_28px_rgba(10,18,32,0.08)]",
          className,
        )}
      >
        <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-[8px] bg-muted">
          <Image
            src={product.image.src}
            alt={product.image.alt}
            fill
            priority={imagePriority}
            className="object-contain p-4 transition duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        </div>
        <div className="flex flex-wrap items-start justify-between gap-2 gap-y-2">
          <div className="min-w-0 flex-1">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-primary">
              {product.category}
            </p>
            <TitleTag className="mt-2.5 text-[1.125rem] font-semibold leading-snug tracking-[-0.02em] text-foreground transition-colors duration-200 group-hover:text-primary">
              {product.name}
            </TitleTag>
          </div>
          {product.dosageForm ? (
            <span className="shrink-0 rounded-sm border border-border/65 bg-muted/45 px-2 py-1 text-center text-[0.75rem] font-medium leading-none text-muted-foreground">
              {product.dosageForm}
            </span>
          ) : null}
        </div>

        <p className="mt-2 font-mono text-[0.75rem] text-muted-foreground tabular-nums">
          Ref. {product.id}
        </p>

        <p className="mt-3 flex-1 text-[0.9375rem] leading-[1.72] text-muted-foreground line-clamp-4">
          {product.summary}
        </p>

        <ProductCardCta label="Product detail" />
      </article>
    </Link>
  );
}
