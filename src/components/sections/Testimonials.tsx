"use client";

import { motion } from "framer-motion";
import { Star, MessageSquareQuote, CheckCircle2, ShieldCheck, HeartHandshake, MessageCircle, Heart, Leaf, Smile, ArrowRight } from "@/components/Icons";
import Image from "next/image";

export function Testimonials() {
  const testimonials = [
    {
      name: "Ramesh K.",
      text: "Highly professional and completely confidential. The personalized approach and herbal treatments made a significant difference. Truly thankful to the experienced team.",
      theme: "blue",
      treatment: "Fertility Treatment",
      treatmentIcon: <Heart className="w-3 h-3" />,
      img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Priya S.",
      text: "Highly professional and completely confidential. The personalized approach and herbal treatments made a significant difference. Truly thankful to the experienced team.",
      theme: "pink",
      treatment: "Women's Wellness",
      treatmentIcon: <Heart className="w-3 h-3" />,
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Arun V.",
      text: "Highly professional and completely confidential. The personalized approach and herbal treatments made a significant difference. Truly thankful to the experienced team.",
      theme: "green",
      treatment: "Ayurvedic Care",
      treatmentIcon: <Leaf className="w-3 h-3" />,
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    }
  ];

  const getThemeStyles = (theme: string) => {
    switch (theme) {
      case 'blue':
        return {
          imgBg: 'bg-blue-100',
          badgeBg: 'bg-blue-50',
          badgeText: 'text-blue-600',
        };
      case 'pink':
        return {
          imgBg: 'bg-pink-100',
          badgeBg: 'bg-pink-50',
          badgeText: 'text-pink-600',
        };
      case 'green':
        return {
          imgBg: 'bg-emerald-100',
          badgeBg: 'bg-emerald-50',
          badgeText: 'text-emerald-600',
        };
      default: return {};
    }
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-[#fafbfc]">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 text-blue-100/50 pointer-events-none z-0">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.017 21v-7.391c0-5.714 4.143-9.609 9.983-9.609h.001v3.424c-2.482 0-3.645 1.579-3.645 3.324v.252h3.644V21h-9.983zm-14.017 0v-7.391c0-5.714 4.143-9.609 9.983-9.609h.001v3.424c-2.482 0-3.645 1.579-3.645 3.324v.252h3.644V21H0z" />
        </svg>
      </div>
      <div className="absolute top-16 right-16 pointer-events-none z-0 opacity-40">
        <div className="w-32 h-32" style={{ backgroundImage: 'radial-gradient(#94a3b8 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-bold text-xs tracking-wide uppercase mb-6 border border-blue-100 shadow-sm">
            <MessageSquareQuote className="w-4 h-4" />
            Patient Voices
          </div>
          
          <h2 className="text-4xl sm:text-[3.5rem] font-bold text-[#0f172a] leading-tight mb-6 tracking-tight">
            What Our <span className="text-blue-600">Patients</span> Say
          </h2>

          <p className="text-lg text-slate-600 font-medium mb-8 max-w-xl">
            Real stories from real patients who experienced care, compassion, and life-changing results.
          </p>
          
          <div className="w-12 h-1.5 bg-blue-500 rounded-full" />
        </div>

        {/* Swipe Indication for Mobile */}
        <div className="flex md:hidden items-center justify-center gap-2 text-slate-500 text-sm mb-6 animate-pulse mt-4">
          <span>Swipe to see more</span>
          <ArrowRight className="w-4 h-4" />
        </div>

        {/* Testimonials Grid / Carousel */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-16 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory pb-6 md:pb-0 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
          {testimonials.map((item, idx) => {
            const styles = getThemeStyles(item.theme);
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-[32px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-100 relative overflow-hidden flex flex-col shrink-0 w-[85vw] sm:w-[320px] md:w-auto snap-center"
              >
                {/* Background Quote Mark */}
                <div className="absolute top-6 right-6 text-slate-100 pointer-events-none">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.714 4.143-9.609 9.983-9.609h.001v3.424c-2.482 0-3.645 1.579-3.645 3.324v.252h3.644V21h-9.983zm-14.017 0v-7.391c0-5.714 4.143-9.609 9.983-9.609h.001v3.424c-2.482 0-3.645 1.579-3.645 3.324v.252h3.644V21H0z" />
                  </svg>
                </div>

                {/* Profile Avatar */}
                <div className="relative w-16 h-16 mb-6 z-10">
                  <div className={`w-full h-full rounded-full ${styles.imgBg} overflow-hidden border-2 border-white shadow-sm`}>
                    <Image src={item.img} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="absolute bottom-0 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 fill-blue-50" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4 z-10">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-slate-600 text-sm leading-relaxed italic mb-8 flex-1 z-10">
                  "{item.text}"
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-slate-100 mb-6 z-10" />

                {/* Patient Info */}
                <div className="z-10 mb-4">
                  <h4 className="font-bold text-[#0f172a]">{item.name}</h4>
                  <div className="flex items-center gap-1.5 text-blue-600 text-[11px] font-semibold mt-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified Patient
                  </div>
                </div>

                {/* Treatment Badge */}
                <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold w-fit ${styles.badgeBg} ${styles.badgeText} border border-current/10 z-10`}>
                  {item.treatmentIcon}
                  {item.treatment}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Feature Bar & Button Section */}
        <div className="relative pt-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-[24px] sm:rounded-[32px] p-4 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 grid grid-cols-2 gap-y-8 gap-x-2 lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-6 pb-12 sm:pb-12"
          >
            {/* Metric 1 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-4 w-full lg:w-auto px-1 sm:px-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                <Smile className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-[#0f172a] text-[15px] sm:text-lg leading-tight break-words">1200+</h4>
                <p className="text-slate-600 text-[12px] sm:text-sm font-medium leading-tight mb-0.5">Happy Patients</p>
                <p className="text-slate-400 text-[10px] sm:text-xs leading-tight">Trusted by thousands<br className="hidden sm:block"/>of patients</p>
              </div>
            </div>
            
            <div className="hidden lg:block w-px h-16 bg-slate-100" />
            
            {/* Metric 2 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-4 w-full lg:w-auto px-1 sm:px-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                <Star className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-[#0f172a] text-[15px] sm:text-lg leading-tight break-words">4.9/5</h4>
                <p className="text-slate-600 text-[12px] sm:text-sm font-medium leading-tight mb-0.5">Patient Rating</p>
                <p className="text-slate-400 text-[10px] sm:text-xs leading-tight">Average rating from real<br className="hidden sm:block"/>patient reviews</p>
              </div>
            </div>
            
            <div className="hidden lg:block w-px h-16 bg-slate-100" />

            {/* Metric 3 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-4 w-full lg:w-auto px-1 sm:px-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-[#0f172a] text-[15px] sm:text-lg leading-tight break-words">100%</h4>
                <p className="text-slate-600 text-[12px] sm:text-sm font-medium leading-tight mb-0.5">Confidential Care</p>
                <p className="text-slate-400 text-[10px] sm:text-xs leading-tight">Your privacy is always<br className="hidden sm:block"/>our priority</p>
              </div>
            </div>

            <div className="hidden lg:block w-px h-16 bg-slate-100" />

            {/* Metric 4 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-4 w-full lg:w-auto px-1 sm:px-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 border border-orange-100">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-[#0f172a] text-[14px] sm:text-sm leading-tight break-words">Compassionate</h4>
                <p className="text-slate-600 text-[12px] sm:text-sm font-medium leading-tight mb-0.5">Support</p>
                <p className="text-slate-400 text-[10px] sm:text-xs leading-tight">We care for you at<br className="hidden sm:block"/>every step</p>
              </div>
            </div>
          </motion.div>

          {/* Share Your Experience Button - Overlapping the bottom of the metrics card */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex justify-center w-full z-20">
            <button className="bg-white border border-slate-200 hover:border-blue-500 shadow-md hover:shadow-lg rounded-full px-8 py-3.5 flex items-center gap-2 font-bold text-blue-600 transition-all hover:-translate-y-1 group">
              <MessageCircle className="w-5 h-5 text-blue-500 group-hover:text-blue-600" />
              Share Your Experience
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
