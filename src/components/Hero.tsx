import { getImageProps } from "next/image";

import { ButtonLink } from "@/components/Button";
import { InstagramIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/Icons";
import { img } from "@/lib/images";
import { links, site } from "@/lib/site";

export function Hero() {
  // Art direction: wide shot on tablets/desktops, tall sea-view shot on phones.
  const common = { alt: img.poolKidsZone.alt, sizes: "100vw", fetchPriority: "high" as const };
  const {
    props: { srcSet: desktop },
  } = getImageProps({ ...common, src: img.poolKidsZone.src });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({ ...common, src: img.seaViewPool.src });

  return (
    <section className="relative isolate -mt-16 flex min-h-[100svh] items-end overflow-hidden bg-aqua-900 md:min-h-[86vh] lg:-mt-20">
      <picture>
        <source media="(min-width: 768px)" srcSet={desktop} />
        <source media="(max-width: 767px)" srcSet={mobile} />
        {/* eslint-disable-next-line jsx-a11y/alt-text -- alt comes from getImageProps */}
        <img {...rest} className="absolute inset-0 -z-20 h-full w-full object-cover" />
      </picture>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-black/35 to-black/30 md:bg-gradient-to-r md:from-black/70 md:via-black/40 md:to-black/10" />

      <div className="container-site pt-28 pb-24 md:pb-28">
        <div className="max-w-xl text-white">
          <p className="eyebrow !text-aqua-200">Diveagar Beach · Konkan · Raigad</p>
          <h1 className="mt-4 text-[2.5rem] leading-[1.08] font-normal !text-white italic sm:text-[3.25rem] lg:text-6xl">
            Where kids play, laugh &amp; explore
          </h1>
          <p className="mt-4 text-base text-white/85 sm:text-lg">Just a 100 m walk from the beach</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={links.whatsapp()} size="lg" variant="light" icon={<WhatsAppIcon className="size-5" />}>
              Book Your Stay – WhatsApp us
            </ButtonLink>
            <ButtonLink href={links.call()} size="lg" variant="outlineLight" icon={<PhoneIcon className="size-4" />}>
              Call {site.phones[0]}
            </ButtonLink>
          </div>

          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/80">
            <li>
              <a href={links.call(site.phones[1])} className="inline-flex items-center gap-1.5 hover:text-white">
                <PhoneIcon className="size-4" /> Call {site.phones[1]}
              </a>
            </li>
            <li>
              <a
                href={links.map}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white"
              >
                <PinIcon className="size-4" /> Visit Us – Open Map
              </a>
            </li>
            <li>
              <a
                href={links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white"
              >
                <InstagramIcon className="size-4" /> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
