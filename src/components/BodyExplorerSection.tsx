import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import Image from 'next/image';
import AnatomicalModel from './AnatomicalModel';
import { Target, Activity, ShieldCheck, Microscope, Layers, ArrowRight, Heart, Bone, Brain, Footprints } from 'lucide-react';
import { ANATOMICAL_HOTSPOTS } from '../constants';

interface BodyExplorerSectionProps {
  onHotspotClick: (id: string) => void;
  activeId: string | null;
}

const FILTER_CATEGORIES = [
  { id: 'all', label: 'All Anatomy', icon: Target },
  { id: 'CMF', label: 'CMF', icon: Brain },
  { id: 'Orthopedics', label: 'Orthopedics', icon: Bone },
  { id: 'Cardiac', label: 'Cardiac', icon: Heart },
  { id: 'Spine', label: 'Spine', icon: Layers },
  { id: 'Trauma', label: 'Trauma', icon: Activity },
];

export default function BodyExplorerSection({ onHotspotClick, activeId }: BodyExplorerSectionProps) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredHotspots = activeFilter === 'all'
    ? ANATOMICAL_HOTSPOTS
    : ANATOMICAL_HOTSPOTS.filter(h => h.category === activeFilter);

  return (
    <section className="relative pt-12 pb-16 bg-white overflow-hidden">
      {/* Atmospheric depth */}
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,71,169,0.2), transparent)' }} />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/4 rounded-full blur-[160px] opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-6 lg:mb-8 max-w-5xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10" style={{ background: '#E8A020' }} />
            <h3 className="font-black uppercase tracking-[0.35em] text-[10px]" style={{ color: '#E8A020' }}>Anatomical Portfolio</h3>
          </div>
          <h2 className="text-5xl lg:text-[68px] font-headline font-black text-on-surface leading-[0.95] tracking-tighter mb-6">
            Explore Medical <br className="hidden lg:block" />
            <span className="text-primary">Implant</span> Platforms
          </h2>
          <p className="text-lg text-on-surface-variant/70 leading-relaxed font-body font-medium">
            Select a region on the anatomical model to discover specialized devices mapped to traumatology, spine, and joint preservation.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-wrap gap-2"
        >
          {FILTER_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`group flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 text-[13px] font-semibold ${
                  isActive
                    ? 'text-white border-transparent shadow-lg'
                    : 'bg-white text-on-surface-variant border-outline-variant/20 hover:border-primary/30 hover:text-primary'
                }`}
                style={isActive ? { background: '#E8A020', boxShadow: '0 4px 16px rgba(232,160,32,0.3)' } : {}}
              >
                <Icon className={`w-3.5 h-3.5 transition-transform ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                {cat.label}
                {cat.id !== 'all' && (
                  <span className={`ml-1 text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-white/25 text-white' : 'bg-surface-container-high text-on-surface-variant/60'
                  }`}>
                    {ANATOMICAL_HOTSPOTS.filter(h => h.category === cat.id).length}
                  </span>
                )}
              </button>
            );
          })}
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12 2xl:gap-32 items-start">
          
          {/* Left Content Column - Filtered Cards */}
          <div className="xl:col-span-6 2xl:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeFilter}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative flex flex-col gap-3 w-full max-w-2xl"
              >
                {filteredHotspots.length > 0 ? (
                  filteredHotspots.map((item, idx) => (
                    <motion.div 
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.08 }}
                      onClick={() => onHotspotClick(item.id)}
                      className={`group relative p-4 px-5 rounded-xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                        activeId === item.id 
                        ? 'bg-primary/5 border-primary/40 shadow-lg shadow-primary/10 translate-x-1' 
                        : 'bg-white border-outline-variant/10 hover:border-primary/25 hover:bg-surface-container-low/60 hover:translate-x-0.5'
                      }`}
                    >
                      {/* Active indicator bar */}
                      <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-r-full transition-all duration-300 ${
                        activeId === item.id ? 'bg-primary' : 'bg-transparent group-hover:bg-primary/30'
                      }`} />
                      
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`text-[9px] font-black uppercase tracking-widest transition-colors ${
                              activeId === item.id ? 'text-primary' : 'text-primary/40'
                            }`}>{item.category}</span>
                            <div className={`w-1.5 h-1.5 rounded-full transition-all ${
                              activeId === item.id ? 'bg-primary animate-pulse' : 'bg-outline-variant/30'
                            }`} />
                          </div>
                          <h4 className={`font-headline font-bold text-base tracking-tight transition-colors ${
                            activeId === item.id ? 'text-primary' : 'text-on-surface group-hover:text-primary'
                          }`}>
                            {item.label}
                          </h4>
                          <p className={`text-xs leading-snug mt-1 transition-all ${
                            activeId === item.id ? 'text-on-surface-variant/80 max-h-20' : 'text-on-surface-variant/50 max-h-0 group-hover:max-h-20'
                          }`}>
                            {item.description}
                          </p>
                          
                          {/* DYNAMIC IMAGE PLACEHOLDER FOR SELECTED HOTSPOT */}
                          <AnimatePresence>
                            {activeId === item.id && (
                              <motion.div
                                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                animate={{ opacity: 1, height: 320, marginTop: 12 }}
                                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                className="relative w-full h-80 rounded-lg overflow-hidden bg-slate-50/10"
                              >
                                <Image 
                                  src={`/images/anatomy-${item.id}.jpg`} 
                                  alt={item.label} 
                                  fill 
                                  sizes="(max-width: 768px) 100vw, 500px"
                                  className="object-contain" 
                                />
                              </motion.div>
                            )}
                          </AnimatePresence>
                          
                        </div>
                        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                          activeId === item.id 
                          ? 'bg-primary text-white scale-110 shadow-md shadow-primary/30' 
                          : 'bg-surface-container-high text-on-surface-variant group-hover:bg-primary/10 group-hover:text-primary'
                        }`}>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="w-16 h-16 bg-surface-container-low rounded-full flex items-center justify-center mb-4">
                      <Target className="w-8 h-8 text-on-surface-variant/30" />
                    </div>
                    <p className="text-sm font-semibold text-on-surface">No products in this category</p>
                    <p className="text-xs text-on-surface-variant/50 mt-1">Try selecting a different filter</p>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Anatomical Column - Premium HUD design */}
          <div className="xl:col-span-6 2xl:col-span-6 flex justify-center items-start relative px-4">
            
            {/* Technical HUD Overlays */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                 className="w-[500px] h-[500px] border border-primary/5 rounded-full" 
               />
               <motion.div 
                 animate={{ rotate: -360 }}
                 transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                 className="absolute w-[550px] h-[550px] border border-dashed border-primary/10 rounded-full" 
               />
            </div>

            <div className="relative w-full max-w-xl h-[650px] lg:h-[700px] 2xl:h-[900px] z-10 transition-all duration-300">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "circOut" }}
                viewport={{ once: true }}
                className="w-full h-full"
              >
                <AnatomicalModel onHotspotClick={onHotspotClick} activeId={activeId} />
              </motion.div>

              {/* Precise Digital Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-center w-full">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <p className="text-[11px] font-black text-primary uppercase tracking-[0.5em] brightness-90">Digital Anatomy V3</p>
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>
                <p className="text-xs font-black text-on-surface-variant uppercase tracking-widest bg-white/80 backdrop-blur-md px-6 py-2 rounded-full border border-primary/10 shadow-xl">
                  {activeId ? `Selected: ${ANATOMICAL_HOTSPOTS.find(h => h.id === activeId)?.label}` : 'Select anatomical target'}
                </p>
              </div>
            </div>

            {/* Scientific HUD Marker */}
            <div className="absolute top-24 right-10 hidden 2xl:block opacity-40">
               <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                     <Layers className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-primary uppercase tracking-widest mb-1">Scale Index</p>
                    <p className="text-lg font-black text-on-surface">1:1.028</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
