import { MessageCircle } from 'lucide-react';
import { siteConfig, whatsappMessages } from '@/data/config';
import { useAnalytics } from '@/hooks/useAnalytics';

export function FloatingWhatsAppButton() {
  const { trackWhatsAppClick } = useAnalytics();

  const handleClick = () => {
    trackWhatsAppClick('floating_button');
    const message = encodeURIComponent(whatsappMessages.default);
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:bg-[#128C7E] transition-all duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      aria-label="Agendar por WhatsApp"
      title="Agendar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 mx-auto" />
    </button>
  );
}
