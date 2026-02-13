
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import LiveSupport from './components/LiveSupport';
import { useLanguage } from './contexts/LanguageContext';

const App: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col font-montserrat bg-white overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        
        <section id="services" className="py-24 bg-slate-50">
          <Services />
        </section>

        <section id="ai-assistant" className="py-24 bg-[#F8F9FA] relative">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-6xl md:text-7xl font-bold text-rio-blue mb-6 uppercase font-oswald tracking-tight leading-none">
                {t.support.section_title}
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
                {t.support.section_subtitle}
              </p>
            </div>
            <LiveSupport />
          </div>
        </section>

        <section id="about" className="py-24 bg-slate-50">
          <About />
        </section>

        <section id="contact" className="py-24 bg-rio-blue text-white relative">
          <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
             <div className="text-[250px] font-black font-oswald absolute -bottom-20 -left-20 leading-none">RIO</div>
          </div>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
