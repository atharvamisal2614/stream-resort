import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps): IconProps => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  ...props,
});

export const PoolIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M8 4v9M8 6h6M14 4v9M2 15c2 0 2 1.5 4 1.5S8 15 10 15s2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 4 1.5M2 19c2 0 2 1.5 4 1.5S8 19 10 19s2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 4 1.5" />
  </svg>
);

export const SlideIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 21V5a2 2 0 0 1 2-2h1c2 0 3 2 4 5l4 9c.6 1.4 1.6 2 3 2" />
    <path d="M6 13h3M6 9h3" />
  </svg>
);

export const AcIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="2.5" y="4" width="19" height="7" rx="1.5" />
    <path d="M6 8.5h12M8 14l-1 4M12 14v4M16 14l1 4" />
  </svg>
);

export const DiningIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M7 3v8M5 3v5a2 2 0 0 0 4 0V3M7 11v10M17 21V3c-2 1-3 4-3 8h3" />
  </svg>
);

export const GardenIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="7" r="3.5" />
    <circle cx="7.5" cy="13" r="3.5" />
    <circle cx="16.5" cy="13" r="3.5" />
    <path d="M12 10.5V21M12 16l-2.5-1.5M12 16l2.5-1.5" />
  </svg>
);

export const BeachIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="6" r="3" />
    <path d="M2 14c2 0 2 1.5 4 1.5S8 14 10 14s2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 4 1.5M2 19c2 0 2 1.5 4 1.5S8 19 10 19s2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 4 1.5" />
  </svg>
);

export const HeartIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 20s-7.5-4.6-9.2-9.4C1.7 7.4 3.8 4 7.2 4c2 0 3.5 1.1 4.8 2.9C13.3 5.1 14.8 4 16.8 4c3.4 0 5.5 3.4 4.4 6.6C19.5 15.4 12 20 12 20Z" />
  </svg>
);

export const StarIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m12 3 2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8l-5.4 2.9 1.1-6.1-4.5-4.2 6.1-.8Z" />
  </svg>
);

export const PhoneIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 3h3l2 5-2.5 1.5a11 11 0 0 0 7 7L16 14l5 2v3a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2Z" />
  </svg>
);

export const PinIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

export const ArrowIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const CarIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 16v-4l2-5a2 2 0 0 1 2-1.3h10A2 2 0 0 1 19 7l2 5v4M3 16h18v2.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V16M7 16v2.5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1M3 12h18" />
    <circle cx="7" cy="14" r=".5" fill="currentColor" />
    <circle cx="17" cy="14" r=".5" fill="currentColor" />
  </svg>
);

export const TrainIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="5" y="3" width="14" height="14" rx="3" />
    <path d="M5 11h14M9 21l1.5-4M15 21l-1.5-4M9 14h.01M15 14h.01" />
  </svg>
);

export const TownIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 21h18M5 21V10l5-3v14M10 21V4l9 4v13M13 11h3M13 14h3M13 17h3" />
  </svg>
);

export const CheckIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);

export const MenuIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const ChevronIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m9 6 6 6-6 6" />
  </svg>
);

export const BowlIcon = (p: IconProps) => (
  <svg {...base(p)} strokeWidth={1.4}>
    <path d="M3 14h18a9 6 0 0 1-18 0ZM12 14 6 7M12 14l-2-8M12 14l2-8M12 14l6-7M12 14V5" />
  </svg>
);

export const WhatsAppIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.1 5.1 0 0 0 1.1 2.7 11.6 11.6 0 0 0 4.4 3.9c1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
  </svg>
);

export const InstagramIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r=".6" fill="currentColor" />
  </svg>
);
