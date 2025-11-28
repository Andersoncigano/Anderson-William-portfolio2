import React, { useEffect, useRef, useState } from 'react';
import { SERVICES } from '../constants';
import { Fingerprint, TrendingUp, Film, Megaphone } from 'lucide-react';

const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Anima apenas uma vez ao entrar
        }
      },
      { threshold: 0.1 } // Aciona quando 10% da seção estiver visível
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getServiceIcon = (title: string) => {
    const iconClass = "w-6 h-6 transition-colors duration-500 group-hover:text-white";
    if (title.toLowerCase().includes("branding")) return <Fingerprint className={iconClass} />;
    if (title.toLowerCase().includes("social")) return <TrendingUp className={iconClass} />;
    if (title.toLowerCase().includes("motion")) return <Film className={iconClass} />;
    if (title.toLowerCase().includes("publicidade")) return <Megaphone className={iconClass} />;
    return null;
  };

  return (
    <section 
      id="section-services" 
      ref={sectionRef}
      className="py-20 px-6 bg-brandWhite text-brandBlack scroll-mt-28 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Header com animação de entrada */}
        <div className={`transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-xl font-bold uppercase tracking-tighter mb-14 bg-black text-white px-5 py-1.5 inline-block border-2 border-black transition-all duration-300 hover:bg-white hover:text-black hover:tracking-widest cursor-default">
            Serviços
          </h3>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className={`group relative flex flex-col h-full p-8 -mx-6 rounded-2xl transition-all duration-500 ease-out border border-transparent
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}
                hover:bg-black hover:shadow-2xl hover:-translate-y-2 cursor-default
              `}
              style={{ transitionDelay: `${index * 150}ms` }} // Delay sequencial (Stagger)
            >
              
              {/* Título do Serviço e Ícone */}
              <div className="flex flex-col gap-4 mb-4">
                 <div className="text-black group-hover:text-white transition-colors duration-500 self-start">
                    {getServiceIcon(service.title)}
                 </div>
                 <h4 className="text-base font-extrabold uppercase tracking-wide text-brandBlack transition-colors duration-500 group-hover:text-white">
                    {service.title}
                 </h4>
              </div>

              {/* Conteúdo Interno */}
              <div className="flex flex-col gap-6 flex-grow">
                <p className="text-xs text-gray-600 leading-relaxed text-justify transition-colors duration-500 group-hover:text-white">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mt-auto">
                  {service.tags.map((tag, i) => (
                    <li 
                      key={i} 
                      className="text-[10px] uppercase font-bold text-gray-400 border-b border-gray-200 pb-2 last:border-0 block transition-all duration-500 group-hover:border-white/20 group-hover:text-white"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
