'use client';

import { motion } from 'motion/react';
import { X, ArrowRight, ChevronRight } from 'lucide-react';
import { ORTHOPEDIC_CATEGORIES, BODY_PART_MAPPING, ANATOMICAL_HOTSPOTS } from '../constants';

interface ProductPanelProps {
  bodyPartId: string | null;
  onClose: () => void;
}

export default function ProductPanel({ bodyPartId, onClose }: ProductPanelProps) {
  if (!bodyPartId) return null;

  const categoryIds = BODY_PART_MAPPING[bodyPartId] || [];
  const relevantCategories = ORTHOPEDIC_CATEGORIES.filter(cat => categoryIds.includes(cat.id));
  const hotspotInfo = ANATOMICAL_HOTSPOTS.find(h => h.id === bodyPartId);

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="fixed right-0 top-0 h-full w-full sm:w-96 lg:w-[440px] border-l border-outline-variant/15 glass-panel shadow-[-20px_0_60px_rgba(25,28,30,0.1)] z-50 flex flex-col"
    >
      {/* Header */}
      <div className="relative p-6 pb-4 border-b border-outline-variant/10">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        
        <div className="relative flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[9px] font-black text-primary uppercase tracking-widest">{hotspotInfo?.category}</span>
              <div className="w-1 h-1 rounded-full bg-primary" />
            </div>
            <h2 className="font-headline font-bold text-primary text-2xl tracking-tight capitalize">{hotspotInfo?.label || `${bodyPartId} Solutions`}</h2>
            <p className="text-on-surface-variant/60 text-sm mt-1 font-label">{hotspotInfo?.description}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-primary/10 rounded-full transition-colors shrink-0 ml-4"
          >
            <X className="w-5 h-5 text-on-surface-variant" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
        {relevantCategories.length > 0 ? (
          relevantCategories.map((cat) => (
            <div key={cat.id} className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                  <cat.icon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-headline font-bold text-on-surface text-sm">{cat.name}</h3>
              </div>
              
              <div className="space-y-2">
                {cat.items.map((item) => (
                  <button
                    key={item.name}
                    className="group w-full flex items-center justify-between p-4 bg-surface-container-low hover:bg-white border border-transparent hover:border-primary/20 rounded-xl transition-all duration-300 text-left shadow-sm hover:shadow-md"
                  >
                    <div>
                      <p className="text-sm font-semibold text-on-surface group-hover:text-primary transition-colors">{item.name}</p>
                      <p className="text-[10px] text-on-surface-variant/50 mt-0.5">Precision engineered system</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                  </button>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="w-20 h-20 bg-surface-container-low rounded-full flex items-center justify-center mb-4 border border-outline-variant/20">
              <X className="w-8 h-8 text-on-surface-variant/30" />
            </div>
            <p className="text-sm font-semibold text-on-surface">Portfolio mapping in progress</p>
            <p className="text-xs text-on-surface-variant/50 mt-2 max-w-[240px]">Products for this anatomical region are being catalogued. Contact us for the full portfolio.</p>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="p-6 pt-4 border-t border-outline-variant/10 bg-surface-container-low/30">
        <button className="w-full py-4 bg-primary text-white rounded-xl font-headline font-bold shadow-lg shadow-primary/20 hover:bg-primary-container transition-all flex items-center justify-center gap-2 group">
          Request Technical Data
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
        <p className="text-[10px] text-center text-on-surface-variant/40 mt-3">Our team will respond within 24 hours</p>
      </div>
    </motion.div>
  );
}
