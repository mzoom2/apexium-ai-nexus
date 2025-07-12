import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react";

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
    <section id="home" className="min-h-screen bg-hero-gradient flex items-center justify-center relative overflow-hidden pt-28 sm:pt-32 pb-8 px-4 md:pt-24 md:px-0">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-brand-purple rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 md:w-64 md:h-64 bg-brand-teal rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 md:w-32 md:h-32 bg-brand-purple rounded-full filter blur-2xl animate-bounce" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Icons - Hidden on mobile for cleaner look */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <Sparkles className="absolute top-20 left-20 w-6 h-6 text-brand-teal animate-bounce opacity-60" style={{ animationDelay: '0.5s' }} />
        <Zap className="absolute top-32 right-32 w-8 h-8 text-brand-purple animate-pulse opacity-60" style={{ animationDelay: '1.5s' }} />
        <Shield className="absolute bottom-32 left-32 w-7 h-7 text-brand-teal animate-bounce opacity-60" style={{ animationDelay: '2.5s' }} />
      </div>
      
      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Main Heading with Better Mobile Typography */}
            <div className="animate-fade-in">
              <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight px-2">
                Building the Future with{" "}
                <span className="bg-brand-gradient bg-clip-text text-transparent animate-pulse block sm:inline mt-1 sm:mt-0">
                  Intelligent Automation
                </span>
              </h1>
            </div>
            
            {/* Subtitle with Better Mobile Spacing */}
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-gray-300 mb-4 sm:mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto lg:mx-0 px-4 lg:px-0">
                At APEXIUMINTELLIGENCE, we develop cutting-edge AI systems that automate tasks, 
                optimize workflows, and unlock new levels of productivity for businesses and individuals.
              </p>
            </div>
            
            {/* CTA Buttons with Better Mobile Layout */}
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 justify-center lg:justify-start items-center lg:items-start animate-fade-in px-4 lg:px-0" style={{ animationDelay: '0.6s' }}>
              <Button 
                onClick={scrollToContact}
                className="w-full sm:w-auto bg-brand-gradient hover:opacity-90 text-white font-semibold px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg text-sm sm:text-base md:text-lg transition-all duration-300 group hover:scale-105 shadow-2xl hover:shadow-brand-purple/25 max-w-sm"
              >
                Get a Free Consultation
                <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button 
                onClick={scrollToServices}
                variant="outline"
                className="w-full sm:w-auto border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-105 shadow-lg max-w-sm"
              >
                Explore Our Solutions
              </Button>
            </div>

            {/* Stats Section with Better Mobile Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-12 md:mt-16 animate-fade-in px-4 lg:px-0" style={{ animationDelay: '0.9s' }}>
              <div className="text-center group hover:scale-105 transition-transform duration-300 bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/10">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-teal mb-1 sm:mb-2">200+</div>
                <div className="text-gray-300 text-xs sm:text-sm md:text-base">Hours Saved Monthly</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300 bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/10">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-purple mb-1 sm:mb-2">99%</div>
                <div className="text-gray-300 text-xs sm:text-sm md:text-base">Accuracy Rate</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300 bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/10">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-teal mb-1 sm:mb-2">24/7</div>
                <div className="text-gray-300 text-xs sm:text-sm md:text-base">AI Support</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden lg:block animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-brand-gradient rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="AI Technology and Innovation"
                className="relative w-full h-96 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated Scroll Indicator - Hidden on small mobile */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-brand-teal rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brand-teal rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;