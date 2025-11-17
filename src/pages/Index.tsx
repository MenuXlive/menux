import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wine, Sparkles, ShieldCheck } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <div className="flex justify-center">
              <Wine className="w-20 h-20 text-primary animate-pulse" />
            </div>
            <h1 className="text-6xl font-bold text-primary flex items-center justify-center gap-3">
              <Sparkles className="w-12 h-12" />
              Premium Bar Menu
            </h1>
            <p className="text-2xl text-muted-foreground">Hinjewadi, Pune</p>
            <p className="text-lg text-foreground max-w-2xl mx-auto">
              Experience our exquisite collection of premium beverages and delicious cuisine
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/menu">
              <Button size="lg" className="text-lg px-8 py-6 gap-2">
                <Wine className="w-5 h-5" />
                View Menu
              </Button>
            </Link>
            <Link to="/auth">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 gap-2">
                <ShieldCheck className="w-5 h-5" />
                Admin Login
              </Button>
            </Link>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl">🍷</div>
              <h3 className="text-xl font-semibold text-primary">Premium Selection</h3>
              <p className="text-muted-foreground">Curated collection of finest spirits</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl">🍽️</div>
              <h3 className="text-xl font-semibold text-primary">Delicious Food</h3>
              <p className="text-muted-foreground">From starters to full course meals</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl">✨</div>
              <h3 className="text-xl font-semibold text-primary">Premium Experience</h3>
              <p className="text-muted-foreground">Elegant ambiance and service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
