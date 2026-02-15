import { useState, useEffect } from "react";
import heroImg1 from "@/assets/hero-kitchen-1.jpg";
import heroImg2 from "@/assets/hero-kitchen-2.jpg";
import heroImg3 from "@/assets/hero-kitchen-3.jpg";

const slides = [heroImg1, heroImg2, heroImg3];

const HeroSection = ({ onGetQuote }: { onGetQuote: () => void }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Slides */}
      {slides.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: current === i ? 1 : 0 }}
        >
          <img
            src={src}
            alt={`Luxury kitchen ${i + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-primary/30" />

      {/* Content */}
      <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl" style={{ animation: "fadeInUp 1s ease-out" }}>
          <div className="inline-block mb-4 px-4 py-1.5 border border-accent/50 rounded-full">
            <span className="text-accent font-body text-sm tracking-widest uppercase">
              Premium Kitchen Design
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Luxury Kitchens Designed for{" "}
            <span className="text-accent">Modern Living</span>
          </h1>
          <p className="text-primary-foreground/80 font-body text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
            Experience the art of premium custom kitchens, crafted with
            precision and elegance for the modern home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onGetQuote}
              className="gold-gradient text-accent-foreground px-8 py-4 rounded font-body font-semibold text-base tracking-wide uppercase hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
            >
              Get a Quote
            </button>
            <a
              href="#kitchen"
              className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded font-body font-semibold text-base tracking-wide uppercase hover:border-accent hover:text-accent transition-all duration-300 text-center"
            >
              Explore Designs
            </a>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              current === i ? "w-10 bg-accent" : "w-4 bg-primary-foreground/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
