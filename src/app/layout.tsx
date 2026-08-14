import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { BottomNav } from "@/components/BottomNav";
import { Footer } from "@/components/Footer";
import { Preloader } from "@/components/Preloader";
import { IconGradients } from "@/components/Icons";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Kovai Health Center – Ayurvedic & Unani Sexual Wellness",
  description: "Personalized Ayurvedic & Unani herbal healthcare for sexual wellness, fertility concerns and holistic wellbeing in Coimbatore — backed by 27+ years of clinical experience.",
  keywords: ["Kovai Health Center", "sexual wellness clinic in Coimbatore", "fertility care in Coimbatore", "Ayurvedic and Unani herbal care"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-mesh min-h-screen flex flex-col relative`}>
        <IconGradients />
        <Preloader />
        <Navbar />
        <main className="flex-grow pb-16 xl:pb-0">
          {children}
        </main>
        <Footer />
        
        <FloatingWhatsApp />
        <BottomNav />
      </body>
    </html>
  );
}
