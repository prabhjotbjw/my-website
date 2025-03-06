"use client";

import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC = () => {
  // Initial state with zeros to prevent hydration mismatch
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  // Flag to track if component is mounted
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    // Mark component as mounted
    setIsMounted(true);
    
    // Set launch date to 30 days from now
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);
    
    const calculateTimeLeft = (): TimeLeft => {
      const difference = +launchDate - +new Date();
      
      let timeLeft: TimeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
      
      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      
      return timeLeft;
    };
    
    // Initial calculation
    setTimeLeft(calculateTimeLeft());
    
    // Set up interval
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];
  
  // Don't render actual content until after client-side hydration
  if (!isMounted) {
    return (
      <div className="w-full max-w-3xl mx-auto">
        <h3 className="text-center text-white/80 mb-6 text-lg">Launching In</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, index) => (
            <div 
              key={index} 
              className="countdown-box"
            >
              <span className="countdown-number">
                00
              </span>
              <span className="countdown-label">
                Loading...
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  return (
    <div className="w-full max-w-3xl mx-auto">
      <h3 className="text-center text-white/80 mb-6 text-lg">Launching In</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {timeUnits.map((unit, index) => (
          <div 
            key={unit.label} 
            className="countdown-box"
          >
            <span className="countdown-number">
              {unit.value.toString().padStart(2, '0')}
            </span>
            <span className="countdown-label">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer; 