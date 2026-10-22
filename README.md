# The Stream Resort – Diveagar Beach

Front-end website for The Stream Resort, built with Next.js 16 (App Router), TypeScript and Tailwind CSS v4.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Where things live

| What | Where |
| --- | --- |
| Phone numbers, WhatsApp, Instagram, address, map links, nav | `src/lib/site.ts` |
| All brochure copy (rooms, amenities, dining, explore, how to reach) | `src/lib/content.ts` |
| Photos and their alt text, gallery order | `src/assets/images`, `src/lib/images.ts` |
| Logo (vector redraw) | `src/components/Logo.tsx`, favicon in `src/app/icon.svg` |
| Brand colours and fonts | `src/app/globals.css` (`@theme`), fonts in `src/app/layout.tsx` |

Pages: `/`, `/rooms`, `/amenities` (with photo gallery), `/kids-zone`, `/dining`, `/explore`, `/how-to-reach`, `/contact`.

Booking works through WhatsApp: every "Book" button opens a chat with
`site.whatsapp` and a pre-filled message. Set `NEXT_PUBLIC_SITE_URL` to the live domain when deploying.
