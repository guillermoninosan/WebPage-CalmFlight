'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage, LanguageProvider } from '@/context/LanguageContext';
import Link from 'next/link';
import useScrollReveal from '@/hooks/useScrollReveal';
import CalmCards from '@/components/CalmCards';
import FAQ from '@/components/FAQ';
import PricingComparison from '@/components/PricingComparison';

function HomeContent() {
  const { t, language } = useLanguage();
  useScrollReveal();

  const posters: Record<string, string> = {
    en: "/app_mockup_en.webp",
    es: "/app_mockup_es.webp",
    fr: "/app_mockup_fr.webp",
    de: "/app_mockup_de.webp"
  };

  const currentPoster = posters[language] || posters['en'];

  return (
    <>
      <Navbar />

      <header className="pt-32 pb-16 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            {/* Launch Badge Removed */}

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 tracking-tight" data-animate="headline">
              <span>{t('headline_1')}</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300"
              >{t('headline_2')}</span>
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed mb-6 max-w-md" data-animate="headline">
              {t('subheadline')}
            </p>

            <div className="flex items-center gap-2 text-sm text-green-400 font-medium mb-8">
              <i className="ph-fill ph-airplane-tilt"></i>
              <span>Works 100% Offline (Airplane Mode)</span>
            </div>

            <div className="w-full max-w-md mt-8">
              {/* App Store Button Replacement */}
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <a
                  href="#APP_STORE_LINK_PLACEHOLDER"
                  className="group relative overflow-hidden rounded-xl transition-all hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img
                    src={`/app_store_${language === 'en' || language === 'es' || language === 'fr' || language === 'de' ? language : 'en'}.png`}
                    alt="Download on the App Store"
                    className="h-[52px] w-auto invert brightness-0 grayscale opacity-90 group-hover:opacity-100 transition-all rounded-lg"
                    style={{ filter: 'invert(1)' }}
                  />
                </a>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <p className="text-[11px] text-slate-400 flex items-center gap-1.5 ml-1">
                  <i className="ph-fill ph-check-circle text-blue-400"></i>
                  <span>Includes pre-flight checklist</span>
                </p>
                <a href="#calm-cards" className="text-xs text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1">
                  Preview free Calm Cards <i className="ph-bold ph-arrow-down"></i>
                </a>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-start gap-3">
              <div className="text-sm text-gray-500 flex items-center gap-2">
                <i className="ph-fill ph-download-simple text-blue-400"></i>
                <span className="text-white font-bold tracking-wide">{t('price_free')}</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-400 text-xs">{t('iap_badge')}</span>
              </div>

              <div
                className="text-[11px] text-teal-300 font-medium bg-teal-500/10 border border-teal-500/20 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                <i className="ph-bold ph-infinity"></i>
                <span>{t('premium_offer')}</span>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center scale-95 md:scale-100">
            <div
              className="relative w-[280px] h-[580px] bg-black border-[8px] border-[#1c1c1e] rounded-[50px] shadow-2xl overflow-hidden ring-1 ring-white/10 transition-all duration-500">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-20"></div>

              <video
                id="app-video"
                poster={currentPoster}
                autoPlay loop muted playsInline
                key={language}
                className="w-full h-full object-cover"
              >
                <source src="/app_demo.mp4" type="video/mp4" />
                <img src={currentPoster} alt="CalmFlight App Demo" className="w-full h-full object-cover" />
              </video>
            </div>
          </div>
        </div>
      </header>

      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-8">{t('features_title')}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="ios-glass p-8 col-span-1 md:col-span-2 relative overflow-hidden group">
            <div className="relative z-10">
              <div
                className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 text-xl mb-4">
                <i className="ph-fill ph-path"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">{t('feat_1_title')}</h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
                {t('feat_1_desc')}
              </p>
            </div>
          </div>
          <div className="ios-glass p-8 col-span-1 flex flex-col justify-between">
            <div>
              <div
                className="w-10 h-10 bg-teal-500/20 rounded-full flex items-center justify-center text-teal-400 text-xl mb-4">
                <i className="ph-fill ph-airplane-in-flight"></i>
              </div>
              <h3 className="text-lg font-bold mb-3">{t('feat_2_title')}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                {t('feat_2_desc')}
              </p>
            </div>
          </div>
          <div className="ios-glass p-6">
            <div className="flex items-center gap-3 mb-3">
              <i className="ph-fill ph-chalkboard-teacher text-purple-400 text-xl"></i>
              <h3 className="font-bold text-sm">{t('feat_3_title')}</h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t('feat_3_desc')}
            </p>
          </div>
          <div className="ios-glass p-6">
            <div className="flex items-center gap-3 mb-3">
              <i className="ph-fill ph-hand-tap text-orange-400 text-xl"></i>
              <h3 className="font-bold text-sm">{t('feat_4_title')}</h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t('feat_4_desc')}
            </p>
          </div>
          <div className="ios-glass p-6">
            <div className="flex items-center gap-3 mb-3">
              <i className="ph-fill ph-headphones text-green-400 text-xl"></i>
              <h3 className="font-bold text-sm">{t('feat_5_title')}</h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t('feat_5_desc')}
            </p>
          </div>

        </div>
      </section>

      <section id="calm-cards" className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Free Calm Cards</h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">Built for in-flight moments. Read them, save them, or share them with a nervous flyer.</p>
        </div>
        <CalmCards />
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-blue-300/70">Flight Calm Journal</p>
            <h2 className="text-2xl font-bold mt-2">From the blog</h2>
          </div>
          <Link href="/blog"
            className="inline-flex items-center gap-2 text-sm text-blue-300 hover:text-white transition-colors">
            Browse all articles <i className="ph-bold ph-caret-right"></i>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="ios-glass p-6 md:p-8">
            <div className="flex items-center gap-3 text-xs text-slate-400 mb-4">
              <span className="px-2 py-1 rounded-full bg-blue-500/10 text-blue-200">Safety Basics</span>
              <span>Feb 12, 2026</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">How oxygen masks work on a plane</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              A calm, step-by-step guide to why masks drop, how they make oxygen, and what to do when they appear.
            </p>
            <Link href="/blog/oxygen-mask"
              className="inline-flex items-center gap-2 text-sm text-blue-300 hover:text-white transition-colors">
              Read article <i className="ph-bold ph-caret-right"></i>
            </Link>
          </article>
          <div className="ios-glass p-6 md:p-8 flex flex-col justify-between border border-white/5">
            <div>
              <div
                className="w-10 h-10 bg-indigo-500/20 rounded-full flex items-center justify-center text-indigo-300 text-xl mb-4">
                <i className="ph-fill ph-lightbulb"></i>
              </div>
              <h3 className="text-lg font-semibold mb-3">New articles every month</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Short, science-backed explainers to make flying feel predictable and less intimidating.
              </p>
            </div>
            <Link href="/blog"
              className="mt-6 inline-flex items-center gap-2 text-sm text-blue-300 hover:text-white transition-colors">
              Visit the blog <i className="ph-bold ph-caret-right"></i>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="text-center mb-12 relative">
          <h2 className="text-2xl font-bold mb-2">{t('roadmap_title')}</h2>
          <p className="text-slate-400 text-sm mb-4">{t('roadmap_sub')}</p>

          <Link href="/releases"
            className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-white transition-colors font-medium">
            <span>{t('view_roadmap')}</span>
            <i className="ph-bold ph-caret-right"></i>
          </Link>
        </div>

        <div className="relative space-y-8" id="roadmap-container">
          <div className="timeline-line hidden md:block"></div>
          <RoadmapList />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-8 text-center">Fair Pricing, Forever</h2>
        <PricingComparison />
      </section>

      <section className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <FAQ />
      </section>

      <section className="max-w-3xl mx-auto px-6 py-12 mb-12">
        <div className="ios-glass p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">{t('contact_title')}</h2>
          <p className="text-slate-400 text-sm mb-6 max-w-md mx-auto">
            {t('contact_sub')}
          </p>
          <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="max-w-sm mx-auto space-y-4">
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />

            <input type="text" name="name" placeholder="Name" required
              className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" />

            <input type="email" name="email" placeholder="Email" required
              className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" />

            <textarea name="message" placeholder="Message" rows={3} required
              className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"></textarea>

            <button type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition-all">
              {t('send_btn')}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

function RoadmapList() {
  const { language } = useLanguage();

  const text: Record<string, any[]> = {
    en: [
      { ver: "v1.0", date: "Released", title: "Live on App Store", desc: "Panic Button, Cognitive Games, Flight Facts." },
      { ver: "v1.1", date: "In Development", title: "Turbulence Meter", desc: "Real-time G-Force monitor, Expanded Aviation Content." },
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
      <div className="timeline-line hidden md:block"></div>
      {items.map((v: any, index: any) => {
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
    </>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
}
