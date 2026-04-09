'use client';

import { motion } from 'motion/react';
import { ShieldCheck, Globe2, Award, ArrowRight, ExternalLink, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function PartnershipSection() {
  return (
    <section className="relative py-28 bg-white overflow-hidden border-t border-outline-variant/10">
      {/* Ambient background decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/10 blur-[80px] rounded-full -translate-x-1/4 translate-y-1/4 pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col xl:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left: Content & context */}
          <div className="flex-1 text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-10 bg-accent" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Authorized Distribution</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-headline font-black text-on-surface leading-[1.1] mb-8 tracking-tighter"
            >
              Strategic Global <br />
              <span className="text-primary">Partnership Matrix</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-on-surface-variant/70 leading-relaxed font-body mb-10 max-w-xl"
            >
              We bridge the gap between global medical innovation and local surgical excellence. By partnering with industry giants, we ensure our surgeons have access to the most advanced, clinical-grade portfolios in the world.
            </motion.p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {[
                { icon: Globe2, label: 'Global Innovation', desc: 'Direct access to the latest FDA & CE cleared technologies.' },
                { icon: ShieldCheck, label: 'Verified Logistics', desc: 'Certified cold-chain and sterile delivery protocols.' }
              ].map((pill, i) => (
                <motion.div 
                  key={pill.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  whileHover={{ y: -5, x: 2, transition: { duration: 0.2 } }}
                  className="flex gap-4 p-4 rounded-2xl bg-surface-container-low border border-outline-variant/10 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="bg-white p-2.5 rounded-xl shadow-sm text-primary h-fit transition-transform group-hover:scale-110">
                    <pill.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-on-surface">{pill.label}</h4>
                    <p className="text-[12px] text-on-surface-variant/60 leading-tight mt-1">{pill.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Link 
                href="/about"
                className="inline-flex items-center gap-2 text-primary font-bold text-sm group transition-all"
              >
                Our Partnership Philosophy <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
              </Link>
            </motion.div>
          </div>

          {/* Right: The Meril Spotlight Card */}
          <div className="flex-1 w-full max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.99 }}
              className="relative group lg:ml-auto cursor-default"
            >
              {/* Card glow background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              
              <div className="relative bg-white border border-outline-variant/15 rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-primary/10">
                
                {/* Header / Brand Spot */}
                <div className="p-10 lg:p-14 border-b border-outline-variant/5 text-center">
                  <div className="relative w-48 h-12 mx-auto mb-8 opacity-40 group-hover:opacity-100 transition-opacity duration-700 ease-out">
                    {/* Placeholder for Meril Life Logo */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-black text-primary tracking-tighter group-hover:scale-105 transition-transform duration-500">Meril</span>
                      <span className="text-[10px] font-black text-accent uppercase tracking-widest ml-2 align-top mt-1 group-hover:translate-x-1 transition-transform duration-500">Life Sciences</span>
                    </div>
                  </div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest mb-6 border border-primary/5 group-hover:border-primary/20 transition-all"
                  >
                    <Award className="w-3.5 h-3.5" />
                    Authorized Distributor
                  </motion.div>
                  
                  <h3 className="text-3xl font-headline font-black text-on-surface mb-4 transition-colors group-hover:text-primary">Meril Life Sciences</h3>
                  <p className="text-on-surface-variant/70 text-[15px] leading-relaxed max-w-md mx-auto">
                    A global medical device company dedicated to the design and development of innovative, clinically-relevant surgical solutions.
                  </p>
                </div>

                {/* Portfolio Coverage */}
                <div className="bg-surface-container-low/40 p-10 lg:px-14 py-10">
                  <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-on-surface-variant/40 mb-6">Distribution Coverage</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      'Orthopedics & Trauma',
                      'Arthroplasty Robotics',
                      'Cardiac Interventions',
                      'Endo-Surgery Systems'
                    ].map((item, i) => (
                      <motion.div 
                        key={item} 
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span className="text-[13px] font-bold text-on-surface/80">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Action Area */}
                <div className="p-8 lg:p-10 text-center">
                  <motion.button 
                    whileHover={{ scale: 1.02, backgroundColor: '#003a8c' }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-primary text-white font-bold rounded-2xl flex items-center justify-center gap-3 shadow-lg hover:shadow-primary/25 group/btn transition-all duration-300"
                  >
                    Explore Meril Portfolio
                    <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:scale-125 group-hover/btn:rotate-12" />
                  </motion.button>
                  <p className="text-[10px] text-on-surface-variant/40 mt-4 font-medium uppercase tracking-[0.2em]">
                    Exclusive Regional Distribution Rights
                  </p>
                </div>

              </div>

              {/* Decorative Floating Icon */}
              <motion.div 
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.2, rotate: 15 }}
                className="absolute -top-6 -right-6 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-accent border border-outline-variant/10 z-20 transition-shadow hover:shadow-accent/20 cursor-pointer"
              >
                <Zap className="w-8 h-8 fill-current" />
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
