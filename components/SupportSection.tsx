import React from 'react';
import { Heart, ShieldAlert } from 'lucide-react';

const SupportSection: React.FC = () => {
  return (
    <section id="activism" className="py-24 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ShieldAlert className="w-16 h-16 text-red-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-6">
            Beyond the <span className="text-red-500">Fiction</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            While "Aliens" uses sci-fi to tell a story, the reality for millions of families is far more terrifying. 
            Family separation and the tragic loss of life at the hands of enforcement agencies are real crises happening now.
          </p>
        </div>

        <div className="bg-neutral-900 border border-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="flex flex-col items-center text-center">
            <Heart className="w-12 h-12 text-red-500 mb-6 fill-current" />
            <h3 className="text-2xl font-bold mb-4">
              Support The Fallen
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl">
              Countless individuals have lost their lives or been permanently separated from their loved ones due to aggressive enforcement tactics. 
              We stand in solidarity with the families affected by these tragedies.
            </p>
            <div className="space-y-4 w-full max-w-lg">
              <p className="font-semibold text-white">Organizations fighting for justice:</p>
              <ul className="space-y-3 text-lg text-gray-300">
                <li className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Immigrant Families Together
                </li>
                <li className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  The Florence Project
                </li>
                <li className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Border Angels
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;