"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, Activity, HeartPulse, Scale, Dna,
  ShieldCheck, Droplets, FlaskConical, Stethoscope, 
  Dumbbell, Heart, Users, Flower2
} from "@/components/Icons";
import Link from "next/link";
import Image from "next/image";

export function Treatments() {
  const maleTreatments = [
    { name: "Premature Ejaculation", icon: <Droplets className="w-4 h-4" /> },
    { name: "Erectile Dysfunction", icon: <Activity className="w-4 h-4" /> },
    { name: "Low Sperm Count", icon: <FlaskConical className="w-4 h-4" /> },
    { name: "Hormonal Imbalances", icon: <Scale className="w-4 h-4" /> },
    { name: "Azoospermia", icon: <Dna className="w-4 h-4" /> },
    { name: "Anejaculation", icon: <Activity className="w-4 h-4" /> },
    { name: "Varicocele", icon: <Stethoscope className="w-4 h-4" /> },
    { name: "Hydrocele", icon: <Droplets className="w-4 h-4" /> },
    { name: "Sexual Wellness", icon: <ShieldCheck className="w-4 h-4" /> },
    { name: "Pre-Marital Fitness", icon: <Dumbbell className="w-4 h-4" /> },
  ];

  const femaleTreatments = [
    { name: "PCOS / PCOD", icon: <Activity className="w-4 h-4" /> },
    { name: "Ovarian Cyst", icon: <Stethoscope className="w-4 h-4" /> },
    { name: "Uterine Cyst", icon: <Activity className="w-4 h-4" /> },
    { name: "Hormonal Imbalances", icon: <Scale className="w-4 h-4" /> },
    { name: "Low Libido", icon: <Heart className="w-4 h-4" /> },
    { name: "Pre-Marital Fitness", icon: <Flower2 className="w-4 h-4" /> },
    { name: "Female Preconception Health Care", icon: <Activity className="w-4 h-4" /> },
    { name: "Couple Counselling", icon: <Users className="w-4 h-4" /> },
  ];

  return (
    <section id="treatments" className="py-24 bg-[#fafbfc] relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0f172a] mb-6">
            Specialized Care for Your Health Concerns
          </h2>
          <p className="text-lg text-slate-600">
            Comprehensive healthcare options tailored to address both male and female specific health and fertility concerns.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Men's Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[32px] p-8 lg:p-12 relative overflow-hidden bg-gradient-to-br from-blue-50/80 to-white border border-blue-100/50 shadow-[0_8px_40px_rgba(37,99,235,0.06)]"
          >
            {/* Background watermark */}
            <div className="absolute top-10 right-0 lg:-right-10 opacity-30 pointer-events-none">
              <svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 100 L100 100 L140 20 L180 180 L220 100 L400 100" stroke="#bfdbfe" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-500/20">
                <Activity className="w-8 h-8" />
              </div>
              <h3 className="text-[32px] leading-tight font-bold text-[#0f172a] mb-4">Men's Sexual &<br/>Fertility Wellness</h3>
              <p className="text-slate-600 mb-8 max-w-sm font-medium">Expert care for every stage of your reproductive health journey.</p>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4">
                {maleTreatments.map((t, i) => (
                  <Link 
                    key={i} 
                    href={`/treatments/${t.name.toLowerCase().replace(/ \/ /g, '-').replace(/ /g, '-')}`}
                    className="flex items-center bg-white rounded-xl p-3 shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all cursor-pointer group"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {t.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="block text-slate-700 text-[11px] sm:text-sm font-semibold group-hover:text-blue-600 transition-colors leading-tight break-words">{t.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="text-blue-500 text-sm font-semibold italic mb-8">
                + more concerns
              </div>
              
              <div className="mt-auto">
                <div className="bg-[#eef5fa] rounded-2xl p-6 mb-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 border border-blue-100/50 relative overflow-hidden">
                  <div className="flex-1 relative z-10">
                    <div className="flex items-center gap-2 text-blue-700 font-bold mb-2">
                      <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white">
                        <ShieldCheck className="w-3.5 h-3.5" />
                      </div>
                      Confidential. Compassionate. Expert Care.
                    </div>
                    <p className="text-slate-600 text-sm">Personalized treatments backed by science and trust.</p>
                  </div>
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shrink-0 relative z-10 border-4 border-white shadow-sm">
                    <Image 
                      src="https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?q=80&w=400&auto=format&fit=crop" 
                      alt="Happy couple" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                </div>
                
                <Link href="#consultation" className="w-full py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-lg flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/30 transition-all">
                  Explore Men's Care
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Women's Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[32px] p-8 lg:p-12 relative overflow-hidden bg-gradient-to-br from-rose-50/80 to-white border border-rose-100/50 shadow-[0_8px_40px_rgba(225,29,72,0.06)]"
          >
            {/* Background watermark */}
            <div className="absolute top-10 right-0 lg:-right-4 opacity-20 pointer-events-none">
              <svg width="300" height="300" viewBox="0 0 24 24" fill="none" stroke="#fda4af" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
              </svg>
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-400 to-rose-500 flex items-center justify-center text-white mb-6 shadow-lg shadow-rose-500/20">
                <HeartPulse className="w-8 h-8" />
              </div>
              <h3 className="text-[32px] leading-tight font-bold text-[#4c1d95] mb-4">Women's Fertility &<br/>Wellness</h3>
              <p className="text-slate-600 mb-8 max-w-sm font-medium">Comprehensive care for women's health and fertility wellness.</p>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4">
                {femaleTreatments.map((t, i) => (
                  <Link 
                    key={i} 
                    href={`/treatments/${t.name.toLowerCase().replace(/ \/ /g, '-').replace(/ /g, '-')}`}
                    className="flex items-center bg-white rounded-xl p-3 shadow-sm border border-slate-100 hover:shadow-md hover:border-rose-200 transition-all cursor-pointer group"
                  >
                    <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-500 mr-3 shrink-0 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                      {t.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="block text-slate-700 text-[11px] sm:text-sm font-semibold group-hover:text-rose-600 transition-colors leading-tight break-words">{t.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="mt-auto pt-8">
                <div className="bg-rose-50/80 rounded-2xl p-6 mb-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 border border-rose-100/50 relative overflow-hidden">
                  <div className="flex-1 relative z-10">
                    <div className="flex items-center gap-2 text-rose-700 font-bold mb-2">
                      <div className="w-6 h-6 rounded-full bg-rose-500 flex items-center justify-center text-white">
                        <ShieldCheck className="w-3.5 h-3.5" />
                      </div>
                      Empowering Women. Enriching Lives.
                    </div>
                    <p className="text-slate-600 text-sm">Safe, supportive and specialized care for every woman.</p>
                  </div>
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shrink-0 relative z-10 border-4 border-white shadow-sm">
                    <Image 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" 
                      alt="Happy woman" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                </div>
                
                <Link href="#consultation" className="w-full py-4 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold text-lg flex items-center justify-center hover:shadow-lg hover:shadow-rose-500/30 transition-all">
                  Explore Women's Care
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
        
        {/* Bottom Feature Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 bg-white rounded-2xl p-6 shadow-sm border border-slate-100 grid grid-cols-2 gap-y-8 gap-x-4 lg:flex lg:flex-row lg:justify-between lg:items-start lg:gap-4"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 sm:gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm mb-1">Expert Doctors</h4>
              <p className="text-slate-500 text-xs">Experienced & certified specialists</p>
            </div>
          </div>
          
          <div className="hidden lg:block w-px h-12 bg-slate-100" />
          
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 sm:gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm mb-1">100% Confidential</h4>
              <p className="text-slate-500 text-xs">Your privacy is our priority</p>
            </div>
          </div>
          
          <div className="hidden lg:block w-px h-12 bg-slate-100" />

          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 sm:gap-4">
            <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100">
              <Activity className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm mb-1">Personalized Care</h4>
              <p className="text-slate-500 text-xs">Treatment tailored to you</p>
            </div>
          </div>

          <div className="hidden lg:block w-px h-12 bg-slate-100" />

          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 sm:gap-4">
            <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 border border-orange-100">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm mb-1">Trusted by Thousands</h4>
              <p className="text-slate-500 text-xs">Successful journeys & happy families</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}