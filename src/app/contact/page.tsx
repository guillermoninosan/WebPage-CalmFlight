import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/context/LanguageContext';

export default function Contact() {
    return (
        <LanguageProvider>
            <div className="min-h-screen bg-[#050a14] text-white flex flex-col">
                <Navbar />
                <div className="flex-1 pt-32 px-6">
                    <div className="max-w-[72ch] mx-auto w-full">
                        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
                        <p className="text-slate-300 text-lg leading-relaxed mb-12">
                            Have a question about the app, a story to share, or feedback on our tools? We'd love to hear from you.
                        </p>

                        <section className="ios-glass p-8 rounded-3xl border border-white/10 mb-12">
                            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                            <p className="text-slate-400 mb-6">
                                The best way to reach us is via email. We read every message.
                            </p>
                            <a href="mailto:hello@calmflight.app" className="inline-flex items-center gap-2 text-xl font-bold text-white hover:text-blue-400 transition-colors">
                                <i className="ph-fill ph-envelope-simple"></i> hello@calmflight.app
                            </a>
                        </section>

                        <section className="mb-16">
                            <h2 className="text-2xl font-bold mb-4">Support & Feedback</h2>
                            <p className="text-slate-400 leading-relaxed mb-4">
                                If you are experiencing a technical issue with the CalmFlight app, please include your device model and iOS version in your email. This helps us diagnose and fix problems faster.
                            </p>
                            <p className="text-slate-400 leading-relaxed">
                                We are also constantly looking to improve our offline tools. If you have an idea for a new feature or Focus Task, let us know!
                            </p>
                        </section>

                        <div className="pb-20">
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
