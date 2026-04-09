'use client';

import { motion } from 'motion/react';
import { 
  Hospital, 
  HeartPulse, 
  ShieldCheck, 
  Scissors, 
  ArrowRight, 
  CheckCircle2,
  Microscope,
  Box,
  BadgeCheck
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const SOLUTIONS = [
  {
    id: 'furniture',
    title: 'Hospital Furniture',
    subtitle: 'Modular Healthcare Environments',
    description: 'Precision-engineered medical furniture systems designed for durability, patient comfort, and ergonomic efficiency. Our ICU beds and ward solutions meet international standards for specialized care environments.',
    image: '/images/solutions/hospital-furniture.png',
    icon: Hospital,
    features: ['Electric ICU Beds', 'Patient Transfer Trolleys', 'Ergonomic Examination Tables', 'Modular Ward Storage'],
    color: 'from-blue-500/20 to-blue-600/5',
    iconColor: 'text-blue-600'
  },
  {
    id: 'assistance',
    title: 'Operation Assistance',
    subtitle: 'Real-time Surgical Support',
    description: 'Direct technical support during complex surgical procedures. Our clinical specialists ensure precise instrument application and implant positioning to maximize surgical success and patient safety.',
    image: '/images/solutions/operation-assistance.png',
    icon: HeartPulse,
    features: ['24/7 Clinical Support', 'Implant Positioning Guidance', 'Case Planning Assistance', 'Technical Instrumentation Support'],
    color: 'from-rose-500/20 to-rose-600/5',
    iconColor: 'text-rose-600'
  },
  {
    id: 'sterilization',
    title: 'ETO Sterilization',
    subtitle: 'Advanced Microbial Elimination',
    description: 'Advanced Ethylene Oxide (ETO) technology for heat and moisture-sensitive medical devices. We provide high-reliability sterilization services that guarantee microbial elimination without compromising instrument integrity.',
    image: '/images/solutions/eto-sterilization.png',
    icon: ShieldCheck,
    features: ['Gentle ETO Processing', 'Safe for Sensitive Materials', 'Certified Quality Control', 'Quick Turnaround Cycles'],
    color: 'from-emerald-500/20 to-emerald-600/5',
    iconColor: 'text-emerald-600'
  },
  {
    id: 'instruments',
    title: 'Surgical Instruments',
    subtitle: 'Precision Engineering Excellence',
    description: 'Precision-engineered surgical tools crafted from high-grade stainless steel and biocompatible titanium. Our ergonomic instruments are designed for optimal tactile feedback and long-term durability in intensive surgical environments.',
    image: '/images/solutions/surgical-instruments.png',
    icon: Scissors,
    features: ['Orthopedic Micro-Instruments', 'Titanium Trauma Tools', 'High-Tactile Feedback Design', 'Corrosion-Resistant Coatings'],
    color: 'from-amber-500/20 to-amber-600/5',
    iconColor: 'text-amber-600'
  }
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">
      
      {/* ── Hero Section ── */}
      <section className="relative px-6 lg:px-12 py-32 overflow-hidden bg-[#0D1B3E]">
        {/* Ambient background effects */}
        <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-primary/20 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-accent/10 blur-[120px] rounded-full -translate-x-1/4 translate-y-1/4 pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 border border-accent/25 text-accent text-[11px] font-black uppercase tracking-widest mb-8"
          >
            <Box className="w-3.5 h-3.5" />
            Global Healthcare Solutions
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-5xl md:text-[88px] font-headline font-black text-white leading-[0.85] tracking-tighter mb-10"
          >
            Elevating the <br />
            <span className="text-accent underline decoration-accent/30 underline-offset-8">Surgical Standard</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            From precision instrumentation to comprehensive hospital infrastructure, we provide the critical components necessary for modern clinical excellence.
          </motion.p>
        </div>
      </section>

      {/* ── Main Solutions Body ── */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24 space-y-32">
        
        {/* Quick Icon Grid */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {SOLUTIONS.map((solution, i) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                const el = document.getElementById(solution.id);
                el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }}
              className="bg-white p-7 rounded-[2rem] border border-outline-variant/15 flex flex-col items-center text-center group cursor-pointer shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-primary/20 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:rotate-6 ${solution.color}`}>
                <solution.icon className={`w-8 h-8 ${solution.iconColor}`} />
              </div>
              <h3 className="text-[16px] font-headline font-black text-on-surface group-hover:text-primary transition-colors">{solution.title}</h3>
              <p className="text-[11px] font-bold text-on-surface-variant/40 uppercase tracking-widest mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Explore Section</p>
            </motion.div>
          ))}
        </section>

        {/* Detailed Solutions Sections */}
        {SOLUTIONS.map((item, index) => (
          <section key={item.id} id={item.id} className="relative scroll-mt-24">
            <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-24`}>
              
              {/* Image Side */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="w-full lg:w-1/2 relative group"
              >
                <div className="absolute -inset-6 bg-primary/5 rounded-[3rem] blur-3xl group-hover:bg-primary/10 transition-colors opacity-0 group-hover:opacity-100 duration-700" />
                <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-outline-variant/20 shadow-2xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />
                </div>
                
                {/* Floating glass badge */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className={`absolute -bottom-8 ${index % 2 === 0 ? '-right-8' : '-left-8'} bg-white/70 backdrop-blur-2xl p-6 rounded-[1.5rem] border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.15)] hidden md:block z-20 group-hover:-translate-y-2 transition-transform duration-500`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-white shadow-inner`}>
                      <BadgeCheck className={`w-6 h-6 ${item.iconColor} animate-pulse`} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant/60 mb-0.5">Clinical Standard</p>
                      <p className="text-[15px] font-headline font-black text-on-surface">Verified Excellence</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Content Side */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-white border border-outline-variant/15 shadow-sm group-hover:scale-110 transition-transform`}>
                    <item.icon className={`w-7 h-7 ${item.iconColor}`} />
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-outline-variant/30 to-transparent" />
                </div>

                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-primary font-black text-xs uppercase tracking-[0.3em] mb-4 block"
                >
                  {item.subtitle}
                </motion.span>
                <h2 className="text-4xl md:text-6xl font-headline font-black text-on-surface mb-8 leading-[1.05] tracking-tight">
                  {item.title}
                </h2>
                <p className="text-on-surface-variant/70 text-lg md:text-xl leading-relaxed mb-10 font-medium">
                  {item.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 mb-12">
                  {item.features.map((feature, fIdx) => (
                    <motion.div 
                      key={feature} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: fIdx * 0.1 }}
                      className="flex items-center gap-3.5 group/item"
                    >
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center bg-white border border-outline-variant/20 shadow-sm transition-colors group-hover/item:border-primary`}>
                        <CheckCircle2 className={`w-3.5 h-3.5 ${item.iconColor}`} />
                      </div>
                      <span className="text-[16px] font-bold text-on-surface/80 group-hover/item:text-primary transition-colors">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <Link 
                  href="/contact"
                  className="relative inline-flex items-center gap-4 px-10 py-5 bg-on-surface text-surface font-black rounded-2xl overflow-hidden group/btn transition-all hover:bg-primary shadow-xl hover:shadow-primary/30 active:scale-95"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Request Clinical Portfolio
                    <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-2" />
                  </span>
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                </Link>
              </motion.div>
            </div>
          </section>
        ))}

        {/* ── CTA Banner ── */}
        <section>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[4rem] p-16 lg:p-24 text-center relative overflow-hidden bg-[#0D1B3E] shadow-2xl"
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 blur-[100px] rounded-full -translate-x-1/4 translate-y-1/4 pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-6xl font-headline font-black text-white mb-8 tracking-tight">
                Ready to optimize your <br className="hidden md:block" /> clinical workflow?
              </h2>
              <p className="text-white/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                Consult with our clinical experts to find the right combination of surgical instruments and hospital solutions for your facility.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  href="/contact"
                  className="px-12 py-5 bg-accent text-[#0D1B3E] font-black rounded-2xl hover:bg-white transition-all shadow-2xl hover:-translate-y-1 active:translate-y-0"
                >
                  Schedule Consultation
                </Link>
                <Link 
                  href="/about"
                  className="px-12 py-5 border-2 border-white/20 text-white font-black rounded-2xl hover:bg-white/10 transition-all hover:border-white/40"
                >
                  Our Philosophy
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}
