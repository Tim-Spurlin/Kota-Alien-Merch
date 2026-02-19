import React from 'react';
import { StoryAct } from '../types';

const acts: StoryAct[] = [
  {
    id: 'slide1',
    title: 'The Proposal',
    content: 'A genre-defying survival drama that explodes into a supernatural uprising. A cinematic music video experience where survival horror becomes sci-fi action.',
    image: 'https://res.cloudinary.com/dw3lf8roj/image/upload/v1771326993/1_lpiijf.jpg'
  },
  {
    id: 'slide2',
    title: 'Reclaiming The Label',
    content: 'The narrative is built on the linguistic bridge between "Illegal Alien" and "Extraterrestrial." The story posits that if space travelers arrived, they wouldn\'t conquer Earth; they would ally with the migrants. Both are forbidden intruders. Both are hunted by the state. Both are Aliens.',
    image: 'https://res.cloudinary.com/dw3lf8roj/image/upload/v1771328157/2_gyvcwt.jpg'
  },
  {
    id: 'slide3',
    title: 'The Atmosphere',
    content: 'Hyper-realistic cinematography. Low-key lighting. The aesthetic of a blockbuster action film. A world of drought, military tech, and raw electric power.',
    image: 'https://res.cloudinary.com/dw3lf8roj/image/upload/v1771326991/3_vjcgl4.jpg'
  },
  {
    id: 'slide4',
    title: 'The Protagonists',
    content: 'Athletes of Survival. The couple is defined not by victimhood, but by grace, power, and urgency. The Man: Protective, muscular. The Woman: Highly athletic. They are running for their lives, carrying their entire world in a worn suitcase.',
    image: 'https://res.cloudinary.com/dw3lf8roj/image/upload/v1771326990/4_o3m5yw.jpg'
  },
  {
    id: 'slide5',
    title: 'Anton: The Savior',
    content: 'A biomechanical entity. A fusion of "Alien" physiology and "Predator" technology. Imposing stature (8ft). Despite the terrifying appearance, it is a Guardian. It does not seek conquest; it seeks to protect the persecuted.',
    image: 'https://res.cloudinary.com/dw3lf8roj/image/upload/v1771326989/5_h5gnwx.jpg'
  },
  {
    id: 'slide6',
    title: 'The Antagonists',
    content: 'The Hunters. Heavily militarized Border Patrol and ICE agents appearing as an occupying army. Faceless anonymity. K-9 Units used as instruments of fear. At this stage, they appear human.',
    image: 'https://res.cloudinary.com/dw3lf8roj/image/upload/v1771326988/6_e0oren.jpg'
  },
  {
    id: 'slide7',
    title: 'Act I: The Catalyst',
    content: 'The Inciting Incident. The airwaves are filled with hate. "They took our jobs." The couple packs their vintage luggage. They are not leaving for opportunity; they are fleeing for survival.',
    image: 'https://res.cloudinary.com/dw3lf8roj/image/upload/v1771326988/7_idrtg6.jpg'
  },
  {
    id: 'slide8',
    title: 'Act II & III: The Trek',
    content: 'Run. Hide. Survive. High-speed evasion through arid deserts and dense forests. The couple moves with track-athlete form, hurdling logs and brush. The TV voice whispers, "They are really good at hiding."',
    image: 'https://res.cloudinary.com/dw3lf8roj/image/upload/v1771326987/8_o02gqq.jpg'
  },
  {
    id: 'slide9',
    title: 'Act IV: A Fragile Respite',
    content: 'An abandoned, decaying wooden shack. The couple shares a humble meal of Elotes (Mexican street corn). A fleeting moment of culture and love preserved in a hostile land.',
    image: 'https://res.cloudinary.com/dw3lf8roj/image/upload/v1771326985/9_yky2fv.jpg'
  },
  {
    id: 'slide10',
    title: 'The Violation',
    content: 'The Breach. Agents kick down the doors; flashlights pierce the darkness. The K-9 unit is shown eating the discarded Elotes—a metaphor for the consumption and destruction of the migrants’ joy.',
    image: 'https://res.cloudinary.com/dw3lf8roj/image/upload/v1771326984/10_wnqto6.jpg'
  },
  {
    id: 'slide11',
    title: 'Act V: The Intervention',
    content: 'Genre Shift. Survival Horror becomes Sci-Fi Action. Just as capture is inevitable, the sky erupts. A fleet of UFOs rains orbital laser fire on the military hardware. The Extraterrestrial ignores the migrants and targets the oppressors.',
    image: 'https://res.cloudinary.com/dw3lf8roj/image/upload/v1771326984/11_n2cemd.jpg'
  },
  {
    id: 'slide12',
    title: 'Act VI: Cosmic Kinship',
    content: 'The Core Metaphor: "We Know How You Feel." The Alien approaches the trembling couple. It offers no violence, only recognition. An alliance is formed based on shared marginalization.',
    image: 'https://res.cloudinary.com/dw3lf8roj/image/upload/v1771326984/12_svmtov.jpg'
  },
  {
    id: 'slide13',
    title: 'Act VII & VIII: The Ascension',
    content: 'The Alien channels cosmic energy into the humans. They are no longer refugees; they are super-beings. Weapons melt in their presence. The Woman punches through opposition with the force of a lightning strike.',
    image: 'https://res.cloudinary.com/dw3lf8roj/image/upload/v1771326981/13_fauvkt.jpg'
  },
  {
    id: 'slide14',
    title: 'Act IX: The Twist',
    content: 'The Reveal: The Man rips the head from a masked agent. The mask falls away. It wasn’t for COVID. It wasn’t for anonymity. It was hiding a literal demon.',
    image: 'https://res.cloudinary.com/dw3lf8roj/image/upload/v1771326981/14_cwqjms.jpg'
  },
  {
    id: 'slide15',
    title: 'The Meaning of The Monster',
    content: 'The true face of the enemy. The video subverts the viewer’s expectation. The masks were disguises for the inhuman. The system is literally monstrous.',
    image: 'https://res.cloudinary.com/dw3lf8roj/image/upload/v1771326980/15_jzx8vc.jpg'
  },
  {
    id: 'slide16',
    title: 'The Brotherhood of Aliens',
    content: 'Conclusion: When the oppressed unite—across borders or galaxies—they have the power to rip the mask off the system. A story of ultimate empowerment, resilience, and the freedom to cross any border.',
    image: 'https://res.cloudinary.com/dw3lf8roj/image/upload/v1771326980/16_a0jojn.jpg'
  }
];

