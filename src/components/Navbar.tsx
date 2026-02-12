'use client';

import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

export default function Navbar() {
    const { t, language, setLanguage } = useLanguage();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const languages = [
        { code: 'en', label: 'English' },
        { code: 'es', label: 'Español' },
        { code: 'fr', label: 'Français' },
        { code: 'de', label: 'Deutsch' },
    ] as const;

    const currentLabel = languages.find(l => l.code === language)?.label || 'English';

    // Toggle Dropdown
    const toggleDropdown = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Close dropdown on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <nav className="fixed top-0 w-full z-50 bg-[#050a14]/90 backdrop-blur-xl border-b border-white/5">
            <div className="max-w-5xl mx-auto px-6 h-16 flex justify-between items-center">

                <Link href="/" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
                    <Image src="/logo_wide.webp" alt="Logo" width={32} height={32} className="h-8 w-auto rounded-lg shadow-lg" unoptimized />
                    <span className="font-bold text-2xl tracking-tight text-white leading-none pt-0.5">CalmFlight</span>
                </Link>

                <div className="flex gap-4 items-center relative">

                    <Link href="/blog" className="hidden md:inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
                        <i className="ph-fill ph-notebook text-blue-400"></i>
                        <span>Blog</span>
                    </Link>

                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={toggleDropdown}
                            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-2 rounded-full text-sm font-medium transition-all w-32 justify-between"
                        >
                            <span>{currentLabel}</span>
                            <i className={`ph-bold ph-caret-down text-gray-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}></i>
                        </button>
                        <div className={`dropdown-menu absolute top-full right-0 mt-2 w-40 bg-[#1c1c1e] border border-white/10 rounded-xl shadow-2xl overflow-hidden backdrop-blur-xl z-50 ${isDropdownOpen ? 'active' : ''}`}>
                            <div className="p-1">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => { setLanguage(lang.code); setIsDropdownOpen(false); }}
                                        className={`w-full text-left px-3 py-2 rounded-lg text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors flex items-center justify-between group ${language === lang.code ? 'bg-white/5 text-white' : ''}`}
                                    >
                                        {lang.label}
                                        <i className={`ph-bold ph-check text-blue-500 ${language === lang.code ? 'opacity-100' : 'opacity-0'}`}></i>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-600/20 border border-blue-500/50 text-blue-200 px-5 py-2 rounded-full text-xs font-bold shadow-lg shadow-blue-900/20 cursor-default">
                        {t('nav_date')}
                    </div>
                </div>
            </div>
        </nav>
    );
}
