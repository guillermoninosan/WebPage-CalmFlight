const mockups = { en: "app_mockup_en.webp", es: "app_mockup_es.webp", fr: "app_mockup_fr.webp", de: "app_mockup_de.webp" };
// Video files map - fix for missing variable
const videoFiles = {
    en: "app_demo.mp4", // Assuming same video for all or specific ones
    es: "app_demo.mp4",
    fr: "app_demo.mp4",
    de: "app_demo.mp4"
};

const langData = {
    en: {
        nav_date: "March 1st",
        offline_badge: "Works 100% Offline",
        headline_1: "Turn turbulence into",
        headline_2: "your new calm.",
        subheadline: "Where immediate relaxation meets knowledge. From deep breathing to cognitive distraction in two minutes.",
        taking_off: "Taking Off",
        launch_date_hero: "March 1st, 2026",
        ios_only: "Exclusively for iOS",
        lifetime_price: "Lifetime • One-time purchase",
        price_warning: "Launch Price. Increases to €19.99 in v1.2.",
        features_title: "Designed for In-Flight",
        feat_1_title: "The \"I'm Having a Panic Attack\" Flow",
        feat_1_desc: "An emergency button taking you from regulation to distraction in two minutes. Guided breathing and cognitive games.",
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
        roadmap_items: [
            { ver: "v1.0", date: "March 1st", title: "Global Launch", desc: "Panic Button, Offline Mode, Calm Audio, and 4 Games (Math, Memory, Sequence)." },
            { ver: "v1.1", date: "Coming Soon", title: "Turbulence Meter", desc: "Real-time G-Force monitor to prove stability during bumps." },
            { ver: "v1.2", date: "Future", title: "Flight Log & Expansion", desc: "Track flights, earn 'Fearless Flyer' Badges, and unlock new Games." }
        ],
        contact_title: "Contact Developer",
        contact_sub: "CalmFlight is built with care and love. If you have questions, send me a message.",
        send_btn: "Send Message",
        link_privacy: "Privacy Policy",
        link_terms: "Terms (EULA)",
        link_releases: "Versions",
        view_roadmap: "View Full Roadmap",
        email_placeholder: "Enter your email",
        notify_btn: "Notify Me",
        email_disclaimer: "Be the first to download on March 1st.",
        price_free: "Free Download",
        iap_badge: "In-App Purchase",
        premium_offer: "Lifetime Premium: $12.99 (One-time)"
    },
    es: {
        nav_date: "1 de Marzo",
        offline_badge: "Funciona 100% Offline",
        headline_1: "Haz de las turbulencias",
        headline_2: "tu nueva calma.",
        subheadline: "Cuando la relajación inmediata y el conocimiento van de la mano. De la respiración profunda a la distracción cognitiva en dos minutos.",
        taking_off: "Lanzamiento",
        launch_date_hero: "1 de Marzo, 2026",
        ios_only: "Exclusivo para iOS",
        lifetime_price: "De por vida • Pago único",
        price_warning: "Precio Lanzamiento. Subirá a 19,99 € en la v1.2.",
        features_title: "Diseñado para el avión",
        feat_1_title: "El Flujo \"Me está dando ansiedad\"",
        feat_1_desc: "Un botón de emergencia que te lleva de la regulación a la distracción en dos minutos. Respiración guiada y juegos cognitivos.",
        feat_2_title: "Siempre disponible durante el vuelo",
        feat_2_desc: "Todo funciona localmente. Sin pantallas de carga. El audio continúa con el teléfono bloqueado.",
        feat_3_title: "Conocimientos explicados de forma sencilla",
        feat_3_desc: "Validamos tu miedo sin dramatizarlo. Explicaciones claras de la física de las turbulencias y los aviones.",
        feat_4_title: "Hápticas y Accesibilidad",
        feat_4_desc: "Ejercicios de respiración asistidos con vibración y capacidad de aumentar el tamaño del texto.",
        feat_5_title: "Sonidos Relajantes",
        feat_5_desc: "Accede a una selección de sonidos que te ayudarán a relajarte. Reprodúcelos en segundo plano para tapar el ruido de la cabine, incluso con el móvil bloqueado.",
        roadmap_title: "Hoja de Ruta",
        roadmap_sub: "Actualizaciones de por vida. Un solo precio.",
        roadmap_items: [
            { ver: "v1.0", date: "1 de Marzo", title: "Lanzamiento Global", desc: "Botón de Pánico, Modo Offline, Audio y 4 Juegos (Mates, Memoria, Secuencia)." },
            { ver: "v1.1", date: "Próximamente", title: "Medidor de Turbulencia", desc: "Monitor de Fuerza-G para probar la estabilidad." },
            { ver: "v1.2", date: "Futuro", title: "Diario y Expansión", desc: "Registra vuelos, gana medallas 'Sin Miedo' y desbloquea nuevos juegos." }
        ],
        contact_title: "Contactar con el Desarrollador",
        contact_sub: "CalmFlight está hecho con cuidado y cariño. Si tienes preguntas, envíame un mensaje.",
        send_btn: "Enviar Mensaje",
        link_privacy: "Privacidad",
        link_terms: "Términos",
        link_releases: "Versiones",
        view_roadmap: "Ver Hoja de Ruta",
        email_placeholder: "Tu correo electrónico",
        notify_btn: "Avísame",
        email_disclaimer: "Sé el primero en descargarla el 1 de Marzo.",
        price_free: "Descarga Gratuita",
        iap_badge: "Compras dentro de la app",
        premium_offer: "Premium de por vida: 14,99 € (Pago único)"
    },
    fr: {
        nav_date: "1er Mars",
        offline_badge: "100% Hors Ligne",
        headline_1: "Transformez la turbulence",
        headline_2: "en votre nouveau calme.",
        subheadline: "Quand la relaxation immédiate rencontre la connaissance. De la respiration profonde à la distraction cognitive en deux minutes.",
        taking_off: "Décollage",
        launch_date_hero: "1er Mars 2026",
        ios_only: "Exclusif pour iOS",
        lifetime_price: "À vie • Paiement unique",
        price_warning: "Prix de lancement. Passera à 19,99 € en v1.2.",
        features_title: "Conçu pour l'avion",
        feat_1_title: "Le flux \"Je fais une crise d'angoisse\"",
        feat_1_desc: "Un bouton d'urgence qui vous mène de la régulation à la distraction en deux minutes. Respiration guidée et jeux cognitivos.",
        feat_2_title: "Toujours disponible en vol",
        feat_2_desc: "Tout fonctionne localement. Pas d'écrans de chargement. L'audio continue même si le téléphone est verrouillé.",
        feat_3_title: "Connaissances expliquées simplement",
        feat_3_desc: "Nous validons votre peur sans la dramatiser. Explications claires de la physique des turbulences et des avions.",
        feat_4_title: "Haptique et Accessibilité",
        feat_4_desc: "Exercices de respiration assistés par vibration et possibilité d'augmenter la taille du texte.",
        feat_5_title: "Sons Relaxants",
        feat_5_desc: "Accédez à une sélection de sons pour vous aider à vous détendre. Jouez-les en arrière-plan pour masquer le bruit de la cabine.",
        roadmap_title: "Feuille de Route",
        roadmap_sub: "Mises à jour à vie. Prix unique.",
        roadmap_items: [
            { ver: "v1.0", date: "1er Mars", title: "Lancement", desc: "Bouton Panique, Hors Ligne, Audio et 4 Jeux (Maths, Mémoire, Séquence)." },
            { ver: "v1.1", date: "Bientôt", title: "Mètre de Turbulence", desc: "Moniteur de Force-G pour prouver la stabilité." },
            { ver: "v1.2", date: "Futur", title: "Journal et Extension", desc: "Suivez vos vols, gagnez des badges et débloquez de nouveaux jeux." }
        ],
        contact_title: "Contacter le Développeur",
        contact_sub: "CalmFlight est conçu avec soin et amour. Si vous avez des questions, envoyez-moi un message.",
        send_btn: "Envoyer Message",
        link_privacy: "Confidentialité",
        link_terms: "Conditions",
        link_releases: "Versions",
        view_roadmap: "Voir Feuille de Route",
        email_placeholder: "Votre email",
        notify_btn: "Me prévenir",
        email_disclaimer: "Soyez le premier à télécharger le 1er Mars.",
        price_free: "Téléchargement Gratuit",
        iap_badge: "Achats intégrés",
        premium_offer: "Premium à vie : 14,99 € (Paiement unique)"
    },
    de: {
        nav_date: "1. März",
        offline_badge: "100% Offline",
        headline_1: "Machen Sie Turbulenzen",
        headline_2: "zu Ihrer neuen Ruhe.",
        subheadline: "Wenn sofortige Entspannung auf Wissen trifft. Von tiefer Atmung zu kognitiver Ablenkung in zwei Minuten.",
        taking_off: "Start am",
        launch_date_hero: "1. März 2026",
        ios_only: "Exklusiv für iOS",
        lifetime_price: "Lebenslang • Einmaliger Kauf",
        price_warning: "Startpreis. Steigt in v1.2 auf 19,99 €.",
        features_title: "Für das Flugzeug entwickelt",
        feat_1_title: "Der \"Ich habe eine Panikattacke\"-Modus",
        feat_1_desc: "Ein Notfallknopf, der Sie in zwei Minuten von Regulation zu Ablenkung führt. Geführte Atmung und kognitive Spiele.",
        feat_2_title: "Immer verfügbar während des Fluges",
        feat_2_desc: "Alles läuft lokal. Keine Ladebildschirme. Audio läuft auch bei gesperrtem Handy weiter.",
        feat_3_title: "Wissen einfach erklärt",
        feat_3_desc: "Wir validieren Ihre Angst, ohne sie zu dramatisieren. Klare Erklärungen zur Physik von Turbulenzen und Flugzeugen.",
        feat_4_title: "Haptik & Barrierefreiheit",
        feat_4_desc: "Vibrationsunterstützte Atemübungen und Unterstützung für vergrößerte Schrift.",
        feat_5_title: "Entspannende Klänge",
        feat_5_desc: "Zugriff auf eine Auswahl an Klängen, die Ihnen beim Entspannen helfen. Spielen Sie diese im Hintergrund ab, um Kabinengeräusche auszublenden.",
        roadmap_title: "Roadmap",
        roadmap_sub: "Lebenslange Updates. Ein Preis.",
        roadmap_items: [
            { ver: "v1.0", date: "1. März", title: "Globaler Start", desc: "Panik-Button, Offline, Audio und 4 Spiele (Mathe, Gedächtnis, Sequenz)." },
            { ver: "v1.1", date: "Demnächst", title: "Turbulenz-Meter", desc: "G-Kraft-Monitor zum Nachweis der Stabilität." },
            { ver: "v1.2", date: "Zukunft", title: "Tagebuch & Erweiterung", desc: "Flüge tracken, 'Angstfrei'-Abzeichen verdienen und neue Spiele." }
        ],
        contact_title: "Entwickler Kontaktieren",
        contact_sub: "CalmFlight wurde mit Sorgfalt und Liebe entwickelt. Bei Fragen schreiben Sie mir direkt.",
        send_btn: "Nachricht Senden",
        link_privacy: "Datenschutz",
        link_terms: "AGB",
        link_releases: "Versionen",
        view_roadmap: "Roadmap Ansehen",
        email_placeholder: "Ihre E-Mail",
        notify_btn: "Benachrichtigen",
        email_disclaimer: "Seien Sie der Erste am 1. März.",
        price_free: "Kostenloser Download",
        iap_badge: "In-App-Käufe",
        premium_offer: "Lebenslang Premium: 14,99 € (Einmalig)"
    }
};

