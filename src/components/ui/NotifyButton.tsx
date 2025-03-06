"use client";

import React from 'react';

const NotifyButton: React.FC = () => {
  const handleClick = () => {
    window.open('https://form.typeform.com/to/rj00ZTyR', '_blank');
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <button
        onClick={handleClick}
        className="notify-button w-full py-4 px-8 text-lg font-semibold"
      >
        Notify Me
      </button>
      <p className="text-white/60 text-xs mt-2 text-center">
        We'll notify you when we launch. No spam, ever.
      </p>
    </div>
  );
};

export default NotifyButton; 