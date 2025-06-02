
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Clock, Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-4 md:mb-6 px-2">
            Let's Build Something <span className="bg-brand-gradient bg-clip-text text-transparent">Intelligent Together</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-4">
            Ready to transform your business with AI? Get in touch for a free consultation and discover what's possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Methods */}
          <Card className="border-none shadow-lg animate-slide-in">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl md:text-2xl text-brand-navy">Get in Touch</CardTitle>
              <p className="text-gray-600">Choose your preferred way to reach us</p>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-6">
                {/* Email */}
                <a 
                  href="mailto:info@ApexiumIntelligence.com"
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-brand-navy to-brand-dark rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="p-3 bg-brand-gradient rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-lg">Email Us</p>
                    <p className="text-brand-teal">info@ApexiumIntelligence.com</p>
                  </div>
                </a>

                {/* Phone */}
                <a 
                  href="tel:+13465580110"
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-brand-navy to-brand-dark rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="p-3 bg-brand-gradient rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-lg">Call Us</p>
                    <p className="text-brand-teal">+1 (346) 558-0110</p>
                  </div>
                </a>

                {/* Social Media Section */}
                <div className="pt-4">
                  <h3 className="text-lg font-semibold text-brand-navy mb-4">Follow & Message Us</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <a 
                      href="https://www.instagram.com/p/DKS7z6UsDzD/?igsh=MWpueGo5dHFsZjc2bg=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
                    >
                      <Instagram className="w-5 h-5 text-white" />
                      <span className="text-white font-medium">Instagram</span>
                    </a>

                    <a 
                      href="https://www.facebook.com/photo.php?fbid=122097508436895886&set=a.122096726468895886&type=3&mibextid=rS40aB7S9Ucbxw6v"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 bg-blue-600 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
                    >
                      <Facebook className="w-5 h-5 text-white" />
                      <span className="text-white font-medium">Facebook</span>
                    </a>

                    <a 
                      href="https://www.linkedin.com/in/apexiumin-intelligence-263262369?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 bg-blue-700 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                      <span className="text-white font-medium">LinkedIn</span>
                    </a>

                    <a 
                      href="https://x.com/Apexiumint5822/status/1928873624741511519?t=dX8siMFgddejOoR_vKwVmg&s=19"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 bg-black rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
                    >
                      <Twitter className="w-5 h-5 text-white" />
                      <span className="text-white font-medium">X (Twitter)</span>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info and What to Expect */}
          <div className="space-y-6 md:space-y-8 animate-slide-in">
            {/* Response Time Card */}
            <Card className="border-none shadow-lg bg-gradient-to-br from-brand-navy to-brand-dark hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">Quick Response</h3>
                <div className="flex items-center justify-center space-x-4 group">
                  <div className="p-4 bg-brand-gradient rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-teal text-lg">Response Time</p>
                    <p className="text-gray-300 text-base">Within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What to Expect Card */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-brand-navy mb-4">What to Expect</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand-teal rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 text-sm md:text-base">Free 30-minute consultation call</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand-teal rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 text-sm md:text-base">Detailed project analysis and proposal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand-teal rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 text-sm md:text-base">Transparent timeline and pricing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand-teal rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 text-sm md:text-base">No obligation to proceed</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
