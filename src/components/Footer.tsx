'use client';

import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="max-w-5xl mx-auto px-6 py-12 border-t border-white/10 text-center md:text-left">
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <div className="flex items-center justify-center md:justify-start gap-2 font-semibold text-lg mb-4 opacity-80">
                        <Image src="/logo_wide.webp" width={24} height={24} className="h-6 w-auto rounded" alt="CalmFlight Logo" unoptimized />
                        CalmFlight
                    </div>
                    <p className="text-xs text-slate-500 max-w-xs mx-auto md:mx-0">
                        A premium, lifetime-access tool for nervous flyers. Built with care for iOS.
                    </p>
                </div>

                <div className="flex flex-col md:items-end justify-center gap-6">

                    <a href="https://www.instagram.com/calmflightapp/" target="_blank" rel="noopener noreferrer"
                        className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                        <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0">
                            Follow on Instagram
                        </span>
                        <i className="ph-fill ph-instagram-logo text-2xl group-hover:text-pink-500 transition-colors"></i>
                    </a>

                    <div className="flex gap-4 text-xs text-slate-400 underline">
                        <Link href="/privacy" className="hover:text-white transition-colors">{t('link_privacy')}</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">{t('link_terms')}</Link>
                        <Link href="/releases" className="hover:text-white transition-colors">{t('link_releases')}</Link>
                        <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
                    </div>

                    <p className="text-[10px] text-slate-600">
                        &copy; 2026 CalmFlight. Not affiliated with any airline.
                    </p>
                </div>
            </div>
        </footer>
    );
}
