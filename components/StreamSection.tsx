import React from 'react';
import { Music, ExternalLink, Radio } from 'lucide-react';
import { sendMetaEvent } from '../metaApi';

const StreamSection: React.FC = () => {
    return (
        <section id="stream" className="py-24 bg-neutral-900 border-t border-gray-800 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-green-500 blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-blue-500 blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-8 uppercase tracking-tight">
                    Listen to the <span className="text-green-500">Invasion</span>
                </h2>

                <div className="bg-black/60 backdrop-blur-md p-10 rounded-3xl border border-gray-800 shadow-2xl max-w-3xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex-1 text-left">
                            <div className="flex items-center gap-3 mb-4">
                                <Radio className="w-6 h-6 text-green-500 animate-pulse" />
                                <span className="text-green-500 font-mono tracking-widest uppercase text-sm">Now Streaming</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-1">Aliens</h3>
                            <p className="text-green-500 font-mono text-sm mb-4 uppercase tracking-wide">by Christian Kota</p>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                Experience the sonic journey. Stream the track now on Spotify, Apple Music, and all major platforms.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="https://distrokid.com/hyperfollow/christiankota/aliens?ref=release"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => sendMetaEvent('Contact')}
                                    className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black transition-all duration-200 bg-green-500 rounded-lg hover:bg-green-400 focus:outline-none hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                                >
                                    <Music className="mr-2 w-5 h-5" />
                                    Stream / Download
                                    <ExternalLink className="ml-2 w-4 h-4 opacity-60" />
                                </a>
                            </div>
                        </div>

                        {/* Visualizer / Album Art Placeholder */}
                        <div className="w-full md:w-64 aspect-square bg-gray-800 rounded-xl overflow-hidden border border-gray-700 relative group">
                            <img
                                src="https://res.cloudinary.com/dw3lf8roj/image/upload/v1771327540/aliens-cover-photo_pztjek.jpg"
                                onError={(e) => {
                                    e.currentTarget.src = 'https://placehold.co/400x400/1a1a1a/22c55e?text=ALIENS+COVER';
                                }}
                                alt="Aliens Single Cover"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StreamSection;