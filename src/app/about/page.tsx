'use client';

import { motion } from 'motion/react';
import { Target, Lightbulb, Users, HeartPulse, Microscope, Award } from 'lucide-react';

const VALUES = [
  {
    icon: Target,
    title: 'Precision Focus',
    description: 'We prioritize exactness in every surgical instrument and technology we develop.',
  },
  {
    icon: Lightbulb,
    title: 'Continuous Innovation',
    description: 'Relentless pursuit of novel biotechnological solutions to elevate global standards.',
  },
  {
    icon: HeartPulse,
    title: 'Clinical Empathy',
    description: 'Understanding the ultimate goal is patient well-being and faster recovery.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Maintaining the highest regulatory and quality assurance benchmarks.',
  },
];

const TEAM = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Medical Officer',
    bio: 'Former head of Orthopedics with 20+ years of clinical experience.',
    initials: 'SC'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Director of Bio-Engineering',
    bio: 'Pioneer in advanced biomaterials and implant design.',
    initials: 'MR'
  },
  {
    name: 'Dr. James Alistair',
    role: 'VP of Surgical Innovation',
    bio: 'Leading our robotics and procedural mapping divisions.',
    initials: 'JA'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/20 pb-24">
      {/* Hero Section */}
      <section className="relative px-8 lg:px-12 py-24 mb-16 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-[1920px] mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-8"
          >
            <Microscope className="w-3 h-3" />
            <span>Our Journey</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-headline font-black text-on-surface tracking-tight leading-[1.1] mb-8 max-w-4xl"
          >
            Elevating <span className="text-primary">Surgical Standards</span> Since 2010
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-on-surface-variant max-w-2xl font-medium leading-relaxed"
          >
            From a focused research initiative to a global leader in precision orthopedic solutions. We engineer the future of surgical recovery.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 lg:px-12 space-y-32">
        
        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-12 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface-container-low p-10 lg:p-14 rounded-[2rem] border border-outline-variant/20 relative overflow-hidden group"
          >
            <div className="absolute right-0 top-0 w-32 h-32 bg-primary/5 rounded-bl-full transition-transform duration-500 group-hover:scale-150" />
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Our Mission</h2>
            <p className="text-2xl font-headline font-bold text-on-surface leading-tight">
              To empower surgeons globally with flawlessly engineered, data-driven orthopedic instruments that minimize risk and maximize optimal patient outcomes.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface-container-low p-10 lg:p-14 rounded-[2rem] border border-outline-variant/20 relative overflow-hidden group"
          >
            <div className="absolute left-0 bottom-0 w-32 h-32 bg-primary/5 rounded-tr-full transition-transform duration-500 group-hover:scale-150" />
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Our Vision</h2>
            <p className="text-2xl font-headline font-bold text-on-surface leading-tight">
              A healthcare landscape where every surgical procedure is supported by intuitive, hyper-precise technology, eliminating anatomical guesswork.
            </p>
          </motion.div>
        </section>

        {/* Core Values */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-headline font-black text-on-surface mb-4">Core Values</h2>
            <p className="text-on-surface-variant">The principles dictating our engineering and clinical decisions.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-outline-variant/20 hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/5 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-headline text-on-surface mb-2">{value.title}</h3>
                <p className="text-sm text-on-surface-variant/80 font-medium leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl lg:text-4xl font-headline font-black text-on-surface mb-4">Clinical Leadership</h2>
              <p className="text-on-surface-variant max-w-xl">Guided by veterans of the medical device industry and leading surgical practitioners.</p>
            </div>
            <button className="px-6 py-3 bg-white border border-outline-variant/30 text-on-surface font-bold text-sm rounded-xl hover:bg-surface-container-low transition-colors whitespace-nowrap">
              Join Our Team
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface-container-low p-8 rounded-[2rem] text-center border border-outline-variant/10 hover:border-primary/20 transition-all group"
              >
                <div className="w-24 h-24 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl font-black mb-6 group-hover:scale-110 transition-transform">
                  {member.initials}
                </div>
                <h3 className="text-xl font-bold font-headline text-on-surface mb-1">{member.name}</h3>
                <p className="text-primary text-sm font-bold mb-4">{member.role}</p>
                <p className="text-sm text-on-surface-variant font-medium">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
