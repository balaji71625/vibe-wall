
export interface User {
  id: string;
  username: string;
  displayName: string;
  avatar: string;
  vibePoints: number;
  vibeCredits: number;
  badges: Badge[];
  joinDate: string;
}

export interface Post {
  id: string;
  user: User;
  content: string;
  image?: string;
  createdAt: string;
  expiresAt: string;
  likes: number;
  comments: number;
  reposts: number;
  isLiked: boolean;
  allowRepost: boolean;
}

export interface Story {
  id: string;
  user: User;
  image: string;
  createdAt: string;
  viewed: boolean;
}

export interface Comment {
  id: string;
  user: User;
  content: string;
  createdAt: string;
  likes: number;
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
  achieved: boolean;
  progress?: number;
  maxProgress?: number;
}

export interface ShopItem {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: 'theme' | 'frame' | 'reaction';
}

export interface LeaderboardUser {
  id: string;
  username: string;
  displayName: string;
  avatar: string;
  vibePoints: number;
  rank: number;
  previousRank?: number;
}
