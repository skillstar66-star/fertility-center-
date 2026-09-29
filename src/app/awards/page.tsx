"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  ChevronRight,
  Phone,
  Sparkles,
  CheckCircle2,
  Calendar,
  X,
  ShieldCheck,
  Star,
  Users,
  MapPin
} from "@/components/Icons";

export default function AwardsPage() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; subtitle?: string } | null>(null);
  const [activeCategory, setActiveCategory] = useState<"all" | "shields" | "stage">("all");

  // Exact 4 Core Award Shields & Certificates with trendy styling
  const featuredShieldAwards = [
    {
      id: "global-award-plaque",
      category: "shields",
      src: "/awards/award-3.png",
      level: "GLOBAL RECOGNITION",
      levelColor: "from-amber-500 to-yellow-600",
      alt: "Best doctor Global award winner Given by Honorable Indian ex-vice President Dr. Hameed Ansari (13-02-2019)",
      badge: "National Citation",
      content: (
        <div className="space-y-2">
          <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed">
            Best doctor Global award winner Given by{" "}
            <strong className="font-extrabold text-slate-900 bg-amber-50 px-1 py-0.5 rounded border border-amber-200/60 inline-block">
              Honorable Indian ex-vice President Dr. Hameed Ansari (13-02-2019)
            </strong>
          </p>
        </div>
      ),
      rawTitle: "Best doctor Global award winner Given by Honorable Indian ex-vice President Dr. Hameed Ansari (13-02-2019)",
      date: "13-02-2019",
      dignitary: "Honorable Indian Ex-Vice President Dr. Hameed Ansari"
    },
    {
      id: "vaidhya-rathna-award",
      category: "shields",
      src: "/awards/award-4.png",
      level: "STATE DISTINCTION",
      levelColor: "from-blue-600 to-indigo-600",
      alt: "Vaidhya Rathna award given by brammashree S V Karuppasamy ex superintendent of police",
      badge: "Honor Citation",
      content: (
        <div className="space-y-2">
          <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed">
            Vaidhya Rathna award given by{" "}
            <strong className="font-extrabold text-slate-900 bg-blue-50 px-1 py-0.5 rounded border border-blue-200/60 inline-block">
              brammashree S V Karuppasamy ex superintendent of police
            </strong>
          </p>
        </div>
      ),
      rawTitle: "Vaidhya Rathna award given by brammashree S V Karuppasamy ex superintendent of police",
      date: "Honorary Award",
      dignitary: "Brammashree S V Karuppasamy, Ex SP"
    },
    {
      id: "state-best-doctor-malaisami",
      category: "shields",
      src: "/awards/award-5.png",
      level: "STATE EXCELLENCE",
      levelColor: "from-amber-600 to-amber-700",
      alt: "State best doctor award given by Dr K Malaisami IAS, ex MP , honorable secretary of ex election commissioner of Tamil Nadu",
      badge: "Golden Shield 2013",
      content: (
        <div className="space-y-2">
          <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed">
            State best doctor award given by{" "}
            <strong className="font-extrabold text-slate-900 bg-amber-50/80 px-1 py-0.5 rounded border border-amber-200/60 inline-block">
              Dr K Malaisami IAS, ex MP , honorable secretary of ex election commissioner of Tamil Nadu
            </strong>
          </p>
        </div>
      ),
      rawTitle: "State best doctor award given by Dr K Malaisami IAS, ex MP , honorable secretary of ex election commissioner of Tamil Nadu",
      date: "2013 National Convocation",
      dignitary: "Dr K Malaisami IAS, Ex MP"
    },
    {
      id: "siddha-association-shield",
      category: "shields",
      src: "/awards/award-6.png",
      level: "ASSOCIATION LEADERSHIP",
      levelColor: "from-emerald-600 to-teal-600",
      alt: "Dr A Jalaludheen Credentials & Memberships",
      badge: "Regd No: 51429",
      content: (
        <div className="text-xs sm:text-[13px] text-slate-700 leading-relaxed space-y-1 bg-slate-50/80 p-3 rounded-xl border border-slate-100">
          <div className="font-extrabold text-slate-900 text-sm pb-1 border-b border-slate-200/80 flex items-center justify-between">
            <span>Dr A Jalaludheen</span>
            <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">Regd: 51429</span>
          </div>
          <div className="font-semibold text-brand-primary">State secretary</div>
          <div>All india alternative medical academy.</div>
          <div>All india sidha medical association.</div>
          <div>National human rights organisation.</div>
          <div className="text-slate-500">Secretary future point social service trust.</div>
        </div>
      ),
      rawTitle: "Dr A Jalaludheen. regd no 51429 - State Secretary All India Sidha Medical Association",
      date: "State Honor",
      dignitary: "All India Siddha Doctors Association"
    }
  ];

  // Stage Felicitation Ceremonies
  const stageFelicitationList = [
    {
      id: "stage-hameed-ansari",
      category: "stage",
      level: "GLOBAL CONVOCATION",
      title: "Global Best Doctor Felicitation Ceremony",
      dateVenue: "13-02-2019 • Constitution Club of India, New Delhi",
      presentedBy: "Honorable Ex-Vice President of India Dr. Mohammad Hamid Ansari",
      quote: "Conferred in the national capital in recognition of distinguished clinical leadership and dedicated healthcare service.",
      image: "/awards/award-1.png",
      badgeTheme: "bg-amber-50 text-amber-700 border-amber-200"
    },
    {
      id: "stage-kalanedhi",
      category: "stage",
      level: "STATE RECOGNITION",
      title: "State Best Doctor Award Presentation",
      dateVenue: "05-10-2008 • Tamil Nadu State Medical Convocation",
      presentedBy: "Dr. T. P. Kalanedhi (Ex Tamil Nadu Medical Director)",
      quote: "Awarded by the former State Medical Director in recognition of exemplary patient outcomes through herbal and integrative medicine.",
      image: "/awards/award-7.png",
      badgeTheme: "bg-purple-50 text-purple-700 border-purple-200"
    },
    {
      id: "stage-national-academy",
      category: "stage",
      level: "NATIONAL ACADEMY",
      title: "All India Alternative Medical Convocation",
      dateVenue: "National Medical Assembly, Chennai",
      presentedBy: "President & Dignitaries, All India Indian Doctors Association",
      quote: "Honored on stage for advancing holistic fertility & wellness therapies across South India over 3 decades.",
      image: "/awards/award-2.png",
      badgeTheme: "bg-blue-50 text-blue-700 border-blue-200"
    }
  ];

  return (
    <main className="min-h-screen bg-[#fafbfc] pt-[90px] lg:pt-[104px] text-slate-800">
      
      {/* Dynamic Background Glow Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-amber-100/40 via-blue-50/20 to-transparent blur-3xl opacity-70" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden border-b border-slate-200/60 z-10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-900 font-semibold">Awards & Honors</span>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            
            {/* Pulsing Pill Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-gradient-to-r from-amber-500/10 via-amber-400/20 to-amber-500/10 text-amber-900 font-extrabold text-xs uppercase tracking-widest mb-6 border border-amber-300/80 shadow-xs backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-amber-600 animate-pulse" />
              GOVERNMENT & NATIONAL RECOGNITIONS
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0f172a] leading-[1.12] tracking-tight mb-6"
            >
              Celebrating <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-600 bg-clip-text text-transparent">30+ Years</span> of Clinical Eminence & State Honors
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto font-normal mb-10"
            >
              Prestigious recognitions bestowed upon <strong className="text-slate-900 font-bold">Dr. A. Jalaludheen</strong> and <strong className="text-slate-900 font-bold">Kovai Health Center</strong> by Honorable State Leaders, National Dignitaries, and Premier Medical Academies.
            </motion.p>

            {/* Modern Stats / Highlight Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto"
            >
              <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-amber-200/80 shadow-sm hover:shadow-md hover:border-amber-400 transition-all text-left group">
                <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-2 font-bold group-hover:scale-110 transition-transform">
                  🏆
                </div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">National Honor</div>
                <div className="text-sm sm:text-base font-extrabold text-slate-900">Global Best Doctor</div>
              </div>

              <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-purple-200/80 shadow-sm hover:shadow-md hover:border-purple-400 transition-all text-left group">
                <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-2 font-bold group-hover:scale-110 transition-transform">
                  🎖️
                </div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">State Honor</div>
                <div className="text-sm sm:text-base font-extrabold text-slate-900">State Best Doctor</div>
              </div>

              <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-blue-200/80 shadow-sm hover:shadow-md hover:border-blue-400 transition-all text-left group">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-2 font-bold group-hover:scale-110 transition-transform">
                  📜
                </div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Police Dignitary</div>
                <div className="text-sm sm:text-base font-extrabold text-slate-900">Vaidhya Rathna</div>
              </div>

              <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-emerald-200/80 shadow-sm hover:shadow-md hover:border-emerald-400 transition-all text-left group">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2 font-bold group-hover:scale-110 transition-transform">
                  ⭐
                </div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Patient Trust</div>
                <div className="text-sm sm:text-base font-extrabold text-slate-900">10,000+ Families</div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* Interactive Category Filter Bar */}
      <section className="sticky top-[72px] lg:top-[80px] z-30 py-4 bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-xs">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
            <Award className="w-4 h-4 text-amber-600" />
            <span>HONOR SHOWCASE:</span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 bg-slate-100 p-1.5 rounded-full border border-slate-200">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-1.5 rounded-full text-xs font-extrabold transition-all ${
                activeCategory === "all"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              All Honors (7)
            </button>
            <button
              onClick={() => setActiveCategory("shields")}
              className={`px-4 py-1.5 rounded-full text-xs font-extrabold transition-all ${
                activeCategory === "shields"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Shields & Citations (4)
            </button>
            <button
              onClick={() => setActiveCategory("stage")}
              className={`px-4 py-1.5 rounded-full text-xs font-extrabold transition-all ${
                activeCategory === "stage"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Stage Ceremonies (3)
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 1: Featured 4-Card Shield & Mementos Grid (Exact Reference Format) */}
      {(activeCategory === "all" || activeCategory === "shields") && (
        <section className="py-16 lg:py-24 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 text-amber-700 font-extrabold text-[11px] uppercase tracking-wider mb-3 border border-amber-200">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                OFFICIAL AWARDS & TROPHIES
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
                Distinguished Award Shields & Citations
              </h2>
            </div>
            <p className="text-slate-500 text-xs sm:text-sm font-medium max-w-md">
              High-resolution photographs of authentic shields, citations, and registered medical credentials.
            </p>
          </div>

          {/* 4 Cards Grid - Modern Luxury Card Design */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
            {featuredShieldAwards.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative bg-white rounded-[28px] p-5 border border-slate-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-2xl hover:border-amber-300/80 transition-all duration-400 flex flex-col justify-between group"
              >
                {/* Glow ring effect on hover */}
                <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-amber-400/0 via-amber-400/0 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                {/* Top Badge */}
                <div className="flex items-center justify-between mb-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100/90 text-slate-800 text-[10px] font-bold border border-slate-200/80">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-primary" />
                    {item.badge}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400">
                    {item.date}
                  </span>
                </div>

                {/* Image Showcase Box */}
                <div 
                  onClick={() => setSelectedImage({ src: item.src, title: item.rawTitle, subtitle: item.dignitary })}
                  className="relative w-full h-[290px] sm:h-[320px] lg:h-[340px] bg-gradient-to-b from-slate-50 to-slate-100/80 rounded-2xl overflow-hidden border border-slate-200/70 cursor-pointer mb-5 shadow-inner"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-contain p-3 group-hover:scale-106 transition-transform duration-500 ease-out"
                  />

                  {/* Gradient bottom reflection shadow */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/15 to-transparent pointer-events-none" />

                  {/* Interactive Zoom Hover Button */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-xs font-extrabold text-slate-900 shadow-xl border border-white/50 flex items-center gap-1.5">
                      <span>Zoom View</span> 🔍
                    </span>
                  </div>
                </div>

                {/* Text Content */}
                <div className="z-10 text-center">
                  {item.content}
                </div>

                {/* Quick Zoom Trigger Button */}
                <div className="mt-4 pt-3 border-t border-slate-100 text-center">
                  <button
                    onClick={() => setSelectedImage({ src: item.src, title: item.rawTitle, subtitle: item.dignitary })}
                    className="text-xs font-bold text-brand-primary hover:text-emerald-700 transition-colors inline-flex items-center gap-1 group-hover:gap-2"
                  >
                    <span>View Full High-Res</span>
                    <ChevronRight className="w-3.5 h-3.5 transition-transform" />
                  </button>
                </div>

              </motion.div>
            ))}
          </div>

        </section>
      )}

      {/* SECTION 2: Historic Stage Felicitation Ceremonies */}
      {(activeCategory === "all" || activeCategory === "stage") && (
        <section className="py-16 lg:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white border-y border-slate-200/70 relative z-10">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 font-extrabold text-xs uppercase tracking-wider mb-4 border border-blue-200">
                <Award className="w-4 h-4 text-blue-600" />
                HISTORIC DIGNITARY FELICITATIONS
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] mb-4 tracking-tight">
                Moments of National Pride & Recognition
              </h2>
              <p className="text-base sm:text-lg text-slate-600">
                Photographic milestones of Dr. A. Jalaludheen being honored by national leaders on stage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stageFelicitationList.map((item, sIdx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: sIdx * 0.15 }}
                  className="bg-white rounded-[32px] overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-400 flex flex-col group"
                >
                  {/* Image with Level Badge */}
                  <div 
                    onClick={() => setSelectedImage({ src: item.image, title: item.title, subtitle: item.presentedBy })}
                    className="relative w-full h-[290px] bg-slate-100 overflow-hidden cursor-pointer"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    <div className="absolute top-4 left-4">
                      <span className={`inline-block text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border shadow-xs ${item.badgeTheme}`}>
                        {item.level}
                      </span>
                    </div>

                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-slate-900 shadow-xl">
                        View Stage Photo 🔍
                      </span>
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="p-7 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="text-xl font-black text-slate-900 mb-2 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs font-bold text-brand-primary mb-3.5 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100 inline-block">
                        {item.presentedBy}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5 italic">
                        &quot;{item.quote}&quot;
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-amber-600 shrink-0" />
                        <span>{item.dateVenue}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* SECTION 3: Doctor Credentials & Leadership Profile */}
      <section className="py-16 lg:py-24 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[36px] p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl border border-slate-700/60">
          
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-xs uppercase tracking-wider border border-emerald-500/30">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                REGISTERED SENIOR MEDICAL LEADERSHIP
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
                Dr. A. Jalaludheen <span className="text-emerald-400 text-2xl sm:text-3xl block font-semibold mt-1">M.D., Ph.D. • Regd No: 51429</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                With over three decades of clinical practice, Dr. A. Jalaludheen has spearheaded research and treatment programs in authentic Unani & Ayurvedic medicine, serving over 10,000+ individuals and couples across India.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  State Secretary – All India Alternative Medical Academy
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  State Secretary – All India Sidha Medical Association
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Member – National Human Rights Organisation
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Secretary – Future Point Social Service Trust
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center items-center text-center p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-xl">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-300 text-slate-950 flex items-center justify-center font-black text-3xl mb-4 shadow-lg">
                30+
              </div>
              <h3 className="text-xl font-bold mb-2">Years of Trusted Healing</h3>
              <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                Consult with Dr. A. Jalaludheen and our specialized team for personalized, confidential health treatments.
              </p>
              <Link
                href="/#consultation"
                className="w-full py-3.5 px-6 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm rounded-full transition-all shadow-lg hover:shadow-emerald-500/30 flex items-center justify-center gap-2"
              >
                Book Appointment <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* Interactive Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/15 text-white hover:bg-white/30 flex items-center justify-center transition-all z-20 border border-white/20"
              aria-label="Close image"
            >
              <X className="w-6 h-6" />
            </button>

            <div 
              className="relative w-full max-w-5xl h-[82vh] flex flex-col items-center justify-center" 
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full flex-1">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>

              <div className="mt-4 px-6 py-3 rounded-2xl bg-slate-900/90 text-white text-xs sm:text-sm text-center font-semibold max-w-3xl backdrop-blur-md border border-slate-700/80 shadow-2xl">
                <div>{selectedImage.title}</div>
                {selectedImage.subtitle && (
                  <div className="text-[11px] text-amber-400 font-normal mt-1">{selectedImage.subtitle}</div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modern Floating CTA Banner */}
      <section className="py-16 lg:py-24 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="bg-gradient-to-br from-[#022c22] via-[#064e3b] to-[#022c22] rounded-[36px] p-8 sm:p-14 lg:p-20 text-white text-center relative overflow-hidden shadow-2xl border border-emerald-600/30">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 text-amber-300 mb-8 border border-white/15 shadow-xl">
              <Award className="w-8 h-8" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight tracking-tight">
              Consult Our <span className="text-amber-300">Award-Winning Medical Team</span> in Coimbatore
            </h2>

            <p className="text-emerald-100 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
              Experience the highest standard of personalized Ayurvedic & Unani healthcare in a strictly confidential, judgment-free environment.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#consultation"
                className="w-full sm:w-auto px-10 py-4 bg-white text-emerald-950 rounded-full font-extrabold text-base hover:bg-amber-300 transition-all duration-300 shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                Book a Consultation <ChevronRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+919385405040"
                className="w-full sm:w-auto px-10 py-4 bg-white/10 text-white border border-white/25 rounded-full font-extrabold text-base hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-md"
              >
                <Phone className="w-5 h-5 text-amber-300" />
                Call +91 93854 05040
              </a>
            </div>

            <p className="text-xs text-emerald-200/70 mt-8 font-medium">
              📍 No.526, 2nd Floor, Fathima Manzil, Opp. Arasu Medicals, Nehru Street, Gandhipuram, Coimbatore - 641018.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
