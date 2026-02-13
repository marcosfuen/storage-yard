
import React from 'react';

const Logo: React.FC<{ className?: string; showText?: boolean; inverted?: boolean }> = ({ className = "w-16 h-16", showText = true, inverted = false }) => {
  return (
    <a href="#home" className="flex items-center gap-4 group cursor-pointer">
      {/* Emblema Circular basado fielmente en la imagen del letrero */}
      <div className="relative flex-shrink-0">
        <svg 
          viewBox="0 0 100 100" 
          className={`${className} transition-transform group-hover:rotate-3 duration-300 drop-shadow-lg`}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Círculo de Fondo (Color Tan/Crema del letrero) */}
          <circle cx="50" cy="50" r="48" fill="#E5D3B3" stroke={inverted ? "#FFFFFF" : "#003B5C"} strokeWidth="1" />
          
          {/* El Sol (Naranja a la derecha) */}
          <circle cx="72" cy="35" r="10" fill="#D97706" />
          
          {/* Montaña Izquierda (Azul Oscuro) */}
          <path 
            d="M15 75L45 28L65 75H15Z" 
            fill="#003B5C" 
          />
          
          {/* Montaña Derecha (Verde Oscuro/Marrón) */}
          <path 
            d="M40 75L65 38L90 75H40Z" 
            fill="#166534" 
            fillOpacity="0.9"
          />
          
          {/* El Río (Base del círculo) */}
          <path 
            d="M10 75C30 70 40 85 60 80C80 75 90 85 95 80V90H10V75Z" 
            fill="#38BDF8" 
          />
          
          {/* Bordes del círculo para un acabado limpio */}
          <circle cx="50" cy="50" r="48" fill="none" stroke="#003B5C" strokeWidth="2" strokeOpacity="0.2" />
        </svg>
      </div>
      
      {showText && (
        <div className="flex flex-col leading-none">
          <div className="flex items-baseline gap-1">
            <span className={`font-oswald font-black text-3xl md:text-4xl tracking-tighter transition-colors duration-500 ${inverted ? 'text-white' : 'text-rio-blue'}`}>
              RIO
            </span>
            <span className="font-oswald font-black text-3xl md:text-4xl tracking-tighter text-rio-orange">
              BONITO
            </span>
          </div>
          <div className="flex flex-col -mt-1">
            <span className={`text-[9px] md:text-[11px] font-black tracking-[0.15em] uppercase transition-colors duration-500 ${inverted ? 'text-rio-tan' : 'text-rio-blue'}`}>
              BOAT • RV • TRUCKS
            </span>
            <div className="h-[2px] w-full bg-rio-orange mt-0.5 shadow-sm"></div>
            <span className={`text-[10px] md:text-[12px] font-bold tracking-[0.3em] uppercase transition-colors duration-500 ${inverted ? 'text-white/80' : 'text-rio-green'}`}>
              Storage Yard
            </span>
          </div>
        </div>
      )}
    </a>
  );
};

export default Logo;
