'use client';

import { motion } from 'motion/react';
import { Shield, Target, Microscope, Globe, Zap, Cpu } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    title: 'Biological Compatibility',
    description: 'Engineered with bio-mimetic porous titanium surfaces to actively promote osseointegration and eliminate rejection risks over decades of use.',
    icon: Shield,
    color: 'bg-blue-50 text-blue-600'
  },
  {
    title: 'Precision Navigation',
    description: 'Fully integrated with digital surgical mapping algorithms, enabling surgeons to achieve secure, sub-millimeter accuracy for the most complex anatomies.',
    icon: Target,
    color: 'bg-indigo-50 text-indigo-600'
  },
  {
    title: 'Micro-Intervention',
    description: 'Minimally invasive form factors that preserve crucial soft tissue integrity, significantly accelerating the patient\'s post-operative recovery timelines.',
    icon: Microscope,
    color: 'bg-cyan-50 text-cyan-600'
  },
  {
    title: 'Global Clinical Trust',
    description: 'Verified through a rigorous database tracking over 50,000 successful surgical outcomes across diverse demographics and multi-center studies.',
    icon: Globe,
    color: 'bg-teal-50 text-teal-600'
  }
];

export default function Features() {
  return (
    <section className="max-w-[1920px] mx-auto px-8 py-32 bg-surface-container-lowest">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        {/* Left Aspect: Detail Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-bold tracking-[0.2em] text-[10px] uppercase mb-6 block">Technological Edge</span>
          <h2 className="text-4xl lg:text-6xl font-headline font-extrabold text-on-surface leading-[1.1] mb-8 tracking-tighter">
            Surgical Precision. <br />
            <span className="text-primary-container">Clinical Proof.</span>
          </h2>
          <p className="text-lg text-on-surface-variant/70 leading-relaxed font-body max-w-xl mb-12">
            Shashwat transcends a conventional catalog; it represents an advanced engineering ecosystem. Every device undergoes thousands of hours of biomechanical simulation, ensuring unparalleled clinical predictability and safety.
          </p>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-headline font-bold text-lg text-on-surface">Agile Supply Logistics</h4>
                <p className="text-sm text-on-surface-variant/60 max-w-sm mt-1">Real-time inventory routing guarantees immediate instrument availability precisely when life-saving operations demand it.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Cpu className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-headline font-bold text-lg text-on-surface">Advanced Metallurgy</h4>
                <p className="text-sm text-on-surface-variant/60 max-w-sm mt-1">Combining medical-grade titanium with specialized cross-linked polymers to yield exceptional fatigue strength for lifelong durability.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Aspect: Grid Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 bg-white border border-outline-variant/10 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-8 transition-transform group-hover:scale-110`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="font-headline font-bold text-xl text-on-surface mb-3 tracking-tight">{feature.title}</h3>
              <p className="text-on-surface-variant/70 text-sm leading-relaxed font-body">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* NEW IMAGE SECTION ADDED */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[500px] lg:h-[600px] rounded-[3rem] overflow-hidden mt-32 shadow-2xl"
      >
        <Image
          src="/images/features-overview.jpg"
          alt="Biomechanical Engineering Facility"
          fill
          sizes="100vw"
          className="object-cover hover:scale-105 transition-transform duration-[2s]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-10 lg:p-16">
          <div className="max-w-3xl">
            <h3 className="text-white text-3xl lg:text-5xl font-headline font-bold mb-4 tracking-tight">Pioneering Next-Gen Implants</h3>
            <p className="text-white/80 font-body text-lg lg:text-xl leading-relaxed">
              Our state-of-the-art research facilities combine 3D anatomical modeling with rigorous cyclic fatigue testing. We are constantly innovating to meet the evolving demands of modern orthopedics, ensuring unmatched reliability under the most critical physiological workloads.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
