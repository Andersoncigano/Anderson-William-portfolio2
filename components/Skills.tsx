import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="section-skills" className="py-20 px-6 bg-brandWhite text-brandBlack scroll-mt-28">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-xl font-bold uppercase tracking-tighter mb-14 bg-black text-white px-5 py-1.5 inline-block border-2 border-black transition-all duration-300 hover:bg-white hover:text-black hover:tracking-widest cursor-default">
          Conhecimentos
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {SKILLS.map((cat, index) => (
            <div 
              key={index} 
              className="group flex flex-col h-full p-5 -mx-5 rounded-2xl transition-all duration-500 hover:bg-black hover:shadow-2xl cursor-default"
            >
              <h4 className="text-sm font-extrabold uppercase mb-5 tracking-wide px-3 py-1.5 self-start transition-all duration-500 group-hover:text-white group-hover:bg-white/10 rounded-md">
                {cat.title}
              </h4>
              <ul className="space-y-3">
                {cat.skills.map((skill, i) => (
                  <li 
                    key={i} 
                    className="text-xs border-b border-gray-300 pb-1.5 last:border-0 transition-colors duration-500 group-hover:text-gray-300 group-hover:border-gray-700"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;