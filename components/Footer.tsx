
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-rio-blue text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-16 mb-16">
          <div className="col-span-2">
            <h3 className="text-4xl font-bold font-oswald mb-6 tracking-tighter uppercase">RIO <span className="text-rio-orange">BONITO</span></h3>
            <p className="text-blue-100/60 max-w-sm text-lg leading-relaxed">
              {t.footer.description}
            </p>
          </div>
          <div>
            <h4 className="font-black text-rio-orange mb-8 uppercase text-xs tracking-[0.4em]">{t.footer.links}</h4>
            <ul className="space-y-4 text-blue-100/80 font-bold uppercase text-xs tracking-widest">
              <li><a href="#home" className="hover:text-white transition-colors">{t.nav.home}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{t.nav.services}</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">{t.nav.about}</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">{t.nav.contact}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-rio-orange mb-8 uppercase text-xs tracking-[0.4em]">{t.footer.hours}</h4>
            <ul className="space-y-2 text-blue-100/80 text-sm font-medium">
              <li>Mon - Fri: 8:00 AM - 5:30 PM</li>
              <li>Sat: 9:00 AM - 4:00 PM</li>
              <li className="pt-4 text-white font-black italic border-t border-white/10">{t.footer.access}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-blue-100/40 text-[10px] font-black uppercase tracking-widest">
          <p>© {currentYear} Rio Bonito Storage Yard. {t.footer.rights}</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
