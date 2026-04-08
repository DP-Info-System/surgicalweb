'use client';

import { Accessibility, Move, Ruler, Heart, MousePointer2, ChevronRight, LayoutGrid, Bone, Brain } from 'lucide-react';
import { motion } from 'motion/react';

const regions = [
  { id: 'knee', name: 'Knee', icon: Accessibility, count: '12+ Products' },
  { id: 'hip', name: 'Hip', icon: Move, count: '8+ Products' },
  { id: 'spine', name: 'Spine', icon: Ruler, count: '6+ Products' },
  { id: 'shoulder', name: 'Shoulder', icon: MousePointer2, count: '10+ Products' },
  { id: 'face', name: 'Cranial', icon: Brain, count: '5+ Products' },
];

interface CategoryExplorerProps {
  onCategoryClick: (id: string) => void;
  activeId: string | null;
}

export default function CategoryExplorer({ onCategoryClick, activeId }: CategoryExplorerProps) {
  return (
    <section className="relative py-16 bg-gradient-to-b from-white via-surface-container-low/30 to-white border-y border-outline-variant/10 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8" style={{ background: '#E8A020' }} />
            <span className="text-[10px] font-black uppercase tracking-[0.35em]" style={{ color: '#E8A020' }}>Quick Navigation</span>
            <div className="h-px w-8" style={{ background: '#E8A020' }} />
          </div>
          <h2 className="font-headline font-black text-on-surface text-4xl lg:text-5xl tracking-tighter leading-[1.1]">
            Anatomical <span className="text-primary">Explorer</span>
          </h2>
          <p className="text-on-surface-variant/60 text-base mt-3 font-body">
            Filter our surgical portfolio by anatomy
          </p>
        </motion.div>

        {/* Region Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4 max-w-5xl mx-auto">
          {regions.map((region, idx) => {
            const isActive = activeId === region.id;
            const Icon = region.icon;
            return (
              <motion.button
                key={region.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                viewport={{ once: true }}
                onClick={() => onCategoryClick(region.id)}
                className={`group relative flex flex-col items-center gap-3 p-5 lg:p-6 rounded-2xl border transition-all duration-300 text-center overflow-hidden ${
                  isActive
                    ? 'text-white border-transparent shadow-xl scale-[1.03]'
                    : 'bg-white text-on-surface border-outline-variant/15 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1'
                }`}
                style={isActive ? { background: '#E8A020', boxShadow: '0 8px 32px rgba(232,160,32,0.35)' } : {}}
              >
                {/* Active glow background */}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80" />
                )}
                
                {/* Hover gradient */}
                {!isActive && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/[0.03] group-hover:to-primary/[0.06] transition-all duration-300" />
                )}
                
                {/* Icon */}
                <div className={`relative z-10 p-3 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'bg-primary/10 text-primary group-hover:bg-primary/15 group-hover:scale-110'
                }`}>
                  <Icon className="w-6 h-6" />
                </div>
                
                {/* Name */}
                <div className="relative z-10">
                  <span className={`font-headline text-sm lg:text-base font-bold tracking-tight block ${
                    isActive ? 'text-white' : 'text-on-surface group-hover:text-primary'
                  }`}>
                    {region.name}
                  </span>
                  <span className={`text-[10px] font-medium mt-0.5 block ${
                    isActive ? 'text-white/70' : 'text-on-surface-variant/40 group-hover:text-on-surface-variant/60'
                  }`}>
                    {region.count}
                  </span>
                </div>
                
                {/* Active indicator dot */}
                <div className={`absolute top-3 right-3 w-2 h-2 rounded-full transition-all duration-300 ${
                  isActive ? 'bg-white shadow-lg shadow-white/50' : 'bg-transparent group-hover:bg-primary/40'
                }`} />
              </motion.button>
            );
          })}
        </div>

        {/* Bottom hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-[11px] text-on-surface-variant/40 font-medium tracking-wide"
        >
          Click any region to view related surgical products
        </motion.p>
      </div>
    </section>
  );
}
