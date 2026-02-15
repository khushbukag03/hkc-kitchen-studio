import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "971501234567";
  const message = encodeURIComponent("Hello! I'm interested in HKC Kitchen designs.");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 whatsapp-pulse"
      style={{ backgroundColor: "hsl(142, 70%, 45%)" }}
    >
      <MessageCircle className="w-7 h-7 text-accent-foreground" />
    </a>
  );
};

export default WhatsAppButton;
