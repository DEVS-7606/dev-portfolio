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
  <div className={`relative flex items-center justify-center ${className}`}>
    <div
      className={`w-3 h-3 rounded-full transition-all duration-500 ${
        isCurrent
          ? "bg-[var(--color-accent)]"
          : "bg-[var(--color-text-tertiary)] opacity-30"
      }`}
      style={color ? { backgroundColor: color } : undefined}
    />
    {isCurrent && (
      <div
        className="absolute w-3 h-3 rounded-full animate-ping opacity-30"
        style={{ backgroundColor: "var(--color-accent)" }}
      />
    )}
  </div>
);
