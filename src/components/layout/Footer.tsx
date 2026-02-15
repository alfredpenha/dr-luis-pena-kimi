import { siteConfig } from '@/data/config';

export function Footer() {
  return (
    <footer className="bg-[hsl(var(--warm-light))] text-[hsl(var(--warm-muted))]">
      <div className="max-w-5xl mx-auto container-padding py-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <img
            src="images/logo.png"
            alt="Dr. Luis Peña"
            className="h-10 w-auto"
            loading="lazy"
          />
          <div>
            <p className="text-sm font-semibold text-[hsl(var(--warm-text))]">{siteConfig.fullName}</p>
            <p className="text-xs text-[hsl(var(--warm-muted))]">
              Ultrasonido diagnóstico · {siteConfig.location.city}
            </p>
          </div>
        </div>
        <p className="text-xs text-[hsl(var(--warm-muted))]">
          © {new Date().getFullYear()} Atención con fines informativos. Ante emergencias, acude a urgencias.
        </p>
      </div>
    </footer>
  );
}
