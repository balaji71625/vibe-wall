
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { toast } from "sonner";

const AIAssistant = () => {
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSendMessage = () => {
    if (!message.trim()) {
      toast.error("Please enter a message");
      return;
    }
    
    setIsSending(true);
    
    // Mock AI response delay
    setTimeout(() => {
      setIsSending(false);
      setMessage("");
      toast.success("Your message was sent to AI Assistant");
      
      // Mock response after a short delay
      setTimeout(() => {
        toast("AI Assistant: I'll respond to your friends while you're busy!");
      }, 1000);
    }, 1200);
  };

  return (
    <Card className="border border-dare-primary/30 bg-gradient-to-br from-transparent to-dare-primary/5 mb-6">
      <CardHeader className="pb-2 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <CardTitle className="flex items-center justify-between text-lg">
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-dare-primary to-vibe-pink text-white p-1.5 rounded-md mr-2">
              🤖
            </div>
            AI Assistant
          </div>
          <div className="text-sm text-muted-foreground">
            {isExpanded ? "▲" : "▼"}
          </div>
        </CardTitle>
      </CardHeader>
      
      {isExpanded && (
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Your AI Assistant can chat with friends when you're busy. Just enter what you're doing, and the AI will respond appropriately.
          </p>
          
          <div className="flex gap-2">
            <Input
              placeholder="I'm studying for my exam..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1"
            />
            <Button 
              onClick={handleSendMessage}
              className="bg-gradient-to-r from-dare-primary to-vibe-pink"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Enable"}
            </Button>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default AIAssistant;

