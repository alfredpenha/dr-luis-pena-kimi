import { useEffect, useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig, whatsappMessages } from '@/data/config';
import { useAnalytics } from '@/hooks/useAnalytics';

const navLinks = [
  { href: '#servicios', label: 'Estudios' },
  { href: '#expectativas', label: 'Qué esperar' },
  { href: '#doctor', label: 'Doctor' },
  { href: '#agendar', label: 'Agenda' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { trackNavClick, trackWhatsAppClick } = useAnalytics();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleWhatsApp = () => {
    trackWhatsAppClick('header_primary');
    const message = encodeURIComponent(whatsappMessages.default);
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`, '_blank');
  };

  const handleNavClick = (label: string) => {
    trackNavClick(label);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'glass-premium shadow-premium' : 'bg-white/95'
      }`}
    >
      <div className="max-w-5xl mx-auto container-padding h-16 flex items-center justify-between">
        <a
          href="#inicio"
          className="flex items-center gap-3"
          onClick={() => handleNavClick('logo')}
        >
          <img
            src="images/logo.png"
            alt="Dr. Luis Peña"
            className="h-10 w-auto"
            loading="lazy"
          />
        </a>

        <div className="flex items-center gap-3">
          <Button
            onClick={handleWhatsApp}
            className="h-10 px-3 sm:px-4 bg-[hsl(var(--jade))] hover:bg-[hsl(var(--jade-dark))] text-white text-sm font-semibold rounded-full shadow-glow-jade"
            aria-label="Agendar por WhatsApp"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>

          <button
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-[hsl(var(--warm-border))] text-[hsl(var(--navy))] hover:bg-[hsl(var(--navy))]/5 transition-colors"
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <nav
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-padding max-w-5xl mx-auto pb-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleNavClick(link.label)}
              className="block rounded-xl border border-[hsl(var(--warm-border))] bg-white px-4 py-3 text-[hsl(var(--warm-text))] hover:border-[hsl(var(--navy))]/50 hover:bg-[hsl(var(--warm-light))]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
