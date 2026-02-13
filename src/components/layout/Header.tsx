import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig, whatsappMessages } from '@/data/config';
import { useAnalytics } from '@/hooks/useAnalytics';

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#sobre-mi', label: 'Sobre Mí' },
  { href: '#contacto', label: 'Contacto' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { trackNavClick, trackWhatsAppClick } = useAnalytics();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (label: string) => {
    trackNavClick(label);
    setIsMobileMenuOpen(false);
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('header');
    const message = encodeURIComponent(whatsappMessages.default);
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-premium ${
        isScrolled
          ? 'glass-premium shadow-header'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-3"
            onClick={() => handleNavClick('logo')}
          >
            <img
              src="images/logo.png"
              alt="Dr. Luis Peña"
              className="h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.label)}
                className="text-sm font-medium text-[hsl(var(--warm-muted))] hover:text-[hsl(var(--navy))] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              onClick={handleWhatsAppClick}
              className="bg-[hsl(var(--jade))] hover:bg-[hsl(var(--jade-dark))] text-white font-medium px-6 py-2.5 rounded-lg transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:shadow-glow-jade"
            >
              <Phone className="w-4 h-4 mr-2" />
              Agendar Cita
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[hsl(var(--warm-text))] hover:text-[hsl(var(--navy))] transition-colors"
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-elevated transition-all duration-300 ease-premium ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col p-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleNavClick(link.label)}
              className="px-4 py-3 text-base font-medium text-[hsl(var(--warm-muted))] hover:text-[hsl(var(--navy))] hover:bg-[hsl(var(--warm-light))] rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <Button
              onClick={handleWhatsAppClick}
              className="w-full bg-[hsl(var(--jade))] hover:bg-[hsl(var(--jade-dark))] text-white font-medium py-3 rounded-lg"
            >
              <Phone className="w-4 h-4 mr-2" />
              Agendar Cita
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
