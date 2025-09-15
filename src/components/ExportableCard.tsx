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
        className="relative bg-white overflow-hidden"
        style={{ 
          width: '1080px', 
          height: '1350px',
          fontSize: '16px',
          position: 'relative',
          minWidth: '1080px',
          minHeight: '1350px',
          transform: 'none',
          transformOrigin: 'unset'
        }}
      >
        <div className="w-full h-full">
          {children}
        </div>
      </div>
    );
  }
);

ExportableCard.displayName = 'ExportableCard';

export default ExportableCard;