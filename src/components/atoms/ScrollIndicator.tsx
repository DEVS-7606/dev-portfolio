interface ScrollIndicatorProps {
  href: string;
  ariaLabel: string;
}

export default function ScrollIndicator({ href, ariaLabel }: ScrollIndicatorProps) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors duration-300 animate-fade-in animation-delay-800"
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.25em]">
        Scroll
      </span>
      <div className="w-px h-8 bg-current animate-arrow-float opacity-40" />
    </a>
  );
}
