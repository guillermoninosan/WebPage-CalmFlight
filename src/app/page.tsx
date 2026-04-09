'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { articles } from '@/lib/articles';
import { LanguageProvider, useLanguage } from '@/context/LanguageContext';

const APP_STORE_LINKS: Record<string, string> = {
  en: 'https://apps.apple.com/us/app/calmflight-flight-anxiety/id6758919357',
  es: 'https://apps.apple.com/es/app/calmflight-miedo-a-volar/id6758919357',
  fr: 'https://apps.apple.com/fr/app/calmflight-flight-anxiety/id6758919357',
  de: 'https://apps.apple.com/de/app/calmflight-flight-anxiety/id6758919357',
};

function HomeContent() {
  const { language } = useLanguage();
  const appStoreLink = APP_STORE_LINKS[language] || APP_STORE_LINKS.en;
  const appStoreBadge = `/app_store_${language}.png`;
  const appMockup = `/app_mockup_${language}.webp`;

  return (
    <main className="min-h-screen bg-[#050a14] text-white flex flex-col">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-[100] outline-none ring-2 ring-white">
        Skip to content
      </a>
      <Navbar />

      <div id="main-content" className="flex-1">

        {/* ===== HERO ===== */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-[#050a14] to-purple-900/10 pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E")' }} />

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">

              {/* Left: copy + CTA */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-400/30 bg-green-500/10 text-green-300 text-[11px] font-bold uppercase tracking-wider mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span>Now Available on the App Store</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold leading-[1.1] mb-5 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-300">
                  Calm down mid-flight — even with zero Wi-Fi.
                </h1>

                <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                  A science-backed iOS app with guided breathing, focus tools, and calming sounds. Works in airplane mode — no internet, no account, no subscription needed.
                </p>

                <a
                  href={appStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:scale-105 active:scale-95 transition-transform mb-6"
                  aria-label="Download CalmFlight on the App Store"
                >
                  <Image
                    src={appStoreBadge}
                    alt="Download on the App Store"
                    width={160}
                    height={54}
                    className="h-[52px] w-auto"
                    unoptimized
                  />
                </a>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-xs font-medium inline-flex items-center gap-1">
                    <i className="ph-fill ph-check-circle"></i> Works offline
                  </span>
                  <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-xs font-medium inline-flex items-center gap-1">
                    <i className="ph-fill ph-check-circle"></i> No account needed
                  </span>
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium inline-flex items-center gap-1">
                    <i className="ph-fill ph-download-simple"></i> Free download
                  </span>
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium inline-flex items-center gap-1">
                    <i className="ph-bold ph-infinity"></i> $12.99 lifetime premium
                  </span>
                </div>
              </div>

              {/* Right: phone mockup */}
              <div className="flex justify-center md:justify-end">
                <div className="relative w-[260px] h-[540px] bg-black border-[8px] border-[#1c1c1e] rounded-[50px] shadow-2xl overflow-hidden ring-1 ring-white/10">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl z-20" />
                  <video
                    poster={appMockup}
                    autoPlay
                    loop
                    muted
                    playsInline
                    key={language}
                    className="w-full h-full object-cover"
                  >
                    <source src="/app_demo.mp4" type="video/mp4" />
                    <img src={appMockup} alt="CalmFlight app demo" className="w-full h-full object-cover" />
                  </video>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===== FEATURES ===== */}
        <section aria-label="App features" className="py-16 px-6 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="ios-glass p-8 rounded-3xl border border-white/10">
                <div className="w-12 h-12 rounded-2xl bg-red-500/20 flex items-center justify-center mb-4">
                  <i className="ph-fill ph-heartbeat text-red-400 text-2xl"></i>
                </div>
                <h2 className="text-lg font-bold mb-2">Panic Button</h2>
                <p className="text-slate-400 text-sm leading-relaxed">One tap launches a 2-minute guided grounding flow: haptic breathing, then a cognitive focus task or calm audio.</p>
              </div>
              <div className="ios-glass p-8 rounded-3xl border border-white/10">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-4">
                  <i className="ph-fill ph-music-notes text-blue-400 text-2xl"></i>
                </div>
                <h2 className="text-lg font-bold mb-2">Calm Audio</h2>
                <p className="text-slate-400 text-sm leading-relaxed">High-quality background sounds that mask cabin noise. Keeps playing with your screen locked.</p>
              </div>
              <div className="ios-glass p-8 rounded-3xl border border-white/10">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-4">
                  <i className="ph-fill ph-brain text-purple-400 text-2xl"></i>
                </div>
                <h2 className="text-lg font-bold mb-2">Focus Games</h2>
                <p className="text-slate-400 text-sm leading-relaxed">Math, Memory, and Sequence tasks redirect anxious bandwidth — forcing your brain out of the "what if" spiral.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 2-MINUTE RESET ===== */}
        <section id="reset" className="py-14 md:py-16 px-6">
          <div className="max-w-[72ch] mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">What happens in 2 minutes</h2>
            <p className="text-base text-slate-400 mb-10">A simple mid-flight reset — no internet required.</p>
            <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 md:gap-6 mb-6">
              <div className="flex-1 ios-glass p-6 rounded-2xl flex items-center justify-center text-center font-semibold text-[17px] border border-white/10">
                1. Tap Panic Button
              </div>
              <div className="hidden md:flex items-center text-slate-500">
                <i className="ph-bold ph-arrow-right text-2xl"></i>
              </div>
              <div className="flex-1 ios-glass p-6 rounded-2xl flex items-center justify-center text-center font-semibold text-[17px] border border-white/10">
                2. 60–90s guided breathing
              </div>
              <div className="hidden md:flex items-center text-slate-500">
                <i className="ph-bold ph-arrow-right text-2xl"></i>
              </div>
              <div className="flex-1 ios-glass p-6 rounded-2xl flex items-center justify-center text-center font-semibold text-[17px] border border-white/10">
                3. Focus task or calm audio
              </div>
            </div>
            <p className="text-sm text-slate-500">No setup needed. Works in airplane mode.</p>
          </div>
        </section>

        {/* ===== TOC JUMP ROW ===== */}
        <nav aria-label="Page sections" className="py-5 px-4 bg-black/40 border-b border-white/5 sticky top-16 z-40 backdrop-blur-md hidden sm:block">
          <div className="max-w-[1040px] mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium">
              <span className="text-slate-500 uppercase tracking-widest text-xs">On this page:</span>
              <a href="#turbulence" className="text-slate-300 hover:text-white transition-colors">Turbulence explained</a>
              <a href="#body" className="text-slate-300 hover:text-white transition-colors">Why your body reacts</a>
              <a href="#moment" className="text-slate-300 hover:text-white transition-colors">What to do mid-flight</a>
              <a href="#fears" className="text-slate-300 hover:text-white transition-colors">Common fears</a>
              <a href="#articles" className="text-slate-300 hover:text-white transition-colors">Articles</a>
              <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</a>
            </div>
          </div>
        </nav>

        {/* ===== PHYSICS STRIP ===== */}
        <section className="py-14 md:py-16 px-6">
          <div className="max-w-[72ch] md:max-w-[1040px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 max-w-2xl leading-tight text-center md:text-left mx-auto md:mx-0">
              Fear thrives on the unknown. Here&apos;s what&apos;s actually happening.
            </h2>
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              <div className="ios-glass p-6 md:p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all shadow-lg">
                <h3 className="text-xl font-bold mb-3">It feels like falling</h3>
                <p className="text-slate-400 leading-relaxed text-sm">You&apos;re usually feeling a quick change in vertical airflow, not an actual drop.</p>
              </div>
              <div className="ios-glass p-6 md:p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all shadow-lg">
                <h3 className="text-xl font-bold mb-3">Wings bending looks scary</h3>
                <p className="text-slate-400 leading-relaxed text-sm">That flexibility is by design; it absorbs turbulence forces and reduces stress on the airframe.</p>
              </div>
              <div className="ios-glass p-6 md:p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all shadow-lg">
                <h3 className="text-xl font-bold mb-3">Turbulence = danger</h3>
                <p className="text-slate-400 leading-relaxed text-sm">Turbulence is uncomfortable, but aircraft are engineered and pilots plan for it. It&apos;s a non-event structurally.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== EXPANDED GUIDE (SEO content) ===== */}
        <section id="guide" className="py-14 md:py-16 px-4 bg-gradient-to-b from-transparent to-white/[0.02]">
          <div className="max-w-[72ch] mx-auto text-slate-300 leading-relaxed text-base space-y-12">

            <div className="border-b border-white/10 pb-10 space-y-4">
              <h2 className="text-2xl font-bold mb-0 text-white tracking-tight">Why a focus task can calm the spiral.</h2>
              <p className="mb-0">You can&apos;t force anxiety off with willpower — but you can redirect attention. Short, demanding tasks (like quick mental math) use the same mental bandwidth that anxious spirals rely on. For many people, that shift reduces intensity and helps the body settle.</p>
              <div className="inline-flex items-center px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-200 text-sm font-medium">
                Breathe first, then switch to focus.
              </div>
            </div>

            <div id="body" className="space-y-4">
              <h3 className="text-xl font-bold mb-0 text-white">The Anatomy of a Panic Spiral</h3>
              <p className="mb-0">Flight anxiety rarely begins exactly at 35,000 feet. Instead, it often starts days before the flight, accumulating through packing, navigating the airport, waiting at the gate, and finally boarding. By the time you sit down and hear the cabin doors close, your baseline stress level is already elevated. You are pre-loaded with adrenaline.</p>
              <p className="mb-0">Because of this heightened state, your amygdala — the brain&apos;s threat detection center — is on high alert. When a normal flight event occurs, such as a change in engine pitch or a bump of turbulence, your amygdala interprets it as extreme threat. This triggers the spiral: racing heart, shallow breathing, an overwhelming urge to escape.</p>
            </div>

            {/* Tool Insert 1 */}
            <div className="p-5 bg-white/[0.03] border border-white/10 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4 border-l-4 border-l-blue-500 shadow-xl">
              <div className="flex-1">
                <h4 className="font-bold text-white text-sm mb-1">In the app: Quick Focus</h4>
                <p className="text-sm text-slate-400 mb-2">Rapid mental math tasks that force your brain out of the "what if" spiral by making you calculate.</p>
                <a href={appStoreLink} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-400 hover:text-white font-semibold transition-colors">Download CalmFlight &rarr;</a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-0 text-white">Why &quot;Just Relax&quot; Backfires</h3>
              <p className="mb-0">One of the most frustrating things a nervous flyer can hear is &quot;just relax.&quot; While well-intentioned, these statements invalidate a legitimate physiological experience. Worse, trying to force yourself to relax often produces the opposite effect — you become anxious about the fact that you cannot stop being anxious.</p>
              <p className="mb-0">The key is not to fight anxiety directly, but to accept its presence while gently shifting your brain&apos;s processing power. Think of your brain like a computer. Anxious thoughts act like a background program consuming 90% of your CPU. You cannot command the program to stop — instead, you must open a new, demanding application that forces the computer to reallocate resources. This is where active cognitive tasks come in.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-0 text-white">The Biology of the Fight-or-Flight Response</h3>
              <p className="mb-0">Your body is having an absolutely perfect, healthy reaction — just to the wrong stimulus. The fight-or-flight response evolved to protect us from physical danger. It pumps adrenaline, quickens breathing, and dilates pupils. It is preparing you to run or fight.</p>
              <p className="mb-0">Sitting strapped into a narrow seat at cruising altitude, you can do neither. The physical energy has nowhere to go. This mismatch between your body&apos;s preparation and your physical reality is deeply uncomfortable. However, nothing is &quot;wrong&quot; with your body — it is functioning exactly as millions of years of evolution designed it to.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-0 text-white">The Biological Override: Guided Breathing</h3>
              <p className="mb-0">While you cannot directly control your heart rate or adrenaline production, you do have manual control over your breathing. Breathing is the only part of the autonomic nervous system that you can consciously pilot. By taking slow, deep breaths — specifically emphasizing a longer exhale — you send a direct signal to your vagus nerve.</p>
              <p className="mb-0">The vagus nerve activates the parasympathetic nervous system (&quot;rest and digest&quot;). A long exhale physically lowers your heart rate. This is not a psychological trick; it is biology. However, when panic strikes, remembering how to breathe correctly is exceptionally difficult — which is why having a visual and haptic guide is crucial for interrupting the cycle.</p>
            </div>

            {/* Tool Insert 2 */}
            <div className="p-5 bg-white/[0.03] border border-white/10 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4 border-l-4 border-l-red-500 shadow-xl">
              <div className="flex-1">
                <h4 className="font-bold text-white text-sm mb-1">In the app: Panic Button</h4>
                <p className="text-sm text-slate-400 mb-2">A large, accessible button that immediately launches a haptic-guided grounding exercise — designed for when you can barely think straight.</p>
                <a href={appStoreLink} target="_blank" rel="noopener noreferrer" className="text-xs text-red-400 hover:text-white font-semibold transition-colors">Download CalmFlight &rarr;</a>
              </div>
            </div>

            <div id="turbulence" className="space-y-4">
              <h3 className="text-xl font-bold mb-0 text-white">Demystifying Turbulence: The Jell-O Analogy</h3>
              <p className="mb-0">Turbulence is the primary trigger for most flight anxiety. When the plane shakes, it intuitively feels like the aircraft is falling or losing control. In reality, turbulence is simply rough air — much like navigating a boat over choppy waves. The plane is not dropping into a vacuum; it is interacting with changes in air currents, temperature, and pressure.</p>
              <p className="mb-0">Imagine a toy airplane suspended in a bowl of Jell-O. If you tap the side, the Jell-O shakes, and the toy shakes with it — but the plane cannot fall to the bottom. The Jell-O surrounds it from all angles. Atmosphere acts mathematically like a fluid at high speeds. The air holds the plane just as securely as the Jell-O holds the toy. It may be bumpy, but you are completely supported.</p>
            </div>

            <div id="moment" className="space-y-4">
              <h3 className="text-xl font-bold mb-0 text-white">Preparation vs. Improvisation</h3>
              <p className="mb-0">Managing flight anxiety is not about achieving perfect zen or eliminating fear entirely. It is about equipping yourself with reliable, science-based tools for when the fear inevitably arises. Trying to invent a coping mechanism mid-flight at 35,000 feet, without an internet connection, is setting yourself up for failure.</p>
              <p className="mb-0">By understanding the physiology of panic, recognizing the safety of modern aviation, and having immediate offline tools ready the moment you sit down, you transform fear from an overwhelming tidal wave into a manageable wave you can safely ride out.</p>
            </div>

          </div>
        </section>

        {/* ===== COMMON FEARS FAQ ===== */}
        <section id="fears" className="py-14 md:py-16 px-4 bg-black/20">
          <div className="max-w-[72ch] mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center md:text-left">Common Fears Explained</h2>
            <div className="space-y-3">
              <details className="ios-glass p-5 rounded-xl group cursor-pointer border border-white/10 [&_summary::-webkit-details-marker]:hidden">
                <summary className="font-bold text-base flex justify-between items-center text-white outline-none">
                  What if the engines fail?
                  <span className="text-slate-500 group-open:rotate-45 transition-transform duration-300 text-xl leading-none">+</span>
                </summary>
                <div className="pt-3 text-slate-400 leading-relaxed text-sm">
                  Modern commercial jets are designed to fly safely even if an engine fails. Twin-engine planes are certified (ETOPS) to fly for hours on a single engine to reach an alternate airport. Even if all engines stopped — an incredibly rare event — a plane does not drop from the sky. It becomes a highly efficient glider. From cruising altitude, a commercial jet can glide a very long distance, giving pilots ample time to land safely.
                </div>
              </details>
              <details className="ios-glass p-5 rounded-xl group cursor-pointer border border-white/10 [&_summary::-webkit-details-marker]:hidden">
                <summary className="font-bold text-base flex justify-between items-center text-white outline-none">
                  Can turbulence crash a plane?
                  <span className="text-slate-500 group-open:rotate-45 transition-transform duration-300 text-xl leading-none">+</span>
                </summary>
                <div className="pt-3 text-slate-400 leading-relaxed text-sm">
                  No. Modern aircraft are engineered to withstand forces far beyond any naturally occurring turbulence. Wings are designed to flex significantly to absorb impact without snapping. While severe turbulence can be terrifying, it is not a structural threat to the airplane.
                </div>
              </details>
              <details className="ios-glass p-5 rounded-xl group cursor-pointer border border-white/10 [&_summary::-webkit-details-marker]:hidden">
                <summary className="font-bold text-base flex justify-between items-center text-white outline-none">
                  What if a door opens mid-flight?
                  <span className="text-slate-500 group-open:rotate-45 transition-transform duration-300 text-xl leading-none">+</span>
                </summary>
                <div className="pt-3 text-slate-400 leading-relaxed text-sm">
                  Airplane doors cannot be opened in normal flight conditions. The cabin is pressurized, so the pressure inside is much higher than outside. The doors — which open inward like a plug — are held against the airframe with immense force. Even the strongest person could not pull a door open against that pressure difference.
                </div>
              </details>
              <details className="ios-glass p-5 rounded-xl group cursor-pointer border border-white/10 [&_summary::-webkit-details-marker]:hidden">
                <summary className="font-bold text-base flex justify-between items-center text-white outline-none">
                  Why does takeoff feel so intense?
                  <span className="text-slate-500 group-open:rotate-45 transition-transform duration-300 text-xl leading-none">+</span>
                </summary>
                <div className="pt-3 text-slate-400 leading-relaxed text-sm">
                  Takeoff requires massive thrust to reach lift-off speed. The steep nose pitch after liftoff can trigger a falling sensation in your inner ear. Shortly after, pilots reduce engine power slightly for noise abatement — this sudden drop in sound can make your brain think the plane is stalling or dropping. It is a completely normal, controlled procedure.
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* ===== LATEST ARTICLES ===== */}
        <section id="articles" className="py-14 md:py-16 px-4 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-[1040px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-blue-300/70 mb-2">Knowledge is Power</p>
                <h2 className="text-2xl font-bold">Latest Articles</h2>
              </div>
              <Link href="/blog" className="text-sm text-blue-400 hover:text-white transition-colors font-medium flex items-center gap-2">
                View all articles <i className="ph-bold ph-arrow-right"></i>
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {articles.slice(0, 6).map((article, idx) => (
                <Link
                  key={idx}
                  href={article.status === 'published' ? `/blog/${article.slug}` : '/blog'}
                  className={`ios-glass p-6 min-h-[160px] rounded-2xl border border-white/10 transition-all flex flex-col group h-full ${article.status === 'published' ? 'hover:border-white/30 hover:bg-slate-800/80' : 'opacity-80'}`}
                >
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                    <span className="px-2 py-1 rounded-full bg-blue-500/10 text-blue-200">{article.tag}</span>
                    <span>{article.status === 'published' ? article.date : 'Coming Soon'}</span>
                  </div>
                  <h3 className={`font-bold text-lg mb-2 leading-snug ${article.status === 'published' ? 'group-hover:text-blue-300 transition-colors' : ''}`}>{article.title}</h3>
                  <p className="text-sm text-slate-400 line-clamp-2 mb-4 flex-1">{article.excerpt}</p>
                  <div className={`text-xs font-semibold flex items-center gap-1 ${article.status === 'published' ? 'text-blue-400 group-hover:text-white transition-colors' : 'text-slate-500'}`}>
                    {article.status === 'published' && <><span>Read article</span><i className="ph-bold ph-caret-right"></i></>}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PRICING ===== */}
        <section id="pricing" className="py-16 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-blue-300/70 mb-2">Simple, honest pricing</p>
            <h2 className="text-2xl font-bold mb-10">One price. A lifetime of calm.</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">

              <div className="ios-glass p-8 rounded-3xl border border-white/10">
                <div className="text-2xl font-bold mb-1">Free</div>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">Everything you need to get through a flight.</p>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-start gap-2"><i className="ph-fill ph-check-circle text-green-400 mt-0.5"></i><span>Full Panic Button flow</span></li>
                  <li className="flex items-start gap-2"><i className="ph-fill ph-check-circle text-green-400 mt-0.5"></i><span>Guided haptic breathing</span></li>
                  <li className="flex items-start gap-2"><i className="ph-fill ph-check-circle text-green-400 mt-0.5"></i><span>Math focus game</span></li>
                  <li className="flex items-start gap-2"><i className="ph-fill ph-check-circle text-green-400 mt-0.5"></i><span>Select Calm Cards</span></li>
                </ul>
                <a
                  href={appStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 block text-center py-3 px-6 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white font-semibold text-sm transition-all"
                >
                  Download Free
                </a>
              </div>

              <div className="ios-glass p-8 rounded-3xl border border-blue-500/40 relative overflow-hidden bg-blue-900/10">
                <div className="absolute top-4 right-4 px-2 py-0.5 bg-blue-600 text-white text-[10px] font-bold rounded-full uppercase tracking-wide">One-time</div>
                <div className="text-2xl font-bold mb-1">$12.99 <span className="text-base font-normal text-slate-400">USD</span></div>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">Every feature, every update. No subscription, ever.</p>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-start gap-2"><i className="ph-fill ph-check-circle text-blue-400 mt-0.5"></i><span>Everything in Free</span></li>
                  <li className="flex items-start gap-2"><i className="ph-fill ph-check-circle text-blue-400 mt-0.5"></i><span>Full calm audio library</span></li>
                  <li className="flex items-start gap-2"><i className="ph-fill ph-check-circle text-blue-400 mt-0.5"></i><span>Memory &amp; Sequence games</span></li>
                  <li className="flex items-start gap-2"><i className="ph-fill ph-check-circle text-blue-400 mt-0.5"></i><span>Complete Calm Cards collection</span></li>
                  <li className="flex items-start gap-2"><i className="ph-bold ph-infinity text-blue-400 mt-0.5"></i><span>All future updates included</span></li>
                </ul>
                <a
                  href={appStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 block text-center py-3 px-6 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all"
                >
                  Get Lifetime Premium
                </a>
              </div>

            </div>
            <p className="mt-6 text-xs text-slate-500">€14.99 EUR · No subscription · Unlocked permanently via App Store in-app purchase</p>
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section id="download" className="py-20 px-4 text-center border-t border-white/5 bg-gradient-to-t from-blue-900/10 to-transparent">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Your calm space at 35,000 feet.</h2>
            <p className="text-base text-slate-300 mb-8 leading-relaxed">
              No Wi-Fi needed. No subscriptions. No tracking. Just practical tools when you need them most.
            </p>
            <a
              href={appStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:scale-105 active:scale-95 transition-transform"
              aria-label="Download CalmFlight on the App Store"
            >
              <Image
                src={appStoreBadge}
                alt="Download on the App Store"
                width={160}
                height={54}
                className="h-[52px] w-auto mx-auto"
                unoptimized
              />
            </a>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-xs font-medium inline-flex items-center gap-1"><i className="ph-fill ph-check-circle"></i> Works offline</span>
              <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-xs font-medium inline-flex items-center gap-1"><i className="ph-fill ph-check-circle"></i> No account needed</span>
              <span className="px-3 py-1 rounded-full bg-slate-800 border border-white/10 text-slate-400 text-xs font-medium inline-flex items-center gap-1"><i className="ph-bold ph-device-mobile"></i> iOS only</span>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
}
