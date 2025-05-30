
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Lightbulb, Award, Globe } from "lucide-react";

const About = () => {
  const values = [
    {
      title: "Innovation",
      description: "Pushing the boundaries of what's possible with AI technology",
      icon: Lightbulb
    },
    {
      title: "Integrity", 
      description: "Transparent, honest relationships built on trust and reliability",
      icon: Award
    },
    {
      title: "Security",
      description: "Enterprise-grade security measures to protect your data and systems",
      icon: Users
    },
    {
      title: "Scalability",
      description: "Solutions that grow with your business needs and ambitions",
      icon: Globe
    },
    {
      title: "Human-Centered Design",
      description: "AI that enhances human capabilities rather than replacing them",
      icon: Target
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-brand-purple to-brand-teal transform rotate-12 scale-150"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            About <span className="bg-brand-gradient bg-clip-text text-transparent">Us</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700">
            <p className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <strong>APEXIUMINTELLIGENCE LLC</strong> is an innovation-driven AI company focused on building 
              intelligent systems that transform how people and businesses work. We combine technical excellence 
              with deep domain knowledge to create reliable, secure, and impactful AI solutions.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="group">
            <Card className="h-full border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 animate-slide-in">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-brand-teal mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold text-brand-navy">Our Mission</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To empower businesses and individuals with powerful AI tools that simplify tasks, 
                  improve decision-making, and drive growth. We believe AI should be accessible, 
                  reliable, and transformative for everyone.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="group">
            <Card className="h-full border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Globe className="w-8 h-8 text-brand-purple mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold text-brand-navy">Our Vision</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A world where intelligent automation frees people to focus on creativity, strategy, 
                  and meaningful work. We're building the infrastructure for the next generation of 
                  productivity and innovation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-brand-navy text-center mb-12 animate-fade-in">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-3 group bg-gradient-to-br from-white to-gray-50 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 bg-brand-gradient rounded-full group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h4 className="font-bold text-brand-navy mb-3 text-lg">{value.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed flex-grow">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
