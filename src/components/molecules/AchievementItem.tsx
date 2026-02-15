import { Icon } from "@/components/atoms/Icon";
import { Text } from "@/components/atoms/Text";

interface AchievementItemProps {
  children: React.ReactNode;
}

export const AchievementItem = ({ children }: AchievementItemProps) => (
  <div className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm font-medium bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:translate-x-1">
    <Icon
      type="check"
      className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-white/90"
    />
    <Text
      variant="body"
      className="text-white/95 leading-relaxed text-xs sm:text-sm"
    >
      {children}
    </Text>
  </div>
);
