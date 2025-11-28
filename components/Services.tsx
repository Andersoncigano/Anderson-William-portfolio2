import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="section-servicos" className="py-20 px-6 bg-brandWhite text-brandBlack scroll-mt-28">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <h3 className="text-xl font-bold uppercase tracking-tighter mb-14 bg-black text-white px-5 py-1.5 inline-block border-2 border-black transition-all duration-300 hover:bg-white hover:text-black hover:tracking-widest cursor-default">
          Serviços
        </h3>

        {/* Grid de 2 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="group flex flex-col h-full p-6 -mx-6 rounded-2xl transition-all duration-500 hover:bg-black hover:shadow-2xl cursor-default"
            >
              
              {/* Título do Serviço com adaptação de cor no hover */}
              <h4 className="text-sm font-extrabold uppercase mb-4 tracking-wide px-3 py-1.5 self-start border-l-4 border-black bg-gray-100 w-full transition-all duration-500 group-hover:border-white group-hover:bg-white/10 group-hover:text-white">
                {service.title}
              </h4>

              {/* Descrição e Tags */}
              <div className="flex flex-col gap-4 px-1">
                <p className="text-xs text-gray-600 leading-relaxed text-justify transition-colors duration-500 group-hover:text-gray-300">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mt-2">
                  {service.tags.map((tag, i) => (
                    <li 
                      key={i} 
                      className="text-[10px] uppercase font-semibold text-gray-400 border-b border-gray-200 pb-1 last:border-0 flex items-center gap-2 transition-colors duration-500 group-hover:border-white/20 group-hover:text-gray-400"
                    >
                      {/* O ponto (bullet) muda de preto para branco no hover */}
                      <span className="w-1 h-1 bg-black rounded-full transition-colors duration-500 group-hover:bg-white"></span>
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