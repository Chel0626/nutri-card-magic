import PhoneMockup from './PhoneMockup';
import { ArrowRight, Calendar } from 'lucide-react';
import site7 from '@/assets/site-7.jpg';

const Card2 = () => {
  return (
    <div 
      className="w-[1080px] h-[1350px] bg-gradient-to-br from-nutri-light to-white flex items-center justify-between px-16 py-20"
      style={{ aspectRatio: '1080/1350' }}
    >
      {/* Left content */}
      <div className="flex flex-col justify-center space-y-12 max-w-[700px]">
        {/* Title */}
        <h1 className="font-heading text-nutri-dark text-5xl font-bold mb-8">
          Passo a passo
        </h1>
        
        {/* Steps */}
        <div className="space-y-8">
          <div className="flex items-center gap-6">
            <ArrowRight className="w-8 h-8 text-nutri-gold" />
            <p className="font-body text-nutri-dark text-2xl font-medium">
              Acesse: <span className="font-script text-3xl text-nutri-gold">www.carolinaminhanutri.com</span>
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <ArrowRight className="w-8 h-8 text-nutri-gold" />
            <p className="font-body text-nutri-dark text-2xl font-medium">
              Escolha o melhor horário para você
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <ArrowRight className="w-8 h-8 text-nutri-gold" />
            <div className="flex items-center gap-4">
              <p className="font-body text-nutri-dark text-2xl font-medium">
                Confirme em segundos
              </p>
              <Calendar className="w-8 h-8 text-nutri-gold" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Right - Phone mockup */}
      <div className="flex items-center justify-center">
        <PhoneMockup 
          image={site7}
          alt="Calendário de agendamento"
        />
      </div>
    </div>
  );
};

export default Card2;