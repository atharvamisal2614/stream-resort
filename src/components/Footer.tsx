import Link from "next/link";

import { Waves } from "@/components/Decor";
import { InstagramIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/Icons";
import { LogoFull } from "@/components/Logo";
import { links, nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-auto bg-aqua-50">
      <Waves className="h-12 text-aqua-600 sm:h-20" />
      <div className="bg-aqua-600 pb-24 text-white md:pb-10">
        <div className="container-site grid gap-10 pt-6 pb-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <LogoFull tone="light" className="h-auto w-56" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/80">
              Laterite-stone cottages set in a lush garden, just a 100 m walk from Diveagar Beach.
            </p>
          </div>

          <div>
            <h2 className="eyebrow !text-white/70">Address</h2>
            <a
              href={links.map}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex gap-3 text-sm leading-relaxed text-white/90 hover:text-white"
            >
              <PinIcon className="mt-0.5 size-5 shrink-0" />
              <span>
                {site.address.line1}
                <br />
                {site.address.line2}
              </span>
            </a>
          </div>

          <div>
            <h2 className="eyebrow !text-white/70">Call</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {site.phones.map((p) => (
                <li key={p}>
                  <a href={links.call(p)} className="flex items-center gap-3 text-white/90 hover:text-white">
                    <PhoneIcon className="size-4" /> {p}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={links.whatsapp()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/90 hover:text-white"
                >
                  <WhatsAppIcon className="size-4" /> WhatsApp us
                </a>
              </li>
              <li>
                <a
                  href={links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/90 hover:text-white"
                >
                  <InstagramIcon className="size-4" /> @{site.instagramHandle}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="eyebrow !text-white/70">Explore</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm lg:grid-cols-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/90 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="container-site flex flex-col items-center justify-between gap-2 border-t border-white/15 pt-6 text-center text-xs text-white/75 sm:flex-row sm:text-left">
          <p>Thank you for choosing The Stream Resort · Diveagar Beach</p>
          <p>© {site.name}, Diveagar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
