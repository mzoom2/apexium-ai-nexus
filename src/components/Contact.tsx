
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
          {/* Contact Form */}
          <Card className="border-none shadow-lg animate-slide-in">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl md:text-2xl text-brand-navy">Send us a message</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-brand-navy font-semibold text-sm">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1 h-11"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-brand-navy font-semibold text-sm">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 h-11"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="company" className="text-brand-navy font-semibold text-sm">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-1 h-11"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-brand-navy font-semibold text-sm">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or how we can help..."
                    required
                    className="mt-1 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-brand-gradient hover:opacity-90 text-white font-semibold py-3 rounded-lg text-base md:text-lg transition-opacity h-12"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info and What to Expect */}
          <div className="space-y-6 md:space-y-8 animate-slide-in">
            {/* Get in Touch Card */}
            <Card className="border-none shadow-lg bg-gradient-to-br from-brand-navy to-brand-dark hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="p-3 bg-brand-gradient rounded-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-brand-teal text-base md:text-lg">Email</p>
                      <p className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer text-sm md:text-base break-all">info@apexiumintelligence.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group">
                    <div className="p-3 bg-brand-gradient rounded-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-brand-teal text-base md:text-lg">Phone</p>
                      <p className="text-gray-300 text-sm md:text-base">Available upon request</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group">
                    <div className="p-3 bg-brand-gradient rounded-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <Clock className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-brand-teal text-base md:text-lg">Response Time</p>
                      <p className="text-gray-300 text-sm md:text-base">Within 24 hours</p>
                    </div>
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
