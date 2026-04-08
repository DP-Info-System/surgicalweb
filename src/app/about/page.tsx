'use client';

import { motion } from 'motion/react';
import { Target, Lightbulb, HeartPulse, Award, Microscope, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const VALUES = [
  {
    icon: Target,
    title: 'Precision Focus',
    description: 'We prioritize exactness in every surgical instrument and technology we develop.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    glow: 'group-hover:shadow-blue-200',
  },
  {
    icon: Lightbulb,
    title: 'Continuous Innovation',
    description: 'Relentless pursuit of novel biotechnological solutions to elevate global standards.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    glow: 'group-hover:shadow-amber-200',
  },
  {
    icon: HeartPulse,
    title: 'Clinical Empathy',
    description: 'Understanding the ultimate goal is patient well-being and faster recovery.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    glow: 'group-hover:shadow-rose-200',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Maintaining the highest regulatory and quality assurance benchmarks.',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    glow: 'group-hover:shadow-teal-200',
  },
];

const TIMELINE = [
  { year: '2010', title: 'Company Founded', desc: 'Established as a focused orthopedic R&D initiative in Cambridge, MA.' },
  { year: '2013', title: 'First FDA Clearance', desc: 'Received 510(k) clearance for our inaugural trauma plating system.' },
  { year: '2016', title: 'Global Expansion', desc: 'Operations expanded across 20 international markets in Europe and Asia.' },
  { year: '2019', title: '10,000 Surgeries', desc: 'Supported landmark surgical milestone across 400+ partner hospitals.' },
  { year: '2022', title: 'Digital Atlas Launch', desc: 'Introduced the first fully interactive surgical anatomy mapping platform.' },
  { year: '2024', title: '50+ Markets', desc: 'Now operating in over 50 countries with 140+ patented device portfolios.' },
];

const TEAM = [
  { name: 'Dr. Sarah Chen', role: 'Chief Medical Officer', bio: 'Former head of Orthopedics with 20+ years of clinical experience.', initials: 'SC', color: 'from-blue-400 to-blue-600' },
  { name: 'Michael Rodriguez', role: 'Director of Bio-Engineering', bio: 'Pioneer in advanced biomaterials and implant design.', initials: 'MR', color: 'from-indigo-400 to-indigo-600' },
  { name: 'Dr. James Alistair', role: 'VP of Surgical Innovation', bio: 'Leading our robotics and procedural mapping divisions.', initials: 'JA', color: 'from-cyan-400 to-cyan-600' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">

      {/* ── Hero ── */}
      <section
        className="relative px-6 lg:px-12 py-28 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0D1B3E 0%, #0a152d 60%, #0f2260 100%)' }}
      >
        {/* Ambient glows */}
        <div className="absolute -top-32 -right-20 w-[600px] h-[500px] bg-primary/20 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-20 left-1/4 w-[400px] h-[300px] blur-[100px] rounded-full pointer-events-none" style={{ background: 'rgba(232,160,32,0.08)' }} />
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

        <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest mb-8"
            style={{ background: 'rgba(232,160,32,0.15)', color: '#E8A020', border: '1px solid rgba(232,160,32,0.25)' }}
          >
            <Microscope className="w-3 h-3" />
            Our Journey
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-[80px] font-headline font-black text-white tracking-tighter leading-[0.9] mb-8 max-w-4xl"
          >
            Elevating{' '}
            <span style={{ WebkitTextStroke: '2px rgba(255,255,255,0.8)', color: 'transparent' }}>
              Surgical
            </span>
            <br />Standards Since 2010
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[17px] text-white/55 max-w-2xl font-medium leading-relaxed"
          >
            From a focused research initiative to a global leader in precision orthopedic solutions. We engineer the future of surgical recovery.
          </motion.p>

          {/* Hero quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 mt-14"
          >
            {[
              { v: '140+', l: 'Patents' },
              { v: '50+', l: 'Countries' },
              { v: '2,400+', l: 'Hospitals' },
              { v: '99.8%', l: 'Survivorship' },
            ].map(({ v, l }) => (
              <div key={l} className="text-center px-6 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <span className="block text-2xl font-headline font-black text-white">{v}</span>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-white/40">{l}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-28 py-24">

        {/* ── Mission & Vision ── */}
        <section className="grid md:grid-cols-2 gap-8">
          {[
            {
              tag: 'Our Mission',
              text: 'To empower surgeons globally with flawlessly engineered, data-driven orthopedic instruments that minimize risk and maximize optimal patient outcomes.',
              side: 'right',
            },
            {
              tag: 'Our Vision',
              text: 'A healthcare landscape where every surgical procedure is supported by intuitive, hyper-precise technology, eliminating anatomical guesswork.',
              side: 'left',
            },
          ].map((card, i) => (
            <motion.div
              key={card.tag}
              initial={{ opacity: 0, x: i === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative bg-white p-10 lg:p-14 rounded-[2rem] border border-outline-variant/20 overflow-hidden group shadow-[0_2px_24px_rgba(0,71,169,0.06)] hover:shadow-[0_8px_40px_rgba(0,71,169,0.1)] transition-all"
            >
              <div className={`absolute ${card.side === 'right' ? 'right-0 top-0' : 'left-0 bottom-0'} w-32 h-32 bg-primary/5 ${card.side === 'right' ? 'rounded-bl-full' : 'rounded-tr-full'} transition-transform duration-500 group-hover:scale-150`} />
              <span
                className="inline-block text-[10px] font-black uppercase tracking-[0.3em] px-3 py-1 rounded-full mb-5"
                style={{ background: 'rgba(232,160,32,0.12)', color: '#E8A020', border: '1px solid rgba(232,160,32,0.2)' }}
              >
                {card.tag}
              </span>
              <p className="text-[20px] font-headline font-bold text-on-surface leading-snug relative z-10">
                {card.text}
              </p>
            </motion.div>
          ))}
        </section>

        {/* ── Timeline ── */}
        <section>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-10 bg-accent" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]" style={{ color: '#E8A020' }}>
                Our Milestones
              </span>
              <div className="h-px w-10 bg-accent" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-headline font-black text-on-surface">
              A Decade of Innovation
            </h2>
          </div>

          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-outline-variant/20 hidden md:block" />

            <div className="space-y-8">
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div
                      className={`inline-block bg-white border border-outline-variant/20 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all max-w-sm ${i % 2 === 0 ? 'md:ml-auto' : ''}`}
                    >
                      <span className="text-[10px] font-black uppercase tracking-widest text-primary/60 block mb-1">{item.year}</span>
                      <h4 className="text-[16px] font-headline font-bold text-on-surface mb-1">{item.title}</h4>
                      <p className="text-[13px] text-on-surface-variant/60">{item.desc}</p>
                    </div>
                  </div>
                  {/* Center dot */}
                  <div className="relative shrink-0 hidden md:flex items-center justify-center w-10 h-10">
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-white shadow-md" />
                  </div>
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Core Values ── */}
        <section>
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-10 bg-accent" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]" style={{ color: '#E8A020' }}>Core Values</span>
              <div className="h-px w-10 bg-accent" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-headline font-black text-on-surface mb-3">The Principles We Live By</h2>
            <p className="text-on-surface-variant/60 max-w-xl mx-auto text-[15px]">The engineering and clinical decisions dictating every product we design.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group bg-white p-7 rounded-2xl border border-outline-variant/15 hover:border-primary/20 transition-all hover:shadow-xl cursor-default ${value.glow}/30`}
              >
                <div className={`w-12 h-12 ${value.bg} ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-[16px] font-bold font-headline text-on-surface mb-2">{value.title}</h3>
                <p className="text-[13px] text-on-surface-variant/70 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Team ── */}
        <section>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-8 bg-accent" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]" style={{ color: '#E8A020' }}>Leadership</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-headline font-black text-on-surface">Clinical Leadership</h2>
              <p className="text-on-surface-variant/60 max-w-xl mt-2 text-[15px]">Guided by veterans of the medical device industry and leading surgical practitioners.</p>
            </div>
            <button className="px-5 py-2.5 border border-outline-variant/30 text-on-surface font-bold text-[13px] rounded-xl hover:bg-surface-container-low hover:border-primary/20 transition-all whitespace-nowrap">
              Join Our Team
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white p-8 rounded-[2rem] text-center border border-outline-variant/15 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all"
              >
                <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center text-white text-xl font-black mb-5 group-hover:scale-110 transition-transform shadow-lg`}>
                  {member.initials}
                </div>
                <h3 className="text-[18px] font-bold font-headline text-on-surface mb-1">{member.name}</h3>
                <p className="text-primary text-[12px] font-bold mb-3 uppercase tracking-widest">{member.role}</p>
                <p className="text-[13px] text-on-surface-variant/65 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Join Us CTA Banner ── */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2rem] px-10 py-14 text-center"
            style={{ background: 'linear-gradient(135deg, #0D1B3E 0%, #0047a9 100%)' }}
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
            <div className="absolute -right-20 -top-20 w-72 h-72 bg-primary-light/20 blur-[80px] rounded-full" />
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <CheckCircle className="w-4 h-4" style={{ color: '#E8A020' }} />
                <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: '#E8A020' }}>
                  We're Hiring
                </span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-headline font-black text-white mb-4">
                Shape the Future of Surgery
              </h3>
              <p className="text-white/60 max-w-xl mx-auto mb-8 text-[15px] leading-relaxed">
                Join a team of engineers, clinicians, and innovators committed to redefining the standard of surgical precision worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-primary font-bold text-[14px] rounded-xl hover:bg-surface-container-low transition-colors"
                >
                  View Open Roles <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 text-white font-bold text-[14px] rounded-xl hover:bg-white/10 transition-colors"
                >
                  Contact HR
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
