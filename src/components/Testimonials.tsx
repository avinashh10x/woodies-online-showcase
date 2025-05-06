
import { Card, CardContent } from "@/components/ui/card";

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Interior Designer",
    quote: "The wooden decoratives from Woodies Online have transformed my client projects. The quality and craftsmanship are exceptional.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Professional Woodworker",
    quote: "Their innovative woodworking tools have revolutionized my workshop. The ergonomic designs make my work faster and more precise.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    id: 3,
    name: "Emma Wilson",
    title: "Home Decor Enthusiast",
    quote: "I've purchased several items from Woodies Online and each one has been a beautiful addition to my home. Highly recommend!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            What Our <span className="text-wood-dark">Customers</span> Say
          </h2>
          <div className="w-20 h-1 bg-wood mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from our satisfied customers about their experience with Woodies Online products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white shadow-md">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
                <div className="text-wood-dark text-4xl font-serif mb-2">"</div>
                <p className="text-muted-foreground italic">
                  {testimonial.quote}
                </p>
                <div className="text-yellow-500 mt-4 flex">
                  ★★★★★
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
