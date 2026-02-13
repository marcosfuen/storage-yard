
import React, { useState } from 'react';
import { InquiryFormState } from '../types.ts';
import { useLanguage } from '../contexts/LanguageContext';

const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  
  const initialFormState: InquiryFormState = {
    name: '', email: '', phone: '', address: '', storageType: 'boat', totalSpaces: '1', vehicleDetails: ''
  };

  const [formData, setFormData] = useState<InquiryFormState>(initialFormState);

  const formatPhoneNumber = (value: string) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setFormData({ ...formData, phone: formattedPhoneNumber });
  };

  const handleNewInquiry = () => {
    setFormData(initialFormState);
    setIsSubmitted(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isFormIncomplete = Object.values(formData).some(value => 
      value === undefined || value === null || (typeof value === 'string' && value.trim() === '')
    );

    if (isFormIncomplete) {
      alert(t.contact.validation_all_fields || "Por favor, complete todos los campos obligatorios.");
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Por favor, ingrese un correo electrónico válido.");
      return;
    }

    setIsSending(true);

    try {
      const recipient = "pro.managementgroup@outlook.com";
      const subject = `Solicitud Rio Bonito: ${formData.name} - ${formData.storageType.toUpperCase()}`;
      
      // Cuerpo del mensaje formateado con el FROM explícito al inicio
      const bodyText = `DE: ${formData.email}\n` +
                       `PARA: ${recipient}\n` +
                       `ASUNTO: Solicitud de Almacenamiento\n` +
                       `================================\n\n` +
                       `DATOS DEL CLIENTE:\n` +
                       `------------------\n` +
                       `Nombre: ${formData.name}\n` +
                       `Email: ${formData.email}\n` +
                       `Teléfono: ${formData.phone}\n` +
                       `Dirección: ${formData.address}\n\n` +
                       `DETALLES DEL EQUIPO:\n` +
                       `--------------------\n` +
                       `Tipo: ${formData.storageType.toUpperCase()}\n` +
                       `Espacios: ${formData.totalSpaces}\n` +
                       `Vehículo/Placa: ${formData.vehicleDetails}\n\n` +
                       `Enviado desde el formulario de Rio Bonito Yard.`;

      // Construcción de la URL mailto incluyendo el parámetro 'from' solicitado
      // Nota: Muchos clientes de correo ignoran 'from' en mailto por seguridad, 
      // pero se incluye según requerimiento.
      const mailtoUrl = `mailto:${recipient}?from=${encodeURIComponent(formData.email)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
      
      await new Promise(resolve => setTimeout(resolve, 400));
      
      window.location.href = mailtoUrl;
      
      setIsSubmitted(true);
    } catch (err) {
      console.error("Error al abrir el cliente de correo:", err);
      setIsSubmitted(true); 
    } finally {
      setIsSending(false);
    }
  };

  const labelClasses = "block text-[10px] font-bold uppercase text-slate-400 tracking-[0.2em] mb-1 ml-0.5 font-montserrat";
  const inputBaseClasses = "w-full bg-transparent border-b border-slate-200 py-3 focus:border-rio-orange outline-none transition-colors text-slate-800 font-montserrat font-medium placeholder:text-slate-300 text-[15px]";
  const selectClasses = "w-full bg-transparent border-b border-slate-200 py-3 focus:border-rio-orange outline-none transition-colors text-slate-800 font-montserrat font-medium appearance-none cursor-pointer";

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        <div className="lg:w-5/12 pt-6">
          <div className="mb-14">
            <h2 className="text-6xl md:text-8xl font-bold mb-6 font-oswald uppercase tracking-tighter leading-none text-white">
              {t.contact.title.split(' ')[0]} <br/>
              <span className="text-rio-orange">{t.contact.title.split(' ').slice(1).join(' ')}</span>
            </h2>
            <p className="text-blue-100/60 text-lg leading-relaxed font-montserrat max-w-sm">
              {t.contact.description}
            </p>
          </div>

          <div className="space-y-10">
            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 bg-rio-orange text-white rounded-sm flex items-center justify-center flex-shrink-0 shadow-lg transition-transform group-hover:scale-105">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-rio-tan/70 mb-1 font-montserrat">Visit Our Yard</span>
                <p className="text-xl font-bold text-white leading-tight font-montserrat">123 Mountain Vista Road<br/>Bonito Valley, CA 90210</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 bg-rio-orange text-white rounded-sm flex items-center justify-center flex-shrink-0 shadow-lg transition-transform group-hover:scale-105">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-rio-tan/70 mb-1 font-montserrat">Direct Line</span>
                <p className="text-3xl font-black text-white font-montserrat tracking-tight">(555) 746-2664</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-7/12 w-full">
          <div className="bg-white p-10 md:p-16 rounded-sm shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
            {isSubmitted ? (
              <div className="py-20 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-rio-green text-white rounded-sm flex items-center justify-center mx-auto mb-8 shadow-xl">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-3xl font-bold text-rio-blue font-oswald uppercase mb-4 tracking-tight">{t.contact.success_title}</h3>
                <p className="text-slate-400 font-montserrat font-medium mb-12 text-lg">{t.contact.success_desc}</p>
                <button 
                  onClick={handleNewInquiry}
                  className="bg-rio-blue text-white px-12 py-4 rounded-sm font-bold uppercase tracking-widest text-[10px] hover:bg-slate-800 transition-all font-montserrat"
                >
                  {t.contact.new_inquiry}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <header className="mb-12">
                  <h3 className="text-4xl font-bold font-oswald uppercase text-rio-blue tracking-tight mb-2">
                    {t.contact.form_title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <div className="h-[2px] w-8 bg-rio-orange"></div>
                    <p className="text-slate-300 text-[10px] font-bold tracking-[0.3em] uppercase font-montserrat">{t.contact.form_subtitle}</p>
                  </div>
                </header>
                
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                  <div className="space-y-1">
                    <label className={labelClasses}>{t.contact.label_name}</label>
                    <input required type="text" className={inputBaseClasses} value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} disabled={isSending} placeholder="Nombre Completo"/>
                  </div>

                  <div className="space-y-1">
                    <label className={labelClasses}>{t.contact.label_phone}</label>
                    <input required type="tel" className={inputBaseClasses} value={formData.phone} onChange={handlePhoneChange} disabled={isSending} placeholder="(XXX) XXX-XXXX"/>
                  </div>

                  <div className="md:col-span-2 space-y-1">
                    <label className={labelClasses}>{t.contact.label_address}</label>
                    <input required type="text" className={inputBaseClasses} value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} disabled={isSending} placeholder="Dirección de residencia"/>
                  </div>

                  <div className="space-y-1">
                    <label className={labelClasses}>{t.contact.label_email}</label>
                    <input required type="email" className={inputBaseClasses} value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} disabled={isSending} placeholder="correo@ejemplo.com"/>
                  </div>

                  <div className="space-y-1">
                    <label className={labelClasses}>{t.contact.label_category}</label>
                    <div className="relative">
                      <select required className={selectClasses} value={formData.storageType} onChange={e => setFormData({...formData, storageType: e.target.value as any})} disabled={isSending}>
                        <option value="">SELECCIONE OPCIÓN</option>
                        <option value="boat">BOTE / YATE</option>
                        <option value="rv">RV / CAMPER</option>
                        <option value="truck">CAMIÓN / TRUCK</option>
                        <option value="other">OTRO EQUIPO</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none text-slate-300">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className={labelClasses}>{t.contact.label_spaces}</label>
                    <input required type="number" min="1" className={inputBaseClasses} value={formData.totalSpaces} onChange={e => setFormData({...formData, totalSpaces: e.target.value})} disabled={isSending} placeholder="Cant. espacios"/>
                  </div>

                  <div className="space-y-1 md:col-span-2">
                    <label className={labelClasses}>{t.contact.label_details}</label>
                    <input required type="text" className={inputBaseClasses} value={formData.vehicleDetails} onChange={e => setFormData({...formData, vehicleDetails: e.target.value})} disabled={isSending} placeholder="Marca / Modelo / Placa"/>
                  </div>
                </div>

                <div className="pt-10">
                  <button 
                    type="submit" 
                    disabled={isSending}
                    className="w-full bg-rio-orange hover:bg-orange-600 text-white font-bold py-5 rounded-sm transition-all uppercase tracking-[0.4em] text-xs shadow-xl active:scale-[0.98] disabled:opacity-40 flex items-center justify-center gap-4 group font-montserrat"
                  >
                    {isSending ? (
                      <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      <>
                        <span>{t.contact.btn_send}</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
