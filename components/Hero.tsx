
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-rio-blue">
        <img 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop" 
          alt="Majestic Mountains and Trees"
          className="w-full h-full object-cover object-center opacity-50 scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-rio-blue/90 via-rio-blue/40 to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-12 bg-rio-orange"></div>
            <span className="text-rio-tan font-bold tracking-[0.4em] uppercase text-[10px] md:text-sm">{t.hero.subtitle}</span>
          </div>
          
          <h1 className="text-6xl sm:text-8xl md:text-[140px] font-bold text-white mb-2 font-oswald leading-none tracking-tighter drop-shadow-2xl">
            {t.hero.title_part1} <span className="text-rio-orange">{t.hero.title_part2}</span>
          </h1>
          
          <div className="inline-block border-y-2 border-rio-orange/60 py-2 md:py-4 px-2 mb-8 bg-rio-blue/20 backdrop-blur-sm">
            <p className="text-xl sm:text-3xl md:text-5xl text-white font-oswald tracking-[0.1em] md:tracking-[0.2em] uppercase">
              {t.hero.categories}
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-slate-100 mb-10 max-w-xl leading-relaxed font-medium drop-shadow-md">
            {t.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="bg-rio-orange hover:bg-orange-600 text-white px-10 py-5 rounded-sm font-bold shadow-2xl transition-all transform hover:-translate-y-1 text-center uppercase tracking-widest">
              {t.hero.cta_primary}
            </a>
            <a href="#services" className="group flex items-center justify-center gap-4 text-white font-bold text-lg px-6">
              <span className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-rio-blue transition-all">
                ▶
              </span>
              {t.hero.cta_secondary}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
