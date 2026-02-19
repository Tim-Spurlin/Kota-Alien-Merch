import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section id="video" className="py-24 bg-black relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-900 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-wide">
            The Premiere
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="w-full max-w-sm mx-auto rounded-xl overflow-hidden shadow-[0_0_30px_rgba(217,48,37,0.3)] border border-white/10 bg-neutral-900">
          <video 
            controls 
            controlsList="nodownload"
            className="w-full h-auto aspect-[9/16] object-cover"
            poster="https://res.cloudinary.com/dw3lf8roj/image/upload/v1771370915/Untitled_design_l0h1vo.png"
          >
            <source 
              src="https://dl.dropboxusercontent.com/scl/fi/f5laal4o3ot0czdpsrpxe/aliens.mp4?rlkey=6vt5vsxzjptne422elsw9fxls&st=hwlfyiu4" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <div className="mt-8 text-center text-gray-400 font-mono text-sm">
          <p>OFFICIAL MUSIC VIDEO</p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;