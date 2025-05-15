
import { useState } from "react";
import { stories, posts, currentUser } from "@/data/mockData";
import StoryCircle from "@/components/posts/StoryCircle";
import PostCard from "@/components/posts/PostCard";
import VibeCounter from "@/components/ui/vibeCounter";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [storyData] = useState(stories);
  const [postData] = useState(posts);

  const handleCreatePost = () => {
    toast("Create post feature coming soon!");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-vibe-purple to-vibe-pink bg-clip-text text-transparent">
          Vibe Wall
        </h1>
        <VibeCounter 
          points={currentUser.vibePoints} 
          credits={currentUser.vibeCredits} 
        />
      </div>
      
      {/* Stories */}
      <section className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-800">Stories</h2>
          <Badge variant="outline" className="bg-vibe-light text-vibe-purple text-xs">
            24h
          </Badge>
        </div>
        <div className="flex gap-4 overflow-x-auto py-2 px-1 pb-4 -mx-1">
          <div className="flex flex-col items-center gap-1 min-w-fit">
            <div className="w-16 h-16 rounded-full border-2 border-dashed border-vibe-purple/40 flex items-center justify-center">
              <Button 
                size="sm"
                className="w-12 h-12 rounded-full bg-vibe-light hover:bg-vibe-light/80 text-vibe-purple"
                onClick={() => toast("Create story feature coming soon!")}
              >
                <Plus size={24} />
              </Button>
            </div>
            <span className="text-xs">Your Story</span>
          </div>
          {storyData.map((story) => (
            <StoryCircle 
              key={story.id} 
              story={story} 
              onClick={() => toast("Story viewer coming soon!")}
            />
          ))}
        </div>
      </section>
      
      {/* Create Post Button */}
      <div className="mb-6">
        <Button 
          className="w-full bg-gradient-to-r from-vibe-purple to-vibe-pink hover:opacity-90 transition-opacity"
          onClick={handleCreatePost}
        >
          <Plus size={18} className="mr-2" /> Create Post
        </Button>
      </div>
      
      {/* Posts */}
      <section>
        <h2 className="font-semibold text-gray-800 mb-4">Recent Posts</h2>
        <div className="space-y-4">
          {postData.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
