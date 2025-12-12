import React from 'react';
import { ArrowRight } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

export const Hero: React.FC = () => {

    const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault(); // CRITICAL: Prevents browser from treating this as a URL change
        const element = document.getElementById('servicios');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="inicio" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-brand-900 pt-20 pb-32 md:pb-40">
            {/* Background Image with Dark Overlay for Contrast */}
            <div className="absolute inset-0 z-0">
                {/* 
                    LCP Optimization: 
                    1. fetchpriority="high" signals browser to load this immediately.
                    2. Explicit alt text with keywords (Spa, Buenos Aires).
                    3. No loading="lazy" here as it is above the fold.
                */}
                <img 
                    src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop" 
                    alt="Interior relajante de LiaSpa, centro de estética y bienestar en Buenos Aires" 
                    className="w-full h-full object-cover"
                    fetchPriority="high"
                />
                {/* 
                   Contrast Fix:
                   Using a stronger gradient from dark blue to semi-transparent dark blue.
                   This ensures white text is always readable.
                */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-900/70 to-brand-900/40"></div>
                <div className="absolute inset-0 bg-black/20"></div> {/* Extra tint layer */}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center md:text-left pt-24 lg:pt-32">
                <div className="md:w-3/4 lg:w-1/2">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 animate-fade-in-up">
                        <span className="text-white font-bold tracking-[0.2em] uppercase text-xs">
                            Bienvenida a tu refugio
                        </span>
                    </div>
                    
                    {/* Typography: White for maximum contrast on dark overlay */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] mb-8 animate-fade-in-up drop-shadow-lg" style={{ animationDelay: '0.1s' }}>
                        Renacer <br/>
                        <span className="italic font-light text-brand-200">LiaSpa</span>
                    </h1>
                    
                    <p className="text-lg md:text-xl text-brand-100 mb-10 leading-relaxed font-light animate-fade-in-up max-w-lg drop-shadow-md" style={{ animationDelay: '0.2s' }}>
                        Un ritual de bienestar donde combinamos la estética profesional con la relajación profunda. Manos, pies, rostro y cuerpo en perfecta armonía.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-5 animate-fade-in-up justify-center md:justify-start" style={{ animationDelay: '0.3s' }}>
                        <a 
                            href="#servicios" 
                            onClick={handleScrollToServices}
                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-900 text-base font-bold rounded-tl-3xl rounded-br-3xl hover:rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
                        >
                            Explorar Servicios
                        </a>
                        <a 
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer" 
                            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 backdrop-blur-sm text-white text-base font-bold rounded-tr-3xl rounded-bl-3xl hover:rounded-xl hover:bg-white hover:text-brand-900 transition-all duration-300"
                        >
                            Contactar <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Organic Bottom Wave - Rotated to fill bottom and merge with next section (brand-50) */}
            <div className="wave-bottom text-brand-50">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24 fill-current transform rotate-180">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                </svg>
            </div>
        </section>
    );
};