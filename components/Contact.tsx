
import React from 'react';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="section-contact" className="py-20 px-6 bg-brandWhite text-brandBlack scroll-mt-28">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-xl font-bold uppercase tracking-tighter mb-10 bg-black text-white px-5 py-1.5 inline-block border-2 border-black transition-all duration-300 hover:bg-white hover:text-black hover:tracking-widest cursor-default">
          Vamos Conversar?
        </h3>
        <p className="text-sm text-gray-600 mb-10 max-w-2xl mx-auto">
          Estou disponível para novos projetos e colaborações.
        </p>

        <a 
          href={`mailto:${PERSONAL_INFO.email}`}
          className="inline-flex items-center gap-2 text-base md:text-lg font-bold transition-all duration-300 mb-14 hover:tracking-widest"
        >
          <Mail className="w-4 h-4 md:w-5 md:h-5" />
          {PERSONAL_INFO.email}
        </a>

        <div className="flex justify-center gap-6 md:gap-10">
          <SocialLink 
            href="#" 
            icon={<Linkedin size={24} />} 
            label="LinkedIn" 
            color="hover:text-[#0077b5]"
          />
          <SocialLink 
            href="#" 
            icon={<Phone size={24} />} 
            label="WhatsApp" 
            color="hover:text-[#25D366]"
          />
          <SocialLink 
            href="#" 
            icon={<Github size={24} />} 
            label="Github" 
            color="hover:text-black"
          />
          <SocialLink 
            href="https://behance.net" 
            icon={<span className="font-bold text-lg">Be</span>} 
            label="Behance" 
            color="hover:text-[#1769ff]"
          />
        </div>

        <div className="mt-20 text-[9px] text-gray-400 uppercase tracking-widest">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. Todos os direitos reservados.
        </div>
      </div>
    </section>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  color: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label, color }) => (
  <a 
    href={href}
    target="_blank"
    rel="noreferrer"
    className={`flex flex-col items-center gap-2 group transition-colors duration-300 ${color}`}
    aria-label={label}
  >
    <div className="p-3.5 rounded-full bg-gray-100 group-hover:bg-white group-hover:shadow-lg transition-all duration-300">
      {icon}
    </div>
    <span className="text-[8px] uppercase font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
      {label}
    </span>
  </a>
);

export default Contact;
