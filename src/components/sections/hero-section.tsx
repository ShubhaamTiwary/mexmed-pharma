import { HeroSection2 } from "@/components/ui/hero-section-2";
import { company } from "@/data/company";
import { site } from "@/data/site";

export function HeroSection() {
  const { hero } = company;
  const websiteLabel = site.publicUrl.replace(/^https?:\/\//, "");
  const headOffice = site.contact.locations[0];
  const addressLine = [headOffice.lines[1], headOffice.lines[2]].join(" · ");

  return (
    <HeroSection2
      slogan={hero.eyebrow}
      title={
        <>
          {hero.headline.lead}
          <br />
          <span className="text-primary">{hero.headline.accent}</span>
        </>
      }
      subtitle={hero.description}
      callToAction={{
        text: hero.primaryCta.label.toUpperCase(),
        href: hero.primaryCta.href,
      }}
      secondaryCallToAction={{
        text: hero.secondaryCta.label.toUpperCase(),
        href: hero.secondaryCta.href,
      }}
      trustPoints={hero.trustPoints}
      metrics={hero.metrics}
      backgroundImage={hero.backgroundImage}
      contactInfo={{
        website: websiteLabel,
        websiteHref: site.publicUrl,
        phone: site.contact.phoneDisplay,
        phoneHref: site.contact.phoneHref,
        address: addressLine,
      }}
    />
  );
}
