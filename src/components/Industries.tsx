
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
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-purple rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand-teal rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Industries We <span className="bg-brand-gradient bg-clip-text text-transparent">Serve</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Delivering AI solutions across diverse sectors with industry-specific expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group animate-fade-in bg-gradient-to-br from-white to-gray-50" style={{ animationDelay: `${index * 0.1}s` }}>
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
