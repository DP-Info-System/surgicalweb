'use client';

import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight } from 'lucide-react';
import { ORTHOPEDIC_CATEGORIES, BODY_PART_MAPPING } from '../constants';

interface ProductPanelProps {
  bodyPartId: string | null;
  onClose: () => void;
}

export default function ProductPanel({ bodyPartId, onClose }: ProductPanelProps) {
  if (!bodyPartId) return null;

  const categoryIds = BODY_PART_MAPPING[bodyPartId] || [];
  const relevantCategories = ORTHOPEDIC_CATEGORIES.filter(cat => categoryIds.includes(cat.id));

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="fixed right-0 top-0 h-full w-80 lg:w-96 border-l border-outline-variant/15 glass-panel shadow-[-20px_0_60px_rgba(25,28,30,0.1)] z-50 flex flex-col p-8"
    >
      <div className="flex items-center justify-between pt-20 mb-8">
        <div>
          <h2 className="font-headline font-bold text-primary text-2xl tracking-tight capitalize">{bodyPartId} Solutions</h2>
          <p className="text-on-surface-variant/60 text-sm mt-1 font-label">Curated surgical portfolio</p>
        </div>
        <button 
          onClick={onClose}
          className="p-2 hover:bg-surface-container-low rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-on-surface-variant" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto space-y-8 pr-2 custom-scrollbar">
        {relevantCategories.length > 0 ? (
          relevantCategories.map((cat) => (
            <div key={cat.id} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <cat.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-headline font-bold text-on-surface">{cat.name}</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                {cat.items.map((item) => (
                  <button
                    key={item.name}
                    className="group flex items-center justify-between p-4 bg-surface-container-low hover:bg-white border border-transparent hover:border-primary/20 rounded-xl transition-all duration-300 text-left shadow-sm hover:shadow-md"
                  >
                    <div>
                      <p className="text-sm font-semibold text-on-surface group-hover:text-primary transition-colors">{item.name}</p>
                      <p className="text-[10px] text-on-surface-variant/50 mt-0.5">Precision engineered system</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </button>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center h-64 text-center">
            <div className="w-16 h-16 bg-surface-container-low rounded-full flex items-center justify-center mb-4">
              <X className="w-8 h-8 text-on-surface-variant/20" />
            </div>
            <p className="text-sm font-semibold text-on-surface">No specific products mapped</p>
            <p className="text-xs text-on-surface-variant/50 mt-1">Please explore our full portfolio in the products menu.</p>
          </div>
        )}
      </div>

      <div className="mt-8 pt-6 border-t border-outline-variant/10">
        <button className="w-full py-4 bg-primary text-white rounded-xl font-headline font-bold shadow-lg shadow-primary/20 hover:bg-primary-container transition-all">
          Request Technical Data
        </button>
      </div>
    </motion.div>
  );
}
