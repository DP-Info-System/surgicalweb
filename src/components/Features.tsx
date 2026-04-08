'use client';

import { motion } from 'motion/react';
import { Shield, Target, Microscope, Globe, Zap, Cpu } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    title: 'Biological Compatibility',
    description: 'Engineered with bio-mimetic porous titanium surfaces to actively promote osseointegration and eliminate rejection risks over decades of use.',
    icon: Shield,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50',
    accentBar: 'bg-blue-500',
  },
  {
    title: 'Precision Navigation',
    description: 'Fully integrated with digital surgical mapping algorithms, enabling surgeons to achieve secure, sub-millimeter accuracy for the most complex anatomies.',
    icon: Target,
    iconColor: 'text-indigo-600',
    iconBg: 'bg-indigo-50',
    accentBar: 'bg-indigo-500',
  },
  {
    title: 'Micro-Intervention',
    description: 'Minimally invasive form factors that preserve crucial soft tissue integrity, significantly accelerating the patient\'s post-operative recovery timelines.',
    icon: Microscope,
    iconColor: 'text-cyan-600',
    iconBg: 'bg-cyan-50',
    accentBar: 'bg-cyan-500',
  },
  {
    title: 'Global Clinical Trust',
    description: 'Verified through a rigorous database tracking over 50,000 successful surgical outcomes across diverse demographics and multi-center studies.',
    icon: Globe,
    iconColor: 'text-teal-600',
    iconBg: 'bg-teal-50',
    accentBar: 'bg-teal-500',
  },
];

const proofStats = [
  { value: '50K+', label: 'Clinical Outcomes' },
  { value: '140+', label: 'Patented Devices' },
  { value: '99.8%', label: 'Survivorship Rate' },
];

export default function Features() {
  return (
    <section className="relative max-w-[1440px] mx-auto px-6 lg:px-12 py-28 bg-surface-container-lowest overflow-hidden">
      {/* Background dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-50 pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* ── Left: Detail Text ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Section label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-accent" />
            <span
              className="text-[10px] font-black uppercase tracking-[0.3em]"
              style={{ color: '#E8A020' }}
            >
              Technological Edge
            </span>
          </div>

          <h2 className="text-4xl lg:text-[56px] font-headline font-extrabold text-on-surface leading-[1.05] mb-6 tracking-tighter">
            Surgical Precision.{' '}
            <br />
            <span className="text-primary">Clinical Proof.</span>
          </h2>

          <p className="text-[16px] text-on-surface-variant/70 leading-relaxed font-body max-w-xl mb-10">
            Shashwat transcends a conventional catalog — it represents an advanced engineering ecosystem. Every device undergoes thousands of hours of biomechanical simulation, ensuring unparalleled clinical predictability and safety.
          </p>

          <div className="space-y-6">
            {[
              {
                icon: Zap,
                title: 'Agile Supply Logistics',
                desc: 'Real-time inventory routing guarantees immediate instrument availability precisely when life-saving operations demand it.',
              },
              {
                icon: Cpu,
                title: 'Advanced Metallurgy',
                desc: 'Combining medical-grade titanium with specialized cross-linked polymers to yield exceptional fatigue strength for lifelong durability.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-5 items-start group">
                <div className="p-3 bg-primary/8 rounded-xl border border-primary/10 group-hover:bg-primary group-hover:border-primary transition-all duration-300 shrink-0">
                  <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-[16px] text-on-surface mb-1">{title}</h4>
                  <p className="text-[13px] text-on-surface-variant/60 leading-relaxed max-w-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Right: Feature Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group p-6 bg-white/70 backdrop-blur-sm border border-outline-variant/15 rounded-2xl shadow-[0_2px_16px_rgba(0,71,169,0.06)] hover:shadow-[0_8px_40px_rgba(0,71,169,0.14)] hover:-translate-y-1.5 transition-all duration-400 overflow-hidden"
            >
              {/* Top accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-[3px] ${feature.accentBar} rounded-t-2xl`} />

              <div className={`w-12 h-12 rounded-xl ${feature.iconBg} ${feature.iconColor} flex items-center justify-center mb-5 transition-transform group-hover:scale-105`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="font-headline font-bold text-[16px] text-on-surface mb-2 tracking-tight">{feature.title}</h3>
              <p className="text-on-surface-variant/65 text-[13px] leading-relaxed font-body">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Full-width image block ── */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[440px] lg:h-[520px] rounded-[2.5rem] overflow-hidden mt-24 shadow-2xl"
      >
        <Image
          src="/images/features-overview.jpg"
          alt="Biomechanical Engineering Facility"
          fill
          sizes="100vw"
          className="object-cover hover:scale-105 transition-transform duration-[2.5s]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

        {/* Overlay text */}
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="text-white text-2xl lg:text-4xl font-headline font-bold mb-3 tracking-tight">
              Pioneering Next-Gen Implants
            </h3>
            <p className="text-white/70 font-body text-[15px] lg:text-[17px] leading-relaxed">
              Our state-of-the-art research facilities combine 3D anatomical modeling with rigorous cyclic fatigue testing — constantly innovating to meet the evolving demands of modern orthopedics.
            </p>
          </div>

          {/* Proof stats row */}
          <div className="flex gap-8 shrink-0">
            {proofStats.map((s) => (
              <div key={s.label} className="text-center">
                <span className="block text-2xl font-headline font-black text-white">{s.value}</span>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-white/50">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
