import Link from "next/link";

import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import type { Product } from "@/types/product";
import {
  cardPaddingLg,
  ctaRowCentered,
  sectionPaddingMid,
} from "@/lib/section-styles";
import { surfaceCard } from "@/lib/surface";
import { cn } from "@/lib/utils";

type ProductEnquiryCtaProps = {
  product: Product;
  className?: string;
};

export function ProductEnquiryCta({ product, className }: ProductEnquiryCtaProps) {
  const contactHref = `/contact?product=${encodeURIComponent(product.id)}`;

  return (
    <aside
      className={cn(
        sectionPaddingMid,
        "border-t border-border/45 bg-gradient-to-b from-muted/40 via-background to-surface-subtle/40",
        className,
      )}
      aria-labelledby="product-enquiry-heading"
    >
      <Container>
        <div
          className={cn(
            surfaceCard,
            cardPaddingLg,
            "ring-1 ring-border/40 sm:p-10 lg:p-11",
            "shadow-[0_12px_40px_rgba(15,23,42,0.06)]",
          )}
        >
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Next step
            </p>
            <h2
              id="product-enquiry-heading"
              className="mt-3 text-balance text-xl font-medium tracking-[-0.02em] text-foreground sm:mt-4 sm:text-[1.625rem]"
            >
              Request information
            </h2>
            <p className="mt-4 text-pretty text-sm leading-[1.65] text-muted-foreground sm:text-[0.9375rem] sm:leading-relaxed">
              Ask about availability, packs, or distribution for{" "}
              <span className="font-medium text-foreground">{product.name}</span>
              . We reply using the phone number and email listed on our contact
              page.
            </p>
            <div className={ctaRowCentered}>
              <Link
                href={contactHref}
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "w-full min-w-[180px] sm:w-auto",
                )}
              >
                Send enquiry
              </Link>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "w-full sm:w-auto",
                )}
              >
                General contact
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </aside>
  );
}
