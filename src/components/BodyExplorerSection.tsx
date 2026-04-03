import { motion } from 'motion/react';
import AnatomicalModel from './AnatomicalModel';
import { Target, Activity, ShieldCheck, Microscope, Layers, ArrowRight } from 'lucide-react';
import { ANATOMICAL_HOTSPOTS } from '../constants';

interface BodyExplorerSectionProps {
  onHotspotClick: (id: string) => void;
  activeId: string | null;
}

export default function BodyExplorerSection({ onHotspotClick, activeId }: BodyExplorerSectionProps) {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Clinical Atmospheric Depth (Radial Wash) */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[160px] opacity-60 pointer-events-none" />
      
      <div className="max-w-[1920px] mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 2xl:gap-32 items-start">
          
          {/* Left Content Column - Detailed Labels */}
          <div className="xl:col-span-6 2xl:col-span-6 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-[1px] bg-primary/30" />
                <h3 className="text-primary font-black uppercase tracking-[0.4em] text-[10px]">Anatomical Portfolio</h3>
              </div>
              <h2 className="text-5xl lg:text-[70px] font-headline font-black text-on-surface leading-[0.95] tracking-tighter mb-8">
                Explore Our <br />
                <span className="text-primary inline-block transform -skew-x-6">Surgical</span> Solutions
              </h2>
              <p className="text-lg text-on-surface-variant/70 leading-relaxed max-w-xl font-body font-medium">
                Select a region on the anatomical model to discover procedures-specific systems for trauma, spine, and joint reconstruction.
              </p>
            </motion.div>

            <div className="relative 2xl:h-[900px] flex flex-col gap-4 2xl:block w-full max-w-2xl">
              {ANATOMICAL_HOTSPOTS.map((item, idx) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  onClick={() => onHotspotClick(item.id)}
                  className={`group relative 2xl:absolute w-full p-5 rounded-2xl border transition-all cursor-pointer overflow-hidden ${
                    activeId === item.id 
                    ? 'bg-primary/5 border-primary/30 shadow-lg 2xl:translate-x-4' 
                    : 'bg-white border-outline-variant/10 hover:border-primary/20 hover:bg-surface-container-low/50 2xl:hover:translate-x-2'
                  }`}
                  style={{
                    top: typeof window !== 'undefined' && window.innerWidth >= 1536 ? item.top : 'auto',
                  }}
                >
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-[10px] font-black text-primary/40 uppercase tracking-widest">{item.category}</span>
                        <div className={`w-1.5 h-1.5 rounded-full ${activeId === item.id ? 'bg-primary animate-pulse' : 'bg-transparent'}`} />
                      </div>
                      <h4 className={`font-headline font-black text-lg tracking-tight transition-colors ${activeId === item.id ? 'text-primary' : 'text-on-surface group-hover:text-primary'}`}>
                        {item.label}
                      </h4>
                      <p className={`text-xs mt-1 leading-relaxed transition-opacity ${activeId === item.id ? 'text-on-surface-variant/80' : 'text-on-surface-variant/50'}`}>
                        {item.description}
                      </p>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${activeId === item.id ? 'bg-primary text-white scale-110 shadow-md' : 'bg-surface-container-high text-on-surface-variant group-hover:bg-primary/10 group-hover:text-primary'}`}>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Anatomical Column - Premium HUD design */}
          <div className="xl:col-span-6 2xl:col-span-6 flex justify-center items-center relative py-12">
            
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

            <div className="relative w-full max-w-xl h-[900px] z-10">
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
