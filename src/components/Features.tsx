'use client';

import { motion } from 'motion/react';
import { Shield, Target, Microscope, Globe, Zap, Cpu } from 'lucide-react';

const features = [
  {
    title: 'Biological Compatibility',
    description: 'Our implants are engineered with bio-mimetic surfaces that enhance osseointegration and reduce rejection risks.',
    icon: Shield,
    color: 'bg-blue-50 text-blue-600'
  },
  {
    title: 'Precision Navigation',
    description: 'Fully integrated with digital surgical mapping for sub-millimeter placement accuracy in arthroscopy.',
    icon: Target,
    color: 'bg-indigo-50 text-indigo-600'
  },
  {
    title: 'Micro-Intervention',
    description: 'Minimally invasive designs that preserve soft tissue integrity and accelerate clinical recovery cycles.',
    icon: Microscope,
    color: 'bg-cyan-50 text-cyan-600'
  },
  {
    title: 'Global Clinical Data',
    description: 'Backed by a centralized database of 50,000+ successful surgical outcomes across 40 countries.',
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
            Shashwat isn't just a portfolio; it's an engineering ecosystem. Every device is a result of thousands of hours of biomechanical simulation and real-world feedback loops.
          </p>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-headline font-bold text-lg text-on-surface">Rapid deployment mapping</h4>
                <p className="text-sm text-on-surface-variant/60 max-w-sm mt-1">Real-time availability tracking across our global distribution nodes.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Cpu className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-headline font-bold text-lg text-on-surface">Smart Material Integration</h4>
                <p className="text-sm text-on-surface-variant/60 max-w-sm mt-1">Titanium alloys and specialized polymers engineered for mechanical life-cycles.</p>
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
    </section>
  );
}
