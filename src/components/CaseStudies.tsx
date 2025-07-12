
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CaseStudies = () => {
  const cases = [
    {
      title: "SmartBot for Local Retailer",
      industry: "E-commerce",
      challenge: "Customer service was overwhelmed with repetitive inquiries",
      solution: "Deployed an intelligent chatbot that handles 80% of customer queries automatically",
      results: [
        "70% faster customer response time",
        "50% reduction in support costs", 
        "95% customer satisfaction rate"
      ],
      icon: "🛍️"
    },
    {
      title: "Invoice Automation System",
      industry: "Finance",
      challenge: "Manual invoice processing was time-consuming and error-prone",
      solution: "Built an AI system that extracts, validates, and processes invoice data automatically",
      results: [
        "200+ hours saved monthly",
        "99% accuracy in data extraction",
        "Faster payment processing"
      ],
      icon: "📊"
    },
    {
      title: "Predictive Maintenance System",
      industry: "Manufacturing",
      challenge: "Unexpected equipment failures causing costly downtime",
      solution: "Implemented IoT sensors with AI analysis to predict maintenance needs",
      results: [
        "60% reduction in downtime",
        "30% lower maintenance costs",
        "Improved equipment lifespan"
      ],
      icon: "⚙️"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Success <span className="bg-brand-gradient bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Real results from real clients - see how our AI solutions transformed their businesses
          </p>
        </div>

        {/* Programming and Development Image */}
        <div className="flex justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="relative group max-w-3xl">
            <div className="absolute -inset-4 bg-brand-gradient rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Programming and Development Workspace"
              className="relative w-full h-64 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 to-transparent rounded-2xl"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="pb-4">
                <div className="text-4xl mb-4">{caseStudy.icon}</div>
                <CardTitle className="text-xl text-brand-navy">{caseStudy.title}</CardTitle>
                <p className="text-brand-teal font-semibold">{caseStudy.industry}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-brand-navy mb-2">Challenge:</h4>
                  <p className="text-gray-600 text-sm">{caseStudy.challenge}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-brand-navy mb-2">Solution:</h4>
                  <p className="text-gray-600 text-sm">{caseStudy.solution}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-brand-navy mb-2">Results:</h4>
                  <ul className="space-y-1">
                    {caseStudy.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-brand-teal rounded-full mr-2"></span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
