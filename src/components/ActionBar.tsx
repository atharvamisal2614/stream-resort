import { PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/Icons";
import { links } from "@/lib/site";

const item = "flex flex-col items-center justify-center gap-1 py-2 text-[11px] font-medium";

/** Brochure-style quick actions: a bottom bar on phones, a floating WhatsApp button on larger screens. */
export function ActionBar() {
  return (
    <>
      <nav
        aria-label="Quick actions"
        className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-aqua-100 bg-white pb-[env(safe-area-inset-bottom)] md:hidden"
      >
        <a href={links.call()} className={`${item} text-ink`}>
          <PhoneIcon className="size-5 text-aqua-600" /> Call Now
        </a>
        <a
          href={links.whatsapp()}
          target="_blank"
          rel="noopener noreferrer"
          className={`${item} bg-aqua-600 text-white`}
        >
          <WhatsAppIcon className="size-5" /> WhatsApp / Book
        </a>
        <a href={links.map} target="_blank" rel="noopener noreferrer" className={`${item} text-ink`}>
          <PinIcon className="size-5 text-aqua-600" /> Visit Us
        </a>
      </nav>

      <a
        href={links.whatsapp()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed right-6 bottom-6 z-40 hidden size-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lift transition-transform hover:scale-105 md:flex"
      >
        <WhatsAppIcon className="size-7" />
      </a>
    </>
  );
}
