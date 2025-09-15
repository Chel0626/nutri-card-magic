import { useState } from 'react';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';

const InstagramCarousel = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const cards = [Card1, Card2, Card3, Card4];
  const cardTitles = [
    'Chamada Inicial',
    'Passo a Passo',
    'Benefícios',
    'Indicação + Contato'
  ];

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const CurrentCardComponent = cards[currentCard];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <h2 className="font-heading text-3xl font-bold text-nutri-dark mb-2">
          Carrossel Instagram - Nutricionista
        </h2>
        <p className="font-body text-nutri-dark/70 mb-4">
          {cardTitles[currentCard]} ({currentCard + 1}/4)
        </p>
        
        {/* Download button */}
        <Link 
          to="/export"
          className="inline-flex items-center gap-2 bg-nutri-gold text-nutri-dark px-6 py-3 rounded-xl font-heading font-semibold hover:bg-nutri-gold/80 transition-colors duration-200"
        >
          <Download className="w-5 h-5" />
          Baixar Cards
        </Link>
      </div>

      {/* Carousel container */}
      <div className="relative bg-white rounded-3xl shadow-card overflow-hidden">
        {/* Card display */}
        <div className="relative">
          <CurrentCardComponent />
          
          {/* Navigation arrows */}
          <button
            onClick={prevCard}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-nutri-dark rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            disabled={currentCard === 0}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <button
            onClick={nextCard}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-nutri-dark rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            disabled={currentCard === cards.length - 1}
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Card indicators */}
      <div className="flex gap-3 mt-8">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentCard(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentCard
                ? 'bg-nutri-dark scale-125'
                : 'bg-nutri-dark/30 hover:bg-nutri-dark/50'
            }`}
          />
        ))}
      </div>
      
      {/* Info */}
      <div className="mt-8 text-center max-w-2xl">
        <p className="font-body text-sm text-nutri-dark/70">
          Carrossel profissional para Instagram - Tamanho: 1080x1350px
        </p>
      </div>
    </div>
  );
};

export default InstagramCarousel;