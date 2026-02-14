import { useEffect, useState } from 'react';
import { Phone, ChevronDown, Award, Users, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig, whatsappMessages } from '@/data/config';
import { useAnalytics } from '@/hooks/useAnalytics';

const heroStats = [
  { icon: Award, value: `${siteConfig.stats.yearsExperience}+`, label: 'Años de experiencia' },
  { icon: Users, value: `${siteConfig.stats.patientsAttended.toLocaleString()}+`, label: 'Pacientes atendidos' },
  { icon: Activity, value: `${siteConfig.stats.ultrasoundTypes}`, label: 'Tipos de ultrasonido' },
];

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { trackWhatsAppClick } = useAnalytics();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('hero');
    const message = encodeURIComponent(whatsappMessages.appointment);
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`, '_blank');
  };

  const scrollToServices = () => {
    document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="min-h-[calc(100vh-5rem)] bg-gradient-hero pt-20 flex flex-col relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-pattern-dots opacity-40" />

      {/* Decorative Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-[hsl(var(--jade))]/4 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-[hsl(var(--navy))]/4 rounded-full blur-3xl" />

      {/* Main Hero Content */}
      <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center">
        <div className="max-w-7xl mx-auto container-padding py-8 lg:py-10 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center -translate-y-3 lg:-translate-y-5">
            {/* Text Content */}
            <div className="space-y-7">
              {/* Micro Badge */}
              <div
                className={`transition-all duration-700 ease-premium ${
                  isLoaded
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
              >
                <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] text-[hsl(var(--jade-dark))]">
                  <Award className="w-3.5 h-3.5" />
                  Especialista en Ultrasonido Diagnóstico en {siteConfig.location.city}
                </span>
              </div>

              {/* Headline */}
              <div
                className={`space-y-4 transition-all duration-700 delay-100 ease-premium ${
                  isLoaded
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                }`}
              >
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-[hsl(var(--navy))]">
                  Diagnóstico preciso con{' '}
                  <span className="text-gradient-navy">tecnología de ultrasonido avanzada</span>
                </h1>
                <div className="w-20 h-[2px] rounded-full bg-[hsl(var(--jade))]/70" />
                <p className="text-body-lg text-[hsl(var(--warm-text))]/80 max-w-lg leading-relaxed">
                  Atención médica personalizada respaldada por años de experiencia
                  y equipamiento diagnóstico de alta precisión para resultados confiables.
                </p>
              </div>

              {/* CTA Buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-200 ease-premium ${
                  isLoaded
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                }`}
              >
                <Button
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="bg-[hsl(var(--jade))] hover:bg-[hsl(var(--jade-dark))] text-white font-medium px-8 py-6 text-body rounded-xl transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:shadow-glow-jade"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Agendar consulta
                </Button>
                <Button
                  onClick={scrollToServices}
                  variant="outline"
                  size="lg"
                  className="border-2 border-[hsl(var(--navy))] text-[hsl(var(--navy))] hover:bg-[hsl(var(--navy))] hover:text-white font-medium px-8 py-6 text-body rounded-xl transition-all duration-300 ease-premium"
                >
                  Ver servicios diagnósticos
                </Button>
              </div>

              {/* Trust Indicators */}
              <div
                className={`flex flex-wrap gap-6 pt-2 transition-all duration-700 delay-300 ease-premium ${
                  isLoaded
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                }`}
              >
                <div className="flex items-center gap-2 text-small text-[hsl(var(--warm-muted))]">
                  <div className="w-1.5 h-1.5 bg-[hsl(var(--jade))] rounded-full" />
                  <span>Atención personalizada</span>
                </div>
                <div className="flex items-center gap-2 text-small text-[hsl(var(--warm-muted))]">
                  <div className="w-1.5 h-1.5 bg-[hsl(var(--jade))] rounded-full" />
                  <span>Resultados el mismo día</span>
                </div>
                <div className="flex items-center gap-2 text-small text-[hsl(var(--warm-muted))]">
                  <div className="w-1.5 h-1.5 bg-[hsl(var(--jade))] rounded-full" />
                  <span>Tecnología de precisión</span>
                </div>
              </div>
            </div>

            {/* Doctor Image */}
            <div
              className={`relative transition-all duration-700 delay-400 ease-premium ${
                isLoaded
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
            >
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -top-6 -left-6 w-28 h-28 bg-[hsl(var(--jade))]/8 rounded-full blur-2xl" />
                <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-[hsl(var(--navy))]/8 rounded-full blur-2xl" />

                {/* Image Container */}
                <div className="relative bg-white rounded-3xl shadow-elevated overflow-hidden">
                  <img
                    src="images/doctor.png"
                    alt={`${siteConfig.fullName} - Especialista en Ultrasonido Diagnóstico`}
                    className="w-full h-auto object-cover"
                    loading="eager"
                  />

                  {/* Doctor Name Badge */}
                  <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-premium">
                    <p className="font-semibold text-[hsl(var(--warm-text))]">
                      {siteConfig.fullName}
                    </p>
                    <p className="text-small text-[hsl(var(--warm-muted))]">
                      Médico General · Ultrasonido Diagnóstico
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar - Institutional Style */}
      <div className="relative z-10 border-t border-[hsl(var(--warm-border))]">
        <div className="max-w-7xl mx-auto container-padding py-6">
          <div
            className={`grid grid-cols-3 gap-8 transition-all duration-700 delay-500 ease-premium ${
              isLoaded
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            {heroStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="flex items-center justify-center gap-4"
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <div className="w-10 h-10 bg-[hsl(var(--navy))]/6 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[hsl(var(--navy))]" />
                  </div>
                  <div className="text-left">
                    <p className="text-heading-4 font-bold text-[hsl(var(--warm-text))]">
                      {stat.value}
                    </p>
                    <p className="text-caption text-[hsl(var(--warm-muted))] uppercase tracking-wide">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 hidden lg:block">
        <button
          onClick={scrollToServices}
          className="flex flex-col items-center gap-2 text-[hsl(var(--warm-muted))] hover:text-[hsl(var(--navy))] transition-colors duration-300"
          aria-label="Desplazar a servicios"
        >
          <ChevronDown className="w-5 h-5 animate-bounce-slow" />
        </button>
      </div>
    </section>
  );
}
