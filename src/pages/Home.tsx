// src/pages/Home.tsx
// Main marketing page — all sections assembled in order

import Navbar          from '../components/layout/Navbar';
import MobileBottomBar from '../components/layout/MobileBottomBar';
import Footer          from '../components/layout/Footer';
import WhatsAppFloat   from '../components/ui/WhatsAppFloat';

// Sections
import Hero          from '../components/sections/Hero';
import StatsBar      from '../components/sections/StatsBar';
import WhyUs         from '../components/sections/WhyUs';
import HowItWorks    from '../components/sections/HowItWorks';
import Subjects      from '../components/sections/Subjects';
import Modes         from '../components/sections/Modes';
import Fees          from '../components/sections/Fees';
import Testimonials  from '../components/sections/Testimonials';
import FAQ           from '../components/sections/FAQ';
import OfferBanner   from '../components/sections/OfferBanner';
import RegisterForm  from '../components/sections/RegisterForm';
import Contact       from '../components/sections/Contact';

export default function Home() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Skip to main for accessibility */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 bg-gold text-navy font-bold px-4 py-2 rounded-button"
      >
        Skip to main content
      </a>

      <Navbar />

      <main>
        <Hero />
        <StatsBar />
        <WhyUs />
        <HowItWorks />
        <Subjects />
        <Modes />
        <Fees />
        <Testimonials />
        <FAQ />
        <OfferBanner />
        <RegisterForm />
        <Contact />
      </main>

      <Footer />
      <MobileBottomBar />
      <WhatsAppFloat />
    </div>
  );
}
