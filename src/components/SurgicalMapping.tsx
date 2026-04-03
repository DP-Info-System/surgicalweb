'use client';

import { motion } from 'motion/react';
import { ORTHOPEDIC_CATEGORIES } from '../constants';
import { ArrowRight, Microscope as Stethoscope } from 'lucide-react';

export default function SurgicalMapping() {
  return (
    <section className="max-w-[1920px] mx-auto px-8 py-32 bg-white">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
        <span className="text-primary font-bold tracking-[0.2em] text-[10px] uppercase mb-6 block">Surgical Mapping</span>
        <h2 className="text-4xl lg:text-5xl font-headline font-extrabold text-on-surface leading-[1.1] mb-6 tracking-tighter">
          Integrated Solutions for Every <span className="text-primary-container">Procedure</span>
        </h2>
        <p className="text-lg text-on-surface-variant/70 leading-relaxed font-body">
          Our portfolio covers the complete spectrum of orthopedic and spinal procedures, from simple fixation to complex reconstructive surgery.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ORTHOPEDIC_CATEGORIES.map((category, idx) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative overflow-hidden bg-surface-container-low rounded-3xl border border-outline-variant/10 p-10 hover:bg-white hover:shadow-2xl transition-all duration-500"
          >
            <div className="flex items-center justify-between mb-12">
              <div className="p-4 bg-white rounded-2xl shadow-sm transition-transform group-hover:scale-110">
                <category.icon className="w-8 h-8 text-primary" />
              </div>
              <Stethoscope className="w-6 h-6 text-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <h3 className="text-2xl font-headline font-extrabold text-on-surface mb-4 tracking-tight">{category.name}</h3>
            
            <div className="space-y-3 mb-10">
              {category.items.slice(0, 3).map((item) => (
                <div key={item.name} className="flex items-center gap-2 text-on-surface-variant/70 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
                  <span>{item.name} Solutions</span>
                </div>
              ))}
              {category.items.length > 3 && (
                <div className="text-[10px] font-bold text-primary uppercase tracking-widest">+ {category.items.length - 3} Technical Systems</div>
              )}
            </div>

            <button className="flex items-center gap-2 text-primary font-bold text-sm hover:underline underline-offset-4 group/btn">
              Explore Portfolio <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </button>

            {/* Decorative Gradient Blob */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
