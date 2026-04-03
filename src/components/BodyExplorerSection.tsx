'use client';

import { motion } from 'motion/react';
import AnatomicalModel from './AnatomicalModel';
import { Target, Activity, ShieldCheck } from 'lucide-react';

interface BodyExplorerSectionProps {
  onHotspotClick: (id: string) => void;
  activeId: string | null;
}

export default function BodyExplorerSection({ onHotspotClick, activeId }: BodyExplorerSectionProps) {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-8">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 items-center">
          
          {/* Left Content Column */}
          <div className="xl:col-span-12 2xl:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Precision Engineering</h3>
              <h2 className="text-5xl lg:text-7xl font-headline font-black text-on-surface leading-tight tracking-tighter mb-8">
                Explore Our <br />
                <span className="text-primary">Anatomical Solutions</span>
              </h2>
              <p className="text-xl text-on-surface-variant/70 leading-relaxed max-w-xl">
                Shashwat provides a curated ecosystem of surgical innovations. Interact with the anatomical map to discover procedures-specific systems for trauma, spine, and joint reconstruction.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: Target, title: 'Surgical Accuracy', desc: 'Hardware designed for complex biomechanical stability.' },
                { icon: Activity, title: 'Rapid Recovery', desc: 'Minimally invasive designs to reduce patient downtime.' },
                { icon: ShieldCheck, title: 'Clinical Proof', desc: 'Systems validated through thousands of successful procedures.' },
                { icon: Target, title: 'Global Standards', desc: 'Universal compatibility across surgical theatres.' }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col gap-4 p-6 rounded-2xl bg-surface-container-low border border-outline-variant/10 hover:shadow-xl transition-all"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-xl">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-on-surface mb-2 tracking-tight">{item.title}</h4>
                    <p className="text-sm text-on-surface-variant/60 leading-relaxed font-body">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Anatomical Model Column */}
          <div className="xl:col-span-12 2xl:col-span-7 flex justify-center items-center">
            <div className="relative w-full max-w-2xl h-[750px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="w-full h-full"
              >
                <AnatomicalModel onHotspotClick={onHotspotClick} activeId={activeId} />
              </motion.div>
              
              {/* Context Label for Interactivity */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center pointer-events-none">
                <p className="text-[10px] font-bold text-primary/40 uppercase tracking-[0.2em] mb-2 animate-pulse">Select target region</p>
                <div className="h-4 flex flex-col items-center gap-1">
                   <div className="w-0.5 h-1 bg-primary/30 rounded-full" />
                   <div className="w-0.5 h-2 bg-primary/50 rounded-full" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
