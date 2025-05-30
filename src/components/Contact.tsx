
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

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
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Let's Build Something <span className="bg-brand-gradient bg-clip-text text-transparent">Intelligent Together</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Ready to transform your business with AI? Get in touch for a free consultation and discover what's possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="border-none shadow-lg animate-slide-in">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-navy">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-brand-navy font-semibold">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-brand-navy font-semibold">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="company" className="text-brand-navy font-semibold">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-brand-navy font-semibold">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or how we can help..."
                    required
                    className="mt-1"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-brand-gradient hover:opacity-90 text-white font-semibold py-3 rounded-lg text-lg transition-opacity"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8 animate-slide-in">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-brand-navy mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-brand-navy">Email</p>
                    <p className="text-gray-700">info@apexiumintelligence.com</p>
                  </div>
                  <div>
                    <p className="font-semibold text-brand-navy">Phone</p>
                    <p className="text-gray-700">Available upon request</p>
                  </div>
                  <div>
                    <p className="font-semibold text-brand-navy">Response Time</p>
                    <p className="text-gray-700">Within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-brand-navy mb-4">What to Expect</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand-teal rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Free 30-minute consultation call</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand-teal rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Detailed project analysis and proposal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand-teal rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Transparent timeline and pricing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand-teal rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">No obligation to proceed</span>
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
