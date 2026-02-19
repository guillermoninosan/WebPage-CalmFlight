'use client';

import Link from 'next/link';
import Image from 'next/image';

function CustomNav() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#050a14]/90 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-[1040px] mx-auto px-6 h-16 flex justify-between items-center relative">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity z-10 shrink-0">
          <Image src="/logo_wide.webp" alt="CalmFlight Logo" width={32} height={32} className="h-7 w-auto rounded-lg shadow-lg" unoptimized />
          <span className="font-bold text-xl tracking-tight text-white leading-none pt-0.5">CalmFlight</span>
        </Link>
        <div className="flex items-center">
          <a href="#download" className="bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-2 rounded-full text-sm font-medium transition-all text-white">
            Get the app
          </a>
        </div>
      </div>
    </header>
  );
}

function CustomFooter() {
  return (
    <footer className="max-w-[1040px] mx-auto px-6 py-12 border-t border-white/10 text-center md:text-left">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-500 text-sm">
          &copy; CalmFlight <span className="mx-2">•</span> Built for airplane mode.
        </div>
        <div className="flex gap-6 text-sm text-slate-400 justify-center">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050a14] text-white flex flex-col">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-[100] outline-none ring-2 ring-white">
        Skip to content
      </a>
      <CustomNav />

      <div id="main-content" className="flex-1">

        {/* A) HERO */}
        <section className="relative pt-40 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-[#050a14] to-purple-900/10 pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E")' }} />

          <div className="max-w-[1040px] mx-auto relative z-10 text-center md:text-left">
            <h1 className="text-4xl md:text-[52px] font-bold leading-[1.1] mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-300 max-w-3xl md:mx-0 mx-auto">
              Calm down mid-flight — even with zero Wi-Fi.
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed md:mx-0 mx-auto">
              Simple tools for flight anxiety: guided breathing, quick focus tasks, calming sounds, and clear explanations — built for airplane mode.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a href="#guide" className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#050a14]">
                Read the guide
              </a>
              <a href="#download" className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-semibold rounded-full transition-all backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#050a14]">
                Get the app
              </a>
            </div>
          </div>
        </section>

        {/* B) EMPATHY & PROBLEM */}
        <section className="py-20 px-6">
          <div className="max-w-[1040px] mx-auto">
            <div className="ios-glass p-8 md:p-12 rounded-[2rem]">
              <h2 className="text-3xl font-bold mb-6">’Just relax’ isn’t a plan.</h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-3xl">
                When turbulence starts, your body can switch into alarm mode. And the usual coping tools often fail at the worst time — slow internet, no signal, nothing to load. CalmFlight is designed for the moment you need help right now.
              </p>
              <div className="inline-flex items-center px-4 py-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-200 text-sm font-medium">
                An anxious brain + an offline cabin = a tough combo.
              </div>
            </div>
          </div>
        </section>

        {/* C) THE “2-MINUTE STRIP” */}
        <section className="py-16 px-6 bg-white/[0.02] border-y border-white/5 overflow-hidden">
          <div className="max-w-[1040px] mx-auto text-center">
            <h2 className="text-2xl font-bold mb-10">What you get in 2 minutes</h2>
            <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 md:gap-8 mb-6">
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

        {/* D) PHYSICS OF FLIGHT */}
        <section className="py-24 px-6">
          <div className="max-w-[1040px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 max-w-2xl leading-tight">
              Fear thrives on the unknown. Here’s what’s actually happening.
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="ios-glass p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all">
                <h3 className="text-xl font-bold mb-3">It feels like falling</h3>
                <p className="text-slate-400 leading-relaxed">
                  You’re usually feeling a quick change in vertical airflow, not a ‘drop.’
                </p>
              </div>
              <div className="ios-glass p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all">
                <h3 className="text-xl font-bold mb-3">Wings bending looks scary</h3>
                <p className="text-slate-400 leading-relaxed">
                  That flexibility is by design; it helps absorb forces.
                </p>
              </div>
              <div className="ios-glass p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all">
                <h3 className="text-xl font-bold mb-3">Turbulence = danger</h3>
                <p className="text-slate-400 leading-relaxed">
                  Turbulence is uncomfortable, but aircraft are engineered and pilots plan for it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* E) WHY THIS WORKS */}
        <section id="guide" className="py-20 px-6 bg-gradient-to-b from-transparent to-white/[0.02]">
          <div className="max-w-[1040px] mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why a focus task can calm the spiral.</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-3xl">
              You can’t force anxiety off with willpower — but you can redirect attention. Short, demanding tasks (like quick mental math) use the same ‘mental bandwidth’ that anxious spirals rely on. For many people, that shift reduces intensity and helps the body settle.
            </p>
            <div className="inline-flex items-center px-4 py-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-200 text-sm font-medium">
              Breathe first, then switch to focus.
            </div>
          </div>
        </section>

        {/* F) AHA PIVOT */}
        <section className="py-24 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-3xl font-bold mb-6">You shouldn’t have to improvise in the air.</h2>
            <p className="text-lg md:text-lg text-slate-400 leading-relaxed mb-10">
              When you’re anxious, it’s hard to remember techniques or ‘think your way out’ of it. You need something simple, immediate, and ready offline.
            </p>
            <p className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              That’s why we built CalmFlight.
            </p>
          </div>
        </section>

        {/* G) PREMIUM FEATURE SHOWCASE */}
        <section className="py-20 px-6">
          <div className="max-w-[1040px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Built for the exact moment you need it.</h2>
            <div className="grid sm:grid-cols-2 gap-6">

              <div className="ios-glass p-8 rounded-[2rem] border border-white/10 hover:bg-white/[0.05] transition-colors flex flex-col md:flex-row gap-6 items-start">
                <div className="w-12 h-12 shrink-0 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/20">
                  <i className="ph-fill ph-warning-circle text-red-400 text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Panic Button</h3>
                  <p className="text-slate-400 leading-relaxed">One tap → guided breathing (with haptics if available).</p>
                </div>
              </div>

              <div className="ios-glass p-8 rounded-[2rem] border border-white/10 hover:bg-white/[0.05] transition-colors flex flex-col md:flex-row gap-6 items-start">
                <div className="w-12 h-12 shrink-0 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/20">
                  <i className="ph-fill ph-math-operations text-blue-400 text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Quick Focus</h3>
                  <p className="text-slate-400 leading-relaxed">Quick mental math to redirect attention.</p>
                </div>
              </div>

              <div className="ios-glass p-8 rounded-[2rem] border border-white/10 hover:bg-white/[0.05] transition-colors flex flex-col md:flex-row gap-6 items-start">
                <div className="w-12 h-12 shrink-0 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/20">
                  <i className="ph-fill ph-headphones text-purple-400 text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Calm Sounds</h3>
                  <p className="text-slate-400 leading-relaxed">Offline soundscapes for a steady background.</p>
                </div>
              </div>

              <div className="ios-glass p-8 rounded-[2rem] border border-white/10 hover:bg-white/[0.05] transition-colors flex flex-col md:flex-row gap-6 items-start">
                <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/20">
                  <i className="ph-fill ph-cards text-emerald-400 text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Calm Cards</h3>
                  <p className="text-slate-400 leading-relaxed">Short, reassuring explanations for common flight fears.</p>
                </div>
              </div>

            </div>

            <p className="text-sm text-slate-500 mt-8 text-center md:text-left ml-2">Coming later: Turbulence Meter (v1.1)</p>
          </div>
        </section>

        {/* H) OFFLINE GUARANTEE + FINAL CTA */}
        <section id="download" className="py-24 px-6 text-center border-t border-white/5 bg-gradient-to-t from-blue-900/10 to-transparent">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Your calm space at 35,000 feet.</h2>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed">
              No Wi-Fi needed. No subscriptions. No tracking. Just practical tools when you need them.
            </p>

            <p className="text-xl font-bold mb-8">Download CalmFlight before you board.</p>

            <a href="#" className="inline-flex items-center justify-center bg-white text-black font-bold py-4 px-8 rounded-full text-lg hover:scale-105 transition-transform" aria-label="Download on the App Store">
              Download on the App Store
            </a>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <span className="px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-xs font-medium inline-flex items-center gap-1.5"><i className="ph-fill ph-check-circle"></i> Works in airplane mode</span>
              <span className="px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-xs font-medium inline-flex items-center gap-1.5"><i className="ph-fill ph-check-circle"></i> No account</span>
              <span className="px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-xs font-medium inline-flex items-center gap-1.5"><i className="ph-fill ph-check-circle"></i> Private by default</span>
            </div>
          </div>
        </section>

        {/* I) FAQ */}
        <section className="py-20 px-6 border-t border-white/5">
          <div className="max-w-[1040px] mx-auto">
            <h2 className="text-2xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">

              <div className="ios-glass p-6 md:p-8 rounded-3xl text-left border border-white/10">
                <h3 className="text-lg font-bold mb-3">Does it work without Wi-Fi?</h3>
                <p className="text-slate-400">Yes — CalmFlight is designed to work fully offline in airplane mode.</p>
              </div>

              <div className="ios-glass p-6 md:p-8 rounded-3xl text-left border border-white/10">
                <h3 className="text-lg font-bold mb-3">Is it a subscription?</h3>
                <p className="text-slate-400">No subscriptions.</p>
              </div>

              <div className="ios-glass p-6 md:p-8 rounded-3xl text-left border border-white/10">
                <h3 className="text-lg font-bold mb-3">Does CalmFlight track me?</h3>
                <p className="text-slate-400">No tracking.</p>
              </div>

              <div className="ios-glass p-6 md:p-8 rounded-3xl text-left border border-white/10">
                <h3 className="text-lg font-bold mb-3">Is this medical treatment?</h3>
                <p className="text-slate-400">No. CalmFlight offers practical tools for anxious moments, but it’s not medical care.</p>
              </div>

            </div>
          </div>
        </section>
      </div>

      <CustomFooter />
    </main>
  );
}
