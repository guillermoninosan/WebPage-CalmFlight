import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "CalmFlight — Flight Anxiety App for iOS | Offline Panic Button",
  description: "The 100% offline iOS app for flight anxiety. Guided breathing, calming audio, and science — works in airplane mode. Free download on the App Store.",
  keywords: ["flight anxiety app", "fear of flying app", "airplane anxiety", "nervous flyer app", "panic attack on plane", "offline flight app", "aviophobia"],
  openGraph: {
    title: "CalmFlight — The Offline App for Flight Anxiety",
    description: "Guided breathing, calming audio, and science for nervous flyers. Works in airplane mode. Free on the App Store.",
    url: "https://calmflightapp.com/",
    siteName: "CalmFlight",
    images: [
      {
        url: "https://calmflightapp.com/app_mockup_en.webp",
        width: 1200,
        height: 630,
        alt: "CalmFlight — Flight Anxiety App for iOS",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CalmFlight — The Offline App for Flight Anxiety",
    description: "Guided breathing, calming audio, and science for nervous flyers. Works in airplane mode. Free on the App Store.",
    images: ["https://calmflightapp.com/app_mockup_en.webp"],
  },
  alternates: {
    canonical: "https://calmflightapp.com/",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "CalmFlight",
    "description": "The 100% offline iOS app for flight anxiety. Includes a Panic Button with haptic guided breathing, calming background audio, cognitive focus games, and aviation science education. Works entirely in airplane mode — no internet, no account required.",
    "applicationCategory": "HealthApplication",
    "applicationSubCategory": "Mental Health",
    "operatingSystem": "iOS",
    "url": "https://calmflightapp.com",
    "downloadUrl": "https://apps.apple.com/us/app/calmflight-flight-anxiety/id6758919357",
    "screenshot": "https://calmflightapp.com/app_mockup_en.webp",
    "image": "https://calmflightapp.com/logo_wide.png",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "featureList": [
      "Works 100% offline in Airplane Mode",
      "Panic Button with haptic guided breathing",
      "Calming background audio (plays with screen locked)",
      "Cognitive focus games: Math, Memory, Sequence",
      "Aviation science education (Calm Cards)",
      "No account or login required",
      "Zero data collection",
      "Lifetime premium upgrade available"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is CalmFlight?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CalmFlight is an iOS app designed to help nervous flyers manage flight anxiety. It includes a Panic Button that launches a guided breathing and grounding exercise, calming background audio, cognitive focus games to interrupt anxious thoughts, and educational Calm Cards explaining flight physics — all without requiring an internet connection."
        }
      },
      {
        "@type": "Question",
        "name": "Does CalmFlight work in Airplane Mode?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. CalmFlight is designed to be 100% offline. Every feature — breathing exercises, audio, focus games, and Calm Cards — works without any internet connection, making it reliable during takeoff, turbulence, and anywhere Wi-Fi is unavailable."
        }
      },
      {
        "@type": "Question",
        "name": "Is CalmFlight free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CalmFlight is free to download on the App Store. The free version includes the full Panic Button flow, guided haptic breathing, the Math focus game, and select Calm Cards. A one-time lifetime premium upgrade ($12.99 USD / €14.99 EUR) unlocks the full audio library, all focus games (Memory and Sequence), and the complete Calm Cards collection."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I download CalmFlight?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CalmFlight is available now on the Apple App Store. Download it at: https://apps.apple.com/us/app/calmflight-flight-anxiety/id6758919357"
        }
      },
      {
        "@type": "Question",
        "name": "Can turbulence crash a plane?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Modern aircraft are engineered to withstand forces far beyond any naturally occurring turbulence. Wings are designed to flex significantly to absorb impact without structural risk. While turbulence can be uncomfortable and frightening, it is not a threat to the airplane."
        }
      }
    ]
  }
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://calmflightapp.com/" />
        <script src="https://unpkg.com/@phosphor-icons/web" async></script>
      </head>
      <body className="bg-bg-body text-white font-sans antialiased pb-20 selection:bg-blue-500 selection:text-white" suppressHydrationWarning>
        <div className="bg-glow"></div>
        {children}
        <Script
          src="https://unpkg.com/scrollreveal"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
