export const ACCENT_COLOR = "#D71921";

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
      href: "https://www.linkedin.com/in/dev-shah-63b92218b/",
      iconType: "linkedin",
    },
    {
      label: "GitHub",
      href: "https://github.com/DEVS-7606",
      iconType: "github",
    },
  ],
} as const;

export const DOT_GRID_CONFIG = {
  dotSize: 1,
  dotSpacing: 24,
  dotOpacity: 0.06,
} as const;
