"use client";

import { motion } from "framer-motion";
import { Sparkles, Calendar, ShieldCheck, Lock, Users, HeartHandshake, ArrowRight } from "@/components/Icons";
import Image from "next/image";
import Link from "next/link";

export function Doctors() {
  const doctors = [
    {
      name: "Dr Jalaludheen.",
      initials: "DAJ",
      qualification: "BAMS, PhD",
      experience: "22+ Years Experience",
      specialty: "Chief Physician - Sexual Wellness & Fertility",
      theme: "light-blue",
      img: "/image copy 2.png"
    },
    {
      name: "Dr Sijahudheen.",
      initials: "DS",
      qualification: "BAMS",
      experience: "18+ Years Experience",
      specialty: "Ayurvedic Healthcare",
      theme: "dark-blue",
      img: "/image copy 3.png",
      featured: true
    },
    {
      name: "Dr Sithara Mehroon",
      initials: "DSM",
      qualification: "BAMS, DGO, DIC",
      experience: "15+ Years Experience",
      specialty: "Female Fertility & Wellness",
      theme: "green",
      img: "/image copy 4.png"
    }
  ];

  const getThemeStyles = (theme: string, isFeatured: boolean = false) => {
    switch (theme) {
      case 'light-blue':
        return {
          card: 'bg-white border-blue-50',
          badgeBg: 'bg-blue-50',
          badgeText: 'text-blue-600',
          qualText: 'text-blue-600',
          iconColor: 'text-blue-500',
          strokeColor: 'border-b-blue-500 border-l-blue-500',
          btnBg: 'bg-blue-50 hover:bg-blue-100',
          btnText: 'text-blue-700'
        };
      case 'dark-blue':
        return {
          card: 'bg-white border-blue-100 shadow-[0_20px_60px_-15px_rgba(37,99,235,0.15)] scale-105 z-10',
          badgeBg: 'bg-blue-600',
          badgeText: 'text-white',
          qualText: 'text-blue-600',
          iconColor: 'text-blue-500',
          strokeColor: 'border-b-blue-600 border-l-blue-600',
          btnBg: 'bg-blue-600 hover:bg-blue-700',
          btnText: 'text-white'
        };
      case 'green':
        return {
          card: 'bg-white border-emerald-50',
          badgeBg: 'bg-emerald-50',
          badgeText: 'text-emerald-600',
          qualText: 'text-emerald-600',
          iconColor: 'text-emerald-500',
          strokeColor: 'border-b-emerald-500 border-l-emerald-500',
          btnBg: 'bg-emerald-50 hover:bg-emerald-100',
          btnText: 'text-emerald-700'
        };
      default:
        return {
          card: 'bg-white border-slate-50',
          badgeBg: 'bg-slate-100',
          badgeText: 'text-slate-600',
          qualText: 'text-slate-600',
          iconColor: 'text-slate-500',
          strokeColor: 'border-b-slate-500 border-l-slate-500',
          btnBg: 'bg-slate-50',
          btnText: 'text-slate-700'
        };
    }
  };

  return (
    <section id="doctors" className="py-24 bg-[#fafbfc] relative overflow-hidden">
      {/* Background abstract waves */}
      <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none overflow-hidden">
        <svg className="absolute -right-40 top-20 w-[800px] h-[800px]" viewBox="0 0 800 800" fill="none">
          <circle cx="400" cy="400" r="300" stroke="#bfdbfe" strokeWidth="1" strokeDasharray="10 10"/>
          <circle cx="400" cy="400" r="200" stroke="#bfdbfe" strokeWidth="1" />
          <circle cx="400" cy="400" r="400" stroke="#bfdbfe" strokeWidth="1" strokeDasharray="5 5"/>
        </svg>
      </div>

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-bold text-sm tracking-wide mb-6">
            <Users className="w-4 h-4" />
            OUR EXPERTS
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0f172a] mb-6 leading-tight">
            Meet Our Experienced<br/>
            <span className="text-blue-600">Healthcare Team</span>
          </h2>
          <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto mb-6" />
          <p className="text-lg text-slate-600 font-medium">
            Dedicated professionals committed to providing personalized and confidential care.
          </p>
        </div>

        {/* Swipe Indication for Mobile */}
        <div className="flex md:hidden items-center justify-center gap-2 text-slate-500 text-sm mb-6 animate-pulse">
          <span>Swipe to see more</span>
          <ArrowRight className="w-4 h-4" />
        </div>

        {/* Doctors Grid / Carousel */}
        <div className="flex md:grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-16 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory pb-6 md:pb-0 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
          {doctors.map((doc, idx) => {
            const styles = getThemeStyles(doc.theme, doc.featured);
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`flex flex-col rounded-[32px] border ${styles.card} overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 relative bg-white shrink-0 w-[85vw] sm:w-[320px] md:w-auto snap-center`}
              >
                {/* Top badges */}
                <div className="flex justify-between items-center p-6 pb-0 mb-4">
                  <div className={`w-14 h-12 rounded-2xl flex items-center justify-center font-bold text-xl ${styles.badgeBg} ${styles.badgeText}`}>
                    {doc.initials}
                  </div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-white border border-slate-100 shadow-sm ${styles.iconColor}`}>
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>

                {/* Profile Image */}
                <div className="flex justify-center mb-6 px-6">
                  <div className={`relative w-40 h-40 rounded-full border-4 border-white shadow-md flex items-center justify-center ${styles.strokeColor} border-t-transparent border-r-transparent rotate-[-15deg]`}>
                    <div className="w-36 h-36 rounded-full overflow-hidden rotate-[15deg]">
                      <Image 
                        src={doc.img} 
                        alt={doc.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="px-6 text-center flex-1 flex flex-col relative z-10 group/text">
                  <motion.h3 
                    className="text-2xl font-bold text-[#0f172a] mb-2 transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {doc.name}
                  </motion.h3>
                  <p className={`font-bold mb-3 ${styles.qualText} transition-transform duration-300 group-hover:-translate-y-0.5`}>{doc.qualification}</p>
                  <p className="text-slate-500 text-sm mb-6 leading-relaxed flex-1">
                    {doc.specialty}
                  </p>
                  
                  <div className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full mb-8 mx-auto ${styles.badgeBg} ${styles.badgeText} bg-opacity-50 text-sm font-semibold`}>
                    <Calendar className="w-4 h-4" />
                    {doc.experience}
                  </div>
                </div>
                
                {/* View Profile Button */}
                <Link href="#consultation" className={`w-full py-5 flex items-center justify-center gap-2 font-bold transition-colors ${styles.btnBg} ${styles.btnText}`}>
                  View Profile
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Feature Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-[24px] sm:rounded-[32px] p-4 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 grid grid-cols-2 gap-y-6 gap-x-2 lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-6"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-4 w-full lg:w-auto">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-blue-600 mb-1 text-[13px] sm:text-base leading-tight break-words">Verified Experts</h4>
              <p className="text-slate-500 text-[11px] sm:text-sm leading-tight">Experienced & certified professionals.</p>
            </div>
          </div>
          
          <div className="hidden lg:block w-px h-12 bg-slate-100" />
          
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-4 w-full lg:w-auto">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Lock className="w-5 h-5 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-emerald-600 mb-1 text-[13px] sm:text-base leading-tight break-words">100% Confidential</h4>
              <p className="text-slate-500 text-[11px] sm:text-sm leading-tight">Your privacy is our priority.</p>
            </div>
          </div>
          
          <div className="hidden lg:block w-px h-12 bg-slate-100" />

          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-4 w-full lg:w-auto">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-purple-600 mb-1 text-[13px] sm:text-base leading-tight break-words">Personalized Care</h4>
              <p className="text-slate-500 text-[11px] sm:text-sm leading-tight">Tailored treatments for you.</p>
            </div>
          </div>

          <div className="hidden lg:block w-px h-12 bg-slate-100" />

          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-4 w-full lg:w-auto">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center shrink-0">
              <HeartHandshake className="w-5 h-5 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-pink-600 mb-1 text-[13px] sm:text-base leading-tight break-words">Compassionate Support</h4>
              <p className="text-slate-500 text-[11px] sm:text-sm leading-tight">We're with you every step.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
