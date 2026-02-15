import { ACCENT_COLOR, SVG_CONFIG, PROGRAMMING_SYMBOLS } from "@/shared/constants";

export default function HeroBackground() {
  return (
    <>
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(ellipse 1000px 1400px at 0% 0%, ${ACCENT_COLOR}60 0%, ${ACCENT_COLOR}40 15%, ${ACCENT_COLOR}20 35%, rgba(255, 255, 255, 0.4) 65%, rgba(255, 255, 255, 0.9) 85%, white 100%)`,
        }}
      />

      {/* SVG Background */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="hero-grid"
            width={SVG_CONFIG.patternWidth}
            height={SVG_CONFIG.patternHeight}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
          <pattern
            id="programming-symbols"
            x={0}
            y={0}
            width={SVG_CONFIG.symbolPatternWidth}
            height={SVG_CONFIG.symbolPatternHeight}
            patternUnits="userSpaceOnUse"
          >
            {PROGRAMMING_SYMBOLS.map((symbol, index) => (
              <text
                key={index}
                x={symbol.x}
                y={symbol.y}
                fill={ACCENT_COLOR}
                fontFamily="monospace"
                fontSize={symbol.fontSize}
                transform={`rotate(${symbol.rotation})`}
              >
                {symbol.text}
              </text>
            ))}
          </pattern>
        </defs>

        <rect
          fill="url(#programming-symbols)"
          width="100%"
          height="100%"
          opacity={SVG_CONFIG.gridOpacity}
        />
        <rect
          fill="url(#hero-grid)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
    </>
  );
}
