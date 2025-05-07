
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
