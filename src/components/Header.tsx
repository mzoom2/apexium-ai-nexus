
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-navy/95 backdrop-blur-sm border-b border-brand-purple/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/77fbbd5e-05e5-4e64-8f92-899e0b4fd17a.png" 
            alt="APEXIUMINTELLIGENCE LLC Logo" 
            className="w-10 h-10"
          />
          <span className="text-white font-bold text-xl">APEXIUMINTELLIGENCE LLC</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-white hover:text-brand-teal transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-white hover:text-brand-teal transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-white hover:text-brand-teal transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('why-choose-us')}
            className="text-white hover:text-brand-teal transition-colors"
          >
            Why Us
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-white hover:text-brand-teal transition-colors"
          >
            Contact
          </button>
        </nav>

        <Button 
          onClick={() => scrollToSection('contact')}
          className="bg-brand-gradient hover:opacity-90 text-white font-semibold px-6 py-2 rounded-lg transition-opacity"
        >
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default Header;
