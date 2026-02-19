'use client';

import { useLanguage, LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Link from 'next/link';

function PanicAttackContent() {
    return (
        <>
            <Navbar />
            <article className="pt-32 px-6 max-w-3xl mx-auto pb-20">
                <header className="mb-12 text-center">
                    <div className="flex items-center justify-center gap-3 text-xs text-slate-400 mb-6">
                        <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
                        <span>•</span>
                        <span className="px-2 py-1 rounded-full bg-purple-500/10 text-purple-200">Anxiety Relief</span>
                        <span>•</span>
                        <span>4 min read</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        How to Stop a Panic Attack on a Plane (When You Have No Wi-Fi)
                    </h1>
                    <p className="text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
                        Learn how to manage flight anxiety and stop a panic attack during turbulence when you don't have internet access. Discover the science of offline grounding.
                    </p>
                </header>

                <div className="prose prose-invert prose-lg mx-auto text-slate-300">
                    <p className="lead text-white text-xl">
                        The cabin doors close. The flight attendant tells you to switch your phone to Airplane Mode. For many nervous flyers, this is the exact moment the panic sets in.
                    </p>
                    <p>
                        Flight anxiety is exhausting on its own, but having a panic attack when you are completely disconnected from the internet is terrifying. Most popular meditation apps and calming YouTube videos require a strong Wi-Fi connection—something you rarely have during takeoff or heavy turbulence.
                    </p>

                    <h3 className="text-white mt-12 mb-4">The Wi-Fi Trap for Nervous Flyers</h3>
                    <p>
                        Relying on streaming audio or video to calm your fear of flying is a risky strategy. When turbulence hits and the patchy in-flight Wi-Fi drops, the sudden loss of your "safe space" can actually accelerate a panic spiral. You need tools that live directly on your device.
                    </p>

                    <h3 className="text-white mt-12 mb-4">The Science of Offline Grounding</h3>
                    <p>
                        When your brain's amygdala (the fear center) activates at 35,000 feet, you cannot simply tell yourself to "just relax." You have to physically interrupt the anxiety loop. Psychologists recommend engaging your working memory. By forcing your brain to focus on high-friction logic tasks, you divert cognitive resources away from the panic center.
                    </p>

                    <h3 className="text-white mt-12 mb-4">3 Steps to Calm Down Offline</h3>
                    <ul className="list-none space-y-6 pl-0">
                        <li className="bg-white/5 p-6 rounded-2xl border border-white/5">
                            <strong className="block text-purple-300 text-lg mb-2">1. Tactile Breathing</strong>
                            Don't just take deep breaths; trace your finger along the edge of your phone or tray table while you inhale and exhale. The physical sensation grounds you in reality.
                        </li>
                        <li className="bg-white/5 p-6 rounded-2xl border border-white/5">
                            <strong className="block text-purple-300 text-lg mb-2">2. Cognitive Distraction</strong>
                            Play a fast-paced game that requires logic. Sudoku, offline math puzzles, or memory sequencing games force your brain to switch from "survival mode" to "problem-solving mode."
                        </li>
                        <li className="bg-white/5 p-6 rounded-2xl border border-white/5">
                            <strong className="block text-purple-300 text-lg mb-2">3. Read the Physics</strong>
                            Fear thrives on the unknown. Save a screenshot or an offline note explaining basic aviation aerodynamics. Remind yourself that a plane flying through turbulence is just like a car driving over a bumpy dirt road. It is uncomfortable, but it is not fundamentally dangerous.
                        </li>
                    </ul>

                    <h3 className="text-white mt-12 mb-4">Your Offline Safe Place</h3>
                    <p>
                        We built CalmFlight specifically for this scenario. It is an iOS app designed to be your offline toolkit for flight anxiety. With a dedicated "Panic Button" for immediate guided breathing, built-in cognitive distraction games, and clear explanations of how planes work, CalmFlight requires zero Wi-Fi, zero tracking, and zero ads.
                    </p>

                    <div className="bg-purple-500/10 border border-purple-500/20 p-6 rounded-2xl not-prose my-12">
                        <h4 className="flex items-center gap-2 font-bold text-purple-300 mb-2">
                            <i className="ph-fill ph-check-circle"></i>
                            Key Takeaway
                        </h4>
                        <p className="text-sm text-purple-100/80">
                            You don't need Wi-Fi to stop a panic attack. <strong>Grounding yourself</strong> with tactile breathing and offline cognitive games is faster and more reliable than streaming videos.
                        </p>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/10 text-center">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-medium">
                        <i className="ph-bold ph-arrow-left"></i>
                        <span>Back to all articles</span>
                    </Link>
                </div>
            </article>
        </>
    );
}

export default function PanicAttackPage() {
    return (
        <LanguageProvider>
            <PanicAttackContent />
        </LanguageProvider>
    );
}
