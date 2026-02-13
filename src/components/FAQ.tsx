'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function FAQ() {
    const { language } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = {
        en: [
            { q: "Does it work in Airplane Mode?", a: "Yes. CalmFlight is designed to be 100% offline. Once downloaded, you don’t need Wi-Fi or data to use any feature." },
            { q: "Can I lock my phone while listening?", a: "Yes. The audio player keeps running in the background so you can lock your screen and relax." },
            { q: "What’s included for free?", a: "You get the 'Autopilot' breathing tool, the 'Number Focus' game, and 7 essential educational cards to help you fly." },
            { q: "Is turbulence dangerous?", a: "Turbulence is uncomfortable but normal. Planes are built to withstand forces far greater than any turbulence you will ever experience." },
            { q: "Is my data private?", a: "We don’t collect any personal flight data. Everything stays on your device." },
            { q: "When can I download it?", a: "CalmFlight launches on the App Store on March 1st." }
        ],
        es: [
            { q: "¿Funciona en Modo Avión?", a: "Sí. CalmFlight está diseñado para ser 100% offline. Una vez descargado, no necesitas Wi-Fi ni datos." },
            { q: "¿Puedo bloquear el móvil mientras escucho?", a: "Sí. El audio sigue reproduciéndose en segundo plano para que puedas bloquear la pantalla y relajarte." },
            { q: "¿Qué incluye la versión gratis?", a: "Obtienes el Botón de Pánico completo (respiración + grounding), tarjetas educativas seleccionadas y el juego de 'Mates' gratis." },
            { q: "¿Es peligrosa la turbulencia?", a: "Es incómoda pero normal. Los aviones están construidos para soportar fuerzas muy superiores a cualquier turbulencia que puedas experimentar." },
            { q: "¿Por qué el despegue se siente tan intenso?", a: "Los motores necesitan máxima potencia para elevar el avión. El ruido y la vibración son señales de que el avión está haciendo su trabajo: subir." },
            { q: "¿Qué hago si tengo un ataque de pánico?", a: "Usa el 'Botón de Pánico' en la app. Te guiará en un ritmo de 2 minutos para bajar físicamente tu ritmo cardíaco." },
            { q: "¿Son privados mis datos?", a: "No recopilamos datos personales de vuelo. Todo se queda en tu dispositivo." },
            { q: "¿Cuándo puedo descargarlo?", a: "CalmFlight se lanza en la App Store el 1 de Marzo." }
        ],
        // Fallbacks for other languages can be added here or default to EN
    };

    // @ts-ignore
    const items = faqs[language] || faqs['en'];

    return (
        <div className="space-y-4 max-w-2xl mx-auto">
            {items.map((item: any, index: number) => (
                <div key={index} className="ios-glass overflow-hidden border border-white/5">
                    <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-white/5"
                    >
                        <span className="font-semibold text-sm pr-4">{item.q}</span>
                        <i className={`ph-bold ph-caret-down text-blue-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}></i>
                    </button>

                    <div
                        className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                    >
                        <div className="overflow-hidden">
                            <div className="p-5 pt-0 text-sm text-slate-400 leading-relaxed border-t border-white/5 mt-2">
                                {item.a}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
