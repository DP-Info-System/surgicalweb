'use client';

import { Search, Globe, ChevronDown, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ORTHOPEDIC_CATEGORIES, OTHER_SERVICES } from '../constants';

export default function Header() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(ORTHOPEDIC_CATEGORIES[0]);

  return (
    <header className="bg-surface/85 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-outline-variant/10">
      <nav className="flex justify-between items-center w-full px-8 h-16 max-w-[1920px] mx-auto">
        <div className="flex items-center gap-8">
          <span className="text-xl font-bold text-primary tracking-tighter font-headline cursor-pointer">Shashwat</span>
          <div className="hidden md:flex gap-6 items-center">
            <div 
              className="relative h-16 flex items-center"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="flex items-center gap-1 text-on-surface-variant hover:text-primary transition-colors font-headline tracking-tight text-sm font-semibold">
                Products <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-16 left-0 w-[800px] bg-white rounded-b-2xl shadow-2xl border border-outline-variant/10 overflow-hidden flex"
                  >
                    {/* Left Side: Categories */}
                    <div className="w-1/3 bg-surface-container-low p-6 border-r border-outline-variant/10">
                      <h3 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/40 mb-4">Orthopedic</h3>
                      <div className="space-y-1">
                        {ORTHOPEDIC_CATEGORIES.map((cat) => (
                          <button
                            key={cat.id}
                            onMouseEnter={() => setActiveCategory(cat)}
                            className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 text-left ${
                              activeCategory.id === cat.id 
                                ? 'bg-white text-primary shadow-sm' 
                                : 'text-on-surface-variant/70 hover:bg-white/50'
                            }`}
                          >
                            <cat.icon className="w-4 h-4" />
                            <span className="text-sm font-semibold">{cat.name}</span>
                          </button>
                        ))}
                      </div>
                      
                      <div className="mt-8 pt-6 border-t border-outline-variant/10">
                        <h3 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/40 mb-4">Other Services</h3>
                        <div className="grid grid-cols-1 gap-2">
                          {OTHER_SERVICES.slice(0, 4).map((service) => (
                            <button key={service.name} className="flex items-center gap-2 text-xs text-on-surface-variant/60 hover:text-primary transition-colors text-left">
                              <service.icon className="w-3 h-3" />
                              <span>{service.name}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Side: Subcategories/Items */}
                    <div className="w-2/3 p-8 bg-white">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <activeCategory.icon className="w-6 h-6 text-primary" />
                          </div>
                          <h4 className="text-xl font-headline font-bold text-on-surface">{activeCategory.name}</h4>
                        </div>
                        <button className="text-xs font-bold text-primary flex items-center gap-1 hover:underline">
                          View All <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                        {activeCategory.items.map((item) => (
                          <a 
                            key={item.name} 
                            href="#" 
                            className="group flex flex-col p-3 rounded-xl hover:bg-surface-container-low transition-colors"
                          >
                            <span className="text-sm font-semibold text-on-surface group-hover:text-primary transition-colors">{item.name}</span>
                            <span className="text-[10px] text-on-surface-variant/50 mt-1">Advanced surgical solutions for {item.name.toLowerCase()} procedures.</span>
                          </a>
                        ))}
                      </div>

                      <div className="mt-12 p-4 bg-primary/5 rounded-xl border border-primary/10 flex items-center justify-between">
                        <div>
                          <p className="text-xs font-bold text-primary">Need technical assistance?</p>
                          <p className="text-[10px] text-on-surface-variant/70">Our clinical specialists are available 24/7.</p>
                        </div>
                        <button className="px-4 py-2 bg-primary text-white text-[10px] font-bold rounded-lg">Contact Support</button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {['Solutions', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-on-surface-variant hover:text-primary transition-colors font-headline tracking-tight text-sm font-semibold"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center bg-surface-container-low rounded-lg px-3 py-1.5 border border-outline-variant/10">
            <Search className="text-on-surface-variant/40 w-4 h-4 mr-2" />
            <input
              type="text"
              placeholder="Search curated database..."
              className="bg-transparent border-none focus:outline-none text-xs w-48 font-label"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <button className="p-2 text-on-surface-variant hover:bg-surface-container-low transition-all duration-300 rounded-full">
              <Globe className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
