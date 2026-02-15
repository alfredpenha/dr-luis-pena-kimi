import { useEffect, useState } from 'react';
import { Phone, Award, Users, Activity, CheckCircle2, type LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig, whatsappMessages } from '@/data/config';
import { useAnalytics } from '@/hooks/useAnalytics';

interface HeroMetricItem {
  icon: LucideIcon;
  value: string;
  label: string;
  id: 'years' | 'patients' | 'types';
}

interface HeroMetricsProps {
  items: HeroMetricItem[];
  isLoaded: boolean;
}

function HeroMetrics({ items, isLoaded }: HeroMetricsProps) {
  const years = items.find((item) => item.id === 'years');
  const patients = items.find((item) => item.id === 'patients');
  const types = items.find((item) => item.id === 'types');

  if (!years || !patients || !types) return null;

  const desktopItems = [years, patients, types];
  const mobileItems = [years, types, patients];

  return (
    <div
      className={`mt-4 lg:mt-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
      }`}
    >
      <div className="hidden lg:grid lg:grid-cols-3 gap-3">
        {desktopItems.map((item) => {
          const Icon = item.icon;
          return (
            <article
              key={item.id}
              className="min-w-0 rounded-2xl bg-white/80 border border-[hsl(var(--warm-border))]/70 shadow-[0_10px_24px_-18px_rgba(30,42,56,0.34)] px-3.5 py-2.5"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 shrink-0 rounded-lg bg-[hsl(var(--navy))]/7 flex items-center justify-center">
                  <Icon className="w-4.5 h-4.5 text-[hsl(var(--navy))]" />
                </div>
                <div className="min-w-0">
                  <p className="text-base xl:text-lg font-bold text-[hsl(var(--warm-text))] leading-[1.05] whitespace-nowrap">
                    {item.value}
                  </p>
                  <p className="text-[0.78rem] text-[hsl(var(--warm-muted))] leading-[1.05]">
                    {item.label}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="grid lg:hidden grid-cols-2 gap-3">
        {mobileItems.map((item) => {
          const Icon = item.icon;
          const isPatients = item.id === 'patients';
          return (
            <article
              key={item.id}
              className={`rounded-xl bg-white/90 border border-[hsl(var(--warm-border))]/70 shadow-[0_8px_18px_-14px_rgba(30,42,56,0.32)] px-3.5 py-3 ${
                isPatients ? 'col-span-2' : ''
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 shrink-0 rounded-md bg-[hsl(var(--navy))]/7 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-[hsl(var(--navy))]" />
                </div>
                <div className="min-w-0">
                  <p className="text-base font-bold text-[hsl(var(--warm-text))] leading-[1.05] whitespace-nowrap">
                    {item.value}
                  </p>
                  {isPatients ? (
                    <p className="text-xs text-[hsl(var(--warm-muted))] leading-[1.05]">
                      <span className="block">Pacientes</span>
                      <span className="block">atendidos</span>
                    </p>
                  ) : (
                    <p className="text-xs text-[hsl(var(--warm-muted))] leading-[1.05]">
                      {item.label}
                    </p>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

const benefits = [
  'Atención personalizada',
  'Resultados el mismo día',
  'Tecnología de precisión',
];

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { trackWhatsAppClick } = useAnalytics();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const heroMetrics: HeroMetricItem[] = [
    { id: 'years', icon: Award, value: `${siteConfig.stats.yearsExperience}+`, label: 'Años de experiencia' },
    { id: 'patients', icon: Users, value: `${siteConfig.stats.patientsAttended.toLocaleString()}+`, label: 'Pacientes atendidos' },
    { id: 'types', icon: Activity, value: `${siteConfig.stats.ultrasoundTypes}`, label: 'Tipos de ultrasonido' },
  ];

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
      className="relative overflow-x-hidden bg-gradient-hero py-12 lg:py-16"
    >
      <div className="absolute inset-0 bg-pattern-dots opacity-35" />
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-[hsl(var(--jade))]/4 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-[hsl(var(--navy))]/4 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto container-padding">
        <div className="flex flex-col justify-center lg:h-[640px]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] items-start lg:items-center gap-8 lg:gap-10 h-full">
            <div className="space-y-5 max-w-[520px]">
              <p className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.12em] text-[hsl(var(--jade-dark))] leading-[1.05]">
                <Award className="w-3.5 h-3.5" />
                Especialista en Ultrasonido Diagnóstico en {siteConfig.location.city}
              </p>

              <div className="space-y-3">
                <h1
                  className={`max-w-[520px] text-3xl sm:text-4xl lg:text-[2.25rem] xl:text-[2.55rem] font-extrabold leading-[1.05] tracking-[-0.01em] text-[hsl(var(--navy))] transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                  }`}
                >
                  Diagnóstico preciso con{' '}
                  <span className="text-gradient-navy">tecnología de ultrasonido avanzada</span>
                </h1>
                <div className="w-20 h-[2px] rounded-full bg-[hsl(var(--jade))]/70" />
                <p className="text-body-lg text-[hsl(var(--warm-text))]/80 max-w-xl leading-relaxed">
                  Atención médica personalizada respaldada por años de experiencia
                  y equipamiento diagnóstico de alta precisión para resultados confiables.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                <Button
                  onClick={handleWhatsAppClick}
                  size="lg"
                  aria-label="Agendar consulta por WhatsApp"
                  className="bg-[hsl(var(--jade))] hover:bg-[hsl(var(--jade-dark))] text-white font-medium px-8 py-6 text-body rounded-xl transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:shadow-glow-jade"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Agendar consulta
                </Button>
                <Button
                  onClick={scrollToServices}
                  variant="outline"
                  size="lg"
                  aria-label="Ver servicios diagnósticos"
                  className="border border-[hsl(var(--navy))]/45 text-[hsl(var(--warm-muted))] hover:border-[hsl(var(--navy))]/60 hover:text-[hsl(var(--navy))] hover:bg-[hsl(var(--navy))]/4 font-medium px-8 py-6 text-body rounded-xl transition-all duration-300 ease-premium"
                >
                  Ver servicios diagnósticos
                </Button>
              </div>

              <HeroMetrics items={heroMetrics} isLoaded={isLoaded} />

              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 mt-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2.5 text-sm text-[hsl(var(--warm-muted))]">
                    <CheckCircle2 className="w-4 h-4 text-[hsl(var(--jade))] shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative lg:h-full lg:flex lg:items-center">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[hsl(var(--jade))]/8 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-[hsl(var(--navy))]/8 rounded-full blur-2xl" />

              <div className="relative bg-white/60 lg:bg-[hsl(var(--warm-light))] rounded-3xl shadow-elevated overflow-hidden w-full h-full">
                <img
                  src="images/doctor.hero.webp"
                  alt={`${siteConfig.fullName} - Especialista en Ultrasonido Diagnóstico`}
                  className="w-full h-full object-contain object-center bg-[hsl(var(--warm-light))]"
                  loading="eager"
                />

                <div className="hidden lg:block absolute left-5 top-5 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-premium max-w-[20rem]">
                  <p className="font-semibold text-[hsl(var(--warm-text))]">
                    {siteConfig.fullName}
                  </p>
                  <p className="text-small text-[hsl(var(--warm-muted))]">
                    Médico General · Ultrasonido Diagnóstico
                  </p>
                </div>
              </div>

              <div className="lg:hidden mt-3 bg-white/95 rounded-xl p-3 border border-[hsl(var(--warm-border))]/70 shadow-premium">
                <p className="font-semibold text-[hsl(var(--warm-text))] text-sm">
                  {siteConfig.fullName}
                </p>
                <p className="text-xs text-[hsl(var(--warm-muted))] leading-[1.05]">
                  Médico General · Ultrasonido Diagnóstico
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}












