import type { Metadata } from "next";
import VideosClient from "./VideosClient";

export const metadata: Metadata = {
  title: "Health & Fertility Videos | Dr. Jaleel | Kovai Health Center Coimbatore",
  description: "Watch educational videos on natural fertility, PCOS, sperm count improvement, sexual wellness and Ayurvedic guidance by Dr. Jaleel at Kovai Health Center.",
  keywords: [
    "Fertility Videos Tamil",
    "Dr Jaleel Health Videos",
    "PCOS Treatment Video Tamil",
    "Sperm Count Improvement Guidance",
    "Ayurvedic Doctor Talks Coimbatore"
  ],
  alternates: {
    canonical: "https://kovaihealthcenter.com/videos",
  },
  openGraph: {
    title: "Health & Fertility Videos | Dr. Jaleel | Kovai Health Center Coimbatore",
    description: "Watch educational videos on natural fertility and wellness by Dr. Jaleel at Kovai Health Center.",
    url: "https://kovaihealthcenter.com/videos",
    siteName: "Kovai Health Center",
    type: "video.other",
  },
};

export default function VideosPage() {
  return <VideosClient />;
}
