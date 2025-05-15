
import { cn } from "@/lib/utils";

interface VibeCounterProps {
  points: number;
  credits: number;
  className?: string;
}

const VibeCounter = ({ points, credits, className }: VibeCounterProps) => {
  return (
    <div className={cn("bg-white rounded-full shadow-sm border border-gray-100 p-1.5 flex gap-2", className)}>
      <div className="bg-vibe-light text-vibe-purple rounded-full px-3 py-1 flex items-center gap-1 text-sm font-medium">
        <span className="text-xs">⚡</span>
        <span>{points.toLocaleString()}</span>
        <span className="text-xs text-vibe-purple/70">points</span>
      </div>
      <div className="bg-gradient-to-r from-vibe-purple to-vibe-pink text-white rounded-full px-3 py-1 flex items-center gap-1 text-sm font-medium">
        <span className="text-xs">💎</span>
        <span>{credits}</span>
        <span className="text-xs text-white/70">credits</span>
      </div>
    </div>
  );
};

export default VibeCounter;
