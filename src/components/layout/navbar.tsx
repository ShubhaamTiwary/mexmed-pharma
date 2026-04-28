"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { mainNavigation } from "@/data/navigation";
import { site } from "@/data/site";
import { trackNavLinkClick, trackNavMobileMenu } from "@/lib/analytics-events";
import { cn } from "@/lib/utils";

import { Container } from "./container";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-card/90 shadow-[0_1px_0_0_rgba(10,18,32,0.05)] backdrop-blur-xl supports-[backdrop-filter]:bg-card/80">
      <Container className="flex min-h-[3.9rem] items-center justify-between gap-4 py-0.5 sm:min-h-[4.35rem] sm:py-1">
        <Link
          href="/"
          className="group flex items-center outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          onClick={() => setOpen(false)}
        >
          <span className="block w-[124px] shrink-0 sm:w-[142px] lg:w-[156px]">
            {/* eslint-disable-next-line @next/next/no-img-element -- local SVG logo asset */}
            <img
              src={site.brand.logoSrc}
              alt={site.brand.logoAlt}
              className="block h-24 w-full scale-[0.72] object-contain sm:h-28"
            />
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main navigation"
        >
          {mainNavigation.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-[10px] px-3.5 py-2 text-[0.8125rem] font-medium tracking-[0.02em] text-muted-foreground transition-colors duration-200",
                  active
                    ? "bg-primary/[0.09] font-semibold text-foreground"
                    : "hover:bg-muted/50 hover:text-foreground",
                )}
                onClick={() =>
                  trackNavLinkClick({
                    href: item.href,
                    label: item.label,
                    placement: "desktop",
                  })
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-border/70 bg-card text-foreground shadow-[inset_0_1px_0_0_rgba(255,255,255,0.85)] transition-colors hover:bg-muted/50 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() =>
            setOpen((v) => {
              const next = !v;
              trackNavMobileMenu(next ? "open" : "close");
              return next;
            })
          }
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden className="relative block h-4 w-5">
            <span
              className={cn(
                "absolute left-0 top-0 block h-0.5 w-5 origin-center rounded-full bg-foreground transition-transform duration-200",
                open && "translate-y-1.5 rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1.5 block h-0.5 w-5 rounded-full bg-foreground transition-opacity duration-200",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-3 block h-0.5 w-5 origin-center rounded-full bg-foreground transition-transform duration-200",
                open && "-translate-y-1.5 -rotate-45",
              )}
            />
          </span>
        </button>
      </Container>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-border/45 bg-card/98 backdrop-blur-md lg:hidden",
          open ? "block" : "hidden",
        )}
        aria-hidden={!open}
      >
        <Container className="flex flex-col gap-1 py-4">
          {mainNavigation.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-[10px] px-3 py-3 text-[0.8125rem] font-medium transition-colors duration-200",
                  active
                    ? "bg-primary/[0.09] font-semibold text-foreground"
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
                )}
                onClick={() => {
                  setOpen(false);
                  trackNavLinkClick({
                    href: item.href,
                    label: item.label,
                    placement: "mobile",
                  });
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </Container>
      </div>
    </header>
  );
}
