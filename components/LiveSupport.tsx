
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LiveSupport: React.FC = () => {
  const { t } = useLanguage();
  const [input, setInput] = useState('');
  
  const WHATSAPP_NUMBER = "+12816162439";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const message = encodeURIComponent(input);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    setInput('');
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-[2rem] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden flex flex-col">
      {/* Header - Navy Blue */}
      <div className="bg-rio-blue px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="relative">
            <div className="w-14 h-14 bg-rio-tan rounded-full flex items-center justify-center text-rio-blue font-black text-xl border-2 border-white/20 shadow-inner">
              RB
            </div>
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#22c55e] border-2 border-rio-blue rounded-full shadow-sm"></div>
          </div>
          <div>
            <h3 className="text-white font-bold font-oswald uppercase tracking-tight text-xl leading-none">
              {t.support.card_header_title}
            </h3>
            <p className="text-slate-300 text-[13px] mt-1 font-medium opacity-80">
              {t.support.card_header_status}
            </p>
          </div>
        </div>
        
        <div className="hidden sm:block">
          <span className="px-4 py-1.5 rounded-full border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest bg-white/5 backdrop-blur-sm">
            {t.support.card_badge}
          </span>
        </div>
      </div>

      {/* Chat Area */}
      <div className="p-8 md:p-12 bg-[#F8F9FA] min-h-[280px] flex flex-col justify-start">
        <div className="max-w-[80%] bg-white p-6 rounded-2xl rounded-tl-none border border-slate-100 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] relative self-start">
          <div className="text-slate-700 leading-relaxed text-[15px] whitespace-pre-wrap font-medium">
            {t.support.welcome_bubble.split('**').map((part: string, i: number) => 
              i % 2 === 1 ? <strong key={i} className="text-rio-blue font-bold">{part}</strong> : part
            )}
          </div>
        </div>
      </div>

      {/* Input & Button Area - Replicando armonía de la imagen */}
      <div className="px-8 pb-10 pt-2 bg-white flex flex-col items-center">
        <form onSubmit={handleSubmit} className="w-full flex flex-col sm:flex-row gap-3 items-stretch">
          <div className="flex-grow">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.support.placeholder}
              className="w-full h-14 px-6 bg-[#F2F7FB] border-[2.5px] border-rio-orange rounded-2xl focus:outline-none focus:ring-4 focus:ring-rio-orange/5 text-slate-700 font-semibold placeholder:text-slate-400 placeholder:font-medium transition-all"
            />
          </div>
          <button 
            type="submit"
            disabled={!input.trim()}
            className="h-14 bg-[#22c55e] hover:bg-[#1eb354] text-white px-6 rounded-2xl font-bold transition-all shadow-[0_12px_24px_-8px_rgba(34,197,94,0.5)] flex items-center justify-center gap-2.5 active:scale-[0.98] disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed group"
          >
            {/* WhatsApp Styled Icon */}
            <div className="w-7 h-7 flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-full h-full fill-white drop-shadow-sm group-hover:scale-110 transition-transform">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.438 5.176l-1.4 5.093 5.228-1.373A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.95 7.95 0 01-4.226-1.196l-.303-.18-3.138.824.839-3.053-.197-.314A7.955 7.955 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
              </svg>
            </div>
            <span className="text-[17px] font-bold tracking-tight whitespace-nowrap">{t.support.btn_text}</span>
          </button>
        </form>
        
        <div className="mt-8 text-center">
          <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.25em] opacity-70">
            {t.support.footer_text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LiveSupport;
