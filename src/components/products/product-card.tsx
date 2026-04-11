import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import type { Product } from "@/types/product";
import { surfaceCard } from "@/lib/surface";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
  className?: string;
  /** Use `h3` when the card sits under a section `h2` (e.g. related products). */
  titleAs?: "h2" | "h3";
};

export function ProductCard({
  product,
  className,
  titleAs = "h2",
}: ProductCardProps) {
  const TitleTag = titleAs;

  return (
    <article
      className={cn(
        surfaceCard,
        "flex h-full min-h-[200px] flex-col p-6 sm:min-h-0 sm:p-7",
        className,
      )}
    >
      <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-primary">
        {product.category}
        {product.dosageForm ? (
          <span className="font-normal text-muted-foreground">
            {" "}
            · {product.dosageForm}
          </span>
        ) : null}
      </p>
      <TitleTag className="mt-3 text-base font-semibold leading-snug tracking-tight text-foreground sm:text-lg">
        <Link
          href={product.href}
          className="text-foreground transition-colors hover:text-primary"
        >
          {product.name}
        </Link>
      </TitleTag>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
        {product.summary}
      </p>
      <Link
        href={product.href}
        className={cn(
          buttonVariants({ variant: "ghost", size: "sm" }),
          "mt-5 -ml-2 self-start px-2 text-primary hover:bg-primary/5 hover:text-primary",
        )}
      >
        View details
      </Link>
    </article>
  );
}
