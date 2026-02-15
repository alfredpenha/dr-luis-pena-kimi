import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TrustBar } from './TrustBar';
import { siteConfig, whatsappMessages } from '@/data/config';
import { useAnalytics } from '@/hooks/useAnalytics';

export function HeroMobile() {
  const { trackWhatsAppClick } = useAnalytics();

  const handleWhatsApp = () => {
    trackWhatsAppClick('hero_primary');
    const message = encodeURIComponent(whatsappMessages.ultrasound('diagnóstico'));
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`, '_blank');
  };

  const handleCall = () => {
    trackWhatsAppClick('hero_secondary_call');
    window.location.href = `tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`;
  };

  return (
    <section
      id="inicio"
      className="relative bg-gradient-hero pb-12 pt-24 sm:pt-28 min-h-[82vh] max-h-[120vh]"
    >
      <div className="absolute inset-0 bg-pattern-dots opacity-30 pointer-events-none" />
      <div className="relative z-10 max-w-5xl mx-auto container-padding">
        <div className="flex flex-col gap-8 sm:gap-10">
          <div className="space-y-4 max-w-xl">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[hsl(var(--jade))]">
              Ultrasonido clínico · {siteConfig.location.city}
            </p>
            <h1 className="text-[1.9rem] leading-[1.05] sm:text-3xl font-extrabold text-[hsl(var(--warm-text))]">
              Ultrasonido diagnóstico en {siteConfig.location.city} con resultados confiables
            </h1>
            <p className="text-base text-[hsl(var(--warm-muted))] leading-relaxed max-w-lg">
              Agenda directo con el especialista. Estudios precisos, trato humano y entrega de resultados el mismo día.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              onClick={handleWhatsApp}
              className="w-full sm:flex-1 bg-[hsl(var(--jade))] hover:bg-[hsl(var(--jade-dark))] text-white text-base py-4 rounded-xl shadow-glow-jade"
              aria-label="Agendar por WhatsApp"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Agendar por WhatsApp
            </Button>
            <Button
              onClick={handleCall}
              variant="outline"
              className="w-full sm:w-auto border-[hsl(var(--navy))]/35 text-[hsl(var(--navy))] hover:border-[hsl(var(--navy))]/60 hover:bg-[hsl(var(--navy))]/5 py-4 rounded-xl"
              aria-label="Llamar ahora"
            >
              <Phone className="w-5 h-5 mr-2" />
              Llamar ahora
            </Button>
          </div>

          <TrustBar />

          <div className="w-full rounded-3xl overflow-hidden bg-white/80 border border-[hsl(var(--warm-border))]/70 shadow-elevated">
            <img
              src="images/doctor.hero.webp"
              alt={`${siteConfig.fullName} - Especialista en ultrasonido diagnóstico`}
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
