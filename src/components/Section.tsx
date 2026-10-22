import Image from "next/image";
import type { ReactNode } from "react";

import { Palm } from "@/components/Decor";
import type { Photo } from "@/lib/images";

/** Every content section uses the same spacing; `tint` alternates the soft aqua background. */
export function Section({
  id,
  tint = false,
  className = "",
  children,
}: {
  id?: string;
  tint?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 py-16 sm:py-20 lg:py-24 ${tint ? "bg-aqua-50" : "bg-white"} ${className}`}
    >
      <div className="container-site">{children}</div>
    </section>
  );
}

/** Section heading in the brochure style: eyebrow, serif title, short aqua underline. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  const center = align === "center";
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-2xl ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">{title}</h2>
      <span className={`mt-4 block h-0.5 w-10 rounded-full bg-aqua-400 ${center ? "mx-auto" : ""}`} />
      {intro && <p className="mt-5 text-ink-soft">{intro}</p>}
    </div>
  );
}

/**
 * The one way photos are shown on the site: same 4:3 frame, same corner radius,
 * cropped to fill — so portrait and landscape shots line up cleanly.
 */
export function PhotoFrame({
  photo,
  sizes,
  position = "center",
  className = "",
  children,
}: {
  photo: Photo;
  sizes: string;
  position?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-aqua-100 ${className}`}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        placeholder="blur"
        sizes={sizes}
        className="object-cover"
        style={{ objectPosition: position }}
      />
      {children}
    </div>
  );
}

/** Top banner for inner pages — mirrors the brochure page headers. */
export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-aqua-100">
      <Palm className="absolute -top-4 -right-6 h-44 text-aqua-600/80 sm:right-6 sm:h-56 lg:right-16 lg:h-64" />
      <div className="container-site relative py-12 sm:py-16 lg:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-[75%] text-4xl leading-tight sm:text-5xl">{title}</h1>
        <span className="mt-5 block h-0.5 w-10 rounded-full bg-aqua-400" />
        {intro && <p className="mt-5 max-w-xl text-ink-soft">{intro}</p>}
      </div>
    </section>
  );
}

export function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-[9px] size-1.5 shrink-0 rounded-full bg-aqua-500" />
      <span className="text-ink">{children}</span>
    </li>
  );
}
