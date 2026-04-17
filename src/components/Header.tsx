'use client';

import { Search, ChevronDown, ArrowRight, Menu, X, ExternalLink, ChevronRight, FileText, HeartPulse, Activity, Bone, Stethoscope, Ear, Microscope, Bot, Bed, Scissors, Layers, ShoppingBag } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCT_DATA } from '../data/products';
import Link from 'next/link';


const CATEGORY_ICONS: Record<string, any> = {
  'Overview': FileText,
  'Cardiac Surgery': HeartPulse,
  'Vascular Intervention': Activity,
  'Endo-Surgery': Stethoscope,
  'Orthopedics': Bone,
  'ENT': Ear,
  'Diagnostics': Microscope,
  'Surgical Robots': Bot,
  'Hospital Furniture': Bed,
  'General Instruments': Scissors,
  'Surgical Products': Layers,
  'Orthobiologics': ShoppingBag,
};

export default function Header() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout|null>(null);
  
  // Navigation State
  const [activeCategory, setActiveCategory] = useState<any>(null);
  const [activeSubCategory, setActiveSubCategory] = useState<any>(null);

  
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  // Safe hover handlers
  const handleProductsEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setIsProductsOpen(true);
  };

  const handleProductsLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsProductsOpen(false);
    }, 300); // 300ms buffer to allow moving mouse to the menu
  };

  // Initialize with Overview
  useEffect(() => {
    if (!activeCategory) {
      setActiveCategory({ name: 'Overview' });
    }
    // Cleanup timeout on unmount
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

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
              onMouseEnter={handleProductsEnter}
              onMouseLeave={handleProductsLeave}
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
                    className="absolute top-[85px] left-1/2 -translate-x-1/2 w-[calc(100vw-48px)] max-w-[1240px] bg-white/95 backdrop-blur-3xl rounded-[3rem] shadow-[0_40px_120px_rgba(0,0,0,0.18)] border border-white/30 overflow-hidden flex h-[min(720px,calc(100vh-140px))]"


                    onMouseEnter={() => {
                      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                    }}
                    onMouseLeave={() => {
                      setActiveSubCategory(null);
                      handleProductsLeave();
                    }}

                  >
                    {/* Level 1: Sidebar (Main Categories) */}
                    <div className="w-[300px] bg-slate-100/60 p-6 border-r border-slate-200/50 shrink-0 flex flex-col overflow-y-auto custom-scrollbar">
                      <div className="mb-6 px-4">
                        <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-primary/60">
                          DEPARTMENTS
                        </h3>
                      </div>
                      
                      <div className="flex flex-col gap-1">

                        <button
                          onMouseEnter={() => {
                            setActiveCategory({ name: 'Overview' });
                            setActiveSubCategory(null);
                          }}
                          className={`flex items-center gap-4 p-4 rounded-[1.5rem] transition-all duration-500 group relative ${
                            activeCategory?.name === 'Overview'
                              ? 'bg-white shadow-[0_10px_30px_rgba(0,71,169,0.08)] ring-1 ring-primary/5'
                              : 'hover:bg-white/60 hover:shadow-sm'
                          }`}
                        >
                          {activeCategory?.name === 'Overview' && (
                            <motion.div layoutId="activeCat" className="absolute inset-0 bg-white rounded-[1.5rem] -z-10 shadow-[0_10px_30px_rgba(0,71,169,0.08)]" />
                          )}
                          <div className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-500 bg-gradient-to-br ${
                                activeCategory?.name === 'Overview' 
                                  ? 'from-primary to-primary-container text-white scale-105 shadow-lg shadow-primary/20' 
                                  : 'from-slate-100 to-slate-200 text-slate-400 group-hover:scale-110'
                              }`}>
                            <FileText className="w-5 h-5" />
                          </div>
                          <span className={`text-[14px] font-bold transition-all duration-500 ${
                            activeCategory?.name === 'Overview' ? 'text-primary' : 'text-slate-600 group-hover:text-slate-900'
                          }`}>
                            Overview
                          </span>

                        </button>

                        {PRODUCT_DATA.map((cat) => (
                          <button
                            key={cat.name}
                            onMouseEnter={() => {
                              setActiveCategory(cat);
                              setActiveSubCategory(null);
                            }}
                            className={`flex items-center gap-4 p-4 rounded-[1.5rem] transition-all duration-500 group relative ${
                              activeCategory?.name === cat.name
                                ? 'bg-white shadow-[0_10px_30px_rgba(0,71,169,0.08)] ring-1 ring-primary/5'
                                : 'hover:bg-white/60 hover:shadow-sm'
                            }`}
                          >
                            {activeCategory?.name === cat.name && (
                              <motion.div layoutId="activeCat" className="absolute inset-0 bg-white rounded-[1.5rem] -z-10 shadow-[0_10px_30px_rgba(0,71,169,0.08)]" />
                            )}
                            <div className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-500 bg-gradient-to-br ${
                                  activeCategory?.name === cat.name 
                                    ? 'from-primary to-primary-container text-white scale-105 shadow-lg shadow-primary/20' 
                                    : 'from-slate-100 to-slate-200 text-slate-400 group-hover:scale-110'
                                }`}>
                              {(() => {
                                const Icon = CATEGORY_ICONS[cat.name] || Activity;
                                return <Icon className="w-5 h-5" />;
                              })()}
                            </div>
                            <span className={`text-[14px] font-bold transition-all duration-500 ${
                              activeCategory?.name === cat.name ? 'text-primary' : 'text-slate-600 group-hover:text-slate-900'
                            }`}>
                              {cat.name}
                            </span>

                          </button>
                        ))}
                      </div>


                    </div>

                    {/* Level 2: Content Canvas */}
                    <div className="flex-1 bg-white flex flex-col overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeCategory?.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="flex-1 h-full overflow-y-auto custom-scrollbar p-8 lg:p-10"

                        >
                          {activeCategory?.name === 'Overview' ? (
                            <div className="h-full flex flex-col gap-10">
                              <div className="max-w-xl">
                                <motion.div 
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.1 }}
                                  className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-full mb-4"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                  Innovating Surgery
                                </motion.div>
                                <h2 className="text-[40px] font-black text-[#0D1B3E] tracking-tight mb-4 leading-[1.1]">
                                  Excellence in <br />
                                  <span className="text-primary italic">Clinical Care.</span>
                                </h2>
                                <p className="text-slate-500 text-[16px] leading-relaxed font-medium">
                                  Access our comprehensive ecosystem of high-precision surgical instruments, 
                                  robotic systems, and diagnostic tools designed for modern healthcare.
                                </p>
                              </div>

                              <div className="grid grid-cols-3 gap-6">
                                {PRODUCT_DATA.slice(0, 6).map((cat, i) => (
                                  <motion.div 
                                    key={cat.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.05 }}
                                    className="p-6 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,71,169,0.08)] hover:border-primary/20 transition-all duration-500 group cursor-pointer"
                                  >
                                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500 mb-6">
                                      {(() => {
                                        const Icon = CATEGORY_ICONS[cat.name] || Activity;
                                        return <Icon className="w-6 h-6" />;
                                      })()}
                                    </div>
                                    <h4 className="font-black text-[#0D1B3E] text-sm mb-2">
                                      {cat.name}
                                    </h4>
                                    <p className="text-[11px] text-slate-400 font-medium mb-4 line-clamp-2">
                                      Leading solutions for complex surgical procedures.
                                    </p>
                                    <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-primary/40 group-hover:text-primary transition-colors">
                                      <span>Explore</span>
                                      <ArrowRight className="w-3.5 h-3.5" />
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <div className="space-y-12">
                              <div className="flex items-end justify-between border-b border-slate-100 pb-8">
                                <div>
                                  <h2 className="text-[32px] font-black text-[#0D1B3E] tracking-tight">{activeCategory?.name}</h2>
                                  <div className="flex items-center gap-2 mt-2">
                                    <span className="text-[11px] font-bold text-slate-400">Total Portfolio:</span>
                                    <span className="text-[11px] font-black text-primary px-2 py-0.5 bg-primary/10 rounded-full">
                                      {activeCategory?.subCategories.length} Departments
                                    </span>
                                  </div>
                                </div>
                                <button className="text-[12px] font-bold text-primary flex items-center gap-1.5 px-4 py-2 bg-primary/5 rounded-full hover:bg-primary/10 transition-colors">
                                  View Full Catalogue <ExternalLink className="w-3.5 h-3.5" />
                                </button>
                              </div>

                              <div className="grid grid-cols-2 gap-x-12 gap-y-10">
                                {activeCategory?.subCategories.map((sub: any, subIdx: number) => (
                                  <motion.div 
                                    key={sub.name}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: subIdx * 0.1 }}
                                    className="flex flex-col gap-5"
                                  >
                                    <div className="flex items-center gap-3">
                                      <div className="w-2 h-8 bg-primary/20 rounded-full" />
                                      <h3 className="text-[16px] font-black text-[#0D1B3E] tracking-tight uppercase tracking-widest">{sub.name}</h3>
                                    </div>
                                    
                                    <div className="grid grid-cols-1 gap-4">
                                      {sub.subSubCategories.map((ssr: any) => (
                                        <div key={ssr.name} className="group cursor-pointer">
                                          <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all duration-300">
                                            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-primary group-hover:scale-150 transition-all duration-300 shrink-0" />
                                            <div>
                                              <h4 className="text-[13px] font-bold text-slate-700 group-hover:text-primary transition-colors leading-tight mb-1">{ssr.name}</h4>
                                              <p className="text-[10px] text-slate-400 font-medium group-hover:text-slate-500 line-clamp-1">
                                                {ssr.products.length > 0 ? ssr.products.join(', ') : 'Specialized Clinical Solutions'}
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          )}
                        </motion.div>
                      </AnimatePresence>
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
                        className="overflow-hidden bg-[#F8FAFC]/50 rounded-2xl mx-2 mb-2"
                      >
                        {PRODUCT_DATA.map((cat) => (
                          <div key={cat.name} className="border-b border-slate-100 last:border-0">
                            <button
                              onClick={() => setActiveCategory(activeCategory?.name === cat.name ? null : cat)}
                              className={`w-full flex items-center justify-between px-4 py-4 text-[14px] font-bold transition-colors ${
                                activeCategory?.name === cat.name ? 'text-primary bg-white' : 'text-slate-600 hover:bg-white/50'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                {(() => {
                                  const Icon = CATEGORY_ICONS[cat.name] || Activity;
                                  return <Icon className={`w-4 h-4 ${activeCategory?.name === cat.name ? 'text-primary' : 'text-slate-400'}`} />;
                                })()}
                                {cat.name}
                              </div>
                              <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-300 ${activeCategory?.name === cat.name ? 'rotate-90' : ''}`} />
                            </button>
                            
                            <AnimatePresence>
                              {activeCategory?.name === cat.name && (
                                <motion.div
                                  initial={{ height: 0 }}
                                  animate={{ height: 'auto' }}
                                  exit={{ height: 0 }}
                                  className="overflow-hidden bg-white/50"
                                >
                                  {cat.subCategories.map((sub: any) => (
                                    <div key={sub.name} className="pl-11 pr-4 py-2 hover:bg-white transition-colors">
                                      <p className="text-[12px] font-bold text-slate-800 mb-1">{sub.name}</p>
                                      <div className="flex flex-wrap gap-1.5 pt-1">
                                        {sub.subSubCategories.slice(0, 3).map((ssr: any) => (
                                          <span key={ssr.name} className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full font-medium">
                                            {ssr.name}
                                          </span>
                                        ))}
                                        {sub.subSubCategories.length > 3 && (
                                          <span className="text-[10px] text-primary font-bold">+{sub.subSubCategories.length - 3} more</span>
                                        )}
                                      </div>
                                    </div>
                                  ))}
                                  <div className="px-11 py-4">
                                    <Link
                                      href="/solutions"
                                      onClick={() => setMobileOpen(false)}
                                      className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-primary hover:gap-3 transition-all"
                                    >
                                      View All {cat.name} <ArrowRight className="w-3 h-3" />
                                    </Link>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
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
