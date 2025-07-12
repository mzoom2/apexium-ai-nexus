
import { Card, CardContent } from "@/components/ui/card";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Proven Expertise in AI & Automation",
      description: "Deep technical knowledge and years of experience in cutting-edge AI technologies",
      icon: "🎯"
    },
    {
      title: "Security-First Development Approach",
      description: "Enterprise-grade security measures built into every solution from day one",
      icon: "🔒"
    },
    {
      title: "Custom Solutions, Not Templates",
      description: "Every system is tailored specifically to your unique business needs and goals",
      icon: "🛠️"
    },
    {
      title: "Ongoing Support & Maintenance", 
      description: "Comprehensive support to ensure your AI systems continue performing optimally",
      icon: "🤝"
    },
    {
      title: "Transparent Pricing & Honest Advice",
      description: "Clear, upfront pricing with honest recommendations about what you actually need",
      icon: "💎"
    },
    {
      title: "Rapid Implementation & Results",
      description: "Agile development process that delivers working solutions quickly and efficiently",
      icon: "⚡"
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-brand-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="bg-brand-gradient bg-clip-text text-transparent">Us</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We don't just build AI systems - we build partnerships that drive your success
          </p>
        </div>

        {/* Team Collaboration Image */}
        <div className="flex justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="relative group max-w-4xl">
            <div className="absolute -inset-4 bg-brand-gradient rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Professional Team Collaboration"
              className="relative w-full h-64 md:h-80 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 to-transparent rounded-2xl"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-none hover:bg-white/15 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{reason.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-gray-300 leading-relaxed">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
