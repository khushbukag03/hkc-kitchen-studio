import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Kitchen", href: "#kitchen" },
    { label: "Contact", href: "#contact" },
  ];

  const socials = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-3">
              HKC <span className="text-accent">Kitchen</span>
            </h3>
            <p className="text-primary-foreground/70 font-body text-sm leading-relaxed max-w-xs">
              Crafting luxury kitchens that transform spaces into extraordinary
              culinary experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-sm font-semibold uppercase tracking-widest text-accent mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent font-body text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-body text-sm font-semibold uppercase tracking-widest text-accent mb-4">
              Contact
            </h4>
            <div className="space-y-2 text-primary-foreground/70 font-body text-sm">
              <p>123 Design Avenue, Dubai, UAE</p>
              <p>+971 50 123 4567</p>
              <p>info@hkckitchen.com</p>
            </div>
            <div className="flex gap-3 mt-5">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-9 h-9 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all duration-300"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-primary-foreground/50 font-body text-xs">
            © {new Date().getFullYear()} HKC Kitchen. All rights reserved.
          </p>
          <p className="text-primary-foreground/40 font-body text-xs">
            Designed with excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
