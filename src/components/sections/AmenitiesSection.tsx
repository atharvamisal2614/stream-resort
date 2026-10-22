import type { ComponentType, SVGProps } from "react";

import {
  AcIcon,
  BeachIcon,
  DiningIcon,
  GardenIcon,
  HeartIcon,
  PoolIcon,
  SlideIcon,
  StarIcon,
} from "@/components/Icons";
import { Section, SectionHeading } from "@/components/Section";
import { amenities } from "@/lib/content";

const icons: Record<(typeof amenities)[number]["icon"], ComponentType<SVGProps<SVGSVGElement>>> = {
  pool: PoolIcon,
  slide: SlideIcon,
  ac: AcIcon,
  dining: DiningIcon,
  garden: GardenIcon,
  beach: BeachIcon,
  heart: HeartIcon,
  star: StarIcon,
};

export function AmenitiesSection({ showHeading = true, tint = false }: { showHeading?: boolean; tint?: boolean }) {
  return (
    <Section id="amenities" tint={tint}>
      {showHeading && (
        <SectionHeading eyebrow="Everything you need" title="Amenities" align="center" className="mb-10 lg:mb-12" />
      )}
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        {amenities.map((a) => {
          const Icon = icons[a.icon];
          return (
            <li key={a.title} className="rounded-2xl border border-aqua-100 bg-white p-5 text-center sm:p-6">
              <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-aqua-50 text-aqua-600">
                <Icon className="size-6" />
              </span>
              <h3 className="mt-4 font-sans text-[15px] font-semibold">{a.title}</h3>
              <p className="mt-1 text-[13px] text-ink-soft sm:text-sm">{a.text}</p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
