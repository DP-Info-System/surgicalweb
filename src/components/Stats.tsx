'use client';

import { motion } from 'motion/react';
import { Shield, TrendingUp, Globe } from 'lucide-react';

const stats = [
  {
    value: '140+',
    label: 'Patented Devices',
    description: 'Pioneering medical hardware designed for surgical longevity and patient comfort.',
    icon: Shield,
    suffix: ''
  },
  {
    value: '99.8',
    label: 'Success Rate',
    description: 'Clinical trials demonstrate industry-leading performance across multi-center studies.',
    icon: TrendingUp,
    suffix: '%'
  },
  {
    value: '50+',
    label: 'Global Markets',
    description: 'Trusted by the world\'s leading medical institutions and clinical research organizations.',
    icon: Globe,
    suffix: ''
  }
];

export default function Stats() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/50 rounded-full blur-3xl" />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="max-w-[1920px] mx-auto px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14 max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-white/30" />
            <span className="text-white/70 font-black uppercase tracking-[0.35em] text-[10px]">Impact & Trust</span>
            <div className="w-8 h-[1px] bg-white/30" />
          </div>
          <h2 className="font-headline font-black text-white text-4xl lg:text-5xl tracking-tighter leading-[1.1]">
            Trusted by <span className="text-white/80">Surgeons</span> Worldwide
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative p-8 lg:p-10 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 hover:bg-white/15 hover:border-white/25 transition-all duration-500 overflow-hidden">
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/[0.05] group-hover:to-white/[0.02] transition-all duration-500" />
                  
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    {/* Icon + Value Row */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 rounded-xl bg-white/10 border border-white/10 group-hover:bg-white/15 group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-6 h-6 text-white/80" />
                      </div>
                      <span className="text-5xl lg:text-6xl font-headline font-black text-white tracking-tighter">
                        {stat.value}<span className="text-3xl lg:text-4xl text-white/60">{stat.suffix}</span>
                      </span>
                    </div>
                    
                    {/* Label */}
                    <h3 className="text-sm font-bold text-white/90 uppercase tracking-[0.2em] mb-3">
                      {stat.label}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-white/50 leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
