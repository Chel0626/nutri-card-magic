import PhoneMockup from './PhoneMockup';
import { Leaf, Laptop } from 'lucide-react';
import site2 from '@/assets/site-2.jpg';

const Card3 = () => {
  return (
    <div 
      className="w-[1080px] h-[1350px] bg-white flex items-center justify-between px-16 py-20"
      style={{ aspectRatio: '1080/1350' }}
    >
      {/* Left content */}
      <div className="flex flex-col justify-center space-y-12 max-w-[700px]">
        {/* Title with leaf icon */}
        <div className="flex items-center gap-4 mb-8">
          <Leaf className="w-12 h-12 text-nutri-dark" />
          <h1 className="font-heading text-nutri-dark text-5xl font-bold">
            Benefícios
          </h1>
        </div>
        
        {/* Benefits */}
        <div className="space-y-8">
          <div className="flex items-start gap-6">
            <Leaf className="w-8 h-8 text-nutri-dark mt-2" />
            <p className="font-body text-nutri-dark text-2xl leading-relaxed">
              <span className="font-script text-3xl text-nutri-gold">Prático, rápido</span> e pensado para facilitar sua vida!
            </p>
          </div>
          
          <div className="flex items-start gap-6">
            <Laptop className="w-8 h-8 text-nutri-dark mt-2" />
            <p className="font-body text-nutri-dark text-2xl leading-relaxed">
              <span className="font-heading font-bold">Entre agora</span> e garanta o seu horário.
            </p>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="bg-gradient-gold rounded-2xl p-8 shadow-card">
          <p className="font-heading text-nutri-dark text-xl font-semibold text-center">
            Agende sua consulta em poucos cliques!
          </p>
        </div>
      </div>
      
      {/* Right - Phone mockup */}
      <div className="flex items-center justify-center">
        <PhoneMockup 
          image={site2}
          alt="Sobre a nutricionista"
        />
      </div>
    </div>
  );
};

export default Card3;