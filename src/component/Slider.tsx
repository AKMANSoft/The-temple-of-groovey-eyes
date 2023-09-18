import { useState, useEffect } from 'react';

function Slider() {
  const images = [
    "/icons/surrender3.png",
    "/icons/surrender.png",
    "/icons/surrender2.png",
    "/icons/surrender.png"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full mt-[60px]  relative overflow-x-hidden">
      <div
        className="flex gap-10 w-full"
        style={{
          animation: `slide-${currentIndex} 3s linear infinite`,
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="lg:w-[512px] lg:h-[512px] w-[320px] h-[320px]  rounded-full aspect-square"
          />
        ))}
      </div>
      <style>
        {images.map((_, index) => (
          `@keyframes slide-${index} {
            0% {
              transform: translateX(0%);
            }
            25% {
              transform: translateX(-100%);
            }
            50% {
              transform: translateX(-100%);
            }
            75% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(0%);
            }
          }`
        ))}
      </style>
    </div>
  );
}

export default Slider;
