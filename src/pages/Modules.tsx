
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Modules = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Modules Overview
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore all the powerful modules available in Mela360°
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-muted-foreground">
              Modules overview coming soon...
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Modules;
