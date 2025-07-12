
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ElevenLabsWidget from "@/components/ElevenLabsWidget";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Industries />
      <CaseStudies />
      <Testimonials />
      <WhyChooseUs />
      <Contact />
      <Footer />
      
      {/* ElevenLabs ConvAI Widget - Fixed bottom left */}
      <ElevenLabsWidget />
    </div>
  );
};

export default Index;
