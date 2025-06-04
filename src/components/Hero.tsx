import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-blue-800 leading-tight">
            Professional IT Support for Rockville Centre
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            With over 18 years of experience, I provide friendly, expert tech solutions for homes and small businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-all transform hover:scale-105"
            >
              Get Help Now
            </a>
            <a 
              href="#services" 
              className="bg-white hover:bg-gray-100 text-blue-600 font-medium py-3 px-6 rounded-lg shadow-md transition-all border border-blue-200"
            >
              View Services
            </a>
          </div>
        </div>
        <div className="flex justify-center mt-16 animate-bounce">
          <a href="#services">
            <ArrowDown className="w-8 h-8 text-blue-600" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;