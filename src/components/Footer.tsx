'use client';

import { Linkedin, Twitter, Youtube, Mail, Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const footerLinks = [
  {
    heading: 'Products',
    links: [
      { label: 'Orthopedic Implants', href: '#' },
      { label: 'Spinal Systems', href: '#' },
      { label: 'Trauma Fixation', href: '#' },
      { label: 'Sports Medicine', href: '#' },
    ],
  },
  {
    heading: 'Regulatory',
    links: [
      { label: 'Regulatory Affairs', href: '#' },
      { label: 'Quality Assurance', href: '#' },
      { label: 'Compliance', href: '#' },
      { label: 'Clinical Trials', href: '#' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Careers', href: '#' },
      { label: 'Press & Media', href: '#' },
    ],
  },
];

const socialLinks = [
  { Icon: Linkedin, label: 'LinkedIn' },
  { Icon: Twitter, label: 'Twitter / X' },
  { Icon: Youtube, label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(150deg, #0D1B3E 0%, #0a152d 100%)' }}>

      {/* ── Newsletter banner ── */}
      <div className="border-b border-white/8">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-white font-headline font-bold text-[18px] mb-1">
              Stay updated with clinical innovations
            </h4>
            <p className="text-white/45 text-[13px]">
              Monthly digest of product launches, regulatory updates, and surgical case studies.
            </p>
          </div>
          <form
            className="flex gap-3 w-full md:w-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="your@hospital.org"
              className="flex-1 md:w-64 bg-white/8 border border-white/12 rounded-lg px-4 py-2.5 text-[13px] text-white placeholder:text-white/30 focus:outline-none focus:border-primary/60 transition-colors"
            />
            <button
              type="submit"
              className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-bold text-[13px] rounded-lg hover:bg-primary-container transition-colors shrink-0"
            >
              Subscribe <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* ── Main footer grid ── */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* Brand column */}
        <div className="lg:col-span-2 space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <img
                src="/logo.png"
                alt="Shashwat Enterprise Logo"
                className="w-full h-full object-contain opacity-90"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-headline font-black text-white text-[20px] leading-none">Shashwat</span>
              <span className="font-headline font-bold text-primary text-[16px] leading-none mt-1">Enterprise</span>
            </div>
          </div>
          <p className="text-white/40 text-[13px] leading-relaxed max-w-xs">
            Elevating surgical standards through curated anatomical precision and advanced biotechnological engineering.
          </p>
          <div className="flex gap-3">
            {socialLinks.map(({ Icon, label }) => (
              <button
                key={label}
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/12 text-white/40 hover:border-primary/60 hover:text-primary hover:bg-primary/10 transition-all"
              >
                <Icon className="w-4 h-4" />
              </button>
            ))}
          </div>
          <div className="space-y-2 pt-2">
            <a href="mailto:inquiries@shashwat-clinical.com" className="flex items-center gap-2 text-white/40 hover:text-white/70 text-[12px] transition-colors">
              <Mail className="w-3.5 h-3.5" /> inquiries@shashwat-clinical.com
            </a>
            <a href="tel:+18005555464" className="flex items-center gap-2 text-white/40 hover:text-white/70 text-[12px] transition-colors">
              <Phone className="w-3.5 h-3.5" /> +1 (800) 555-CLINIC
            </a>
          </div>
        </div>

        {/* Link columns */}
        {footerLinks.map((col) => (
          <div key={col.heading}>
            <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-5">
              {col.heading}
            </h5>
            <ul className="space-y-3">
              {col.links.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/50 hover:text-white text-[13px] font-medium transition-colors hover:translate-x-0.5 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/8">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-[11px] tracking-wide">
            © 2024 Shashwat Enterprise Global. Professional Medical Use Only. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((item) => (
              <a key={item} href="#" className="text-white/30 hover:text-white/60 text-[11px] font-medium transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
