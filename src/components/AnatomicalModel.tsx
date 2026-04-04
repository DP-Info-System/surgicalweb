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
          {ANATOMICAL_HOTSPOTS.map((spot) => {
            const isActive = activeId === spot.id;
            return (
              <div
                key={spot.id}
                className="absolute group z-20 pointer-events-auto"
                style={{ top: spot.top, left: spot.left }}
                onClick={() => onHotspotClick(spot.id)}
              >
                {/* Outer pulse ring */}
                <div
                  className={`absolute -inset-3 rounded-full ${isActive ? 'bg-primary/15' : 'bg-primary/8'} pulse-ring`}
                  style={{ animationDelay: `${spot.delay}s` }}
                ></div>
                
                {/* Middle ring */}
                <div className={`absolute -inset-1.5 rounded-full border-2 transition-all duration-300 ${isActive ? 'border-primary/60 scale-110' : 'border-primary/25 group-hover:border-primary/40'}`}></div>
                
                {/* Inner dot container */}
                <div className="relative w-5 h-5 cursor-pointer -translate-x-1/2 -translate-y-1/2">
                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-full blur-md transition-all duration-300 ${isActive ? 'bg-primary/60' : 'bg-primary/30 group-hover:bg-primary/40'}`}></div>
                  
                  {/* Solid dot */}
                  <div className={`absolute inset-0 rounded-full transition-all duration-300 shadow-lg ${isActive ? 'bg-primary scale-125 shadow-primary/40' : 'bg-primary/80 group-hover:bg-primary group-hover:scale-110'}`}></div>
                  
                  {/* Inner highlight */}
                  <div className="absolute inset-[25%] rounded-full bg-white/40"></div>
                </div>

                {/* Tooltip */}
                <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-4 transition-all duration-300 pointer-events-none z-50 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0'}`}>
                  <div className="glass-panel px-4 py-2.5 rounded-xl shadow-xl border border-primary/20 whitespace-nowrap backdrop-blur-xl">
                    <span className="text-[9px] font-bold text-primary block uppercase tracking-widest">{spot.category}</span>
                    <span className="text-sm font-semibold text-on-surface mt-0.5 block">{spot.label}</span>
                  </div>
                  {/* Tooltip arrow */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                    <div className="w-2 h-2 bg-white rotate-45 border-r border-b border-primary/20"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
