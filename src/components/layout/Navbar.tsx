
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Home, ShoppingBag, Trophy, User, Settings } from "lucide-react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/shop", icon: ShoppingBag, label: "Shop" },
    { path: "/leaderboard", icon: Trophy, label: "Leaderboard" },
    { path: "/profile", icon: User, label: "Profile" },
    { path: "/settings", icon: Settings, label: "Settings" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 p-2 sm:p-3 dark:bg-gray-900 dark:border-gray-700">
      <div className="flex justify-between items-center max-w-lg mx-auto">
        {navItems.map((item) => (
          <Link to={item.path} key={item.path} className="flex-1">
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "w-full flex flex-col items-center justify-center gap-1 py-2 h-auto",
                isActive(item.path)
                  ? "text-vibe-purple bg-vibe-light"
                  : "text-gray-500 hover:text-vibe-purple hover:bg-vibe-light/50"
              )}
            >
              <item.icon size={20} />
              <span className="text-xs">{item.label}</span>
            </Button>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
