import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="font-semibold text-lg">Yash Giri</div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection('projects')} className="hover:text-primary transition-colors">
            Projects
          </button>
          <button onClick={() => scrollToSection('skills')} className="hover:text-primary transition-colors">
            Skills
          </button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">
            Contact
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b md:hidden">
            <nav className="flex flex-col p-4 space-y-4">
              <button onClick={() => scrollToSection('about')} className="text-left hover:text-primary transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-left hover:text-primary transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-left hover:text-primary transition-colors">
                Skills
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:text-primary transition-colors">
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}