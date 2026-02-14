'use client';

import { useState, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { toBlob } from 'html-to-image';
import { saveAs } from 'file-saver';
import ShareModal from './ShareModal';

export default function CalmCards() {
    const { language } = useLanguage();
    const [copiedId, setCopiedId] = useState<number | null>(null);
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const [activeCard, setActiveCard] = useState<any>(null);
    const [isGenerating, setIsGenerating] = useState(false);

    const shareRef = useRef<HTMLDivElement>(null);

    const handleCopyText = () => {
        if (!activeCard) return;
        navigator.clipboard.writeText(activeCard.snippet).then(() => {
            setCopiedId(activeCard.id);
            setTimeout(() => setCopiedId(null), 2000);
            setIsShareModalOpen(false);
        });
    };

    const handleCopyLink = () => {
        if (!activeCard) return;
        const url = `${window.location.origin}${window.location.pathname}#card-${activeCard.id}`;
        navigator.clipboard.writeText(url).then(() => {
            // reused copied state for visual feedback if needed, or simple alert/toast
            // For now, let's just close modal
            setIsShareModalOpen(false);
        });
    };

    const generateImage = async (card: any) => {
        if (!shareRef.current) return null;

        // Wait a tick for state to update if we just set activeCard
        // But better to pass card data explicitly or ensure render
        // We will force a render with the correct data before capturing

        try {
            const blob = await toBlob(shareRef.current, {
                cacheBust: true,
                width: 1080,
                height: 1350,
                skipFonts: true, // Fixes CORS "cssRules" error by not trying to embed external fonts
                style: {
                    display: 'flex', // Make it visible during capture
                    visibility: 'visible',
                    position: 'static',
                    transform: 'none',
                }
            });
            return blob;
        } catch (err) {
            console.error('Failed to generate image', err);
            return null;
        }
    };

    const handleShare = async (card: any) => {
        setActiveCard(card);
        setIsGenerating(true);

        // Allow React to render the hidden card with new data
        await new Promise(resolve => setTimeout(resolve, 100));

        const blob = await generateImage(card);
        const url = `${window.location.origin}${window.location.pathname}#card-${card.id}`;

        // Native Share
        if (blob && navigator.share && navigator.canShare && navigator.canShare({ files: [new File([blob], 'card.png', { type: 'image/png' })] })) {
            try {
                const file = new File([blob], 'calmflight-card.png', { type: 'image/png' });
                await navigator.share({
                    title: card.title,
                    text: card.snippet,
                    url: url,
                    files: [file]
                });
                setIsGenerating(false);
                return;
            } catch (err) {
                console.log('Share failed or cancelled', err);
                // Fallthrough to modal if share fails (e.g. user cancelled? No, only if API restricted)
                // Actually usually if user cancels we stop. 
                // We'll only fallback if share API is NOT supported or throws specific error?
                // Use simple check:
            }
        }

        // Fallback: Open Modal (Native text share is also an option but we want image share primarily)
        // If we can't share image natively, we open modal to let user download
        setIsGenerating(false);
        setIsShareModalOpen(true);
    };

    const handleDownload = async () => {
        if (!activeCard) return;
        setIsGenerating(true);
        const blob = await generateImage(activeCard);
        if (blob) {
            saveAs(blob, `calmflight-${activeCard.title.toLowerCase().replace(/\s+/g, '-')}.png`);
        }
        setIsGenerating(false);
        setIsShareModalOpen(false);
    };

    const cardsData = {
        en: [
            { id: 1, title: "How a plane stays in the air", text: "It's not magic, it's physics. Wings push air down, creating an upward force (lift). As long as the plane moves forward, it physically cannot fall.", snippet: "Planes stay up because wings push air down. As long as we move forward, we physically cannot fall." },
            { id: 2, title: "How pilots steer the plane", text: "Pilots use the yoke and pedals to move flaps on the wings and tail. It’s like steering a car, but in 3D—banking left or right to turn smoothly.", snippet: "Pilots steer by moving flaps on the wings. It's fluid and controlled, like banking a bike into a turn." },
            { id: 3, title: "How planes know where to go", text: "The sky has invisible highways defined by GPS waypoints. The flight computer follows this digital track with precision, keeping us exactly on course.", snippet: "The sky has invisible GPS highways. The plane follows a precise digital track from takeoff to landing." },
            { id: 4, title: "Why Airplane Mode is required", text: "It's mostly to stop interference with ground cell towers, not the plane itself. Your phone won't cause the plane to malfunction.", snippet: "Airplane mode is mainly to protect ground cell towers, not the plane. Your phone won't confuse the aircraft." },
            { id: 5, title: "Takeoff Noises", text: "That 'clunk-whir' sound right after liftoff? That's just the landing gear retracting into the belly. It means we are clean and climbing.", snippet: "That loud 'clunk' after takeoff? It's just the wheels tucking away properly. We are clean and climbing." },
            { id: 6, title: "Oxygen Masks", text: "They drop if cabin pressure changes. You have plenty of time to put them on. It’s a standard backup system, purely for safety.", snippet: "Oxygen masks are a backup system. If they drop, you have plenty of time to put yours on and breathe normally." },
            { id: 7, title: "Turbulence", text: "Turbulence is like a boat on waves. The air isn't thin; it's supporting the plane from all sides. You are safe, just bumpy.", snippet: "Turbulence is uncomfortable but safe. The air supports the plane like water supports a boat." },
            { id: 8, title: "Why flying is so safe", text: "Aviation is the safest transport mode because of redundancy. Every critical system has 2-3 backups, and pilots train constantly for rare events.", snippet: "Flying is safe because of redundancy. Every system has backups, and pilots are trained for every scenario." }
        ],
        es: [
            { id: 1, title: "Cómo se sostiene el avión", text: "No es magia, es física. Las alas empujan el aire hacia abajo, creando fuerza hacia arriba.", snippet: "El avión se sostiene porque las alas empujan el aire abajo. Mientras avancemos, no podemos caer." },
            { id: 2, title: "Cómo pilotan los pilotos", text: "Los pilotos usan los mandos para mover alerones en las alas. Es como conducir, pero en 3D.", snippet: "Los pilotos dirigen moviendo alerones en las alas. Es fluido y controlado." },
            { id: 3, title: "Cómo saben adónde ir", text: "El cielo tiene autopistas invisibles de GPS. El ordenador de vuelo sigue esta ruta digital con precisión.", snippet: "El avión sigue una ruta digital precisa de GPS desde el despegue hasta el aterrizaje." },
            { id: 4, title: "Por qué el Modo Avión", text: "Es principalmente para no interferir con las torres de telefonía, no con el avión.", snippet: "El modo avión protege las torres de telefonía. Tu móvil no confundirá al avión." },
            { id: 5, title: "Máscaras de Oxígeno", text: "Caen si cambia la presión. Es un sistema de respaldo estándar, puramente por seguridad.", snippet: "Si caen las máscaras, tienes tiempo de sobra para ponértela y respirar normal." },
            { id: 6, title: "Turbulencia", text: "Es como un barco en las olas. El aire soporta el avión como el agua al barco. Estás seguro.", snippet: "La turbulencia es incómoda pero segura. El aire soporta al avión como el agua a un barco." },
            { id: 7, title: "Por qué es tan seguro", text: "Cada sistema crítico tiene 2 o 3 copias de seguridad, y los pilotos entrenan constantemente.", snippet: "Volar es seguro por la redundancia. Todo tiene copias de seguridad y los pilotos están entrenadísimos." }
        ]
    };

    // @ts-ignore
    const cards = cardsData[language] || cardsData['en'];
    // Fill gaps for other languages with English if needed
    const displayCards = cards.length < 8 && language !== 'en' ? cardsData['en'] : cards;

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {displayCards.map((card: any) => (
                    <div id={`card-${card.id}`} key={card.id} className="ios-glass p-5 flex flex-col justify-between group hover:bg-slate-800/80 transition-colors scroll-mt-24">
                        <div>
                            <h3 className="font-bold text-sm text-blue-300 mb-2">{card.title}</h3>
                            <p className="text-xs text-slate-400 leading-relaxed mb-4">{card.text}</p>
                        </div>

                        <button
                            onClick={() => handleShare(card)}
                            disabled={isGenerating && activeCard?.id === card.id}
                            className="mt-2 w-full py-2 rounded-lg bg-white/5 hover:bg-white/10 text-[10px] uppercase font-bold tracking-wider text-slate-400 flex items-center justify-center gap-2 transition-all"
                        >
                            {copiedId === card.id ? (
                                <>
                                    <i className="ph-fill ph-check text-green-400"></i>
                                    <span className="text-green-400">Copied</span>
                                </>
                            ) : (
                                <>
                                    {isGenerating && activeCard?.id === card.id ? (
                                        <i className="ph-bold ph-spinner animate-spin"></i>
                                    ) : (
                                        <i className="ph-bold ph-share-network"></i>
                                    )}
                                    <span>Share</span>
                                </>
                            )}
                        </button>
                    </div>
                ))}
            </div>

            <ShareModal
                isOpen={isShareModalOpen}
                onClose={() => setIsShareModalOpen(false)}
                onCopyText={handleCopyText}
                onCopyLink={handleCopyLink}
                onDownload={handleDownload}
                title={activeCard?.title || 'Card'}
            />

            {/* Hidden Capture Template */}
            <div style={{ position: 'fixed', top: '-9999px', left: '-9999px' }} aria-hidden="true">
                <div
                    ref={shareRef}
                    className="w-[1080px] h-[1350px] bg-gradient-to-br from-[#050a14] to-[#0f172a] p-16 flex flex-col justify-between relative overflow-hidden"
                >
                    {/* Background Particles/Glow */}
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"></div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-20 opacity-80">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/logo_wide.webp" alt="Logo" className="h-16 w-auto rounded-2xl shadow-xl" />
                            <span className="text-4xl font-bold text-white tracking-tight">CalmFlight</span>
                        </div>

                        <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-blue-200 mb-12 leading-tight">
                            {activeCard?.title}
                        </h1>

                        <div className="w-24 h-2 bg-blue-500 rounded-full mb-12"></div>

                        <p className="text-4xl text-slate-300 leading-normal font-medium max-w-4xl">
                            {activeCard?.text}
                        </p>
                    </div>

                    <div className="relative z-10 border-t border-white/10 pt-10 flex justify-between items-end">
                        <div className="flex flex-col gap-2">
                            <div className="text-2xl text-blue-400 font-bold tracking-wide">CALMFLIGHT APP</div>
                            <div className="text-xl text-slate-500">Launching March 1</div>
                        </div>
                        <div className="text-xl text-slate-600 bg-white/5 px-6 py-3 rounded-full">
                            calmflightapp.com
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
