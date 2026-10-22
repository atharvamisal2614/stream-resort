import { ButtonLink } from "@/components/Button";
import { Palm } from "@/components/Decor";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-aqua-100 py-28 text-center sm:py-36">
      <Palm className="absolute -bottom-6 left-4 h-56 text-aqua-600/70" />
      <Palm className="absolute top-4 right-4 h-48 -scale-x-100 text-aqua-600/70" />
      <div className="container-site relative">
        <p className="eyebrow">Page not found</p>
        <h1 className="mt-3 text-4xl sm:text-5xl">Lost on the beach?</h1>
        <p className="mx-auto mt-4 max-w-md text-ink-soft">This page has drifted away with the tide.</p>
        <ButtonLink href="/" size="lg" className="mt-8">
          Back to home
        </ButtonLink>
      </div>
    </section>
  );
}
