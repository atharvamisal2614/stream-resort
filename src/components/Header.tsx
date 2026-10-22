"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { buttonClass } from "@/components/Button";
import { CloseIcon, MenuIcon, PhoneIcon, WhatsAppIcon } from "@/components/Icons";
import { LogoInline } from "@/components/Logo";
import { formatPhone, links, nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll while the menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // On the home page the header floats transparently over the hero until you scroll.
  const solid = pathname !== "/" || scrolled || open;

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-colors duration-300 ${
          solid ? "bg-white" : "bg-transparent"
        } ${scrolled || open ? "shadow-[0_1px_0_0_var(--color-aqua-100)]" : ""}`}
      >
        <div className="container-site flex h-16 items-center justify-between gap-6 lg:h-20">
          <Link href="/" onClick={() => setOpen(false)} aria-label={`${site.name} – home`} className="shrink-0">
            <LogoInline tone={solid ? "dark" : "light"} />
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-0.5 xl:gap-1">
              {nav.slice(1).map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative block px-2.5 py-2 text-sm font-medium transition-colors xl:px-3 ${
                        solid
                          ? active
                            ? "text-aqua-700"
                            : "text-ink/75 hover:text-aqua-700"
                          : active
                            ? "text-white"
                            : "text-white/80 hover:text-white"
                      }`}
                    >
                      {item.label}
                      <span
                        className={`absolute inset-x-2.5 -bottom-0.5 h-0.5 rounded-full transition-opacity xl:inset-x-3 ${
                          solid ? "bg-aqua-500" : "bg-white"
                        } ${active ? "opacity-100" : "opacity-0"}`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={links.call()}
              className={`hidden items-center gap-2 text-sm font-medium transition-colors xl:inline-flex ${
                solid ? "text-ink/80 hover:text-aqua-700" : "text-white/90 hover:text-white"
              }`}
            >
              <PhoneIcon className="size-4" />
              {formatPhone(site.phones[0])}
            </a>
            <span className="hidden sm:block xl:ml-3">
              <a
                href={links.whatsapp()}
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonClass(solid ? "primary" : "light")} !h-10`}
              >
                <WhatsAppIcon className="size-4" />
                Book Now
              </a>
            </span>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className={`-mr-2 inline-flex size-10 items-center justify-center rounded-full transition-colors lg:hidden ${
                solid ? "text-ink hover:bg-aqua-50" : "text-white hover:bg-white/10"
              }`}
            >
              {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile / tablet menu — kept outside <header> so it can cover the page */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-16 bottom-0 z-[45] overflow-y-auto bg-white transition-opacity duration-200 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="container-site flex min-h-full flex-col py-4">
          <ul className="divide-y divide-aqua-100">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between py-4 text-[17px] font-medium ${
                    isActive(item.href) ? "text-aqua-700" : "text-ink"
                  }`}
                >
                  {item.label}
                  {isActive(item.href) && <span className="size-1.5 rounded-full bg-aqua-500" />}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto grid gap-3 pt-8 pb-4 sm:grid-cols-2">
            <a
              href={links.whatsapp()}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonClass("primary", "lg")} w-full`}
            >
              <WhatsAppIcon className="size-5" /> Book on WhatsApp
            </a>
            <a href={links.call()} className={`${buttonClass("outline", "lg")} w-full`}>
              <PhoneIcon className="size-4" /> Call {site.phones[0]}
            </a>
          </div>
          <p className="pb-4 text-center text-xs text-ink-soft">{site.address.short}</p>
        </nav>
      </div>
    </>
  );
}
