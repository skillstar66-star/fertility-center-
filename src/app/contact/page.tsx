import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact Kovai Health Center | Gandhipuram Coimbatore | Book Appointment",
  description: "Contact Kovai Health Center in Gandhipuram, Coimbatore. Opposite Kattoor Police Station. Call or WhatsApp +91 93854 05040 for 100% confidential consultation.",
  keywords: [
    "Contact Kovai Health Center",
    "Fertility Clinic Coimbatore Phone Number",
    "Dr Jaleel Contact Number",
    "Gandhipuram Fertility Center Address",
    "Book Doctor Appointment Coimbatore",
    "Kovai Health Center WhatsApp"
  ],
  alternates: {
    canonical: "https://kovaihealthcenter.com/contact",
  },
  openGraph: {
    title: "Contact Kovai Health Center | Gandhipuram Coimbatore | Book Appointment",
    description: "Opposite Kattoor Police Station, Gandhipuram, Coimbatore. Call or WhatsApp +91 93854 05040 for confidential consultation.",
    url: "https://kovaihealthcenter.com/contact",
    siteName: "Kovai Health Center",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="pt-[104px]">
      <Contact />
    </main>
  );
}
