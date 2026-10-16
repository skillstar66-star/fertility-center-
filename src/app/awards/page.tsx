import type { Metadata } from "next";
import AwardsClient from "./AwardsClient";

export const metadata: Metadata = {
  title: "Awards & Recognitions | Dr. Jaleel | Kovai Health Center Coimbatore",
  description: "Honored with Global Award by former Indian Vice President Dr. Hamid Ansari & State Medallions. 30+ years of award-winning Ayurvedic fertility care.",
  keywords: [
    "Dr Jaleel Awards",
    "Kovai Health Center Achievements",
    "Best Doctor Award Hamid Ansari",
    "Ayurvedic Doctor Recognition Coimbatore",
    "Fertility Specialist Awards Tamil Nadu"
  ],
  alternates: {
    canonical: "https://kovaihealthcenter.com/awards",
  },
  openGraph: {
    title: "Awards & Recognitions | Dr. Jaleel | Kovai Health Center Coimbatore",
    description: "Honored with Global Award by former Indian Vice President Dr. Hamid Ansari & State Medallions.",
    url: "https://kovaihealthcenter.com/awards",
    siteName: "Kovai Health Center",
    type: "website",
  },
};

export default function AwardsPage() {
  return <AwardsClient />;
}
