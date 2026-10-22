import { ButtonLink } from "@/components/Button";
import { PhoneIcon, WhatsAppIcon } from "@/components/Icons";
import { Bullet, PhotoFrame, Section, SectionHeading } from "@/components/Section";
import { dining } from "@/lib/content";
import { img } from "@/lib/images";
import { links, site } from "@/lib/site";

export function DiningSection({ showHeading = true, tint = false }: { showHeading?: boolean; tint?: boolean }) {
  return (
    <Section id="dining" tint={tint}>
      {showHeading && <SectionHeading eyebrow="Taste of Konkan" title="Dining" className="mb-10 lg:mb-12" />}

      <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-14">
        <PhotoFrame
          photo={{ src: img.seaViewResort.src, alt: "Dinner under the palms at The Stream Resort" }}
          sizes="(min-width:768px) 50vw, 100vw"
          position="50% 60%"
        />
        <div>
          <h3 className="text-2xl sm:text-[1.75rem]">{dining.title}</h3>
          <p className="mt-4 text-ink-soft">{dining.text}</p>
          <ul className="mt-5 space-y-2.5">
            {dining.points.map((p) => (
              <Bullet key={p}>{p}</Bullet>
            ))}
          </ul>
        </div>
      </div>

      <h3 className="mt-14 text-xl sm:text-2xl">{dining.flavoursTitle}</h3>
      <ul className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        {dining.flavours.map((f) => (
          <li key={f.title} className="rounded-2xl border border-aqua-100 bg-white p-5">
            <span className="block font-serif text-lg">{f.title}</span>
            <span className="mt-1 block text-sm text-ink-soft">{f.text}</span>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-col gap-4 rounded-2xl bg-aqua-50 p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
        <p className="text-[15px] text-ink-soft">{dining.note}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink
            href={links.whatsapp("Hi! I’d like to know about menus and meal plans at The Stream Resort.")}
            icon={<WhatsAppIcon className="size-4" />}
          >
            Enquire About Meals
          </ButtonLink>
          <ButtonLink href={links.call(site.phones[1])} variant="outline" icon={<PhoneIcon className="size-4" />}>
            Call {site.phones[1]}
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
