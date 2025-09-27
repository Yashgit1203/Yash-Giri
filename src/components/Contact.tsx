import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, MapPin, Phone, Send, Coffee, MessageCircle, Calendar } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner@2.0.3";
import emailjs from "emailjs-com";

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs.send(
    "service_fib152n",   // e.g., 'service_xxxxxx'
    "template_0nq4u6e",  // e.g., 'template_xxxxxx'
    formData,            // { name, email, message }
    "SimEg89EpxcN-9sWb"    // e.g., 'user_xxxxxx'
  ).then(() => {
    toast.success("Message sent! I'll reply soon.");
    setFormData({ name: "", email: "", message: "" });
  }).catch(() => {
    toast.error("Something went wrong. Please try again later.");
  });
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-background to-background"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <MessageCircle size={16} className="text-primary" />
              <span className="text-sm">Let's create something amazing</span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-6">
              Ready to
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Start a Conversation?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether it's a groundbreaking app idea, a challenging problem to solve, 
              or just a chat over coffee—I'm all ears.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-16">
            {/* Contact Methods */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h3 className="text-2xl mb-6">Ways to Connect</h3>
                <p className="text-lg text-muted-foreground mb-8">
                  I believe the best projects start with great conversations. 
                  Choose your preferred way to reach out, and let's discuss how 
                  we can bring your ideas to life.
                </p>
              </div>

              <div className="space-y-6">
                <div className="group p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">Email Me</h4>
                      <p className="text-sm text-muted-foreground">Usually respond within 24 hours</p>
                    </div>
                  </div>
                  <p className="text-primary">yg63852@gmail.com</p>
                </div>

                <div className="group p-6 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-2xl border border-secondary/20 hover:border-secondary/40 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="text-secondary-foreground" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">Call Me</h4>
                      <p className="text-sm text-muted-foreground">Available during IST business hours</p>
                    </div>
                  </div>
                  <p className="text-secondary-foreground">+91 9373682996</p>
                </div>

                <div className="group p-6 bg-gradient-to-br from-green-500/5 to-green-500/10 rounded-2xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Coffee className="text-green-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">Coffee Chat</h4>
                      <p className="text-sm text-muted-foreground">In-person or virtual—I'm flexible</p>
                    </div>
                  </div>
                  <p className="text-green-600"></p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 pt-8">
                <div className="text-center p-4 bg-background/50 backdrop-blur-sm rounded-xl border">
                  <div className="text-2xl text-primary mb-1">&lt; 24h</div>
                  <div className="text-sm text-muted-foreground">Response time</div>
                </div>
                <div className="text-center p-4 bg-background/50 backdrop-blur-sm rounded-xl border">
                  <div className="text-2xl text-primary mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Reply rate</div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-background/50 backdrop-blur-sm rounded-3xl border p-8 lg:p-12">
                <div className="mb-8">
                  <h3 className="text-2xl mb-2">Send Me a Message</h3>
                  <p className="text-muted-foreground">
                    Tell me about your project, share your ideas, or just say hello. 
                    I read every message personally.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">
                        What should I call you?
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your awesome name"
                        className="h-12 rounded-xl border-border/50 focus:border-primary transition-colors"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        How can I reach you?
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="h-12 rounded-xl border-border/50 focus:border-primary transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      What's on your mind?
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, your challenges, or just say hi! I love hearing about new ideas and interesting problems to solve..."
                      rows={6}
                      className="rounded-xl border-border/50 focus:border-primary transition-colors resize-none"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full h-12 text-base bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary group transition-all duration-300"
                  >
                    <Send size={18} className="mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>

                <div className="mt-8 pt-8 border-t border-border/50">
                  <p className="text-sm text-muted-foreground text-center">
                    🚀 Expect a thoughtful response, not a template. 
                    <br />
                    I read every message and respond personally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}