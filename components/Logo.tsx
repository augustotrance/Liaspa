import React, { useState } from 'react';

export const Logo: React.FC = () => {
    const [error, setError] = useState(false);

    if (error) {
        return (
             <div className="flex items-center gap-2">
                <span className="text-3xl md:text-4xl font-serif text-brand-800 tracking-wide" style={{ fontFamily: 'Higuera, serif' }}>LiaSpa</span>
                <span className="text-xl text-brand-400">✦</span>
            </div>
        );
    }

    return (
        <img 
            src="/liaspa/logo.png" 
            alt="LiaSpa Logo" 
            className="h-16 w-auto object-contain"
            onError={() => setError(true)}
        />
    );
};