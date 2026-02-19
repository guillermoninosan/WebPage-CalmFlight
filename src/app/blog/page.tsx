'use client';

import { useLanguage, LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Link from 'next/link';

function BlogListContent() {
    const { t } = useLanguage();

    return (
        <>
            <Navbar />
            <main className="pt-32 px-6 max-w-5xl mx-auto pb-20">
                <div className="text-center mb-16">
                    <p className="text-xs uppercase tracking-[0.3em] text-blue-300/70 mb-4">Flight Calm Journal</p>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Understanding conquers fear.</h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Simple, science-backed explanations of how flying works, why your body reacts, and how to stay calm.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Featured Article */}
                    <article className="ios-glass p-8 col-span-1 md:col-span-3 flex flex-col justify-center items-start group cursor-pointer hover:bg-slate-800/80 transition-colors">
                        <div className="flex items-center gap-3 text-xs text-slate-400 mb-4">
                            <span className="px-2 py-1 rounded-full bg-purple-500/10 text-purple-200">Anxiety Relief</span>
                            <span>Feb 19, 2026</span>
                        </div>
                        <Link href="/blog/stop-panic-attack-no-wifi" className="block">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-purple-300 transition-colors">
                                How to Stop a Panic Attack on a Plane (When You Have No Wi-Fi)
                            </h2>
                        </Link>
                        <p className="text-slate-400 leading-relaxed mb-6 max-w-3xl">
                            The cabin doors close. The flight attendant tells you to switch to Airplane Mode. For many, this is when panic sets in. Here is the science of offline grounding.
                        </p>
                        <Link href="/blog/stop-panic-attack-no-wifi"
                            className="inline-flex items-center gap-2 text-purple-400 font-semibold hover:text-white transition-colors">
                            Read full article <i className="ph-bold ph-arrow-right"></i>
                        </Link>
                    </article>

                    {/* Article Card 1 */}
                    <article className="ios-glass p-6 flex flex-col items-start group hover:bg-slate-800/80 transition-colors">
                        <div className="flex items-center gap-3 text-xs text-slate-400 mb-4">
                            <span className="px-2 py-1 rounded-full bg-blue-500/10 text-blue-200">Safety Basics</span>
                            <span>Feb 12, 2026</span>
                        </div>
                        <Link href="/blog/oxygen-mask" className="block">
                            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors">
                                How oxygen masks actually work
                            </h3>
                        </Link>
                        <p className="text-sm text-slate-400 leading-relaxed mb-auto">
                            It looks chaotic in movies, but in reality, it's a silent, automatic, and redundant safety system.
                        </p>
                        <Link href="/blog/oxygen-mask" className="mt-4 text-xs text-blue-400 hover:text-white transition-colors flex items-center gap-1">
                            Read article <i className="ph-bold ph-caret-right"></i>
                        </Link>
                    </article>

                    {/* Article Card 2 */}
                    <article className="ios-glass p-6 flex flex-col items-start group hover:bg-slate-800/80 transition-colors">
                        <div className="flex items-center gap-3 text-xs text-slate-400 mb-4">
                            <span className="px-2 py-1 rounded-full bg-purple-500/10 text-purple-200">Turbulence</span>
                            <span>Coming Soon</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors">
                            Why the plane drops during turbulence
                        </h3>
                        <p className="text-sm text-slate-400 leading-relaxed mb-auto">
                            It feels like falling hundreds of feet, but usually, it's less than ten. Understanding air pockets.
                        </p>
                    </article>

                    {/* Article Card 3 */}
                    <article className="ios-glass p-6 flex flex-col items-start group hover:bg-slate-800/80 transition-colors">
                        <div className="flex items-center gap-3 text-xs text-slate-400 mb-4">
                            <span className="px-2 py-1 rounded-full bg-teal-500/10 text-teal-200">Sounds</span>
                            <span>Coming Soon</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-teal-300 transition-colors">
                            What is that "Bing-Bong" sound?
                        </h3>
                        <p className="text-sm text-slate-400 leading-relaxed mb-auto">
                            Decoding the secret language of flight attendant chimes. It's usually just a phone call.
                        </p>
                    </article>
                </div>

                <div className="mt-16 pt-8 border-t border-white/10 text-center">
                    <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
                        <i className="ph-bold ph-arrow-left"></i>
                        <span>{t('back_home')}</span>
                    </Link>
                </div>
            </main>
        </>
    );
}

export default function BlogList() {
    return (
        <LanguageProvider>
            <BlogListContent />
        </LanguageProvider>
    );
}
