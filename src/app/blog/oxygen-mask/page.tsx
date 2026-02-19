'use client';

import { useLanguage, LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Link from 'next/link';

function OxygenMaskContent() {
    return (
        <>
            <Navbar />
            <article className="pt-32 px-6 max-w-3xl mx-auto pb-20">
                <header className="mb-12 text-center">
                    <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
                    <span>•</span>
                    <span className="px-2 py-1 rounded-full bg-blue-500/10 text-blue-200">Safety Basics</span>
                    <span>•</span>
                    <span>3 min read</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                    How oxygen masks actually work (and why you shouldn't fear them)
                </h1>
                <p className="text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
                    It looks chaotic in movies, but in reality, it's a silent, automatic, and redundant safety system.
                </p>
            </header>

            <div className="prose prose-invert prose-lg mx-auto text-slate-300">
                <p className="lead text-white text-xl">
                    The moment the masks drop is probably the most terrifying scene imaginable for a nervous flyer.
                    But knowing the mechanics strips away the horror.
                </p>

                <h3>1. Why do they drop?</h3>
                <p>
                    Planes fly high (30,000+ feet) where the air is too thin to breathe comfortably. The cabin is
                    "pressurized" to feel like 6,000-8,000 feet. If that artificial pressure slips away (usually due to a
                    minor seal issue or sensor fault), the masks deploy automatically.
                </p>
                <p>
                    It doesn't mean the plane is broken or falling. It just means: "The air in here is getting thin, use
                    this while the pilot descends."
                </p>

                <h3>2. The Descent</h3>
                <p>
                    If masks drop, you will feel the plane descend. <strong>This is deliberate control, not a fall.</strong>
                    The pilots are simply driving the car down from the mountain to the valley where the air is thick
                    enough to breathe without masks. This takes about 3-5 minutes.
                </p>

                <h3>3. The "Bag Does Not Inflate"</h3>
                <p>
                    We've all heard the safety demo. The bag doesn't inflate like a balloon because it's not holding a
                    tank of air. It's a "reservoir" bag. Oxygen flows steadily into it, and you breathe it in. Even if
                    it looks flat, oxygen is flowing.
                </p>

                <div className="bg-blue-500/10 border border-blue-500/20 p-6 rounded-2xl not-prose my-8">
                    <h4 className="flex items-center gap-2 font-bold text-blue-300 mb-2">
                        <i className="ph-fill ph-check-circle"></i>
                        Key Takeaway
                    </h4>
                    <p className="text-sm text-blue-100/80">
                        Masks dropping is a <strong>precaution</strong>, not a catastrophe. It buys time for a controlled descent
                        to breathable air. Pilots act calmly, and so can you.
                    </p>
                </div>
            </div>

            <div className="mt-16 pt-8 border-t border-white/10 text-center">
                <Link href="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-medium">
                    <i className="ph-bold ph-arrow-left"></i>
                    <span>Back to all articles</span>
                </Link>
            </div>
        </article >
        </>
    );
}

export default function OxygenMaskPage() {
    return (
        <LanguageProvider>
            <OxygenMaskContent />
        </LanguageProvider>
    );
}
