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
      className="group absolute bottom-8 md:bottom-60 left-1/2 z-10 -translate-x-1/2 transition transform hidden md:block"
    >
      <CaretLineDownIcon
        size={36}
        className="text-gray-700 transition group-hover:text-blue-600 animate-arrow-float"
      />
    </a>
  );
}
