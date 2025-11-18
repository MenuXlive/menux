import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Eye, ShieldCheck, Star, Sparkles, Zap, BarChart3, Globe, QrCode, Building2 } from "lucide-react";

const Index = () => {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 bg-clip-text text-transparent">
          MenuX — Modern QR Menus
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto">
          Launch digital menus in minutes. Engage customers. Get insights.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link to="/auth">
            <Button className="rounded-full px-5 h-10 text-sm bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
              Start Free Trial
            </Button>
          </Link>
          <Link to="/menu">
            <Button variant="outline" className="rounded-full px-5 h-10 text-sm">
              View Menu
            </Button>
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-2 rounded-full bg-black/30 border border-border px-3 py-1 text-xs text-muted-foreground">
            <Star className="w-3 h-3 text-yellow-400" />
            Trusted by 1,000+ restaurants across India
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card className="bg-black/40 border-border/60">
          <CardContent className="p-5 text-center space-y-3">
            <div className="flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center">
                <Eye className="w-5 h-5 text-blue-400" />
              </div>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">View Menu</h3>
              <p className="text-xs text-muted-foreground">Browse our current menu as a customer</p>
            </div>
            <Link to="/menu">
              <Button className="w-full rounded-full h-10 text-sm">
                View Menu
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="bg-black/40 border-border/60">
          <CardContent className="p-5 text-center space-y-3">
            <div className="flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-blue-400" />
              </div>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">Admin Access</h3>
              <p className="text-xs text-muted-foreground">Manage menu items and settings</p>
            </div>
            <Link to="/auth">
              <Button className="w-full rounded-full h-10 text-sm" variant="secondary">
                Admin Login
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Small brand sparkle divider */}
      <div className="flex justify-center">
        <Sparkles className="w-4 h-4 text-primary" />
      </div>

      {/* How It Works */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center">How It Works</h2>
        <div className="rounded-xl border border-border/60 bg-black/30 p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { num: 1, title: "Print or Display", desc: "Click 'Print' to print QR codes or 'Download' to save as image for digital display" },
              { num: 2, title: "Place on Tables", desc: "Position the QR code on each table or at the bar entrance for easy customer access" },
              { num: 3, title: "Customers Scan", desc: "Customers scan the QR with their phone camera to instantly access the digital menu" },
              { num: 4, title: "Browse & Order", desc: "Customers browse items, add to cart, and place orders directly from their device" },
            ].map((s) => (
              <div key={s.num} className="rounded-lg border border-border/50 p-4 text-center">
                <div className="w-8 h-8 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center mx-auto mb-2 font-semibold">{s.num}</div>
                <h3 className="font-semibold mb-1">{s.title}</h3>
                <p className="text-xs text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { icon: Zap, title: "Instant Setup", desc: "Create menus and QR codes in minutes" },
          { icon: ShieldCheck, title: "Secure & Reliable", desc: "Built on Supabase with RLS" },
          { icon: BarChart3, title: "Analytics", desc: "Track scans, engagement and top items" },
          { icon: Building2, title: "Multi-Location", desc: "Manage menus across outlets" },
          { icon: Globe, title: "Multi-language", desc: "Serve customers in their language" },
          { icon: QrCode, title: "Beautiful QR", desc: "Brand-safe QR codes and landing" },
        ].map((f, i) => (
          <Card key={i} className="bg-black/40 border-border/60">
            <CardContent className="p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-full bg-blue-600/20 flex items-center justify-center">
                  {(() => {
                    const Icon = f.icon as any;
                    return <Icon className="w-5 h-5 text-blue-400" />;
                  })()}
                </div>
                <h3 className="font-semibold">{f.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pricing */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { name: "FREEMIUM", price: "Best for getting started", bullets: ["1 menu", "50 scans/month", "Branding enabled"], cta: "Start Free", variant: "outline" },
            { name: "STARTER", price: "₹99/mo", bullets: ["3 menus", "Unlimited scans", "Remove branding"], cta: "Choose Starter", variant: "primary" },
            { name: "GRAND", price: "₹299/mo", bullets: ["All features", "Analytics", "Multi-location"], cta: "Choose Grand", variant: "secondary" },
            { name: "PRO", price: "₹599/mo", bullets: ["White-label", "API access", "Priority support"], cta: "Choose Pro", variant: "outline" },
          ].map((tier, i) => (
            <Card key={i} className="bg-black/40 border-border/60">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-lg font-semibold">{tier.name}</h3>
                <p className="text-sm text-muted-foreground">{tier.price}</p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  {tier.bullets.map((b, bi) => (<li key={bi}>{b}</li>))}
                </ul>
                <Button className={tier.variant === "primary" ? "bg-gradient-to-r from-purple-500 to-blue-500" : tier.variant === "secondary" ? "bg-blue-600" : ""} variant={tier.variant === "outline" ? "outline" : "default"}>
                  {tier.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
