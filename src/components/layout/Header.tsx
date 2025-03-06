"use client";

import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="logo">
            Treasure You Need
          </Link>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <Link href="#features" className="nav-link header-link">
            Features
          </Link>
          <Link href="#about" className="nav-link header-link">
            About
          </Link>
          <Link href="#contact" className="nav-link header-link">
            Contact
          </Link>
        </nav>
        
        <div className="md:hidden">
          <button className="text-white p-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 