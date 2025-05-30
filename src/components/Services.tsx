
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "AI Task Automation",
      description: "We build intelligent agents that can automate repetitive business tasks, saving you time and reducing operational costs.",
      features: ["Process Automation", "Data Entry Automation", "Email Management", "Workflow Optimization"],
      icon: "🤖"
    },
    {
      title: "Custom AI Systems", 
      description: "Whether you need a chatbot, predictive model, or data processing system — we design AI tailored to your needs.",
      features: ["Custom Chatbots", "Predictive Analytics", "Computer Vision", "Natural Language Processing"],
      icon: "⚙️"
    },
    {
      title: "AI Consulting & Strategy",
      description: "From idea to implementation, we help you define the right AI strategy for your business.",
      features: ["AI Readiness Assessment", "Strategy Development", "Implementation Planning", "Team Training"],
      icon: "💡"
    },
    {
      title: "AI for Individuals",
      description: "Personal productivity tools, smart assistants, and custom automations to make life easier.",
      features: ["Personal Assistants", "Productivity Tools", "Smart Home Integration", "Custom Solutions"],
      icon: "👤"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Our <span className="bg-brand-gradient bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive AI solutions designed to transform your business operations and boost productivity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="pb-4">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-2xl text-brand-navy">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-brand-teal rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={scrollToContact}
            className="bg-brand-gradient hover:opacity-90 text-white font-semibold px-8 py-3 rounded-lg text-lg transition-opacity"
          >
            Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
