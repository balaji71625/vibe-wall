
import { currentUser, allBadges } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { BadgeIcon } from "@/components/badges";
import VibeCounter from "@/components/ui/vibeCounter";
import { formatDistanceToNow } from "date-fns";
import { Star, Pencil } from "lucide-react";
import { toast } from "sonner";

const ProfilePage = () => {
  const joinDate = new Date(currentUser.joinDate);
  
  const handleEditProfile = () => {
    toast("Edit profile feature coming soon!");
  };
  
  const achievedBadges = allBadges.filter(badge => badge.achieved);
  const unachievedBadges = allBadges.filter(badge => !badge.achieved);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <h1 className="text-2xl font-bold">Profile</h1>
        <VibeCounter 
          points={currentUser.vibePoints} 
          credits={currentUser.vibeCredits} 
        />
      </div>
      
      {/* Profile Info */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <div className="relative inline-block">
              <img 
                src={currentUser.avatar} 
                alt={currentUser.displayName}
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
              />
              <div className="absolute -bottom-1 -right-1 bg-vibe-purple text-white rounded-full w-8 h-8 flex items-center justify-center shadow-sm">
                <Star size={16} className="fill-white" />
              </div>
            </div>
          </div>
          
          <h2 className="mt-4 text-xl font-bold">{currentUser.displayName}</h2>
          <p className="text-sm text-gray-500">@{currentUser.username}</p>
          
          <div className="mt-4 text-sm text-gray-500">
            Member since {formatDistanceToNow(joinDate, { addSuffix: true })}
          </div>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="mt-4 gap-2"
            onClick={handleEditProfile}
          >
            <Pencil size={14} /> Edit Profile
          </Button>
        </div>
      </div>
      
      {/* Badges */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="font-bold text-lg mb-4">Your Badges</h2>
        
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-500 mb-4">Achieved ({achievedBadges.length})</h3>
          {achievedBadges.length > 0 ? (
            <div className="grid grid-cols-3 gap-4">
              {achievedBadges.map((badge) => (
                <BadgeIcon key={badge.id} badge={badge} />
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500 italic">No badges achieved yet. Keep interacting!</p>
          )}
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-4">In Progress ({unachievedBadges.length})</h3>
          <div className="grid grid-cols-3 gap-4">
            {unachievedBadges.map((badge) => (
              <BadgeIcon key={badge.id} badge={badge} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
