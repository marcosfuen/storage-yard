
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ServiceCard: React.FC<{ title: string; description: string; icon: React.ReactNode; image: string; btnText: string }> = ({ title, description, icon, image, btnText }) => (
  <div className="bg-white rounded-sm overflow-hidden shadow-2xl group hover:-translate-y-2 transition-all duration-500 border-b-4 border-rio-orange">
    <div className="h-64 overflow-hidden relative bg-slate-200">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
        loading="lazy"
      />
      <div className="absolute inset-0 bg-rio-blue/10 group-hover:bg-rio-blue/0 transition-colors"></div>
      <div className="absolute top-6 left-6 bg-rio-orange p-4 text-white shadow-2xl">
        {icon}
      </div>
    </div>
    <div className="p-10">
      <h3 className="text-2xl font-bold text-rio-blue mb-4 uppercase tracking-tighter font-oswald">{title}</h3>
      <p className="text-slate-600 mb-8 leading-relaxed h-20 overflow-hidden">{description}</p>
      <a href="#contact" className="text-rio-blue font-black flex items-center gap-2 hover:gap-4 transition-all uppercase text-sm tracking-widest border-t border-slate-100 pt-6">
        {btnText} <span>→</span>
      </a>
    </div>
  </div>
);

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t.services.boat_title,
      description: t.services.boat_desc,
      image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&q=80&w=800",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    },
    {
      title: t.services.rv_title,
      description: t.services.rv_desc,
      image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=800&auto=format&fit=crop",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    },
    {
      title: t.services.truck_title,
      description: t.services.truck_desc,
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 2m6 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    }
  ];

  return (
    <div id="services" className="container mx-auto px-4">
      <div className="text-center mb-20">
        <span className="text-rio-orange text-sm font-black uppercase tracking-[0.5em] block mb-4">{t.services.badge}</span>
        <h3 className="text-5xl md:text-7xl font-bold text-slate-900 font-oswald uppercase leading-none">{t.services.title}</h3>
        <div className="w-32 h-2 bg-rio-blue mx-auto mt-8"></div>
      </div>
      <div className="grid md:grid-cols-3 gap-10">
        {services.map((s, idx) => (
          <ServiceCard key={idx} {...s} btnText={t.services.contact_btn} />
        ))}
      </div>
    </div>
  );
};

export default Services;
