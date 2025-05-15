
import { useState } from "react";
import { weeklyLeaderboard, monthlyLeaderboard } from "@/data/mockData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LeaderboardUser } from "@/types";
import { ArrowUp, ArrowDown } from "lucide-react";

const LeaderboardPage = () => {
  const [activeTab, setActiveTab] = useState<"weekly" | "monthly">("weekly");
  
  const renderLeaderboardRow = (user: LeaderboardUser, index: number) => {
    // Determine if user has moved up, down, or stayed the same
    let rankChange = null;
    if (user.previousRank !== undefined) {
      if (user.rank < user.previousRank) {
        rankChange = <ArrowUp className="text-green-500" size={14} />;
      } else if (user.rank > user.previousRank) {
        rankChange = <ArrowDown className="text-red-500" size={14} />;
      }
    }
    
    // Determine medal for top 3
    let medal = null;
    if (index === 0) medal = "🥇";
    else if (index === 1) medal = "🥈";
    else if (index === 2) medal = "🥉";

    return (
      <div 
        key={user.id}
        className={`flex items-center p-4 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} ${index < 3 ? 'border-l-4' : ''}`}
        style={{
          borderLeftColor: index === 0 ? '#FFD700' : index === 1 ? '#C0C0C0' : index === 2 ? '#CD7F32' : 'transparent'
        }}
      >
        <div className="w-8 font-bold text-gray-500 flex items-center">
          {medal || user.rank}
        </div>
        <div className="flex items-center flex-1">
          <img 
            src={user.avatar} 
            alt={user.username}
            className="w-10 h-10 rounded-full object-cover mr-3"
          />
          <div>
            <h3 className="font-medium">{user.displayName}</h3>
            <p className="text-xs text-gray-500">@{user.username}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-vibe-light text-vibe-purple rounded-full px-2.5 py-1 text-sm font-medium">
            {user.vibePoints.toLocaleString()} ⚡
          </div>
          {rankChange && <div>{rankChange}</div>}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Leaderboard</h1>
        <p className="text-sm text-gray-500">See who's making the biggest vibes</p>
      </div>
      
      {/* Leaderboard */}
      <Tabs defaultValue="weekly" value={activeTab} onValueChange={(v) => setActiveTab(v as "weekly" | "monthly")}>
        <TabsList className="grid grid-cols-2 mb-6">
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
        </TabsList>
        
        <TabsContent value="weekly" className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
          <div className="bg-gradient-to-r from-vibe-purple to-vibe-pink text-white p-4">
            <h2 className="font-bold">Weekly Champions</h2>
            <p className="text-xs opacity-80">Resets every Sunday at midnight</p>
          </div>
          <div>
            {weeklyLeaderboard.map((user, index) => renderLeaderboardRow(user, index))}
          </div>
        </TabsContent>
        
        <TabsContent value="monthly" className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
          <div className="bg-gradient-to-r from-vibe-purple to-vibe-pink text-white p-4">
            <h2 className="font-bold">Monthly Legends</h2>
            <p className="text-xs opacity-80">Resets on the first day of each month</p>
          </div>
          <div>
            {monthlyLeaderboard.map((user, index) => renderLeaderboardRow(user, index))}
          </div>
        </TabsContent>
      </Tabs>
      
      {/* Rewards Info */}
      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <h3 className="font-medium mb-2">Leaderboard Rewards</h3>
        <div className="text-sm space-y-2">
          <div className="flex gap-2">
            <span>🥇</span>
            <span>1st Place: Weekly Champion badge + 500 Vibe Points</span>
          </div>
          <div className="flex gap-2">
            <span>🥈</span>
            <span>2nd-10th Place: Top 10 Weekly badge + 200 Vibe Points</span>
          </div>
          <div className="flex gap-2">
            <span>🏆</span>
            <span>Monthly Legend: Exclusive profile frame + 1000 Vibe Points</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;
