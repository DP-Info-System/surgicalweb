'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Activity, Bone, Layers, ArrowRight, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    id: 'trauma',
    label: 'Precision Engineering',
    title: 'Trauma',
    titleAccent: '& Fixation',
    description: 'Advanced plating and nailing paradigms designed for complex fracture management, delivering rapid recovery and restoring normal load-bearing.',
    accentColor: '#E8A020',
    gradientFrom: 'from-blue-900/90',
    gradientTo: 'to-blue-700/60',
    icon: Activity,
    bgImage: '/images/trauma.jpg',
    stat: { value: '10,000+', label: 'Procedures Supported' },
  },
  {
    id: 'spine',
    label: 'Biomechanical Stability',
    title: 'Spinal',
    titleAccent: 'Innovation',
    description: 'Next-generation disc replacement and dynamic stabilization therapies addressing degenerative conditions to preserve natural motion.',
    accentColor: '#E8A020',
    gradientFrom: 'from-indigo-900/90',
    gradientTo: 'to-indigo-700/60',
    icon: Layers,
    bgImage: '/images/spine.jpg',
    stat: { value: '99.8%', label: 'Survivorship Rate' },
  },
  {
    id: 'sports',
    label: 'Minimally Invasive',
    title: 'Sports',
    titleAccent: 'Medicine',
    description: 'High-fidelity arthroscopy instruments and soft-tissue anchors tailored for critical joint preservation and accelerated rehabilitation.',
    accentColor: '#E8A020',
    gradientFrom: 'from-cyan-900/90',
    gradientTo: 'to-cyan-700/60',
    icon: Bone,
    bgImage: '/images/sports.jpg',
    stat: { value: '50+', label: 'Global Markets' },
  },
];

const SLIDE_DURATION = 8000;

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const startTime = Date.now();
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      setProgress(Math.min((elapsed / SLIDE_DURATION) * 100, 100));
    }, 50);

    const slideTimer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(slideTimer);
    };
  }, [currentSlide]);

  const slide = slides[currentSlide];
  const SlideIcon = slide.icon;

  const handleSlideChange = (idx: number) => {
    setCurrentSlide(idx);
    setProgress(0);
  };

  return (
    <section className="relative w-full h-[88vh] min-h-[600px] overflow-hidden bg-black">

      {/* ── Background Images ── */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
            className="absolute inset-0"
          >
            <Image
              src={slide.bgImage}
              alt={slide.title}
              fill
              sizes="100vw"
              className="object-cover brightness-60"
              priority
            />
          </motion.div>
        </AnimatePresence>
        {/* Multi-layer vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/10 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 z-10" />
      </div>

      {/* ── Slide accent glow ── */}
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[300px] blur-[120px] opacity-20 z-10 transition-all duration-1000 pointer-events-none"
        style={{ background: `radial-gradient(ellipse, ${slide.accentColor}, transparent 70%)` }}
      />

      {/* ── Main Content ── */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-full relative z-20 flex items-center">
        <div className="max-w-3xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
            >
              {/* Label badge */}
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-[0.2em]"
                  style={{ background: 'rgba(232, 160, 32, 0.15)', color: '#E8A020', border: '1px solid rgba(232, 160, 32, 0.3)' }}
                >
                  <SlideIcon className="w-3 h-3" />
                  {slide.label}
                </span>
                <div className="h-px w-10 bg-white/20" />
                <span className="text-white/40 text-[11px] font-bold tracking-widest uppercase">
                  Slide {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                </span>
              </div>

              {/* ── Headline with outline effect ── */}
              <h1 className="font-headline font-black leading-[0.88] tracking-tighter mb-8">
                <span className="block text-[72px] lg:text-[100px] text-white">
                  {slide.title}
                </span>
                <span
                  className="block text-[72px] lg:text-[100px] text-outline-white"
                  style={{ WebkitTextStroke: '2px rgba(255,255,255,0.75)' }}
                >
                  {slide.titleAccent}
                </span>
              </h1>

              <p className="text-[17px] text-white/65 max-w-lg leading-relaxed mb-10 font-body">
                {slide.description}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mb-14">
                <button
                  className="group flex items-center gap-2 px-8 py-4 rounded-xl font-headline font-bold text-[14px] text-white transition-all hover:scale-105 active:scale-95 shadow-xl"
                  style={{ background: 'linear-gradient(135deg, #0047a9, #0b5ed7)' }}
                >
                  Explore Portfolio
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-headline font-bold text-[14px] rounded-xl hover:bg-white/20 transition-all"
                >
                  Clinical Data
                </Link>
              </div>

              {/* ── Stat Badge ── */}
              <div className="inline-flex items-center gap-4 px-5 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <span className="text-2xl font-headline font-black text-white">{slide.stat.value}</span>
                <span className="text-[11px] text-white/50 font-bold uppercase tracking-widest">{slide.stat.label}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ── Progress Bars ── */}
          <div className="flex items-center gap-3 mt-10">
            {slides.map((s, idx) => (
              <button
                key={idx}
                onClick={() => handleSlideChange(idx)}
                className="relative h-1 rounded-full overflow-hidden transition-all duration-500 cursor-pointer"
                style={{ width: idx === currentSlide ? '80px' : '24px', background: 'rgba(255,255,255,0.15)' }}
              >
                {idx === currentSlide && (
                  <motion.div
                    className="absolute inset-y-0 left-0 rounded-full"
                    style={{ background: slide.accentColor, width: `${progress}%` }}
                    transition={{ duration: 0.05 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Right side decorative stat panel (desktop only) ── */}
      <div className="absolute right-12 bottom-16 z-20 hidden xl:flex flex-col gap-4">
        {slides.map((s, idx) => (
          <motion.button
            key={s.id}
            onClick={() => handleSlideChange(idx)}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: idx === currentSlide ? 1 : 0.3, x: 0 }}
            className={`text-right transition-all duration-300 ${idx === currentSlide ? 'scale-100' : 'scale-90 hover:opacity-60'}`}
          >
            <span
              className="block text-[9px] font-black uppercase tracking-[0.3em] mb-0.5"
              style={{ color: idx === currentSlide ? slide.accentColor : 'rgba(255,255,255,0.4)' }}
            >
              {String(idx + 1).padStart(2, '0')}
            </span>
            <span className="block text-[12px] font-bold text-white/70">{s.title} {s.titleAccent}</span>
          </motion.button>
        ))}
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 hidden md:flex">
        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-white/30" />
        </motion.div>
      </div>
    </section>
  );
}
