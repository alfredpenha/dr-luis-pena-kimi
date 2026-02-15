import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroMobile } from '@/components/sections/HeroMobile';
import { FeaturedServices } from '@/components/sections/FeaturedServices';
import { WhatToExpect } from '@/components/sections/WhatToExpect';
import { AboutDoctor } from '@/components/sections/AboutDoctor';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { FloatingWhatsAppButton } from '@/components/ui/FloatingWhatsAppButton';

export function Home() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <HeroMobile />
        <FeaturedServices />
        <WhatToExpect />
        <AboutDoctor />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}
