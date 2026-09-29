export interface Doctor {
  slug: string;
  name: string;
  initials: string;
  qualification: string;
  designation: string;
  rating: number;
  reviewsCount: string;
  experience: string;
  experienceYears: string;
  img: string;
  theme: "light-blue" | "dark-blue" | "green";
  featured?: boolean;
  regNo?: string;
  quote: string;
  about: string[];
  qualificationsList: {
    title: string;
    institution: string;
    period: string;
  }[];
  experienceList: {
    role: string;
    period: string;
  }[];
  specializations: string[];
  services: string[];
  languages: string[];
  availableToday: boolean;
  nextSlot: string;
}

export const doctorsData: Doctor[] = [
  {
    slug: "dr-jalaludheen",
    name: "Dr. A. Jalaludheen",
    initials: "DJ",
    qualification: "BAMS, PhD",
    designation: "Senior Chief Physician & Founder",
    rating: 4.9,
    reviewsCount: "350+ reviews",
    experience: "22+ Years Experience",
    experienceYears: "22+ Years",
    img: "/image copy 2.png",
    theme: "light-blue",
    featured: true,
    regNo: "51429",
    quote: "Dr. A. Jalaludheen is a renowned, compassionate senior physician with over two decades of dedicated clinical excellence in Ayurvedic & Unani healthcare, specialized in fertility restoration and confidential reproductive wellness. He believes in personalized, root-cause healing with high ethical integrity.",
    about: [
      "Dr. A. Jalaludheen is the founding senior consultant and chief physician at Kovai Health Center. Over 22+ years of clinical practice, he has successfully guided more than 10,000+ patients and couples facing complex reproductive, hormonal, and sexual health conditions.",
      "Recipient of prestigious recognitions including the Global Best Doctor Award conferred in New Delhi and the State Best Doctor Award by former Tamil Nadu Medical Director Dr. T.P. Kalanedhi, Dr. Jalaludheen integrates authentic herbal wisdom with thorough modern diagnostics.",
      "He serves as the State Secretary for the All India Alternative Medical Academy and the All India Sidha Medical Association, dedicating his career to compassionate, 100% judgment-free patient care."
    ],
    qualificationsList: [
      {
        title: "BAMS (Bachelor of Ayurvedic Medicine & Surgery)",
        institution: "Government Ayurvedic Medical College",
        period: "1997 - 2002"
      },
      {
        title: "PhD in Traditional & Integrative Medicine",
        institution: "All India Alternative Medical Academy",
        period: "2004 - 2007"
      },
      {
        title: "State Secretary & Registered Senior Practitioner",
        institution: "All India Sidha Medical Association (Regd: 51429)",
        period: "2008 - Present"
      },
      {
        title: "Executive Member",
        institution: "National Human Rights Organisation & Future Point Trust",
        period: "2012 - Present"
      }
    ],
    experienceList: [
      {
        role: "Chief Physician & Managing Director – Kovai Health Center",
        period: "2002 – Present"
      },
      {
        role: "State Secretary – All India Alternative Medical Academy",
        period: "2008 – Present"
      },
      {
        role: "Senior Consultant – Specialized Integrative Health Clinic",
        period: "1998 – 2002"
      }
    ],
    specializations: [
      "Male Infertility",
      "Erectile Dysfunction (ED)",
      "Premature Ejaculation (PE)",
      "Low Sperm Count (Oligospermia)",
      "Female Infertility & Ovulation",
      "PCOD / PCOS Care",
      "Natural Vitality Restoration",
      "Pre-Marital Health Counseling",
      "Holistic Herbal Formulations"
    ],
    services: [
      "Confidential 1-on-1 Consultation",
      "Custom Herbal Formulations",
      "Semen Parameter & Motility Enhancement",
      "Hormonal Balance & Ovulation Therapy",
      "Non-Invasive Natural Wellness Plans",
      "Pre-Marital Health Assessment",
      "Dietary & Lifestyle Guidance",
      "Continuous Dedicated Follow-up Care"
    ],
    languages: ["Tamil", "English", "Malayalam", "Hindi", "Urdu"],
    availableToday: true,
    nextSlot: "10:00 AM"
  },
  {
    slug: "dr-sijahudheen",
    name: "Dr. Sijahudheen",
    initials: "DS",
    qualification: "BAMS",
    designation: "Ayurvedic Healthcare Specialist & Consultant",
    rating: 4.8,
    reviewsCount: "210+ reviews",
    experience: "18+ Years Experience",
    experienceYears: "18+ Years",
    img: "/image copy 3.png",
    theme: "dark-blue",
    featured: true,
    regNo: "63812",
    quote: "Dr. Sijahudheen is an experienced and dedicated Ayurvedic specialist with a strong focus on preventive health, reproductive balance, and personalized herb-based treatments. He advocates patient-first, holistic care.",
    about: [
      "Dr. Sijahudheen has over 18 years of clinical expertise in classical Ayurvedic medicine and wellness therapy. He specializes in male stamina, stress-induced reproductive concerns, and personalized constitution analysis (Prakriti Pariksha).",
      "Known for his patient-first listening and empathetic approach, Dr. Sijahudheen helps individuals overcome long-standing wellness barriers using pure herb extracts, dietary adjustments, and rejuvenation protocols.",
      "He regularly attends national Ayurvedic symposia and collaborates on root-cause reproductive care methodologies."
    ],
    qualificationsList: [
      {
        title: "BAMS (Bachelor of Ayurvedic Medicine & Surgery)",
        institution: "Recognized Ayurveda Medical College & Research Center",
        period: "2001 - 2006"
      },
      {
        title: "Specialized Training in Rasayana & Vajikarana Therapy",
        institution: "Advanced Institute of Traditional Medicine",
        period: "2007 - 2008"
      },
      {
        title: "Member – Indian Ayurvedic Medical Association",
        institution: "Tamil Nadu Chapter",
        period: "2009 - Present"
      }
    ],
    experienceList: [
      {
        role: "Senior Consultant – Kovai Health Center",
        period: "2008 – Present"
      },
      {
        role: "Consultant Physician – Kerala Ayurvedic Health Care",
        period: "2006 – 2008"
      }
    ],
    specializations: [
      "Ayurvedic Sexual Wellness",
      "Stamina & Energy Restoration",
      "Male Reproductive Health",
      "Stress & Anxiety Management",
      "Digestive & Metabolic Balance",
      "Natural Immunity Boosters",
      "Rasayana Therapy",
      "Holistic Lifestyle Guidance"
    ],
    services: [
      "Comprehensive Constitution Assessment",
      "Targeted Herbal Medication Plans",
      "Stress-Related Dysfunction Counseling",
      "Vitality Rejuvenation Therapies",
      "Confidential Health Consultations",
      "Personalized Nutritional Charting",
      "Preventive Health Packages",
      "Follow-up Progress Tracking"
    ],
    languages: ["Tamil", "English", "Malayalam", "Hindi"],
    availableToday: true,
    nextSlot: "11:30 AM"
  },
  {
    slug: "dr-sithara-mehroon",
    name: "Dr. Sithara Mehroon",
    initials: "DSM",
    qualification: "BAMS, DGO, DIC",
    designation: "Female Fertility & Women's Health Specialist",
    rating: 4.9,
    reviewsCount: "280+ reviews",
    experience: "15+ Years Experience",
    experienceYears: "15+ Years",
    img: "/image copy 4.png",
    theme: "green",
    featured: false,
    regNo: "74190",
    quote: "Dr. Sithara Mehroon is a caring and dedicated specialist in women's reproductive health, focusing on natural ovulation regularization, PCOD/PCOS recovery, and compassionate pre-conception guidance.",
    about: [
      "Dr. Sithara Mehroon brings 15+ years of extensive clinical experience in women's reproductive healthcare, gynecology-focused Ayurveda, and natural fertility enhancement.",
      "She has helped hundreds of women successfully manage and overcome PCOD/PCOS, irregular menstrual cycles, fallopian tubal health challenges, and unexplained female infertility without harsh hormonal side effects.",
      "Dr. Sithara provides a comforting, judgment-free space where women can freely discuss sensitive concerns and receive tailored herbal and dietary care plans."
    ],
    qualificationsList: [
      {
        title: "BAMS (Bachelor of Ayurvedic Medicine & Surgery)",
        institution: "Government Ayurvedic Medical College",
        period: "2004 - 2009"
      },
      {
        title: "DGO (Diploma in Gynecology & Obstetrics - Ayur)",
        institution: "Institute of Maternal & Child Health Studies",
        period: "2010 - 2011"
      },
      {
        title: "DIC (Diploma in Infertility Counseling)",
        institution: "Academy of Reproductive Health & Counseling",
        period: "2012 - 2013"
      },
      {
        title: "Member – Women Doctors Association & AIMAA",
        institution: "State Medical Council",
        period: "2014 - Present"
      }
    ],
    experienceList: [
      {
        role: "Senior Women's Health Consultant – Kovai Health Center",
        period: "2012 – Present"
      },
      {
        role: "Resident Medical Officer – Maternal Health Clinic",
        period: "2009 – 2012"
      }
    ],
    specializations: [
      "Female Infertility & Ovulation Care",
      "PCOD / PCOS Natural Reversal",
      "Irregular Menstrual Cycles",
      "Hormonal Imbalance in Women",
      "Uterine & Ovarian Health",
      "Pre-Conception Detox & Preparation",
      "Post-Partum Rejuvenation",
      "Menopausal Health & Wellness"
    ],
    services: [
      "Confidential Female Health Consultation",
      "PCOD/PCOS Targeted Herbal Protocols",
      "Natural Ovulation Monitoring & Care",
      "Hormone Regularization Therapy",
      "Pre-Conception Guidance & Diet",
      "Pelvic Wellness & Rejuvenation",
      "Stress & Emotional Well-being Support",
      "Dedicated Women's Follow-up Care"
    ],
    languages: ["Tamil", "English", "Malayalam", "Hindi", "Urdu"],
    availableToday: true,
    nextSlot: "02:30 PM"
  }
];
