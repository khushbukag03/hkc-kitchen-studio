import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import KitchenSection from "@/components/KitchenSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onGetQuote={() => setQuoteOpen(true)} />
      <HeroSection onGetQuote={() => setQuoteOpen(true)} />
      <KitchenSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
};

export default Index;
