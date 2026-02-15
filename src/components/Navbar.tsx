import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Kitchen", href: "#kitchen" },
  { label: "Contact", href: "#contact" },
];

const Navbar = ({ onGetQuote }: { onGetQuote: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg"
          : "bg-primary/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <span className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">
              HKC <span className="text-accent">Kitchen</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-primary-foreground/80 hover:text-accent font-body text-sm font-medium tracking-wide uppercase transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={onGetQuote}
              className="gold-gradient text-accent-foreground px-6 py-2.5 rounded font-body text-sm font-semibold tracking-wide uppercase hover:opacity-90 transition-opacity duration-300"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-primary border-t border-accent/20 pb-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-primary-foreground/80 hover:text-accent font-body text-sm font-medium tracking-wide uppercase transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                onGetQuote();
              }}
              className="mx-4 mt-2 gold-gradient text-accent-foreground px-6 py-2.5 rounded font-body text-sm font-semibold tracking-wide uppercase w-[calc(100%-2rem)]"
            >
              Get a Quote
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
