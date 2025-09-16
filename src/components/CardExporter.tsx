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

  const downloadCard = async (cardRef: React.RefObject<HTMLDivElement>, fileName: string, format: 'png' | 'jpg' | 'pdf' = 'png') => {
    if (!cardRef.current) return;

    try {
      // Wait for fonts and images to load
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Temporarily make the hidden element visible for capture
      const hiddenElement = cardRef.current;
      const originalStyle = {
        opacity: hiddenElement.style.opacity,
        position: hiddenElement.style.position,
        zIndex: hiddenElement.style.zIndex,
        transform: hiddenElement.style.transform
      };
      
      hiddenElement.style.opacity = '1';
      hiddenElement.style.position = 'static';
      hiddenElement.style.zIndex = '9999';
      hiddenElement.style.transform = 'none';
      
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const canvas = await html2canvas(hiddenElement, {
        width: 1080,
        height: 1350,
        scale: 1,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false,
        removeContainer: false,
        imageTimeout: 3000
      });

      // Restore original state
      hiddenElement.style.opacity = originalStyle.opacity;
      hiddenElement.style.position = originalStyle.position;
      hiddenElement.style.zIndex = originalStyle.zIndex;
      hiddenElement.style.transform = originalStyle.transform;

      if (format === 'pdf') {
        const { jsPDF } = await import('jspdf');
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'px',
          format: [1080, 1350]
        });
        
        pdf.addImage(canvas.toDataURL('image/png', 1.0), 'PNG', 0, 0, 1080, 1350);
        pdf.save(`${fileName}.pdf`);
      } else {
        const mimeType = format === 'jpg' ? 'image/jpeg' : 'image/png';
        const quality = format === 'jpg' ? 0.95 : 1.0;
        
        const link = document.createElement('a');
        link.download = `${fileName}.${format}`;
        link.href = canvas.toDataURL(mimeType, quality);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
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
              {/* Card title and download buttons */}
              <div className="flex items-center gap-4 mb-6">
                <ImageIcon className="w-6 h-6 text-nutri-dark" />
                <h2 className="font-heading text-2xl font-bold text-nutri-dark">
                  {card.title}
                </h2>
                <div className="flex gap-2">
                  <button
                    onClick={() => downloadCard(card.ref, `instagram-card-${index + 1}`, 'png')}
                    className="bg-nutri-gold text-nutri-dark px-4 py-2 rounded-lg font-heading font-semibold hover:bg-nutri-gold/80 transition-colors duration-200 flex items-center gap-2 text-sm"
                  >
                    <Download className="w-4 h-4" />
                    PNG
                  </button>
                  <button
                    onClick={() => downloadCard(card.ref, `instagram-card-${index + 1}`, 'jpg')}
                    className="bg-nutri-light text-nutri-dark px-4 py-2 rounded-lg font-heading font-semibold hover:bg-nutri-light/80 transition-colors duration-200 flex items-center gap-2 text-sm"
                  >
                    <Download className="w-4 h-4" />
                    JPG
                  </button>
                  <button
                    onClick={() => downloadCard(card.ref, `instagram-card-${index + 1}`, 'pdf')}
                    className="bg-nutri-dark text-white px-4 py-2 rounded-lg font-heading font-semibold hover:bg-nutri-dark/80 transition-colors duration-200 flex items-center gap-2 text-sm"
                  >
                    <Download className="w-4 h-4" />
                    PDF
                  </button>
                </div>
              </div>
              
              {/* Card preview - scaled down for viewing */}
              <div className="relative overflow-hidden">
                {/* Visible scaled preview */}
                <div 
                  className="transform scale-[0.3] origin-top"
                  style={{ 
                    width: '1080px', 
                    height: '1350px',
                    marginBottom: '-945px' // Adjust for scaled height
                  }}
                >
                  <ExportableCard cardNumber={index + 1}>
                    <CardComponent />
                  </ExportableCard>
                </div>
                
                {/* Hidden full-size card for export */}
                <div 
                  className="absolute opacity-0 pointer-events-none"
                  style={{ 
                    position: 'fixed',
                    top: '100vh',
                    left: '0',
                    width: '1080px', 
                    height: '1350px',
                    zIndex: '-1'
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
          <li>• Escolha o formato: <strong>PNG</strong> (melhor qualidade), <strong>JPG</strong> (menor tamanho) ou <strong>PDF</strong></li>
          <li>• Use "Baixar Todos os Cards" para salvar todos em PNG de uma vez</li>
          <li>• As imagens são salvas no tamanho correto: 1080x1350px</li>
          <li>• Qualidade alta e otimizada para Instagram</li>
        </ul>
      </div>
    </div>
  );
};

export default CardExporter;