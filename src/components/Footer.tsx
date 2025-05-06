
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Footer = () => {
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would subscribe the user to a newsletter
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-wood-dark text-white">
      <div className="max-w-7xl mx-auto py-16 px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <a href="/" className="text-2xl font-serif font-bold text-white mb-4 inline-block">
              Woodies<span className="text-wood-light">Online</span>
            </a>
            <p className="text-white/80 max-w-md mt-4">
              Bringing the natural beauty of wood into your home with handcrafted decoratives and innovative woodworking tools.
            </p>
            <form onSubmit={handleSubscribe} className="mt-6 flex gap-2">
              <Input 
                placeholder="Your email address" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                required
              />
              <Button type="submit" className="bg-white text-wood-dark hover:bg-white/90">
                Subscribe
              </Button>
            </form>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-white/80 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#products" className="text-white/80 hover:text-white transition-colors">Products</a></li>
              <li><a href="#testimonials" className="text-white/80 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <address className="not-italic text-white/80">
              <p className="mb-3">123 Craftsman Lane</p>
              <p className="mb-3">Woodville, WD 12345</p>
              <p className="mb-3">Email: info@woodiesonline.com</p>
              <p className="mb-3">Phone: +1 (555) 123-4567</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70">
            © {currentYear} Woodies Online. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-white/70 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-white/70 hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
