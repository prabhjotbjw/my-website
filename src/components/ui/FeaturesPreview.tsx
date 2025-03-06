"use client";

import React, { useState } from 'react';

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Save Time',
    description: 'Automate repetitive tasks and reclaim hours of your week with simple, effective solutions.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Free Tools',
    description: 'Discover powerful, cost-effective tools and extensions that boost productivity without breaking the bank.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Quick Shortcuts',
    description: 'Learn keyboard shortcuts and efficiency hacks that instantly speed up your daily workflow.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: 'Automation',
    description: 'Get personalized guidance on building automated systems tailored to your specific needs.'
  }
];

const FeaturesPreview: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

  // Function to handle card click
  const handleCardClick = (index: number) => {
    setSelectedFeature(index);
    // When a card is clicked, we want to prevent body scrolling
    document.body.style.overflow = 'hidden';
  };

  // Function to close the overlay
  const closeOverlay = () => {
    setSelectedFeature(null);
    // Re-enable body scrolling
    document.body.style.overflow = 'auto';
  };

  // Function to handle overlay click
  const handleOverlayClick = (e: React.MouseEvent) => {
    // Only close if the click was directly on the overlay background
    if (e.target === e.currentTarget) {
      closeOverlay();
    }
  };

  return (
    <section id="features" className="w-full max-w-6xl mx-auto py-16">
      <h2 className="features-title text-center mb-4">
        What We Offer
      </h2>
      <p className="features-subtitle text-center mb-12">
        Discover how we can transform your digital experience
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="feature-card-new"
            onMouseEnter={() => setActiveFeature(index)}
            onMouseLeave={() => setActiveFeature(null)}
            onClick={() => handleCardClick(index)}
          >
            <div className="feature-card-content">
              <div className={`feature-icon-new ${activeFeature === index ? 'feature-icon-active' : ''}`}>
                {feature.icon}
              </div>
              <h3 className="feature-title-new">{feature.title}</h3>
              
              <div className="flex-spacer"></div> {/* Using the new class */}
              
              <button className="explore-button">
                Explore Further
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              <div className="feature-glow"></div>
              <div className="feature-border"></div>
            </div>
            
            {/* Animated corner accents */}
            <div className="feature-corner feature-corner-tl"></div>
            <div className="feature-corner feature-corner-tr"></div>
            <div className="feature-corner feature-corner-bl"></div>
            <div className="feature-corner feature-corner-br"></div>
          </div>
        ))}
      </div>

      {/* Feature Detail Overlay */}
      {selectedFeature !== null && (
        <div className="feature-overlay" onClick={handleOverlayClick}>
          <div className="feature-modal">
            <button className="feature-close-button" onClick={closeOverlay}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="feature-modal-content">
              <div className="feature-modal-icon">
                {features[selectedFeature].icon}
              </div>
              <h2 className="feature-modal-title">{features[selectedFeature].title}</h2>
              <p className="feature-modal-description">{features[selectedFeature].description}</p>
              
              {/* Additional content for the modal */}
              <div className="feature-modal-extra">
                <h3 className="feature-modal-subtitle">How It Works</h3>
                <p className="feature-modal-text">
                  Our team of experts analyzes your workflow to identify opportunities for improvement. 
                  We then recommend the best tools and techniques to help you save time and increase productivity.
                </p>
                
                <h3 className="feature-modal-subtitle">Benefits</h3>
                <ul className="feature-modal-list">
                  <li>Increased productivity</li>
                  <li>Reduced stress and burnout</li>
                  <li>More time for what matters</li>
                  <li>Improved work-life balance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturesPreview; 