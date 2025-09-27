import { useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./utils/ImageWithFallback";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  features: string[];
  year: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Wanderlust",
    subtitle: "Travel and Stay Booking Platform",
    description: "A travel platform enabling users to book hotels, explore locations, add reviews, and manage wishlists.",
    longDescription: "Wanderlust is a full-stack travel web application that allows users to seamlessly search and book hotels, explore destinations on interactive maps, and manage their personal wishlist. The platform also includes a secure authentication system, error handling mechanisms, and smooth media management with Cloudinary integration. Built with the MERN stack, Wanderlust provides a modern and responsive user experience for travelers.",
    image: "https://res.cloudinary.com/ddclxl84c/image/upload/v1758958729/Screenshot_2025-09-27_130801_aqya2h.png",
    tags: ["React", "Express.js", "Node.js", "MongoDB", "Cloudinary"],
    demoUrl: "https://wanderlust-i3xv1syhg-yashgit1203s-projects.vercel.app/listings",
    githubUrl: "https://github.com/Yashgit1203/Wanderlust",
    features: [
      "Hotel booking system with reviews and ratings",
      "Wishlist functionality for favorite stays",
      "Interactive location maps using Mapbox",
      "Secure authentication and robust error handling"
    ],
    year: "2023",
    category: "Web App"
  },
  {
    id: 2,
    title: "VR for Medical Procedures Training",
    subtitle: "Immersive VR Simulation for Medical Training",
    description: "A VR application simulating medical procedures using Oculus Quest 2, enhancing practical training for medical students.",
    longDescription: "This project focuses on building an immersive Virtual Reality application to simulate surgical and medical procedures for training purposes. Using Unity and Oculus Quest 2, it provides an interactive and realistic environment where medical trainees can practice in a safe and controlled space. The project leverages free 3D models and assets from the Unity Asset Store to replicate surgical environments, aiming to improve practical learning and skill retention.",
    image: "https://res.cloudinary.com/ddclxl84c/image/upload/v1758960726/img3_seln6z.jpg",
    tags: ["Unity", "C#", "Oculus Quest 2", "VR Development"],
    githubUrl: "https://github.com/Yashgit1203/vr-for-medical-surgery-and-operations",
    features: [
      "Realistic VR surgical environment simulations",
      "Interactive and immersive training experience",
      "Supports Oculus Quest 2 for standalone VR",
      "Uses free 3D medical models from Unity Asset Store"
    ],
    year: "2024",
    category: "VR Application"
  },
  {
    id: 3,
    title: "NextClass",
    subtitle: "Online Learning Platform",
    description: "A full-stack online course platform enabling course purchasing, video streaming, enrollments, and admin tools.",
    longDescription: "NextClass is a scalable online learning platform developed during my full-stack internship at Upclick Labs Pvt. Ltd. It enables users to browse and purchase courses, stream videos securely, and manage enrollments. I designed and implemented RESTful APIs in Node.js, integrated MongoDB Atlas for efficient data management, and optimized database queries to improve response times by 40%. The platform also integrates Bunny.net for smooth video streaming, ZeptoMail for secure communication, and robust admin tools for Excel-based course uploads, boosting workflow efficiency by 50%.",
    image: "https://res.cloudinary.com/ddclxl84c/image/upload/v1758960703/Screenshot_2025-09-27_134113_msve42.png",
    tags: ["React", "Node.js", "Express.js", "MongoDB Atlas", "Bunny.net","Tailwind CSS", "ZeptoMail","Postman"],
    demoUrl: "https://www.nextclass.in/",
    features: [
      "Secure online course purchasing system",
      "Video streaming integration with Bunny.net",
      "Excel-based admin course upload tools",
      "Optimized APIs and database queries for faster performance",
      "Email service integration with ZohoMail"
    ],
    year: "2024",
    category: "Web App"
  }
];

export function CreativeProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm">Featured Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Projects That
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Solve Real Problems
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each project is a story of turning complex challenges into elegant solutions
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-32">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`grid lg:grid-cols-12 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Project Image */}
                <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div 
                    className="relative group cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-primary/5 to-secondary/5">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-background/90 backdrop-blur-sm rounded-2xl p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <ArrowUpRight className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating Year Badge */}
                    <div className="absolute top-6 right-6 bg-background/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium border">
                      {project.year}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className={`lg:col-span-5 space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 text-secondary-foreground rounded-full text-sm mb-4">
                      {project.category}
                    </div>
                    
                    <h3 className="text-3xl lg:text-4xl mb-3 leading-tight">
                      {project.title}
                    </h3>
                    
                    <p className="text-lg text-primary/80 mb-4 italic">
                      {project.subtitle}
                    </p>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="px-3 py-1">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Button 
                      onClick={() => setSelectedProject(project)}
                      className="group"
                    >
                      View Details
                      <ArrowUpRight size={16} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Button>
                    {project.demoUrl && (
                      <Button variant="outline" asChild>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} className="mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <DialogTitle className="text-3xl">{selectedProject.title}</DialogTitle>
                  <Badge variant="outline">{selectedProject.year}</Badge>
                </div>
                <DialogDescription className="text-lg italic text-primary/80">
                  {selectedProject.subtitle}
                </DialogDescription>
                <p className="text-base text-muted-foreground mt-4">
                  {selectedProject.longDescription}
                </p>
              </DialogHeader>
              
              <div className="space-y-6">
                <div className="relative">
                  <ImageWithFallback
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg mb-3">Project Type</h4>
                    <Badge variant="outline" className="text-base px-4 py-2">
                      {selectedProject.category}
                    </Badge>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg mb-4">Key Features</h4>
                  <div className="space-y-3">
                    {selectedProject.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4 pt-4 border-t">
                  {selectedProject.demoUrl && (
                    <Button asChild>
                      <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        View Live Demo
                      </a>
                    </Button>
                  )}
                  {selectedProject.githubUrl && (
                    <Button variant="outline" asChild>
                      <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        View Source
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}