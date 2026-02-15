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

export const CardHeader = ({ isMain, colors, period, label }: CardHeaderProps) => (
  <div className="flex items-start justify-between mb-4">
    <div className="flex items-center gap-3">
      <div
        className={`p-3 rounded-2xl transition-all duration-500 ${
          isMain 
            ? "bg-white/20 backdrop-blur-sm" 
            : "bg-zinc-100 dark:bg-zinc-800 group-hover:scale-110"
        }`}
        style={!isMain ? { boxShadow: `0 4px 12px ${colors.accent}20` } : {}}
      >
        <Icon 
          type={isMain ? "graduation" : "book"}
          color={isMain ? "white" : colors.accent}
        />
      </div>

      <div>
        <Text 
          variant="label"
          className={`${isMain ? "text-white/70" : "text-zinc-500 dark:text-zinc-400"} mb-1`}
        >
          {label}
        </Text>

        <Badge 
          variant={isMain ? "primary" : "secondary"}
          color={!isMain ? colors.accent : undefined}
        >
          {period}
        </Badge>
      </div>
    </div>
  </div>
);
