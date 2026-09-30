export interface VideoItem {
  id: string;
  title: string;
  description: string;
  category: "Doctor Advice" | "Male Fertility" | "Female Fertility" | "Sexual Wellness" | "Patient Stories" | "Ayurvedic Care";
  doctor?: string;
  doctorRole?: string;
  doctorImg?: string;
  duration: string;
  date: string;
  views?: string;
  videoType: "youtube" | "direct";
  youtubeId?: string; // YouTube Video ID (e.g. "dQw4w9WgXcQ" or embed id)
  videoUrl?: string; // Direct .mp4 file path or video URL
  thumbnail: string; // Thumbnail image path
  tags: string[];
  featured?: boolean;
}

export const videoCategories = [
  "All",
  "Doctor Advice",
  "Male Fertility",
  "Female Fertility",
  "Sexual Wellness",
  "Patient Stories",
  "Ayurvedic Care"
] as const;

export const videosData: VideoItem[] = [
  {
    id: "video-1",
    title: "Understanding Male Fertility & Natural Herbal Solutions",
    description: "Dr. Jalaludheen explains root causes of low sperm count, motility issues, and how authentic Ayurvedic formulations restore reproductive vitality naturally.",
    category: "Male Fertility",
    doctor: "Dr. Jalaludheen",
    doctorRole: "Chief Physician - Sexual Wellness & Fertility",
    doctorImg: "/image copy 2.png",
    duration: "08:45",
    date: "Sep 2026",
    views: "12.4K",
    videoType: "youtube",
    youtubeId: "LXb3EKWsInQ",
    thumbnail: "/male_premarital_fitness_1790678401807.jpg",
    tags: ["Male Fertility", "Sperm Count", "Ayurveda", "Dr Jalaludheen"],
    featured: true
  },
  {
    id: "video-2",
    title: "PCOS & Irregular Periods: Holistic Female Wellness Guide",
    description: "Dr. Sithara Mehroon discusses natural management of PCOS / PCOD, balancing hormones, and preparing the uterus for healthy, natural conception without harsh side effects.",
    category: "Female Fertility",
    doctor: "Dr. Sithara Mehroon",
    doctorRole: "Female Fertility & Women's Health Specialist",
    doctorImg: "/image copy 4.png",
    duration: "11:20",
    date: "Aug 2026",
    views: "18.9K",
    videoType: "youtube",
    youtubeId: "fJ9rUzIMcZQ",
    thumbnail: "/female_hormonal_imbalances_1790677578517.jpg",
    tags: ["PCOS", "Female Fertility", "Hormones", "Women Health"],
    featured: true
  },
  {
    id: "video-3",
    title: "Overcoming Sexual Wellness & Performance Anxiety in Men",
    description: "Confidential clinical guidance on premature ejaculation, erectile concerns, and strengthening nerve stamina through time-tested Unani and Ayurvedic therapies.",
    category: "Sexual Wellness",
    doctor: "Dr. Sijahudheen",
    doctorRole: "Ayurvedic Healthcare Specialist",
    doctorImg: "/image copy 3.png",
    duration: "09:15",
    date: "Aug 2026",
    views: "24.1K",
    videoType: "youtube",
    youtubeId: "kJQP7kiw5Fk",
    thumbnail: "/male_premarital_fitness_1790678401807.jpg",
    tags: ["Sexual Health", "Erectile Wellness", "Stamina", "Confidential Care"],
    featured: true
  },
  {
    id: "video-4",
    title: "Pre-Marital Health Checkups & Couple Wellness Consultation",
    description: "Why pre-marital physical fitness and hormonal evaluation are essential for prospective couples preparing for marriage and future parenthood.",
    category: "Doctor Advice",
    doctor: "Dr. Jalaludheen",
    doctorRole: "Chief Physician",
    doctorImg: "/image copy 2.png",
    duration: "06:50",
    date: "Jul 2026",
    views: "9.8K",
    videoType: "youtube",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "/female_premarital_fitness_1790678350211.jpg",
    tags: ["Pre-Marital", "Couple Care", "Counselling", "Health Screening"]
  },
  {
    id: "video-5",
    title: "How 30 Years of Second-Generation Ayurvedic Heritage Helps Couples",
    description: "An inspiring walkthrough of Kovai Health Center's clinical philosophy, classical herbal research, and patient-first approach to non-surgical wellness.",
    category: "Ayurvedic Care",
    doctor: "Dr. Sijahudheen",
    doctorRole: "Ayurvedic Healthcare Specialist",
    doctorImg: "/image copy 3.png",
    duration: "14:30",
    date: "Jun 2026",
    views: "15.2K",
    videoType: "youtube",
    youtubeId: "LXb3EKWsInQ",
    thumbnail: "/image copy 2.png",
    tags: ["Ayurveda", "Heritage", "Natural Healing", "Kovai Health Center"]
  },
  {
    id: "video-6",
    title: "Patient Experience: Overcoming Years of Infertility Hurdles",
    description: "A real couple shares their journey of emotional resilience and successful natural conception after personalized treatment at Kovai Health Center.",
    category: "Patient Stories",
    duration: "05:40",
    date: "May 2026",
    views: "31.5K",
    videoType: "youtube",
    youtubeId: "fJ9rUzIMcZQ",
    thumbnail: "/image copy 4.png",
    tags: ["Patient Testimonial", "Success Story", "Fertility Journey"]
  }
];
