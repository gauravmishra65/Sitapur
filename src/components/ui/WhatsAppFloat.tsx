// src/components/ui/WhatsAppFloat.tsx
// Desktop-only floating WhatsApp button (mobile is handled by MobileBottomBar)
import { siteConfig } from '../../config/siteConfig';

export default function WhatsAppFloat() {
  const waUrl = `https://wa.me/${siteConfig.WHATSAPP}?text=${encodeURIComponent(siteConfig.WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden lg:flex fixed bottom-6 right-6 z-50 items-center gap-2.5 bg-[#25d366] text-white pl-3.5 pr-5 py-3 rounded-pill shadow-lg hover:shadow-xl hover:scale-105 transition-all"
      aria-label="Chat with BrightNest Tuition on WhatsApp"
    >
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5 fill-white flex-shrink-0"
        aria-hidden="true"
      >
        <path d="M12.031 0C5.384 0 0 5.383 0 12.031c0 2.122.557 4.115 1.523 5.847L.046 23.492a.5.5 0 00.614.614l5.614-1.477A12.008 12.008 0 0012.031 24C18.678 24 24 18.617 24 12.031 24 5.383 18.678 0 12.031 0zm6.078 16.8c-.27.756-1.337 1.385-2.19 1.568-.584.123-1.347.222-3.915-.84-3.284-1.347-5.401-4.677-5.564-4.893-.155-.215-1.307-1.74-1.307-3.32 0-1.578.828-2.354 1.121-2.677.271-.292.588-.364.785-.364l.563.011c.181.008.425-.069.665.507.247.59.84 2.042.913 2.19.074.147.123.318.025.507-.1.19-.148.309-.296.474-.148.166-.312.37-.445.497-.148.14-.302.293-.13.574.172.28.765 1.26 1.64 2.04 1.128 1.006 2.08 1.316 2.37 1.463.29.147.46.123.63-.074.172-.197.738-.86.935-1.155.197-.295.394-.246.665-.148.27.098 1.72.812 2.015.961.295.148.492.222.566.345.073.123.073.713-.197 1.47z" />
      </svg>
      <span className="text-sm font-bold">Chat on WhatsApp</span>
    </a>
  );
}
