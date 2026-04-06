'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const stats = [
  {
    value: '140+',
    label: 'Patented Devices',
    description: 'Pioneering instrumentation ensuring absolute rigidity and streamlined operative workflows.',
    offset: 'md:mt-12'
  },
  {
    value: '99.8%',
    label: 'Survivorship Rate',
    description: 'Peer-reviewed studies confirm exceptional long-term implant stability without aseptic loosening.',
    offset: ''
  },
  {
    value: '50+',
    label: 'Global Markets',
    description: 'Relied upon by premier surgical centers extending across diverse healthcare systems worldwide.',
    offset: 'md:mt-6'
  }
];

export default function Stats() {
  return (
    <section className="relative px-8 py-32 overflow-hidden bg-black">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/stats-background.jpg" 
          alt="Clinical Environment" 
          fill 
          sizes="100vw"
          className="object-cover opacity-20" 
        />
        <div className="absolute inset-0 bg-linear-to-b from-black via-black/60 to-black"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-bold tracking-[0.2em] text-[10px] uppercase mb-4 block">Proven Competence</span>
          <h2 className="text-4xl lg:text-5xl font-headline font-black text-white leading-tight mb-6">
            A Legacy of <span className="text-primary-container">Clinical Excellence</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`p-8 rounded-2xl border border-white/10 backdrop-blur-md transition-all hover:bg-white/5 ${
                index === 1 ? 'bg-white/10 shadow-2xl' : 'bg-black/40'
              } ${stat.offset}`}
            >
              <span className="text-5xl lg:text-6xl font-headline font-black text-primary-container mb-3 block tracking-tighter">
                {stat.value}
              </span>
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white/50 block mb-4">
                {stat.label}
              </span>
              <p className="text-white/70 text-sm leading-relaxed font-body">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
