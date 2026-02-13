import { useEffect, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { siteConfig } from '@/data/config';
import { Award, Users, Activity, GraduationCap, Stethoscope, BadgeCheck } from 'lucide-react';

interface StatItemProps {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  isVisible: boolean;
  delay: number;
}

function AnimatedCounter({
  value,
  suffix,
  isVisible,
}: {
  value: number;
  suffix: string;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

function StatItem({ icon: Icon, value, suffix, label, isVisible, delay }: StatItemProps) {
  return (
    <div
      className={`text-center p-6 bg-white rounded-2xl shadow-premium card-elevate ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${delay}ms`, transitionDuration: '600ms', transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}
    >
      <div className="w-12 h-12 bg-[hsl(var(--jade))]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
        <Icon className="w-6 h-6 text-[hsl(var(--jade))]" />
      </div>
      <div className="text-heading-1 font-bold text-[hsl(var(--navy))] mb-1">
        <AnimatedCounter value={value} suffix={suffix} isVisible={isVisible} />
      </div>
      <p className="text-small text-[hsl(var(--warm-muted))]">{label}</p>
    </div>
  );
}

const credentials = [
  {
    icon: GraduationCap,
    label: 'Formación',
    value: siteConfig.credentials.university,
  },
  {
    icon: Stethoscope,
    label: 'Especialidad',
    value: siteConfig.credentials.specialty,
  },
  {
    icon: BadgeCheck,
    label: 'Cédula Profesional',
    value: siteConfig.credentials.professionalLicense,
  },
];

export function About() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({
    threshold: 0.1,
  });

  const stats = [
    {
      icon: Award,
      value: siteConfig.stats.yearsExperience,
      suffix: '+',
      label: 'Años de Experiencia',
    },
    {
      icon: Users,
      value: siteConfig.stats.patientsAttended,
      suffix: '+',
      label: 'Pacientes Atendidos',
    },
    {
      icon: Activity,
      value: siteConfig.stats.ultrasoundTypes,
      suffix: '',
      label: 'Tipos de Ultrasonido',
    },
  ];

  return (
    <section
      id="sobre-mi"
      ref={sectionRef}
      className="section-padding bg-white relative"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(var(--jade))]/3 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div
            className={`relative transition-all duration-700 ease-premium ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-6'
            }`}
          >
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[hsl(var(--jade))]/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[hsl(var(--navy))]/10 rounded-full blur-2xl" />

              {/* Main Image */}
              <div className="relative bg-white rounded-3xl shadow-elevated overflow-hidden">
                <img
                  src="images/doctor.png"
                  alt={`${siteConfig.fullName} en consultorio`}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-premium p-4 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[hsl(var(--jade))]/10 rounded-full flex items-center justify-center">
                    <BadgeCheck className="w-5 h-5 text-[hsl(var(--jade))]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[hsl(var(--warm-text))] text-small">
                      Médico Certificado
                    </p>
                    <p className="text-caption text-[hsl(var(--warm-muted))]">
                      Cédula Profesional
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="space-y-8">
            <div
              className={`space-y-5 transition-all duration-700 delay-100 ease-premium ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
            >
              <span className="inline-block px-4 py-2 bg-[hsl(var(--navy))]/8 text-[hsl(var(--navy))] text-small font-medium rounded-full">
                Sobre Mí
              </span>
              <h2 className="text-heading-1 text-[hsl(var(--warm-text))]">
                Dr. Luis Alberto Peña Molina
              </h2>
              <p className="text-body-lg text-[hsl(var(--warm-muted))] leading-relaxed">
                Médico General egresado de la {siteConfig.credentials.university} con
                especialización en ultrasonido diagnóstico. Comprometido con brindar
                atención médica de calidad con un enfoque humano y profesional.
              </p>
              <p className="text-body text-[hsl(var(--warm-muted))] leading-relaxed">
                Mi objetivo es proporcionar diagnósticos precisos y un trato cálido a
                cada paciente, utilizando tecnología de vanguardia en ultrasonido para
                ofrecer resultados confiables que contribuyan a su bienestar y salud.
              </p>
            </div>

            {/* Credentials */}
            <div
              className={`space-y-4 transition-all duration-700 delay-200 ease-premium ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
            >
              <h3 className="text-heading-4 text-[hsl(var(--warm-text))]">
                Credenciales
              </h3>
              <div className="space-y-3">
                {credentials.map((cred) => {
                  const Icon = cred.icon;
                  return (
                    <div
                      key={cred.label}
                      className="flex items-center gap-4 p-4 bg-[hsl(var(--warm-light))] rounded-xl border border-[hsl(var(--warm-border))]"
                    >
                      <div className="w-10 h-10 bg-[hsl(var(--navy))]/8 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[hsl(var(--navy))]" />
                      </div>
                      <div>
                        <p className="text-caption text-[hsl(var(--warm-muted))] uppercase tracking-wide">
                          {cred.label}
                        </p>
                        <p className="font-semibold text-[hsl(var(--warm-text))]">
                          {cred.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              isVisible={isVisible}
              delay={300 + index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
