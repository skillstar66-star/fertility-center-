"use client";

import { motion } from "framer-motion";
import { Award, Star, ShieldCheck, Heart, Users, HeartHandshake, Shield, ArrowRight } from "@/components/Icons";

export function Awards() {
  const awards = [
    {
      level: "GLOBAL",
      title: "Best Doctor\nGlobal Award",
      desc: "Recognized globally for excellence in patient care and medical expertise.",
      theme: "yellow",
      icon: <Star className="w-3 h-3" />
    },
    {
      level: "STATE LEVEL",
      title: "State Best\nDoctor Award",
      desc: "Awarded by the state for outstanding service, dedication and leadership.",
      theme: "blue",
      icon: <ShieldCheck className="w-3 h-3" />
    },
    {
      level: "VAIDHYA RATHNA",
      title: "Vaidhya Rathna\nAward",
      desc: "Honored with the Vaidhya Rathna Award for distinguished healthcare service.",
      theme: "purple",
      icon: <Heart className="w-3 h-3" />
    }
  ];

  const getThemeStyles = (theme: string) => {
    switch (theme) {
      case 'yellow':
        return {
          border: 'border-t-[3px] border-t-yellow-400',
          badgeText: 'text-yellow-600',
          badgeBg: 'bg-yellow-50',
          iconColor: 'text-yellow-500',
          iconBg: 'bg-gradient-to-b from-yellow-300 to-yellow-500',
          glow: 'shadow-[0_0_30px_rgba(250,204,21,0.3)]'
        };
      case 'blue':
        return {
          border: 'border-t-[3px] border-t-blue-500',
          badgeText: 'text-blue-600',
          badgeBg: 'bg-blue-50',
          iconColor: 'text-blue-500',
          iconBg: 'bg-gradient-to-b from-blue-400 to-blue-600',
          glow: 'shadow-[0_0_30px_rgba(59,130,246,0.3)]'
        };
      case 'purple':
        return {
          border: 'border-t-[3px] border-t-purple-500',
          badgeText: 'text-purple-600',
          badgeBg: 'bg-purple-50',
          iconColor: 'text-purple-500',
          iconBg: 'bg-gradient-to-b from-purple-400 to-purple-600',
          glow: 'shadow-[0_0_30px_rgba(168,85,247,0.3)]'
        };
      default: return {};
    }
  };

  return (
    <section id="awards" className="py-24 relative overflow-hidden bg-[#fafbfc]">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-64 h-64" style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-bold text-xs tracking-wide uppercase mb-6 border border-blue-100 shadow-sm">
            <Award className="w-4 h-4" />
            Our Recognition
          </div>
          
          <div className="relative">
            {/* Decorative accents */}
            <div className="absolute -left-12 top-4 w-6 h-6 text-blue-400 opacity-60">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                <line x1="2" y1="12" x2="6" y2="12" className="text-blue-300" />
                <line x1="4" y1="6" x2="8" y2="10" className="text-blue-400" />
                <line x1="4" y1="18" x2="8" y2="14" className="text-purple-300" />
              </svg>
            </div>
            <div className="absolute -right-12 top-4 w-6 h-6 text-blue-400 opacity-60">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                <line x1="22" y1="12" x2="18" y2="12" className="text-purple-300" />
                <line x1="20" y1="6" x2="16" y2="10" className="text-blue-300" />
                <line x1="20" y1="18" x2="16" y2="14" className="text-pink-300" />
              </svg>
            </div>

            <h2 className="text-4xl sm:text-[3.5rem] font-bold text-[#0f172a] leading-tight mb-6 tracking-tight">
              Recognized for <br/>
              Experience & <span className="text-blue-600">Excellence</span>
            </h2>
          </div>

          <p className="text-lg text-slate-600 font-medium mb-8 max-w-xl">
            Honored with prestigious awards for our commitment to quality care, innovation, and patient trust.
          </p>
          
          <div className="w-12 h-1.5 bg-blue-500 rounded-full" />
        </div>

        {/* Swipe Indication for Mobile */}
        <div className="flex md:hidden items-center justify-center gap-2 text-slate-500 text-sm mb-6 animate-pulse mt-4">
          <span>Swipe to see more</span>
          <ArrowRight className="w-4 h-4" />
        </div>

        {/* Awards Grid / Carousel */}
        <div className="flex md:grid md:grid-cols-3 gap-6 lg:gap-8 mb-16 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory pb-6 md:pb-0 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
          {awards.map((award, idx) => {
            const styles = getThemeStyles(award.theme);
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`bg-white rounded-[32px] p-8 sm:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col items-center text-center relative overflow-hidden ${styles.border} shrink-0 w-[85vw] sm:w-[320px] md:w-auto snap-center`}
              >
                {/* Visual Pedestal & Award representation */}
                <div className="w-full flex items-center justify-center mb-10 mt-6 relative h-32">
                  <div className="absolute bottom-0 w-32 h-6 bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 rounded-[100%] shadow-[0_10px_20px_-10px_rgba(0,0,0,0.2)]" />
                  <div className="absolute bottom-3 w-40 h-8 bg-gradient-to-r from-slate-50 via-white to-slate-50 rounded-[100%] border border-slate-200/50 shadow-inner" />
                  
                  {/* The Award Icon */}
                  <div className={`relative z-10 w-20 h-20 rounded-full flex items-center justify-center text-white ${styles.iconBg} ${styles.glow} mb-8`}>
                    <div className="absolute -left-4 -right-4 -top-4 -bottom-4 border border-dashed rounded-full opacity-20 pointer-events-none" style={{ borderColor: 'currentcolor' }} />
                    <Award className="w-10 h-10 drop-shadow-md" />
                    {/* Ribbons */}
                    <div className={`absolute -bottom-4 left-4 w-4 h-6 ${styles.iconBg} clip-path-polygon-[0_0,100%_0,100%_100%,50%_75%,0_100%] -rotate-12`} style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 75%, 0 100%)' }} />
                    <div className={`absolute -bottom-4 right-4 w-4 h-6 ${styles.iconBg} clip-path-polygon-[0_0,100%_0,100%_100%,50%_75%,0_100%] rotate-12`} style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 75%, 0 100%)' }} />
                  </div>
                </div>

                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider mb-6 border ${styles.badgeBg} ${styles.badgeText} border-current/20`}>
                  {award.icon}
                  {award.level}
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] leading-tight mb-4 whitespace-pre-line">
                  {award.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed px-2">
                  {award.desc}
                </p>
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
          className="bg-white rounded-[24px] sm:rounded-[32px] p-4 sm:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 grid grid-cols-2 gap-y-6 gap-x-2 lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-6"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-4 w-full lg:w-auto px-1 sm:px-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
              <Shield className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-blue-800 text-[13px] sm:text-sm mb-1 leading-tight break-words">Trusted Expertise</h4>
              <p className="text-slate-500 text-[11px] sm:text-xs leading-tight">Years of experience you can rely on.</p>
            </div>
          </div>
          
          <div className="hidden lg:block w-px h-10 bg-slate-100" />
          
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-4 w-full lg:w-auto px-1 sm:px-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 border border-teal-100">
              <Users className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-teal-800 text-[13px] sm:text-sm mb-1 leading-tight break-words">Patient First</h4>
              <p className="text-slate-500 text-[11px] sm:text-xs leading-tight">Compassionate care is our priority.</p>
            </div>
          </div>
          
          <div className="hidden lg:block w-px h-10 bg-slate-100" />

          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-4 w-full lg:w-auto px-1 sm:px-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100">
              <Award className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-purple-800 text-[13px] sm:text-sm mb-1 leading-tight break-words">Award Winning</h4>
              <p className="text-slate-500 text-[11px] sm:text-xs leading-tight">Recognized for our excellence.</p>
            </div>
          </div>

          <div className="hidden lg:block w-px h-10 bg-slate-100" />

          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-4 w-full lg:w-auto px-1 sm:px-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center shrink-0 border border-pink-100">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-pink-800 text-[13px] sm:text-sm mb-1 leading-tight break-words">Excellence Always</h4>
              <p className="text-slate-500 text-[11px] sm:text-xs leading-tight">Striving for the highest standards.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
