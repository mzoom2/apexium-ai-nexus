
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Settings, Lightbulb, User, ArrowRight, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "AI Task Automation",
      description: "We build intelligent agents that can automate repetitive business tasks, saving you time and reducing operational costs.",
      features: ["Process Automation", "Data Entry Automation", "Email Management", "Workflow Optimization"],
      icon: Bot,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Custom AI Systems", 
      description: "Whether you need a chatbot, predictive model, or data processing system — we design AI tailored to your needs.",
      features: ["Custom Chatbots", "Predictive Analytics", "Computer Vision", "Natural Language Processing"],
      icon: Settings,
      gradient: "from-blue-500 to-teal-500"
    },
    {
      title: "AI Consulting & Strategy",
      description: "From idea to implementation, we help you define the right AI strategy for your business.",
      features: ["AI Readiness Assessment", "Strategy Development", "Implementation Planning", "Team Training"],
      icon: Lightbulb,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "AI for Individuals",
      description: "Personal productivity tools, smart assistants, and custom automations to make life easier.",
      features: ["Personal Assistants", "Productivity Tools", "Smart Home Integration", "Custom Solutions"],
      icon: User,
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gradient opacity-5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gradient opacity-5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Our <span className="bg-brand-gradient bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive AI solutions designed to transform your business operations and boost productivity
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group bg-gradient-to-br from-white to-gray-50 animate-fade-in overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gradient opacity-10 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
                
                <CardHeader className="pb-4 relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-brand-gradient rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-brand-navy">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">{service.description}</p>
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-600 group/feature">
                        <CheckCircle className="w-5 h-5 text-brand-teal mr-3 group-hover/feature:scale-110 transition-transform duration-200" />
                        <span className="group-hover/feature:text-brand-navy transition-colors duration-200">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            onClick={scrollToContact}
            className="bg-brand-gradient hover:opacity-90 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-2xl group"
          >
            Discuss Your Project
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
