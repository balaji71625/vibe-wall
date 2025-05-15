
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

const AuthForm = () => {
  const [activeTab, setActiveTab] = useState<string>("signin");

  return (
    <Card className="w-full max-w-md border-2 border-vibe-purple/20">
      <CardHeader className="space-y-2 text-center">
        <CardTitle className="text-3xl font-bold bg-gradient-to-r from-vibe-purple to-vibe-pink bg-clip-text text-transparent">
          Vibe Wall
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Join the vibrant community where your engagement is rewarded
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="signin" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-2 mb-6">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <SignInForm onSuccess={() => console.log("Sign in successful")} />
          </TabsContent>
          <TabsContent value="signup">
            <SignUpForm onSuccess={() => setActiveTab("signin")} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AuthForm;
