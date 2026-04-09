'use client';

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Header from '../components/Header';
import CategoryExplorer from '../components/CategoryExplorer';
import Hero from '../components/Hero';
import BodyExplorerSection from '../components/BodyExplorerSection';
import Stats from '../components/Stats';
import Footer from '../components/Footer';
import ProductPanel from '../components/ProductPanel';
import Features from '../components/Features';
import PartnershipSection from '../components/PartnershipSection';

export default function Home() {
  const [selectedBodyPart, setSelectedBodyPart] = useState<string | null>(null);

  const handleHotspotClick = (id: string) => {
    setSelectedBodyPart(id);
  };

  const handleClosePanel = () => {
    setSelectedBodyPart(null);
  };

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">
      <main className="relative min-h-[calc(100vh-64px)]">
        {/* Main Hero Slider (Pure Branding) */}
        <Hero />
        
        {/* Interactive Anatomical Body Explorer Section */}
        <BodyExplorerSection onHotspotClick={handleHotspotClick} activeId={selectedBodyPart} />

        {/* New Horizontal Category Explorer */}
        <CategoryExplorer onCategoryClick={handleHotspotClick} activeId={selectedBodyPart} />

        {/* Global Statistics Section */}
        <Stats />
        
        {/* Detailed Features & Technology sections */}
        <Features />
        
        {/* Strategic Global Partnerships Section (Replacing SurgicalMapping) */}
        <PartnershipSection />
        
        {/* Product Panel Layer */}
        <AnimatePresence>
          {selectedBodyPart && (
            <ProductPanel 
              bodyPartId={selectedBodyPart} 
              onClose={handleClosePanel} 
              onPrimaryClick={handleHotspotClick}
            />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
