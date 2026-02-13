import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { AccountSetupSection } from './components/AccountSetupSection';
import { BenefitsSection } from './components/BenefitsSection';
import { MissionSection } from './components/MissionSection';
import { WaitlistSection } from './components/WaitlistSection';
import { Footer } from './components/Footer';
export function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#1a1a1a]">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AccountSetupSection />
        <BenefitsSection />
        <MissionSection />
        <WaitlistSection />
      </main>
      <Footer />
    </div>);

}