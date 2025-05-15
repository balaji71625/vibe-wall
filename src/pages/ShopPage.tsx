
import { shopItems, currentUser } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VibeCounter from "@/components/ui/vibeCounter";
import { toast } from "sonner";
import { ShoppingBag } from "lucide-react";

const ShopPage = () => {
  const handleBuyItem = (itemName: string, price: number) => {
    if (currentUser.vibeCredits < price) {
      toast.error("Not enough Vibe Credits! Keep earning Vibe Points.");
      return;
    }
    
    toast.success(`You purchased ${itemName}!`);
  };
  
  // Group items by category
  const themes = shopItems.filter(item => item.category === "theme");
  const frames = shopItems.filter(item => item.category === "frame");
  const reactions = shopItems.filter(item => item.category === "reaction");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Vibe Shop</h1>
          <p className="text-sm text-gray-500">Unlock exclusive items with your Vibe Credits</p>
        </div>
        <VibeCounter 
          points={currentUser.vibePoints} 
          credits={currentUser.vibeCredits} 
        />
      </div>
      
      {/* Shop Items */}
      <Tabs defaultValue="themes">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="themes">Themes</TabsTrigger>
          <TabsTrigger value="frames">Frames</TabsTrigger>
          <TabsTrigger value="reactions">Reactions</TabsTrigger>
        </TabsList>
        
        <TabsContent value="themes" className="space-y-4">
          {themes.map((item) => (
            <Card key={item.id}>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-lg mb-2"
                />
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex items-center">
                  <span className="text-xs">💎</span>
                  <span className="font-bold ml-1">{item.price}</span>
                </div>
                <Button 
                  size="sm" 
                  onClick={() => handleBuyItem(item.name, item.price)}
                  className="bg-gradient-to-r from-vibe-purple to-vibe-pink"
                >
                  Buy Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="frames" className="space-y-4">
          {frames.map((item) => (
            <Card key={item.id}>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-lg mb-2"
                />
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex items-center">
                  <span className="text-xs">💎</span>
                  <span className="font-bold ml-1">{item.price}</span>
                </div>
                <Button 
                  size="sm" 
                  onClick={() => handleBuyItem(item.name, item.price)}
                  className="bg-gradient-to-r from-vibe-purple to-vibe-pink"
                >
                  Buy Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="reactions" className="space-y-4">
          {reactions.map((item) => (
            <Card key={item.id}>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-lg mb-2"
                />
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex items-center">
                  <span className="text-xs">💎</span>
                  <span className="font-bold ml-1">{item.price}</span>
                </div>
                <Button 
                  size="sm" 
                  onClick={() => handleBuyItem(item.name, item.price)}
                  className="bg-gradient-to-r from-vibe-purple to-vibe-pink"
                >
                  Buy Now
                </Button>
              </CardFooter>
            </Card>
          ))}
          
          {reactions.length === 0 && (
            <div className="text-center py-12">
              <ShoppingBag className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-lg font-medium">No items available</h3>
              <p className="mt-1 text-sm text-gray-500">
                Check back soon for new reactions!
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ShopPage;
