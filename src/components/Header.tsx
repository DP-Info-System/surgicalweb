'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Globe, ChevronDown, Menu, X, ArrowRight, Activity, Layers, Bone, Target } from 'lucide-react';
import Link from 'next/link';

const navItems = [
  { name: 'Products', href: '#', hasDropdown: true },
  { name: 'Solutions', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Contact', href: '#' },
];

export default function Header() {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative bg-white py-4 border-b border-primary/10 shadow-xs z-50">
      <div className="max-w-[1920px] mx-auto px-8 flex items-center justify-between">
        
        {/* Authoritative Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="text-3xl font-black tracking-tighter text-on-surface">
            Shashwat
            <span className="text-primary italic font-black">.</span>
          </div>
        </Link>

        {/* High-Fidelity Navigation with Hover Dropdown */}
        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative py-2 group"
              onMouseEnter={() => setActiveItem(item.name)}
              onMouseLeave={() => setActiveItem(null)}
            >
              <Link
                href={item.href}
                className="text-[11px] font-black uppercase tracking-[0.25em] text-on-surface hover:text-primary transition-all duration-300 flex items-center gap-1"
              >
                {item.name}
                {item.hasDropdown && (
                  <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeItem === item.name ? 'rotate-180' : ''}`} />
                )}
              </Link>

              {/* Animated Underline Indicator */}
              {activeItem === item.name && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-[-18px] left-0 right-0 h-1 bg-primary rounded-full shadow-[0_0_10px_rgba(0,71,169,0.5)] z-20"
                />
              )}

              {/* Products Dropdown Menu */}
              {item.hasDropdown && (
                <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-6 transition-all duration-300 ${activeItem === item.name ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                  <div className="w-64 bg-white rounded-2xl shadow-2xl border border-primary/5 p-4 flex flex-col gap-1">
                    {[
                      { name: 'Trauma Systems', icon: Activity },
                      { name: 'Spinal Implants', icon: Layers },
                      { name: 'Sports Medicine', icon: Bone },
                      { name: 'CMF Solutions', icon: Target }
                    ].map((sub) => (
                      <Link 
                        key={sub.name} 
                        href="#" 
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 text-sm font-bold text-on-surface group/sub transition-all"
                      >
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover/sub:bg-primary group-hover/sub:text-white transition-all">
                           <sub.icon className="w-4 h-4" />
                        </div>
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Interface Controls */}
        <div className="flex items-center gap-6">
          
          {/* Digital Search Pill */}
          <div className="hidden md:flex items-center relative group">
            <Search className="absolute left-4 w-4 h-4 text-on-surface-variant/40 group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Clinical Database" 
              className="pl-11 pr-6 py-2.5 rounded-full text-xs font-bold transition-all duration-500 outline-hidden border border-primary/10 w-48 lg:w-64 focus:w-80 bg-primary/5 focus:bg-white focus:border-primary/40 focus:shadow-xl"
            />
          </div>

          {/* Language Switcher */}
          <button className="p-2 rounded-full transition-all border border-primary/5 hover:bg-primary/5 text-on-surface">
            <Globe className="w-5 h-5" />
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl border border-primary/10 text-primary"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>


      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full inset-x-0 bg-white shadow-2xl p-8 border-b-2 border-primary/5 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className="text-lg font-black text-on-surface flex items-center justify-between group"
                >
                  {item.name}
                  <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
