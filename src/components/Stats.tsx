'use client';

import { motion } from 'motion/react';

const stats = [
  {
    value: '140+',
    label: 'Patented Devices',
    description: 'Pioneering medical hardware designed for surgical longevity and patient comfort.',
    offset: 'md:mt-12'
  },
  {
    value: '99.8%',
    label: 'Success Rate',
    description: 'Clinical trials demonstrate industry-leading performance across multi-center studies.',
    offset: ''
  },
  {
    value: '50+',
    label: 'Global Markets',
    description: 'Trusted by the world\'s leading medical institutions and clinical research organizations.',
    offset: 'md:mt-6'
  }
];

export default function Stats() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className={`p-8 rounded-xl border border-outline-variant/10 transition-all hover:bg-surface-container-high ${
              index === 1 ? 'bg-surface-container-lowest shadow-sm' : 'bg-surface-container-low'
            } ${stat.offset}`}
          >
            <span className="text-4xl font-headline font-extrabold text-primary mb-2 block tracking-tight">
              {stat.value}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant/40">
              {stat.label}
            </span>
            <p className="mt-4 text-on-surface-variant/70 text-sm leading-relaxed">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
