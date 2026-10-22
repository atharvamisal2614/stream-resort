import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/components/Button";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { ArrowIcon } from "@/components/Icons";
import { Section, SectionHeading } from "@/components/Section";
import { AmenitiesSection } from "@/components/sections/AmenitiesSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { DiningSection } from "@/components/sections/DiningSection";
import { ExploreSection } from "@/components/sections/ExploreSection";
import { KidsSection } from "@/components/sections/KidsSection";
import { ReachSection } from "@/components/sections/ReachSection";
import { RoomsSection } from "@/components/sections/RoomsSection";
import { gallery, img } from "@/lib/images";

const tiles = [
  { href: "/rooms", label: "Rooms", photo: img.cottagesRow },
  { href: "/amenities", label: "Amenities", photo: img.poolKidsZone },
  { href: "/dining", label: "Dining", photo: img.aerialResortOverview },
  { href: "/explore", label: "Explore Diveagar", photo: img.aerialBeachCottages },
  { href: "/how-to-reach", label: "How to Reach", photo: img.aerialResortWide },
  { href: "/contact", label: "Contact", photo: img.acBlockFront },
];

const highlights = [
  { value: "100 m", label: "Walk to the beach" },
  { value: "AC", label: "Cottages & rooms" },
  { value: "Pool", label: "Lit up at night" },
  { value: "Kids", label: "Play zone & slides" },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Highlights + tap to explore */}
      <Section>
        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-aqua-100 bg-aqua-100 sm:grid-cols-4">
          {highlights.map((h) => (
            <li key={h.label} className="bg-white px-4 py-5 text-center sm:py-6">
              <p className="font-serif text-2xl text-aqua-700 sm:text-3xl">{h.value}</p>
              <p className="mt-1 text-[13px] text-ink-soft">{h.label}</p>
            </li>
          ))}
        </ul>

        <p className="eyebrow mt-14 text-center">Tap to explore</p>
        <ul className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {tiles.map((t) => (
            <li key={t.href}>
              <Link href={t.href} className="group relative block aspect-[4/3] overflow-hidden rounded-2xl bg-aqua-100">
                <Image
                  src={t.photo.src}
                  alt=""
                  fill
                  placeholder="blur"
                  sizes="(min-width:768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 flex items-center justify-between p-3 text-sm font-medium text-white sm:p-4 sm:text-base">
                  {t.label}
                  <ArrowIcon className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <RoomsSection tint />
      <AmenitiesSection />
      <KidsSection tint />
      <DiningSection />
      <ExploreSection tint />

      <Section id="gallery">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end lg:mb-12">
          <SectionHeading eyebrow="Photo gallery" title="A glimpse of The Stream" />
          <ButtonLink href="/amenities#gallery" variant="outline" icon={<ArrowIcon className="size-4" />}>
            View all photos
          </ButtonLink>
        </div>
        <Gallery photos={gallery} limit={6} />
      </Section>

      <ReachSection tint />
      <CtaSection />
    </>
  );
}
