import { Phone, MessageCircle, Clock3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig, whatsappMessages } from '@/data/config';
import { useAnalytics } from '@/hooks/useAnalytics';

export function FinalCTA() {
  const { trackWhatsAppClick } = useAnalytics();

  const handleWhatsApp = () => {
    trackWhatsAppClick('final_cta');
    const message = encodeURIComponent(whatsappMessages.default);
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <section
      id="agendar"
      className="section-padding bg-gradient-navy text-white"
    >
      <div className="max-w-5xl mx-auto container-padding space-y-5 sm:space-y-7">
        <h2 className="text-2xl sm:text-[1.9rem] font-bold leading-tight">
          ¿Listo para agendar tu estudio?
        </h2>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
          <Button
            onClick={handleWhatsApp}
            className="w-full sm:w-auto bg-[hsl(var(--jade))] hover:bg-[hsl(var(--jade-dark))] text-white text-base py-4 px-6 rounded-xl shadow-glow-jade"
            aria-label="Agendar por WhatsApp"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp para agendar
          </Button>
          <a
            href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-4 py-3 text-white hover:bg-white/10 transition-colors"
            aria-label="Llamar por teléfono"
          >
            <Phone className="w-5 h-5" />
            {siteConfig.contact.phone}
          </a>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
          <span className="inline-flex items-center gap-2">
            <Clock3 className="w-4 h-4" />
            {siteConfig.schedule.days} · {siteConfig.schedule.hours}
          </span>
          <span className="inline-flex items-center gap-2">
            Ubicación: {siteConfig.location.city}, {siteConfig.location.state}
          </span>
        </div>
      </div>
    </section>
  );
}
