
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.support, href: '#ai-assistant' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled || mobileMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 lg:px-10 flex justify-between items-center">
        <div className="flex-shrink-0">
          <Logo inverted={!scrolled && !mobileMenuOpen} className="w-12 h-12 md:w-16 md:h-16" />
        </div>
        
        <div className="hidden lg:flex gap-8 items-center">
          <div className="flex gap-6">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all relative group ${scrolled ? 'text-rio-blue' : 'text-white drop-shadow-sm'}`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rio-orange transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="h-6 w-px bg-slate-300 mx-2"></div>

          {/* Elegant Switcher Pill */}
          <button 
            onClick={toggleLanguage}
            className={`relative flex items-center w-20 h-8 rounded-full border transition-all duration-500 overflow-hidden ${
              scrolled ? 'border-rio-blue/20 bg-slate-100' : 'border-white/30 bg-white/10'
            }`}
          >
            <div className={`absolute top-1 left-1 w-9 h-6 bg-rio-orange rounded-full transition-transform duration-300 transform ${language === 'en' ? 'translate-x-9' : 'translate-x-0'}`}></div>
            <div className="relative z-10 flex w-full justify-around text-[9px] font-black tracking-tight">
              <span className={language === 'es' ? 'text-white' : scrolled ? 'text-rio-blue/50' : 'text-white/50'}>ES</span>
              <span className={language === 'en' ? 'text-white' : scrolled ? 'text-rio-blue/50' : 'text-white/50'}>EN</span>
            </div>
          </button>

          <a href="#contact" className="bg-rio-orange text-white px-8 py-3 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl transform active:scale-95">
            {t.nav.book}
          </a>
        </div>

        <div className="lg:hidden flex items-center gap-4">
          <button onClick={toggleLanguage} className={`text-xs font-black px-2 py-1 rounded border ${scrolled || mobileMenuOpen ? 'border-rio-blue text-rio-blue' : 'border-white text-white'}`}>
            {language.toUpperCase()}
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-1 ${scrolled || mobileMenuOpen ? 'text-rio-blue' : 'text-white'}`}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out bg-white ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col p-8 gap-6 h-screen overflow-y-auto">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-rio-blue font-black uppercase tracking-[0.2em] text-2xl border-b border-slate-100 pb-2"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="bg-rio-orange text-white text-center py-5 rounded-sm font-black text-xl uppercase tracking-widest mt-4 shadow-lg"
          >
            {t.nav.book}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
