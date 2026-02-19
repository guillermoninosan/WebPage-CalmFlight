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
        excerpt: 'It can feel like a big drop, but it\'s often much smaller than it feels. Understanding air pockets.',
        date: 'Coming Soon',
        tag: 'Turbulence',
        slug: '',
        status: 'coming_soon'
    },
    {
        title: 'What is that "Bing-Bong" sound?',
        excerpt: 'Decoding the secret language of flight attendant chimes. It\'s usually just a simple phone call.',
        date: 'Coming Soon',
        tag: 'Sounds',
        slug: '',
        status: 'coming_soon'
    },
    {
        title: 'What happens during a go-around?',
        excerpt: 'When an airplane approaches the runway but suddenly climbs back up, it\'s actually a standard safety procedure, not an emergency.',
        date: 'Coming Soon',
        tag: 'Safety Basics',
        slug: '',
        status: 'coming_soon'
    },
    {
        title: 'The biology of takeoff acceleration',
        excerpt: 'Why the steep climb and engine noise reduction immediately after takeoff can trigger a falling sensation in your inner ear.',
        date: 'Coming Soon',
        tag: 'Body Response',
        slug: '',
        status: 'coming_soon'
    },
    {
        title: 'Can a plane fly with one engine?',
        excerpt: 'Modern jets are rigorously tested to fly safely to an alternate airport even in the extremely rare event of an engine shutdown.',
        date: 'Coming Soon',
        tag: 'Safety Basics',
        slug: '',
        status: 'coming_soon'
    }
];
