import { BadgeCheck, GraduationCap, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/data/config';

export function AboutDoctor() {
  return (
    <section id="doctor" className="section-padding bg-white">
      <div className="max-w-5xl mx-auto container-padding space-y-6 sm:space-y-8">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[hsl(var(--jade))]">
            Sobre el doctor
          </p>
          <h2 className="text-2xl sm:text-[1.75rem] font-bold text-[hsl(var(--warm-text))] leading-tight">
            Confianza clínica, trato humano
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.2fr] gap-6 sm:gap-8 items-center">
          <div className="w-full rounded-2xl overflow-hidden border border-[hsl(var(--warm-border))]/80 bg-[hsl(var(--warm-light))] shadow-premium">
            <img
              src="images/doctor.hero.webp"
              alt={`${siteConfig.fullName} - Médico especialista en ultrasonido diagnóstico`}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="space-y-4">
            <div className="space-y-1">
              <h3 className="text-xl font-semibold text-[hsl(var(--warm-text))]">
                {siteConfig.fullName}
              </h3>
              <p className="text-sm text-[hsl(var(--warm-muted))]">
                {siteConfig.credentials.specialty}
              </p>
            </div>

            <ul className="space-y-3 text-sm text-[hsl(var(--warm-muted))]">
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 mt-0.5 text-[hsl(var(--jade))]" aria-hidden />
                <span>Cédula profesional: {siteConfig.credentials.professionalLicense}</span>
              </li>
              <li className="flex items-start gap-2">
                <GraduationCap className="w-4 h-4 mt-0.5 text-[hsl(var(--jade))]" aria-hidden />
                <span>Formación: {siteConfig.credentials.university}</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="w-4 h-4 mt-0.5 text-[hsl(var(--jade))]" aria-hidden />
                <span>
                  Acompañamiento personalizado para explicar hallazgos y siguientes pasos sin tecnicismos.
                </span>
              </li>
            </ul>

            <p className="text-[15px] text-[hsl(var(--warm-muted))] leading-relaxed">
              Creo que un buen diagnóstico reduce ansiedad. Por eso dedico tiempo a explicar tus imágenes, resolver dudas y coordinar el seguimiento que necesites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
