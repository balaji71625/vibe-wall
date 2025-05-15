
import { useState } from "react";
import { posts, currentUser } from "@/data/mockData";
import PostCard from "@/components/posts/PostCard";
import VibeCounter from "@/components/ui/vibeCounter";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import AIAssistant from "@/components/features/AIAssistant";

const Index = () => {
  const [postData] = useState(posts);

  const handleCreatePost = () => {
    toast("Create post feature coming soon!");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-dare-primary to-vibe-pink bg-clip-text text-transparent">
          Vibe Wall
        </h1>
        <VibeCounter 
          points={currentUser.vibePoints} 
          credits={currentUser.vibeCredits} 
        />
      </div>
      
      {/* AI Assistant */}
      <AIAssistant />
      
      {/* Create Post Button */}
      <div className="mb-6">
        <Button 
          className="w-full bg-gradient-to-r from-dare-primary to-vibe-pink hover:opacity-90 transition-opacity"
          onClick={handleCreatePost}
        >
          <Plus size={18} className="mr-2" /> Create Post
        </Button>
      </div>
      
      {/* Posts */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-gray-800">Recent Posts</h2>
          <Badge variant="outline" className="bg-dare-primary/10 text-dare-primary text-xs">
            Feed
          </Badge>
        </div>
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

