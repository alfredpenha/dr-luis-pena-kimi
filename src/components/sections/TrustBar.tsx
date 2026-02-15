import { Clock3, Star, Users } from 'lucide-react';
import { siteConfig } from '@/data/config';

export function TrustBar() {
  const stats = siteConfig.stats;

  return (
    <div className="w-full rounded-xl border border-[hsl(var(--warm-border))]/70 bg-white/85 px-4 py-3 shadow-premium">
      <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-[hsl(var(--warm-text))]">
        <TrustItem icon={Star} label={`${stats.yearsExperience}+ años`} />
        <div className="hidden h-4 w-px bg-[hsl(var(--warm-border))] sm:block" aria-hidden />
        <TrustItem icon={Users} label={`+${stats.patientsAttended.toLocaleString()} pacientes`} />
        <div className="hidden h-4 w-px bg-[hsl(var(--warm-border))] sm:block" aria-hidden />
        <TrustItem icon={Clock3} label="Resultados el mismo día" />
      </div>
    </div>
  );
}

function TrustItem({ icon: Icon, label }: { icon: typeof Star; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[hsl(var(--navy))]/6 text-[hsl(var(--navy))]">
        <Icon className="w-3.5 h-3.5" />
      </span>
      <span className="font-medium leading-tight">{label}</span>
    </div>
  );
}
