import { ButtonLink } from "@/components/Button";
import { WhatsAppIcon } from "@/components/Icons";
import { Bullet, PhotoFrame, Section, SectionHeading } from "@/components/Section";
import { kids } from "@/lib/content";
import { img } from "@/lib/images";
import { links } from "@/lib/site";

export function KidsSection({ showHeading = true, tint = false }: { showHeading?: boolean; tint?: boolean }) {
  return (
    <Section id="kids-zone" tint={tint}>
      {showHeading && <SectionHeading eyebrow="Fun for everyone" title="Kids Zone & Pool" className="mb-10 lg:mb-12" />}

      {/* Kids play zone */}
      <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-14">
        <PhotoFrame photo={img.kidsPlayStructure} sizes="(min-width:768px) 50vw, 100vw" position="50% 70%">
          <span className="absolute top-4 left-4 rounded-full bg-white px-3.5 py-1.5 text-[11px] font-medium tracking-[0.14em] text-aqua-700 uppercase">
            {kids.eyebrow}
          </span>
        </PhotoFrame>
        <div>
          <h3 className="text-2xl leading-snug sm:text-[1.75rem]">{kids.title}</h3>
          <p className="mt-4 text-ink-soft">{kids.text}</p>
        </div>
      </div>

      {/* Swimming pool */}
      <div className="mt-12 grid items-center gap-8 md:grid-cols-2 lg:mt-16 lg:gap-14">
        <PhotoFrame
          photo={img.poolPalmsBlock}
          sizes="(min-width:768px) 50vw, 100vw"
          position="50% 78%"
          className="md:order-2"
        />
        <div>
          <h3 className="text-2xl sm:text-[1.75rem]">{kids.pool.title}</h3>
          <p className="mt-4 text-ink-soft">{kids.pool.text}</p>
          <ul className="mt-5 space-y-2.5">
            {kids.pool.points.map((p) => (
              <Bullet key={p}>{p}</Bullet>
            ))}
          </ul>
          <ButtonLink
            href={links.whatsapp(
              "Hi! We’re planning a family trip to The Stream Resort. Please share rates & availability.",
            )}
            size="lg"
            className="mt-7 w-full sm:w-auto"
            icon={<WhatsAppIcon className="size-5" />}
          >
            Plan a Family Trip
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
