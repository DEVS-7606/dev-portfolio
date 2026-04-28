interface StatusBadgeProps {
  isCurrent: boolean;
  className?: string;
}

export const StatusBadge = ({ isCurrent, className = "" }: StatusBadgeProps) => (
  <span
    className={`inline-flex items-center gap-1.5 font-mono text-[10px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-full border transition-all duration-300 ${
      isCurrent
        ? "border-[var(--color-accent)]/30 text-[var(--color-accent)] bg-[var(--color-accent-soft)]"
        : "border-[var(--color-border)] text-[var(--color-text-tertiary)]"
    } ${className}`}
  >
    <span
      className={`w-1 h-1 rounded-full ${
        isCurrent ? "bg-[var(--color-accent)] animate-pulse" : "bg-current opacity-50"
      }`}
    />
    {isCurrent ? "Active" : "Completed"}
  </span>
);
