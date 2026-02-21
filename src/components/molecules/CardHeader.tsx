import { Badge } from "@/components/atoms/Badge";
import { Icon } from "@/components/atoms/Icon";
import { Text } from "@/components/atoms/Text";
import type { CardColors } from "@/types/education.types";

interface CardHeaderProps {
  isMain: boolean;
  colors: CardColors;
  period: string;
  label: string;
}

export const CardHeader = ({
  isMain,
  colors,
  period,
  label,
}: CardHeaderProps) => (
  <div className="flex items-start justify-between mb-3 sm:mb-4">
    <div className="flex items-center gap-2 sm:gap-3">
      <div
        className="p-2 sm:p-2.5 md:p-3 rounded-xl sm:rounded-2xl transition-all duration-500 bg-zinc-100 dark:bg-zinc-800 group-hover:scale-110"
        style={{ boxShadow: `0 4px 12px ${colors.accent}20` }}
      >
        <Icon
          type={isMain ? "graduation" : "book"}
          color={colors.accent}
        />
      </div>

      <div>
        <Text
          variant="label"
          className="text-zinc-500 dark:text-zinc-400 mb-1"
        >
          {label}
        </Text>

        <Badge
          variant="secondary"
          color={colors.accent}
        >
          {period}
        </Badge>
      </div>
    </div>
  </div>
);
