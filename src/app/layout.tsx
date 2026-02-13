import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "CalmFlight - The Offline Panic Button for Nervous Flyers",
  description: "Launching March 1st. The 100% offline app for flight anxiety. Includes breathing tools, calming audio, and educational cards.",
  openGraph: {
    title: "CalmFlight - The Offline Panic Button for Nervous Flyers",
    description: "Launching March 1st. The 100% offline app for flight anxiety. Includes breathing tools, calming audio, and educational cards.",
    url: "https://calmflight.netlify.app/",
    siteName: "CalmFlight",
    images: [
      {
        url: "https://calmflight.netlify.app/logo_wide.png",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CalmFlight - The Offline Panic Button for Nervous Flyers",
    description: "Launching March 1st. The 100% offline app for flight anxiety. Includes breathing tools, calming audio, and educational cards.",
    images: ["https://calmflight.netlify.app/logo_wide.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "CalmFlight",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "iOS",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "mainEntity": {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Does it work in Airplane Mode?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. CalmFlight is designed to be 100% offline." }
      },
      {
        "@type": "Question",
        "name": "What’s included for free?",
        "acceptedAnswer": { "@type": "Answer", "text": "You get the full Panic Button flow, select educational cards, and the Math focus game completely free." }
      },
      {
        "@type": "Question",
        "name": "Is turbulence dangerous?",
        "acceptedAnswer": { "@type": "Answer", "text": "Turbulence is uncomfortable but normal. Planes are built to withstand forces far greater than any turbulence you will ever experience." }
      },
      {
        "@type": "Question",
        "name": "When can I download it?",
        "acceptedAnswer": { "@type": "Answer", "text": "CalmFlight launches on the App Store on March 1st." }
      }
    ]
  }
};

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
        <link rel="canonical" href="https://calmflight.netlify.app/" />
        {/* Phosphor Icons script */}
        <script src="https://unpkg.com/@phosphor-icons/web" async></script>
      </head>
      <body className="bg-bg-body text-white font-sans antialiased pb-20 selection:bg-blue-500 selection:text-white" suppressHydrationWarning>
        <div className="bg-glow"></div>
        {children}
        {/* ScrollReveal Script */}
        <Script
          src="https://unpkg.com/scrollreveal"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
