"use client";

import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-300 via-white to-secondary-300 text-transparent bg-clip-text">
          404 - Page Not Found
        </h1>
        <p className="text-xl text-white/80 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/" 
          className="px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium rounded-md hover:from-primary-600 hover:to-secondary-600 transition-all duration-200"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
} 