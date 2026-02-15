import { Text } from "@/components/atoms/Text";
import type { CardColors } from "@/types/education.types";

interface ScoreDisplayProps {
  isMain: boolean;
  colors: CardColors;
  value: string;
  label: string;
  note?: string;
}

export const ScoreDisplay = ({
  isMain,
  colors,
  value,
  label,
  note,
}: ScoreDisplayProps) => (
  <div
    className={`mt-4 sm:mt-6 ${isMain ? "" : "pt-3 sm:pt-4 border-t border-zinc-200 dark:border-zinc-800"}`}
  >
    <div
      className={`rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 transition-all duration-500 group-hover:scale-105 ${
        isMain
          ? "bg-white/15 backdrop-blur-xl ring-1 ring-white/20"
          : "bg-zinc-50 dark:bg-zinc-800/50 ring-2"
      }`}
      style={
        !isMain
          ? {
              backgroundColor: colors.soft,
              borderColor: colors.accent + "30",
              boxShadow: `0 4px 16px ${colors.accent}15, inset 0 1px 0 rgba(255,255,255,0.5)`,
            }
          : {}
      }
    >
      <Text
        variant="heading"
        className={`text-3xl sm:text-4xl lg:text-5xl mb-1 ${isMain ? "text-white" : ""}`}
        color={!isMain ? colors.accent : undefined}
      >
        {value}
      </Text>

      <Text
        variant="label"
        className={
          isMain ? "text-white/80" : "text-zinc-600 dark:text-zinc-400"
        }
      >
        {label}
      </Text>

      {note && isMain && (
        <Text variant="caption" className="mt-1.5 text-white/70">
          {note}
        </Text>
      )}
    </div>
  </div>
);
