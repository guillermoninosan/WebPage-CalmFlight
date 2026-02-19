'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Language = 'en' | 'es' | 'fr' | 'de';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const content: Record<Language, Record<string, any>> = {
    en: {
        nav_date: "March 1st",
        offline_badge: "Works 100% Offline",
        headline_1: "Turn turbulence into",
        headline_2: "your new calm.",
        subheadline: "Where immediate relaxation meets knowledge. From deep breathing to cognitive distraction in two minutes.",
        email_placeholder: "Enter your email",
        notify_btn: "Notify Me",
        email_disclaimer: "Be the first to download on March 1st.",
        price_free: "Free Download",
        iap_badge: "In-App Purchase",
        premium_offer: "Lifetime Premium: $12.99 (One-time)",
        features_title: "Designed for In-Flight",
        feat_1_title: "The \"I'm Having a Panic Attack\" Flow",
        feat_1_desc: "An emergency button taking you from anxiety to distraction in two minutes. Guided breathing and cognitive games.",
        feat_2_title: "Always Available In-Flight",
        feat_2_desc: "Everything works locally. No loading screens. Audio continues even when your phone is locked.",
        feat_3_title: "Knowledge Explained Simply",
        feat_3_desc: "We validate your fear without dramatizing it. Clear explanations of turbulence physics and how planes work.",
        feat_4_title: "Haptics & Accessibility",
        feat_4_desc: "Vibration-assisted breathing exercises and support for increasing text size.",
        feat_5_title: "Relaxing Sounds",
        feat_5_desc: "Access a selection of sounds to help you relax. Play them in the background to mask cabin noise, even with your phone locked.",
        roadmap_title: "Launch Roadmap",
        roadmap_sub: "A lifetime of updates. One price.",
        view_roadmap: "View Full Roadmap",
        contact_title: "Contact Developer",
        contact_sub: "CalmFlight is built with care and love. If you have questions, send me a message.",
        send_btn: "Send Message",
        link_privacy: "Privacy Policy",
        link_terms: "Terms (EULA)",
        link_releases: "Versions",

        // Releases Page
        page_title: "Launch Roadmap",
        page_subtitle: "A lifetime of updates. One price.",
        back_home: "Back to Home",
        // Privacy Page
        title_privacy: "Privacy Policy",
        date_privacy: "Last Updated: February 2026",
        // Terms Page
        title_terms: "Terms of Use (EULA)",
        date_terms: "Last Updated: February 2026"
    },
    es: {
        nav_date: "1 de Marzo",
        offline_badge: "Funciona 100% Offline",
        headline_1: "Convierte la turbulencia",
        headline_2: "en tu nueva calma.",
        subheadline: "Donde la relajación inmediata encuentra el conocimiento. Desde respiración hasta distracción cognitiva en dos minutos.",
        email_placeholder: "Ingresa tu email",
        notify_btn: "Notificarme",
        email_disclaimer: "Sé el primero en descargar el 1 de Marzo.",
        price_free: "Descarga Gratis",
        iap_badge: "Compras In-App",
        premium_offer: "Premium Vitalicio: 14,99 € (Pago único)",
        features_title: "Diseñado para el Vuelo",
        feat_1_title: "El Flujo \"Tengo Pánico\"",
        feat_1_desc: "Un botón de emergencia que te lleva de la ansiedad a la distracción en dos minutos. Respiración guiada y juegos cognitivos.",
        feat_2_title: "Siempre Disponible en Vuelo",
        feat_2_desc: "Todo funciona localmente. Sin pantallas de carga. El audio continúa incluso con el teléfono bloqueado.",
        feat_3_title: "Conocimiento Explicado Simple",
        feat_3_desc: "Validamos tu miedo sin dramatizar. Explicaciones claras de la física de la turbulencia y cómo funcionan los aviones.",
        feat_4_title: "Hápticos y Accesibilidad",
        feat_4_desc: "Ejercicios de respiración asistidos por vibración y soporte para aumentar el tamaño del texto.",
        feat_5_title: "Sonidos Relajantes",
        feat_5_desc: "Accede a una selección de sonidos para relajarte. Reprodúcelos de fondo para enmascarar el ruido de la cabina.",
        roadmap_title: "Hoja de Ruta",
        roadmap_sub: "Actualizaciones de por vida. Un solo precio.",
        view_roadmap: "Ver Hoja de Ruta Completa",
        contact_title: "Contactar Desarrollador",
        contact_sub: "CalmFlight está construido con cuidado y amor. Si tienes preguntas, envíame un mensaje.",
        send_btn: "Enviar Mensaje",
        link_privacy: "Privacidad",
        link_terms: "Términos (EULA)",
        link_releases: "Versiones",
        // Releases Page
        page_title: "Hoja de Ruta de Lanzamiento",
        page_subtitle: "Actualizaciones de por vida. Un solo precio.",
        back_home: "Volver al Inicio",
        // Privacy Page
        title_privacy: "Política de Privacidad",
        date_privacy: "Última actualización: Febrero 2026",
        // Terms Page
        title_terms: "Términos de Uso",
        date_terms: "Última actualización: Febrero 2026"
    },
    fr: {
        nav_date: "1er Mars",
        offline_badge: "Fonctionne 100% Hors Ligne",
        headline_1: "Transformez la turbulence",
        headline_2: "en votre nouveau calme.",
        subheadline: "Où la relaxation immédiate rencontre la connaissance. De la respiration profonde à la distraction cognitive en deux minutes.",
        email_placeholder: "Entrez votre email",
        notify_btn: "M'avertir",
        email_disclaimer: "Soyez le premier à télécharger le 1er Mars.",
        price_free: "Téléchargement Gratuit",
        iap_badge: "Achats In-App",
        premium_offer: "Premium à Vie : 14,99 € (Paiement unique)",
        features_title: "Conçu pour le Vol",
        feat_1_title: "Le Flux \"Panique\"",
        feat_1_desc: "Un bouton d'urgence vous emmenant de l'anxiété à la distraction en deux minutes. Respiration guidée et jeux cognitifs.",
        feat_2_title: "Toujours Disponible en Vol",
        feat_2_desc: "Tout fonctionne localement. Pas d'écrans de chargement. L'audio continue même téléphone verrouillé.",
        feat_3_title: "Connaissances Expliquées Simplement",
        feat_3_desc: "Nous validons votre peur sans la dramatiser. Explications claires de la physique des turbulences.",
        feat_4_title: "Haptique et Accessibilité",
        feat_4_desc: "Exercices de respiration assistés par vibration et prise en charge de l'augmentation de la taille du texte.",
        feat_5_title: "Sons Relaxants",
        feat_5_desc: "Accédez à une sélection de sons pour vous détendre. Jouez-les en arrière-plan pour masquer le bruit de la cabine.",
        roadmap_title: "Feuille de Route",
        roadmap_sub: "Mises à jour à vie. Un seul prix.",
        view_roadmap: "Voir la Feuille de Route",
        contact_title: "Contacter le Développeur",
        contact_sub: "CalmFlight est construit avec soin. Si vous avez des questions, envoyez-moi un message.",
        send_btn: "Envoyer Message",
        link_privacy: "Confidentialité",
        link_terms: "Conditions (EULA)",
        link_releases: "Versions",
        // Releases Page
        page_title: "Feuille de Route",
        page_subtitle: "Mises à jour à vie. Un seul prix.",
        back_home: "Retour à l'accueil",
        // Privacy Page
        title_privacy: "Politique de Confidentialité",
        date_privacy: "Dernière mise à jour : Février 2026",
        // Terms Page
        title_terms: "Conditions d'Utilisation",
        date_terms: "Dernière mise à jour : Février 2026"
    },
    de: {
        nav_date: "1. März",
        offline_badge: "Funktioniert 100% Offline",
        headline_1: "Verwandle Turbulenzen",
        headline_2: "in deine neue Ruhe.",
        subheadline: "Wo sofortige Entspannung auf Wissen trifft. Von tiefer Atmung bis zu kognitiver Ablenkung in zwei Minuten.",
        email_placeholder: "E-Mail eingeben",
        notify_btn: "Benachrichtigen",
        email_disclaimer: "Sei der Erste beim Download am 1. März.",
        price_free: "Kostenloser Download",
        iap_badge: "In-App Käufe",
        premium_offer: "Lebenslanges Premium: 14,99 € (Einmalig)",
        features_title: "Für den Flug Entwickelt",
        feat_1_title: "Der \"Ich habe Panik\" Flow",
        feat_1_desc: "Ein Notfallknopf, der dich in zwei Minuten von Angst zur Ablenkung bringt. Geführte Atmung und kognitive Spiele.",
        feat_2_title: "Immer Verfügbar im Flug",
        feat_2_desc: "Alles funktioniert lokal. Keine Ladebildschirme. Audio läuft auch bei gesperrtem Telefon weiter.",
        feat_3_title: "Wissen Einfach Erklärt",
        feat_3_desc: "Wir validieren deine Angst ohne Dramatisierung. Klare Erklärungen zur Turbulenzphysik.",
        feat_4_title: "Haptik & Barrierefreiheit",
        feat_4_desc: "Vibrationsunterstützte Atemübungen und Unterstützung für größere Textgrößen.",
        feat_5_title: "Entspannende Klänge",
        feat_5_desc: "Zugriff auf eine Auswahl an Klängen zur Entspannung. Spiele sie im Hintergrund, um Kabinengeräusche zu überdecken.",
        roadmap_title: "Roadmap",
        roadmap_sub: "Lebenslange Updates. Ein Preis.",
        view_roadmap: "Vollständige Roadmap Ansehen",
        contact_title: "Entwickler Kontaktieren",
        contact_sub: "CalmFlight wird mit Sorgfalt gebaut. Wenn du Fragen hast, sende mir eine Nachricht.",
        send_btn: "Nachricht Senden",
        link_privacy: "Datenschutz",
        link_terms: "Nutzungsbedingungen (EULA)",
        link_releases: "Versionen",
        // Releases Page
        page_title: "Launch Roadmap",
        page_subtitle: "Lebenslange Updates. Ein Preis.",
        back_home: "Zurück zur Startseite",
        // Privacy Page
        title_privacy: "Datenschutzerklärung",
        date_privacy: "Stand: Februar 2026",
        // Terms Page
        title_terms: "Nutzungsbedingungen",
        date_terms: "Stand: Februar 2026"
    }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>('en');

    useEffect(() => {
        const savedLang = localStorage.getItem('calmflight_lang') as Language;
        if (savedLang && content[savedLang]) {
            setLanguage(savedLang);
        } else {
            const userLang = navigator.language.split('-')[0] as Language;
            if (['es', 'fr', 'de'].includes(userLang)) {
                setLanguage(userLang);
            }
        }
    }, []);

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem('calmflight_lang', lang);
    };

    const t = (key: string) => {
        return content[language][key] || content['en'][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
