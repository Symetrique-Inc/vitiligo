import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Caveat } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageContext";
import { CookieBanner } from "@/components/CookieBanner";

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
  metadataBase: new URL('https://vitiligohub.org'),
  title: {
    default: "OneVitiligo | Every skin. Every story. One community.",
    template: "%s | OneVitiligo",
  },
  description: "Clear, trusted information about vitiligo, real experiences and practical support. A patient-centred platform by OneVitiligo.",
  keywords: ["vitiligo", "vitiligo support", "melanocytes", "dermatology", "autoimmune skin condition", "vitiligo treatment", "JAK inhibitors", "phototherapy"],
  authors: [{ name: "OneVitiligo Medical Advisory Board" }],
  openGraph: {
    title: "OneVitiligo | Every skin. Every story. One community.",
    description: "Clear, trusted information about vitiligo, real experiences and practical support. A patient-centred platform by OneVitiligo.",
    url: "https://vitiligohub.org",
    siteName: "OneVitiligo",
    images: [
      {
        url: "/images/hero-panoramic.jpg",
        width: 1200,
        height: 630,
        alt: "A group of people of different ages and skin tones, some with vitiligo, standing together with a doctor.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OneVitiligo | Every skin. Every story. One community.",
    description: "Clear, trusted information about vitiligo, real experiences and practical support. A patient-centred platform by OneVitiligo.",
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
  maximumScale: 5,
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
          <div id="main-content" className="flex-1 flex flex-col">
            {children}
          </div>
          <CookieBanner />
        </LanguageProvider>
      </body>
    </html>
  );
}
