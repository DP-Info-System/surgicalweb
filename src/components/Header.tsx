'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Globe, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const navItems = [
  { name: 'Products', href: '#', hasDropdown: true },
  { name: 'Solutions', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Contact', href: '#' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-2xl py-3 border-b border-primary/5 shadow-2xl shadow-primary/5' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1920px] mx-auto px-8 flex items-center justify-between">
        
        {/* Authoritative Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className={`text-3xl font-black tracking-tighter transition-colors duration-300 ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
          >
            Shashwat
            <span className="text-primary italic font-black">.</span>
          </motion.div>
        </Link>

        {/* High-Fidelity Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onMouseEnter={() => setActiveItem(item.name)}
              onMouseLeave={() => setActiveItem(null)}
              className={`relative py-2 text-[11px] font-black uppercase tracking-[0.25em] transition-all duration-300 flex items-center gap-1 ${
                isScrolled ? 'text-on-surface-variant hover:text-primary' : 'text-white/80 hover:text-white'
              }`}
            >
              {item.name}
              {item.hasDropdown && (
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeItem === item.name ? 'rotate-180' : ''}`} />
              )}
              
              {/* Animated Underline Indicator */}
              {activeItem === item.name && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full shadow-[0_0_10px_rgba(0,71,169,0.5)]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Interface Controls */}
        <div className="flex items-center gap-6">
          
          {/* Digital Search Pill */}
          <div className="hidden md:flex items-center relative group">
            <Search className={`absolute left-4 w-4 h-4 transition-colors ${
              isScrolled ? 'text-on-surface-variant/40 group-focus-within:text-primary' : 'text-white/40 group-focus-within:text-primary'
            }`} />
            <input 
              type="text" 
              placeholder="Surgical Database" 
              className={`pl-11 pr-6 py-2.5 rounded-full text-xs font-bold transition-all duration-500 outline-hidden border w-48 lg:w-64 focus:w-80 ${
                isScrolled 
                  ? 'bg-primary/5 border-primary/10 text-on-surface focus:bg-white focus:border-primary/40 focus:shadow-xl' 
                  : 'bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:bg-white/20 focus:border-white/40'
              }`}
            />
          </div>

          {/* Language Switcher */}
          <button className={`p-2 rounded-full transition-all border ${
            isScrolled 
              ? 'border-primary/5 hover:bg-primary/5 text-on-surface' 
              : 'border-white/10 hover:bg-white/10 text-white'
          }`}>
            <Globe className="w-5 h-5" />
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-xl border ${
              isScrolled 
                ? 'border-primary/10 text-primary' 
                : 'border-white/20 text-white'
            }`}
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
