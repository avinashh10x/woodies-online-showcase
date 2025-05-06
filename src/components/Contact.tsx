
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    toast({
      title: "Message sent!",
      description: "Thank you for your message. We'll get back to you shortly.",
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Get in <span className="text-wood-dark">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-wood mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions or interested in our products? Reach out to us!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-2">Address</h4>
                <p className="text-muted-foreground">
                  123 Craftsman Lane<br />
                  Woodville, WD 12345<br />
                  United States
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Email</h4>
                <p className="text-muted-foreground">info@woodiesonline.com</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Phone</h4>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Hours</h4>
                <p className="text-muted-foreground">
                  Monday-Friday: 9am - 6pm<br />
                  Saturday: 10am - 4pm<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-serif font-bold mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="your@email.com" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input id="subject" placeholder="How can we help?" required />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Your message..." 
                  required
                  rows={5} 
                />
              </div>

              <Button type="submit" className="w-full bg-wood hover:bg-wood-dark text-white">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
