export const ACCENT_COLOR = "rgb(37 99 235)";

export const ANIMATION_DELAYS = {
  FAST: "0.2s",
  MEDIUM: "0.4s",
  SLOW: "0.6s",
} as const;

export const ANIMATION_DURATIONS = {
  FADE_IN: "0.8s",
  ARROW_FLOAT: "1.6s",
} as const;

export const HERO_CONFIG = {
  accentColor: ACCENT_COLOR,
  socialLinks: [
    {
      label: "Email",
      href: "mailto:devs95471@gmail.com",
      iconType: "mail",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/dev-shah",
      iconType: "linkedin",
    },
    {
      label: "GitHub",
      href: "https://github.com",
      iconType: "github",
    },
  ],
} as const;

export const SVG_CONFIG = {
  patternWidth: 200,
  patternHeight: 200,
  symbolPatternWidth: 400,
  symbolPatternHeight: 400,
  gridOpacity: 0.35,
} as const;

export const PROGRAMMING_SYMBOLS = [
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
] as const;
