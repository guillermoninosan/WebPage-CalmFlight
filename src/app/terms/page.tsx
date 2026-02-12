'use client';

import { useLanguage, LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Link from 'next/link';
import { useEffect, useState } from "react";

function TermsContent() {
    const { language, t } = useLanguage();
    const [sections, setSections] = useState<{ h: string, p: string }[]>([]);

    useEffect(() => {
        const content = {
            en: [
                { h: "1. Standard EULA", p: "By downloading or using CalmFlight, you agree to the terms of the standard Apple End User License Agreement (EULA). You can review these terms here: <a href='https://www.apple.com/legal/internet-services/itunes/dev/stdeula/' class='text-blue-400 underline'>Apple Standard EULA</a>." },
                { h: "2. Medical Disclaimer", p: "<strong>CalmFlight is not a medical device.</strong> The content, breathing exercises, and techniques provided in this app are for educational and self-help purposes only. They are not intended to diagnose, treat, or cure any medical condition. If you suffer from a severe anxiety disorder, panic disorder, or specific phobia, please consult a qualified mental health professional." },
                { h: "3. Refund Policy", p: "CalmFlight is a one-time purchase. All billing and refunds are handled directly by Apple. If you are unhappy with the app, you may request a refund via the App Store according to Apple's refund policies." },
                { h: "4. Intellectual Property", p: "All content, sounds, and visual assets within CalmFlight are the property of the developer or used under license. You may not reverse engineer, decompile, or copy the app assets." },
                { h: "5. Contact", p: "For support or questions regarding these terms, contact: <strong>contact@calmflightapp.com</strong>" }
            ],
            es: [
                { h: "1. EULA Estándar", p: "Al descargar CalmFlight, aceptas los términos del Acuerdo de Licencia de Usuario Final (EULA) estándar de Apple. Puedes revisarlos aquí: <a href='https://www.apple.com/legal/internet-services/itunes/dev/stdeula/' class='text-blue-400 underline'>EULA de Apple</a>." },
                { h: "2. Descargo Médico", p: "<strong>CalmFlight no es un dispositivo médico.</strong> El contenido y los ejercicios son solo para fines educativos y de autoayuda. No pretenden diagnosticar ni curar ninguna condición médica. Si sufres de un trastorno de ansiedad severo, consulta a un profesional." },
                { h: "3. Política de Reembolso", p: "Todas las compras y reembolsos son gestionados directamente por Apple a través de la App Store." },
                { h: "4. Propiedad Intelectual", p: "Todo el contenido y activos visuales de CalmFlight son propiedad del desarrollador. No está permitido copiar ni realizar ingeniería inversa." },
                { h: "5. Contacto", p: "Para soporte: <strong>contact@calmflightapp.com</strong>" }
            ],
            fr: [
                { h: "1. CLUF Standard", p: "En téléchargeant CalmFlight, vous acceptez le Contrat de Licence Utilisateur Final (CLUF) standard d'Apple : <a href='https://www.apple.com/legal/internet-services/itunes/dev/stdeula/' class='text-blue-400 underline'>CLUF Apple</a>." },
                { h: "2. Avertissement Médical", p: "<strong>CalmFlight n'est pas un dispositif médical.</strong> Le contenu est à des fins éducatives uniquement. Il n'est pas destiné à diagnostiquer ou traiter une maladie. Consultez un professionnel si vous souffrez de troubles anxieux sévères." },
                { h: "3. Remboursements", p: "Tous les paiements et remboursements sont gérés directement par Apple via l'App Store." },
                { h: "4. Propriété Intellectuelle", p: "Tout le contenu appartient au développeur. La copie ou l'ingénierie inverse est interdite." },
                { h: "5. Contact", p: "Support : <strong>contact@calmflightapp.com</strong>" }
            ],
            de: [
                { h: "1. Standard-EULA", p: "Durch das Laden von CalmFlight stimmen Sie der Standard-Endbenutzer-Lizenzvereinbarung (EULA) von Apple zu: <a href='https://www.apple.com/legal/internet-services/itunes/dev/stdeula/' class='text-blue-400 underline'>Apple EULA</a>." },
                { h: "2. Medizinischer Hinweis", p: "<strong>CalmFlight ist kein Medizinprodukt.</strong> Die Inhalte dienen nur zu Bildungszwecken. Sie sind nicht dazu bestimmt, medizinische Zustände zu diagnostizieren oder zu heilen. Bei schweren Angststörungen wenden Sie sich bitte an einen Arzt." },
                { h: "3. Rückerstattungen", p: "Alle Zahlungen und Rückerstattungen werden direkt von Apple über den App Store abgewickelt." },
                { h: "4. Geistiges Eigentum", p: "Alle Inhalte sind Eigentum des Entwicklers. Kopieren oder Reverse Engineering ist untersagt." },
                { h: "5. Kontakt", p: "Support: <strong>contact@calmflightapp.com</strong>" }
            ]
        };
        // @ts-ignore
        setSections(content[language] || content['en']);
    }, [language]);

    return (
        <>
            <Navbar />
            <main className="pt-32 px-6 max-w-3xl mx-auto pb-20">
                <div className="ios-glass p-8 md:p-12">
                    <h1 className="text-3xl font-bold mb-2">{t('title_terms')}</h1>
                    <p className="text-sm text-slate-400 mb-8">{t('date_terms')}</p>

                    <div className="space-y-8 text-sm leading-relaxed text-slate-300">
                        {sections.map((sec, i) => (
                            <div key={i}>
                                <h3 className="text-white font-bold mb-2">{sec.h}</h3>
                                <p dangerouslySetInnerHTML={{ __html: sec.p }}></p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10 text-center">
                        <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold text-sm">
                            <i className="ph-bold ph-arrow-left"></i>
                            <span>{t('back_home')}</span>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
}

export default function TermsPage() {
    return (
        <LanguageProvider>
            <TermsContent />
        </LanguageProvider>
    );
}
