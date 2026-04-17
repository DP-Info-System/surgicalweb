'use client';

import { motion } from 'motion/react';
import { Globe, Clock, ShieldCheck, Warehouse, Languages, HeartHandshake, History, MapPin } from 'lucide-react';

const trustItems = [
  {
    icon: Globe,
    label: 'Worldwide Shipping',
    value: 'Global Logistics',
    description: 'Direct delivery to hospitals and surgical centers across all continents.'
  },
  {
    icon: Clock,
    label: '24-Hour Response',
    value: 'Rapid Quoting',
    description: 'Receive detailed technical quotes and documentation within 24 hours.'
  },
  {
    icon: ShieldCheck,
    label: 'Quality Control',
    value: 'Rigorous Testing',
    description: 'Every medical device undergoes strict clinical-grade quality inspections.'
  },
  {
    icon: Warehouse,
    label: 'Infrastructure',
    value: '2,500m²+ Warehouse',
    description: 'Certified sterile environment storage with advanced inventory management.'
  },
  {
    icon: Languages,
    label: 'Global Support',
    value: '10 Languages',
    description: 'Comprehensive multilingual technical support for diverse medical teams.'
  },
  {
    icon: HeartHandshake,
    label: 'Standard Warranty',
    value: '12 Month Warranty',
    description: 'Full clinical protection and instrument replacement guarantees.'
  },
  {
    icon: History,
    label: 'Local Heritage',
    value: '40 Years Experience',
    description: 'Four decades of specialized leadership in the surgical instrument industry.'
  },
  {
    icon: MapPin,
    label: 'Footprint',
    value: '160 Countries',
    description: 'Active distribution network serving surgical excellence globally.'
  }
];

export default function TrustSection() {
  return (
    <section className="relative py-28 overflow-hidden" style={{ background: '#0D1B3E' }}>
      {/* Decorative background effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 blur-[100px] rounded-full -translate-x-1/4 translate-y-1/4 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-10 bg-accent" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Proven Reliability</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-headline font-black text-white leading-tight tracking-tighter"
            >
              Why Surgical Teams <br />
              <span className="text-outline-white" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)', color: 'transparent' }}>
                Trust Our Portfolio
              </span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-[15px] max-w-sm leading-relaxed mb-1 font-medium italic border-l-2 border-accent/20 pl-6"
          >
            "Committed to bridging the gap between global medical innovation and local surgical excellence since 1984."
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 flex flex-col items-start gap-6"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-container flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <item.icon className="w-7 h-7" />
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-accent/80">{item.label}</span>
                </div>
                <h3 className="text-[20px] font-black text-white tracking-tight mb-3 transition-colors group-hover:text-accent">
                  {item.value}
                </h3>
                <p className="text-white/40 text-[13px] leading-relaxed group-hover:text-white/60 transition-colors">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Statistics Divider */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap items-center justify-center gap-x-16 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          {['ISO 13485 CERTIFIED', 'FDA CLEARED PORTFOLIO', 'CE MARKED INSTRUMENTS', 'GMP COMPLIANT'].map((badge) => (
            <span key={badge} className="text-[11px] font-black tracking-[0.3em] text-white whitespace-nowrap">{badge}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
