import { useState } from 'react';
import { ChevronLeft, ChevronRight } from './Icons';

const ImageCarousel = ({ images, propertyId, onImageClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const goToNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = (e) => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      goToNext(e);
    }
    if (isRightSwipe) {
      goToPrevious(e);
    }
  };

  return (
    <div 
      className="relative h-72 overflow-hidden rounded-2xl group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div 
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Property ${propertyId} - ${idx + 1}`}
            className="w-full h-full object-cover flex-shrink-0 cursor-pointer"
            onClick={() => onImageClick && onImageClick(idx)}
            loading="lazy"
          />
        ))}
      </div>
      
      {/* Navigation Arrows */}
      {isHovered && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4 text-gray-800" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4 text-gray-800" />
          </button>
        </>
      )}
      
      {/* Dots Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(idx);
            }}
            className={`h-1.5 rounded-full transition-all ${
              idx === currentIndex ? 'bg-white w-6' : 'bg-white/60 w-1.5'
            }`}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>
      
      {/* Image counter */}
      <div className="absolute top-3 left-3 bg-black/50 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm font-medium">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default ImageCarousel;
