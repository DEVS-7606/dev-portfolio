interface TimelineDotProps {
  isCurrent: boolean;
  color?: string;
  className?: string;
}

export const TimelineDot = ({
  isCurrent,
  color,
  className = "",
}: TimelineDotProps) => (
  <div className={`relative ${className}`}>
    <div
      className={`
        w-4 h-4 rounded-full border-2 transition-all duration-300
        ${
          isCurrent
            ? "bg-white border-zinc-900 dark:border-white shadow-lg"
            : "bg-zinc-100 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-600"
        }
      `}
      style={color ? { backgroundColor: color, borderColor: color } : undefined}
    />
    {isCurrent && (
      <div className="absolute inset-0 w-4 h-4 rounded-full bg-blue-500 animate-ping opacity-75" />
    )}
  </div>
);
