// Decorative illustrations from the brochure: teal palms, gulls and waves.

export function Palm({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 200" className={className} fill="currentColor" aria-hidden="true">
      <path d="M62 60c-2 40 4 90 10 136" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M62 60C48 40 26 32 4 36c18-2 34 6 50 22Z" />
      <path d="M62 60C52 34 54 14 66 0c-6 20-4 38 2 56Z" />
      <path d="M62 60c12-22 32-30 54-26-20 2-36 10-48 28Z" />
      <path d="M62 60c20-8 40-2 54 14-18-10-36-12-52-8Z" />
      <path d="M62 60C42 58 22 68 10 86c16-14 32-20 50-22Z" />
      <path d="M62 60c-4 18-14 32-30 42 12-12 20-26 24-42Z" />
      <path d="M62 60c8 16 10 32 4 48 0-16-2-32-8-46Z" />
    </svg>
  );
}

export function Gulls({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 40"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M2 10c4-5 8-5 11 1 4-6 8-6 12-2" />
      <path d="M30 32c3-4 6-4 8 1 3-5 6-5 9-2" />
    </svg>
  );
}

/** Soft layered wave used as a section edge. `flip` turns it upside down. */
export function Waves({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className={`block w-full ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden="true"
    >
      <path fill="currentColor" fillOpacity=".35" d="M0 50c180-40 360-40 540 0s360 40 540 0 270-30 360-10v80H0Z" />
      <path fill="currentColor" fillOpacity=".6" d="M0 75c200-35 400-30 600 5s420 25 560-5 220-20 280-5v50H0Z" />
      <path fill="currentColor" d="M0 95c240-25 480-20 720 5s480 15 720-10v30H0Z" />
    </svg>
  );
}
