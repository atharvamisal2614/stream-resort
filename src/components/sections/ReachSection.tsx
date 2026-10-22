import type { ComponentType, SVGProps } from "react";

import { ButtonLink } from "@/components/Button";
import { CarIcon, PhoneIcon, PinIcon, TownIcon, TrainIcon } from "@/components/Icons";
import { Section, SectionHeading } from "@/components/Section";
import { reach } from "@/lib/content";
import { links, site } from "@/lib/site";

const icons: Record<(typeof reach.routes)[number]["icon"], ComponentType<SVGProps<SVGSVGElement>>> = {
  car: CarIcon,
  train: TrainIcon,
  town: TownIcon,
};

export function ReachSection({ showHeading = true, tint = false }: { showHeading?: boolean; tint?: boolean }) {
  return (
    <Section id="how-to-reach" tint={tint}>
      {showHeading && <SectionHeading eyebrow="Plan your journey" title="How to Reach" className="mb-10 lg:mb-12" />}

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <h3 className="text-2xl">By Road</h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {reach.routes.map((r) => {
              const Icon = icons[r.icon];
              return (
                <li key={r.title} className="rounded-2xl border border-aqua-100 bg-white p-4">
                  <Icon className="size-5 text-aqua-600" />
                  <span className="mt-3 block text-[15px] font-medium">{r.title}</span>
                  <span className="mt-0.5 block text-sm text-ink-soft">{r.text}</span>
                </li>
              );
            })}
          </ul>
          <p className="mt-4 text-[13px] text-ink-soft italic">{reach.note}</p>

          <h3 className="mt-10 text-2xl">Find us</h3>
          <address className="mt-4 flex gap-3 text-[15px] leading-relaxed not-italic">
            <PinIcon className="mt-1 size-5 shrink-0 text-aqua-600" />
            <span>
              {site.name}
              <br />
              {site.address.line1}
              <br />
              {site.address.line2}, {site.address.region}
            </span>
          </address>
        </div>

        <div className="flex flex-col gap-4">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-aqua-100 bg-aqua-100">
            <iframe
              title="Map showing The Stream Resort, Diveagar"
              src={links.mapEmbed}
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <ButtonLink href={links.directions} size="lg" className="w-full" icon={<PinIcon className="size-5" />}>
            Get Directions on Google Maps
          </ButtonLink>
          <div className="grid grid-cols-2 gap-3">
            {site.phones.map((p) => (
              <ButtonLink
                key={p}
                href={links.call(p)}
                variant="outline"
                className="w-full !px-3"
                icon={<PhoneIcon className="size-4" />}
              >
                Call {p}
              </ButtonLink>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
