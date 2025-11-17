import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wine, UtensilsCrossed, Sparkles } from "lucide-react";
import { toast } from "sonner";

interface AlcoholItem {
  id: string;
  name: string;
  category: string;
  brand: string;
  price_30ml: number;
  price_60ml: number;
  price_90ml: number;
  price_180ml: number;
  price_bottle: number;
  available: boolean;
}

interface FoodItem {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  vegetarian: boolean;
  available: boolean;
}

const Menu = () => {
  const [alcoholItems, setAlcoholItems] = useState<AlcoholItem[]>([]);
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    try {
      const [alcoholRes, foodRes] = await Promise.all([
        supabase.from("alcohol").select("*").eq("available", true).order("category", { ascending: true }),
        supabase.from("food_menu").select("*").eq("available", true).order("category", { ascending: true }),
      ]);

      if (alcoholRes.error) throw alcoholRes.error;
      if (foodRes.error) throw foodRes.error;

      setAlcoholItems(alcoholRes.data || []);
      setFoodItems(foodRes.data || []);
    } catch (error) {
      console.error("Error fetching menu:", error);
      toast.error("Failed to load menu");
    } finally {
      setLoading(false);
    }
  };

  const groupByCategory = <T extends { category: string }>(items: T[]): Record<string, T[]> => {
    return items.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {} as Record<string, T[]>);
  };

  const alcoholByCategory = groupByCategory(alcoholItems);
  const foodByCategory = groupByCategory(foodItems);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Sparkles className="w-8 h-8 text-primary animate-pulse" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary mb-2 flex items-center justify-center gap-3">
            <Sparkles className="w-10 h-10" />
            Premium Bar Menu
          </h1>
          <p className="text-muted-foreground text-lg">Hinjewadi, Pune</p>
        </div>

        <Tabs defaultValue="alcohol" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="alcohol" className="gap-2">
              <Wine className="w-4 h-4" />
              Beverages
            </TabsTrigger>
            <TabsTrigger value="food" className="gap-2">
              <UtensilsCrossed className="w-4 h-4" />
              Food
            </TabsTrigger>
          </TabsList>

          <TabsContent value="alcohol" className="space-y-8">
            {Object.entries(alcoholByCategory).map(([category, items]) => (
              <div key={category}>
                <h2 className="text-3xl font-bold text-primary mb-6 border-b border-border pb-2">
                  {category}
                </h2>
                <div className="grid gap-4">
                  {items.map((item: AlcoholItem) => (
                    <Card key={item.id} className="border-border/50 bg-card hover:border-primary/50 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-foreground mb-1">{item.name}</h3>
                            {item.brand && (
                              <p className="text-muted-foreground text-sm">{item.brand}</p>
                            )}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                          {item.price_30ml && (
                            <div className="text-center p-3 bg-secondary rounded-lg">
                              <p className="text-xs text-muted-foreground mb-1">30ml</p>
                              <p className="text-lg font-bold text-primary">₹{item.price_30ml}</p>
                            </div>
                          )}
                          {item.price_60ml && (
                            <div className="text-center p-3 bg-secondary rounded-lg">
                              <p className="text-xs text-muted-foreground mb-1">60ml</p>
                              <p className="text-lg font-bold text-primary">₹{item.price_60ml}</p>
                            </div>
                          )}
                          {item.price_90ml && (
                            <div className="text-center p-3 bg-secondary rounded-lg">
                              <p className="text-xs text-muted-foreground mb-1">90ml</p>
                              <p className="text-lg font-bold text-primary">₹{item.price_90ml}</p>
                            </div>
                          )}
                          {item.price_180ml && (
                            <div className="text-center p-3 bg-secondary rounded-lg">
                              <p className="text-xs text-muted-foreground mb-1">180ml</p>
                              <p className="text-lg font-bold text-primary">₹{item.price_180ml}</p>
                            </div>
                          )}
                          {item.price_bottle && (
                            <div className="text-center p-3 bg-secondary rounded-lg">
                              <p className="text-xs text-muted-foreground mb-1">Bottle</p>
                              <p className="text-lg font-bold text-primary">₹{item.price_bottle}</p>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="food" className="space-y-8">
            {Object.entries(foodByCategory).map(([category, items]) => (
              <div key={category}>
                <h2 className="text-3xl font-bold text-primary mb-6 border-b border-border pb-2">
                  {category}
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {items.map((item: FoodItem) => (
                    <Card key={item.id} className="border-border/50 bg-card hover:border-primary/50 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-foreground mb-1">{item.name}</h3>
                            {item.description && (
                              <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                            )}
                          </div>
                          <p className="text-2xl font-bold text-primary ml-4">₹{item.price}</p>
                        </div>
                        {item.vegetarian && (
                          <Badge variant="secondary" className="text-xs">
                            🌱 Vegetarian
                          </Badge>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Menu;
