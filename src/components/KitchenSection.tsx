import modularImg from "@/assets/kitchen-modular.jpg";
import luxuryImg from "@/assets/kitchen-luxury.jpg";
import contemporaryImg from "@/assets/kitchen-contemporary.jpg";
import cabinetsImg from "@/assets/kitchen-cabinets.jpg";

const kitchens = [
  {
    title: "Modular Kitchens",
    description: "Smart, space-efficient designs with sleek modular units tailored to your lifestyle.",
    image: modularImg,
  },
  {
    title: "Luxury Kitchens",
    description: "Opulent finishes and premium materials for the most discerning homeowners.",
    image: luxuryImg,
  },
  {
    title: "Contemporary Designs",
    description: "Clean lines and modern aesthetics that blend form with function.",
    image: contemporaryImg,
  },
  {
    title: "Custom Cabinets",
    description: "Bespoke cabinetry crafted from the finest woods with exquisite detailing.",
    image: cabinetsImg,
  },
];

const KitchenSection = () => {
  return (
    <section id="kitchen" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-body text-sm tracking-widest uppercase font-semibold">
            Our Collections
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Explore Our <span className="text-accent">Kitchen Designs</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            From modular marvels to bespoke luxury — discover kitchen styles
            designed to inspire.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kitchens.map((kitchen) => (
            <div
              key={kitchen.title}
              className="group relative bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={kitchen.image}
                  alt={kitchen.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
                <h3 className="font-display text-xl font-semibold text-primary-foreground mb-1">
                  {kitchen.title}
                </h3>
                <p className="text-primary-foreground/80 font-body text-sm">
                  {kitchen.description}
                </p>
              </div>
              {/* Static title below image */}
              <div className="p-4 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {kitchen.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm mt-1">
                  {kitchen.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KitchenSection;
