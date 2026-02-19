import React, { useEffect, useState } from 'react';
import { Play, X } from 'lucide-react';

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative h-[75vh] min-h-[500px] w-full overflow-hidden flex items-center justify-center border-b border-green-900/20">
      {/* Background: Abstract Memorial/Alien Vibe */}
      <div className="absolute inset-0 bg-black">
        {/* Starfield/Particles Effect */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-screen animate-pulse-slow"></div>
        
        {/* Central Beam - Abstract 'Abduction' or 'Soul Ascension' imagery */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 md:w-2 -translate-x-1/2 bg-gradient-to-b from-transparent via-green-500/40 to-transparent blur-xl"></div>
        <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-green-200/30 to-transparent"></div>
      </div>
      
      {/* Gradient Overlay for Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_90%)]"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto w-full flex flex-col items-center justify-center">
        
        {/* Abstract Symbol */}
        <div className="mb-6 opacity-60">
           <div className="w-1 h-12 bg-gradient-to-b from-transparent to-green-500 mx-auto mb-2"></div>
           <p className="text-[10px] tracking-[0.5em] text-green-500 uppercase">Est. 2026</p>
        </div>

        <h1 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 mb-4 tracking-tighter uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          ALIENS
        </h1>
        
        <div className="h-px w-12 bg-green-800 my-6"></div>

        <p className="text-gray-500 text-xs md:text-sm mb-10 max-w-lg mx-auto italic">
          In memory of the fallen. <br/>
          Separated by borders. Never forgotten.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => setShowVideo(true)}
            className="group relative inline-flex items-center justify-center px-8 py-3 font-bold text-black transition-all duration-200 bg-green-500 font-mono rounded-md hover:bg-green-400 focus:outline-none focus:ring-2 ring-green-400 shadow-[0_0_25px_rgba(34,197,94,0.15)] hover:shadow-[0_0_35px_rgba(34,197,94,0.3)] cursor-pointer"
          >
            <Play className="w-4 h-4 mr-2 fill-current text-black" />
            WATCH PREMIERE
          </button>
          
          <a 
            href="#merch" 
            onClick={(e) => handleScrollTo(e, 'merch')}
            className="px-8 py-3 font-bold text-white border border-white/20 rounded-md hover:bg-white/5 hover:border-white/50 transition-all font-mono uppercase tracking-widest text-sm"
          >
            Get the Gear
          </a>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-8 animate-in fade-in duration-300">
           <div className="absolute inset-0" onClick={() => setShowVideo(false)}></div>
           <div className="relative h-[80vh] w-auto aspect-[9/16] bg-black rounded-xl overflow-hidden shadow-2xl border border-green-900/30">
              <button 
                onClick={() => setShowVideo(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-red-600 text-white rounded-full transition-all duration-300 group"
              >
                <X className="w-6 h-6 group-hover:rotate-90 transition-transform" />
              </button>
              <video 
                controls 
                autoPlay
                controlsList="nodownload"
                className="w-full h-full object-cover bg-black"
                poster="https://res.cloudinary.com/dw3lf8roj/image/upload/v1771370915/Untitled_design_l0h1vo.png"
              >
                <source 
                  src="https://dl.dropboxusercontent.com/scl/fi/f5laal4o3ot0czdpsrpxe/aliens.mp4?rlkey=6vt5vsxzjptne422elsw9fxls&st=hwlfyiu4" 
                  type="video/mp4" 
                />
                Your browser does not support the video tag.
              </video>
           </div>
        </div>
      )}
    </div>
  );
};

export default Hero;