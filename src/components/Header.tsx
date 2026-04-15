'use client';

import { Search, ChevronDown, ArrowRight, Menu, X, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ORTHOPEDIC_CATEGORIES, OTHER_SERVICES } from '../constants';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(ORTHOPEDIC_CATEGORIES[1]); // Default to Arthroscopy
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'About', href: '/about' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-[0_2px_24px_rgba(0,71,169,0.1)] border-b border-outline-variant/10'
            : 'bg-white/80 backdrop-blur-md border-b border-outline-variant/5'
        }`}
      >
        <nav className="flex justify-between items-center w-full px-6 lg:px-12 h-20 max-w-[1440px] mx-auto">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-12 h-12 flex items-center justify-center">
              <img
                src="/logo.png"
                alt="Shashwat Enterprise Logo"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[28px] font-black text-on-surface tracking-tight font-headline leading-none">
                Shashwat
              </span>
              <span className="text-[16px] font-bold text-primary tracking-tight font-headline leading-none mt-1">
                Enterprise
              </span>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <div className="hidden md:flex gap-8 items-center justify-center flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative text-on-surface font-semibold hover:text-primary transition-colors text-[14px] group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent rounded-full group-hover:w-full transition-all duration-300" />
              </Link>
            ))}

            {/* Products Dropdown */}
            <div
              className="relative h-20 flex items-center"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="relative flex items-center gap-1.5 text-on-surface font-semibold hover:text-primary transition-colors text-[14px] group py-1">
                Products
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isProductsOpen ? 'rotate-180 text-primary' : ''}`} />
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent rounded-full group-hover:w-full transition-all duration-300" />
              </button>

              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[980px] bg-white rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.12)] border border-outline-variant/15 overflow-hidden flex"
                  >
                    {/* Left: Meril-style Grid Sidebar */}
                    <div className="w-[360px] bg-[#F8FAFC] p-8 border-r border-[#E2E8F0] shrink-0">
                      <div className="mb-6 px-4">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#3f4b63]/40">
                          Orthopedic
                        </h3>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        {ORTHOPEDIC_CATEGORIES.map((cat) => (
                          <button
                            key={cat.id}
                            onMouseEnter={() => setActiveCategory(cat)}
                            className={`flex flex-col items-center justify-center gap-3 p-4 rounded-3xl transition-all duration-300 group ${
                              activeCategory.id === cat.id
                                ? 'bg-[#EAF2F9] shadow-sm'
                                : 'hover:bg-white/60 hover:shadow-sm'
                            }`}
                          >
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all bg-white shadow-sm group-hover:scale-110 ${
                              activeCategory.id === cat.id ? 'shadow-inner' : ''
                            }`}>
                              <cat.icon className={`w-6 h-6 ${activeCategory.id === cat.id ? 'text-[#3A75B4]' : 'text-gray-400'}`} />
                            </div>
                            <span className={`text-[11px] text-center leading-tight font-bold transition-colors ${
                              activeCategory.id === cat.id ? 'text-[#3A75B4]' : 'text-gray-500'
                            }`}>
                              {cat.name}
                            </span>
                          </button>
                        ))}
                      </div>

                      <div className="mt-8 pt-6 border-t border-[#E2E8F0] px-4">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#3f4b63]/40 mb-4">
                          Other Services
                        </h3>
                        <div className="grid grid-cols-2 gap-2">
                          {OTHER_SERVICES.slice(0, 4).map((service) => (
                            <button 
                              key={service.name} 
                              className="flex items-center gap-2 p-2 rounded-xl text-[11px] text-gray-500 hover:bg-white hover:text-primary transition-all font-bold"
                            >
                              <service.icon className="w-3.5 h-3.5" />
                              <span className="truncate">{service.name}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right: Detailed Content Panel */}
                    <div className="flex-1 flex flex-col bg-white">
                      
                      {/* Subcategory Header */}
                      <div className="p-10 pb-8 flex items-center justify-between border-b border-[#E2E8F0]">
                        <div className="flex items-center gap-5">
                          <div className="w-14 h-14 bg-[#EAF2F9] rounded-2xl flex items-center justify-center shadow-sm">
                            <activeCategory.icon className="w-7 h-7 text-[#3A75B4]" />
                          </div>
                          <div>
                            <h4 className="text-[26px] font-headline font-black text-[#0D1B3E] tracking-tight">{activeCategory.name}</h4>
                            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">{activeCategory.items?.length ?? 0} specialized product lines</p>
                          </div>
                        </div>
                        <button className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-primary/10 text-primary font-black text-xs uppercase tracking-widest hover:bg-primary/5 transition-colors">
                          View All <ExternalLink className="w-3.5 h-3.5 ml-1" />
                        </button>
                      </div>

                      {/* Product Grid */}
                      <div className="flex-1 p-10 pt-8 overflow-y-auto">
                        <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                          {activeCategory.items.map((item) => (
                            <Link
                              key={item.name}
                              href="#"
                              className="group flex flex-col py-4 px-5 rounded-[1.5rem] hover:bg-[#F8FAFC] transition-all border border-transparent hover:border-[#E2E8F0]"
                            >
                              <span className="text-[15px] font-bold text-gray-800 group-hover:text-[#3A75B4] transition-colors">{item.name}</span>
                              <span className="text-[11px] text-gray-400 mt-1 font-medium">Advanced surgical solutions</span>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Clinical Assistance Banner */}
                      <div className="p-8 bg-[#F8FAFC] border-t border-[#E2E8F0] flex items-center justify-between mx-4 mb-4 rounded-[2rem]">
                        <div className="flex items-center gap-5">
                          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                            <Image src="/logo.png" alt="Shashwat" width={24} height={24} className="opacity-80" />
                          </div>
                          <div>
                            <p className="text-sm font-black text-[#0D1B3E] leading-tight">Need clinical assistance?</p>
                            <p className="text-[11px] text-gray-500 font-medium">Our specialists are available 24/7 for consultation.</p>
                          </div>
                        </div>
                        <Link href="/contact" className="px-8 py-3 bg-[#0D1B3E] text-white text-xs font-black uppercase tracking-[0.2em] rounded-xl hover:bg-primary transition-all shadow-lg shadow-primary/20">
                          Contact Support
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* ── Desktop Right: Search + CTA ── */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <div className="flex items-center bg-surface-container-low rounded-lg px-3 py-2 border border-outline-variant/15 gap-2 hover:border-primary/30 transition-colors group">
              <Search className="text-on-surface-variant/40 w-4 h-4 group-hover:text-primary/60 transition-colors" />
              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent border-none focus:outline-none text-[13px] w-44 font-label text-on-surface placeholder:text-on-surface-variant/40"
              />
            </div>
            <Link
              href="/contact"
              className="bg-primary text-white font-bold text-[13px] tracking-wide px-7 py-2.5 rounded-lg hover:bg-primary-container transition-all shadow-sm hover:shadow-md hover:shadow-primary/20 hover:-translate-y-0.5"
            >
              Contact
            </Link>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-outline-variant/20 text-on-surface hover:border-primary/30 hover:text-primary transition-all"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </nav>
      </header>

      {/* ── Mobile Full-Screen Overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
              className="fixed top-0 right-0 h-full w-[85vw] max-w-sm bg-white z-[70] shadow-2xl flex flex-col overflow-y-auto"
            >
              {/* Mobile Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-outline-variant/10">
                <div className="flex flex-col">
                  <span className="font-headline font-black text-on-surface text-xl leading-none">Shashwat</span>
                  <span className="font-headline font-bold text-primary text-base leading-none mt-1">Enterprise</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-outline-variant/20 text-on-surface hover:text-primary hover:border-primary/30 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Nav Links */}
              <div className="flex flex-col px-4 py-4 gap-1 flex-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-on-surface font-semibold text-[15px] hover:bg-surface-container-low hover:text-primary transition-all"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile Products Accordion */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.28 }}
                >
                  <button
                    onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                    className="w-full flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl text-on-surface font-semibold text-[15px] hover:bg-surface-container-low hover:text-primary transition-all"
                  >
                    Products
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileProductsOpen ? 'rotate-180 text-primary' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileProductsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden ml-4"
                      >
                        {ORTHOPEDIC_CATEGORIES.map((cat) => (
                          <button
                            key={cat.id}
                            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-on-surface-variant font-medium text-[13px] hover:text-primary transition-colors text-left"
                          >
                            <cat.icon className="w-4 h-4 shrink-0" />
                            {cat.name}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>

              {/* Mobile CTA */}
              <div className="px-6 py-6 border-t border-outline-variant/10">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-primary text-white font-bold text-[14px] rounded-xl py-3.5 hover:bg-primary-container transition-colors"
                >
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
