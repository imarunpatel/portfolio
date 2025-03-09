import { useEffect, useState } from "react";



interface ImageSliderProps {
    images: { title: string; src: string }[];
    interval?: number; // Time in ms for auto slide
    transition?: "fade" | "slide";
}
    
const ImageSlider: React.FC<ImageSliderProps> = ({
    images,
    interval = 3000,
    transition = "fade",
  }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        nextSlide();
      }, interval);
  
      return () => clearInterval(timer);
    }, [currentIndex, interval]);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    return (
      <div className="relative w-full mx-auto max-w-lg overflow-hidden flex items-center">
        <div className="relative w-full h-64 overflow-hidden rounded-lg">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={`Slide ${index + 1}`}
              className={`absolute w-full h-full object-cover transition-all duration-700 ${
                transition === "fade"
                  ? index === currentIndex
                    ? "opacity-100"
                    : "opacity-0"
                  : `translate-x-${(index - currentIndex) * 100}`
              }`}
              style={{
                transform: transition === "slide" ? `translateX(${(index - currentIndex) * 100}%)` : "none",
              }}
            />
          ))}
        </div>
        {/*Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 w-10 h-10 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 w-10 h-10 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          ❯
        </button>
      </div>
    );
  };
  
  export default ImageSlider;