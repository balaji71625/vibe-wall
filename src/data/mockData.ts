
import { Badge, LeaderboardUser, Post, ShopItem, Story, User } from "../types";

export const currentUser: User = {
  id: "user-1",
  username: "vibeMaster",
  displayName: "Alex Johnson",
  avatar: "https://i.pravatar.cc/150?img=33",
  vibePoints: 2750,
  vibeCredits: 11,
  badges: [
    {
      id: "badge-1",
      name: "Daily Viber",
      icon: "🔁",
      description: "Login 7 days in a row",
      achieved: true,
    },
    {
      id: "badge-2",
      name: "Vibe Master",
      icon: "🧙",
      description: "Reach 5000 Vibe Points",
      achieved: false,
      progress: 2750,
      maxProgress: 5000,
    }
  ],
  joinDate: "2024-01-15",
};

export const users: User[] = [
  currentUser,
  {
    id: "user-2",
    username: "vibeQueen",
    displayName: "Sarah Miller",
    avatar: "https://i.pravatar.cc/150?img=23",
    vibePoints: 4200,
    vibeCredits: 16,
    badges: [],
    joinDate: "2023-11-08",
  },
  {
    id: "user-3",
    username: "zingMaster",
    displayName: "James Wilson",
    avatar: "https://i.pravatar.cc/150?img=59",
    vibePoints: 3100,
    vibeCredits: 12,
    badges: [],
    joinDate: "2024-02-20",
  },
  {
    id: "user-4",
    username: "vibeFlow",
    displayName: "Emma Davis",
    avatar: "https://i.pravatar.cc/150?img=5",
    vibePoints: 2890,
    vibeCredits: 11,
    badges: [],
    joinDate: "2024-03-01",
  },
  {
    id: "user-5",
    username: "zonalKing",
    displayName: "Michael Brown",
    avatar: "https://i.pravatar.cc/150?img=12",
    vibePoints: 5200,
    vibeCredits: 20,
    badges: [],
    joinDate: "2023-09-15",
  }
];

export const stories: Story[] = [
  {
    id: "story-1",
    user: users[1],
    image: "https://picsum.photos/400/700?random=1",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
    viewed: false,
  },
  {
    id: "story-2",
    user: users[2],
    image: "https://picsum.photos/400/700?random=2",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(),
    viewed: true,
  },
  {
    id: "story-3",
    user: users[3],
    image: "https://picsum.photos/400/700?random=3",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 6).toISOString(),
    viewed: false,
  },
  {
    id: "story-4",
    user: users[4],
    image: "https://picsum.photos/400/700?random=4",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 8).toISOString(),
    viewed: false,
  }
];

export const posts: Post[] = [
  {
    id: "post-1",
    user: users[1],
    content: "Just unlocked the Shopaholic badge! The new themes are 🔥",
    image: "https://picsum.photos/800/600?random=10",
    createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 23).toISOString(),
    likes: 42,
    comments: 12,
    reposts: 5,
    isLiked: true,
    allowRepost: true,
  },
  {
    id: "post-2",
    user: users[2],
    content: "Can't wait for this weekend's Zonal Zing Room! Who else is joining? #ZonalZing #WeekendVibes",
    image: undefined,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
    expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 22).toISOString(),
    likes: 28,
    comments: 7,
    reposts: 2,
    isLiked: false,
    allowRepost: true,
  },
  {
    id: "post-3",
    user: users[3],
    content: "Just earned 500 Vibe Points in one day! The AI Assist feature is a game changer when I'm busy working.",
    image: "https://picsum.photos/800/600?random=11",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
    expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 19).toISOString(),
    likes: 76,
    comments: 23,
    reposts: 8,
    isLiked: false,
    allowRepost: false,
  },
  {
    id: "post-4",
    user: users[4],
    content: "Just hit the #1 spot on the weekly leaderboard! Thank you all for the support and engagement. Keep the vibes going! 🏆",
    image: "https://picsum.photos/800/600?random=12",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 8).toISOString(),
    expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 16).toISOString(),
    likes: 124,
    comments: 32,
    reposts: 15,
    isLiked: true,
    allowRepost: true,
  }
];

