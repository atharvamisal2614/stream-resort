import { ButtonLink } from "@/components/Button";
import { CheckIcon, PhoneIcon, WhatsAppIcon } from "@/components/Icons";
import { PhotoFrame, Section, SectionHeading } from "@/components/Section";
import { rooms } from "@/lib/content";
import { img } from "@/lib/images";
import { links, site } from "@/lib/site";

export function RoomsSection({ showHeading = true, tint = false }: { showHeading?: boolean; tint?: boolean }) {
  return (
    <Section id="rooms" tint={tint}>
      {showHeading && <SectionHeading eyebrow="Stay with us" title="Rooms & Cottages" className="mb-10 lg:mb-12" />}

      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:sticky lg:top-28">
          <PhotoFrame photo={img.cottagesRow} sizes="(min-width:1024px) 540px, 100vw" className="col-span-2" />
          <PhotoFrame photo={img.cottageNight} sizes="(min-width:1024px) 260px, 50vw" />
          <PhotoFrame photo={img.roomInterior} sizes="(min-width:1024px) 260px, 50vw" />
        </div>

        <div>
          <p className="text-ink-soft sm:text-[17px]">{rooms.intro}</p>

          <ul className="mt-6 divide-y divide-aqua-100 border-y border-aqua-100">
            {rooms.categories.map((c) => (
              <li key={c.title} className="py-5">
                <h3 className="font-sans text-[17px] font-semibold">{c.title}</h3>
                <p className="mt-1 text-[15px] text-ink-soft">{c.text}</p>
              </li>
            ))}
          </ul>

          <p className="eyebrow mt-8">Room guide</p>
          <ul className="mt-4 grid gap-x-6 gap-y-4 sm:grid-cols-2">
            {rooms.guide.map((g) => (
              <li key={g.title} className="flex gap-3">
                <CheckIcon className="mt-0.5 size-5 shrink-0 text-aqua-600" />
                <span>
                  <span className="block text-[15px] font-medium">{g.title}</span>
                  <span className="block text-sm text-ink-soft">{g.text}</span>
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-sm text-ink-soft italic">{rooms.note}</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              href={links.whatsapp("Hi! Please share room categories, rates & availability at The Stream Resort.")}
              size="lg"
              icon={<WhatsAppIcon className="size-5" />}
            >
              Check Availability
            </ButtonLink>
            <ButtonLink href={links.call()} size="lg" variant="outline" icon={<PhoneIcon className="size-4" />}>
              Call to Book {site.phones[0]}
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
