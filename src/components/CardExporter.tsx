import { useRef } from 'react';
import html2canvas from 'html2canvas';
import { Download, Image as ImageIcon } from 'lucide-react';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';
import ExportableCard from './ExportableCard';

const CardExporter = () => {
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);

  const cards = [
    { component: Card1, ref: card1Ref, title: 'Card 1 - Chamada Inicial' },
    { component: Card2, ref: card2Ref, title: 'Card 2 - Passo a Passo' },
    { component: Card3, ref: card3Ref, title: 'Card 3 - Benefícios' },
    { component: Card4, ref: card4Ref, title: 'Card 4 - Indicação + Contato' }
  ];

  const downloadCard = async (cardRef: React.RefObject<HTMLDivElement>, fileName: string) => {
    if (!cardRef.current) return;

    try {
      const canvas = await html2canvas(cardRef.current, {
        width: 1080,
        height: 1350,
        scale: 1,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
        logging: false
      });

      const link = document.createElement('a');
      link.download = `${fileName}.png`;
      link.href = canvas.toDataURL('image/png', 1.0);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Erro ao baixar a imagem:', error);
      alert('Erro ao baixar a imagem. Tente novamente.');
    }
  };

  const downloadAllCards = async () => {
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      await downloadCard(card.ref, `instagram-card-${i + 1}`);
      // Pequena pausa entre downloads
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="font-heading text-4xl font-bold text-nutri-dark mb-4">
          Exportar Cards do Instagram
        </h1>
        <p className="font-body text-nutri-dark/70 text-lg mb-6">
          Clique nos botões abaixo para baixar cada card individualmente
        </p>
        
        {/* Download all button */}
        <button
          onClick={downloadAllCards}
          className="bg-nutri-dark text-white px-8 py-4 rounded-2xl font-heading font-semibold text-lg hover:bg-nutri-dark/90 transition-colors duration-200 flex items-center gap-3 mx-auto mb-8"
        >
          <Download className="w-6 h-6" />
          Baixar Todos os Cards
        </button>
      </div>

      {/* Cards for export */}
      <div className="space-y-16">
        {cards.map((card, index) => {
          const CardComponent = card.component;
          return (
            <div key={index} className="flex flex-col items-center">
              {/* Card title and download button */}
              <div className="flex items-center gap-4 mb-6">
                <ImageIcon className="w-6 h-6 text-nutri-dark" />
                <h2 className="font-heading text-2xl font-bold text-nutri-dark">
                  {card.title}
                </h2>
                <button
                  onClick={() => downloadCard(card.ref, `instagram-card-${index + 1}`)}
                  className="bg-nutri-gold text-nutri-dark px-6 py-3 rounded-xl font-heading font-semibold hover:bg-nutri-gold/80 transition-colors duration-200 flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Baixar
                </button>
              </div>
              
              {/* Card preview - scaled down for viewing */}
              <div className="relative">
                <div 
                  className="transform scale-[0.3] origin-top"
                  style={{ 
                    width: '1080px', 
                    height: '1350px',
                    marginBottom: '-945px' // Adjust for scaled height
                  }}
                >
                  <ExportableCard ref={card.ref} cardNumber={index + 1}>
                    <CardComponent />
                  </ExportableCard>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Instructions */}
      <div className="max-w-2xl mx-auto mt-16 p-8 bg-white rounded-2xl shadow-card">
        <h3 className="font-heading text-xl font-bold text-nutri-dark mb-4">
          Como usar:
        </h3>
        <ul className="font-body text-nutri-dark space-y-2">
          <li>• Clique em "Baixar" em cada card para salvar individualmente</li>
          <li>• Use "Baixar Todos os Cards" para salvar todos de uma vez</li>
          <li>• As imagens são salvas no tamanho correto: 1080x1350px</li>
          <li>• Formato PNG com alta qualidade para Instagram</li>
        </ul>
      </div>
    </div>
  );
};

export default CardExporter;