'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { articles } from '@/lib/articles';
import { LanguageProvider, useLanguage } from '@/context/LanguageContext';

function HomeContent() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[#050a14] text-white flex flex-col">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-[100] outline-none ring-2 ring-white">
        Skip to content
      </a>
      <Navbar />

      <div id="main-content" className="flex-1">

        {/* A) HERO */}
        <section className="relative pt-40 pb-16 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-[#050a14] to-purple-900/10 pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E")' }} />

          <div className="max-w-[72ch] mx-auto relative z-10 text-center md:text-left">
            <h1 className="text-4xl md:text-[52px] font-bold leading-[1.1] mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-300 md:mx-0 mx-auto">
              Calm down mid-flight — even with zero Wi-Fi.
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-4 leading-relaxed md:mx-0 mx-auto">
              Simple tools for flight anxiety: guided breathing, quick focus tasks, calming sounds, and clear explanations — built for airplane mode.
            </p>
            <p className="text-base md:text-lg text-slate-300 mb-2 leading-relaxed md:mx-0 mx-auto">
              This is a calm, practical guide for nervous flyers. Start with the 2-minute reset, then read the explanations when you’re ready.
            </p>
            <p className="text-sm text-slate-500 mb-8 md:mx-0 mx-auto">
              Read time: ~6 min
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a href="#reset" className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#050a14]">
                Start with the 2-minute reset
              </a>
              <Link href="/blog" className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-semibold rounded-full transition-all backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#050a14] text-center">
                Browse articles
              </Link>
            </div>
            <div className="mt-8 text-center md:text-left">
              <a href="#download" className="text-sm text-blue-400 hover:text-white transition-colors underline-offset-4 hover:underline">
                Get the offline tool &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* B) START HERE: THE 2-MINUTE STRIP */}
        <section id="reset" className="py-14 md:py-16 px-6 bg-white/[0.02] border-y border-white/5 overflow-hidden">
          <div className="max-w-[72ch] mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Start here: What you get in 2 minutes</h2>
            <p className="text-base text-slate-400 mb-8 mx-auto">
              A simple reset you can use mid-flight.
            </p>
            <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 md:gap-6 mb-6">
              <div className="flex-1 ios-glass p-6 rounded-2xl flex items-center justify-center text-center font-semibold text-[17px] border border-white/10">
                1. Tap Panic Button
              </div>
              <div className="hidden md:flex items-center text-slate-500">
                <i className="ph-bold ph-arrow-right text-2xl"></i>
              </div>
              <div className="flex-1 ios-glass p-6 rounded-2xl flex items-center justify-center text-center font-semibold text-[17px] border border-white/10">
                2. 60–90 seconds guided breathing
              </div>
              <div className="hidden md:flex items-center text-slate-500">
                <i className="ph-bold ph-arrow-right text-2xl"></i>
              </div>
              <div className="flex-1 ios-glass p-6 rounded-2xl flex items-center justify-center text-center font-semibold text-[17px] border border-white/10">
                3. 60 seconds focus task or calm audio
              </div>
            </div>
            <p className="text-sm text-slate-500">No setup. Works in airplane mode.</p>
          </div>
        </section>

        {/* TOC JUMP ROW */}
        <section className="py-6 px-4 bg-black/40 border-b border-white/5 sticky top-16 z-40 backdrop-blur-md hidden sm:block">
          <div className="max-w-[1040px] mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium">
              <span className="text-slate-500 uppercase tracking-widest text-xs">On this page:</span>
              <a href="#turbulence" className="text-slate-300 hover:text-white transition-colors">Understanding turbulence</a>
              <a href="#body" className="text-slate-300 hover:text-white transition-colors">Why your body reacts</a>
              <a href="#moment" className="text-slate-300 hover:text-white transition-colors">What to do in the moment</a>
              <a href="#fears" className="text-slate-300 hover:text-white transition-colors">Common fears</a>
              <a href="#articles" className="text-slate-300 hover:text-white transition-colors">Latest articles</a>
            </div>
          </div>
        </section>

        {/* D) PHYSICS OF FLIGHT */}
        <section className="py-14 md:py-16 px-6">
          <div className="max-w-[72ch] md:max-w-[1040px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 max-w-2xl leading-tight text-center md:text-left mx-auto md:mx-0">
              Fear thrives on the unknown. Here’s what’s actually happening.
            </h2>
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              <div className="ios-glass p-6 md:p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all shadow-lg">
                <h3 className="text-xl font-bold mb-3">It feels like falling</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  You’re usually feeling a quick change in vertical airflow, not a ‘drop.’
                </p>
              </div>
              <div className="ios-glass p-6 md:p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all shadow-lg">
                <h3 className="text-xl font-bold mb-3">Wings bending looks scary</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  That flexibility is by design; it helps absorb forces.
                </p>
              </div>
              <div className="ios-glass p-6 md:p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all shadow-lg">
                <h3 className="text-xl font-bold mb-3">Turbulence = danger</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Turbulence is uncomfortable, but aircraft are engineered and pilots plan for it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* E) WHY THIS WORKS (EXPANDED GUIDE) */}
        <section id="guide" className="py-14 md:py-16 px-4 bg-gradient-to-b from-transparent to-white/[0.02]">
          <div className="max-w-[72ch] mx-auto text-slate-300 leading-relaxed text-base space-y-12">

            <div className="border-b border-white/10 pb-10 space-y-4">
              <h2 className="text-2xl font-bold mb-0 text-white tracking-tight">Why a focus task can calm the spiral.</h2>
              <p className="mb-0">You can’t force anxiety off with willpower — but you can redirect attention. Short, demanding tasks (like quick mental math) use the same ‘mental bandwidth’ that anxious spirals rely on. For many people, that shift reduces intensity and helps the body settle.</p>
              <div className="inline-flex items-center px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-200 text-sm font-medium">
                Breathe first, then switch to focus.
              </div>
            </div>

            <div id="body" className="space-y-4">
              <h3 className="text-xl font-bold mb-0 text-white">The Anatomy of a Panic Spiral</h3>
              <p className="mb-0">Flight anxiety rarely begins exactly at 35,000 feet. Instead, it often starts days before the flight, accumulating through packing, navigating the airport, waiting at the gate, and finally boarding the aircraft. By the time you sit in your seat and hear the cabin doors close, your baseline stress level is already elevated. You are essentially pre-loaded with adrenaline.</p>
              <p className="mb-0">Because of this heightened state, your amygdala—the brain’s threat detection center—is on high alert. It is scanning the environment for danger. When a normal flight event occurs, such as a change in engine pitch during climb or a bump of turbulence, your amygdala interprets it as an extreme threat. This triggers a cascade of physiological responses: a racing heart, shallow breathing, sweating, and an overwhelming desire to escape. This is the spiral.</p>
            </div>

            {/* Subtle Tool Insert 1 */}
            <div className="p-5 bg-white/[0.03] border border-white/10 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4 border-l-4 border-l-blue-500 shadow-xl">
              <div className="flex-1">
                <h4 className="font-bold text-white text-sm mb-1">Tool Insert: Quick Focus</h4>
                <p className="text-sm text-slate-400 mb-2">Engage your working memory with rapid mental math. This forces your brain out of the "what if" spiral by making you calculate.</p>
                <a href="#download" className="text-xs text-blue-400 hover:text-white font-semibold transition-colors">Included in CalmFlight &rarr;</a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-0 text-white">Why "Just Relax" Backfires</h3>
              <p className="mb-0">One of the most frustrating things a nervous flyer can hear is "just relax" or "there is nothing to worry about." While well-intentioned, these statements invalidate your legitimate physiological experience. Worse, trying to force yourself to relax often produces the opposite effect. It creates a secondary layer of anxiety: you become anxious about the fact that you cannot stop being anxious.</p>
              <p className="mb-0">The key is not to fight the anxiety directly, but to accept its presence while gently shifting your brain's processing power. Think of your brain like a computer. Anxious thoughts act like a background program consuming 90% of your CPU. You cannot simply command the program to stop. Instead, you must open a new, demanding application that forces the computer to reallocate resources. This is where active cognitive tasks come into play.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-0 text-white">The Biology of the Fight-or-Flight Response</h3>
              <p className="mb-0">Understand that your body is having an absolutely perfect, healthy reaction—just to the wrong stimulus. The fight-or-flight response evolved to keep us alive when facing immediate physical danger, like a predator. It pumps adrenaline to our muscles, quickens our breathing to take in more oxygen, and dilates our pupils. It is preparing you to run or fight.</p>
              <p className="mb-0">Sitting strapped into a narrow seat at cruising altitude, you can do neither. The physical energy has nowhere to go. This mismatch between your body's preparation and your physical reality is deeply uncomfortable. However, nothing is actually "wrong" with your body; it is functioning exactly as millions of years of evolution designed it to.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-0 text-white">The Biological Override: Guided Breathing</h3>
              <p className="mb-0">While you cannot directly control your heart rate or adrenaline production, you do have manual control over your breathing. Breathing is the only part of the autonomic nervous system that you can consciously pilot. By intentionally taking slow, deep breaths—specifically emphasizing a longer exhale—you send a direct, mechanical signal to your vagus nerve.</p>
              <p className="mb-0">The vagus nerve activates the parasympathetic nervous system, commonly known as the "rest and digest" system. A long exhale physically lowers your heart rate. This is not a psychological trick; it is biology. However, when panic strikes, remembering how to breathe correctly, or maintaining the rhythm, is exceptionally difficult. This is why having a visual and tactile guide (like haptic feedback) is crucial for interrupting the cycle.</p>
            </div>

            {/* Subtle Tool Insert 2 */}
            <div className="p-5 bg-white/[0.03] border border-white/10 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4 border-l-4 border-l-red-500 shadow-xl">
              <div className="flex-1">
                <h4 className="font-bold text-white text-sm mb-1">Tool Insert: Panic Button</h4>
                <p className="text-sm text-slate-400 mb-2">A giant, accessible button that immediately launches a guided grounding exercise—designed for when you can barely think straight.</p>
                <a href="#download" className="text-xs text-red-400 hover:text-white font-semibold transition-colors">Included in CalmFlight &rarr;</a>
              </div>
            </div>

            <div id="turbulence" className="space-y-4">
              <h3 className="text-xl font-bold mb-0 text-white">Demystifying Turbulence: The Jell-O Analogy</h3>
              <p className="mb-0">Turbulence is frequently the primary trigger for flight anxiety. When the plane shakes, it intuitively feels like the aircraft is falling out of the sky or losing control. In reality, turbulence is simply roughly mixing air—much like navigating a boat over choppy waves. The plane is not dropping into a vacuum; it is interacting with changes in air currents, temperature, and pressure.</p>
              <p className="mb-0">A helpful visualization is the "Jell-O analogy." Imagine a toy airplane suspended in the center of a bowl of Jell-O. If you tap the side of the bowl, the Jell-O shakes, and the toy airplane shakes with it. However, the plane cannot fall to the bottom. The Jell-O completely surrounds it, supporting it from all angles. Atmosphere acts mathematically like a fluid. At high speeds, the air holds the plane just as securely as the Jell-O holds the toy. It may be bumpy, but you are completely supported.</p>
            </div>

            <div id="moment" className="space-y-4">
              <h3 className="text-xl font-bold mb-0 text-white">Preparation vs. Improvisation</h3>
              <p className="mb-0">Managing flight anxiety is not about achieving perfect zen or eliminating fear entirely. It is about equipping yourself with reliable, science-based tools for when the fear inevitably arises. Trying to suddenly invent a coping mechanism while surrounded by strangers at 35,000 feet, without an internet connection, is setting yourself up for failure.</p>
              <p className="mb-0">By understanding the physiological mechanisms of panic, recognizing the safety of modern aviation, and having immediate, offline tools ready the moment you sit down, you transform fear from an overwhelming tidal wave into a manageable wave you can safely ride out.</p>
            </div>

          </div>
        </section>

        {/* COMMON FEARS FAQ (Semantic blocks) */}
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
                  Modern commercial jets are designed to fly completely safely even if an engine fails. In fact, twin-engine planes are certified (under ETOPS regulations) to fly for hours on a single engine to reach an alternate airport. Furthermore, even if all engines were to stop—an incredibly rare event—a plane does not drop out of the sky. It becomes a highly efficient glider. From a typical cruising altitude, a commercial jet can glide for 60 to 80 miles, giving the pilots ample time to safely land the aircraft.
                </div>
              </details>

              <details className="ios-glass p-5 rounded-xl group cursor-pointer border border-white/10 [&_summary::-webkit-details-marker]:hidden">
                <summary className="font-bold text-base flex justify-between items-center text-white outline-none">
                  Can turbulence crash a plane?
                  <span className="text-slate-500 group-open:rotate-45 transition-transform duration-300 text-xl leading-none">+</span>
                </summary>
                <div className="pt-3 text-slate-400 leading-relaxed text-sm">
                  No. Modern aircraft are engineered to withstand forces far beyond any naturally occurring turbulence. The wings are highly flexible, capable of bending several feet upward and downward to absorb the impact of rough air without snapping. While severe turbulence can certainly be terrifying and uncomfortable, it is not a structural threat to the airplane. The primary danger of turbulence is to passengers who are not wearing their seatbelts and may be tossed around the cabin.
                </div>
              </details>

              <details className="ios-glass p-5 rounded-xl group cursor-pointer border border-white/10 [&_summary::-webkit-details-marker]:hidden">
                <summary className="font-bold text-base flex justify-between items-center text-white outline-none">
                  What if a door opens mid-flight?
                  <span className="text-slate-500 group-open:rotate-45 transition-transform duration-300 text-xl leading-none">+</span>
                </summary>
                <div className="pt-3 text-slate-400 leading-relaxed text-sm">
                  It is physically impossible to open a commercial airplane door during flight. Airplane cabins are pressurized to keep the air breathable at high altitudes. Because the pressure inside the cabin is much higher than the thin air outside, the doors—which open inward like a plug—are pushed against the airframe with thousands of pounds of force. Even the strongest person on earth could not pull the door open against that pressure difference.
                </div>
              </details>

              <details className="ios-glass p-5 rounded-xl group cursor-pointer border border-white/10 [&_summary::-webkit-details-marker]:hidden">
                <summary className="font-bold text-base flex justify-between items-center text-white outline-none">
                  Why does takeoff feel so intense?
                  <span className="text-slate-500 group-open:rotate-45 transition-transform duration-300 text-xl leading-none">+</span>
                </summary>
                <div className="pt-3 text-slate-400 leading-relaxed text-sm">
                  Takeoff requires a massive amount of thrust to propel a heavy aircraft to lift-off speed. You are feeling the raw acceleration pushing you back into your seat. Shortly after liftoff, the nose pitches up steeply, which can trigger a falling sensation in your inner ear. Then, pilots often reduce engine power slightly for noise abatement requirements near populated areas; this sudden reduction in noise and acceleration can falsely make your brain think the plane is stalling or dropping. In reality, it is a completely normal, controlled procedure.
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* LATEST ARTICLES (Moved Mid-Page) */}
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
                <Link key={idx} href={article.status === 'published' ? `/blog/${article.slug}` : '/blog'} className={`ios-glass p-6 min-h-[160px] rounded-2xl border border-white/10 transition-all flex flex-col group h-full ${article.status === 'published' ? 'hover:border-white/30 hover:bg-slate-800/80' : 'opacity-80'}`}>
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                    <span className="px-2 py-1 rounded-full bg-blue-500/10 text-blue-200">{article.tag}</span>
                    <span>{article.status === 'published' ? article.date : 'Coming Soon'}</span>
                  </div>
                  <h3 className={`font-bold text-lg mb-2 leading-snug ${article.status === 'published' ? 'group-hover:text-blue-300 transition-colors' : ''}`}>{article.title}</h3>
                  <p className="text-sm text-slate-400 line-clamp-2 mb-4 flex-1">{article.excerpt}</p>
                  <div className={`text-xs font-semibold flex items-center gap-1 ${article.status === 'published' ? 'text-blue-400 group-hover:text-white transition-colors' : 'text-slate-500'}`}>
                    {article.status === 'published' ? 'Read article' : ''} {article.status === 'published' && <i className="ph-bold ph-caret-right"></i>}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* H) OFFLINE GUARANTEE + FINAL CTA */}
        <section id="download" className="py-20 px-4 text-center border-t border-white/5 bg-gradient-to-t from-blue-900/10 to-transparent">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Your calm space at 35,000 feet.</h2>
            <p className="text-base text-slate-300 mb-8 leading-relaxed">
              No Wi-Fi needed. No subscriptions. No tracking. Just practical tools when you need them.
            </p>

            <a href="#" className="inline-flex items-center justify-center bg-white text-black font-bold py-3 px-8 rounded-full text-base hover:scale-105 transition-transform" aria-label="Download on the App Store">
              Download on the App Store
            </a>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-xs font-medium inline-flex items-center gap-1"><i className="ph-fill ph-check-circle"></i> Works offline</span>
              <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-xs font-medium inline-flex items-center gap-1"><i className="ph-fill ph-check-circle"></i> No account needed</span>
              <span className="px-3 py-1 rounded-full bg-slate-800 border border-white/10 text-slate-400 text-xs font-medium inline-flex items-center gap-1"><i className="ph-bold ph-airplane-tilt"></i> Coming later: Turbulence Meter (v1.1)</span>
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
