
const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/77fbbd5e-05e5-4e64-8f92-899e0b4fd17a.png" 
                alt="APEXIUMINTELLIGENCE LLC Logo" 
                className="w-8 h-8"
              />
              <span className="text-lg font-bold">APEXIUMINTELLIGENCE LLC</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Building the future with intelligent automation. Empowering businesses and individuals 
              with powerful AI tools that drive growth and productivity.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-brand-teal">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-brand-teal transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-brand-teal transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-brand-teal transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-brand-teal transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-brand-teal">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>AI Task Automation</li>
              <li>Custom AI Systems</li>
              <li>AI Consulting</li>
              <li>Personal AI Tools</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300">
              © 2025 APEXIUMINTELLIGENCE LLC. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-brand-teal transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-teal transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
