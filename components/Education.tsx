import React from 'react';
import { EDUCATION, COURSES } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="section-education" className="py-20 px-6 bg-brandBlack text-brandWhite border-t border-white/10 scroll-mt-28">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">
        
        {/* Formal Education */}
        <div>
          <h3 className="text-base font-bold uppercase tracking-widest mb-8 text-gray-400">
            Educação
          </h3>
          <div className="space-y-5">
            {EDUCATION.map((edu, index) => (
              <div 
                key={index} 
                className="group relative border-l-2 border-white/20 pl-5 py-3 rounded-r-xl transition-all duration-300 hover:border-white hover:bg-white/5 hover:scale-[1.02] hover:shadow-xl hover:shadow-black/50 cursor-default"
              >
                <div className="text-[9px] text-gray-500 mb-0.5 group-hover:text-gray-300 transition-colors">
                  {edu.year}
                </div>
                <h4 className="text-sm font-bold uppercase mb-0.5 text-gray-200 group-hover:text-white transition-colors">
                  {edu.course}
                </h4>
                <div className="text-[10px] text-gray-400 group-hover:text-gray-200 transition-colors">
                  {edu.institution}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Courses & Extras */}
        <div>
          <h3 className="text-base font-bold uppercase tracking-widest mb-8 text-gray-400">
            Complementares
          </h3>
          <ul className="space-y-3">
            {COURSES.map((course, index) => (
              <li 
                key={index} 
                className="group flex flex-col p-3 -ml-3 rounded-xl transition-all duration-300 hover:bg-white/5 hover:scale-[1.02] hover:shadow-xl hover:shadow-black/50 cursor-default"
              >
                <span className="font-semibold text-xs text-gray-300 group-hover:text-white transition-colors">
                  {course.name}
                </span>
                <span className="text-[9px] text-gray-500 group-hover:text-gray-400 transition-colors">
                  {course.provider ? `${course.provider} • ` : ''}{course.year}
                </span>
              </li>
            ))}
            <li className="text-[9px] text-gray-600 italic mt-5 pt-3 border-t border-gray-800 ml-3 md:ml-0">
              Demais cursos e aperfeiçoamentos no LinkedIn.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Education;