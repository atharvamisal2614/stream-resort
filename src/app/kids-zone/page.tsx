import type { Metadata } from "next";

import { PageHero } from "@/components/Section";
import { CtaSection } from "@/components/sections/CtaSection";
import { KidsSection } from "@/components/sections/KidsSection";

export const metadata: Metadata = {
  title: "Kids Zone & Pool",
  description:
    "Soft green turf, tall spiral slides and a colourful play structure, plus a swimming pool that glows under the Konkan night sky.",
};

export default function KidsZonePage() {
  return (
    <>
      <PageHero eyebrow="Fun for everyone" title="Kids Zone & Pool" />
      <KidsSection showHeading={false} />
      <CtaSection />
    </>
  );
}
