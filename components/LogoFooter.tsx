// components/LogoFooter.tsx
import React, { useState } from 'react';

export const LogoFooter: React.FC = () => {
    const [error, setError] = useState(false);

    // Si tu logo de footer está en /liaspa/logo-footer.png
    const footerLogoSrc = "/liaspa/logo-footer.png"; 

    if (error) {
        return (
            // Fallback para el footer (quizás color blanco o un tono claro)
            <div className="flex items-center gap-2">
                <span className="text-3xl md:text-4xl font-serif text-white tracking-wide" style={{ fontFamily: 'Marcellus, serif' }}>LiaSpa</span>
                <span className="text-xl text-brand-400">✦</span>
            </div>
        );
    }

    return (
        <img 
            src={footerLogoSrc} 
            alt="LiaSpa Logo Alternativo" 
            className="h-16 w-auto object-contain" // Puedes ajustar el tamaño aquí
            onError={() => setError(true)}
        />
    );
};