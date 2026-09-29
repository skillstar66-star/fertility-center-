"use client";

import React, { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { doctorsData } from "@/data/doctors";
import {
  User,
  GraduationCap,
  Briefcase,
  Stethoscope,
  Building2,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Clock,
  Globe,
  Heart,
  Star,
  ShieldCheck,
  CheckCircle2,
  Check,
  Sparkles,
  ChevronRight,
  ArrowLeft,
  X,
  Plus,
  MessageSquare
} from "@/components/Icons";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function DoctorProfilePage({ params }: PageProps) {
  const resolvedParams = use(params);
  const doctor = doctorsData.find((d) => d.slug === resolvedParams.slug);

  if (!doctor) {
    notFound();
  }

  // Interactive booking & filter states
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(0);
  const [selectedTime, setSelectedTime] = useState<string>("10:00 AM - 10:30 AM");
  const [isReadMore, setIsReadMore] = useState<boolean>(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [consultationType, setConsultationType] = useState<"clinic" | "phone">("clinic");
  const [bookingStep, setBookingStep] = useState<"form" | "confirmed">("form");
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "about" | "qualifications" | "experience" | "services" | "reviews">("all");

  const bookingDays = [
    { day: "Today", date: "Wed, 29 Sep", available: true },
    { day: "Tomorrow", date: "Thu, 30 Sep", available: true },
    { day: "Friday", date: "Fri, 01 Oct", available: true },
    { day: "Saturday", date: "Sat, 02 Oct", available: true },
    { day: "Monday", date: "Mon, 04 Oct", available: true }
  ];

  const timeSlots = [
    { time: "10:00 AM - 10:30 AM", period: "Morning", badge: "Fast Filling" },
    { time: "11:30 AM - 12:00 PM", period: "Morning", badge: "Available" },
    { time: "02:00 PM - 02:30 PM", period: "Afternoon", badge: "Available" },
    { time: "04:30 PM - 05:00 PM", period: "Evening", badge: "Few Left" },
    { time: "06:00 PM - 06:30 PM", period: "Evening", badge: "Available" },
    { time: "07:15 PM - 07:45 PM", period: "Night", badge: "Available" }
  ];

  // Verified patient reviews for the doctor
  const patientReviews = [
    {
      id: 1,
      name: "Karthik & Priya R.",
      rating: 5,
      date: "2 weeks ago",
      treatment: "Fertility & Natural Conception",
      comment: "We consulted Dr. " + doctor.name + " after 3 years of trying. The approach was so respectful, gentle, and strictly natural. Within 6 months of individualized herbal therapy, we received our positive news!"
    },
    {
      id: 2,
      name: "S. Manikandan",
      rating: 5,
      date: "1 month ago",
      treatment: "Male Reproductive Health",
      comment: "Complete privacy and zero judgment. The doctor listened patiently for 40 minutes and explained the root cause. My energy, stamina, and lab reports have dramatically improved."
    }
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingStep("confirmed");
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] pt-[90px] lg:pt-[104px] pb-24 text-slate-800 relative">
      
      {/* Dynamic Ambient Background Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-20 left-1/4 w-[700px] h-[500px] bg-blue-100/40 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-60 right-10 w-[600px] h-[500px] bg-emerald-100/30 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 relative z-10">
        
        {/* Breadcrumb Navigation & Back Link */}
        <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
            <Link href="/" className="hover:text-blue-600 transition-colors font-medium">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/#doctors" className="hover:text-blue-600 transition-colors font-medium">Doctors</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-bold">{doctor.name}</span>
          </div>

          <Link
            href="/#doctors"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-blue-600 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200/80 shadow-xs transition-all hover:shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Doctors</span>
          </Link>
        </div>

        {/* 1. TOP DOCTOR OVERVIEW CARD (Modern Header Matching Reference Layout with Luxury Accents) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative bg-white/90 backdrop-blur-xl rounded-[32px] p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-[0_10px_40px_rgba(0,0,0,0.04)] mb-8 overflow-hidden group"
        >
          {/* Subtle Watermark Graphic */}
          <div className="absolute top-4 right-6 text-blue-100/40 pointer-events-none select-none">
            <svg width="110" height="110" viewBox="0 0 24 24" fill="currentColor" className="opacity-25">
              <path d="M19 10.5h-5.5V5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5.5H5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h5.5V19c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5.5H19c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z"/>
            </svg>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 lg:gap-10 relative z-10">
            
            {/* Avatar with Double Glowing Ring & Initials Badge */}
            <div className="relative shrink-0 mx-auto md:mx-0">
              
              {/* Initials Badge */}
              <div className="absolute -top-2 -left-2 z-20 w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-600 text-white font-black text-sm flex items-center justify-center shadow-lg border-[3px] border-white">
                {doctor.initials}
              </div>

              {/* Online indicator */}
              <div className="absolute -bottom-1 -right-1 z-20 px-2.5 py-0.5 rounded-full bg-emerald-500 text-white font-extrabold text-[10px] flex items-center gap-1 shadow-md border-2 border-white">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span>Available</span>
              </div>

              {/* Circular Photo */}
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full p-2 bg-gradient-to-tr from-blue-500 via-cyan-400 to-indigo-600 shadow-xl group-hover:scale-102 transition-transform duration-500">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 relative border-4 border-white shadow-inner">
                  <Image
                    src={doctor.img}
                    alt={doctor.name}
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Doctor Info & Bio Quote */}
            <div className="flex-1 space-y-3.5 text-center md:text-left">
              
              {/* Top Tags Bar */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-extrabold border border-emerald-200/80 shadow-2xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Doctor</span>
                </div>

                {doctor.regNo && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200/80">
                    Reg No: {doctor.regNo}
                  </span>
                )}

                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold border border-amber-200/80">
                  ★ Top Rated Specialist
                </span>
              </div>

              {/* Doctor Name with Verified Checkmark */}
              <div className="flex items-center justify-center md:justify-start gap-2.5 flex-wrap">
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] tracking-tight">
                  {doctor.name}
                </h1>
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-sm shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
              </div>

              {/* Qualifications & Designation */}
              <div className="space-y-1">
                <p className="text-sm sm:text-base font-extrabold text-slate-700">
                  {doctor.qualification}
                </p>
                <p className="text-sm sm:text-base font-semibold text-blue-600">
                  {doctor.designation}
                </p>
              </div>

              {/* Rating & Experience Pill Row */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-xs sm:text-sm pt-1">
                <div className="flex items-center gap-1.5 font-extrabold text-slate-900 bg-amber-50 px-3.5 py-1.5 rounded-xl border border-amber-200/80 shadow-2xs">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>{doctor.rating}</span>
                  <span className="text-slate-500 font-normal">({doctor.reviewsCount})</span>
                </div>

                <div className="flex items-center gap-1.5 font-bold text-slate-800 bg-slate-100 px-3.5 py-1.5 rounded-xl border border-slate-200/80 shadow-2xs">
                  <Briefcase className="w-4 h-4 text-blue-600" />
                  <span>{doctor.experience}</span>
                </div>

                <div className="flex items-center gap-1.5 font-bold text-slate-800 bg-emerald-50 px-3.5 py-1.5 rounded-xl border border-emerald-200/80 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>100% Confidential</span>
                </div>
              </div>

              {/* Highlight Quote Box */}
              <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-blue-50/90 to-cyan-50/50 border border-blue-100 text-slate-700 text-xs sm:text-sm leading-relaxed flex items-start gap-3 text-left shadow-xs">
                <Sparkles className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <p className="font-medium italic">
                  &quot;{doctor.quote}&quot;
                </p>
              </div>

            </div>

          </div>
        </motion.div>

        {/* 2. MAIN 2-COLUMN DASHBOARD (Left Content + Right Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Detailed Medical Cards (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* CARD 1: About Doctor */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:border-blue-200 transition-colors"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-xs">
                    <User className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-black text-[#0f172a]">About Doctor</h2>
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Biography</span>
              </div>

              <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-3.5 font-normal">
                <p>{doctor.about[0]}</p>
                {isReadMore && (
                  <>
                    <p>{doctor.about[1]}</p>
                    {doctor.about[2] && <p>{doctor.about[2]}</p>}
                  </>
                )}
              </div>

              <button
                onClick={() => setIsReadMore(!isReadMore)}
                className="mt-4 text-xs sm:text-sm font-extrabold text-blue-600 hover:text-blue-700 transition-colors inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-50/80 hover:bg-blue-100"
              >
                <span>{isReadMore ? "Show Less" : "Read Full Story"}</span>
                <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isReadMore ? "-rotate-90" : "rotate-90"}`} />
              </button>
            </motion.div>

            {/* CARD 2: Qualifications */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:border-blue-200 transition-colors"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-xs">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-black text-[#0f172a]">Qualifications & Credentials</h2>
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Accredited</span>
              </div>

              <ul className="space-y-4">
                {doctor.qualificationsList.map((qual, qIdx) => (
                  <li key={qIdx} className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50/70 border border-slate-100 hover:bg-blue-50/50 hover:border-blue-100 transition-all">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0 mt-2 shadow-xs" />
                    <div className="flex-1">
                      <div className="font-extrabold text-slate-900 text-sm sm:text-[15px]">{qual.title}</div>
                      <div className="text-slate-500 text-xs sm:text-sm font-medium mt-0.5">
                        {qual.institution} • <span className="text-blue-600 font-bold">{qual.period}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CARD 3: Experience */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:border-blue-200 transition-colors"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-xs">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-black text-[#0f172a]">Clinical Experience</h2>
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  {doctor.experienceYears}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                {/* Big Experience Counter Card */}
                <div className="md:col-span-4 p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white text-center flex flex-col items-center justify-center shadow-lg shadow-blue-500/15">
                  <div className="text-4xl sm:text-5xl font-black mb-1 tracking-tight">
                    {doctor.experienceYears.split(" ")[0]}
                  </div>
                  <div className="text-xs font-extrabold uppercase tracking-widest text-blue-100">
                    Years Experience
                  </div>
                  <div className="text-[11px] text-blue-200 mt-2 font-medium">
                    10,000+ Cases Treated
                  </div>
                </div>

                {/* Timeline Cards */}
                <div className="md:col-span-8 space-y-3">
                  {doctor.experienceList.map((exp, eIdx) => (
                    <div key={eIdx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3 hover:bg-slate-100/80 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                      <div>
                        <div className="font-bold text-slate-900 text-xs sm:text-sm">{exp.role}</div>
                        <div className="text-blue-600 text-xs font-bold mt-0.5">{exp.period}</div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>

            {/* CARD 4: Specializations */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:border-blue-200 transition-colors"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-xs">
                    <Stethoscope className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-black text-[#0f172a]">Core Specializations</h2>
                </div>
                <span className="text-xs font-bold text-slate-400">Clinical Focus</span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {doctor.specializations.map((spec, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-4 py-2.5 rounded-2xl bg-blue-50/80 text-blue-900 font-bold text-xs sm:text-sm border border-blue-100 shadow-2xs hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all cursor-default"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CARD 5: Services Offered */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:border-blue-200 transition-colors"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-xs">
                    <Plus className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <h2 className="text-xl font-black text-[#0f172a]">Services & Therapies</h2>
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Comprehensive Care
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {doctor.services.map((srv, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-emerald-50/50 hover:border-emerald-100 transition-all">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 shadow-2xs">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="font-bold text-xs sm:text-sm text-slate-800">{srv}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CARD 6: Patient Reviews Showcase */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_25px_rgba(0,0,0,0.03)]"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shadow-xs">
                    <Star className="w-5 h-5 fill-amber-400" />
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-[#0f172a]">Patient Feedback</h2>
                    <p className="text-xs text-slate-500 font-medium">{doctor.rating} out of 5.0 rating based on {doctor.reviewsCount}</p>
                  </div>
                </div>
                <span className="text-xs font-extrabold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  100% Real Reviews
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {patientReviews.map((rev) => (
                  <div key={rev.id} className="p-4 rounded-2xl bg-slate-50/90 border border-slate-100 flex flex-col justify-between space-y-3">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-extrabold text-sm text-slate-900">{rev.name}</span>
                        <div className="flex text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed italic font-normal">
                        &quot;{rev.comment}&quot;
                      </p>
                    </div>
                    <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-400">
                      <span className="text-blue-600 font-semibold">{rev.treatment}</span>
                      <span>{rev.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CARD 7: Clinic Information & Contact (Side by Side in Box) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_25px_rgba(0,0,0,0.03)]"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Clinic Address Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-black text-[#0f172a]">Clinic Information</h3>
                  </div>

                  <div className="text-xs sm:text-sm text-slate-600 space-y-2.5 font-normal">
                    <div className="font-extrabold text-slate-900 text-base">Kovai Health Center</div>
                    <p className="leading-relaxed">
                      No.526, 2nd Floor, Fathima Manzil, Opp. Arasu Medicals, Nehru Street, Gandhipuram, Coimbatore - 641018.
                    </p>
                    
                    <div className="pt-1">
                      <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Open Today: 9:00 AM – 8:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Quick Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Phone className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-black text-[#0f172a]">Contact & Appointments</h3>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm">
                    <a href="tel:+919385405040" className="flex items-start gap-3 text-slate-700 hover:text-blue-600 transition-colors p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100">
                      <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                        <Phone className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="font-extrabold text-slate-900">+91 93854 05040</div>
                        <span className="text-xs text-slate-500 font-medium">Direct Line (Confidential)</span>
                      </div>
                    </a>

                    <a href="mailto:kovaihealthcenter@gmail.com" className="flex items-start gap-3 text-slate-700 hover:text-blue-600 transition-colors p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100">
                      <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                        <Mail className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">kovaihealthcenter@gmail.com</div>
                        <span className="text-xs text-slate-500">Official Support</span>
                      </div>
                    </a>

                    <a 
                      href="https://maps.google.com/?q=Gandhipuram,Coimbatore" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-extrabold text-xs pt-1 px-3 py-1.5 rounded-xl bg-blue-50/80 hover:bg-blue-100 transition-all"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Get Directions on Google Maps →</span>
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Sticky Interactive Booking Widget (4 Cols) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            
            {/* SIDEBAR CARD 1: Book Appointment Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-white rounded-[32px] p-6 sm:p-7 border border-slate-200/90 shadow-[0_12px_40px_rgba(0,0,0,0.06)] space-y-5"
            >
              <div className="flex items-start gap-3 pb-3 border-b border-slate-100">
                <div className="w-11 h-11 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-[#0f172a]">Book Appointment</h3>
                  <p className="text-xs text-slate-500 font-medium">Schedule your visit with {doctor.name}</p>
                </div>
              </div>

              {/* Consultation Type Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">Consultation Mode</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setConsultationType("clinic")}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border flex items-center justify-center gap-1.5 ${
                      consultationType === "clinic"
                        ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    <span>🏥 In-Clinic</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setConsultationType("phone")}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border flex items-center justify-center gap-1.5 ${
                      consultationType === "phone"
                        ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    <span>📞 Phone / Video</span>
                  </button>
                </div>
              </div>

              {/* Select Date Chips */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">Select Preferred Date</label>
                <div className="grid grid-cols-2 gap-2">
                  {bookingDays.slice(0, 4).map((d, dIdx) => (
                    <button
                      key={dIdx}
                      type="button"
                      onClick={() => setSelectedDayIndex(dIdx)}
                      className={`p-2.5 rounded-xl text-left border transition-all ${
                        selectedDayIndex === dIdx
                          ? "bg-blue-50 border-blue-600 text-blue-900 shadow-xs"
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      <div className="text-[11px] font-extrabold">{d.day}</div>
                      <div className="text-[10px] text-slate-500">{d.date}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Select Time Slot Chips */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">Select Time Slot</label>
                <div className="grid grid-cols-2 gap-2">
                  {timeSlots.map((slot, sIdx) => (
                    <button
                      key={sIdx}
                      type="button"
                      onClick={() => setSelectedTime(slot.time)}
                      className={`p-2 rounded-xl text-xs font-bold border transition-all text-center ${
                        selectedTime === slot.time
                          ? "bg-blue-600 text-white border-blue-600 shadow-xs"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      <div>{slot.time.split(" - ")[0]}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Primary Action Button */}
              <button
                type="button"
                onClick={() => {
                  setBookingStep("form");
                  setIsBookingModalOpen(true);
                }}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black text-sm shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Confirm & Book Appointment</span>
              </button>

              {/* Available Today Status */}
              <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div className="text-xs">
                  <div className="font-extrabold text-emerald-950">Available Today</div>
                  <div className="text-emerald-700 font-medium">Next available slot: {doctor.nextSlot}</div>
                </div>
              </div>

            </motion.div>

            {/* SIDEBAR CARD 2: Languages */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-[0_4px_25px_rgba(0,0,0,0.03)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Globe className="w-4 h-4" />
                </div>
                <h3 className="text-base font-extrabold text-[#0f172a]">Languages Spoken</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {doctor.languages.map((lang, lIdx) => (
                  <span
                    key={lIdx}
                    className="px-3.5 py-1.5 rounded-xl bg-slate-100 text-slate-800 font-extrabold text-xs border border-slate-200 shadow-2xs"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* SIDEBAR CARD 3: Your Health Our Priority Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 text-white rounded-3xl p-6 border border-blue-500 shadow-xl shadow-blue-500/15 relative overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center shadow-xs">
                  <Heart className="w-4 h-4 fill-white" />
                </div>
                <h3 className="text-base font-black">Your Health Our Priority</h3>
              </div>

              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-normal mb-4">
                Trusted care. Better health. A healthier tomorrow with 100% confidentiality guaranteed.
              </p>

              <div className="pt-3 border-t border-white/20 flex items-center justify-between text-xs font-bold">
                <span>10,000+ Happy Families</span>
                <span className="text-emerald-300">✓ Natural Formulations</span>
              </div>
            </motion.div>

          </div>

        </div>

      </div>

      {/* Interactive Appointment Booking Modal */}
      <AnimatePresence>
        {isBookingModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setIsBookingModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[32px] p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-100 relative"
            >
              <button
                onClick={() => setIsBookingModalOpen(false)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              {bookingStep === "form" ? (
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div className="text-center pb-2">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-3 shadow-xs">
                      <Calendar className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900">Confirm Slot</h3>
                    <p className="text-xs text-slate-500 mt-1 font-medium">With {doctor.name} ({doctor.qualification})</p>
                  </div>

                  <div className="p-3.5 bg-blue-50/80 rounded-2xl text-xs text-slate-800 space-y-1.5 border border-blue-100">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Date:</span>
                      <strong className="font-bold">{bookingDays[selectedDayIndex]?.date} ({bookingDays[selectedDayIndex]?.day})</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Time:</span>
                      <strong className="font-bold text-blue-600">{selectedTime}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Mode:</span>
                      <strong className="font-bold text-emerald-700">{consultationType === "clinic" ? "In-Clinic (Gandhipuram)" : "Phone / Video Consultation"}</strong>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number (Strictly Confidential)</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-2xl font-black text-sm shadow-xl shadow-blue-500/25 transition-all"
                  >
                    Confirm & Reserve Consultation
                  </button>
                </form>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md shadow-emerald-500/10">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">Appointment Requested!</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    Thank you, <strong>{patientName}</strong>. Our medical desk coordinator will call you at <strong>{patientPhone}</strong> to confirm your slot with <strong>{doctor.name}</strong>.
                  </p>
                  <button
                    onClick={() => setIsBookingModalOpen(false)}
                    className="w-full py-3.5 bg-slate-900 text-white rounded-2xl font-bold text-sm hover:bg-slate-800 transition-colors"
                  >
                    Done
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
