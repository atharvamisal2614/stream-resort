import type { Metadata } from "next";

import { PageHero } from "@/components/Section";
import { CtaSection } from "@/components/sections/CtaSection";
import { DiningSection } from "@/components/sections/DiningSection";

export const metadata: Metadata = {
  title: "Dining",
  description:
    "Freshly prepared, home-style meals at our in-house restaurant. Meal plans on request and Konkan flavours like Modak, Sol Kadhi, Fish Thali and Kokum Sharbat.",
};

export default function DiningPage() {
  return (
    <>
      <PageHero eyebrow="Taste of Konkan" title="Dining" />
      <DiningSection showHeading={false} />
      <CtaSection />
    </>
  );
}
