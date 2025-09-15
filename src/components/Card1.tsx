import PhoneMockup from './PhoneMockup';
import { Sparkles } from 'lucide-react';
import site1 from '@/assets/site-1.jpg';

const Card1 = () => {
  return (
    <div 
      className="w-[1080px] h-[1350px] bg-gradient-nutri flex items-center justify-between px-16 py-20"
      style={{ aspectRatio: '1080/1350' }}
    >
      {/* Left content */}
      <div className="flex flex-col justify-center space-y-8 max-w-[700px]">
        {/* Title with sparkles */}
        <div className="flex items-center gap-4 mb-6">
          <Sparkles className="w-12 h-12 text-nutri-gold" />
          <h1 className="font-heading text-white text-6xl font-bold leading-tight">
            Marcar consulta nunca foi tão simples!
          </h1>
          <Sparkles className="w-12 h-12 text-nutri-gold" />
        </div>
        
        {/* Subtitle */}
        <p className="font-body text-white text-2xl leading-relaxed">
          Agora você pode agendar sua consulta de nutrição direto no meu site, 
          sem precisar falar com secretária ou esperar resposta no WhatsApp.
        </p>
      </div>
      
      {/* Right - Phone mockup */}
      <div className="flex items-center justify-center">
        <PhoneMockup 
          image={site1}
          alt="Site da nutricionista Carolina Macedo"
        />
      </div>
    </div>
  );
};

export default Card1;