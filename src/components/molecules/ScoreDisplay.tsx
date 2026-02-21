import { Text } from "@/components/atoms/Text";
import type { CardColors } from "@/types/education.types";

interface ScoreDisplayProps {
  colors: CardColors;
  value: string;
  label: string;
  note?: string;
}

export const ScoreDisplay = ({
  colors,
  value,
  label,
  note,
}: ScoreDisplayProps) => (
  <div
    className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-zinc-200 dark:border-zinc-800"
  >
    <div
      className="rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 transition-all duration-500 group-hover:scale-105 bg-zinc-50 dark:bg-zinc-800/50 ring-2"
      style={{
        backgroundColor: colors.soft,
        borderColor: colors.accent + "30",
        boxShadow: `0 4px 16px ${colors.accent}15, inset 0 1px 0 rgba(255,255,255,0.5)`,
      }}
    >
      <Text
        variant="heading"
        className="text-3xl sm:text-4xl lg:text-5xl mb-1"
        color={colors.accent}
      >
        {value}
      </Text>

      <Text
        variant="label"
        className="text-zinc-600 dark:text-zinc-400"
      >
        {label}
      </Text>

      {note && (
        <Text variant="caption" className="mt-1.5 text-zinc-500 dark:text-zinc-500">
          {note}
        </Text>
      )}
    </div>
  </div>
);
