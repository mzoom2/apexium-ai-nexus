
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      title: "Innovation",
      description: "Pushing the boundaries of what's possible with AI technology"
    },
    {
      title: "Integrity", 
      description: "Transparent, honest relationships built on trust and reliability"
    },
    {
      title: "Security",
      description: "Enterprise-grade security measures to protect your data and systems"
    },
    {
      title: "Scalability",
      description: "Solutions that grow with your business needs and ambitions"
    },
    {
      title: "Human-Centered Design",
      description: "AI that enhances human capabilities rather than replacing them"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            About <span className="bg-brand-gradient bg-clip-text text-transparent">Us</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700">
            <p>
              <strong>APEXIUMINTELLIGENCE LLC</strong> is an innovation-driven AI company focused on building 
              intelligent systems that transform how people and businesses work. We combine technical excellence 
              with deep domain knowledge to create reliable, secure, and impactful AI solutions.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="animate-slide-in">
            <h3 className="text-2xl font-bold text-brand-navy mb-4">Our Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To empower businesses and individuals with powerful AI tools that simplify tasks, 
              improve decision-making, and drive growth. We believe AI should be accessible, 
              reliable, and transformative for everyone.
            </p>
          </div>
          
          <div className="animate-slide-in">
            <h3 className="text-2xl font-bold text-brand-navy mb-4">Our Vision</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              A world where intelligent automation frees people to focus on creativity, strategy, 
              and meaningful work. We're building the infrastructure for the next generation of 
              productivity and innovation.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-brand-navy text-center mb-12">Our Values</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <h4 className="font-bold text-brand-navy mb-3 text-lg">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
