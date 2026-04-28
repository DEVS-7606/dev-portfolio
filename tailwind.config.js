/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        nothing: {
          black: "#000000",
          white: "#FFFFFF",
          red: "#D71921",
          "red-hover": "#FF2D36",
          950: "#050505",
          900: "#0A0A0A",
          800: "#141414",
          700: "#1F1F1F",
          600: "#2A2A2A",
          500: "#555555",
          400: "#888888",
          300: "#AAAAAA",
          200: "#D4D4D4",
          100: "#F0F0F0",
          50: "#F8F8F8",
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', '"Fira Code"', "monospace"],
        body: ['"Space Grotesk"', "system-ui", "sans-serif"],
      },
      animation: {
        reveal: "reveal 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "reveal-slow": "reveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "dot-pulse": "dotPulse 2.4s ease-in-out infinite",
        "glyph-glow": "glyphGlow 3s ease-in-out infinite",
        "line-draw": "lineDraw 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        reveal: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        dotPulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        glyphGlow: {
          "0%, 100%": { opacity: "0.15" },
          "50%": { opacity: "0.4" },
        },
        lineDraw: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
    },
  },
  plugins: [],
};
