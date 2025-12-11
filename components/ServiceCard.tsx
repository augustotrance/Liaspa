import React from 'react';
import { ServiceCategory } from '../types';
import { Hand, Footprints, Eye, Sparkles, User, Moon, Sun, Activity, Check, Heart, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../constants';

const iconMap: Record<string, React.ReactNode> = {
    Hand: <Hand className="w-6 h-6" />,
    Footprints: <Footprints className="w-6 h-6" />,
    Eye: <Eye className="w-6 h-6" />,
    Sparkles: <Sparkles className="w-6 h-6" />,
    Accessibility: <User className="w-6 h-6" />,
    Moon: <Moon className="w-6 h-6" />,
    Sun: <Sun className="w-6 h-6" />,
    Heart: <Heart className="w-6 h-6" />,
};

interface Props {
    category: ServiceCategory;
    index: number;
}

export const ServiceCard: React.FC<Props> = ({ category, index }) => {
    const isReversed = index % 2 !== 0;

    // Alternating organic border radii for images
    const imageRadius = isReversed 
        ? 'rounded-tl-[3rem] rounded-br-[5rem] rounded-tr-[1rem] rounded-bl-[1rem]' 
        : 'rounded-tr-[3rem] rounded-bl-[5rem] rounded-tl-[1rem] rounded-br-[1rem]';

    return (
        <section className="relative w-full py-16 md:py-24">
             {/* Dynamic background decoration */}
            <div className={`absolute top-0 ${isReversed ? 'right-0' : 'left-0'} w-1/2 h-full bg-gradient-to-b from-brand-50 to-transparent -z-10 rounded-full blur-3xl opacity-60`}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                    
                    {/* IMAGE COLUMN - Organic Shape */}
                    <div className="w-full lg:w-1/2 relative group">
                        <div className={`absolute top-4 ${isReversed ? '-left-4' : '-right-4'} w-full h-full border-2 border-brand-200 ${imageRadius} z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2`}></div>
                        
                        <div className={`relative z-10 overflow-hidden shadow-2xl ${imageRadius} aspect-[4/5] md:aspect-[16/11]`}>
                            {/* Performance Optimization: Lazy loading and async decoding */}
                            <img 
                                src={category.image} 
                                alt={`${category.title} - Tratamiento en LiaSpa`}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-brand-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>

                        {/* Floating Icon Badge */}
                        <div className={`absolute -bottom-6 ${isReversed ? 'right-8' : 'left-8'} z-20 bg-white p-5 rounded-full shadow-xl text-brand-600 animate-blob border border-brand-50`}>
                            {iconMap[category.iconName] || <Activity className="w-8 h-8" />}
                        </div>
                    </div>

                    {/* CONTENT COLUMN */}
                    <div className="w-full lg:w-1/2">
                        <div className="space-y-6">
                            <div className="flex flex-col gap-2">
                                {/* Contrast fix: brand-600 is better than 500 on light bg */}
                                <span className="text-brand-600 font-bold tracking-widest uppercase text-xs">
                                    Experiencia LiaSpa
                                </span>
                                <h3 className="text-4xl md:text-5xl font-serif text-brand-900 leading-tight">
                                    {category.title}
                                </h3>
                            </div>
                            
                            <p className="text-lg text-slate-500 font-light leading-relaxed">
                                {category.description}
                            </p>

                            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-brand-50">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                    {category.items.map((item, idx) => (
                                        <div key={idx} className="flex flex-col gap-1">
                                            <h4 className="font-semibold text-brand-800 text-base flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-brand-400"></span>
                                                {item.name}
                                            </h4>
                                            <p className="text-sm text-slate-500 pl-4 leading-snug">
                                                {item.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={`pt-4 flex ${isReversed ? 'justify-end' : 'justify-start'}`}>
                                <a 
                                    href={getWhatsAppUrl(`¡Hola LiaSpa! Quisiera consultar disponibilidad para ${category.title}.`)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-2 text-brand-700 font-bold hover:text-brand-600 transition-colors" 
                                    aria-label={`Consultar sobre ${category.title}`}
                                >
                                    Consultar disponibilidad
                                    <span className="bg-brand-100 p-1.5 rounded-full group-hover:bg-brand-200 transition-colors text-brand-700">
                                        <ArrowRight className="w-4 h-4" />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
            {/* Divider Line (Visual Separator between items, but soft) */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-brand-100 to-transparent"></div>
        </section>
    );
};