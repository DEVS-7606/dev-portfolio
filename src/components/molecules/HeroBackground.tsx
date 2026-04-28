const CODE_SYMBOLS = [
  { text: "</>", x: 50, y: 50, fontSize: 24, rotation: -15 },
  { text: "{}", x: 150, y: 100, fontSize: 20, rotation: 10 },
  { text: "=>", x: 250, y: 80, fontSize: 18, rotation: -5 },
  { text: "[]", x: 100, y: 200, fontSize: 22, rotation: 15 },
  { text: "<>", x: 300, y: 180, fontSize: 20, rotation: -10 },
  { text: "()", x: 200, y: 250, fontSize: 24, rotation: 5 },
  { text: "::", x: 50, y: 320, fontSize: 18, rotation: -8 },
  { text: "==", x: 350, y: 300, fontSize: 22, rotation: 12 },
  { text: "++", x: 150, y: 350, fontSize: 20, rotation: -15 },
  { text: ";", x: 250, y: 370, fontSize: 24, rotation: 8 },
];

const GRID_SIZE = 200;
const SYMBOL_PATTERN_SIZE = 400;

/**
 * Nothing-inspired hero background combining:
 * 1. Code symbols grid (from original design)
 * 2. Structural grid lines (Nothing aesthetic)
 * 3. Red accent glow
 * 4. Bottom fade
 */
export default function HeroBackground() {
  return (
    <>
      {/* SVG grid + code symbols */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full [mask-image:radial-gradient(120%_120%_at_top_right,white,white_40%,transparent)]"
      >
        <defs>
          {/* Structural grid lines */}
          <pattern
            id="hero-grid"
            x="50%"
            y={-1}
            width={GRID_SIZE}
            height={GRID_SIZE}
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M.5 200V.5H200"
              fill="none"
              className="stroke-[var(--color-border)]"
              strokeWidth="0.8"
            />
          </pattern>

          {/* Code symbols */}
          <pattern
            id="code-symbols"
            x={0}
            y={0}
            width={SYMBOL_PATTERN_SIZE}
            height={SYMBOL_PATTERN_SIZE}
            patternUnits="userSpaceOnUse"
          >
            {CODE_SYMBOLS.map((symbol, index) => (
              <text
                key={index}
                x={symbol.x}
                y={symbol.y}
                fill="var(--color-accent)"
                fontFamily="'JetBrains Mono', monospace"
                fontSize={symbol.fontSize}
                transform={`rotate(${symbol.rotation})`}
                opacity="0.25"
              >
                {symbol.text}
              </text>
            ))}
          </pattern>
        </defs>

        {/* Grid lines layer */}
        <rect fill="url(#hero-grid)" width="100%" height="100%" />

        {/* Code symbols layer */}
        <rect fill="url(#code-symbols)" width="100%" height="100%" opacity="0.5" />
      </svg>

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 -z-10 dot-grid-bg-lg opacity-40"
        aria-hidden="true"
      />

      {/* Accent glow — top left */}
      <div
        className="absolute -z-10 top-0 left-0 w-[700px] h-[700px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 0% 0%, rgba(215,25,33,0.08) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* Bottom fade into next section */}
      <div
        className="absolute -z-10 bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, var(--color-bg-primary), transparent)",
        }}
        aria-hidden="true"
      />

      {/* Decorative glyph lines */}
      <div
        className="absolute -z-10 top-1/2 right-0 w-px h-40 bg-gradient-to-b from-transparent via-[var(--color-accent)] to-transparent opacity-20"
        aria-hidden="true"
      />
      <div
        className="absolute -z-10 bottom-32 left-12 w-16 h-px bg-gradient-to-r from-[var(--color-accent)] to-transparent opacity-20"
        aria-hidden="true"
      />
    </>
  );
}
