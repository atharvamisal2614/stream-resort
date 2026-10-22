import { ArrowIcon } from "@/components/Icons";
import { PhotoFrame, Section, SectionHeading } from "@/components/Section";
import { explore } from "@/lib/content";
import { img } from "@/lib/images";
import { links } from "@/lib/site";

export function ExploreSection({ showHeading = true, tint = false }: { showHeading?: boolean; tint?: boolean }) {
  return (
    <Section id="explore" tint={tint}>
      <div className="grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-14">
        <div>
          {showHeading && <SectionHeading eyebrow="Around the resort" title="Explore Diveagar" className="mb-6" />}
          <p className="text-ink-soft">{explore.intro} (Distances approx.)</p>
          <PhotoFrame
            photo={img.aerialBeachResort}
            sizes="(min-width:1024px) 440px, 100vw"
            position="50% 25%"
            className="mt-6"
          />
          <p className="mt-6 hidden text-sm text-ink-soft lg:block">{explore.note}</p>
        </div>

        <div>
          <ol className="divide-y divide-aqua-100 rounded-2xl border border-aqua-100 bg-white">
            {explore.places.map((p) => (
              <li key={p.title} className="flex items-center gap-4 p-4 sm:gap-5 sm:p-5">
                <span className="flex w-16 shrink-0 flex-col items-center sm:w-20">
                  <span className="text-lg leading-none font-semibold text-aqua-700 sm:text-xl">{p.distance}</span>
                  <span className="mt-1 text-[11px] text-ink-soft">{p.unit}</span>
                </span>
                <span className="min-w-0 flex-1 border-l border-aqua-100 pl-4 sm:pl-5">
                  <span className="block font-serif text-lg leading-snug">{p.title}</span>
                  <span className="mt-0.5 block text-sm text-ink-soft">{p.text}</span>
                  <a
                    href={links.placeSearch(p.query)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 inline-flex items-center gap-1 text-[13px] font-medium text-aqua-700 hover:text-aqua-900"
                  >
                    Open in Maps <ArrowIcon className="size-3.5" />
                  </a>
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm text-ink-soft lg:hidden">{explore.note}</p>
        </div>
      </div>
    </Section>
  );
}
