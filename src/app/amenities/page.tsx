import type { Metadata } from "next";

import { Gallery } from "@/components/Gallery";
import { PageHero, SectionHeading } from "@/components/Section";
import { AmenitiesSection } from "@/components/sections/AmenitiesSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { gallery } from "@/lib/images";

export const metadata: Metadata = {
  title: "Amenities & Photo Gallery",
  description:
    "Swimming pool, kids’ play area, AC cottages, restaurant, gardens & lawns and the beach just a 100 m walk away – see the photo gallery.",
};

export default function AmenitiesPage() {
  return (
    <>
      <PageHero eyebrow="Everything you need" title="Amenities" />
      <AmenitiesSection showHeading={false} />
      <section id="gallery" className="scroll-mt-20 bg-aqua-50 py-16 sm:py-20 lg:py-24">
        <div className="container-site">
          <SectionHeading eyebrow="See the resort" title="Photo gallery" className="mb-10" />
          <Gallery photos={gallery} />
        </div>
      </section>
      <CtaSection />
    </>
  );
}
