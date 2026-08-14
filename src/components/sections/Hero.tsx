"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShieldCheck, Star, Activity, Circle, Dot } from "@/components/Icons";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const slides = [
  {
    image: "/image copy.png",
    imagePosition: "object-[80%_center] sm:object-center",
    title1: "Natural Care.",
    title2: "Trusted Experience.",
    title3: "Better Health.",
    subtitle: "Personalized Ayurvedic & Unani herbal healthcare for sexual wellness, fertility concerns and holistic wellbeing."
  },
  {
    image: "/image copy 5.png",
    imagePosition: "object-[80%_center] sm:object-center",
    title1: "Expert Care.",
    title2: "Compassionate Approach.",
    title3: "Real Results.",
    subtitle: "Experience the best in holistic wellness with tailored treatments designed exclusively for you and your family."
  },
  {
    image: "/image copy 6.png",
    imagePosition: "object-[80%_center] sm:object-center",
    title1: "Holistic Wellness.",
    title2: "Advanced Treatments.",
    title3: "Healthy Future.",
    subtitle: "We combine traditional wisdom with modern care to help you achieve a balanced and fulfilling life."
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
    <section id="home" className="relative h-[80dvh] lg:h-[100dvh] min-h-[500px] w-full overflow-hidden flex items-center pt-16 pb-4 group/slider">
      {/* Background Image Slider */}
      <div className="absolute inset-0 w-full h-full z-0 bg-slate-50">
        <AnimatePresence initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image 
              src={slides[current].image}
              alt="Hero Background"
              fill
              className={cn("object-cover transition-transform duration-[10s] scale-105", slides[current].imagePosition)}
              priority
            />
          </motion.div>
        </AnimatePresence>
        {/* Strong frosted glass overlay on mobile for text readability, subtle gradient on desktop */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[3px] sm:bg-transparent sm:backdrop-blur-none sm:bg-gradient-to-r sm:from-white/80 sm:via-white/30 sm:to-transparent z-10 transition-all" />
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
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
          
          {/* Left Content */}
          <div className="flex flex-col items-start pt-2 sm:pt-4 w-full justify-center relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-4 border-brand-cyan/30 text-brand-dark font-medium text-[10px] sm:text-xs shadow-sm bg-white/50"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-brand-primary" />
              <span className="tracking-wide">TRUSTED HEALTHCARE • COIMBATORE</span>
            </motion.div>
            
            <div className="w-full mb-4 min-h-[240px] sm:min-h-[280px] lg:min-h-[320px] flex flex-col justify-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col w-full"
                >
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-brand-dark leading-[1.1] tracking-tight mb-3">
                    {slides[current].title1}<br />
                    <span className="text-brand-primary">{slides[current].title2}</span><br />
                    {slides[current].title3}
                  </h1>
                  
                  <p className="text-sm sm:text-lg text-slate-700 max-w-xl leading-relaxed font-medium">
                    {slides[current].subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-3 mb-6 w-full sm:w-auto z-10 relative"
            >
              <Link href="#consultation" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-[#0f172a] rounded-full hover:bg-brand-primary transition-all duration-300 shadow-xl">
                Book a Consultation
              </Link>
              <Link href="#treatments" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-brand-dark bg-white/80 backdrop-blur-md rounded-full border border-slate-200 hover:border-brand-primary transition-all duration-300 group shadow-sm">
                Learn More 
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
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
