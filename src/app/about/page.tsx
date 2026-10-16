import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Best Fertility Clinic in Coimbatore | Kovai Health Center",
  description: "30+ years of trusted Ayurvedic fertility care in Gandhipuram, Coimbatore. Led by Dr. Jaleel with a patient-first holistic approach. Learn our story & vision.",
  keywords: [
    "About Kovai Health Center",
    "Dr Jaleel Coimbatore",
    "Ayurvedic Fertility Hospital Coimbatore",
    "Best Infertility Clinic History",
    "Holistic Fertility Care Coimbatore",
    "Gandhipuram Fertility Specialist"
  ],
  alternates: {
    canonical: "https://kovaihealthcenter.com/about",
  },
  openGraph: {
    title: "About Us | Best Fertility Clinic in Coimbatore | Kovai Health Center",
    description: "30+ years of trusted Ayurvedic fertility care in Gandhipuram, Coimbatore. Led by Dr. Jaleel with a patient-first holistic approach.",
    url: "https://kovaihealthcenter.com/about",
    siteName: "Kovai Health Center",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
