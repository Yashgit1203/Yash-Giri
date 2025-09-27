import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Zap } from "lucide-react";
import { ImageWithFallback } from "./utils/ImageWithFallback";

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 text-primary/20">
        <Sparkles size={24} className="animate-bounce delay-300" />
      </div>
      <div className="absolute top-40 right-32 text-secondary/30">
        <Zap size={20} className="animate-bounce delay-700" />
      </div>
      <div className="absolute bottom-32 left-16 text-primary/25">
        <div className="w-3 h-3 bg-primary/40 rounded-full animate-ping"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Text Content - Asymmetric Layout */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Available for new opportunities
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight">
                  <span className="block">Hey, I'm</span>
                  <span className="block bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                    Yash Giri
                  </span>
                </h1>
                
                <div className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground space-y-2">
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <span>I build</span>
                    <div className="relative">
                      <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        digital experiences
                      </span>
                      <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary/60 to-secondary/60 rounded-full"></div>
                    </div>
                  </div>
                  <div className="text-lg md:text-xl text-muted-foreground/80">
                    that people actually want to use
                  </div>
                </div>
              </div>

              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-2xl">
                Full-stack developer who believes great software should feel like magic—invisible when it works, 
                impossible to ignore when it doesn't.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
                <Button 
                  onClick={scrollToProjects} 
                  size="lg" 
                  className="text-lg px-8 py-4 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary group transition-all duration-300"
                >
                  <span className="group-hover:scale-110 transition-transform">Explore My Work</span>
                </Button>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="icon" className="hover:scale-110 transition-all" asChild>
                    <a href="https://github.com/Yashgit1203" target="_blank" rel="noopener noreferrer">
                      <Github size={20} />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="hover:scale-110 transition-all" asChild>
                    <a href="https://www.linkedin.com/in/yash-giri-8307b622a/" target="_blank" rel="noopener noreferrer">
                      <Linkedin size={20} />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="hover:scale-110 transition-all" asChild>
                    <a href="mailto:yg63852@gmail.com">
                      <Mail size={20} />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Profile Image - Creative Layout */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main Image */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 rounded-3xl transform rotate-6"></div>
                  <div className="absolute inset-0 bg-gradient-to-tl from-secondary/20 via-secondary/10 to-primary/20 rounded-3xl transform -rotate-3"></div>
                  <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-background shadow-2xl">
                    <ImageWithFallback
                      src="https://res.cloudinary.com/ddclxl84c/image/upload/v1758955618/photo_new_nviq1x.jpg"
                      alt="Yash Giri"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-4 shadow-lg">
                  <div className="text-sm text-muted-foreground">Currently working on</div>
                  <div className="text-primary">AI-powered apps</div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-4 shadow-lg">
                  <div className="text-sm text-muted-foreground">Based in</div>
                  <div className="text-primary">Akola, Maharashtra</div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="text-center mt-20">
            <div className="inline-flex flex-col items-center gap-2 text-muted-foreground/60">
              <span className="text-sm">Scroll to explore</span>
              <ArrowDown size={24} className="animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}