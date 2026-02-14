'use client';
import { useEffect, useState } from 'react';

interface ShareModalProps {
    isOpen: boolean;
    onClose: () => void;
    onCopyText: () => void;
    onCopyLink: () => void;
    onDownload: () => void;
    title: string;
}

export default function ShareModal({ isOpen, onClose, onCopyText, onCopyLink, onDownload, title }: ShareModalProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
        } else {
            const timer = setTimeout(() => setIsVisible(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isVisible) return null;

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
            <div
                className={`relative bg-[#1c1c1e] border border-white/10 rounded-2xl w-full max-w-sm p-6 shadow-2xl transform transition-all duration-300 ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}`}
            >
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold text-white">Share Card</h3>
                    <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
                        <i className="ph-bold ph-x text-xl"></i>
                    </button>
                </div>

                <div className="space-y-3">
                    <button
                        onClick={onCopyText}
                        className="w-full flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-left group"
                    >
                        <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <i className="ph-bold ph-text-aa text-xl"></i>
                        </div>
                        <div>
                            <div className="font-semibold text-white text-sm">Copy Text</div>
                            <div className="text-xs text-slate-400">Copy the snippet to clipboard</div>
                        </div>
                    </button>

                    <button
                        onClick={onCopyLink}
                        className="w-full flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-left group"
                    >
                        <div className="w-10 h-10 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <i className="ph-bold ph-link text-xl"></i>
                        </div>
                        <div>
                            <div className="font-semibold text-white text-sm">Copy Link</div>
                            <div className="text-xs text-slate-400">Copy distinct URL to this card</div>
                        </div>
                    </button>

                    <button
                        onClick={onDownload}
                        className="w-full flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-left group"
                    >
                        <div className="w-10 h-10 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <i className="ph-bold ph-download-simple text-xl"></i>
                        </div>
                        <div>
                            <div className="font-semibold text-white text-sm">Download Image</div>
                            <div className="text-xs text-slate-400">Best for Instagram Stories</div>
                        </div>
                    </button>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 text-center">
                    <p className="text-xs text-slate-500">
                        To share on Instagram, download the image and upload it to your Story.
                    </p>
                </div>
            </div>
        </div>
    );
}
