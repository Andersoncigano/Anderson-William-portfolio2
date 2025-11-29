import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';

// --- ÁREA DE EDIÇÃO DA FOTO ---
// Link direto fornecido pelo usuário
const USER_IMAGE_URL = "https://i.ibb.co/zC8jtbr/sombra.png"; 
// ------------------------------

const Hero: React.FC = () => {
  // Lógica de imagem: 
  // 1. Usa o link que você colocar em USER_IMAGE_URL
  // 2. Se estiver vazio ou der erro, usa a imagem de exemplo do Unsplash
  const fallbackImage = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1287&auto=format&fit=crop";
  
  // Decide qual imagem iniciar
  const initialImage = USER_IMAGE_URL || "/profile.png";

  const [imgSrc, setImgSrc] = useState(initialImage);

  const handleImageError = () => {
    if (imgSrc !== fallbackImage) {
      setImgSrc(fallbackImage);
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[600px] flex flex-col md:flex-row bg-gray-50 overflow-hidden">
      {/* Image Column (Left on Desktop, Top on Mobile) */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full relative bg-gray-50 flex flex-col justify-end items-center">
        <img 
          src={imgSrc} 
          onError={handleImageError}
          alt={PERSONAL_INFO.name} 
          className="w-full h-[90%] object-contain object-bottom grayscale transition-opacity duration-500"
        />
        {/* Subtle gradient overlay at bottom to blend cutout if needed */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50/20 to-transparent mix-blend-overlay pointer-events-none"></div>
      </div>

      {/* Content Column (Right on Desktop, Bottom on Mobile) */}
      {/* Alteração: Removido padding esquerdo no desktop (md:pl-0 lg:pl-0) para puxar o texto mais para a esquerda */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-start p-8 md:pl-0 lg:pl-0 bg-gray-50 relative">
        
        {/* Main Content Container - Aligned Left within the Right Column */}
        {/* Adicionado md:-ml-4 para forçar ainda mais para a esquerda se necessário */}
        <div className="w-full max-w-4xl relative text-left z-10 md:-ml-4 lg:-ml-8">
          
          {/* Name - Font Size Reduced Slightly */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-brandBlack font-black leading-[0.85] mb-8 -ml-1 md:-ml-2">
            {PERSONAL_INFO.name.split(' ').map((word, i) => (
              <span key={i} className="block">{word}</span>
            ))}
          </h1>

          {/* Separator Line */}
          <div className="w-24 md:w-32 h-2 bg-brandBlack mb-8"></div>

          {/* Role Title */}
          <h2 className="text-sm md:text-xl font-bold text-gray-500 uppercase tracking-[0.2em] md:tracking-[0.3em] mb-6 pl-1 leading-relaxed">
            Diretor de Arte <br className="hidden md:block" />
            e Inteligência Artificial
          </h2>

          {/* Objective Paragraph Removed as requested */}
        </div>

        {/* Minimalist Background decoration elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full opacity-60 blur-3xl -z-0"></div>
      </div>
    </section>
  );
};

export default Hero;