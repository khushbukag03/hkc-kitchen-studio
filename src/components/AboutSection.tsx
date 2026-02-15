import { Award, Shield, Gem, Users } from "lucide-react";
import aboutImg from "@/assets/about-kitchen.jpg";

const values = [
  { icon: Award, title: "Premium Quality", desc: "Only the finest materials and craftsmanship" },
  { icon: Shield, title: "10-Year Warranty", desc: "Complete peace of mind with our guarantee" },
  { icon: Gem, title: "Bespoke Design", desc: "Every kitchen uniquely tailored to you" },
  { icon: Users, title: "Expert Team", desc: "Decades of combined design experience" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src={aboutImg}
                alt="HKC Kitchen workshop"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-accent rounded-lg hidden lg:block" />
          </div>

          {/* Content */}
          <div>
            <span className="text-accent font-body text-sm tracking-widest uppercase font-semibold">
              About HKC Kitchen
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Crafting Luxury Kitchens{" "}
              <span className="text-accent">Since 2005</span>
            </h2>
            <p className="text-muted-foreground font-body text-base leading-relaxed mb-4">
              At HKC Kitchen, we believe the kitchen is the heart of every home. 
              For nearly two decades, we've been designing and delivering 
              world-class kitchens that blend elegance with functionality.
            </p>
            <p className="text-muted-foreground font-body text-base leading-relaxed mb-8">
              Our mission is to transform spaces into extraordinary culinary 
              experiences through innovative design, premium materials, and 
              meticulous attention to detail.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="bg-card p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <v.icon className="w-8 h-8 text-accent mb-2" />
                  <h4 className="font-body text-sm font-semibold text-foreground">
                    {v.title}
                  </h4>
                  <p className="font-body text-xs text-muted-foreground mt-1">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
