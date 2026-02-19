import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import StreamSection from './components/StreamSection';
import StorySection from './components/StorySection';
import MerchSection from './components/MerchSection';
import SupportSection from './components/SupportSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-green-500 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <MerchSection />
        <StreamSection />
        <StorySection />
        <VideoSection />
        <SupportSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;