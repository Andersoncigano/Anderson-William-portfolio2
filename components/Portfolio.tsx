import React from 'react';
import { ExternalLink } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="section-portfolio" className="py-20 px-6 bg-brandBlack text-brandWhite scroll-mt-28">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-14 border-b border-white/20 pb-5">
          <h3 className="text-xl font-bold uppercase tracking-tighter">
            Trabalhos
          </h3>
          <a 
            href="https://www.behance.net/" 
            target="_blank" 
            rel="noreferrer"
            className="hidden md:flex items-center gap-1.5 text-[9px] uppercase tracking-widest hover:text-gray-400 transition-colors"
          >
            Ver Behance <ExternalLink size={12} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PORTFOLIO_ITEMS.map((item) => {
            const Content = () => (
              <>
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="text-[8px] text-gray-300 uppercase tracking-widest mb-1.5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {item.category}
                  </span>
                  <h4 className="text-sm font-bold uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    {item.title}
                  </h4>
                </div>
              </>
            );

            // Renderiza como Link (a) se houver link, ou div se não houver
            if (item.link) {
              return (
                <a 
                  key={item.id} 
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative aspect-square overflow-hidden bg-gray-900 cursor-pointer block"
                >
                  <Content />
                </a>
              );
            }

            return (
              <div key={item.id} className="group relative aspect-square overflow-hidden bg-gray-900 cursor-pointer">
                <Content />
              </div>
            );
          })}
        </div>
        
        <div className="mt-10 text-center md:hidden">
           <a 
            href="https://www.behance.net/" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[9px] uppercase tracking-widest border border-white px-5 py-2.5 hover:bg-white hover:text-black transition-colors"
          >
            Ver Behance Completo <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;