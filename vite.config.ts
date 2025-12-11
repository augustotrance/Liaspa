import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => { // Corregido: usa 'mode' para loadEnv
    const env = loadEnv(mode, '.', '');
    
    return {
        // 🚀 LÍNEA CLAVE: Configura el prefijo de ruta para GitHub Pages
        base: '/liaspa/', 
        // ------------------------------------------------------------------

        server: {
            port: 3000,
            host: '0.0.0.0',
        },
        plugins: [react()],
        define: {
            // Nota: Vite ya maneja el env.local, pero mantendremos esta configuración
            'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
            'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, '.'),
            }
        }
    };
});
