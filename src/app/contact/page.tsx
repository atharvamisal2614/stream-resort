import type { Metadata } from "next";
import type { ReactNode } from "react";

import { ButtonLink } from "@/components/Button";
import { InstagramIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/Icons";
import { PageHero, Section } from "@/components/Section";
import { links, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Booking",
  description:
    "Book your stay at The Stream Resort, Diveagar. WhatsApp us or call 7066111121 / 9700999222 – we’ll reply with rates & availability.",
};

const steps = [
  { title: "WhatsApp or call us", text: `Message us on WhatsApp or call ${site.phones[0]} / ${site.phones[1]}.` },
  { title: "Share your plan", text: "Tell us your dates, number of guests and the stay you prefer." },
  { title: "Get rates & availability", text: "We’ll reply with rates & availability for your dates." },
];

function ContactRow({
  href,
  icon,
  label,
  children,
}: {
  href: string;
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <li>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="flex items-center gap-4 py-4 transition-colors hover:text-aqua-700"
      >
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-aqua-50 text-aqua-600">
          {icon}
        </span>
        <span>
          <span className="block text-xs text-ink-soft">{label}</span>
          <span className="block text-[15px] font-medium">{children}</span>
        </span>
      </a>
    </li>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Ready for your Konkan getaway?"
        intro="Tap a button below – we’ll reply with rates & availability"
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-14">
          <div>
            <h2 className="text-2xl">Get in touch</h2>
            <ul className="mt-4 divide-y divide-aqua-100 border-y border-aqua-100">
              <ContactRow href={links.whatsapp()} icon={<WhatsAppIcon className="size-5" />} label="Book Now">
                WhatsApp {site.phones[0]}
              </ContactRow>
              {site.phones.map((p) => (
                <ContactRow key={p} href={links.call(p)} icon={<PhoneIcon className="size-5" />} label="Call">
                  {p}
                </ContactRow>
              ))}
              <ContactRow href={links.map} icon={<PinIcon className="size-5" />} label="Visit Us – Map">
                <span className="font-normal">{site.address.short}</span>
              </ContactRow>
              <ContactRow
                href={links.instagram}
                icon={<InstagramIcon className="size-5" />}
                label="Follow on Instagram"
              >
                @{site.instagramHandle}
              </ContactRow>
            </ul>
            <p className="mt-4 text-sm text-ink-soft">Stay tuned for offers & updates on Instagram.</p>
          </div>

          <div id="book" className="scroll-mt-24 rounded-2xl bg-aqua-50 p-6 sm:p-8">
            <p className="eyebrow">How to book</p>
            <h2 className="mt-2 text-2xl sm:text-3xl">Book Your Stay</h2>
            <p className="mt-2 text-[15px] text-ink-soft">
              Room categories, rates & availability are shared on request.
            </p>

            <ol className="mt-8 space-y-6">
              {steps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-aqua-600 text-sm font-semibold text-white">
                    {i + 1}
                  </span>
                  <span>
                    <span className="block font-medium">{step.title}</span>
                    <span className="mt-0.5 block text-sm text-ink-soft">{step.text}</span>
                  </span>
                </li>
              ))}
            </ol>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <ButtonLink
                href={links.whatsapp()}
                size="lg"
                className="w-full sm:col-span-2"
                icon={<WhatsAppIcon className="size-5" />}
              >
                Book Now – WhatsApp
              </ButtonLink>
              {site.phones.map((p) => (
                <ButtonLink
                  key={p}
                  href={links.call(p)}
                  size="lg"
                  variant="outline"
                  className="w-full"
                  icon={<PhoneIcon className="size-4" />}
                >
                  Call {p}
                </ButtonLink>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mt-12 aspect-[4/3] overflow-hidden rounded-2xl border border-aqua-100 bg-aqua-100 sm:aspect-[21/9]">
          <iframe
            title="Map showing The Stream Resort, Diveagar"
            src={links.mapEmbed}
            className="absolute inset-0 h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Section>
    </>
  );
}
