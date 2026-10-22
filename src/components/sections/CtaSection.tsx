import { ButtonLink } from "@/components/Button";
import { Palm } from "@/components/Decor";
import { InstagramIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/Icons";
import { links, site } from "@/lib/site";

export function CtaSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-3xl bg-aqua-700 px-6 py-12 text-center sm:px-10 sm:py-16">
          <Palm className="absolute -bottom-10 -left-6 h-48 text-white/10 sm:h-60" />
          <Palm className="absolute -top-8 -right-6 h-44 -scale-x-100 text-white/10 sm:h-56" />

          <div className="relative">
            <h2 className="mx-auto max-w-lg text-3xl leading-tight !text-white sm:text-4xl">
              Ready for your Konkan getaway?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-white/80">
              Tap a button below – we’ll reply with rates & availability
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href={links.whatsapp()} size="lg" variant="light" icon={<WhatsAppIcon className="size-5" />}>
                Book Now – WhatsApp
              </ButtonLink>
              {site.phones.map((p) => (
                <ButtonLink
                  key={p}
                  href={links.call(p)}
                  size="lg"
                  variant="outlineLight"
                  icon={<PhoneIcon className="size-4" />}
                >
                  Call {p}
                </ButtonLink>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/80">
              <a
                href={links.map}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white"
              >
                <PinIcon className="size-4" /> Visit Us – Map
              </a>
              <a
                href={links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white"
              >
                <InstagramIcon className="size-4" /> Follow on Instagram
              </a>
            </div>
            <p className="mt-6 text-[13px] text-white/60">Stay tuned for offers & updates – @{site.instagramHandle}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
