
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'why-choose-us', label: 'Why Us' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-navy/95 backdrop-blur-sm border-b border-brand-purple/20 animate-fade-in">
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 sm:space-x-3 animate-slide-in min-w-0 flex-shrink">
          <img 
            src="/lovable-uploads/77fbbd5e-05e5-4e64-8f92-899e0b4fd17a.png" 
            alt="APEXIUMINTELLIGENCE Logo" 
            className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 hover:scale-110 transition-transform duration-300 flex-shrink-0"
          />
          <span className="text-white font-bold text-xs sm:text-sm lg:text-base xl:text-xl hover:text-brand-teal transition-colors duration-300 leading-tight truncate">
            APEXIUMINTELLIGENCE
          </span>
        </div>
        
        {/* Desktop Navigation - Hidden on smaller tablets */}
        <nav className="hidden xl:flex items-center space-x-6 lg:space-x-8">
          {navItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-white hover:text-brand-teal transition-all duration-300 hover:scale-105 relative group text-sm lg:text-base"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-teal transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* Desktop CTA Button - Hidden on smaller tablets */}
        <Button 
          onClick={() => scrollToSection('contact')}
          className="hidden xl:block bg-brand-gradient hover:opacity-90 hover:scale-105 text-white font-semibold px-4 lg:px-6 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-sm lg:text-base"
        >
          Get Started
        </Button>

        {/* Mobile Menu - Shows for tablet and mobile */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="xl:hidden text-white hover:text-brand-teal hover:bg-white/10 transition-all duration-300 flex-shrink-0">
              <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-brand-navy border-l border-brand-purple/20">
            <div className="flex flex-col space-y-6 mt-8">
              {/* Mobile Logo */}
              <div className="flex items-center space-x-3 pb-4 border-b border-brand-purple/20">
                <img 
                  src="/lovable-uploads/77fbbd5e-05e5-4e64-8f92-899e0b4fd17a.png" 
                  alt="APEXIUMINTELLIGENCE Logo" 
                  className="w-8 h-8"
                />
                <span className="text-white font-bold text-lg">APEXIUMINTELLIGENCE</span>
              </div>
              
              {/* Mobile Navigation */}
              <nav className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <button 
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-white hover:text-brand-teal text-left py-2 transition-all duration-300 hover:translate-x-2 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
              
              {/* Mobile CTA Button */}
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-brand-gradient hover:opacity-90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 mt-6"
              >
                Get Started
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
