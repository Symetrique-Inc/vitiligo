import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Caveat } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageContext";
import { CookieBanner } from "@/components/CookieBanner";
import { JsonLd } from "@/components/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.onevitiligo.com'),
  title: {
    default: "Vitiligo Information & Support | OneVitiligo",
    template: "%s | OneVitiligo",
  },
  description: "Trusted, plain-language vitiligo information, real experiences and practical support for every stage — for you, your child or someone you love.",
  authors: [{ name: "OneVitiligo Medical Advisory Board" }],
  alternates: {
    canonical: 'https://www.onevitiligo.com',
  },
  openGraph: {
    title: "Vitiligo Information & Support | OneVitiligo",
    description: "Trusted, plain-language vitiligo information, real experiences and practical support for every stage — for you, your child or someone you love.",
    url: "https://www.onevitiligo.com",
    siteName: "OneVitiligo",
    images: [
      {
        url: "/images/hero-panoramic.jpg",
        width: 1200,
        height: 630,
        alt: "A diverse group of people of different ages and skin tones living with vitiligo.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vitiligo Information & Support | OneVitiligo",
    description: "Trusted, plain-language vitiligo information, real experiences and practical support for every stage — for you, your child or someone you love.",
    images: ["/images/hero-panoramic.jpg"],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${caveat.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-pastel-mesh text-[#1E2A4A] antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#0B1F6B] focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <LanguageProvider>
          <JsonLd />
          <div id="main-content" className="flex-1 flex flex-col">
            {children}
          </div>
          <CookieBanner />
        </LanguageProvider>
      </body>
    </html>
  );
}
