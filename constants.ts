import { ServiceCategory } from './types';

export const APP_NAME = "LiaSpa";
export const APP_TAGLINE = "Renacer, Bienestar y Belleza";

// Centralized WhatsApp Configuration
const WA_PHONE = "541112345678";
const DEFAULT_MESSAGE = "¡Hola LiaSpa! Quisiera consultar por turnos y servicios.";

export const getWhatsAppUrl = (message: string = DEFAULT_MESSAGE) => {
    return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message)}`;
};

export const WHATSAPP_URL = getWhatsAppUrl();

export const SERVICE_DATA: ServiceCategory[] = [
    {
        id: "rituales",
        title: "Rituales LiaSpa",
        iconName: "Heart",
        description: "Experiencias integrales de bienestar diseñadas para renovar tu energía por completo.",
        image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070&auto=format&fit=crop",
        items: [
            {
                name: "Renacer LiaSpa",
                description: "Nuestro ritual insignia. Una experiencia inmersiva que combina limpieza profunda, exfoliación renovadora e hidratación intensa para todo el cuerpo."
            }
        ]
    },
    {
        id: "manos",
        title: "Manos y Uñas",
        iconName: "Hand",
        description: "Un mimo esencial para el cuidado de tus manos.",
        image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=2070&auto=format&fit=crop",
        items: [
            {
                name: "Manicuría Tradicional",
                description: "Limado, definición de forma, cuidado de cutículas, pulido suave, hidratación profunda y esmaltado del color de tu elección."
            },
            {
                name: "Manicuría Masculina",
                description: "Servicio enfocado en la presentación impecable, limpieza y salud de las manos, proyectando una imagen profesional."
            },
            {
                name: "Esmaltado Semipermanente",
                description: "Color vibrante, brillo superior y máxima duración. Acabado perfecto que mantiene tus manos prolijas por un período extendido."
            },
            {
                name: "Remover Semipermanente",
                description: "Retiro seguro y delicado del esmalte, preservando la salud de la uña natural."
            },
            {
                name: "Kapping de Uñas en Gel",
                description: "Tratamiento protector que refuerza la uña natural y maximiza la vida útil del esmalte, aportando resistencia."
            },
            {
                name: "Uñas Esculpidas en Gel",
                description: "Extensión del largo deseado mediante gel constructor, con un acabado natural y duradero."
            },
            {
                name: "Decoración en Uñas / Nail Art",
                description: "Diseños personalizados combinando colores y texturas para un estilo único."
            },
            {
                name: "Parafina para las manos",
                description: "Tratamiento altamente nutritivo y relajante. Restaura suavidad, optimiza la circulación y alivia la rigidez articular."
            }
        ]
    },
    {
        id: "pies",
        title: "Pies",
        iconName: "Footprints",
        description: "Un descanso total y revitalizante para tus pies.",
        image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop",
        items: [
            {
                name: "Belleza de Pies",
                description: "Perfeccionamiento de uñas, cuidado de cutículas, masaje hidratante y esmaltado (tradicional o semipermanente)."
            },
            {
                name: "Pedicuría Completa",
                description: "Cuidado integral con hidratación profunda y masaje para aliviar el cansancio acumulado."
            },
            {
                name: "Uñas Encarnadas",
                description: "Técnicas especializadas para aliviar molestias, limpieza y corrección utilizando métodos seguros."
            },
            {
                name: "Reconstrucción de una uña",
                description: "Restauración de forma y estética utilizando gel para un acabado resistente y natural."
            }
        ]
    },
    {
        id: "cejas",
        title: "Cejas y Mirada",
        iconName: "Eye",
        description: "Diseño y definición que realza la belleza natural de tu mirada.",
        image: "https://images.unsplash.com/photo-1587909209111-5097ee578ec3?q=80&w=2070&auto=format&fit=crop",
        items: [
            {
                name: "Perfilado de Cejas",
                description: "Diseño en armonía con tu rostro combinando hilo y pinzas. Opción de añadir color."
            },
            {
                name: "Perfilado de Cejas Masculino",
                description: "Resultado limpio y equilibrado para una apariencia cuidada y profesional."
            },
            {
                name: "Henna de Cejas",
                description: "Tinte natural que intensifica y uniformiza el color con un acabado duradero."
            },
            {
                name: "Microblading",
                description: "Técnica semipermanente pelo a pelo para definir y dar forma con efecto natural y duradero."
            }
        ]
    },
    {
        id: "facial",
        title: "Cosmetología Facial",
        iconName: "Sparkles",
        description: "Tratamientos avanzados para la salud de tu piel.",
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop",
        items: [
            {
                name: "Higiene Profunda Facial",
                description: "Elimina impurezas y células muertas, dejando la piel limpia, suave y luminosa."
            },
            {
                name: "Extracción de Comedones",
                description: "Remoción segura de puntos negros, minimizando irritaciones."
            },
            {
                name: "Hidratación Profunda",
                description: "Nutre intensamente mejorando elasticidad. Ideal para pieles secas o fatigadas."
            },
            {
                name: "Tratamientos Especiales",
                description: "Opciones específicas para: Acné, Tensado, Pieles Maduras, Pieles Sensibles, Anti-age, Párpados."
            },
            {
                name: "Tecnologías Avanzadas",
                description: "Punta de Diamante, Alta Frecuencia, Fototerapia LED, Dermaplaning, Lifting Japonés, Hilos Tensores."
            }
        ]
    },
    {
        id: "corporal",
        title: "Tratamientos Corporales",
        iconName: "Accessibility",
        description: "Renovación de tu piel y bienestar corporal.",
        image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop",
        items: [
            {
                name: "Exfoliación en Axilas",
                description: "Mejora apariencia y tono, unificando la textura cutánea."
            },
            {
                name: "Camuflaje de Estrías",
                description: "Micropigmentación y maquillaje correctivo para atenuar estrías visiblemente."
            },
            {
                name: "Pulido Corporal + Hidratación",
                description: "Ritual completo de renovación: pulido, hidratación profunda y masaje relajante."
            },
            {
                name: "Depilación Definitiva Láser Soprano",
                description: "Eliminación progresiva del vello para una piel suave. Apta para ambos sexos. (8 a 12 sesiones estimadas)."
            }
        ]
    },
    {
        id: "relax",
        title: "Terapias Relajantes",
        iconName: "Moon",
        description: "Espacio de desconexión total para cuerpo y mente.",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop",
        items: [
            {
                name: "Reflexología",
                description: "Equilibrio a través de presión en puntos específicos de los pies."
            },
            {
                name: "Masajes Relajantes",
                description: "Movimientos suaves que alivian tensión y estrés, mejorando la circulación."
            },
            {
                name: "Masajes Descontracturantes",
                description: "Maniobras firmes para liberar contracturas y dolor muscular, enfocado en espalda y cuello."
            }
        ]
    },
    {
        id: "sol",
        title: "Sol Pleno",
        iconName: "Sun",
        description: "Bronceado saludable sin exposición solar.",
        image: "https://images.unsplash.com/photo-1551529834-525807d6b4f3?q=80&w=2070&auto=format&fit=crop",
        items: [
            {
                name: "Bronceado Sol Pleno",
                description: "Sistema de pincel de aire para un tono dorado y uniforme. Fórmula hidratante, vegana y libre de parabenos."
            }
        ]
    }
];

// Provide this context to the AI
export const SPA_CONTEXT_FOR_AI = `
Eres la recepcionista virtual inteligente de "LiaSpa". Tu objetivo es ayudar a los clientes a entender los servicios, precios y beneficios.
El tono es amable, relajante, profesional y sofisticado.

