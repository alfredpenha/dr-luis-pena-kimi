import { Clock3, FileCheck2, Stethoscope, MapPin } from 'lucide-react';
import { siteConfig } from '@/data/config';

const expectations = [
  {
    icon: Clock3,
    title: 'Duración aproximada',
    detail: '20–30 minutos según el estudio.',
  },
  {
    icon: FileCheck2,
    title: 'Entrega de resultados',
    detail: 'Informe e imágenes el mismo día.',
  },
  {
    icon: Stethoscope,
    title: 'Interpretación incluida',
    detail: 'Explicación clara y recomendaciones puntuales.',
  },
  {
    icon: MapPin,
    title: 'Ubicación',
    detail: siteConfig.location.city,
  },
];

export function WhatToExpect() {
  return (
    <section id="expectativas" className="section-padding bg-gradient-warm">
      <div className="max-w-5xl mx-auto container-padding space-y-6 sm:space-y-8">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[hsl(var(--jade))]">
            ¿Qué puedes esperar?
          </p>
          <h2 className="text-2xl sm:text-[1.75rem] font-bold text-[hsl(var(--warm-text))] leading-tight">
            Menos ansiedad, más claridad
          </h2>
          <p className="text-[15px] text-[hsl(var(--warm-muted))] max-w-2xl">
            Información clave desde el inicio para que sepas exactamente qué ocurrirá durante tu estudio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {expectations.map((item) => (
            <article
              key={item.title}
              className="flex items-start gap-3 rounded-2xl border border-[hsl(var(--warm-border))]/75 bg-white/90 p-4 shadow-premium"
            >
              <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[hsl(var(--navy))]/8 text-[hsl(var(--navy))]">
                <item.icon className="w-5 h-5" aria-hidden />
              </span>
              <div className="space-y-1">
                <h3 className="text-base font-semibold text-[hsl(var(--warm-text))] leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-[hsl(var(--warm-muted))] leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
