// Central place for every contact detail and link used across the site.
// Update numbers / handles here and they change everywhere.

export const site = {
  name: "The Stream Resort",
  location: "Diveagar Beach",
  tagline: "Where kids play, laugh & explore",
  // Set NEXT_PUBLIC_SITE_URL to the live domain when deploying.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "The Stream Resort, Diveagar Beach – laterite-stone AC cottages, a swimming pool and kids’ play zone, just a 100 m walk from the beach in Konkan, Raigad.",
  phones: ["7066111121", "9700999222"] as const,
  whatsapp: "917066111121",
  instagramHandle: "thestreamresortdiveagar",
  address: {
    line1: "Survey No. 402, Hanuman Pakhadi,",
    line2: "Diveagar 402 404, Dist. Raigad",
    region: "Maharashtra",
    short: "Survey No. 402, Hanuman Pakhadi, Diveagar 402 404, Dist. Raigad",
  },
} as const;

export const links = {
  call: (phone: string = site.phones[0]) => `tel:+91${phone}`,
  whatsapp: (message = "Hi! I’d like to know the rates & availability at The Stream Resort, Diveagar.") =>
    `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`,
  instagram: `https://www.instagram.com/${site.instagramHandle}/`,
  map:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("The Stream Resort, Hanuman Pakhadi, Diveagar, Raigad"),
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent("The Stream Resort, Hanuman Pakhadi, Diveagar, Raigad"),
  mapEmbed:
    "https://www.google.com/maps?q=" +
    encodeURIComponent("The Stream Resort, Diveagar, Raigad, Maharashtra") +
    "&output=embed",
  placeSearch: (query: string) => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(query),
};

export const formatPhone = (phone: string) => `${phone.slice(0, 5)} ${phone.slice(5)}`;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms" },
  { href: "/amenities", label: "Amenities" },
  { href: "/kids-zone", label: "Kids & Pool" },
  { href: "/dining", label: "Dining" },
  { href: "/explore", label: "Explore" },
  { href: "/how-to-reach", label: "How to Reach" },
  { href: "/contact", label: "Contact" },
] as const;
