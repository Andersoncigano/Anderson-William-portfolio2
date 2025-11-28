import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Experiências', href: '#section-experience' },
  { label: 'Educação', href: '#section-education' },
  { label: 'Conhecimento', href: '#section-skills' },
  { label: 'Serviços', href: '#section-services' },
  { label: 'Portfólio', href: '#section-portfolio' },
  { label: 'Contato', href: '#section-contact' },
];

// Componente de Transformação de Identidade: AW -> Anderson William
const NameReveal = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a 
      href="#"
      onClick={handleLogoClick}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className="group relative flex items-center font-black text-lg md:text-xl tracking-tighter select-none cursor-pointer outline-none text-black"
      aria-label="Anderson William - Voltar ao topo"
    >
      {/* Container visual para feedback de hover */}
      <span className={`absolute -inset-3 bg-gray-100 rounded-lg -z-10 transition-all duration-500 ${isExpanded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}></span>

      {/* A */}
      <span className="relative z-10 transition-transform duration-500">A</span>
      
      {/* nderson + espaço */}
      <div 
        className={`grid transition-[grid-template-columns] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isExpanded ? 'grid-cols-[1fr]' : 'grid-cols-[0fr]'}`}
      >
        <span className="overflow-hidden whitespace-nowrap opacity-0 transition-opacity duration-500 delay-100 data-[show=true]:opacity-100" data-show={isExpanded}>
          nderson&nbsp;
        </span>
      </div>

      {/* W */}
      <span className="relative z-10 transition-transform duration-500">W</span>

      {/* illiam */}
      <div 
        className={`grid transition-[grid-template-columns] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isExpanded ? 'grid-cols-[1fr]' : 'grid-cols-[0fr]'}`}
      >
        <span className="overflow-hidden whitespace-nowrap opacity-0 transition-opacity duration-500 delay-100 data-[show=true]:opacity-100" data-show={isExpanded}>
          illiam
        </span>
      </div>

      {/* Ponto Vermelho (Desaparece ao expandir) */}
      <span 
        className={`text-red-600 text-2xl leading-none transition-all duration-500 transform origin-bottom ${isExpanded ? 'opacity-0 scale-0 w-0' : 'opacity-100 scale-100 w-auto'}`}
      >
        .
      </span>
    </a>
  );
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to add shadow/background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault(); // Impede a navegação padrão que estava causando o bloqueio
    setIsOpen(false);
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo / Brand com Animação de Hover */}
        <NameReveal />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-[9px] uppercase font-bold tracking-widest text-gray-600 px-3 py-2 rounded-md transition-all duration-300 hover:bg-black hover:text-white cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Overlay */}
        <div 
          className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
            isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
          }`}
        >
          <nav className="flex flex-col gap-6 text-center">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-lg uppercase font-black tracking-widest hover:text-gray-500 transition-colors cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;