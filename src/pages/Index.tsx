
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
      <div 
        className="fixed bottom-4 left-4 z-50"
        dangerouslySetInnerHTML={{
          __html: `
            <elevenlabs-convai agent-id="agent_01jzzxevmhfras98mmrrvyqsac"></elevenlabs-convai>
            <script src="https://unpkg.com/@elevenlabs/convai-widget-embed" async type="text/javascript"></script>
          `
        }}
      />
    </div>
  );
};

export default Index;
