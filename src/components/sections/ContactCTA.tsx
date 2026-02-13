import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { siteConfig, whatsappMessages } from '@/data/config';
import { useAnalytics } from '@/hooks/useAnalytics';
import { Button } from '@/components/ui/button';
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'WhatsApp',
    value: siteConfig.contact.phone,
    action: 'whatsapp',
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: `${siteConfig.location.city}, ${siteConfig.location.state}`,
    action: null,
  },
  {
    icon: Clock,
    label: 'Horario',
    value: `${siteConfig.schedule.days}\n${siteConfig.schedule.hours}`,
    action: null,
  },
];

export function ContactCTA() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({
    threshold: 0.2,
  });
  const { trackWhatsAppClick, trackContactView } = useAnalytics();

  // Track when contact section becomes visible
  if (isVisible) {
    trackContactView();
  }

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('contact_cta');
    const message = encodeURIComponent(whatsappMessages.default);
    window.open(
      `https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`,
      '_blank'
    );
  };

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="section-padding bg-gradient-navy relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-pattern-dots opacity-20" />

      {/* Decorative Gradient Orbs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[hsl(var(--jade))]/10 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />

      <div className="max-w-4xl mx-auto container-padding relative z-10">
        {/* Main CTA Content */}
        <div
          className={`text-center mb-12 transition-all duration-700 ease-premium ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="inline-block px-4 py-2 bg-white/10 text-white text-small font-medium rounded-full mb-6">
            Agenda tu Cita
          </span>
          <h2 className="text-lg sm:text-2xl lg:text-4xl font-bold text-white mb-4">
            ¿Listo para agendar tu consulta?
          </h2>
          <p className="text-body-lg text-white/75 max-w-2xl mx-auto mb-8">
            Contáctame directamente por WhatsApp y agenda tu cita hoy mismo. 
            Respuesta en menos de 24 horas.
          </p>

          {/* Primary CTA Button */}
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-white text-[hsl(var(--navy))] hover:bg-white/95 font-semibold px-10 py-7 text-body-lg rounded-2xl transition-all duration-300 ease-premium hover:-translate-y-1 hover:shadow-2xl animate-pulse-soft"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Agendar por WhatsApp
          </Button>

          <p className="mt-4 text-small text-white/50">
            Respuesta rápida garantizada
          </p>
        </div>

        {/* Contact Info Cards */}
        <div
          className={`grid md:grid-cols-3 gap-6 transition-all duration-700 delay-200 ease-premium ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            const CardContent = (
              <div className="flex flex-col items-center text-center p-6 bg-white/8 backdrop-blur-sm rounded-2xl border border-white/15 hover:bg-white/12 transition-all duration-300 ease-premium">
                <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-caption text-white/50 mb-1">{info.label}</p>
                <p className="text-body font-medium text-white whitespace-pre-line">
                  {info.value}
                </p>
              </div>
            );

            if (info.action === 'whatsapp') {
              return (
                <button
                  key={info.label}
                  onClick={handleWhatsAppClick}
                  className="w-full text-left"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {CardContent}
                </button>
              );
            }

            return (
              <div key={info.label} style={{ transitionDelay: `${index * 100}ms` }}>
                {CardContent}
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-400 ease-premium ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-body text-white/60">
            También puedo atenderte en emergencias. No dudes en contactarme 
            para cualquier consulta sobre tu salud.
          </p>
        </div>
      </div>
    </section>
  );
}
