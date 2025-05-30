
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "APEXIUMINTELLIGENCE completely transformed our customer support with their AI chatbot. The professionalism and results were outstanding.",
      author: "Jane Doe",
      position: "COO, RetailNext",
      rating: 5
    },
    {
      quote: "Their invoice automation system saved us 200+ hours monthly. The ROI was incredible and the implementation was seamless.",
      author: "Michael Chen",
      position: "CFO, FinanceForward",
      rating: 5
    },
    {
      quote: "Working with APEXIUMINTELLIGENCE felt like having a dedicated AI team. They understood our needs and delivered beyond expectations.",
      author: "Sarah Williams",
      position: "Operations Director, TechFlow",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            What Our <span className="bg-brand-gradient bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Don't just take our word for it - hear from businesses that have transformed with our AI solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t pt-4">
                  <p className="font-bold text-brand-navy">{testimonial.author}</p>
                  <p className="text-brand-teal text-sm">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