Aquí está el catálogo de servicios detallado:

1. RENACER LIASPA: Ritual de bienestar, limpieza, exfoliación e hidratación.
2. MANOS:
   - Manicuría tradicional y masculina.
   - Esmaltado Semipermanente (larga duración, brillo).
   - Kapping (refuerza uña natural).
   - Esculpidas en Gel (extensión).
   - Parafina (hidratación profunda para manos secas).
3. PIES:
   - Belleza de pies y Pedicuría completa (incluye masajes).
   - Tratamiento de uñas encarnadas y reconstrucción.
4. CEJAS:
   - Perfilado (con hilo/pinza).
   - Henna (tinte natural).
   - Microblading (pelo a pelo, semipermanente).
5. FACIAL:
   - Higiene profunda, extracción de comedones.
   - Tratamientos para acné, anti-age, pieles sensibles, párpados.
   - Aparatología: Punta de Diamante, Alta frecuencia, Fototerapia LED, Dermaplaning.
6. CORPORAL:
   - Exfoliación axilas (aclarado).
   - Camuflaje de estrías.
   - Pulido corporal + hidratación.
   - Depilación Láser Soprano (ambos sexos, aprox 8-12 sesiones).
7. RELAX:
   - Reflexología (pies).
   - Masajes relajantes y descontracturantes.
8. BRONCEADO:
   - Sistema "Sol Pleno": Bronceado sin sol, pincel de aire, natural, vegano.

Responde preguntas cortas y concisas. Si preguntan por turnos, diles que pueden agendar por WhatsApp o en el local.
`;