export const allBadges: Badge[] = [
  {
    id: "badge-daily",
    name: "Daily Viber",
    icon: "🔁",
    description: "Login 7 days in a row",
    achieved: true,
  },
  {
    id: "badge-master",
    name: "Vibe Master",
    icon: "🧙",
    description: "Reach 5000 Vibe Points",
    achieved: false,
    progress: 2750,
    maxProgress: 5000,
  },
  {
    id: "badge-shopaholic",
    name: "Shopaholic",
    icon: "🛍️",
    description: "Buy 5+ shop items",
    achieved: false,
    progress: 2,
    maxProgress: 5,
  },
  {
    id: "badge-video",
    name: "Video Zinger",
    icon: "🎥",
    description: "Join a weekend video call",
    achieved: false,
  },
  {
    id: "badge-zonal",
    name: "Zonal Enthusiast",
    icon: "🌐",
    description: "Enter Zonal Zing Room (Sunday only)",
    achieved: false,
  },
  {
    id: "badge-weekly",
    name: "Weekly Champion",
    icon: "🥇",
    description: "#1 on weekly leaderboard",
    achieved: false,
  },
  {
    id: "badge-top10",
    name: "Top 10 Weekly",
    icon: "🥈",
    description: "Rank #2-10 weekly",
    achieved: true,
  },
  {
    id: "badge-monthly",
    name: "Monthly Legend",
    icon: "🏆",
    description: "#1 on monthly leaderboard",
    achieved: false,
  }
];

export const shopItems: ShopItem[] = [
  {
    id: "shop-1",
    name: "Neon Glow Theme",
    description: "Make your profile pop with this vibrant neon theme",
    image: "https://picsum.photos/300/200?random=20",
    price: 15,
    category: "theme",
  },
  {
    id: "shop-2",
    name: "Golden Frame",
    description: "Premium golden frame for your profile picture",
    image: "https://picsum.photos/300/200?random=21",
    price: 20,
    category: "frame",
  },
  {
    id: "shop-3",
    name: "Fire Reaction",
    description: "React with fire to any post (VIP reaction)",
    image: "https://picsum.photos/300/200?random=22",
    price: 200,
    category: "reaction",
  },
  {
    id: "shop-4",
    name: "Cosmic Theme",
    description: "Transform your profile with space-inspired visuals",
    image: "https://picsum.photos/300/200?random=23",
    price: 18,
    category: "theme",
  },
  {
    id: "shop-5",
    name: "Diamond Frame",
    description: "Ultra-premium diamond frame for your profile picture",
    image: "https://picsum.photos/300/200?random=24",
    price: 30,
    category: "frame",
  },
  {
    id: "shop-6",
    name: "Mind Blown Reaction",
    description: "Show your astonishment with this VIP reaction",
    image: "https://picsum.photos/300/200?random=25",
    price: 250,
    category: "reaction",
  }
];

export const weeklyLeaderboard: LeaderboardUser[] = [
  {
    ...users[4],
    rank: 1,
    previousRank: 3,
  },
  {
    ...users[1],
    rank: 2,
    previousRank: 1,
  },
  {
    ...users[2],
    rank: 3,
    previousRank: 5,
  },
  {
    ...users[3],
    rank: 4,
    previousRank: 4,
  },
  {
    ...users[0],
    rank: 5,
    previousRank: 2,
  }
];

export const monthlyLeaderboard: LeaderboardUser[] = [
  {
    ...users[1],
    rank: 1,
    previousRank: 2,
  },
  {
    ...users[4],
    rank: 2,
    previousRank: 1,
  },
  {
    ...users[0],
    rank: 3,
    previousRank: 4,
  },
  {
    ...users[2],
    rank: 4,
    previousRank: 3,
  },
  {
    ...users[3],
    rank: 5,
    previousRank: 6,
  }
];
