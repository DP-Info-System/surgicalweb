import { Globe, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 py-12 px-8 border-t border-slate-100 dark:border-slate-800">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        <div className="space-y-4">
          <span className="font-headline font-black text-slate-800 dark:text-slate-200 text-lg">Shashwat</span>
          <p className="text-slate-500 text-xs leading-relaxed max-w-xs">
            Elevating surgical standards through curated anatomical precision and advanced biotechnological engineering.
          </p>
        </div>
        
        <div>
          <h5 className="font-headline font-bold text-sm text-slate-800 dark:text-slate-200 mb-4">Regulatory</h5>
          <ul className="space-y-2">
            {['Regulatory Affairs', 'Quality Assurance', 'Compliance'].map((item) => (
              <li key={item}>
                <a href="#" className="text-slate-500 hover:text-primary transition-colors font-body text-xs tracking-wide hover:underline underline-offset-4">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h5 className="font-headline font-bold text-sm text-slate-800 dark:text-slate-200 mb-4">Company</h5>
          <ul className="space-y-2">
            {['Global Support', 'Careers', 'Clinical Trials'].map((item) => (
              <li key={item}>
                <a href="#" className="text-slate-500 hover:text-primary transition-colors font-body text-xs tracking-wide hover:underline underline-offset-4">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h5 className="font-headline font-bold text-sm text-slate-800 dark:text-slate-200 mb-4">Contact</h5>
          <p className="text-slate-500 text-xs tracking-wide font-body">Inquiries: solutions@clinicalcurator.com</p>
          <div className="flex gap-4 mt-4">
            <Globe className="w-5 h-5 text-slate-400 cursor-pointer hover:text-primary transition-colors" />
            <Mail className="w-5 h-5 text-slate-400 cursor-pointer hover:text-primary transition-colors" />
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-200/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-[10px] tracking-wide">
          © 2024 Shashwat Global. Professional Medical Use Only.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-slate-400 hover:text-primary text-[10px] font-bold uppercase tracking-widest">Privacy Policy</a>
          <a href="#" className="text-slate-400 hover:text-primary text-[10px] font-bold uppercase tracking-widest">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