const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-24 bg-neutral-900 relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-900/10 to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
            The <span className="text-green-500">Manifesto</span>
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            "Aliens" is more than a song—it is a sci-fi allegory for the dehumanization of immigrants. 
            It reclaims the slur "alien" and turns it into a badge of cosmic power.
          </p>
        </div>

        <div className="space-y-24">
          {acts.map((act, index) => (
            <div 
              key={act.id} 
              className="group bg-black border border-gray-800 rounded-2xl overflow-hidden hover:border-green-600 transition-all duration-500 shadow-2xl flex flex-col"
            >
              {/* Image Container - No Overlays, Full Visibility */}
              <div className="w-full overflow-hidden">
                 <img 
                    src={act.image} 
                    alt={act.title}
                    className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
                    onError={(e) => {
                      // Fallback placeholder if image is missing
                      e.currentTarget.src = `https://placehold.co/1200x600/111/333?text=${encodeURIComponent(act.title)}`;
                    }}
                 />
              </div>

              {/* Text Content - Moved Below Image */}
              <div className="p-8 md:p-12 bg-neutral-900/30 border-t border-gray-800">
                  <div className="flex items-center space-x-4 mb-4">
                      <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-green-500 text-green-500 font-mono font-bold text-lg bg-black/50 backdrop-blur-sm">
                          {index + 1}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-wide">
                          {act.title}
                      </h3>
                  </div>
                  <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-4xl border-l-4 border-green-500 pl-6 py-2">
                      {act.content}
                  </p>
               </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-8 bg-gradient-to-r from-red-900/20 to-black border border-red-900/30 rounded-xl max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-red-500 mb-4 uppercase flex items-center justify-center">
            <span className="w-3 h-3 bg-red-500 rounded-full mr-4 animate-pulse"></span>
            The Hidden Truth
          </h3>
          <p className="text-gray-300 italic text-lg">
            "The masks aren't for safety. They are a disguise. A synthetic skin designed to conceal the terrifying, inhuman reality of what lies beneath."
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;