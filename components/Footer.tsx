import React from 'react';
import { Instagram, Twitter, Youtube, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold tracking-widest text-white uppercase font-mono">
              ALIENS<span className="text-green-500">.</span>
            </h2>
            <p className="text-gray-400 text-sm mt-2 font-mono">
              Vision by <span className="text-white font-bold">Christian Kota</span>
            </p>
            <p className="text-gray-600 text-xs mt-1">© {new Date().getFullYear()} All Rights Reserved.</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://www.instagram.com/christian_kota/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-green-500 transition-colors transform hover:scale-110 duration-200"
              aria-label="Christian Kota Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="https://www.facebook.com/christiankota93/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-green-500 transition-colors transform hover:scale-110 duration-200"
              aria-label="Christian Kota Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a 
              href="https://x.com/ChristianS96243" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-green-500 transition-colors transform hover:scale-110 duration-200"
              aria-label="Christian Kota X (Twitter)"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a 
              href="https://www.youtube.com/@Christiankota" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-green-500 transition-colors transform hover:scale-110 duration-200"
              aria-label="Christian Kota YouTube"
            >
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-xs text-gray-600 max-w-3xl mx-auto border-t border-gray-900 pt-8 flex flex-col items-center gap-4">
          <p>
            "Aliens" is an artistic statement by Christian Kota. 
            All music, visuals, and merchandise are designed to support the narrative and the cause.
          </p>
          
          <a 
            href="https://cosmic-solidarity-portal-219296874904.us-west1.run.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-green-500 transition-colors border-b border-gray-800 hover:border-green-500 pb-0.5 uppercase tracking-widest font-mono text-[10px]"
          >
            Order Support & Exchanges Portal
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;