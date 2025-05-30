
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
