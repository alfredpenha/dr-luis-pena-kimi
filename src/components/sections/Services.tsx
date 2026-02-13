import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { services } from '@/data/services';
import { siteConfig, whatsappMessages } from '@/data/config';
import { useAnalytics } from '@/hooks/useAnalytics';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

export function Services() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({
    threshold: 0.1,
  });
  const { trackWhatsAppClick } = useAnalytics();

  const handleServiceClick = (serviceTitle: string) => {
    trackWhatsAppClick('services');
    const message = encodeURIComponent(
      whatsappMessages.ultrasound(serviceTitle.toLowerCase())
    );
    window.open(
      `https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`,
      '_blank'
    );
  };

  return (
    <section
      id="servicios"
      ref={sectionRef}
      className="section-padding bg-[hsl(var(--warm-light))] relative"
    >
      {/* Subtle Pattern */}
      <div className="absolute inset-0 bg-pattern-grid opacity-40" />

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-600 ease-premium ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="inline-block px-4 py-2 bg-[hsl(var(--jade))]/10 text-[hsl(var(--jade))] text-small font-medium rounded-full mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-heading-1 text-[hsl(var(--warm-text))] mb-4">
            Servicios Médicos
          </h2>
          <p className="text-body-lg text-[hsl(var(--warm-muted))]">
            Atención integral con tecnología de última generación. Ofrecemos una 
            amplia gama de servicios de medicina general y ultrasonido diagnóstico.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.id}
                className={`group bg-white border border-[hsl(var(--warm-border))] rounded-2xl overflow-hidden card-elevate ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 80}ms` : '0ms',
                }}
              >
                <CardContent className="p-6">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-[hsl(var(--navy))]/8 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[hsl(var(--jade))] group-hover:scale-105 transition-all duration-300 ease-premium">
                    <Icon className="w-7 h-7 text-[hsl(var(--navy))] group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="text-heading-3 text-[hsl(var(--warm-text))] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-body text-[hsl(var(--warm-muted))] mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <Button
                    onClick={() => handleServiceClick(service.title)}
                    variant="ghost"
                    className="text-[hsl(var(--jade))] hover:text-[hsl(var(--jade-dark))] hover:bg-[hsl(var(--jade))]/8 font-medium p-0 h-auto transition-colors duration-300"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Agendar este servicio
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-16 text-center transition-all duration-600 delay-500 ease-premium ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-body text-[hsl(var(--warm-muted))] mb-5">
            ¿Necesitas información sobre algún servicio específico?
          </p>
          <Button
            onClick={() => handleServiceClick('información')}
            size="lg"
            className="bg-[hsl(var(--jade))] hover:bg-[hsl(var(--jade-dark))] text-white font-medium px-8 py-6 rounded-xl transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:shadow-glow-jade"
          >
            <Phone className="w-5 h-5 mr-2" />
            Consultar por WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
