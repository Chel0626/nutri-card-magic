interface PhoneMockupProps {
  image: string;
  alt: string;
}

const PhoneMockup = ({ image, alt }: PhoneMockupProps) => {
  return (
    <div className="relative w-[200px] h-[400px] flex-shrink-0">
      {/* iPhone frame */}
      <div className="relative w-full h-full bg-black rounded-[32px] p-2 shadow-phone">
        {/* Screen */}
        <div className="w-full h-full bg-white rounded-[28px] overflow-hidden relative">
          {/* Notch */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10"></div>
          
          {/* Screen content */}
          <div className="w-full h-full relative">
            <img 
              src={image} 
              alt={alt}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
        
        {/* Home indicator */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-800 rounded-full"></div>
      </div>
    </div>
  );
};

export default PhoneMockup;