import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Cpu, UserCheck, ShieldCheck, Building2 } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'Tecnología Avanzada',
    description:
      'Equipos de ultrasonido de última generación para diagnósticos precisos y confiables.',
  },
  {
    icon: UserCheck,
    title: 'Atención Personalizada',
    description:
      'Cada paciente recibe atención individualizada y un trato humano y cercano.',
  },
  {
    icon: ShieldCheck,
    title: 'Resultados Confiables',
    description:
      'Diagnósticos precisos respaldados por años de experiencia y formación continua.',
  },
  {
    icon: Building2,
    title: 'Consulta Moderna',
    description:
      'Instalaciones cómodas y equipadas en el centro de Tuxtla Gutiérrez.',
  },
];

export function WhyChooseMe() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({
    threshold: 0.1,
  });

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-[hsl(var(--warm-light))] relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(var(--navy))]/3 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[hsl(var(--jade))]/3 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

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
            Ventajas
          </span>
          <h2 className="text-heading-1 text-[hsl(var(--warm-text))] mb-4">
            ¿Por Qué Elegirme?
          </h2>
          <p className="text-body-lg text-[hsl(var(--warm-muted))]">
            Me comprometo a brindarte la mejor atención médica con profesionalismo,
            tecnología de punta y un trato humano que te hará sentir en confianza.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`group text-center p-8 bg-white rounded-2xl shadow-premium card-elevate ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 80}ms` : '0ms',
                  transitionDuration: '500ms',
                  transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
                }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-[hsl(var(--jade))]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[hsl(var(--jade))] group-hover:scale-105 transition-all duration-300 ease-premium">
                  <Icon className="w-8 h-8 text-[hsl(var(--jade))] group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-heading-3 text-[hsl(var(--warm-text))] mb-3">
                  {feature.title}
                </h3>
                <p className="text-body text-[hsl(var(--warm-muted))] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div
          className={`mt-16 flex flex-wrap justify-center gap-8 transition-all duration-600 delay-500 ease-premium ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex items-center gap-2 text-[hsl(var(--warm-muted))]">
            <div className="w-2 h-2 bg-[hsl(var(--jade))] rounded-full" />
            <span className="text-small">Consulta Presencial</span>
          </div>
          <div className="flex items-center gap-2 text-[hsl(var(--warm-muted))]">
            <div className="w-2 h-2 bg-[hsl(var(--jade))] rounded-full" />
            <span className="text-small">Resultados el Mismo Día</span>
          </div>
          <div className="flex items-center gap-2 text-[hsl(var(--warm-muted))]">
            <div className="w-2 h-2 bg-[hsl(var(--jade))] rounded-full" />
            <span className="text-small">Precios Accesibles</span>
          </div>
          <div className="flex items-center gap-2 text-[hsl(var(--warm-muted))]">
            <div className="w-2 h-2 bg-[hsl(var(--jade))] rounded-full" />
            <span className="text-small">Agenda Flexible</span>
          </div>
        </div>
      </div>
    </section>
  );
}
