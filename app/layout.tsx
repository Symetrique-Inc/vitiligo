import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Caveat } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageContext";

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
  title: "VITILIGO HUB — See Beyond the Skin | Global Education & Support Platform",
  description: "A warm, trustworthy, science-backed education and support platform for people with vitiligo, their families, and healthcare professionals. Clear information. Expert insights. Practical support.",
  keywords: ["vitiligo", "vitiligo support", "melanocytes", "dermatology", "autoimmune skin condition", "vitiligo treatment", "JAK inhibitors", "phototherapy"],
  authors: [{ name: "Vitiligo Hub Global Medical Advisory Board" }],
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
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
