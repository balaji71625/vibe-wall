
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "sonner";
import { LogOut } from "lucide-react";

const SettingsPage = () => {
  const [notifications, setNotifications] = useState({
    likes: true,
    comments: true,
    mentions: true,
    directMessages: true,
    weekendEvents: true,
  });
  
  const [aiAssist, setAiAssist] = useState({
    enabled: false,
    responseLevel: "casual",
  });
  
  const handleLogout = () => {
    localStorage.removeItem("vibe-wall-user");
    toast.success("You've been logged out");
    window.location.href = "/auth";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-sm text-gray-500">Manage your account and app preferences</p>
      </div>
      
      {/* Settings */}
      <div className="space-y-6">
        {/* Notifications */}
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>
              Control which notifications you receive
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="likes" className="flex-1">
                Likes and reactions
              </Label>
              <Switch
                id="likes"
                checked={notifications.likes}
                onCheckedChange={(checked) =>
                  setNotifications({ ...notifications, likes: checked })
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="comments" className="flex-1">
                Comments on your posts
              </Label>
              <Switch
                id="comments"
                checked={notifications.comments}
                onCheckedChange={(checked) =>
                  setNotifications({ ...notifications, comments: checked })
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="mentions" className="flex-1">
                Mentions and tags
              </Label>
              <Switch
                id="mentions"
                checked={notifications.mentions}
                onCheckedChange={(checked) =>
                  setNotifications({ ...notifications, mentions: checked })
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="directMessages" className="flex-1">
                Direct messages
              </Label>
              <Switch
                id="directMessages"
                checked={notifications.directMessages}
                onCheckedChange={(checked) =>
                  setNotifications({ ...notifications, directMessages: checked })
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="weekendEvents" className="flex-1">
                Weekend Zonal Zing events
              </Label>
              <Switch
                id="weekendEvents"
                checked={notifications.weekendEvents}
                onCheckedChange={(checked) =>
                  setNotifications({ ...notifications, weekendEvents: checked })
                }
              />
            </div>
          </CardContent>
        </Card>
        
        {/* AI Assist */}
        <Card>
          <CardHeader>
            <CardTitle>AI Assist Feature</CardTitle>
            <CardDescription>
              Let AI chat with friends when you're busy
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="aiAssist" className="flex-1">
                Enable AI Assist
              </Label>
              <Switch
                id="aiAssist"
                checked={aiAssist.enabled}
                onCheckedChange={(checked) =>
                  setAiAssist({ ...aiAssist, enabled: checked })
                }
              />
            </div>
            
            {aiAssist.enabled && (
              <div className="pt-2">
                <Label className="mb-2 block">AI Response Style</Label>
                <div className="grid grid-cols-3 gap-2">
                  <Button
                    variant={aiAssist.responseLevel === "casual" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setAiAssist({ ...aiAssist, responseLevel: "casual" })}
                    className={aiAssist.responseLevel === "casual" ? "bg-vibe-purple" : ""}
                  >
                    Casual
                  </Button>
                  <Button
                    variant={aiAssist.responseLevel === "friendly" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setAiAssist({ ...aiAssist, responseLevel: "friendly" })}
                    className={aiAssist.responseLevel === "friendly" ? "bg-vibe-purple" : ""}
                  >
                    Friendly
                  </Button>
                  <Button
                    variant={aiAssist.responseLevel === "professional" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setAiAssist({ ...aiAssist, responseLevel: "professional" })}
                    className={aiAssist.responseLevel === "professional" ? "bg-vibe-purple" : ""}
                  >
                    Pro
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
        
        {/* FAQ */}
        <Card>
          <CardHeader>
            <CardTitle>FAQ</CardTitle>
            <CardDescription>
              Frequently asked questions about Vibe Wall
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is the Zonal Zing Room?</AccordionTrigger>
                <AccordionContent>
                  The Zonal Zing Room is an exclusive weekend-only feature that offers special interactions and bonus Vibe Points. It's available every Saturday and requires specific badges to enter.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How do I earn Vibe Points?</AccordionTrigger>
                <AccordionContent>
                  You can earn Vibe Points through regular engagement - liking posts, commenting, sharing content, and creating your own posts. Special events and weekend participation offer bonus points.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What can I buy with Vibe Credits?</AccordionTrigger>
                <AccordionContent>
                  Vibe Credits can be used to purchase themes for your profile, special frames for your avatar, and exclusive reactions for interacting with posts.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How does the AI Assist feature work?</AccordionTrigger>
                <AccordionContent>
                  When enabled, AI Assist can chat with your friends on your behalf when you're busy. It learns your communication style over time, and friends will always be notified they're chatting with AI.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
        
        {/* Account Actions */}
        <div className="pt-4">
          <Button 
            variant="destructive" 
            className="w-full flex gap-2"
            onClick={handleLogout}
          >
            <LogOut size={16} /> Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
