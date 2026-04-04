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
      <nav className="flex justify-between items-center w-full px-8 lg:px-12 h-24 max-w-[1920px] mx-auto">
        {/* Left: Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-8 h-8 grid grid-cols-2 gap-1 items-center justify-center rotate-45">
            <div className="w-full h-full bg-primary rounded-tl-sm rounded-br-md"></div>
            <div className="w-full h-full bg-primary/60 rounded-tr-sm rounded-bl-md"></div>
            <div className="w-full h-full bg-primary/60 rounded-bl-sm rounded-tr-md"></div>
            <div className="w-full h-full bg-primary rounded-br-sm rounded-tl-md"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-on-surface tracking-tight font-headline leading-none">Shashwat</span>
          </div>
        </div>

        {/* Center: Navigation Group */}
        <div className="hidden md:flex gap-10 items-center justify-center flex-1">
          <a href="/" className="text-on-surface font-extrabold hover:text-primary transition-colors text-[15px]">
            Home
          </a>

          <div
            className="relative h-24 flex items-center"
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
          >
            <button className="flex items-center gap-1 text-on-surface font-extrabold hover:text-primary transition-colors text-[15px]">
              Products <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isProductsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-24 left-1/2 -translate-x-1/2 w-[800px] bg-white rounded-b-2xl shadow-2xl border border-outline-variant/10 overflow-hidden flex"
                >
                  {/* Left Side: Categories */}
                  <div className="w-1/3 bg-surface-container-low p-6 border-r border-outline-variant/10">
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/40 mb-4">Orthopedic</h3>
                    <div className="space-y-1">
                      {ORTHOPEDIC_CATEGORIES.map((cat) => (
                        <button
                          key={cat.id}
                          onMouseEnter={() => setActiveCategory(cat)}
                          className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 text-left ${activeCategory.id === cat.id
                            ? 'bg-white text-primary shadow-sm'
                            : 'text-primary/70 hover:bg-white/50'
                            }`}
                        >
                          <cat.icon className="w-5 h-5" />
                          <span className="text-base font-bold">{cat.name}</span>
                        </button>
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-outline-variant/10">
                      <h3 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/40 mb-4">Other Services</h3>
                      <div className="grid grid-cols-1 gap-2">
                        {OTHER_SERVICES.slice(0, 4).map((service) => (
                          <button key={service.name} className="flex items-center gap-2 text-xs text-primary/70 hover:text-primary transition-colors text-left font-medium">
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
                          <span className="text-base font-bold text-primary group-hover:text-primary-container transition-colors">{item.name}</span>
                          <span className="text-[11px] text-primary/50 mt-1 font-medium">Advanced surgical solutions for {item.name.toLowerCase()} procedures.</span>
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

          {['Solutions', 'About'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-on-surface font-extrabold hover:text-primary transition-colors text-[15px]"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right: Search & Contact */}
        <div className="flex items-center gap-6 shrink-0">
          <div className="hidden lg:flex items-center bg-surface-container-low rounded-md px-3 py-2.5 border border-outline-variant/10">
            <Search className="text-on-surface-variant/40 w-4 h-4 mr-2" />
            <input
              type="text"
              placeholder="Search curated database..."
              className="bg-transparent border-none focus:outline-none text-[13px] w-52 font-label text-on-surface"
            />
          </div>

          <a href="#" className="bg-primary text-white font-bold text-[13px] tracking-wide px-10 py-3 rounded-sm hover:bg-primary/90 transition-all shadow-sm">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
