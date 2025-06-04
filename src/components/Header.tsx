import React, { useState, useEffect } from 'react';
import { Laptop as LaptopCode } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/src/assets/DigitalFixersLogoNoLetters.png"
            alt="Digital Fixers RVC Logo"
            className="h-16 w-auto md:h-20"
          />
          <span className="text-xl font-bold tracking-tight">
            <span className="text-blue-600">Digital</span> Fixers RVC
          </span>
        </div>
        <nav>
          <ul className="flex gap-6">
            <li><a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a></li>
            <li><a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;