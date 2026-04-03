'use client';

import { Accessibility, Move, Ruler, Heart, MousePointer2, ChevronRight, LayoutGrid } from 'lucide-react';
import { motion } from 'motion/react';

const regions = [
  { id: 'knee', name: 'Knee', icon: Accessibility },
  { id: 'hip', name: 'Hip', icon: Move },
  { id: 'spine', name: 'Spine', icon: Ruler },
  { id: 'shoulder', name: 'Shoulder', icon: MousePointer2 },
  { id: 'face', name: 'Cranial', icon: LayoutGrid },
];

interface CategoryExplorerProps {
  onCategoryClick: (id: string) => void;
  activeId: string | null;
}

export default function CategoryExplorer({ onCategoryClick, activeId }: CategoryExplorerProps) {
  return (
    <section className="max-w-[1920px] mx-auto px-8 py-12 bg-white/50 border-y border-outline-variant/10">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <div>
          <h2 className="font-headline font-bold text-primary text-2xl tracking-tight">Anatomical Explorer</h2>
          <p className="text-on-surface-variant/60 text-sm mt-1 font-label">Filter our surgical portfolio by anatomy</p>
        </div>

        <div className="flex-1 max-w-4xl">
          <div className="flex flex-wrap gap-4 lg:justify-end">
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => onCategoryClick(region.id)}
                className={`group flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 border ${
                  activeId === region.id
                    ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105'
                    : 'bg-white text-on-surface-variant/70 border-outline-variant/10 hover:border-primary/30 hover:bg-surface-container-low shadow-sm'
                }`}
              >
                <region.icon className={`w-5 h-5 ${activeId === region.id ? 'text-white' : 'text-primary'}`} />
                <span className="font-headline text-sm font-bold tracking-tight">{region.name}</span>
                <ChevronRight
                  className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                    activeId === region.id ? 'rotate-90 opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
