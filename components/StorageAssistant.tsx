
import React, { useState, useRef, useEffect } from 'react';
import { getStorageAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const StorageAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hi! I\'m your Rio Bonito Storage Advisor. Need help figuring out what size spot you need for your boat or RV? Just ask!' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const advice = await getStorageAdvice(input);
    const modelMsg: ChatMessage = { role: 'model', text: advice };
    setMessages(prev => [...prev, modelMsg]);
    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col h-[450px] md:h-[550px]">
      <div className="bg-rio-blue p-4 flex items-center gap-3">
        <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
        <span className="text-white font-bold uppercase tracking-widest text-xs md:text-sm">Advisor Online</span>
      </div>

      <div ref={scrollRef} className="flex-grow p-4 md:p-6 overflow-y-auto space-y-4 bg-slate-50">
        {messages.map((m, idx) => (
          <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] md:max-w-[80%] p-3 md:p-4 rounded-2xl shadow-sm ${
              m.role === 'user' 
                ? 'bg-rio-orange text-white rounded-tr-none' 
                : 'bg-white text-slate-800 border border-slate-100 rounded-tl-none'
            }`}>
              <div className="whitespace-pre-wrap leading-relaxed text-xs md:text-sm">
                {m.text}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white p-3 md:p-4 rounded-2xl shadow-sm border border-slate-100 rounded-tl-none italic text-slate-400 text-xs md:text-sm">
              Calculating space requirements...
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-3 md:p-4 border-t bg-white flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g. 25ft Boston Whaler?"
          className="flex-grow px-3 md:px-4 py-2.5 md:py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rio-blue text-xs md:text-sm"
        />
        <button 
          disabled={isLoading}
          className="bg-rio-blue text-white px-4 md:px-6 py-2.5 md:py-3 rounded-lg font-bold hover:bg-slate-800 transition-colors disabled:opacity-50 text-xs md:text-sm"
        >
          Ask
        </button>
      </form>
    </div>
  );
};

export default StorageAssistant;
