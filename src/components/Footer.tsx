import React from 'react';
import { Laptop as LaptopCode, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center">
            <img
              src="src/assets/DigitalFixersLogoNoLettersWhite.png"
              alt="Digital Fixers RVC Logo"
              className="h-20 w-auto md:h-24 -mr-4"
              />

            <span className="text-xl font-bold tracking-tight">
              <span className="text-blue-300">Digital</span> Fixers RVC
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <a href="#services" className="text-blue-200 hover:text-white transition-colors">Services</a>
            <a href="#about" className="text-blue-200 hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-blue-200 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-blue-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-300" />
                <span>516-315-4793</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-300" />
                <span>digitalfixersrvc@gmail.com</span>
              </div>
            </div>
            
            <div className="text-sm text-blue-200">
              &copy; {new Date().getFullYear()} Digital Fixers RVC. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;