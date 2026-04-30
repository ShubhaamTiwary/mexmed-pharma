import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

function IconWrap({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={cn(
        "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] border border-primary/15 bg-primary/[0.06] text-primary",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

/** Minimal line icons — pharma / corporate, not decorative clipart */
export function IconQuality(props: ComponentPropsWithoutRef<"svg">) {
  return (
    <IconWrap>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden
        {...props}
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    </IconWrap>
  );
}

export function IconMission(props: ComponentPropsWithoutRef<"svg">) {
  return (
    <IconWrap>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden
        {...props}
      >
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4.5" />
        <path d="M12 3v3" />
        <path d="M21 12h-3" />
        <path d="M12 21v-3" />
        <path d="M3 12h3" />
      </svg>
    </IconWrap>
  );
}

export function IconVision(props: ComponentPropsWithoutRef<"svg">) {
  return (
    <IconWrap>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden
        {...props}
      >
        <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z" />
        <circle cx="12" cy="12" r="2.75" />
      </svg>
    </IconWrap>
  );
}

export function IconSafety(props: ComponentPropsWithoutRef<"svg">) {
  return (
    <IconWrap>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden
        {...props}
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    </IconWrap>
  );
}

export function IconRange(props: ComponentPropsWithoutRef<"svg">) {
  return (
    <IconWrap>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden
        {...props}
      >
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
      </svg>
    </IconWrap>
  );
}

export function IconSupport(props: ComponentPropsWithoutRef<"svg">) {
  return (
    <IconWrap>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden
        {...props}
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 10h.01" />
        <path d="M12 10h.01" />
        <path d="M16 10h.01" />
      </svg>
    </IconWrap>
  );
}

export const pillarIcons = [
  IconQuality,
  IconSafety,
  IconRange,
  IconSupport,
] as const;
