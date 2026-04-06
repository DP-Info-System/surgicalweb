'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Activity, Bone, Layers, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const slides = [
  {
    id: 'trauma',
    title: 'Trauma & Fixation',
    subtitle: 'Precision Engineering',
    description: 'Advanced plating and nailing paradigms designed for complex fracture management, delivering rapid recovery and restoring normal load-bearing.',
    color: 'from-blue-600 to-blue-400',
    icon: Activity,
    bgImage: '/images/trauma.jpg',
  },
  {
    id: 'spine',
    title: 'Spinal Innovation',
    subtitle: 'Biomechanical Stability',
    description: 'Next-generation disc replacement and dynamic stabilization therapies addressing degenerative conditions to preserve natural motion.',
    color: 'from-indigo-600 to-indigo-400',
    icon: Layers,
    bgImage: '/images/spine.jpg',
  },
  {
    id: 'sports',
    title: 'Sports Medicine',
    subtitle: 'Minimally Invasive',
    description: 'High-fidelity arthroscopy instruments and soft-tissue anchors tailored for critical joint preservation and accelerated rehabilitation.',
    color: 'from-cyan-600 to-cyan-400',
    icon: Bone,
    bgImage: '/images/sports.jpg',
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="relative w-full h-[85vh] lg:h-[90vh] overflow-hidden bg-black">
      {/* Background Image Layer (100% Opacity) */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slide.bgImage}
              alt={slide.title}
              fill
              sizes="100vw"
              className="object-cover contrast-110 brightness-75"
              priority
            />
            {/* Vignette Overlay for Readability */}
            <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="max-w-[1920px] mx-auto px-8 h-full relative z-10 flex items-center">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="px-4 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-[11px] font-bold tracking-widest uppercase">
                  {slide.subtitle}
                </span>
                <div className="h-px w-8 bg-white/30" />
              </div>

              <h1 className="text-6xl lg:text-8xl font-headline font-black text-white leading-[0.9] mb-8 tracking-tighter">
                {slide.title.split(' ')[0]} <br />
                <span className={`bg-linear-to-r ${slide.color} bg-clip-text text-transparent`}>
                  {slide.title.split(' ').slice(1).join(' ')}
                </span>
              </h1>

              <p className="text-xl text-white/70 max-w-lg leading-relaxed mb-12 font-body font-medium">
                {slide.description}
              </p>
              
              <div className="flex flex-wrap gap-5">
                <button className={`px-10 py-5 bg-linear-to-r ${slide.color} text-white rounded-xl font-headline font-bold shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2 group`}>
                  Explore Portfolio
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
                <button className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-headline font-bold rounded-xl hover:bg-white/20 transition-all shadow-sm">
                  Clinical Data
                </button>
              </div>

              {/* Slider Progress Controls */}
              <div className="flex items-center gap-8 mt-20">
                <div className="flex gap-3">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-1.5 transition-all duration-500 rounded-full ${
                        idx === currentSlide ? 'w-16 bg-white shadow-lg' : 'w-4 bg-white/20 hover:bg-white/40'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                  Slide {currentSlide + 1} / 03
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
