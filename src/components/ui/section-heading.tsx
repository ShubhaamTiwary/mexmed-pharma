import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** Use h2 when the page already has an h1 (e.g. a hero). */
  heading?: "h1" | "h2";
  /** Sets `id` on the title heading for landmarks / `aria-labelledby`. */
  id?: string;
  /** Tighter stack for dense sections. */
  density?: "default" | "comfortable";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  heading = "h1",
  id,
  density = "default",
  className,
}: SectionHeadingProps) {
  const HeadingTag = heading;

  return (
    <header
      className={cn(
        density === "comfortable" ? "space-y-4" : "space-y-5 sm:space-y-6",
        align === "center" && "mx-auto max-w-3xl text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-primary sm:text-xs",
            align === "center" && "mx-auto max-w-prose",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <HeadingTag
        id={id}
        className={cn(
          "text-balance font-semibold tracking-[-0.02em] text-foreground",
          heading === "h1"
            ? "text-[1.75rem] leading-tight sm:text-[2rem] lg:text-[2.375rem] lg:leading-[1.15]"
            : "text-[1.625rem] leading-snug sm:text-[1.875rem] lg:text-[2.125rem] lg:leading-tight",
        )}
      >
        {title}
      </HeadingTag>
      {description ? (
        <p
          className={cn(
            "max-w-[42rem] text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base sm:leading-relaxed",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
