import { useEffect, useRef, useState } from "react";
import p5 from "p5";
import TRUNK from "vanta/dist/vanta.trunk.min.js";
import { useTheme } from "@/contexts/ThemeContext";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

/** Read a CSS color var (#rrggbb) as a 0xRRGGBB number for Vanta. */
function cssVarToHex(name: string, fallback: number) {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
  const m = /^#([0-9a-f]{6})$/i.exec(raw);
  return m ? Number.parseInt(m[1], 16) : fallback;
}

/**
 * Vanta "Trunk" (concentric tree-ring lines) as one fixed background behind
 * every section. Drawn with the portfolio's accent red, faded so text stays
 * readable. Runs on phones too (Vanta uses fewer rings on mobile); only
 * disabled for reduced-motion users.
 */
export default function VantaTrunk() {
  const { theme } = useTheme();
  const elRef = useRef<HTMLDivElement>(null);

  const [enabled, setEnabled] = useState(
    () => !window.matchMedia(REDUCED_MOTION_QUERY).matches,
  );
  useEffect(() => {
    const reduced = window.matchMedia(REDUCED_MOTION_QUERY);
    const update = () => setEnabled(!reduced.matches);
    reduced.addEventListener("change", update);
    return () => reduced.removeEventListener("change", update);
  }, []);

  // (Re)create the effect when enabled or when the theme changes, so the
  // colours are re-read from the CSS variables of the active theme.
  useEffect(() => {
    const el = elRef.current;
    if (!enabled || !el) return;

    const effect = TRUNK({
      el,
      p5,
      mouseControls: false,
      touchControls: false,
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      scale: 1,
      scaleMobile: 1,
      color: cssVarToHex("--color-accent", 0xd71921),
      backgroundColor: cssVarToHex("--color-bg-primary", 0x000000),
      spacing: 0,
      chaos: 1,
    });

    // Thin 1px lines at 30% opacity don't need retina resolution or 60 fps:
    // 1x pixels and 30 fps cut the work substantially with no visible change.
    effect.p5?.pixelDensity(1);
    effect.p5?.frameRate(30);

    // Don't burn CPU while the tab is in the background.
    const onVisibility = () =>
      document.hidden ? effect.p5?.noLoop() : effect.p5?.loop();
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      effect.destroy();
    };
  }, [enabled, theme]);

  if (!enabled) return null;

  return (
    <div
      ref={elRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-30"
    />
  );
}
