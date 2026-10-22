import type { Metadata } from "next";

import { PageHero } from "@/components/Section";
import { CtaSection } from "@/components/sections/CtaSection";
import { ReachSection } from "@/components/sections/ReachSection";

export const metadata: Metadata = {
  title: "How to Reach",
  description:
    "Getting to The Stream Resort, Diveagar: ~170 km from Mumbai and Pune (4–5 hrs by road), nearest railway Mangaon, nearest town Shrivardhan.",
};

export default function HowToReachPage() {
  return (
    <>
      <PageHero eyebrow="Plan your journey" title="How to Reach" />
      <ReachSection showHeading={false} />
      <CtaSection />
    </>
  );
}
