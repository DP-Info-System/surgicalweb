'use client';

import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Clock, ArrowRight, Linkedin, Twitter, Github, ChevronDown, MessageSquare, Users } from 'lucide-react';
import { useState } from 'react';

const FAQS = [
  {
    q: 'What is the typical response time for clinical inquiries?',
    a: 'Our clinical support team responds to all professional inquiries within 4 business hours. Urgent surgical support requests are handled within 1 hour via our priority hotline.',
  },
  {
    q: 'How can I request product samples or demonstrations?',
    a: 'You can request product demonstrations and evaluation units directly through this form by selecting "Product Demo" as your inquiry type. Our regional specialist will follow up to schedule an in-hospital demonstration.',
  },
  {
    q: 'Do you offer training programs for surgical teams?',
    a: 'Yes. We offer a comprehensive Surgical Excellence program combining hands-on cadaveric workshops, live surgical observation, and digital simulation modules for all major product lines.',
  },
  {
    q: 'Are your products available globally?',
    a: 'We operate in 50+ countries. Regulatory approvals vary by region — contact us with your country and intended product to get region-specific availability and certification information.',
  },
];

const inquiryTypes = [
  'General Inquiry',
  'Product Demo Request',
  'Clinical Partnership',
  'Technical Support',
  'Regulatory Affairs',
  'Career Inquiry',
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 6000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">

      {/* ── Hero banner ── */}
      <section
        className="relative px-6 lg:px-12 py-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0D1B3E 0%, #0a152d 50%, #0f2260 100%)' }}
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
        <div className="absolute -top-20 right-1/4 w-[500px] h-[350px] bg-primary/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-[1440px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest mb-6"
            style={{ background: 'rgba(232,160,32,0.15)', color: '#E8A020', border: '1px solid rgba(232,160,32,0.25)' }}
          >
            <MessageSquare className="w-3 h-3" />
            Get In Touch
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-[72px] font-headline font-black text-white tracking-tighter mb-5 leading-[0.9]"
          >
            Let's Start a{' '}
            <span style={{ WebkitTextStroke: '2px rgba(255,255,255,0.8)', color: 'transparent' }}>
              Conversation
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[16px] text-white/50 max-w-xl mx-auto leading-relaxed"
          >
            Whether you're looking to partner with us, inquire about our clinical solutions, or request support — our global team is ready to assist.
          </motion.p>

          {/* Quick contact badges */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mt-10"
          >
            {[
              { icon: Phone, label: '+1 (800) 555-CLINIC' },
              { icon: Mail, label: 'inquiries@shashwat.com' },
              { icon: Users, label: '24/7 Clinical Support' },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-semibold text-white/60 border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <Icon className="w-3.5 h-3.5" style={{ color: '#E8A020' }} />
                {label}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

          {/* ── Form Side ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative bg-white rounded-[2rem] shadow-[0_4px_40px_rgba(0,71,169,0.08)] border border-outline-variant/15 overflow-hidden p-8 lg:p-12"
          >
            <div className="absolute top-0 right-0 w-56 h-56 bg-primary/4 rounded-bl-full pointer-events-none" />

            <h2 className="text-[22px] font-headline font-bold text-on-surface mb-2">Send a Message</h2>
            <p className="text-[13px] text-on-surface-variant/60 mb-8">Fill out the form and a specialist will respond within 4 hours.</p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                className="min-h-[400px] flex flex-col items-center justify-center text-center gap-4"
              >
                <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-on-surface">Message Sent!</h3>
                <p className="text-on-surface-variant max-w-xs text-[14px]">
                  Thank you for reaching out. A clinical representative will contact you within 4 business hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div className="grid grid-cols-2 gap-5">
                  {[
                    { label: 'First Name', placeholder: 'John', type: 'text' },
                    { label: 'Last Name', placeholder: 'Doe', type: 'text' },
                  ].map((f) => (
                    <div key={f.label} className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant/60">{f.label}</label>
                      <input
                        required type={f.type}
                        placeholder={f.placeholder}
                        className="w-full bg-surface-container-low border border-outline-variant/25 rounded-xl px-4 py-3 text-[13px] focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                    </div>
                  ))}
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant/60">Email Address</label>
                  <input
                    required type="email" placeholder="john@hospital.org"
                    className="w-full bg-surface-container-low border border-outline-variant/25 rounded-xl px-4 py-3 text-[13px] focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant/60">Inquiry Type</label>
                  <select className="w-full bg-surface-container-low border border-outline-variant/25 rounded-xl px-4 py-3 text-[13px] focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all appearance-none cursor-pointer">
                    {inquiryTypes.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant/60">Message</label>
                  <textarea
                    required rows={5}
                    placeholder="How can we help you today?"
                    className="w-full bg-surface-container-low border border-outline-variant/25 rounded-xl px-4 py-3 text-[13px] focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                  />
                </div>

                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full bg-primary text-white font-bold rounded-xl py-4 flex items-center justify-center gap-2 hover:bg-primary-container transition-all disabled:opacity-60 shadow-md hover:shadow-primary/30 hover:-translate-y-0.5"
                >
                  {isSubmitting ? 'Sending...' : 'Submit Request'}
                  {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                </button>
              </form>
            )}
          </motion.div>

          {/* ── Info Side ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h2 className="text-[20px] font-headline font-bold text-on-surface mb-6">Corporate Headquarters</h2>
              <div className="space-y-5">
                {[
                  { Icon: MapPin, title: 'Location', content: '124 Biomedical Way, Innovation Park\nCambridge, MA 02142, United States' },
                  { Icon: Mail, title: 'Email', content: 'inquiries@shashwat-clinical.com\nsupport@shashwat-clinical.com' },
                  { Icon: Phone, title: 'Phone', content: '+1 (800) 555-CLINIC' },
                  { Icon: Clock, title: 'Business Hours', content: 'Mon – Fri: 8:00 AM – 6:00 PM (EST)\n24/7 Emergency Support Available' },
                ].map(({ Icon, title, content }) => (
                  <div key={title} className="flex gap-4 items-start group">
                    <div className="w-11 h-11 bg-primary/8 rounded-xl flex items-center justify-center shrink-0 border border-primary/10 group-hover:bg-primary group-hover:border-primary transition-all">
                      <Icon className="w-4.5 h-4.5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-on-surface text-[14px] mb-1">{title}</h3>
                      {content.split('\n').map((line, i) => (
                        <p key={i} className="text-on-surface-variant/60 text-[13px] leading-relaxed">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-outline-variant/15">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-on-surface-variant/40 mb-4">Connect With Us</h3>
              <div className="flex gap-3">
                {[Linkedin, Twitter, Github].map((Icon, idx) => (
                  <button
                    key={idx}
                    className="w-11 h-11 rounded-xl border border-outline-variant/25 flex items-center justify-center text-on-surface-variant hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all"
                  >
                    <Icon className="w-4.5 h-4.5" />
                  </button>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="w-full h-48 bg-surface-container-low rounded-2xl border border-outline-variant/15 overflow-hidden relative group cursor-pointer hover:border-primary/25 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(rgba(0,71,169,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,71,169,0.04) 1px, transparent 1px)',
                backgroundSize: '24px 24px'
              }} />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-on-surface-variant gap-2">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md group-hover:-translate-y-1.5 transition-transform">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant/50 group-hover:text-primary transition-colors">
                  View on Maps
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── FAQ Section ── */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-10 bg-accent" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]" style={{ color: '#E8A020' }}>FAQs</span>
              <div className="h-px w-10 bg-accent" />
            </div>
            <h2 className="text-3xl font-headline font-black text-on-surface">Common Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-white border border-outline-variant/15 rounded-2xl overflow-hidden hover:border-primary/20 transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 group"
                >
                  <span className="font-headline font-semibold text-[15px] text-on-surface group-hover:text-primary transition-colors">
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-on-surface-variant shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-primary' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-[14px] text-on-surface-variant/70 leading-relaxed border-t border-outline-variant/10 pt-4">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
