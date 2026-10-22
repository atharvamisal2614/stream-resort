import type { Metadata } from "next";

import { PageHero } from "@/components/Section";
import { CtaSection } from "@/components/sections/CtaSection";
import { ExploreSection } from "@/components/sections/ExploreSection";

export const metadata: Metadata = {
  title: "Explore Diveagar",
  description:
    "Diveagar Beach, Suvarna Ganesh Temple, Shrivardhan, Harihareshwar and Murud-Janjira Fort – places to explore near The Stream Resort.",
};

export default function ExplorePage() {
  return (
    <>
      <PageHero eyebrow="Around the resort" title="Explore Diveagar" />
      <ExploreSection showHeading={false} />
      <CtaSection />
    </>
  );
}
