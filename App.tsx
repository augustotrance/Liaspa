import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServiceCard } from './components/ServiceCard';
import { WhatsAppButton } from './components/WhatsAppButton';
import { SERVICE_DATA, getWhatsAppUrl } from './constants';
import { MapPin, Phone, Instagram, Clock, Mail } from 'lucide-react';
import { Logo } from './components/Logo';

function App() {
  
  // Helper to handle smooth scroll without triggering default navigation
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
      }
  };

  return (
    <div className="min-h-screen bg-sand-50 font-sans selection:bg-brand-200 selection:text-brand-900">
      <Navbar />
      
      <main>
        <Hero />

        {/* Introduction Section - Seamlessly connected from Hero wave */}
        <section id="nosotros" className="pt-24 pb-32 bg-brand-50 relative">
            <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-serif text-brand-900 mb-8 leading-tight">
                    Un santuario urbano <br/> en Buenos Aires
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed font-light mb-16 max-w-3xl mx-auto">
                    En <strong>LiaSpa</strong>, redefinimos el concepto de centro de estética integral. No se trata solo de belleza, sino de crear un momento de pausa en tu día. 
                    Nuestro equipo experto en manicuría, masajes y tratamientos faciales fusiona técnicas tradicionales con tecnología de vanguardia para restaurar tu equilibrio natural.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { 
                            icon: <Clock className="w-8 h-8" />, 
                            title: "Atención Personalizada", 
                            text: "Sin prisas. Dedicamos el tiempo necesario a cada turno de manicuría, pedicuría y masajes.",
                            url: "https://wa.me/+541169283645?text=Me%20interesa%20la%20atención%20personalizada." // URL de WhatsApp
                        },
                        { 
                            icon: <MapPin className="w-8 h-8" />, 
                            title: "Ubicación", 
                            text: "Fácil acceso en pleno centro, diseñado para desconectar del ruido de la ciudad.",
                            url: "https://maps.app.goo.gl/iSSiQ2tdyQuJv5FL8" // URL de Maps o Instagram
                        },
                        { 
                            icon: <Instagram className="w-8 h-8" />, 
                            title: "Instagram", 
                            text: "Seguinos para tips diarios de skincare, cuidado de uñas y bienestar.",
                            url: "https://www.instagram.com/liaspa_manos_y_pies/" // URL de Instagram
                        }
                    ].map((item, i) => (
                        <a 
                            key={i} 
                            href={item.url} // Usamos la nueva URL
                            target="_blank" // Abrir en una nueva pestaña
                            rel="noopener noreferrer" 
                            className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-brand-100/50 block cursor-pointer" // Añadimos 'block' para que <a> ocupe el espacio
                        >
                            {/* ... Contenido de la tarjeta ... */}
                            <div className="w-16 h-16 bg-brand-50 rounded-2xl rounded-tr-[2rem] flex items-center justify-center mx-auto mb-6 text-brand-600">
                                {item.icon}
                            </div>
                            <h4 className="font-serif font-bold text-xl text-brand-900 mb-3">{item.title}</h4>
                            <p className="text-sm text-slate-500 leading-relaxed">{item.text}</p>
                        </a>
                    ))}
                </div>
            </div>

            {/* Transition to Services: Wave */}
            <div className="wave-bottom text-white">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24 fill-current">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
                </svg>
            </div>
        </section>

        {/* Services Section Header */}
        <section id="servicios" className="pt-20 bg-white text-center">
            <div className="max-w-3xl mx-auto px-4">
                {/* Fixed Contrast: text-brand-600 is darker/more readable than 500 on white */}
                <span className="text-brand-600 font-bold tracking-widest uppercase text-xs mb-2 block">Nuestro Menú</span>
                <h2 className="text-5xl md:text-6xl font-serif text-brand-900 mb-6">Experiencias y Tratamientos</h2>
                <div className="w-24 h-1.5 bg-brand-200 mx-auto rounded-full opacity-50"></div>
            </div>
        </section>

        {/* Dynamic Service List */}
        <div className="flex flex-col w-full bg-white pb-20">
            {SERVICE_DATA.map((category, index) => (
                <ServiceCard key={category.id} category={category} index={index} />
            ))}
        </div>

        {/* Banner CTA - Organic Shape */}
        <section className="relative py-32 bg-brand-800 text-center text-white overflow-hidden">
             {/* Top decorative wave */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] fill-white">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                </svg>
            </div>

            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto px-4">
                <h2 className="text-5xl md:text-6xl font-serif mb-8">El Regalo del Bienestar</h2>
                <p className="text-xl text-brand-100 mb-12 font-light max-w-2xl mx-auto">
                    Nuestras Gift Cards son más que un presente; son una invitación a detener el tiempo. 
                </p>
                <a 
                    href={getWhatsAppUrl("¡Hola LiaSpa! Quisiera solicitar información sobre las Gift Cards.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-brand-900 px-12 py-4 rounded-full font-bold text-lg hover:bg-brand-50 transition-all transform hover:scale-105 shadow-2xl cursor-pointer"
                >
                    Solicitar Gift Card
                </a>
            </div>
        </section>

        {/* Footer / Contact */}
        {/* Contrast Fix: Used brand-950 for deeper background and text-brand-200/300 for clear text */}
        <footer id="contacto" className="bg-brand-950 text-brand-200 pt-24 pb-12 border-t border-brand-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="inline-block">
                            <Logo />
                        </div>
                        <p className="text-sm leading-relaxed max-w-xs text-brand-300">
                            Tu refugio personal para restaurar el cuerpo y la mente. 
                            Profesionalismo y calidez en cada detalle.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-serif text-xl mb-6">Menú Rápido</h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a 
                                    href="#inicio" 
                                    onClick={(e) => handleNavClick(e, 'inicio')}
                                    className="hover:text-white transition-colors flex items-center gap-2"
                                >
                                    <span className="w-1.5 h-1.5 bg-brand-500 rounded-full"></span>Inicio
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#servicios" 
                                    onClick={(e) => handleNavClick(e, 'servicios')}
                                    className="hover:text-white transition-colors flex items-center gap-2"
                                >
                                    <span className="w-1.5 h-1.5 bg-brand-500 rounded-full"></span>Servicios
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#nosotros" 
                                    onClick={(e) => handleNavClick(e, 'nosotros')}
                                    className="hover:text-white transition-colors flex items-center gap-2"
                                >
                                    <span className="w-1.5 h-1.5 bg-brand-500 rounded-full"></span>Nosotros
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-serif text-xl mb-6">Contacto</h4>
                        <ul className="space-y-5 text-sm">
                            <li className="flex items-start gap-4">
                                <div className="bg-brand-900/50 p-2.5 rounded-xl text-brand-400">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <span className="text-brand-200">Caseros 24, Haedo<br/>Provincia de Buenos Aires, Argentina</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="bg-brand-900/50 p-2.5 rounded-xl text-brand-400">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <span className="text-brand-200">+54 11 6928-3645</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="bg-brand-900/50 p-2.5 rounded-xl text-brand-400">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <span className="text-brand-200">liaspamanosypie@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 className="text-white font-serif text-xl mb-6">Horarios de Atención</h4>
                        <div className="bg-brand-900/40 rounded-3xl p-6 border border-brand-800/50 backdrop-blur-sm">
                            <ul className="space-y-3 text-sm">
                                <li className="flex justify-between border-b border-brand-800/50 pb-2">
                                    <span className="text-brand-300">Lun - Vie</span>
                                    <span className="text-white font-medium">08:00 - 18:30</span>
                                </li>
                                <li className="flex justify-between border-b border-brand-800/50 pb-2">
                                    <span className="text-brand-300">Sábados</span>
                                    <span className="text-white font-medium">08:00 - 14:00</span>
                                </li>
                                <li className="flex justify-between pt-1">
                                    <span className="text-brand-300">Domingos</span>
                                    <span className="text-brand-400 font-medium">Cerrado</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="border-t border-brand-900 mt-20 pt-8 text-center text-xs text-brand-400 flex flex-col md:flex-row justify-between items-center">
                    <p>
                        &copy; {new Date().getFullYear()} LiaSpa. Diseñado por 
                        <a 
                            href="https://www.ejemplo.com/crea-studio-design" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="font-bold hover:text-white transition-colors"
                        >
                            CREA Studio Design
                        </a>
                        .
                    </p>
                    <div className="flex flex-col gap-2 mt-4 md:mt-0 md:items-end"> 
                        <div className="flex gap-6 justify-center md:justify-end">
                            <a href="/politicas de privacidad.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Política de Privacidad</a>
                            <a href="/terminos y condiciones.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Términos y Condiciones</a>
                        </div>
        
                        <p className="text-center md:text-right">
                            Al contactarnos por WhatsApp aceptás nuestra Política de Privacidad y los términos de uso de WhatsApp
                        </p>
                    </div>
                </div>
            </div>
        </footer>
      </main>
      
      <WhatsAppButton />
    </div>
  );
}

export default App;