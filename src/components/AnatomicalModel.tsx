'use client';

import { motion } from 'motion/react';
import { ANATOMICAL_HOTSPOTS } from '../constants';

interface AnatomicalModelProps {
  onHotspotClick: (id: string) => void;
  activeId?: string | null;
}

export default function AnatomicalModel({ onHotspotClick, activeId }: AnatomicalModelProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute inset-0 bg-primary/5 rounded-full blur-[140px] scale-100"></div>

      {/* Anatomical Container: naturally sized by the image */}
      <div className="relative w-full max-w-[600px] flex mx-auto">
        {/* The Model Image sets the dimensions */}
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBchiIS5AtseYNxeFavApSDgXRESAMpQ5cgjJcHwj6Ohxlaej1YrAyoNes3pLu732gGQitfJ6TvN8XnQzS3ScdO6q5QmwdoezavXahrqCHShb5qmRYH2e8p2rrbXxIjJHBeUf8VmXBfxaFj58YkHryRVHFqfPNbvl38vzHHkEErECMyESzOuVt8WpLlrwD2-yIUSo9jOEoRwJXbynvpnXua9Li9elKDTyqh99QIPpFfaq-yB_IXbHd8_-KU3KZ-sc2KCiEI0Hcd"
          alt="Anatomical Illustration"
          className="w-full h-auto object-contain mix-blend-multiply opacity-90 grayscale contrast-110"
          referrerPolicy="no-referrer"
        />

        {/* Hotspots Overlay - Maps exactly to the natural image dimensions */}
        <div className="absolute inset-0 pointer-events-none">
          {ANATOMICAL_HOTSPOTS.map((spot) => (
            <div
              key={spot.id}
              className="absolute group z-20 pointer-events-auto"
              style={{ top: spot.top, left: spot.left }}
              onClick={() => onHotspotClick(spot.id)}
            >
              <div className="relative w-6 h-6 cursor-pointer -translate-x-1/2 -translate-y-1/2">
                <div
                  className={`absolute inset-0 rounded-full pulse-ring ${activeId === spot.id ? 'bg-red-500/40 scale-150' : 'bg-red-500/20'}`}
                  style={{ animationDelay: `${spot.delay}s` }}
                ></div>
                <div className={`absolute inset-[30%] rounded-full shadow-[0_0_12px_rgba(239,68,68,0.5)] transition-all duration-300 ${activeId === spot.id ? 'bg-red-600 scale-125' : 'bg-red-500'}`}></div>
              </div>

              {/* Tooltip */}
              <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-4 transition-all duration-300 pointer-events-none z-50 ${activeId === spot.id ? 'opacity-100 translate-y-0' : 'opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0'}`}>
                <div className="glass-panel px-4 py-2 rounded-xl shadow-xl border border-white/20 whitespace-nowrap">
                  <span className="text-[10px] font-bold text-red-600 block uppercase tracking-tighter">{spot.category}</span>
                  <span className="text-sm font-semibold text-on-surface">{spot.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
