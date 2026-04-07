'use client';

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20 pb-24">
      {/* Header Area */}
      <section className="px-8 lg:px-12 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-headline font-black text-on-surface tracking-tight mb-6"
          >
            Get In <span className="text-primary">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-on-surface-variant max-w-2xl mx-auto font-medium"
          >
            Whether you're looking to partner with us, inquire about our clinical solutions, or request support, our global team is ready to assist you.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 lg:p-12 rounded-[2rem] shadow-xl shadow-primary/5 border border-outline-variant/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-full pointer-events-none" />
            
            <h2 className="text-2xl font-headline font-bold text-on-surface mb-8">Send a Message</h2>
            
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full min-h-[400px] flex flex-col items-center justify-center text-center space-y-4"
              >
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-on-surface">Message Sent!</h3>
                <p className="text-on-surface-variant max-w-sm">Thank you for reaching out. A clinical representative will contact you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">First Name</label>
                    <input required type="text" className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Last Name</label>
                    <input required type="text" className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Email Address</label>
                  <input required type="email" className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" placeholder="john@hospital.org" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Message</label>
                  <textarea required rows={5} className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none" placeholder="How can we help you today?"></textarea>
                </div>

                <button 
                  disabled={isSubmitting}
                  type="submit" 
                  className="w-full bg-primary text-white font-bold rounded-xl py-4 flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending Request...' : 'Submit Request'} 
                  {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                </button>
              </form>
            )}
          </motion.div>

          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col space-y-10"
          >
            <div>
              <h2 className="text-2xl font-headline font-bold text-on-surface mb-6">Corporate Headquarters</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-on-surface">Location</h3>
                    <p className="text-on-surface-variant text-sm mt-1 leading-relaxed">
                      124 Biomedical Way, Innovation Park<br />
                      Cambridge, MA 02142<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-on-surface">Email</h3>
                    <p className="text-on-surface-variant text-sm mt-1">inquiries@shashwat-clinical.com</p>
                    <p className="text-on-surface-variant text-sm border-t border-outline-variant/20 mt-2 pt-2">support@shashwat-clinical.com</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-on-surface">Phone</h3>
                    <p className="text-on-surface-variant text-sm mt-1">+1 (800) 555-CLINIC</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-on-surface">Business Hours</h3>
                    <p className="text-on-surface-variant text-sm mt-1">Mon - Fri: 8:00 AM - 6:00 PM (EST)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Map & Links */}
            <div className="pt-8 border-t border-outline-variant/20">
              <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-6">Connect With Us</h3>
              <div className="flex gap-4">
                {[Linkedin, Twitter, Github].map((Icon, idx) => (
                  <button key={idx} className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary hover:bg-primary/5 transition-all">
                    <Icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-48 bg-surface-container-high rounded-2xl border border-outline-variant/20 overflow-hidden relative group cursor-pointer">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-20 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-on-surface-variant">
                <MapPin className="w-8 h-8 mb-2 opacity-50 font-bold group-hover:text-primary group-hover:opacity-100 transition-all group-hover:-translate-y-2" />
                <span className="text-xs font-bold uppercase tracking-widest group-hover:text-primary transition-colors">View on Maps</span>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
