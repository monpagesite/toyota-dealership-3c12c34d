import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeaturedModels } from './components/FeaturedModels';
import { WhyTestDrive } from './components/WhyTestDrive';
import { InventoryHighlights } from './components/InventoryHighlights';
import { BookingSection } from './components/BookingSection';
import { ContactLocation } from './components/ContactLocation';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturedModels />
        <WhyTestDrive />
        <InventoryHighlights />
        <BookingSection />
        <ContactLocation />
      </main>
      <Footer />
    </div>
  );
}

export default App;
