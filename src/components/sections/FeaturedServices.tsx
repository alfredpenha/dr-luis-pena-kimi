import { ArrowRight, Info, type LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { services } from '@/data/services';
import { siteConfig, whatsappMessages } from '@/data/config';
import { useAnalytics } from '@/hooks/useAnalytics';

const featuredIds = [
  'ultrasonido-abdominal',
  'ultrasonido-tiroides',
  'ultrasonido-mamario',
  'ultrasonido-obstetrico',
];

export function FeaturedServices() {
  const { trackWhatsAppClick, trackServiceView } = useAnalytics();

  const featured = services.filter((service) => featuredIds.includes(service.id)).slice(0, 4);

  const handleConsult = (title: string) => {
    trackServiceView(title);
    trackWhatsAppClick('featured_services');
    const message = encodeURIComponent(whatsappMessages.ultrasound(title));
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <section id="servicios" className="section-padding bg-white">
      <div className="max-w-5xl mx-auto container-padding space-y-6 sm:space-y-8">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[hsl(var(--jade))]">
            Estudios más solicitados
          </p>
          <h2 className="text-2xl sm:text-[1.75rem] font-bold text-[hsl(var(--warm-text))] leading-tight">
            4 estudios prioritarios
          </h2>
          <p className="text-[15px] text-[hsl(var(--warm-muted))] max-w-2xl">
            Selección enfocada en diagnósticos frecuentes para agendar rápido sin navegar listas interminables.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {featured.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              Icon={service.icon}
              onConsult={() => handleConsult(service.title)}
            />
          ))}
        </div>

        <div className="pt-1">
          <Button
            variant="outline"
            className="w-full sm:w-auto border-[hsl(var(--navy))]/35 text-[hsl(var(--navy))] hover:border-[hsl(var(--navy))]/60 hover:bg-[hsl(var(--navy))]/5"
            asChild
          >
            <a href="#agendar" aria-label="Ver todos los estudios">
              Ver todos los estudios
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  description,
  Icon,
  onConsult,
}: {
  title: string;
  description: string;
  Icon: LucideIcon;
  onConsult: () => void;
}) {
  const shortDescription = description.split('.').slice(0, 2).join('. ').trim();

  return (
    <article className="rounded-2xl border border-[hsl(var(--warm-border))]/80 bg-[hsl(var(--warm-light))] p-4 shadow-premium card-elevate">
      <div className="flex items-start gap-3">
        <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[hsl(var(--navy))] shadow-premium">
          <Icon className="w-5 h-5" aria-hidden />
        </span>
        <div className="space-y-2 min-w-0">
          <h3 className="text-lg font-semibold text-[hsl(var(--warm-text))] leading-tight">
            {title}
          </h3>
          <p className="text-sm text-[hsl(var(--warm-muted))] leading-relaxed overflow-hidden text-ellipsis">
            {shortDescription}
          </p>
          <Button
            size="sm"
            className="mt-1 bg-[hsl(var(--jade))] hover:bg-[hsl(var(--jade-dark))] text-white"
            onClick={onConsult}
            aria-label={`Consultar ${title}`}
          >
            <Info className="w-4 h-4 mr-2" />
            Consultar
          </Button>
        </div>
      </div>
    </article>
  );
}
