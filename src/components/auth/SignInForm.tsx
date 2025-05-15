
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { toast } from "sonner";

interface SignInFormProps {
  onSuccess: () => void;
}

const SignInForm = ({ onSuccess }: SignInFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    
    setIsLoading(true);
    
    // Mock authentication delay
    setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem("vibe-wall-user", "authenticated");
      toast.success("Welcome back to Vibe Wall!");
      onSuccess();
      window.location.href = "/";
    }, 1500);
  };

  const handleGithubLogin = () => {
    setIsLoading(true);
    toast.info("Connecting to GitHub...");
    
    // Mock authentication delay
    setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem("vibe-wall-user", "authenticated");
      toast.success("Successfully signed in with GitHub!");
      onSuccess();
      window.location.href = "/";
    }, 1500);
  };
  
  const handleOrangeIdLogin = () => {
    setIsLoading(true);
    toast.info("Connecting to Orange ID...");
    
    // Mock authentication delay
    setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem("vibe-wall-user", "authenticated");
      toast.success("Successfully signed in with Orange ID!");
      onSuccess();
      window.location.href = "/";
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Password</Label>
          <a href="#" className="text-xs text-dare-primary hover:underline">
            Forgot password?
          </a>
        </div>
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <Button type="submit" className="w-full bg-gradient-to-r from-dare-primary to-vibe-pink" disabled={isLoading}>
        {isLoading ? "Signing in..." : "Sign In"}
      </Button>
      
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-3">
        <Button variant="outline" type="button" className="bg-background" onClick={handleGithubLogin} disabled={isLoading}>
          <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            />
          </svg>
          GitHub
        </Button>
        <Button variant="outline" type="button" className="bg-background" onClick={handleOrangeIdLogin} disabled={isLoading}>
          <svg className="mr-2 h-4 w-4 text-orange-500" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="currentColor" />
          </svg>
          Orange ID
        </Button>
      </div>
    </form>
  );
};

export default SignInForm;

