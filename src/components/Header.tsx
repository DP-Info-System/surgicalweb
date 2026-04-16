'use client';

import { Search, ChevronDown, ArrowRight, Menu, X, ExternalLink, ChevronRight, FileText, HeartPulse, Activity, Bone, Stethoscope, Ear, Microscope, Bot, Bed, Scissors, Layers, ShoppingBag } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCT_DATA } from '../data/products';
import Link from 'next/link';
import Image from 'next/image';

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
  const [activeSubSubCategory, setActiveSubSubCategory] = useState<any>(null);
  
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
                    className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[1100px] bg-white rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.12)] border border-outline-variant/15 overflow-hidden flex"
                    onMouseEnter={() => {
                      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                    }}
                    onMouseLeave={() => {
                      setActiveSubCategory(null);
                      setActiveSubSubCategory(null);
                      handleProductsLeave();
                    }}
                  >
                    {/* Level 1: Sidebar (Main Categories) */}
                    <div className="w-[280px] bg-[#F8FAFC] p-6 border-r border-[#E2E8F0] shrink-0">
                      <div className="mb-4 px-4">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#3f4b63]/40">
                          Main Categories
                        </h3>
                      </div>
                      
                      <div className="flex flex-col gap-1">
                        {/* Overview Item */}
                        <button
                          onMouseEnter={() => {
                            setActiveCategory({ name: 'Overview' });
                            setActiveSubCategory(null);
                            setActiveSubSubCategory(null);
                          }}
                          className={`flex items-center gap-4 p-3.5 rounded-2xl transition-all duration-300 group ${
                            activeCategory?.name === 'Overview'
                              ? 'bg-white shadow-md shadow-primary/5 ring-1 ring-primary/5'
                              : 'hover:bg-white/60 hover:shadow-sm'
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all bg-white shadow-sm group-hover:scale-110 ${
                            activeCategory?.name === 'Overview' ? 'text-primary' : 'text-gray-400'
                          }`}>
                            <FileText className="w-5 h-5" />
                          </div>
                          <span className={`text-[13px] font-bold transition-colors ${
                            activeCategory?.name === 'Overview' ? 'text-[#3A75B4]' : 'text-gray-500'
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
                              setActiveSubSubCategory(null);
                            }}
                            className={`flex items-center gap-4 p-3.5 rounded-2xl transition-all duration-300 group ${
                              activeCategory?.name === cat.name
                                ? 'bg-white shadow-md shadow-primary/5 ring-1 ring-primary/5'
                                : 'hover:bg-white/60 hover:shadow-sm'
                            }`}
                          >
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all bg-white shadow-sm group-hover:scale-110 ${
                              activeCategory?.name === cat.name ? 'text-primary' : 'text-gray-400'
                            }`}>
                              {(() => {
                                const Icon = CATEGORY_ICONS[cat.name] || Activity;
                                return <Icon className="w-5 h-5" />;
                              })()}
                            </div>
                            <span className={`text-[13px] font-bold transition-colors ${
                              activeCategory?.name === cat.name ? 'text-[#3A75B4]' : 'text-gray-500'
                            }`}>
                              {cat.name}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Level 2 & 3: Dynamic Drill-down columns */}
                    <div className="flex-1 flex bg-white overflow-hidden min-h-[500px]">
                      {activeCategory?.name === 'Overview' ? (
                        /* Overview Summary Panel */
                        <div className="flex-1 p-10 py-12 flex flex-col gap-8 bg-gradient-to-br from-white to-[#F8FAFC]">
                          <div className="max-w-2xl">
                            <h2 className="text-[32px] font-black text-[#0D1B3E] tracking-tight mb-4">
                              Clinical Excellence & Innovation
                            </h2>
                            <p className="text-gray-500 text-[15px] leading-relaxed font-medium">
                              Explore our comprehensive portfolio of medical devices and surgical solutions across 
                              multiple clinical specialties. From cardiac interventions to advanced robotics, 
                              we provide the tools surgeons need for life-saving procedures.
                            </p>
                          </div>

                          <div className="grid grid-cols-2 gap-4 flex-1">
                            {PRODUCT_DATA.slice(0, 6).map((cat) => (
                              <div key={cat.name} className="p-6 rounded-[2rem] bg-white border border-[#E2E8F0] hover:shadow-xl hover:shadow-primary/5 transition-all group flex flex-col justify-between">
                                <div className="flex items-center gap-4 mb-4">
                                  <div className="w-12 h-12 rounded-2xl bg-[#F0F7FF] flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    {(() => {
                                      const Icon = CATEGORY_ICONS[cat.name] || Activity;
                                      return <Icon className="w-6 h-6" />;
                                    })()}
                                  </div>
                                  <h4 className="font-black text-[#0D1B3E] text-sm">
                                    {cat.name}
                                  </h4>
                                </div>
                                <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-primary/60 group-hover:text-primary transition-colors">
                                  <span>{cat.subCategories.length} Departments</span>
                                  <ArrowRight className="w-3.5 h-3.5" />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        /* Hierarchical Drilldown */
                        <>
                          {/* Column 2: Sub-categories */}
                          <div className="w-[240px] border-r border-[#E2E8F0] p-6 flex flex-col gap-1 overflow-y-auto">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#3f4b63]/40 mb-4 px-2">
                              Sub-Category
                            </h3>
                            {activeCategory?.subCategories.map((sub: any) => (
                              <button
                                key={sub.name}
                                onMouseEnter={() => {
                                  setActiveSubCategory(sub);
                                  setActiveSubSubCategory(null);
                                }}
                                className={`flex items-center justify-between w-full text-left p-3 rounded-xl transition-all group ${
                                  activeSubCategory?.name === sub.name
                                    ? 'bg-[#F0F7FF] text-primary'
                                    : 'hover:bg-[#F8FAFC] text-gray-600'
                                }`}
                              >
                                <span className="text-[13px] font-bold truncate pr-2">{sub.name}</span>
                                <ChevronRight className={`w-3.5 h-3.5 shrink-0 transition-transform ${activeSubCategory?.name === sub.name ? 'translate-x-0.5' : 'opacity-0'}`} />
                              </button>
                            ))}
                          </div>

                          {/* Column 3: Sub-sub-categories */}
                          <div className={`w-[240px] border-r border-[#E2E8F0] p-6 flex flex-col gap-1 overflow-y-auto bg-slate-50/30 transition-opacity duration-300 ${activeSubCategory ? 'opacity-100' : 'opacity-30'}`}>
                            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#3f4b63]/40 mb-4 px-2">
                              Product Group
                            </h3>
                            {activeSubCategory?.subSubCategories.map((ss: any) => (
                              <button
                                key={ss.name}
                                onMouseEnter={() => setActiveSubSubCategory(ss)}
                                className={`flex items-center justify-between w-full text-left p-3 rounded-xl transition-all group ${
                                  activeSubSubCategory?.name === ss.name
                                    ? 'bg-[#F0F7FF] text-primary shadow-sm'
                                    : 'hover:bg-white text-gray-600'
                                }`}
                              >
                                <span className="text-[12px] font-bold truncate pr-2">{ss.name}</span>
                                <ChevronRight className={`w-3.5 h-3.5 shrink-0 transition-transform ${activeSubSubCategory?.name === ss.name ? 'translate-x-0.5' : 'opacity-0'}`} />
                              </button>
                            ))}
                          </div>

                          {/* Column 4: Products */}
                          <div className={`flex-1 p-8 flex flex-col gap-1 overflow-y-auto transition-all duration-300 ${activeSubSubCategory ? 'opacity-100 translate-x-0' : 'opacity-30 translate-x-2'}`}>
                            <div className="mb-6">
                              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#3f4b63]/40 mb-2">
                                Products
                              </h3>
                              {activeSubSubCategory && (
                                <h4 className="text-[20px] font-black text-[#0D1B3E] tracking-tight">{activeSubSubCategory.name}</h4>
                              )}
                            </div>
                            
                            <div className="grid grid-cols-1 gap-2">
                              {activeSubSubCategory?.products.map((prod: string) => (
                                <Link
                                  key={prod}
                                  href="#"
                                  className="group flex flex-col p-4 rounded-2xl hover:bg-[#F8FAFC] transition-all border border-transparent hover:border-[#E2E8F0]"
                                >
                                  <span className="text-[14px] font-bold text-gray-800 group-hover:text-primary transition-colors">{prod}</span>
                                  <span className="text-[10px] uppercase font-black tracking-widest text-gray-400 mt-1">Medical Grade Solution</span>
                                </Link>
                              ))}
                            </div>

                            {activeSubSubCategory?.products.length === 0 && (
                              <div className="flex-1 flex flex-col items-center justify-center text-center p-8 opacity-40">
                                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                                  <Activity className="w-8 h-8 text-slate-400" />
                                </div>
                                <p className="text-sm font-bold text-slate-500">Contact us for detailed product list</p>
                              </div>
                            )}
                          </div>
                        </>
                      )}
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
                        {PRODUCT_DATA.map((cat) => (
                          <button
                            key={cat.name}
                            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-on-surface-variant font-medium text-[13px] hover:text-primary transition-colors text-left"
                          >
                            {(() => {
                              const Icon = CATEGORY_ICONS[cat.name] || Activity;
                              return <Icon className="w-4 h-4 shrink-0" />;
                            })()}
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
