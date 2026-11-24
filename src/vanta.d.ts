declare module "vanta/dist/vanta.trunk.min.js" {
  interface VantaEffect {
    destroy(): void;
    resize(): void;
    setOptions(options: Record<string, unknown>): void;
    p5?: {
      loop(): void;
      noLoop(): void;
      pixelDensity(density: number): void;
      frameRate(fps: number): void;
    };
  }
  const TRUNK: (options: Record<string, unknown>) => VantaEffect;
  export default TRUNK;
}

// p5 is only passed through to Vanta as an opaque constructor.
declare module "p5";