function toggleDropdown(e) {
    if (e) e.stopPropagation();
    const menu = document.getElementById('lang-menu');
    const arrow = document.getElementById('lang-arrow');
    if (menu && arrow) {
        menu.classList.toggle('active');
        arrow.classList.toggle('rotate-180');
    }
}

function closeDropdownOutside(e) {
    const menu = document.getElementById('lang-menu');
    const btn = document.getElementById('lang-btn');
    const arrow = document.getElementById('lang-arrow');
    if (menu && btn && menu.classList.contains('active') && !menu.contains(e.target) && !btn.contains(e.target)) {
        menu.classList.remove('active');
        arrow.classList.remove('rotate-180');
    }
}

function selectLang(lang, label) {
    const labelEl = document.getElementById('current-lang-label');
    if (labelEl) labelEl.innerText = label;

    const menu = document.getElementById('lang-menu');
    const arrow = document.getElementById('lang-arrow');
    if (menu) menu.classList.remove('active');
    if (arrow) arrow.classList.remove('rotate-180');

    document.querySelectorAll('.ph-check').forEach(el => el.style.opacity = '0');
    const check = document.getElementById('check-' + lang);
    if (check) check.style.opacity = '1';

    changeLanguage(lang);
}

function changeLanguage(lang) {
    localStorage.setItem('calmflight_lang', lang);

    // 1. Swap Static Text
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (langData[lang] && langData[lang][key]) {
            element.innerHTML = langData[lang][key];
        }
    });

    // 1.1 Swap Placeholders
    document.querySelectorAll('[data-key-placeholder]').forEach(element => {
        const key = element.getAttribute('data-key-placeholder');
        if (langData[lang] && langData[lang][key]) {
            element.placeholder = langData[lang][key];
        }
    });

    // 2. Build Roadmap (Dynamic)
    const container = document.getElementById('roadmap-container');
    if (container) {
        const line = container.querySelector('.timeline-line');
        container.innerHTML = ''; // Clear
        if (line) container.appendChild(line); // Keep line

        if (langData[lang] && langData[lang].roadmap_items) {
            langData[lang].roadmap_items.forEach((v, index) => {
                const isLatest = index === 0; // v1.0
                const div = document.createElement('div');
                div.className = "relative z-10 flex flex-col md:flex-row gap-6 md:gap-12";

                // Colors for cards
                let borderClass = 'border-white/5';
                let tag = '';

                if (index === 0) { // Launch
                    borderClass = 'border-blue-500/50 shadow-lg shadow-blue-900/20';
                    tag = `<div class="absolute -top-3 -right-3 bg-blue-600 text-white text-[10px] px-2 py-1 rounded-full font-bold shadow-lg animate-pulse">LAUNCH</div>`;
                } else if (index === 1) { // Next
                    borderClass = 'border-white/10 border-dashed';
                }

                div.innerHTML = `
                    <div class="md:w-32 flex-shrink-0 flex md:flex-col items-center md:items-end gap-2 md:gap-1 pt-2">
                        <div class="text-sm font-bold ${isLatest ? 'text-blue-400' : 'text-slate-500'}">${v.ver}</div>
                        <div class="text-xs text-slate-400 uppercase tracking-wider">${v.date}</div>
                    </div>
                    <div class="relative flex-1 ios-glass p-6 border ${borderClass}">
                        ${tag}
                        <h3 class="text-lg font-bold text-white mb-2">${v.title}</h3>
                        <p class="text-sm text-slate-400 leading-relaxed">${v.desc}</p>
                    </div>
                `;
                container.appendChild(div);
            });
        }
    }

    // 3. Swap Video Source
    const videoEl = document.getElementById('app-video');
    if (videoEl && videoFiles[lang]) {
        videoEl.src = videoFiles[lang];
        // videoEl.load(); // Can cause flickering, check if src actually changed first if possible
        // For now, let's just create a new source if needed or update attribute
    }

    // Optional: Swap the "poster" image too
    if (videoEl && mockups[lang]) {
        videoEl.poster = mockups[lang];
    }
}

// Global click listener for dropdown
window.onclick = closeDropdownOutside;

// INIT LOAD
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('calmflight_lang');
    if (savedLang) {
        const labels = { en: "English", es: "Español", fr: "Français", de: "Deutsch" };
        // We only call selectLang if we have the UI elements for it (like on index page)
        // Otherwise just changeLanguage
        if (document.getElementById('current-lang-label')) {
            selectLang(savedLang, labels[savedLang]);
        } else {
            changeLanguage(savedLang);
        }
    } else {
        // Default load (English)
        changeLanguage('en');
    }

    // Animate elements on scroll
    // Animate elements on scroll using ScrollReveal
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            origin: 'bottom',
            distance: '20px',
            duration: 800,
            delay: 200,
            opacity: 0,
            scale: 1,
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
            mobile: true,
            reset: false
        });

        sr.reveal('.ios-glass', { interval: 100 });
        sr.reveal('[data-key="headline_1"], [data-key="headline_2"], [data-key="subheadline"]', { delay: 300, interval: 100 });
        sr.reveal('.roadmap-item', { interval: 100 });
        sr.reveal('.feature-card', { interval: 100 }); // Assuming feature cards might have this class or similar
    }
});
