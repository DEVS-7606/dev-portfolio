/**
 * Small red accent block beside a section heading (left gutter, lg+ only).
 * Uses the same `--color-accent` as the Vanta Trunk background. Place inside a
 * `relative` section; being a child of it, it fades in with the section.
 */
export default function SectionBlock() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute hidden h-[98px] w-[98px] lg:block"
      style={{
        // top aligns with the first line of the heading; left sits in the gutter
        top: 234,
        left: "calc(1.5% + 36px)",
        background:
          "linear-gradient(135deg, var(--color-accent), color-mix(in srgb, var(--color-accent) 55%, black))",
      }}
    />
  );
}
