import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import type { Product } from "@/types/product";
import { cardPadding } from "@/lib/section-styles";
import { surfaceCard } from "@/lib/surface";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
  className?: string;
  titleAs?: "h2" | "h3";
  /** Listing/catalog: text-first clinical layout. */
  variant?: "default" | "catalog" | "featured";
};

export function ProductCard({
  product,
  className,
  titleAs = "h2",
  variant = "default",
}: ProductCardProps) {
  const TitleTag = titleAs;

  if (variant === "featured") {
    return (
      <article
        className={cn(
          "group flex h-full min-h-0 flex-col overflow-hidden rounded-[12px] border border-border/45 bg-card",
          "shadow-[0_12px_48px_rgba(10,18,32,0.07),inset_0_1px_0_0_rgba(255,255,255,0.92)]",
          "transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_56px_rgba(10,18,32,0.1)]",
          className,
        )}
      >
        <Link
          href={product.href}
          className="relative block aspect-[16/11] overflow-hidden bg-muted"
        >
          <Image
            src={product.image.src}
            alt={product.image.alt}
            fill
            className="object-contain p-5 transition duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"
            aria-hidden
          />
          <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2">
            <span className="rounded-[6px] bg-background/90 px-2 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-primary shadow-sm backdrop-blur-sm">
              {product.category}
            </span>
            {product.dosageForm ? (
              <span className="rounded-full border border-border/60 bg-card/95 px-2.5 py-0.5 text-[0.6875rem] font-medium text-muted-foreground backdrop-blur-sm">
                {product.dosageForm}
              </span>
            ) : null}
          </div>
        </Link>

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <TitleTag className="text-[1.0625rem] font-semibold leading-snug tracking-[-0.02em] text-foreground sm:text-[1.125rem]">
            <Link
              href={product.href}
              className="text-foreground transition-colors hover:text-primary"
            >
              {product.name}
            </Link>
          </TitleTag>
          <p className="mt-2 font-mono text-[0.6875rem] text-muted-foreground tabular-nums">
            Ref. {product.id}
          </p>
          <p className="mt-3 flex-1 text-[0.8125rem] leading-[1.65] text-muted-foreground line-clamp-3 sm:text-sm">
            {product.summary}
          </p>
          <Link
            href={product.href}
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "mt-4 -ml-2 self-start px-2 text-[0.8125rem] font-semibold text-primary hover:bg-primary/[0.05]",
            )}
          >
            View product
          </Link>
        </div>
      </article>
    );
  }

  if (variant === "catalog") {
    return (
      <article
        className={cn(
          "group flex h-full min-h-[220px] flex-col rounded-[10px] border border-border/45 bg-card",
          "p-7 sm:p-8",
          "shadow-[0_1px_2px_rgba(10,18,32,0.05),0_10px_40px_rgba(10,18,32,0.05),inset_0_1px_0_0_rgba(255,255,255,0.9)]",
          "border-l-[3px] border-l-primary/30 transition-[box-shadow,border-color] duration-200",
          "hover:border-border/60 hover:shadow-[0_16px_48px_rgba(10,18,32,0.08)]",
          "sm:min-h-0",
          className,
        )}
      >
        <div className="relative mb-5 aspect-[16/9] overflow-hidden rounded-[8px] bg-muted sm:mb-6">
          <Image
            src={product.image.src}
            alt={product.image.alt}
            fill
            className="object-contain p-4 opacity-95 transition duration-300 group-hover:opacity-100"
            sizes="(max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <div className="flex flex-wrap items-start justify-between gap-3 gap-y-2">
          <p className="min-w-0 flex-1 text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-primary">
            {product.category}
          </p>
          {product.dosageForm ? (
            <span className="inline-flex shrink-0 rounded-full border border-border/50 bg-muted/55 px-2.5 py-1 text-[0.6875rem] font-medium leading-none text-muted-foreground">
              {product.dosageForm}
            </span>
          ) : null}
        </div>

        <TitleTag className="mt-3 text-[1.0625rem] font-semibold leading-snug tracking-[-0.022em] text-foreground sm:text-[1.125rem]">
          <Link
            href={product.href}
            className="text-foreground transition-colors duration-200 group-hover:text-primary"
          >
            {product.name}
          </Link>
        </TitleTag>

        <p className="mt-2.5 font-mono text-[0.6875rem] text-muted-foreground/95 tabular-nums">
          Ref. {product.id}
        </p>

        <p className="mt-4 flex-1 text-[0.8125rem] leading-[1.65] text-muted-foreground line-clamp-4 sm:text-sm sm:leading-relaxed">
          {product.summary}
        </p>

        <Link
          href={product.href}
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "mt-6 -ml-2 self-start px-2 text-[0.8125rem] font-semibold text-primary hover:bg-primary/[0.05]",
          )}
        >
          View specifications
        </Link>
      </article>
    );
  }

  return (
    <article
      className={cn(
        surfaceCard,
        cardPadding,
        "group flex h-full min-h-[200px] flex-col border-t-[3px] border-t-primary/25 sm:min-h-0",
        "hover:border-primary/30 hover:shadow-[0_6px_24px_rgba(10,18,32,0.06)]",
        className,
      )}
    >
      <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-[8px] bg-muted">
        <Image
          src={product.image.src}
          alt={product.image.alt}
          fill
          className="object-contain p-4 transition duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-wrap items-start justify-between gap-2 gap-y-2">
        <div className="min-w-0 flex-1">
          <p className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-primary">
            {product.category}
          </p>
          <TitleTag className="mt-2.5 text-base font-semibold leading-snug tracking-[-0.02em] text-foreground sm:text-[1.0625rem]">
            <Link
              href={product.href}
              className="text-foreground transition-colors duration-200 group-hover:text-primary"
            >
              {product.name}
            </Link>
          </TitleTag>
        </div>
        {product.dosageForm ? (
          <span className="shrink-0 rounded-sm border border-border/65 bg-muted/45 px-2 py-1 text-center text-[0.6875rem] font-medium leading-none text-muted-foreground">
            {product.dosageForm}
          </span>
        ) : null}
      </div>

      <p className="mt-2 font-mono text-[0.6875rem] text-muted-foreground tabular-nums">
        Ref. {product.id}
      </p>

      <p className="mt-3 flex-1 text-[0.8125rem] leading-[1.62] text-muted-foreground line-clamp-4 sm:text-sm sm:leading-relaxed">
        {product.summary}
      </p>

      <Link
        href={product.href}
        className={cn(
          buttonVariants({ variant: "ghost", size: "sm" }),
          "mt-5 -ml-2 self-start px-2 text-[0.8125rem] font-semibold text-primary hover:bg-primary/[0.05]",
        )}
      >
        Product detail
      </Link>
    </article>
  );
}
