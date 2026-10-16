import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Treatments } from "@/components/sections/Treatments";
import { Doctors } from "@/components/sections/Doctors";
import { Consultation } from "@/components/sections/Consultation";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";

export const metadata: Metadata = {
  title: "Best Fertility Center in Coimbatore | Kovai Health Center",
  description: "Top-rated natural fertility & sexual wellness clinic in Coimbatore with 30+ yrs experience. Expert Ayurvedic treatments for male & female fertility. Book today!",
  alternates: {
    canonical: "https://kovaihealthcenter.com",
  },
  openGraph: {
    title: "Best Fertility Center in Coimbatore | Kovai Health Center",
    description: "Top-rated natural fertility & sexual wellness clinic in Coimbatore with 30+ yrs experience. Expert Ayurvedic treatments for male & female fertility.",
    url: "https://kovaihealthcenter.com",
    siteName: "Kovai Health Center",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Treatments />
      
      {/* How it works simple section */}
      <Process />

      <Doctors />
      <Consultation />

      {/* Testimonials */}
      <Testimonials />
    </>
  );
}
