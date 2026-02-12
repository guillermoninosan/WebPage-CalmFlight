import { useEffect } from 'react';

export default function useScrollReveal() {
    useEffect(() => {
        const initScrollReveal = async () => {
            // @ts-ignore
            if (typeof window !== 'undefined' && typeof window.ScrollReveal !== 'undefined') {
                // @ts-ignore
                const sr = window.ScrollReveal({
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
                sr.reveal('h1, h2, p.text-lg, .roadmap-item', { interval: 50 });
                // Specific headline targets from legacy script
                sr.reveal('[data-animate="headline"]', { delay: 300, interval: 100 });
            }
        };

        // customizable delay to ensure elements are rendered
        const timeout = setTimeout(initScrollReveal, 100);
        return () => clearTimeout(timeout);
    }, []);
}
