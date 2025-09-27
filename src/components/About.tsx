import { Code2, Coffee, Lightbulb, Heart } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Creative Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Creative Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm">Currently crafting digital experiences</span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-6">
              The <span className="relative">
                Human
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary/60 to-transparent rounded-full"></div>
              </span> Behind the Code
            </h2>
          </div>

          {/* Story Cards Layout */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-6">
              <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl">The Spark</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  It all started with a broken calculator app in college. Instead of throwing my laptop out the window, 
                  I decided to fix it. That moment of turning frustration into solution? That's what hooked me on development.
                </p>
              </div>

              <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl">The Craft</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Every line of code is a brushstroke on a digital canvas. I don't just build applications—I architect 
                  experiences that make people's lives easier, one pixel at a time.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl">The Passion</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  What drives me? The moment when someone uses something I built and it just works. When complex 
                  problems become simple solutions. When design meets functionality in perfect harmony.
                </p>
              </div>

              <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Coffee className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl">The Human</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me experimenting with new coffee brewing methods, hiking Bay Area trails, 
                  or mentoring junior developers. I believe the best code comes from a balanced life.
                </p>
              </div>
            </div>
          </div>

          {/* Fun Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20">
              <div className="text-2xl font-bold text-primary mb-2">150+</div>
              <div className="text-sm text-muted-foreground">LeetCode Problems Solved</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-2xl border border-secondary/20">
              <div className="text-2xl font-bold text-secondary-foreground mb-2">1</div>
              <div className="text-sm text-muted-foreground">Years of experience</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20">
              <div className="text-2xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Projects completed</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-2xl border border-secondary/20">
              <div className="text-2xl font-bold text-secondary-foreground mb-2">∞</div>
              <div className="text-sm text-muted-foreground">Lines of code debugged</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}