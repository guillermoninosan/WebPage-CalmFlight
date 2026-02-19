export interface Article {
    title: string;
    excerpt: string;
    date: string;
    tag: string;
    slug: string;
    status: 'published' | 'coming_soon';
}

export const articles: Article[] = [
    {
        title: 'How to Stop a Panic Attack on a Plane (When You Have No Wi-Fi)',
        excerpt: 'The cabin doors close. The flight attendant tells you to switch to Airplane Mode. For many, this is when panic sets in. Here is the science of offline grounding.',
        date: 'Mar 2026',
        tag: 'Anxiety Relief',
        slug: 'stop-panic-attack-no-wifi',
        status: 'published'
    },
    {
        title: 'How oxygen masks actually work',
        excerpt: 'It looks chaotic in movies, but in reality, it\'s a silent, automatic, and redundant safety system.',
        date: 'Feb 2026',
        tag: 'Safety Basics',
        slug: 'oxygen-mask',
        status: 'published'
    },
    {
        title: 'Why the plane drops during turbulence',
        excerpt: 'It feels like falling hundreds of feet, but usually, it\'s often much less than it feels. Understanding air pockets.',
        date: 'Coming Soon',
        tag: 'Turbulence',
        slug: 'turbulence',
        status: 'coming_soon'
    },
    {
        title: 'What is that "Bing-Bong" sound?',
        excerpt: 'Decoding the secret language of flight attendant chimes. It\'s usually just a simple phone call.',
        date: 'Coming Soon',
        tag: 'Sounds',
        slug: 'sounds',
        status: 'coming_soon'
    }
];
