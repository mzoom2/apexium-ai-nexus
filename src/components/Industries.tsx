
import { Card, CardContent } from "@/components/ui/card";

const Industries = () => {
  const industries = [
    {
      name: "E-commerce",
      description: "Automate inventory management, customer service, and personalized recommendations",
      icon: "🛒"
    },
    {
      name: "Finance",
      description: "Streamline risk assessment, fraud detection, and automated reporting",
      icon: "💰"
    },
    {
      name: "Healthcare", 
      description: "Enhance patient care with intelligent scheduling and data analysis",
      icon: "🏥"
    },
    {
      name: "Real Estate",
      description: "Automate lead qualification, property valuation, and market analysis",
      icon: "🏠"
    },
    {
      name: "Education",
      description: "Personalized learning experiences and automated administrative tasks",
      icon: "📚"
    },
    {
      name: "Freelancers & Creators",
      description: "Productivity tools, content automation, and client management systems",
      icon: "✨"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Industries We <span className="bg-brand-gradient bg-clip-text text-transparent">Serve</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Delivering AI solutions across diverse sectors with industry-specific expertise
          </p>
        </div>

        {/* Business Technology Image */}
        <div className="flex justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="relative group max-w-4xl">
            <div className="absolute -inset-4 bg-brand-gradient rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Business Professional Using Technology"
              className="relative w-full h-64 md:h-80 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 to-transparent rounded-2xl"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">{industry.name}</h3>
                <p className="text-gray-600 leading-relaxed">{industry.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
