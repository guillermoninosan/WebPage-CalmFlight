'use client';

import { useLanguage, LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Link from 'next/link';

function ReleasesContent() {
    const { language, t } = useLanguage();

    const text = {
        en: [
            { ver: "v1.0", date: "Released", title: "Live on App Store", desc: "Panic Button, Offline Mode, Calm Audio, and 4 Games (Math, Memory, Sequence)." },
            { ver: "v1.1", date: "In Development", title: "Turbulence Meter", desc: "Real-time G-Force monitor to prove stability during bumps." },
            { ver: "v1.2", date: "Future", title: "Flight Log & Expansion", desc: "Track flights, earn 'Fearless Flyer' Badges, and unlock new Games." }
        ],
        es: [
            { ver: "v1.0", date: "Publicado", title: "Disponible en App Store", desc: "Botón de Pánico, Juegos Cognitivos, Datos de Vuelo." },
            { ver: "v1.1", date: "En Desarrollo", title: "Medidor de Turbulencia", desc: "Monitor de Fuerza-G, Contenido de Aviación Ampliado." },
            { ver: "v1.2", date: "Futuro", title: "Diario y Expansión", desc: "Registra vuelos, gana medallas 'Sin Miedo' y desbloquea nuevos juegos." }
        ],
        fr: [
            { ver: "v1.0", date: "Disponible", title: "En Ligne sur l'App Store", desc: "Bouton Panique, Jeux Cognitifs, Faits sur le Vol." },
            { ver: "v1.1", date: "En Développement", title: "Mètre de Turbulence", desc: "Moniteur de Force-G, Contenu Aéronautique Étendu." },
            { ver: "v1.2", date: "Futur", title: "Journal et Extension", desc: "Suivez vos vols, gagnez des badges et débloquez de nouveaux jeux." }
        ],
        de: [
            { ver: "v1.0", date: "Veröffentlicht", title: "Im App Store", desc: "Panik-Button, Kognitive Spiele, Flugfakten." },
            { ver: "v1.1", date: "In Entwicklung", title: "Turbulenz-Meter", desc: "G-Kraft-Monitor, Erweiterte Luftfahrtinhalte." },
            { ver: "v1.2", date: "Zukunft", title: "Tagebuch & Erweiterung", desc: "Flüge tracken, 'Angstfrei'-Abzeichen verdienen und neue Spiele." }
        ]
    };

    // @ts-ignore
    const items = text[language] || text['en'];

    return (
        <>
            <Navbar />
            <main className="pt-32 px-6 max-w-3xl mx-auto pb-20">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold mb-2">{t('page_title')}</h1>
                    <p className="text-slate-400 text-sm">{t('page_subtitle')}</p>
                </div>

                <div className="relative space-y-8">
                    <div className="timeline-line hidden md:block"></div>
                    {/* @ts-ignore */}
                    {items.map((v, index) => {
                        const isLatest = index === 0;
                        let borderClass = 'border-white/5';
                        let tag = null;

                        if (index === 0) {
                            borderClass = 'border-green-500/50 shadow-lg shadow-green-900/20';
                            tag = <div className="absolute -top-3 -right-3 bg-green-600 text-white text-[10px] px-2 py-1 rounded-full font-bold shadow-lg">LIVE</div>;
                        } else if (index === 1) {
                            borderClass = 'border-blue-500/30 border-dashed';
                            tag = <div className="absolute -top-3 -right-3 bg-blue-600/80 text-white text-[10px] px-2 py-1 rounded-full font-bold shadow-lg">DEV</div>;
                        }

                        return (
                            <div key={index} className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-12 roadmap-item">
                                <div className="md:w-32 flex-shrink-0 flex md:flex-col items-center md:items-end gap-2 md:gap-1 pt-2">
                                    <div className={`text-sm font-bold ${isLatest ? 'text-green-400' : index === 1 ? 'text-blue-400' : 'text-slate-500'}`}>{v.ver}</div>
                                    <div className="text-xs text-slate-400 uppercase tracking-wider">{v.date}</div>
                                </div>
                                <div className={`relative flex-1 ios-glass p-6 border ${borderClass}`}>
                                    {tag}
                                    <h3 className="text-lg font-bold text-white mb-2">{v.title}</h3>
                                    <p className="text-sm text-slate-400 leading-relaxed">{v.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 text-center">
                    <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold text-sm">
                        <i className="ph-bold ph-arrow-left"></i>
                        <span>{t('back_home')}</span>
                    </Link>
                </div>
            </main>
        </>
    );
}

export default function ReleasesPage() {
    return (
        <LanguageProvider>
            <ReleasesContent />
        </LanguageProvider>
    );
}
