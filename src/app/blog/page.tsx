'use client';

import { useLanguage, LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from 'next/link';
import { articles } from '@/lib/articles';

function BlogListContent() {
    const { t } = useLanguage();

    return (
        <>
            <Navbar />
            <main className="pt-32 px-6 max-w-5xl mx-auto pb-20">
                <div className="text-center mb-16">
                    <p className="text-xs uppercase tracking-[0.3em] text-blue-300/70 mb-4">New blog entries weekly</p>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Understanding conquers fear.</h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
                        Simple, science-backed explanations of how flying works, why your body reacts, and how to stay calm.
                    </p>

                    {/* Topics Row */}
                    <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
                        <Link href="/blog" className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm transition-colors cursor-pointer border border-white/10">All</Link>
                        <Link href="/blog?topic=turbulence" className="px-4 py-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-sm transition-colors border border-white/5">Turbulence</Link>
                        <Link href="/blog?topic=sounds" className="px-4 py-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-sm transition-colors border border-white/5">Sounds</Link>
                        <Link href="/blog?topic=takeoff-landing" className="px-4 py-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-sm transition-colors border border-white/5">Takeoff/Landing</Link>
                        <Link href="/blog?topic=fear-of-flying" className="px-4 py-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-sm transition-colors border border-white/5">Fear of Flying</Link>
                        <Link href="/blog?topic=psychology" className="px-4 py-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-sm transition-colors border border-white/5">Psychology</Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((article, idx) => {
                        const isFeatured = idx === 0;
                        const isPublished = article.status === 'published';
                        const linkHref = isPublished ? `/blog/${article.slug}` : '/blog';

                        return (
                            <article key={idx} className={`ios-glass group hover:bg-slate-800/80 transition-colors ${isFeatured ? 'p-8 col-span-1 md:col-span-3 flex flex-col justify-center items-start' : 'p-6 flex flex-col items-start min-h-[250px]'}`}>
                                <div className="flex items-center gap-3 text-xs text-slate-400 mb-4">
                                    <span className="px-2 py-1 rounded-full bg-blue-500/10 text-blue-200">{article.tag}</span>
                                    <span>{isPublished ? article.date : 'Coming Soon'}</span>
                                </div>
                                {isPublished ? (
                                    <Link href={linkHref} className="block w-full">
                                        <h2 className={`${isFeatured ? 'text-2xl md:text-3xl' : 'text-xl'} font-bold mb-3 group-hover:text-blue-300 transition-colors`}>
                                            {article.title}
                                        </h2>
                                    </Link>
                                ) : (
                                    <div className="block w-full">
                                        <h2 className={`${isFeatured ? 'text-2xl md:text-3xl' : 'text-xl'} font-bold mb-3 group-hover:text-blue-300 transition-colors`}>
                                            {article.title}
                                        </h2>
                                    </div>
                                )}
                                <p className={`${isFeatured ? 'text-base max-w-3xl mb-6' : 'text-sm mb-auto'} text-slate-400 leading-relaxed`}>
                                    {article.excerpt}
                                </p>
                                {isPublished ? (
                                    <Link href={linkHref} className={`inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-white transition-colors ${isFeatured ? 'text-base' : 'text-xs mt-4'}`}>
                                        {isFeatured ? 'Read full article' : 'Read article'} <i className={`ph-bold ${isFeatured ? 'ph-arrow-right' : 'ph-caret-right'}`}></i>
                                    </Link>
                                ) : null}
                            </article>
                        );
                    })}
                </div>

                <div className="mt-16 pt-8 border-t border-white/10 text-center">
                    <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
                        <i className="ph-bold ph-arrow-left"></i>
                        <span>{t('back_home')}</span>
                    </Link>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default function BlogList() {
    return (
        <LanguageProvider>
            <BlogListContent />
        </LanguageProvider>
    );
}
