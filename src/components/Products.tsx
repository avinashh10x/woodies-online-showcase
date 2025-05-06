
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

// Sample products data
const products = [
  {
    id: 1,
    name: "Handcrafted Wooden Bowl",
    description: "Beautifully handcrafted wooden bowl made from sustainable maple wood.",
    category: "decorative",
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Precision Router Jig",
    description: "Innovative router jig for perfect dovetail joints every time.",
    category: "tool",
    image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Wooden Wall Clock",
    description: "Modern wall clock with handcrafted wooden frame and silent mechanism.",
    category: "decorative",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    name: "Ergonomic Hand Planer",
    description: "Revolutionary hand planer design for comfortable, precise woodworking.",
    category: "tool",
    image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&q=80"
  }
];

const Products = () => {
  return (
    <section id="products" className="py-16 md:py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Featured <span className="text-wood-dark">Products</span>
          </h2>
          <div className="w-20 h-1 bg-wood mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our selection of handcrafted wooden decoratives and innovative woodworking tools
          </p>
        </div>

        <div className="flex flex-wrap mb-8 justify-center gap-4">
          <Button variant="outline" className="border-wood text-wood hover:bg-wood/5">
            All Products
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-wood">
            Decoratives
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-wood">
            Tools & Equipment
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-wood">
            New Arrivals
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden transition-all hover:shadow-lg">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-2">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    product.category === 'decorative' ? 'bg-wood/10 text-wood-dark' : 'bg-tool/10 text-tool-dark'
                  }`}>
                    {product.category === 'decorative' ? 'Decorative' : 'Tool'}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm">{product.description}</p>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button className="w-full bg-wood hover:bg-wood-dark text-white">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-wood text-wood hover:bg-wood/5">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
