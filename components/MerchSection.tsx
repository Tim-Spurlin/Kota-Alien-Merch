import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { sendMetaEvent } from '../metaApi';

declare global {
    interface Window {
        gtag: any;
    }
}

interface Product {
    id: string;
    title: string;
    price: string;
    description: string;
    stripePriceId: string; // Updated for custom checkout
    images: {
        front: string;
        back: string;
    };
    badges?: string[];
    accentColor: string;
}

const products: Product[] = [
    {
        id: 'shirt',
        title: '¡Chinga Tu Hielo! — Camiseta Unisex / Unisex T-Shirt',
        price: '$45.00',
        description: 'The strength of this shirt lies in its absurd and provocative playfulness. At the center, the white stick figure leans against a stack of bright, translucent ice cubes, full of cracks and droplets that reflect cold light. Everything is surrounded by a living desert frame: green nopales, spiky agaves, and pink flowers that contrast against the deep black of the fabric. At first glance it is light, bold humor — cold against heat, ice against attitude. But underneath it whispers resilience. 🧊🌵',
        stripePriceId: 'price_1T1jFJJE7UXIJ9CHIzFlEbBh',
        images: {
            front: 'https://res.cloudinary.com/dw3lf8roj/image/upload/v1771326523/ChatGPT_Image_Feb_15_2026_01_28_46_AM_f3gim4.png',
            back: 'https://res.cloudinary.com/dw3lf8roj/image/upload/v1771326523/ChatGPT_Image_Feb_15_2026_01_16_14_AM_jzmcbb.png'
        },
        badges: ['New Arrival', 'Unisex'],
        accentColor: 'text-green-400'
    },
    {
        id: 'hoodie',
        title: '¡Chinga Tu Hielo! - Unisex Hoodie - Sudadera Unisex',
        price: '$65.00',
        description: 'This black hoodie blends bold humor with sharp minimalist style. On the front chest sits a compact graphic of the iconic stick figure leaning against a stack of glowing ice cubes, framed by desert botanicals — nopales, agave, and subtle pink blossoms. The contrast of cold crystal ice against deep black fabric creates a striking visual that feels both playful and confident.🧊🌵',
        stripePriceId: 'price_1T1jFQJE7UXIJ9CHtUs80LM1',
        images: {
            front: 'https://res.cloudinary.com/dw3lf8roj/image/upload/v1771326521/ChatGPT_Image_Feb_16_2026_12_20_26_AM_xa5iha.png',
            back: 'https://res.cloudinary.com/dw3lf8roj/image/upload/v1771326523/ChatGPT_Image_Feb_16_2026_12_19_17_AM_tp3oap.png'
        },
        badges: ['Best Seller', 'Winter Ready'],
        accentColor: 'text-blue-400'
    }
];

const startCheckout = async (priceId: string) => {
    try {
        // 1. Get the current GA4 client_id
        const clientId = await new Promise<string>((resolve) => {
            if (typeof window.gtag === 'function') {
                window.gtag('get', import.meta.env.VITE_GA4_MEASUREMENT_ID, 'client_id', (id: string) => {
                    resolve(id);
                });
            } else {
                console.warn('Google Analytics not loaded');
                resolve(''); // Use empty string if GA not loaded
            }
        });

        // 2. Send it to your backend
        const response = await fetch('/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                priceId: priceId,
                client_id: clientId,
            }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const { url } = await response.json();

        // Track Events before redirect
        const eventData = { currency: 'USD', value: parseFloat(priceId === 'price_1T1jFJJE7UXIJ9CHIzFlEbBh' ? '45.00' : '65.00') };

        await Promise.all([
            sendMetaEvent('AddToCart', eventData),
            sendMetaEvent('InitiateCheckout', eventData),
            sendMetaEvent('AddPaymentInfo', eventData) // Tracking upfront since Stripe Hosted checkout hides it
        ]);

        window.location.href = url;
    } catch (error) {
        console.error('Error starting checkout:', error);
        alert('Failed to start checkout. Please try again.');
    }
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="bg-neutral-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-600 transition-all duration-300 group flex flex-col h-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="aspect-[3/4] w-full bg-neutral-800 relative overflow-hidden">
                {/* Back Image (Shown on Hover) */}
                <img
                    src={product.images.back}
                    alt={`${product.title} Back View`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                    onError={(e) => {
                        e.currentTarget.src = `https://placehold.co/600x800/222/FFF?text=${product.id}+Back`;
                    }}
                />
                {/* Front Image (Shown by Default) */}
                <img
                    src={product.images.front}
                    alt={`${product.title} Front View`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${isHovered ? 'opacity-0' : 'opacity-100'}`}
                    onError={(e) => {
                        e.currentTarget.src = `https://placehold.co/600x800/111/FFF?text=${product.id}+Front`;
                    }}
                />

                <div className="absolute top-4 right-4 flex flex-col gap-2">
                    {product.badges?.map(badge => (
                        <span key={badge} className="bg-black/70 backdrop-blur text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider rounded border border-gray-700">
                            {badge}
                        </span>
                    ))}
                </div>

                <div className="absolute bottom-4 left-0 w-full text-center pointer-events-none">
                    <span className={`inline-block px-3 py-1 bg-black/50 backdrop-blur rounded-full text-xs text-gray-300 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
                        Hover to see back
                    </span>
                </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">{product.title}</h3>
                <p className="text-gray-400 mb-6 text-sm flex-grow">
                    {product.description}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-800">
                    <span className={`text-2xl font-mono ${product.accentColor}`}>{product.price}</span>
                    <div className="transform scale-100 origin-right">
                        <button
                            onClick={() => startCheckout(product.stripePriceId)}
                            className="bg-white text-black font-bold py-2 px-6 rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2"
                        >
                            <ShoppingBag className="w-4 h-4" />
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const MerchSection: React.FC = () => {
    return (
        <section id="merch" className="py-24 bg-black relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/10 via-black to-black"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                        Official <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Merch</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Wear the resistance. Exclusive apparel representing the "Aliens" universe.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-sm text-gray-500 italic">
                        * Please ensure you select the correct size at checkout. Shipping calculated at checkout.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MerchSection;