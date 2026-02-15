import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  { icon: MapPin, label: "Visit Us", value: "123 Design Avenue, Dubai, UAE" },
  { icon: Phone, label: "Call Us", value: "+971 50 123 4567" },
  { icon: Mail, label: "Email Us", value: "info@hkckitchen.com" },
  { icon: Clock, label: "Working Hours", value: "Mon – Sat: 9AM – 7PM" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-body text-sm tracking-widest uppercase font-semibold">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Contact <span className="text-accent">Us</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Reach out to discuss your dream kitchen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 p-5 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="p-3 rounded-lg bg-primary">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-body text-sm font-semibold text-foreground">
                    {item.label}
                  </h4>
                  <p className="font-body text-sm text-muted-foreground mt-0.5">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
            <iframe
              title="HKC Kitchen Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.6045!2d55.2708!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEyJzE3LjMiTiA1NcKwMTYnMTQuOSJF!5e0!3m2!1sen!2sae!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
