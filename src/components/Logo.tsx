// Vector redraw of The Stream Resort logo: a layered waterfall over rocks,
// flowing into a stream that runs beneath the wordmark, with gulls overhead.

type Tone = "dark" | "light";

const AQUA = "#3bbfce";

function Falls({ ink }: { ink: string }) {
  return (
    <g>
      <path fill={AQUA} d="M0 90V12C0 4 8 0 20 0c24 0 42 18 50 46 4 14 6 30 8 44Z" />
      <path fill={ink} d="M0 90V18c0-8 7-11 17-11 21 1 37 19 44 45 3 12 5 26 6 38Z" />
      <path fill={AQUA} d="M0 90V27c0-7 6-11 14-11 17 1 30 17 36 40 2 12 3 24 4 34Z" />
      <path fill={ink} d="M0 90V36c0-6 5-10 12-10 13 1 23 15 27 35 2 11 2 21 2 29Z" />
      <path fill={AQUA} d="M0 90V47c0-5 4-9 9-9 9 1 16 13 18 30l1 22Z" />
      <path fill={ink} d="M0 90V57c0-4 3-6 6-6 6 1 9 11 10 23v16Z" />
      <path fill={ink} d="M66 90V70c0-9 5-14 11-13 6 1 9 10 9 21v12Z" />
      <path fill="#d3d6d9" d="M14 91a12 10 0 0 1 24 0Z M38 91a13 11 0 0 1 26 0Z" />
      <path fill="#f5f7f8" d="M28 95a8 7 0 0 1 16 0Z M58 95a7 6 0 0 1 14 0Z" />
    </g>
  );
}

function Gull({ x, y, s = 1, color }: { x: number; y: number; s?: number; color: string }) {
  return (
    <path
      d="M0 6C4 1 8 1 12 7c4-6 8-7 13-4"
      transform={`translate(${x} ${y}) scale(${s})`}
      fill="none"
      stroke={color}
      strokeWidth={1.6 / s}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
}

/** Full lockup — emblem, wordmark and "Diveagar Beach". */
export function LogoFull({ tone = "dark", className }: { tone?: Tone; className?: string }) {
  const ink = tone === "dark" ? "#333537" : "#ffffff";
  const gull = tone === "dark" ? "#6f7376" : "rgba(255,255,255,0.8)";
  return (
    <svg viewBox="0 0 332 158" className={className} role="img" aria-label="The Stream Resort, Diveagar Beach">
      <path fill={AQUA} d="M0 110c80-4 160 0 222 0 50-1 84-3 108-8-24 12-74 20-134 23-70 4-136 4-196 6Z" />
      <g transform="scale(1.25)">
        <Falls ink={ink} />
      </g>
      <g fill={ink} style={{ fontFamily: "var(--font-brand)" }}>
        <text x="124" y="40" fontSize="25" letterSpacing="1">
          <tspan fontSize="31">T</tspan>HE
        </text>
        <text x="120" y="82" fontSize="42" fontWeight="700" letterSpacing="0.5">
          <tspan fontSize="50">S</tspan>TREAM
        </text>
        <text x="316" y="101" fontSize="18" letterSpacing="1.5" textAnchor="end">
          <tspan fontSize="22">R</tspan>ESORT
        </text>
        <text x="222" y="151" fontSize="16.5" letterSpacing="2.4" textAnchor="middle">
          DIVEAGAR BEACH
        </text>
      </g>
      <Gull x={246} y={8} s={1.1} color={gull} />
      <Gull x={284} y={3} s={0.95} color={gull} />
      <Gull x={264} y={26} s={0.8} color={gull} />
    </svg>
  );
}

/** Emblem only — used in the header and as the favicon. */
export function LogoMark({ tone = "dark", className }: { tone?: Tone; className?: string }) {
  const ink = tone === "dark" ? "#333537" : "#ffffff";
  return (
    <svg viewBox="0 0 100 108" className={className} aria-hidden="true">
      <path fill={AQUA} d="M0 90v16c34 0 70-4 100-14-24 4-48 2-70 0-12-1-20-2-30-2Z" />
      <Falls ink={ink} />
    </svg>
  );
}

/** Header lockup — emblem with a compact two-line wordmark. */
export function LogoInline({ tone = "dark", className = "" }: { tone?: Tone; className?: string }) {
  const light = tone === "light";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark tone={tone} className="h-10 w-auto shrink-0 sm:h-11" />
      <span className="flex flex-col leading-none">
        <span
          className={`font-brand text-[1.15rem] font-bold tracking-wide sm:text-[1.3rem] ${light ? "text-white" : "text-ink"}`}
        >
          The Stream
        </span>
        <span
          className={`mt-1 font-brand text-[0.62rem] tracking-[0.2em] sm:text-[0.68rem] ${light ? "text-white/85" : "text-aqua-700"}`}
        >
          RESORT · DIVEAGAR
        </span>
      </span>
    </span>
  );
}
