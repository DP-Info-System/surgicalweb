'use client';

import { motion } from 'motion/react';
import AnatomicalModel from './AnatomicalModel';
import { Target, Activity, ShieldCheck, Microscope, Layers } from 'lucide-react';

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
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 2xl:gap-24 items-center">
          
          {/* Left Content Column */}
          <div className="xl:col-span-12 2xl:col-span-5 space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-[1px] bg-primary/30" />
                <h3 className="text-primary font-black uppercase tracking-[0.4em] text-[10px]">Curation Protocol</h3>
              </div>
              <h2 className="text-6xl lg:text-[80px] font-headline font-black text-on-surface leading-[0.95] tracking-tighter mb-10">
                Explore Our <br />
                <span className="text-primary inline-block transform -skew-x-6">Anatomical</span> Solutions
              </h2>
              <p className="text-xl text-on-surface-variant/70 leading-relaxed max-w-xl font-body font-medium">
                Shashwat provides a curated ecosystem of surgical innovations. Interact with the anatomical map to discover procedures-specific systems for trauma, spine, and joint reconstruction.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Target, title: 'Surgical Accuracy', desc: 'Hardware designed for complex biomechanical stability.', color: 'text-blue-600', bg: 'bg-blue-50' },
                { icon: Activity, title: 'Rapid Recovery', desc: 'Minimally invasive designs to reduce patient downtime.', color: 'text-teal-600', bg: 'bg-teal-50' },
                { icon: ShieldCheck, title: 'Clinical Proof', desc: 'Systems validated through thousands of successful procedures.', color: 'text-indigo-600', bg: 'bg-indigo-50' },
                { icon: Microscope, title: 'Global Standards', desc: 'Universal compatibility across surgical theatres.', color: 'text-cyan-600', bg: 'bg-cyan-50' }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative p-8 rounded-3xl bg-white border border-outline-variant/10 shadow-sm transition-all hover:shadow-2xl hover:border-primary/30 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-primary/5 to-transparent rounded-bl-[100%] transition-transform group-hover:scale-150" />
                  
                  <div className={`w-14 h-14 flex items-center justify-center ${item.bg} rounded-2xl mb-6 shadow-xs group-hover:scale-110 transition-transform`}>
                    <item.icon className={`w-7 h-7 ${item.color}`} />
                  </div>
                  
                  <h4 className="font-headline font-black text-on-surface text-lg mb-3 tracking-tight group-hover:text-primary transition-colors">{item.title}</h4>
                  <p className="text-sm text-on-surface-variant/60 leading-relaxed font-body font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Anatomical Column - Premium HUD design */}
          <div className="xl:col-span-12 2xl:col-span-7 flex justify-center items-center relative py-12">
            
            {/* Technical HUD Overlays */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                 className="w-[600px] h-[600px] border border-primary/5 rounded-full" 
               />
               <motion.div 
                 animate={{ rotate: -360 }}
                 transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                 className="absolute w-[650px] h-[650px] border border-dashed border-primary/10 rounded-full" 
               />
               
               {/* Scanner Brackets */}
               <div className="absolute top-0 left-1/2 -translate-x-[350px] w-8 h-8 border-t-2 border-l-2 border-primary/20 rounded-tl-xl" />
               <div className="absolute top-0 left-1/2 translate-x-[318px] w-8 h-8 border-t-2 border-r-2 border-primary/20 rounded-tr-xl" />
               <div className="absolute bottom-0 left-1/2 -translate-x-[350px] w-8 h-8 border-b-2 border-l-2 border-primary/20 rounded-bl-xl" />
               <div className="absolute bottom-0 left-1/2 translate-x-[318px] w-8 h-8 border-b-2 border-r-2 border-primary/20 rounded-br-xl" />
            </div>

            <div className="relative w-full max-w-2xl h-[800px] z-10">
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
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-center">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <p className="text-[11px] font-black text-primary uppercase tracking-[0.5em] brightness-90">Digital Mapping V2</p>
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>
                <p className="text-xs font-black text-on-surface-variant uppercase tracking-widest bg-white/80 backdrop-blur-md px-6 py-2 rounded-full border border-primary/10 shadow-xl">
                  Select <span className="text-primary italic">target</span> region
                </p>
                <motion.div 
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="h-10 flex flex-col items-center gap-1 opacity-40"
                >
                   <div className="w-0.5 h-2 bg-primary rounded-full" />
                   <div className="w-0.5 h-6 bg-primary/40 rounded-full" />
                </motion.div>
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
