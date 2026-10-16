import type { Metadata } from "next";
import DoctorsClient from "./DoctorsClient";

export const metadata: Metadata = {
  title: "Best Fertility Doctors & Specialists in Coimbatore | Kovai Health Center",
  description: "Consult senior fertility doctors & sexologists in Coimbatore. 30+ years clinical experience in natural Ayurvedic & Unani treatments for male and female wellness.",
  keywords: [
    "Best Fertility Doctor Coimbatore",
    "Dr Jaleel Coimbatore",
    "Sexologist in Coimbatore",
    "Top Infertility Specialist Coimbatore",
    "Ayurvedic Doctor Gandhipuram",
    "Female Fertility Doctor Coimbatore"
  ],
  alternates: {
    canonical: "https://kovaihealthcenter.com/doctors",
  },
  openGraph: {
    title: "Best Fertility Doctors & Specialists in Coimbatore | Kovai Health Center",
    description: "Consult senior fertility doctors & sexologists in Coimbatore with 30+ years clinical experience.",
    url: "https://kovaihealthcenter.com/doctors",
    siteName: "Kovai Health Center",
    type: "profile",
  },
};

export default function DoctorsListPage() {
  return <DoctorsClient />;
}
