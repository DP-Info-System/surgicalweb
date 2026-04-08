'use client';

import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

const stats = [
  {
    value: 140,
    suffix: '+',
    label: 'Patented Devices',
    description: 'Pioneering instrumentation ensuring absolute rigidity and streamlined operative workflows.',
  },
  {
    value: 99.8,
    suffix: '%',
    label: 'Survivorship Rate',
    description: 'Peer-reviewed studies confirm exceptional long-term implant stability without aseptic loosening.',
    featured: true,
  },
  {
    value: 50,
    suffix: '+',
    label: 'Global Markets',
    description: 'Relied upon by premier surgical centers extending across diverse healthcare systems worldwide.',
  },
];

function CountUp({ target, suffix, duration = 1800 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const startTime = Date.now();
    const isDecimal = !Number.isInteger(target);
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(isDecimal ? parseFloat((eased * target).toFixed(1)) : Math.floor(eased * target));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="relative px-6 lg:px-12 py-28 overflow-hidden" style={{ background: 'linear-gradient(150deg, #0D1B3E 0%, #0b152e 60%, #0f1f45 100%)' }}>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/stats-background.jpg"
          alt="Clinical Environment"
          fill
          sizes="100vw"
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B3E]/80 via-transparent to-[#0D1B3E]/80" />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none z-0" />

      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/10 blur-[100px] rounded-full pointer-events-none z-0" />

      <div className="max-w-[1440px] mx-auto relative z-10">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10" style={{ background: '#E8A020' }} />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]" style={{ color: '#E8A020' }}>
              Proven Competence
            </span>
            <div className="h-px w-10" style={{ background: '#E8A020' }} />
          </div>
          <h2 className="text-4xl lg:text-5xl font-headline font-black text-white leading-tight">
            A Legacy of{' '}
            <span className="text-outline-white" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.85)' }}>
              Clinical Excellence
            </span>
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 relative">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`relative flex flex-col items-center text-center px-10 py-12 transition-all group ${
                stat.featured
                  ? 'bg-white/6 border-y border-white/10 md:border-x md:border-y-0'
                  : 'hover:bg-white/3'
              }`}
            >
              {/* Vertical divider lines */}
              {index === 0 && (
                <div className="absolute right-0 top-8 bottom-8 w-px hidden md:block" style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.1), transparent)' }} />
              )}
              {index === 1 && (
                <div className="absolute right-0 top-8 bottom-8 w-px hidden md:block" style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.1), transparent)' }} />
              )}

              {stat.featured && (
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 px-4 py-1 rounded-b-xl text-[9px] font-black uppercase tracking-widest"
                  style={{ background: '#E8A020', color: '#3d2000' }}
                >
                  Benchmark
                </div>
              )}

              {/* Glow effect on featured */}
              {stat.featured && (
                <div className="absolute inset-0 bg-primary/5 blur-xl pointer-events-none" />
              )}

              <span className="text-[56px] lg:text-[68px] font-headline font-black leading-none mb-2 tracking-tighter"
                style={{ color: stat.featured ? '#E8A020' : 'white' }}>
                <CountUp target={stat.value} suffix={stat.suffix} />
              </span>

              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-white/40 block mb-5">
                {stat.label}
              </span>

              <p className="text-white/55 text-[14px] leading-relaxed font-body max-w-xs">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 px-8 py-6 rounded-2xl border border-white/8"
          style={{ background: 'rgba(255,255,255,0.03)' }}
        >
          <p className="text-white/60 text-[15px] font-medium text-center md:text-left">
            Trusted by <span className="text-white font-bold">2,400+ surgical centers</span> across 50 countries
          </p>
          <a
            href="/contact"
            className="flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-[13px] text-white transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #0047a9, #0b5ed7)' }}
          >
            Partner With Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
