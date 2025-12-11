import { GoogleGenAI } from "@google/genai";
import { SPA_CONTEXT_FOR_AI } from '../constants';

// Initialize Gemini AI
// NOTE: In a real production app, this call should ideally happen via a backend proxy to hide the Key.
// However, per instructions, we use process.env.API_KEY directly here for the frontend demo.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendMessageToGemini = async (userMessage: string, history: {role: string, parts: {text: string}[]}[] = []) => {
  try {
    const model = 'gemini-2.5-flash';
    
    const contents = [
        {
            role: 'user',
            parts: [{ text: SPA_CONTEXT_FOR_AI }] // Pre-prompt context
        },
        {
            role: 'model',
            parts: [{ text: "Entendido. Soy la asistente virtual de LiaSpa. Estoy lista para responder consultas sobre nuestros tratamientos de belleza y bienestar de manera amable y cordial." }]
        },
        ...history,
        {
            role: 'user',
            parts: [{ text: userMessage }]
        }
    ];

    const response = await ai.models.generateContent({
      model: model,
      contents: contents,
      config: {
        temperature: 0.7,
        maxOutputTokens: 300, 
      }
    });

    return response.text || "Lo siento, tuve un momento de confusión. ¿Podrías reformular tu pregunta?";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Disculpa, en este momento no puedo procesar tu solicitud. Por favor intenta más tarde o contáctanos por WhatsApp.";
  }
};