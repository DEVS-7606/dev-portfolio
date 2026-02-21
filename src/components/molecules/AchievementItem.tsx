import { Icon } from "@/components/atoms/Icon";
import { Text } from "@/components/atoms/Text";
import type { CardColors } from "@/types/education.types";

interface AchievementItemProps {
  children: React.ReactNode;
  colors: CardColors;
}

export const AchievementItem = ({ children, colors }: AchievementItemProps) => (
  <div
    className="flex items-center gap-2 text-xs sm:text-sm font-medium rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 border transition-all duration-300 hover:translate-x-1"
    style={{
      backgroundColor: colors.soft,
      borderColor: colors.accent + "20",
    }}
  >
    <Icon
      type="check"
      className="w-3 h-3 flex-shrink-0"
      color={colors.accent}
    />
    <Text
      variant="body"
      className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-xs sm:text-sm"
    >
      {children}
    </Text>
  </div>
);

