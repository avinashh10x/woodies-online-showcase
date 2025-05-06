
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative py-16 md:py-24 px-6 md:px-12 lg:px-24 overflow-hidden hero-pattern">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-wood/10 rounded-full">
              <p className="text-wood-dark font-semibold">Wood Craftsmanship & Innovation</p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground">
              Transforming <span className="text-wood-dark">Wood</span> into Extraordinary Pieces
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              We create beautiful wooden decoratives and innovative woodworking tools that bring the natural beauty of wood into your home and workshop.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-wood hover:bg-wood-dark text-white text-lg py-6 px-8">
                Explore Products
              </Button>
              <Button variant="outline" className="border-wood text-wood hover:bg-wood/5 text-lg py-6 px-8">
                Learn About Us
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-wood/20 to-wood-dark/40 mix-blend-overlay"></div>
            <img 
              src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&q=80" 
              alt="Beautiful wooden craftsmanship" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
