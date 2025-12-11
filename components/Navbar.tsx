import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { WHATSAPP_URL } from '../constants';

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', href: '#inicio' },
        { name: 'Servicios', href: '#servicios' },
        { name: 'Nosotros', href: '#nosotros' },
        // 'Contacto' removed as per request
    ];

    // Helper to handle smooth scroll without triggering default navigation
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault(); // CRITICAL: Prevents "connection refused" or page reload
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    // Determine visual state
    // The navbar should be solid white if user scrolled OR if the mobile menu is open.
    const isSolid = scrolled || isOpen;

    // Navbar Container Classes
    // If scrolled: Compact padding (py-2)
    // If open (but at top): Maintain large padding (py-6) but white bg
    // Default (top, closed): Transparent, large padding
    let navClasses = "fixed w-full z-50 transition-all duration-500 ";
    if (scrolled) {
        navClasses += "bg-white/95 backdrop-blur-md shadow-sm py-2";
    } else if (isOpen) {
        navClasses += "bg-white shadow-sm py-6"; 
    } else {
        navClasses += "bg-transparent py-6";
    }

    // Text & Button Colors based on solid state
    const textColorClass = isSolid ? 'text-slate-700 hover:text-brand-600' : 'text-white/90 hover:text-white';
    const mobileMenuIconClass = isSolid ? 'text-brand-900' : 'text-white';
    
    const buttonClass = isSolid
        ? 'bg-brand-800 text-white hover:bg-brand-900 shadow-lg' 
        : 'bg-white text-brand-900 hover:bg-brand-50 shadow-lg';

    return (
        <nav className={navClasses}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <Logo />
                    </div>
                    
                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`text-sm uppercase tracking-widest font-bold transition-colors ${textColorClass}`}
                                style={{ textShadow: (!isSolid && !scrolled) ? '0 2px 4px rgba(0,0,0,0.1)' : 'none' }}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a 
                            href={WHATSAPP_URL}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 inline-block ${buttonClass}`}
                        >
                            Reservar Turno
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`${mobileMenuIconClass} hover:opacity-80 focus:outline-none transition-colors`}
                            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {/* Positioned top-full to start exactly below the navbar */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-2xl absolute top-full left-0 w-full border-t border-brand-50 flex flex-col animate-fade-in-down z-40">
                    <div className="px-6 py-8 space-y-4 flex flex-col items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="block w-full text-center px-3 py-4 rounded-xl text-lg font-bold text-brand-900 hover:bg-brand-50 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                         <a 
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 w-full bg-brand-800 text-white px-5 py-4 rounded-xl text-lg font-bold shadow-lg text-center block"
                         >
                            Reservar Turno
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};