import { useState } from "react";
import { Badge } from "./ui/badge";
import { 
  Code, 
  Palette, 
  Database, 
  Smartphone, 
  Cloud, 
  GitBranch,
  Zap,
  Star
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Magic",
    icon: Code,
    description: "Where ideas come to life",
    skills: ["React", "EJS Templates", "Bootstrap", "Tailwind CSS"],
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30"
  },
  {
    title: "Backend Wizardry",
    icon: Database,
    description: "The engine behind the scenes",
    skills: ["Node.js", "Express.js", "MySQL", "MongoDB",],
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30"
  },
  // {
  //   title: "Mobile Universe",
  //   icon: Smartphone,
  //   description: "Native experiences, everywhere",
  //   skills: ["React Native", "Expo", "iOS Development", "Android", "Flutter"],
  //   color: "from-purple-500/20 to-pink-500/20",
  //   borderColor: "border-purple-500/30"
  // },
  {
    title: "Design Thinking",
    icon: Palette,
    description: "Beauty meets functionality",
    skills: ["Figma", "Design Systems"],
    color: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-500/30"
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    description: "Scaling to infinity",
    skills: ["AWS", "Docker", "Kubernetes", "Vercel", "CI/CD", "Monitoring"],
    color: "from-indigo-500/20 to-blue-500/20",
    borderColor: "border-indigo-500/30"
  },
  {
    title: "Developer Tools",
    icon: GitBranch,
    description: "The craft of coding",
    skills: ["Git", "VS Code", "Testing", "Agile", "Code Review", "Documentation"],
    color: "from-gray-500/20 to-slate-500/20",
    borderColor: "border-gray-500/30"
  },
  {
  title: "Programming Skills",
  icon: Code,
  description: "Turning logic into magic",
  skills: ["Java", "C", "C++", "Python", "JavaScript"],
  color: "from-purple-500/20 to-pink-500/20",
  borderColor: "border-gray-300/30"
}

];

const superpowers = [
  "Problem Solver",
  "Fast Learner", 
  "Team Player",
  "Detail Oriented",
  "User Focused",
  "Performance Obsessed"
];

export function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Zap size={16} className="text-primary" />
              <span className="text-sm">Technical Arsenal</span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-6">
              Skills That
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Power Innovation
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every tool has its place, every technology its purpose. Here's what I bring to the table.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.title}
                  className={`group relative p-8 bg-gradient-to-br ${category.color} backdrop-blur-sm rounded-3xl border ${category.borderColor} hover:border-opacity-60 transition-all duration-300 cursor-pointer`}
                  onMouseEnter={() => setHoveredCategory(category.title)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  {/* Icon and Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-background/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent size={24} className="text-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-background/30 backdrop-blur-sm border-0 hover:bg-background/50 transition-colors text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}></div>
                </div>
              );
            })}
          </div>

          {/* Superpowers Section */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-8">
              <Star size={16} className="text-secondary-foreground" />
              <span className="text-sm">Secret Superpowers</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {superpowers.map((superpower, index) => (
                <div
                  key={superpower}
                  className="group relative px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20 hover:border-primary/40 transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-sm font-medium group-hover:text-primary transition-colors">
                    {superpower}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Fun Quote */}
          <div className="text-center mt-16 max-w-2xl mx-auto">
            <blockquote className="text-lg italic text-muted-foreground">
              "The best code is like a good joke—if you have to explain it, it's probably not that good."
            </blockquote>
            <cite className="text-sm text-primary mt-2 block">— My debugging philosophy</cite>
          </div>
        </div>
      </div>
    </section>
  );
}