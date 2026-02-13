
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div id="about" className="container mx-auto px-4 scroll-mt-24 py-24">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* LADO IZQUIERDO: Composición de imagen idéntica a la referencia */}
        <div className="lg:w-1/2 relative">
          {/* Fondo Crema (Card Frame) desplazado a la derecha y abajo */}
          <div className="absolute top-8 left-8 w-full h-full bg-[#F5EFE6] -z-10"></div>
          
          {/* Contenedor de la Imagen Principal */}
          <div className="relative z-10 shadow-xl overflow-visible">
            <img 
              src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=1200&auto=format&fit=crop" 
              alt="Instalación Rio Bonito" 
              className="w-full object-cover h-[350px] md:h-[450px]"
              loading="lazy"
            />
            
            {/* Cuadro Azul de Liderazgo superpuesto en la esquina inferior derecha */}
            <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-[#003B5C] text-white p-6 md:p-10 min-w-[200px] md:min-w-[260px] shadow-2xl">
              <div className="flex flex-col items-center text-center">
                <span className="text-6xl md:text-7xl font-bold font-oswald leading-none mb-1">15+</span>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.1em] opacity-90">
                  {t.about.experience}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* LADO DERECHO: Contenido formateado exactamente como la imagen */}
        <div className="lg:w-1/2 pt-12 lg:pt-0">
          {/* Badge Naranja */}
          <span className="text-rio-orange font-bold uppercase tracking-[0.2em] text-[13px] block mb-4">
            {t.about.badge}
          </span>
          
          {/* Título Principal Azul */}
          <h3 className="text-5xl md:text-6xl font-bold text-[#003B5C] mb-8 font-oswald uppercase leading-none tracking-tight">
            {t.about.title}
          </h3>
          
          {/* Descripción en Itálica con Comillas */}
          <p className="text-slate-500 italic mb-10 text-xl leading-relaxed font-medium">
            {t.about.description}
          </p>
          
          {/* Lista de Características con Checks Verdes circulares */}
          <div className="flex flex-col gap-5 mb-12">
            {t.about.features.map((feature: string, i: number) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-6 h-6 bg-[#166534] rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-bold text-slate-800 text-[15px]">
                  {feature}
                </span>
              </div>
            ))}
          </div>
          
          {/* Botón Saber Más - Ahora en Naranja */}
          <a href="#contact" className="inline-block bg-rio-orange text-white px-10 py-4 font-bold transition-all uppercase tracking-[0.2em] shadow-lg hover:bg-orange-600 active:scale-95 text-[13px]">
            {t.about.btn}
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
