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
  title: "Best Fertility Center in Coimbatore | Kovai Health Center",
  description: "Trusted fertility & sexual wellness care in Coimbatore with 30+ yrs experience. Expert natural Ayurvedic treatments for male & female fertility. Book today!",
  keywords: [
    // Core & Location Keywords
    "Best Fertility Center in Coimbatore",
    "Best Infertility Hospital in Coimbatore",
    "Kovai Health Center",
    "Fertility Clinic Coimbatore",
    "Ayurvedic Fertility Treatment Coimbatore",
    "Natural Infertility Care Coimbatore",
    "Top Fertility Specialist in Coimbatore",
    "Dr Jaleel Kovai Health Center",
    
    // Male Infertility & Sexual Health Keywords
    "Male Fertility Treatment Coimbatore",
    "Low Sperm Count Treatment in Coimbatore",
    "Oligospermia Natural Cure",
    "Azoospermia Treatment Coimbatore",
    "Sperm Motility Improvement Medicine",
    "Erectile Dysfunction Treatment Coimbatore",
    "Premature Ejaculation Specialist Coimbatore",
    "Male Low Libido Treatment",
    "Epididymal Cyst Treatment Coimbatore",
    "Varicocele Ayurvedic Treatment",
    "Male Pre-Marital Fitness Checkup Coimbatore",
    "Male Preconception Health Care",

    // Female Fertility & Gynaecology Keywords
    "Female Fertility Treatment Coimbatore",
    "PCOS Treatment in Coimbatore",
    "PCOD Natural Ayurvedic Treatment",
    "Ovarian Cyst Treatment Without Surgery",
    "Uterine Fibroids Natural Medicine",
    "Female Hormonal Imbalance Treatment",
    "Irregular Periods Ayurvedic Medicine",
    "Fallopian Tube Blockage Natural Treatment",
    "Female Low Libido Treatment",
    "Female Preconception Health Care Coimbatore",
    "Premarital Fitness in Women",

    // Counseling & Special Care
    "Fertility Counseling Coimbatore",
    "Couple Counseling Coimbatore",
    "Pre-Marital Counseling Coimbatore",
    "Sexual Wellness Clinic Coimbatore",

    // Regional & Tamil transliterated search queries
    "Infertility Treatment Near Me",
    "Best Doctor for Childless Couples in Coimbatore",
    "Kovai Karutharippu Maiyam",
    "Kovai Health Centre Ramanathapuram"
  ],
  openGraph: {
    title: "Best Fertility Center in Coimbatore | Kovai Health Center",
    description: "Trusted fertility & sexual wellness care in Coimbatore with 30+ yrs experience. Expert natural Ayurvedic treatments for male & female fertility. Book today!",
    siteName: "Kovai Health Center",
    locale: "en_IN",
    type: "website",
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
