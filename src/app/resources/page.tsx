import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/context/LanguageContext';

export default function Resources() {
    return (
        <LanguageProvider>
            <div className="min-h-screen bg-[#050a14] text-white flex flex-col">
                <Navbar />
                <div className="flex-1 pt-32 px-6">
                    <div className="max-w-[72ch] mx-auto w-full">
                        <h1 className="text-4xl font-bold mb-8">Flight Anxiety Resources</h1>
                        <p className="text-slate-300 text-lg leading-relaxed mb-4">
                            A collection of recommended books, courses, and tools designed to help nervous flyers build confidence and manage flight anxiety. These are resources we trust and frequently recommend.
                        </p>

                        <section className="mt-12">
                            <h2 className="text-2xl font-bold mb-6">Recommended Reading</h2>
                            <div className="space-y-6">
                                <div className="ios-glass p-6 rounded-2xl border border-white/10">
                                    <h3 className="text-xl font-bold mb-2">SOAR: The Breakthrough Treatment for Fear of Flying</h3>
                                    <p className="text-sm text-blue-300 mb-3">by Capt. Tom Bunn</p>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                        Written by an airline captain and licensed therapist, this is widely considered the definitive book on flight anxiety. It explains the mechanics of flight and provides concrete psychological tools to manage panic.
                                    </p>
                                    <a href="#" className="text-sm font-semibold text-white hover:text-blue-400 transition-colors inline-flex items-center gap-1">View on Amazon <i className="ph-bold ph-arrow-up-right"></i></a>
                                </div>

                                <div className="ios-glass p-6 rounded-2xl border border-white/10">
                                    <h3 className="text-xl font-bold mb-2">Cockpit Confidential</h3>
                                    <p className="text-sm text-blue-300 mb-3">by Patrick Smith</p>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                        A highly readable and reassuring look at how commercial aviation actually works. Smith debunks common myths and explains complex systems in plain English.
                                    </p>
                                    <a href="#" className="text-sm font-semibold text-white hover:text-blue-400 transition-colors inline-flex items-center gap-1">View on Amazon <i className="ph-bold ph-arrow-up-right"></i></a>
                                </div>
                            </div>
                        </section>

                        <section className="mt-12">
                            <h2 className="text-2xl font-bold mb-6">Courses & Programs</h2>
                            <div className="space-y-6">
                                <div className="ios-glass p-6 rounded-2xl border border-white/10">
                                    <h3 className="text-xl font-bold mb-2">Fearless Flight</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                        Founded by Capt. Ron Nielsen, this program offers online courses, weekly live coaching calls, and detailed explanations of everything from turbulence to weather.
                                    </p>
                                    <a href="#" className="text-sm font-semibold text-white hover:text-blue-400 transition-colors inline-flex items-center gap-1">Visit Website <i className="ph-bold ph-arrow-up-right"></i></a>
                                </div>
                            </div>
                        </section>

                        <section className="mt-12">
                            <h2 className="text-2xl font-bold mb-2">Recommended Gear <span className="text-slate-500 font-normal text-lg">(Optional)</span></h2>
                            <p className="text-sm text-slate-400 mb-6">
                                Physical tools can make a significant difference in sensory regulation. Product availability and models may change over time.<br />
                                <span className="text-xs text-slate-500 italic mt-2 block">As an Amazon Associate I earn from qualifying purchases.</span>
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="ios-glass p-6 rounded-2xl border border-white/10">
                                    <h3 className="text-lg font-bold mb-2">Noise-Canceling Headphones</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                        Essential for blocking out engine noise and the "bing-bong" chimes that can trigger a startle response.
                                    </p>
                                    <a href="#" className="text-sm font-semibold text-white hover:text-blue-400 transition-colors inline-flex items-center gap-1">
                                        View options (paid link) <i className="ph-bold ph-arrow-up-right"></i>
                                    </a>
                                </div>

                                <div className="ios-glass p-6 rounded-2xl border border-white/10">
                                    <h3 className="text-lg font-bold mb-2">Contoured Eye Mask</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                        Removing visual stimuli can help lower your baseline stress level, especially during night flights.
                                    </p>
                                    <a href="#" className="text-sm font-semibold text-white hover:text-blue-400 transition-colors inline-flex items-center gap-1">
                                        View options (paid link) <i className="ph-bold ph-arrow-up-right"></i>
                                    </a>
                                </div>

                                <div className="ios-glass p-6 rounded-2xl border border-white/10">
                                    <h3 className="text-lg font-bold mb-2">Tactile Grounding Item</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                        A simple worry stone, fidget ring, or stress ball gives physical nervous energy a place to go.
                                    </p>
                                    <a href="#" className="text-sm font-semibold text-white hover:text-blue-400 transition-colors inline-flex items-center gap-1">
                                        View options (paid link) <i className="ph-bold ph-arrow-up-right"></i>
                                    </a>
                                </div>

                                <div className="ios-glass p-6 rounded-2xl border border-white/10">
                                    <h3 className="text-lg font-bold mb-2">Supportive Neck Pillow</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                        Physical comfort helps prevent the accumulation of tension in your shoulders and upper back.
                                    </p>
                                    <a href="#" className="text-sm font-semibold text-white hover:text-blue-400 transition-colors inline-flex items-center gap-1">
                                        View options (paid link) <i className="ph-bold ph-arrow-up-right"></i>
                                    </a>
                                </div>
                            </div>
                        </section>

                        <div className="mt-16 pb-20">
                            <a href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-white transition-colors font-medium">
                                <i className="ph-bold ph-arrow-left"></i> Back to Home
                            </a>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </LanguageProvider>
    );
}
