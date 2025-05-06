
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            About <span className="text-wood-dark">Woodies Online</span>
          </h2>
          <div className="w-20 h-1 bg-wood mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-lg overflow-hidden shadow-xl h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80" 
              alt="Our workshop" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
              Our Story
            </h3>
            <p className="text-muted-foreground">
              Woodies Online started with a passion for wood craftsmanship and a desire to innovate in an age-old industry. 
              Founded in 2020, we began as a small workshop creating custom wooden home decor items.
            </p>
            <p className="text-muted-foreground">
              As our reputation for quality and craftsmanship grew, we expanded into designing our own woodworking tools, combining 
              traditional techniques with modern innovation to create equipment that works better for both professionals and hobbyists.
            </p>
            <p className="text-muted-foreground">
              Today, we're proud to offer a curated selection of both beautiful wooden decoratives and innovative woodworking tools 
              that celebrate the natural beauty and versatility of wood.
            </p>
            <Button className="bg-wood hover:bg-wood-dark text-white mt-4">
              Learn More
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-wood/20 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl font-serif font-bold text-wood-dark">01</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Quality Materials</h3>
            <p className="text-muted-foreground">We source the finest sustainable woods and materials for all our products.</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-wood/20 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl font-serif font-bold text-wood-dark">02</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Handcrafted Care</h3>
            <p className="text-muted-foreground">Every piece is handcrafted with attention to detail and quality craftsmanship.</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-wood/20 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl font-serif font-bold text-wood-dark">03</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Innovative Designs</h3>
            <p className="text-muted-foreground">We combine traditional woodworking with modern innovation in all our products.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
