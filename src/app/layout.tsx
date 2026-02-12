import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "CalmFlight | Premium Flight Anxiety Relief",
  description: "Offline tools for nervous flyers: panic-button breathing, calming sounds, focus games, and simple science—works in Airplane Mode.",
  openGraph: {
    title: "CalmFlight — Your calm companion for flights",
    description: "Offline tools for nervous flyers: panic-button breathing, calming sounds, focus games, and simple science—works in Airplane Mode.",
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
    title: "CalmFlight — Your calm companion for flights",
    description: "Offline tools for nervous flyers: panic-button breathing, calming sounds, focus games, and simple science—works in Airplane Mode.",
    images: ["https://calmflight.netlify.app/logo_wide.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://calmflight.netlify.app/" />
        {/* Phosphor Icons script */}
        <script src="https://unpkg.com/@phosphor-icons/web" async></script>
      </head>
      <body className="bg-bg-body text-white font-sans antialiased pb-20 selection:bg-blue-500 selection:text-white">
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
