'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function PricingComparison() {
    const { language } = useLanguage();

    const content = {
        en: {
            free: "Free Forever",
            premium: "Lifetime Premium",
            price: "$12.99",
            once: "one-time",
            features: [
                { name: "Autopilot Breath (Panic Button)", free: true, prem: true },
                { name: "Number Focus Game", free: true, prem: true },
                { name: "Educational Cards", free: "7 Essentials", prem: "Full Library" },
                { name: "Calming Audio", free: "Limited", prem: "Full Access" },
                { name: "Memory & Sequence Games", free: false, prem: true },
                { name: "Future Games & Features", free: false, prem: true },
                { name: "App Updates", free: false, prem: true }
            ]
        },
        es: {
            free: "Gratis Siempre",
            premium: "Premium Vitalicio",
            price: "12,99 €",
            once: "pago único",
            features: [
                { name: "Respiración Piloto Automático", free: true, prem: true },
                { name: "Juego de Enfoque Numérico", free: true, prem: true },
                { name: "Tarjetas Educativas", free: "7 Esenciales", prem: "Biblioteca Completa" },
                { name: "Audios Relajantes", free: "Limitado", prem: "Acceso Total" },
                { name: "Juegos de Memoria y Secuencia", free: false, prem: true },
                { name: "Futuros Juegos y Funciones", free: false, prem: true },
                { name: "Actualizaciones de la App", free: false, prem: true }
            ]
        }
    };

    // @ts-ignore
    const t = content[language] || content['en'];

    return (
        <div className="ios-glass overflow-hidden max-w-lg mx-auto">
            <div className="grid grid-cols-3 border-b border-white/5 bg-white/5">
                <div className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center">
                    Compare
                </div>
                <div className="p-4 text-center border-l border-white/5">
                    <div className="text-sm font-bold text-white mb-1">{t.free}</div>
                    <div className="text-xs text-slate-500">
                        $0
                    </div>
                </div>
                <div className="p-4 text-center border-l border-white/5 bg-blue-500/10 relative">
                    <div className="text-sm font-bold text-blue-300 mb-1">{t.premium}</div>
                    <div className="text-xs text-blue-200/70">
                        {t.price} <span className="opacity-50">/ {t.once}</span>
                    </div>
                </div>
            </div>

            {t.features.map((feat: any, i: number) => (
                <div key={i} className="grid grid-cols-3 border-b border-white/5 hover:bg-white/5 transition-colors text-xs md:text-sm">
                    <div className="p-3 pl-4 text-slate-300 font-medium flex items-center">
                        {feat.name}
                    </div>
                    <div className="p-3 border-l border-white/5 flex items-center justify-center text-slate-400">
                        {feat.free === true ? <i className="ph-fill ph-check-circle text-slate-400"></i> :
                            feat.free === false ? <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span> :
                                <span className="text-[10px] uppercase font-bold">{feat.free}</span>}
                    </div>
                    <div className="p-3 border-l border-white/5 flex items-center justify-center bg-blue-500/5">
                        {feat.prem === true ? <i className="ph-fill ph-check-circle text-blue-400"></i> :
                            feat.prem === false ? <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span> :
                                feat.prem}
                    </div>
                </div>
            ))}
        </div>
    );
}
