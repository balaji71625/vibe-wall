
import { Story } from "@/types";
import { cn } from "@/lib/utils";

interface StoryCircleProps {
  story: Story;
  onClick?: () => void;
}

const StoryCircle = ({ story, onClick }: StoryCircleProps) => {
  return (
    <div className="flex flex-col items-center gap-1" onClick={onClick}>
      <div className={cn(
        "story-border",
        story.viewed && "opacity-70",
        !story.viewed && "pulse-purple"
      )}>
        <div className="bg-white p-0.5 rounded-full">
          <img 
            src={story.user.avatar} 
            alt={story.user.username}
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>
      </div>
      <span className="text-xs truncate max-w-[4rem]">
        {story.user.username}
      </span>
    </div>
  );
};

export default StoryCircle;
