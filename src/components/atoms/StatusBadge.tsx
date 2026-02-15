interface StatusBadgeProps {
  isCurrent: boolean;
  className?: string;
}

export const StatusBadge = ({ isCurrent, className = '' }: StatusBadgeProps) => (
  <span 
    className={`
      inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full transition-all duration-300
      ${isCurrent 
        ? "bg-green-500/20 text-green-700 dark:text-green-400 ring-1 ring-green-500/30" 
        : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
      }
      ${className}
    `}
  >
    <span className={`w-1.5 h-1.5 rounded-full ${
      isCurrent ? "bg-green-500 animate-pulse" : "bg-current"
    }`} />
    {isCurrent ? "Currently Working" : "Completed"}
  </span>
);
