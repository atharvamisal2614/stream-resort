// All copy below is taken from The Stream Resort brochure.

export const rooms = {
  intro: "Laterite-stone cottages set in a lush garden, designed for slow Konkan mornings and starlit evenings.",
  categories: [
    {
      title: "Premium Cottages",
      text: "Spacious, neat & clean air-conditioned cottages with warm lighting, large windows and garden views.",
    },
    {
      title: "AC Rooms (two-storey block)",
      text: "Comfortable AC rooms with a balcony walkway, close to the pool & lawns.",
    },
    {
      title: "Family & Group Stays",
      text: "Ideal for groups, with the kids’ play area just outside.",
    },
  ],
  guide: [
    { title: "Air-conditioned rooms", text: "Cool, comfortable stay" },
    { title: "Clean linen & neat rooms", text: "Guests love the cleanliness" },
    { title: "Garden & pool views", text: "Palms, greenery & lawns" },
    { title: "Beach in 100 m", text: "Easy walk to the shore" },
  ],
  note: "Room categories, rates & availability are shared on request.",
};

export const amenities = [
  { icon: "pool", title: "Swimming Pool", text: "Lit up beautifully at night" },
  { icon: "slide", title: "Kids’ Play Area", text: "Giant slides & play zone" },
  { icon: "ac", title: "AC Cottages", text: "Cool & comfortable" },
  { icon: "dining", title: "Restaurant", text: "Delicious, fresh meals" },
  { icon: "garden", title: "Gardens & Lawns", text: "Palms & green surroundings" },
  { icon: "beach", title: "Beach Nearby", text: "Just a 100 m walk" },
  { icon: "heart", title: "Warm Service", text: "Friendly, attentive team" },
  { icon: "star", title: "Clean & Neat", text: "Rooms guests rave about" },
] as const;

export const kids = {
  eyebrow: "Where kids play",
  title: "A play zone made for little explorers",
  text: "Soft green turf, tall spiral slides and a colourful play structure, all within the resort so parents can relax while kids play, laugh and explore.",
  pool: {
    title: "Swimming Pool",
    text: "Take a refreshing dip by day, or enjoy the pool glowing under the Konkan night sky.",
    points: ["Splash with the family", "Evening poolside walks", "Right beside the cottages"],
  },
};

export const dining = {
  title: "In-house Restaurant",
  text: "Freshly prepared meals served at the resort – guests often tell us how delicious the food is, and how warm our team is. Start your day with breakfast, end it with a dinner under the palms.",
  points: [
    "Fresh, home-style cooking",
    "Meal plans available on request",
    "Special arrangements for groups & families",
  ],
  flavoursTitle: "Flavours to try on your Konkan trip",
  flavours: [
    { title: "Modak", text: "Steamed sweet dumplings" },
    { title: "Sol Kadhi", text: "Kokum & coconut cooler" },
    { title: "Fish Thali", text: "Fresh coastal catch" },
    { title: "Kokum Sharbat", text: "Cool & tangy" },
  ],
  note: "Ask our team about menus, meal plans and special requests.",
};

export const explore = {
  intro:
    "Diveagar is a peaceful Konkan seaside village known for pristine beaches, swaying palms and rich cultural heritage.",
  places: [
    {
      distance: "100 m",
      unit: "walk",
      title: "Diveagar Beach",
      text: "Clean, quiet shoreline – sunsets, walks & beach games",
      query: "Diveagar Beach, Raigad",
    },
    {
      distance: "3 km",
      unit: "away",
      title: "Suvarna Ganesh Temple",
      text: "Famed Konkan temple with a golden Ganesh idol",
      query: "Suvarna Ganesh Temple, Diveagar",
    },
    {
      distance: "12 km",
      unit: "away",
      title: "Shrivardhan Beach",
      text: "Peshwa heritage town & beautiful beach",
      query: "Shrivardhan Beach, Raigad",
    },
    {
      distance: "28 km",
      unit: "away",
      title: "Harihareshwar",
      text: "Ancient temple on the coast, the “Dakshin Kashi”",
      query: "Harihareshwar Temple, Raigad",
    },
    {
      distance: "55 km",
      unit: "away",
      title: "Murud-Janjira Fort",
      text: "Majestic sea fort, a Konkan icon",
      query: "Murud-Janjira Fort",
    },
  ],
  note: "Water sports, dolphin & boat rides and local markets are also popular in the area – ask our team for local tips.",
};

export const reach = {
  routes: [
    { icon: "car", title: "From Mumbai", text: "~170 km · 4–5 hrs (via Mangaon–Mhasla)" },
    { icon: "car", title: "From Pune", text: "~170 km · 4–5 hrs (via Tamhini / Mangaon)" },
    { icon: "train", title: "Nearest railway", text: "Mangaon (Konkan Railway), ~55 km" },
    { icon: "town", title: "Nearest town", text: "Shrivardhan, ~12 km" },
  ],
  note: "Travel times vary with traffic & season. Approximate figures.",
};
