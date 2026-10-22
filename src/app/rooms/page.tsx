import type { Metadata } from "next";

import { PageHero } from "@/components/Section";
import { AmenitiesSection } from "@/components/sections/AmenitiesSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { RoomsSection } from "@/components/sections/RoomsSection";

export const metadata: Metadata = {
  title: "Rooms & Cottages",
  description:
    "Premium AC cottages, AC rooms in our two-storey block and family & group stays at The Stream Resort, a 100 m walk from Diveagar Beach.",
};

export default function RoomsPage() {
  return (
    <>
      <PageHero eyebrow="Stay with us" title="Rooms & Cottages" />
      <RoomsSection showHeading={false} />
      <AmenitiesSection tint />
      <CtaSection />
    </>
  );
}
