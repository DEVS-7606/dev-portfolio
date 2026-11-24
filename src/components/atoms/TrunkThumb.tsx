import { useEffect, useRef } from "react";

const RINGS = 9;
const POINTS = 72;
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

interface TrunkThumbProps {
  /** Edge length in CSS px. */
  size?: number;
  /** Animate only while true (saves CPU when the thumbnail is hidden). */
  active?: boolean;
}

/**
 * Tiny animated "tree rings" mark, a miniature of the Vanta Trunk background.
 * Pure 2D canvas (a few hundred points per frame), so it's far lighter than
 * running a second Vanta/p5 instance. Colour comes from `--color-accent`.
 */
export default function TrunkThumb({ size = 40, active = true }: TrunkThumbProps) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const raw = getComputedStyle(document.documentElement)
      .getPropertyValue("--color-accent")
      .trim();
    const color = raw || "#D71921";
    const reduced = window.matchMedia(REDUCED_MOTION_QUERY).matches;

    const draw = (t: number) => {
      ctx.clearRect(0, 0, size, size);
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      const c = size / 2;
      const maxR = c - 2;
      for (let i = 0; i < RINGS; i++) {
        const base = maxR * (0.18 + (0.82 * i) / (RINGS - 1));
        const amp = size * 0.035;
        ctx.globalAlpha = 0.45 + (0.55 * i) / (RINGS - 1);
        ctx.beginPath();
        for (let p = 0; p <= POINTS; p++) {
          const a = (p / POINTS) * Math.PI * 2;
          // cheap smooth "noise": a few phase-shifted sines per ring
          const n =
            Math.sin(a * 3 + t * 0.0011 + i * 0.9) * 0.55 +
            Math.sin(a * 5 - t * 0.0007 + i * 1.7) * 0.3 +
            Math.sin(a * 8 + t * 0.0013 - i * 0.5) * 0.15;
          const r = base + amp * n;
          const x = c + r * Math.cos(a);
          const y = c + r * Math.sin(a);
          if (p === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    };

    if (reduced || !active) {
      draw(0);
      return;
    }

    let raf = 0;
    const loop = (t: number) => {
      draw(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [size, active]);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      style={{ width: size, height: size }}
      className="block"
    />
  );
}
