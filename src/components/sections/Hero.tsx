"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShieldCheck, Star, Activity, Circle, Dot, Phone } from "@/components/Icons";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const slides = [
  {
    image: "/image copy.png",
    imagePosition: "object-[80%_center] sm:object-center",
    tag: "Experience & Expertise",
    titlePrefix: "30 Years of Trusted Care in ",
    titleHighlight: "Sexual Health & Fertility",
    subtitle: "With 30 years of experience, our certified doctors offer personalized guidance for sexual health and fertility concerns, combining traditional knowledge with a thoughtful, patient-focused approach."
  },
  {
    image: "/image copy 5.png",
    imagePosition: "object-[80%_center] sm:object-center",
    tag: "Understanding & Personalised Care",
    titlePrefix: "Personalized Care That Begins With ",
    titleHighlight: "Understanding Your Concern",
    subtitle: "We take time to understand your health concerns, lifestyle, and needs before suggesting a suitable approach, helping you move forward with clarity and confidence."
  },
  {
    image: "/image copy 6.png",
    imagePosition: "object-[80%_center] sm:object-center",
    tag: "Compassion & Patient Trust",
    titlePrefix: "Compassionate Guidance for Your ",
    titleHighlight: "Health, Fertility & Wellbeing",
    subtitle: "From sensitive sexual health concerns to fertility needs, we provide a respectful space where individuals and couples can seek clear guidance and informed care with complete privacy and confidentiality"
  }
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-[85dvh] lg:h-[100dvh] min-h-[540px] w-full overflow-hidden flex items-center pt-16 pb-4 group/slider">
      {/* Background Image Slider */}
      <div className="absolute inset-0 w-full h-full z-0 bg-slate-50">
        <AnimatePresence initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image 
              src={slides[current].image}
              alt="Hero Background"
              fill
              className={cn(
                "object-cover transition-transform duration-[10s] scale-105 brightness-[1.08] contrast-[1.05] saturate-[1.08]", 
                slides[current].imagePosition
              )}
              priority
            />
          </motion.div>
        </AnimatePresence>
        {/* Transparent gradient overlay ensuring crisp image clarity with high text contrast on mobile */}
        <div className="absolute inset-0 bg-white/70 sm:bg-transparent sm:backdrop-blur-none sm:bg-gradient-to-r sm:from-white/95 sm:via-white/60 sm:to-transparent z-10 transition-all" />
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className="group relative flex h-4 w-4 items-center justify-center focus:outline-none"
            aria-label={`Go to slide ${idx + 1}`}
          >
            <span 
              className={cn(
                "absolute h-1.5 rounded-full transition-all duration-300",
                current === idx ? "w-6 bg-brand-primary" : "w-1.5 bg-slate-300 group-hover:bg-brand-primary/50"
              )} 
            />
          </button>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full h-full flex flex-col justify-center pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full pointer-events-auto">
          
          {/* Left Content - Mobile-friendly high contrast container */}
          <div className="flex flex-col items-start pt-2 sm:pt-4 w-full justify-center relative bg-white/80 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none p-5 sm:p-0 rounded-3xl border border-white/60 sm:border-none shadow-sm sm:shadow-none">
            <AnimatePresence mode="wait">
              <motion.div 
                key={slides[current].tag}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-3 sm:mb-4 border-2 border-brand-primary/40 text-[#0f172a] font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-md bg-white"
              >
                <ShieldCheck className="w-4 h-4 text-brand-primary shrink-0" />
                <span>{slides[current].tag}</span>
              </motion.div>
            </AnimatePresence>
            
            <div className="w-full mb-4 sm:mb-6 min-h-[190px] sm:min-h-[250px] lg:min-h-[280px] flex flex-col justify-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col w-full"
                >
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] leading-[1.2] tracking-tight mb-3 sm:mb-4">
                    {slides[current].titlePrefix}
                    <span className="text-blue-600 font-black">{slides[current].titleHighlight}</span>
                  </h1>
                  
                  <p className="text-sm sm:text-base lg:text-lg text-slate-900 max-w-xl leading-relaxed font-bold sm:font-semibold">
                    {slides[current].subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-2.5 sm:gap-3.5 mb-2 sm:mb-6 w-full sm:w-auto z-10 relative"
            >
              <Link 
                href="#consultation" 
                className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-bold text-white bg-[#0f172a] rounded-full hover:bg-brand-primary transition-all duration-300 shadow-lg hover:shadow-brand-primary/20"
              >
                Book a Confidential Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a 
                href="tel:+919385405040" 
                className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-bold text-brand-dark bg-white/95 backdrop-blur-md rounded-full border border-slate-200 hover:border-brand-primary hover:text-brand-primary transition-all duration-300 shadow-xs"
              >
                <Phone className="w-4 h-4 text-brand-primary" />
                Call Us Today
              </a>
            </motion.div>
          </div>

          {/* Right Visual - floating card */}
          <div className="relative h-full w-full hidden lg:flex items-end justify-end pb-4 sm:pb-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="glass bg-white/30 backdrop-blur-xl p-4 rounded-2xl w-64 sm:w-72 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] border border-white/40 flex gap-3 mb-8"
            >
              <div className="w-16 h-16 rounded-xl bg-brand-cyan/20 flex-shrink-0 flex items-center justify-center">
                <Activity className="w-8 h-8 text-brand-primary" />
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="font-bold text-brand-dark text-lg leading-tight mb-1">Personalized Care</h4>
                <p className="text-xs text-slate-600 leading-snug">
                  Expert treatments designed for your unique health and lifestyle needs.
                </p>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
