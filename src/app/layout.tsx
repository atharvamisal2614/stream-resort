import type { Metadata, Viewport } from "next";
import { Cinzel, Lora, Poppins } from "next/font/google";

import { ActionBar } from "@/components/ActionBar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { links, site } from "@/lib/site";
import "./globals.css";

const lora = Lora({ variable: "--font-lora", subsets: ["latin"], style: ["normal", "italic"] });
const poppins = Poppins({ variable: "--font-poppins", subsets: ["latin"], weight: ["300", "400", "500", "600"] });
const cinzel = Cinzel({ variable: "--font-cinzel", subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "The Stream Resort, Diveagar Beach | AC Cottages, Pool & Kids Zone",
    template: "%s | The Stream Resort, Diveagar",
  },
  description: site.description,
  keywords: [
    "Diveagar resort",
    "resort in Diveagar",
    "Diveagar beach stay",
    "Konkan resort",
    "Raigad resort",
    "family resort with pool",
    "The Stream Resort",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "The Stream Resort, Diveagar Beach",
    description: site.description,
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  themeColor: "#1e8e9e",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Resort",
  name: site.name,
  description: site.description,
  telephone: site.phones.map((p) => `+91 ${p}`),
  url: site.url,
  sameAs: [links.instagram],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Survey No. 402, Hanuman Pakhadi",
    addressLocality: "Diveagar",
    addressRegion: "Maharashtra",
    postalCode: "402404",
    addressCountry: "IN",
  },
  amenityFeature: ["Swimming Pool", "Kids’ Play Area", "AC Cottages", "Restaurant", "Gardens & Lawns"].map((name) => ({
    "@type": "LocationFeatureSpecification",
    name,
    value: true,
  })),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${lora.variable} ${poppins.variable} ${cinzel.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only z-[70] rounded-full bg-aqua-600 px-4 py-2 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <ActionBar />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
