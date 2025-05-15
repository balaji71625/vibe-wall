
import { useState } from "react";
import { Post } from "@/types";
import { formatDistanceToNow } from "date-fns";
import { Button } from "../ui/button";
import { Heart, MessageSquare, Share } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { Badge } from "../ui/badge";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  const [liked, setLiked] = useState(post.isLiked);
  const [likeCount, setLikeCount] = useState(post.likes);
  
  // Calculate time remaining until post expires
  const now = new Date();
  const expiresAt = new Date(post.expiresAt);
  const hoursRemaining = Math.max(0, Math.floor((expiresAt.getTime() - now.getTime()) / (1000 * 60 * 60)));
  
  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikeCount(likeCount - 1);
    } else {
      setLiked(true);
      setLikeCount(likeCount + 1);
      toast.success("You earned 5 Vibe Points!");
    }
  };
  
  const handleComment = () => {
    toast("Comments coming soon!");
  };
  
  const handleShare = () => {
    if (post.allowRepost) {
      toast.success("Post shared! You earned 10 Vibe Points!");
    } else {
      toast.error("This post doesn't allow resharing");
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-4">
      {/* Post header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <img 
            src={post.user.avatar} 
            alt={post.user.username}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-medium">{post.user.displayName}</h3>
            <p className="text-xs text-gray-500">@{post.user.username}</p>
          </div>
        </div>
        <Badge variant="outline" className="bg-vibe-light text-vibe-purple text-xs">
          {hoursRemaining}h left
        </Badge>
      </div>
      
      {/* Post content */}
      <div className="px-4 pb-3">
        <p className="text-gray-800 mb-4">{post.content}</p>
        {post.image && (
          <img 
            src={post.image} 
            alt="Post content"
            className="rounded-xl w-full h-auto object-cover mb-4"
          />
        )}
      </div>
      
      {/* Post actions */}
      <div className="border-t border-gray-100 px-4 py-2 flex justify-between">
        <Button 
          variant="ghost" 
          size="sm" 
          className={cn("gap-1", liked && "text-red-500")}
          onClick={handleLike}
        >
          <Heart size={18} className={cn("", liked && "fill-red-500")} />
          <span>{likeCount}</span>
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          className="gap-1"
          onClick={handleComment}
        >
          <MessageSquare size={18} />
          <span>{post.comments}</span>
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          className={cn("gap-1", !post.allowRepost && "opacity-50")}
          onClick={handleShare}
          disabled={!post.allowRepost}
        >
          <Share size={18} />
          <span>{post.reposts}</span>
        </Button>
        
        <div className="text-xs text-gray-400">
          {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
