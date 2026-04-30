"use client";

import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/types/product";
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
            "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.92)]",
            "transition-[transform,border-color] duration-200 group-hover:-translate-y-1 group-hover:border-primary/30",
            className,
          )}
        >
          <div className="relative aspect-[4/5.4] overflow-hidden bg-[#fbfcf7] sm:aspect-[16/12]">
            <Image
              src={product.image.src}
              alt={product.image.alt}
              fill
              priority={imagePriority}
              className="object-contain p-1 transition duration-500 group-hover:scale-[1.03] sm:p-2"
              style={{ filter: "saturate(1.22) contrast(1.08) brightness(1.04)" }}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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

          <div className="flex flex-1 flex-col p-4 sm:p-5">
            <TitleTag className="text-[1.125rem] font-semibold leading-snug tracking-[-0.02em] text-foreground transition-colors group-hover:text-primary sm:text-[1.2rem]">
              {product.name}
            </TitleTag>
            <p className="mt-2 font-mono text-[0.75rem] text-muted-foreground tabular-nums">
              Ref. {product.id}
            </p>
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
            "p-5 sm:p-6",
            "shadow-[0_1px_2px_rgba(17,32,22,0.04),0_18px_52px_rgba(27,40,28,0.08),inset_0_1px_0_0_rgba(255,255,255,0.9)]",
            "border-l-[3px] border-l-primary/30 transition-[box-shadow,border-color,transform] duration-200",
            "group-hover:-translate-y-1 group-hover:border-primary/30 group-hover:shadow-[0_24px_64px_rgba(27,40,28,0.12)]",
            "sm:min-h-0",
            className,
          )}
        >
          <div className="relative mb-4 aspect-[16/12] overflow-hidden rounded-[10px] border border-border/40 bg-[radial-gradient(circle_at_top,_rgba(217,231,189,0.34),_transparent_42%),linear-gradient(180deg,rgba(255,255,252,0.98),rgba(240,246,231,0.96))] sm:mb-5">
            <Image
              src={product.image.src}
              alt={product.image.alt}
              fill
              priority={imagePriority}
              className="object-contain p-1 opacity-100 drop-shadow-[0_14px_30px_rgba(34,46,32,0.18)] transition duration-300 group-hover:scale-[1.05] sm:p-2"
              style={{ filter: "saturate(1.22) contrast(1.08) brightness(1.04)" }}
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
          "p-5 sm:p-6",
          "flex h-full min-h-[200px] flex-col border-t-[3px] border-t-primary/25 transition-[box-shadow,border-color,transform] duration-200 sm:min-h-0",
          "group-hover:-translate-y-1 group-hover:border-primary/30 group-hover:shadow-[0_18px_48px_rgba(27,40,28,0.12)]",
          className,
        )}
      >
        <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-[10px] border border-border/40 bg-[radial-gradient(circle_at_top,_rgba(217,231,189,0.34),_transparent_42%),linear-gradient(180deg,rgba(255,255,252,0.98),rgba(240,246,231,0.96))]">
          <Image
            src={product.image.src}
            alt={product.image.alt}
            fill
            priority={imagePriority}
            className="object-contain p-2 drop-shadow-[0_14px_30px_rgba(34,46,32,0.18)] transition duration-300 group-hover:scale-[1.05] sm:p-3"
            style={{ filter: "saturate(1.22) contrast(1.08) brightness(1.04)" }}
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
      </article>
    </Link>
  );
}
