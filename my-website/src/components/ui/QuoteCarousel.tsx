"use client";

import React, { useState, useEffect, useCallback } from 'react';

interface Quote {
  text: string;
  description?: string;
}

interface QuoteCarouselProps {
  quotes: Quote[];
}

export default function QuoteCarousel({ quotes }: QuoteCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
    );
  }, [quotes.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? quotes.length - 1 : prevIndex - 1
    );
  };

  // Auto-rotation effect
  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(goToNext, 8000);
      return () => clearInterval(timer);
    }
  }, [isPaused, goToNext]);

  return (
    <div 
      className="quote-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <button 
        onClick={goToPrevious}
        className="quote-nav-button quote-nav-prev"
        aria-label="Previous quote"
      >
        ←
      </button>
      
      <div className="quote-content">
        <p className="quote-text">
          {quotes[currentIndex].text}
        </p>
        {quotes[currentIndex].description && (
          <p className="quote-attribution">
            — {quotes[currentIndex].description}
          </p>
        )}
        <div className="quote-indicator">
          {currentIndex + 1} / {quotes.length}
        </div>
      </div>

      <button 
        onClick={goToNext}
        className="quote-nav-button quote-nav-next"
        aria-label="Next quote"
      >
        →
      </button>
    </div>
  );
} 