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
    const iconClass = "w-5 h-5";
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
              className={`group relative flex flex-col h-full p-6 -mx-6 rounded-2xl transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}
                hover:bg-white hover:shadow-xl hover:-translate-y-2
              `}
              style={{ transitionDelay: `${index * 150}ms` }} // Delay sequencial (Stagger)
            >
              {/* Micro-interação: Linha de destaque superior que expande no hover do CARD */}
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              {/* Título do Serviço - EFEITO WIPE PROGRESSIVO 
                  Gatilho: Hover exclusivo sobre o título (group/title)
              */}
              <h4 className="group/title relative text-sm font-extrabold uppercase mb-4 tracking-wide px-3 py-2 self-start border-l-4 border-black bg-gray-100 w-full overflow-hidden cursor-default transition-all duration-300">
                {/* Camada de fundo preto que desliza da esquerda para a direita */}
                <span className="absolute inset-0 bg-black transform -translate-x-full transition-transform duration-500 ease-out group-hover/title:translate-x-0 origin-left"></span>
                
                {/* Texto com transição de cor e ícone */}
                <span className="relative z-10 transition-colors duration-500 group-hover/title:text-white flex items-center gap-3">
                  {getServiceIcon(service.title)}
                  {service.title}
                </span>
              </h4>

              {/* Conteúdo Interno */}
              <div className="flex flex-col gap-4 px-1">
                <p className="text-xs text-gray-600 leading-relaxed text-justify transition-colors duration-300 group-hover:text-gray-800">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mt-2">
                  {service.tags.map((tag, i) => (
                    <li 
                      key={i} 
                      className="text-[10px] uppercase font-semibold text-gray-400 border-b border-gray-200 pb-1 last:border-0 block transition-all duration-300 group-hover:border-gray-300 group-hover:text-gray-500 hover:text-black hover:font-black cursor-default"
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