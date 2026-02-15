import { X } from "lucide-react";
import { useState } from "react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteModal = ({ isOpen, onClose }: QuoteModalProps) => {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-primary/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-card rounded-lg shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
        style={{ animation: "fadeInUp 0.3s ease-out" }}
      >
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                Get a <span className="text-accent">Quote</span>
              </h3>
              <p className="text-muted-foreground font-body text-sm mt-1">
                Tell us about your dream kitchen
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>

          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <span className="text-accent text-3xl">✓</span>
              </div>
              <h4 className="font-display text-xl font-semibold text-foreground">
                Thank You!
              </h4>
              <p className="text-muted-foreground font-body text-sm mt-2">
                We'll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-body text-sm font-medium text-foreground block mb-1.5">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  maxLength={100}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
                  placeholder="John Doe"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-body text-sm font-medium text-foreground block mb-1.5">
                    Phone Number
                  </label>
                  <input
                    required
                    type="tel"
                    maxLength={20}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
                    placeholder="+971 50 123 4567"
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground block mb-1.5">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    maxLength={255}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-body text-sm font-medium text-foreground block mb-1.5">
                    Kitchen Type
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
                  >
                    <option value="">Select type</option>
                    <option>Modular Kitchen</option>
                    <option>Luxury Kitchen</option>
                    <option>Contemporary Design</option>
                    <option>Custom Cabinets</option>
                  </select>
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground block mb-1.5">
                    Budget Range
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
                  >
                    <option value="">Select range</option>
                    <option>$10,000 – $25,000</option>
                    <option>$25,000 – $50,000</option>
                    <option>$50,000 – $100,000</option>
                    <option>$100,000+</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="font-body text-sm font-medium text-foreground block mb-1.5">
                  Message / Requirements
                </label>
                <textarea
                  maxLength={1000}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition resize-none"
                  placeholder="Tell us about your dream kitchen..."
                />
              </div>
              <button
                type="submit"
                className="w-full gold-gradient text-accent-foreground py-3.5 rounded-lg font-body font-semibold text-base tracking-wide uppercase hover:opacity-90 transition-opacity duration-300"
              >
                Submit Request
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
