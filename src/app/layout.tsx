import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { BottomNav } from "@/components/BottomNav";
import { Footer } from "@/components/Footer";
import { Preloader } from "@/components/Preloader";
import { IconGradients } from "@/components/Icons";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ConsultationModal } from "@/components/ConsultationModal";
import { AeoGeoSchema } from "@/components/AeoGeoSchema";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kovaihealthcenter.com"),
  alternates: {
    canonical: "https://kovaihealthcenter.com",
  },
  title: "Best Fertility Center in Coimbatore | Kovai Health Center",
  description: "Trusted fertility & sexual wellness care in Coimbatore with 30+ yrs experience. Expert natural Ayurvedic treatments for male & female fertility. Book today!",
  keywords: [
    "best fertility center in coimbatore",
    "best infertility hospital in coimbatore",
    "best infertility clinic in coimbatore",
  ],
  openGraph: {
    title: "Best Fertility Center in Coimbatore | Kovai Health Center",
    description: "Trusted fertility & sexual wellness care in Coimbatore with 30+ yrs experience. Expert natural Ayurvedic treatments for male & female fertility. Book today!",
    siteName: "Kovai Health Center",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://kovaihealthcenter.com/about-image-1.png",
        width: 800,
        height: 800,
        alt: "Kovai Health Center - Best Fertility Clinic & Doctors in Coimbatore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Fertility Center in Coimbatore | Kovai Health Center",
    description: "Trusted fertility & sexual wellness care in Coimbatore with 30+ yrs experience. Expert natural Ayurvedic treatments for male & female fertility.",
    images: ["https://kovaihealthcenter.com/about-image-1.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.png" },
      { url: "/icon.png" }
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  verification: {
    google: "t_PaVwM9cb1OM-oIkBPqvzIWBNteDcB_J2LZ7fa_cD8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <AeoGeoSchema />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-mesh min-h-screen flex flex-col relative`}
        suppressHydrationWarning
      >
        <IconGradients />
        <Preloader />
        <Navbar />
        <main className="flex-grow pb-16 xl:pb-0">
          {children}
        </main>
        <Footer />

        <ConsultationModal />
        <FloatingWhatsApp />
        <BottomNav />
      </body>
    </html>
  );
}
