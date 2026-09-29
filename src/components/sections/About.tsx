"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, Users, Leaf } from "@/components/Icons";
import Image from "next/image";
import Link from "next/link";

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:col-span-7 max-w-2xl"
          >
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs uppercase tracking-wider mb-4 border border-emerald-100 self-start shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              ABOUT THE CENTER
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0f172a] leading-[1.18] tracking-tight mb-6">
              WELCOME TO KOVAI HEALTH CENTER
            </h2>

            {/* Blue Highlighted Attractive Callout */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50/50 to-blue-50/30 border-l-4 border-blue-600 shadow-[0_4px_20px_rgba(37,99,235,0.08)] mb-6"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20 mt-0.5">
                  <Leaf className="w-5 h-5" />
                </div>
                <p className="text-base sm:text-lg lg:text-xl font-bold text-blue-700 leading-snug">
                  Provide personalized care using modern Ayurvedic and Unani approaches alongside natural, herb-based treatments.
                </p>
              </div>
            </motion.div>

            {/* Supporting Content */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50/80 border border-slate-100 mb-8">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Users className="w-5 h-5" />
                </div>
                <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
                  Having supported <strong className="text-[#0f172a] font-bold">10,000+ couples and individuals</strong>, we remain committed to creating a comfortable, confidential, and judgment-free environment where people can openly discuss their concerns and take informed steps towards better health and wellbeing.
                </p>
              </div>
            </div>

            {/* CTA Button linking to /about */}
            <div>
              <Link 
                href="/about" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm sm:text-base font-bold text-white bg-[#0f172a] rounded-full hover:bg-brand-primary transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group"
              >
                Learn More About Our Center
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right Visual Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative w-full h-full flex justify-center lg:justify-end items-center"
          >
            <div className="relative w-full max-w-[550px] h-auto rounded-[32px] overflow-hidden shadow-2xl border border-slate-100 group bg-slate-50">
              <Image 
                src="/about-image-1.png" 
                alt="About Kovai Health Center" 
                width={800} 
                height={800} 
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105 brightness-[1.06] contrast-[1.03] saturate-[1.05]"
                priority
              />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/60 shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">30 Years of Trusted Healthcare</h4>
                  <p className="text-[11px] text-slate-500 font-medium">Ayurvedic & Unani Sexual Wellness & Fertility</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
