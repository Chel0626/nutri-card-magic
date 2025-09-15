import PhoneMockup from './PhoneMockup';
import { MessageCircle, Phone, Zap } from 'lucide-react';
import siteAbas from '@/assets/site-abas.jpg';

const Card4 = () => {
  return (
    <div 
      className="w-[1080px] h-[1350px] bg-gradient-to-br from-nutri-gold-subtle to-white flex items-center justify-between px-16 py-20"
      style={{ aspectRatio: '1080/1350' }}
    >
      {/* Left content */}
      <div className="flex flex-col justify-center space-y-8 max-w-[700px]">
        {/* Icon and intro */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-4 h-4 bg-nutri-dark rounded-full"></div>
          <p className="font-body text-nutri-dark text-xl">
            Ah, e se você também é profissional da saúde ou presta serviços...
          </p>
        </div>
        
        {/* Main text */}
        <p className="font-body text-nutri-dark text-2xl leading-relaxed mb-8">
          ...e quer oferecer essa mesma facilidade aos seus clientes, 
          <span className="font-script text-3xl text-nutri-gold"> indico o trabalho do meu marido</span>, 
          que desenvolveu esse sistema no meu site.
        </p>
        
        {/* Contact info */}
        <div className="bg-nutri-dark rounded-2xl p-8 text-white space-y-6">
          <div className="flex items-center gap-4">
            <MessageCircle className="w-8 h-8 text-nutri-gold" />
            <h3 className="font-heading text-2xl font-bold">Contato:</h3>
          </div>
          
          <div className="flex items-center gap-4">
            <Phone className="w-6 h-6 text-nutri-gold" />
            <p className="font-body text-xl">
              <span className="font-bold">(19) 99627-4105</span>
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <Zap className="w-6 h-6 text-nutri-gold" />
            <p className="font-script text-2xl text-nutri-gold">
              Michel Henrique
            </p>
          </div>
        </div>
      </div>
      
      {/* Right - Phone mockup */}
      <div className="flex items-center justify-center">
        <PhoneMockup 
          image={siteAbas}
          alt="Menu do site"
        />
      </div>
    </div>
  );
};

export default Card4;