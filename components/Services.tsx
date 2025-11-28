import React from 'react';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="section-services" className="py-20 px-6 bg-brandBlack text-brandWhite scroll-mt-28 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-14">
            <h3 className="text-xl font-bold uppercase tracking-tighter mb-4 inline-block border-b-2 border-white pb-1">
            Serviços
            </h3>
            <p className="text-gray-400 text-sm max-w-xl">
                Soluções visuais e estratégicas personalizadas para elevar a percepção da sua marca no ambiente digital e impresso.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-white/5 p-6 md:p-8 border border-white/10 hover:border-white/50 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 flex flex-col h-full"
            >
              {/* Icone / Indicador visual */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight size={20} />
              </div>

              {/* Título */}
              <h4 className="text-lg md:text-xl font-black uppercase tracking-tight mb-4 group-hover:text-white transition-colors">
                {service.title}
              </h4>

              {/* Descrição */}
              <p className="text-xs md:text-sm text-gray-400 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors flex-grow">
                {service.description}
              </p>

              {/* Tags / Entregáveis */}
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10 group-hover:border-white/20 transition-colors">
                {service.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="text-[9px] uppercase font-bold tracking-wider bg-black/30 px-2 py-1 text-gray-400 group-hover:text-white group-hover:bg-black/50 transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;