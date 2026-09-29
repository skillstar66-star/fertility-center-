"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  UserCheck,
  Brain,
  CheckCircle2,
  Activity,
  HeartPulse,
  Stethoscope,
  HeartHandshake,
  ChevronRight,
  Leaf,
  Phone,
  Clock,
  Sparkles,
  HelpCircle,
  Users,
  Award,
  Plus
} from "@/components/Icons";

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const pillars = [
    {
      title: "Patient-First & Confidential Care",
      desc: "Your privacy, dignity, and comfort are our highest priorities. Every consultation is strictly confidential and judgment-free.",
      icon: ShieldCheck,
      color: "blue",
      bgLight: "bg-blue-50/80",
      borderColor: "border-blue-100",
      textColor: "text-blue-600"
    },
    {
      title: "30 Years of Clinical Heritage",
      desc: "Combining generations of traditional wisdom with the expertise of second-generation certified doctors.",
      icon: Clock,
      color: "emerald",
      bgLight: "bg-emerald-50/80",
      borderColor: "border-emerald-100",
      textColor: "text-emerald-600"
    },
    {
      title: "Modern Ayurvedic & Unani Integration",
      desc: "We harness authentic, herb-based classical formulations customized specifically for your unique constitution and health needs.",
      icon: Leaf,
      color: "purple",
      bgLight: "bg-purple-50/80",
      borderColor: "border-purple-100",
      textColor: "text-purple-600"
    },
    {
      title: "10,000+ Families Supported",
      desc: "Trusted by thousands of individuals and couples across Tamil Nadu seeking guidance in fertility and sexual health.",
      icon: Users,
      color: "amber",
      bgLight: "bg-amber-50/80",
      borderColor: "border-amber-100",
      textColor: "text-amber-600"
    }
  ];

  const milestones = [
    { number: "30+", label: "Years of Experience", desc: "Serving generations of families" },
    { number: "10,000+", label: "Patients Guided", desc: "Couples & individuals supported" },
    { number: "100%", label: "Confidentiality", desc: "Complete privacy guaranteed" },
    { number: "2nd Gen", label: "Certified Doctors", desc: "Expertise you can trust" }
  ];

  const faqs = [
    {
      q: "What makes Kovai Health Center unique in Coimbatore?",
      a: "With over 30 years of clinical experience, Kovai Health Center uniquely combines generations of traditional Ayurvedic and Unani knowledge with the modern diagnostic expertise of second-generation certified doctors. We provide individualized, root-cause care in a respectful, 100% confidential environment."
    },
    {
      q: "What conditions do you treat?",
      a: "We specialize in male and female sexual wellness, fertility concerns (such as Low Sperm Count, Azoospermia, Varicocele, PCOS/PCOD, Ovarian Cysts), hormonal imbalances, pre-marital health assessments, and couple counseling."
    },
    {
      q: "Are consultations and patient information kept confidential?",
      a: "Yes, absolutely. We strictly maintain 100% privacy and confidentiality for every patient. Sensitive health concerns are discussed in a private, supportive, and judgment-free clinical setting."
    },
    {
      q: "How does the Ayurvedic & Unani treatment approach work?",
      a: "Rather than simply suppressing symptoms, our doctors assess your unique constitution (Prakriti / Mizaj), lifestyle, diet, and medical history. We formulate personalized, natural herb-based care plans alongside dietary and lifestyle recommendations to restore long-term balance."
    },
    {
      q: "Can couples attend consultations together?",
      a: "Yes. In fact, for fertility planning, pre-marital fitness, or couple counseling, joint consultations are highly encouraged to help both partners understand the condition and support each other."
    },
    {
      q: "Do I need to book an appointment in advance?",
      a: "While walk-ins are welcomed, booking an appointment in advance ensures you have dedicated consultation time with our senior doctors without long waiting periods. You can book via our website or call +91 93854 05040."
    },
    {
      q: "Are natural Ayurvedic and Unani treatments safe?",
      a: "Yes. When prescribed by qualified, certified doctors based on proper clinical evaluation, authentic Ayurvedic and Unani herbal medicines are safe, gentle, and designed to nourish your body without harmful synthetic side effects."
    },
    {
      q: "Where is Kovai Health Center located?",
      a: "Our center is centrally located in Gandhipuram, Coimbatore at: No.526, 2nd Floor, Fathima Manzil, Opp. Arasu Medicals, Nehru Street, Gandhipuram, Coimbatore - 641018."
    }
  ];

  return (
    <main className="min-h-screen bg-[#fafbfc] pt-[90px] lg:pt-[104px]">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-white to-emerald-50/40 pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden border-b border-slate-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-brand-primary">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-800 font-semibold">About Us</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 flex flex-col"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs uppercase tracking-wider mb-5 border border-emerald-100 self-start shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                ABOUT KOVAI HEALTH CENTER
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-[#0f172a] leading-[1.15] tracking-tight mb-6">
                30 Years of Trusted Care in <span className="text-brand-primary">Sexual Health, Fertility & Natural Healing</span>
              </h1>

              <p className="text-slate-600 font-normal text-base sm:text-lg lg:text-xl leading-relaxed mb-6">
                With 30 years of clinical experience, Kovai Health Center brings together generations of traditional knowledge and the expertise of second-generation certified doctors to provide thoughtful care for sexual health, fertility, and related wellness concerns.
              </p>

              {/* Blue Highlight Banner */}
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50/50 to-blue-50/30 border-l-4 border-blue-600 shadow-[0_4px_20px_rgba(37,99,235,0.08)] mb-6">
                <p className="text-base sm:text-lg font-bold text-blue-700 leading-snug">
                  "We take the time to understand your concerns through detailed consultations and provide personalized care using modern Ayurvedic and Unani approaches alongside natural, herb-based treatments."
                </p>
              </div>

              <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed mb-8">
                Having supported <strong>10,000+ couples and individuals</strong>, we remain committed to creating a comfortable, confidential, and judgment-free environment where people can openly discuss their concerns and take informed steps towards better health and wellbeing.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/#consultation" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm sm:text-base font-bold text-white bg-[#0f172a] rounded-full hover:bg-brand-primary transition-all duration-300 shadow-xl hover:-translate-y-0.5"
                >
                  Book a Consultation <ChevronRight className="w-4 h-4" />
                </Link>
                <a 
                  href="tel:+919385405040" 
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm sm:text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-full hover:border-brand-primary hover:text-brand-primary transition-all duration-300 shadow-xs"
                >
                  <Phone className="w-4 h-4 text-brand-primary" />
                  Call Us Today
                </a>
              </div>
            </motion.div>

            {/* Right Visual Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[540px] rounded-[32px] overflow-hidden shadow-2xl border border-slate-100 bg-white group">
                <Image 
                  src="/about-image-1.png" 
                  alt="Kovai Health Center Care" 
                  width={800} 
                  height={800} 
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/40 shadow-sm flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">30 Years of Clinical Excellence</h4>
                    <p className="text-xs text-slate-500 font-medium">Ayurvedic & Unani Certified Medical Care</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {milestones.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-slate-50/80 border border-slate-100 text-center flex flex-col items-center justify-center"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] mb-1">
                  <span className="text-brand-primary">{item.number}</span>
                </div>
                <h4 className="font-bold text-slate-800 text-sm sm:text-base mb-1">{item.label}</h4>
                <p className="text-xs text-slate-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-20 lg:py-28 bg-[#fafbfc] relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            
            {/* Mission Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-[32px] p-8 sm:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 border border-blue-100 shadow-xs">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    <path d="M12 8v4l3 3" />
                  </svg>
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">OUR MISSION</div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mb-4">
                  Dignity, Knowledge & Understanding
                </h3>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                  To create a trusted space where sexual health and fertility concerns can be approached with knowledge, dignity, and understanding. Our mission is to help individuals and couples overcome the hesitation surrounding sensitive health concerns, gain clarity about their condition, and move forward with informed and responsible care.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-blue-600 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" /> Ethical, Patient-Centric & Holistic
              </div>
            </motion.div>

            {/* Vision & Philosophy Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-[32px] p-8 sm:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 border border-emerald-100 shadow-xs">
                  <Leaf className="w-7 h-7" />
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2">OUR PHILOSOPHY</div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mb-4">
                  Root-Cause Healing with Natural Herbs
                </h3>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                  We believe every person's physical constitution and life circumstances are unique. By identifying the underlying metabolic, hormonal, and psychological root causes rather than offering one-size-fits-all fixes, we provide sustainable long-term health improvements.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-emerald-600 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" /> 100% Pure Herbs & Classical Formulations
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 font-bold text-xs uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              OUR CORE PILLARS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] mb-5 tracking-tight">
              Why Patients Trust Kovai Health Center
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Built on 30 years of medical dedication, our four fundamental principles guide every diagnosis and treatment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#fafbfc] rounded-[28px] p-8 border border-slate-100 hover:shadow-xl hover:bg-white transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl ${pillar.bgLight} ${pillar.textColor} flex items-center justify-center mb-6 border ${pillar.borderColor} group-hover:scale-110 transition-transform`}>
                    <pillar.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0f172a] mb-3 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Frequently Asked Questions Accordion */}
      <section className="py-20 lg:py-28 bg-[#fafbfc] border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs uppercase tracking-wider mb-4 border border-emerald-100">
              <HelpCircle className="w-4 h-4 text-emerald-600" />
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] mb-4">
              Everything You Need to Know About Our Center
            </h2>
            <p className="text-base text-slate-600">
              Clear, transparent answers about our clinical background, appointments, and care methods.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="rounded-2xl bg-white border border-slate-100 overflow-hidden shadow-xs hover:border-emerald-200 transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  >
                    <span className="font-bold text-[#0f172a] text-base sm:text-lg flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-bold flex items-center justify-center shrink-0">
                        0{idx + 1}
                      </span>
                      {faq.q}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'bg-brand-primary text-white rotate-45' : 'bg-slate-100 text-slate-600'}`}>
                      <Plus className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2 text-slate-600 text-sm sm:text-base leading-relaxed pl-16 border-t border-slate-50">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] rounded-[36px] p-8 sm:p-14 lg:p-20 text-white text-center relative overflow-hidden shadow-2xl">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 text-emerald-400 mb-8 border border-white/10 shadow-lg">
              <HeartPulse className="w-8 h-8" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
              Begin Your Journey Towards <br />
              <span className="text-brand-primary">Clarity, Health & Confidence</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
              Book a private, confidential consultation with our certified specialists in Gandhipuram, Coimbatore.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#consultation"
                className="w-full sm:w-auto px-9 py-4 bg-brand-primary text-white rounded-full font-bold text-base hover:bg-emerald-500 transition-all duration-300 shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                Book a Consultation <ChevronRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+919385405040"
                className="w-full sm:w-auto px-9 py-4 bg-white/10 text-white border border-white/20 rounded-full font-bold text-base hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5 text-emerald-400" />
                Call +91 93854 05040
              </a>
            </div>

            <p className="text-xs text-slate-400 mt-8">
              No.526, 2nd Floor, Fathima Manzil, Opp. Arasu Medicals, Nehru Street, Gandhipuram, Coimbatore - 641018.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
