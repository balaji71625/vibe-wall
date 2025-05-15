
import { Badge } from "@/types";
import { cn } from "@/lib/utils";
import { Progress } from "../ui/progress";

interface BadgeIconProps {
  badge: Badge;
  size?: "sm" | "md" | "lg";
}

const BadgeIcon = ({ badge, size = "md" }: BadgeIconProps) => {
  const sizeClasses = {
    sm: "w-12 h-12 text-xl",
    md: "w-16 h-16 text-3xl",
    lg: "w-20 h-20 text-4xl",
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={cn(
          "rounded-full flex items-center justify-center relative",
          sizeClasses[size],
          badge.achieved
            ? "bg-gradient-to-br from-dare-primary to-vibe-pink text-white"
            : "bg-gray-100 text-gray-400"
        )}
      >
        <span className="drop-shadow-sm">{badge.icon}</span>
        {!badge.achieved && (
          <div className="absolute -bottom-1 right-0 w-5 h-5 rounded-full bg-gray-300 text-xs text-white flex items-center justify-center">
            🔒
          </div>
        )}
      </div>
      <div className="text-center">
        <p className={cn("font-medium truncate max-w-[80px]", size === "sm" ? "text-xs" : "text-sm")}>
          {badge.name}
        </p>
        {badge.progress !== undefined && badge.maxProgress !== undefined && (
          <div className="w-full mt-1">
            <Progress value={(badge.progress / badge.maxProgress) * 100} className="h-1.5" />
            <p className="text-xs text-gray-500 mt-1">
              {badge.progress}/{badge.maxProgress}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BadgeIcon;

