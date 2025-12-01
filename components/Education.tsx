import React from 'react';
import { EDUCATION, COURSES } from '../constants';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="section-education" className="py-24 px-6 bg-brandBlack text-brandWhite border-t border-white/5 scroll-mt-28 relative overflow-hidden">
      
      {/* Background Decorativo Sutil */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none mix-blend-overlay"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[100px] pointer-events-none mix-blend-overlay"></div>

      <div className="max-w-6xl mx-auto">
        
        {/* Header da Seção - ALINHADO À ESQUERDA */}
        <div className="mb-24 text-left">
             <h3 className="text-xl font-bold uppercase tracking-tighter mb-6 bg-white text-black px-6 py-2 inline-block border-2 border-white transition-all duration-300 hover:bg-black hover:text-white hover:tracking-widest cursor-default">
            Formação & Conhecimento
          </h3>
        </div>

        <div className="flex flex-col gap-24">
          
          {/* Seção 1: Timeline Acadêmica (Horizontal Centralizada) */}
          <div className="relative">
            <div className="flex items-center justify-center gap-3 mb-12 text-white/90">
                <GraduationCap className="w-5 h-5" />
                <h4 className="text-lg font-bold uppercase tracking-widest">Acadêmico</h4>
            </div>

            {/* Container da Timeline Horizontal */}
            <div className="relative max-w-3xl mx-auto">
              {/* Linha Horizontal (Desktop) */}
              <div className="hidden md:block absolute top-[15px] left-10 right-10 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

              <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20 relative">
                {EDUCATION.map((edu, index) => (
                  <div key={index} className="flex flex-col items-center text-center group w-full md:w-1/3 relative">
                    
                    {/* Ponto da Timeline */}
                    <div className="w-8 h-8 rounded-full bg-brandBlack border-2 border-white/20 group-hover:border-white group-hover:bg-white transition-all duration-500 z-10 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)] mb-6">
                        <div className="w-2 h-2 rounded-full bg-white group-hover:bg-black transition-colors duration-500"></div>
                    </div>
                    
                    {/* Conteúdo */}
                    <div className="transition-all duration-500 group-hover:-translate-y-2">
                      <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold bg-white/5 border border-white/10 text-gray-300 mb-3 group-hover:bg-white group-hover:text-black transition-colors">
                        {edu.year}
                      </span>
                      <h5 className="text-xl font-bold text-white mb-1.5 leading-tight group-hover:text-gray-200">
                        {edu.course}
                      </h5>
                      <p className="text-sm text-gray-500 uppercase tracking-widest group-hover:text-gray-400">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Separator visual discreto */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

          {/* Seção 2: Grid de Cursos (Centralizado) */}
          <div>
             <div className="flex items-center justify-center gap-3 mb-12 text-white/90">
                <Award className="w-5 h-5" />
                <h4 className="text-lg font-bold uppercase tracking-widest">Especializações</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">
              {COURSES.map((course, index) => (
                <div 
                  key={index} 
                  className="group relative bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-black/40 rounded-lg text-gray-400 group-hover:text-white transition-colors">
                        <Award size={18} />
                    </div>
                    <span className="text-[11px] font-medium text-gray-500 flex items-center gap-1.5 group-hover:text-gray-300 bg-black/20 px-2 py-1 rounded">
                      <Calendar size={12} />
                      {course.year}
                    </span>
                  </div>
                  
                  <h5 className="text-base font-bold text-gray-200 mb-1.5 leading-snug group-hover:text-white">
                    {course.name}
                  </h5>
                  
                  {course.provider && (
                    <p className="text-[11px] text-gray-500 mt-3 pt-3 border-t border-white/5 group-hover:border-white/10 group-hover:text-gray-400 transition-colors uppercase tracking-wide">
                      {course.provider}
                    </p>
                  )}
                </div>
              ))}
              
              {/* Card "Ver Mais" */}
              <a 
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer" 
                className="group flex flex-col items-center justify-center p-6 rounded-xl border border-dashed border-white/10 hover:border-white/40 hover:bg-white/5 transition-all duration-300 cursor-pointer text-center h-full min-h-[140px]"
              >
                <span className="text-sm font-semibold text-gray-400 group-hover:text-white mb-2 transition-colors">Ver todos certificados</span>
                <span className="text-[10px] text-gray-600 group-hover:text-gray-400 uppercase tracking-widest transition-colors">no LinkedIn</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;