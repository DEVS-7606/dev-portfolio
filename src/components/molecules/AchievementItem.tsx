import { Icon } from "@/components/atoms/Icon";
import { Text } from "@/components/atoms/Text";

interface AchievementItemProps {
  children: React.ReactNode;
}

export const AchievementItem = ({ children }: AchievementItemProps) => (
  <div className="flex items-start gap-3 text-sm font-medium bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:translate-x-1">
    <Icon type="check" className="w-5 h-5 flex-shrink-0 text-white/90" />
    <Text variant="body" className="text-white/95 leading-relaxed">
      {children}
    </Text>
  </div>
);
