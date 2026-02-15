import { CaretLineDownIcon } from "@phosphor-icons/react";

interface ScrollIndicatorProps {
  href: string;
  ariaLabel: string;
}

export default function ScrollIndicator({
  href,
  ariaLabel,
}: ScrollIndicatorProps) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className="group absolute bottom-8 md:bottom-60 left-1/2 z-10 -translate-x-1/2 rounded-full bg-white/90 p-3 shadow-[0_14px_30px_rgba(0,0,0,0.14)] ring-1 ring-black/5 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
    >
      <CaretLineDownIcon
        size={28}
        className="text-gray-700 transition group-hover:text-blue-600 animate-arrow-float"
      />
    </a>
  );
}
