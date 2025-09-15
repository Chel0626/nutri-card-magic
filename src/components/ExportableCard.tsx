import { forwardRef } from 'react';

interface ExportableCardProps {
  children: React.ReactNode;
  cardNumber: number;
}

const ExportableCard = forwardRef<HTMLDivElement, ExportableCardProps>(
  ({ children, cardNumber }, ref) => {
    return (
      <div 
        ref={ref}
        className="relative bg-white"
        style={{ 
          width: '1080px', 
          height: '1350px',
          fontSize: '16px' // Base font size for export
        }}
      >
        {children}
      </div>
    );
  }
);

ExportableCard.displayName = 'ExportableCard';

export default ExportableCard;