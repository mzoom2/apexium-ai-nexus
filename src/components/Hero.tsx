
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-hero-gradient flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-purple rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand-teal rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Building the Future with{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Intelligent Automation
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            At APEXIUMINTELLIGENCE LLC, we develop cutting-edge AI systems that automate tasks, 
            optimize workflows, and unlock new levels of productivity for businesses and individuals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToContact}
              className="bg-brand-gradient hover:opacity-90 text-white font-semibold px-8 py-3 rounded-lg text-lg transition-opacity group"
            >
              Get a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={scrollToServices}
              variant="outline"
              className="border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white px-8 py-3 rounded-lg text-lg transition-all"
            >
              Explore Our Solutions
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-brand-teal rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brand-teal rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
