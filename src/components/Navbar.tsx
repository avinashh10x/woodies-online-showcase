
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-4 px-6 md:px-12 lg:px-24 w-full bg-white shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-serif font-bold text-wood-dark">
            Woodies<span className="text-wood">Online</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu />
          </Button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-foreground hover:text-wood-dark transition-colors">Home</a>
          <a href="#about" className="text-foreground hover:text-wood-dark transition-colors">About</a>
          <a href="#products" className="text-foreground hover:text-wood-dark transition-colors">Products</a>
          <a href="#testimonials" className="text-foreground hover:text-wood-dark transition-colors">Testimonials</a>
          <a href="#contact" className="text-foreground hover:text-wood-dark transition-colors">Contact</a>
          <Button className="bg-wood hover:bg-wood-dark text-white">Get in Touch</Button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-lg z-50 md:hidden">
            <div className="flex flex-col p-4 space-y-3">
              <a href="/" className="px-4 py-2 hover:bg-secondary rounded-md">Home</a>
              <a href="#about" className="px-4 py-2 hover:bg-secondary rounded-md">About</a>
              <a href="#products" className="px-4 py-2 hover:bg-secondary rounded-md">Products</a>
              <a href="#testimonials" className="px-4 py-2 hover:bg-secondary rounded-md">Testimonials</a>
              <a href="#contact" className="px-4 py-2 hover:bg-secondary rounded-md">Contact</a>
              <Button className="bg-wood hover:bg-wood-dark text-white w-full">Get in Touch</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
