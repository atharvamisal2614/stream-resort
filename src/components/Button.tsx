import Link from "next/link";
import type { ReactNode } from "react";

// One button system for the whole site: three looks, two sizes.
type Variant = "primary" | "outline" | "light" | "outlineLight";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-aqua-600 text-white hover:bg-aqua-700",
  outline: "border border-aqua-600/40 bg-white text-aqua-700 hover:border-aqua-600 hover:bg-aqua-50",
  light: "bg-white text-aqua-800 hover:bg-aqua-50",
  outlineLight: "border border-white/60 text-white hover:bg-white/10",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[15px]",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: ReactNode;
};

export const buttonClass = (variant: Variant = "primary", size: Size = "md") =>
  `inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-colors duration-200 ${variants[variant]} ${sizes[size]}`;

export function ButtonLink({ href, children, variant = "primary", size = "md", className = "", icon }: Props) {
  const cls = `${buttonClass(variant, size)} ${className}`;
  if (/^(https?:|tel:|mailto:)/.test(href)) {
    const newTab = href.startsWith("http");
    return (
      <a href={href} className={cls} {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {icon}
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {icon}
      {children}
    </Link>
  );
}
