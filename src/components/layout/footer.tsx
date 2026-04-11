import Link from "next/link";

import { mainNavigation } from "@/data/navigation";
import { site } from "@/data/site";

import { Container } from "./container";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/[0.08] bg-navy text-navy-foreground shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-12 sm:grid-cols-2 sm:gap-x-14 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-5 lg:col-span-5">
            <p className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-navy-muted">
              Mexmed Pharma
            </p>
            <p className="text-lg font-semibold tracking-[-0.02em] text-navy-foreground">
              {site.name}
            </p>
            <p className="max-w-sm text-sm leading-relaxed text-navy-muted">
              {site.summary}
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-navy-muted">
              Navigate
            </p>
            <ul
              className="mt-6 grid gap-y-3 gap-x-8 sm:grid-cols-2"
              role="list"
            >
              {mainNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-navy-muted transition-colors duration-200 hover:text-navy-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8 sm:col-span-2 lg:col-span-4">
            <div>
              <p className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-navy-muted">
                Contact
              </p>
              <div className="mt-6 space-y-6">
                {site.contact.locations.map((loc) => (
                  <address key={loc.label} className="not-italic">
                    <p className="text-xs font-semibold text-navy-foreground">
                      {loc.label}
                    </p>
                    <ul
                      className="mt-2 space-y-1 text-sm leading-relaxed text-navy-muted"
                      role="list"
                    >
                      {loc.lines.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </address>
                ))}
              </div>
            </div>
            <div className="space-y-2 border-t border-white/10 pt-6">
              <p className="text-sm">
                <a
                  href={site.contact.phoneHref}
                  className="font-semibold text-navy-foreground transition-colors hover:text-white"
                >
                  {site.contact.phoneDisplay}
                </a>
              </p>
              <p className="text-sm">
                <a
                  href={site.contact.emailHref}
                  className="font-medium text-white/90 underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  {site.contact.emailDisplay}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-10 text-sm text-navy-muted sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {site.name}. All rights reserved.
          </p>
          <p className="text-xs sm:text-sm">
            Privacy and legal links can be added here for production.
          </p>
        </div>
      </Container>
    </footer>
  );
}
