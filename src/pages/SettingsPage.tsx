
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const SettingsPage = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [activityStatus, setActivityStatus] = useState(true);
  
  const handleLogout = () => {
    localStorage.removeItem("vibe-wall-user");
    toast.success("You've been logged out");
    navigate("/auth");
  };
  
  return (
    <div className="space-y-6 bg-gradient-to-br from-dare-dark to-dare-tertiary p-6 rounded-xl text-white">
      <div>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-dare-primary to-vibe-pink bg-clip-text text-transparent">Settings</h1>
        <p className="text-sm text-gray-300 mt-1">Manage your account preferences</p>
      </div>
      
      <div className="space-y-6 divide-y divide-white/10">
        {/* Account Settings */}
        <div className="pt-6">
          <h2 className="text-lg font-semibold mb-4 text-gradient">Account</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="notifications" className="text-white">Push Notifications</Label>
                <p className="text-xs text-gray-300">Receive notifications for new activity</p>
              </div>
              <Switch 
                id="notifications" 
                checked={notifications} 
                onCheckedChange={setNotifications} 
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="darkMode" className="text-white">Dark Mode</Label>
                <p className="text-xs text-gray-300">Use dark theme throughout the app</p>
              </div>
              <Switch 
                id="darkMode" 
                checked={darkMode} 
                onCheckedChange={setDarkMode} 
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="activityStatus" className="text-white">Activity Status</Label>
                <p className="text-xs text-gray-300">Show when you're active</p>
              </div>
              <Switch 
                id="activityStatus" 
                checked={activityStatus} 
                onCheckedChange={setActivityStatus} 
              />
            </div>
          </div>
        </div>
        
        {/* Privacy Settings */}
        <div className="pt-6">
          <h2 className="text-lg font-semibold mb-4 text-gradient">Privacy & Security</h2>
          
          <div className="space-y-4">
            <Button variant="outline" className="w-full justify-start border-white/10 hover:bg-white/5 text-white">
              Change Password
            </Button>
            
            <Button variant="outline" className="w-full justify-start border-white/10 hover:bg-white/5 text-white">
              Two-Factor Authentication
            </Button>
            
            <Button variant="outline" className="w-full justify-start border-white/10 hover:bg-white/5 text-white">
              Blocked Accounts
            </Button>
          </div>
        </div>
        
        {/* About */}
        <div className="pt-6">
          <h2 className="text-lg font-semibold mb-4 text-gradient">About</h2>
          
          <div className="space-y-4">
            <Button variant="outline" className="w-full justify-start border-white/10 hover:bg-white/5 text-white">
              Terms of Service
            </Button>
            
            <Button variant="outline" className="w-full justify-start border-white/10 hover:bg-white/5 text-white">
              Privacy Policy
            </Button>
            
            <Button variant="outline" className="w-full justify-start border-white/10 hover:bg-white/5 text-white">
              Help Center
            </Button>
          </div>
        </div>
        
        {/* Danger Zone */}
        <div className="pt-6">
          <h2 className="text-lg font-semibold mb-4 text-destructive">Danger Zone</h2>
          
          <div className="space-y-4">
            <Button 
              variant="destructive" 
              className="w-full"
              onClick={handleLogout}
            >
              Log Out
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full border-destructive text-destructive hover:bg-destructive/10"
            >
              Delete Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
