"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Activity, HeartPulse, Scale, Dna,
  ShieldCheck, Droplets, FlaskConical, Stethoscope, 
  Dumbbell, Heart, Users, Flower2, Sparkles, CheckCircle2
} from "@/components/Icons";
import Link from "next/link";
import Image from "next/image";

export function Treatments() {
  const departments = [
    {
      id: "sexology",
      name: "Sexology & Sexual Wellness",
      tag: "Sexual Health",
      desc: "Specialized, confidential care for male and female sexual wellness and intimate health concerns.",
      color: "blue",
      themeGradient: "from-blue-600 to-indigo-600",
      bgLight: "bg-blue-50/70",
      borderColor: "border-blue-100",
      textColor: "text-blue-600",
      services: [
        { name: "Premature Ejaculation", slug: "premature-ejaculation", icon: <Droplets className="w-4 h-4" /> },
        { name: "Erectile Dysfunction", slug: "erectile-dysfunction", icon: <Activity className="w-4 h-4" /> },
        { name: "Sexual Wellness", slug: "sexual-wellness", icon: <ShieldCheck className="w-4 h-4" /> },
        { name: "Anejaculation", slug: "anejaculation", icon: <Activity className="w-4 h-4" /> },
        { name: "Low Libido (Male)", slug: "low-libido-male", icon: <Heart className="w-4 h-4" /> },
        { name: "Low Libido (Female)", slug: "low-libido-female", icon: <Heart className="w-4 h-4" /> },
      ]
    },
    {
      id: "male-fertility",
      name: "Male Fertility",
      tag: "Fertility Care",
      desc: "Comprehensive evaluation and natural Ayurvedic & Unani therapies to enhance male fertility parameters.",
      color: "emerald",
      themeGradient: "from-emerald-600 to-teal-600",
      bgLight: "bg-emerald-50/70",
      borderColor: "border-emerald-100",
      textColor: "text-emerald-600",
      services: [
        { name: "Low Sperm Count", slug: "low-sperm-count", icon: <FlaskConical className="w-4 h-4" /> },
        { name: "Azoospermia", slug: "azoospermia", icon: <Dna className="w-4 h-4" /> },
        { name: "Varicocele", slug: "varicocele", icon: <Stethoscope className="w-4 h-4" /> },
        { name: "Hydrocele", slug: "hydrocele", icon: <Droplets className="w-4 h-4" /> },
        { name: "Epididymal Cyst", slug: "epididymal-cyst", icon: <Activity className="w-4 h-4" /> },
      ]
    },
    {
      id: "female-fertility",
      name: "Female Fertility",
      tag: "Fertility Care",
      desc: "Holistic, herb-based treatments to regulate menstrual health, manage cysts and support natural conception.",
      color: "rose",
      themeGradient: "from-rose-500 to-pink-600",
      bgLight: "bg-rose-50/70",
      borderColor: "border-rose-100",
      textColor: "text-rose-600",
      services: [
        { name: "PCOS / PCOD", slug: "pcos-pcod", icon: <Activity className="w-4 h-4" /> },
        { name: "Ovarian Cyst", slug: "ovarian-cyst", icon: <Stethoscope className="w-4 h-4" /> },
        { name: "Uterine Cyst", slug: "uterine-cyst", icon: <Activity className="w-4 h-4" /> },
      ]
    },
    {
      id: "male-reproductive",
      name: "Male Reproductive Health",
      tag: "Reproductive Health",
      desc: "Targeted therapies to balance vital male hormones and prepare prospective fathers for healthy conception.",
      color: "cyan",
      themeGradient: "from-cyan-600 to-blue-600",
      bgLight: "bg-cyan-50/70",
      borderColor: "border-cyan-100",
      textColor: "text-cyan-600",
      services: [
        { name: "Male Hormonal Imbalances", slug: "male-hormonal-imbalances", icon: <Scale className="w-4 h-4" /> },
        { name: "Male Preconception Health Care", slug: "male-preconception-health-care", icon: <HeartPulse className="w-4 h-4" /> },
      ]
    },
    {
      id: "female-reproductive",
      name: "Female Reproductive Health",
      tag: "Reproductive Health",
      desc: "Personalized care plans addressing endocrine balance, cycle regularities and optimal preconception wellness.",
      color: "purple",
      themeGradient: "from-purple-600 to-indigo-600",
      bgLight: "bg-purple-50/70",
      borderColor: "border-purple-100",
      textColor: "text-purple-600",
      services: [
        { name: "Female Hormonal Imbalances", slug: "female-hormonal-imbalances", icon: <Scale className="w-4 h-4" /> },
        { name: "Female Preconception Health Care", slug: "female-preconception-health-care", icon: <Flower2 className="w-4 h-4" /> },
      ]
    },
    {
      id: "counselling",
      name: "Pre-Marital & Couple Counselling",
      tag: "Guidance & Counselling",
      desc: "Compassionate, confidential support for couples and individuals preparing for marriage or overcoming relationship hurdles.",
      color: "amber",
      themeGradient: "from-amber-500 to-orange-600",
      bgLight: "bg-amber-50/70",
      borderColor: "border-amber-100",
      textColor: "text-amber-600",
      services: [
        { name: "Male Pre-Marital Fitness", slug: "male-pre-marital-fitness", icon: <Dumbbell className="w-4 h-4" /> },
        { name: "Female Pre-Marital Fitness", slug: "female-pre-marital-fitness", icon: <Flower2 className="w-4 h-4" /> },
        { name: "Couple Counselling", slug: "couple-counselling", icon: <Users className="w-4 h-4" /> },
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState("all");

  const filteredDepts = activeTab === "all" 
    ? departments 
    : departments.filter(d => d.id === activeTab);

  return (
    <section id="treatments" className="py-24 bg-[#fafbfc] relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-900 font-black text-xs sm:text-sm tracking-wide mb-4 border border-emerald-300">
            <Sparkles className="w-4 h-4 text-emerald-700" />
            OUR CLINICAL DEPARTMENTS & SERVICES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] mb-5 tracking-tight">
            Specialized Care for Your Health Concerns
          </h2>
          <p className="text-base sm:text-lg text-slate-800 font-bold sm:font-semibold leading-relaxed">
            Personalized, confidential treatments across our 6 specialized departments — combining 30 years of clinical experience with <span className="text-emerald-900 font-black bg-emerald-100 px-2.5 py-0.5 rounded-lg border border-emerald-300 shadow-xs inline-block">Authentic Ayurvedic & Unani Care</span>.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-black transition-all duration-300 ${
              activeTab === "all"
                ? "bg-[#0f172a] text-white shadow-md scale-105"
                : "bg-white text-slate-800 border-2 border-slate-300 hover:border-brand-primary hover:text-brand-primary"
            }`}
          >
            All Departments (6)
          </button>
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setActiveTab(dept.id)}
              className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeTab === dept.id
                  ? "bg-brand-primary text-white shadow-md scale-105"
                  : "bg-white text-slate-800 border-2 border-slate-200 hover:border-brand-primary hover:text-brand-primary"
              }`}
            >
              {dept.name}
            </button>
          ))}
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredDepts.map((dept, idx) => (
              <motion.div
                key={dept.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white rounded-[28px] p-6 sm:p-8 border-2 border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Department Tag & Number */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full ${dept.bgLight} ${dept.textColor} border ${dept.borderColor}`}>
                      {dept.tag}
                    </span>
                    <span className="text-xs font-black text-slate-400">0{departments.findIndex(d => d.id === dept.id) + 1}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-black text-[#0f172a] mb-2.5 group-hover:text-brand-primary transition-colors">
                    {dept.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-700 font-bold leading-relaxed mb-6">
                    {dept.desc}
                  </p>

                  {/* Services List */}
                  <div className="space-y-2 mb-6">
                    <div className="text-[11px] font-black text-slate-500 uppercase tracking-wider mb-2">Services Covered:</div>
                    {dept.services.map((service, sIdx) => (
                      <Link
                        key={sIdx}
                        href={`/treatments/${service.slug}`}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 transition-all group/item shadow-xs"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-slate-800 group-hover/item:text-emerald-700 shadow-xs shrink-0 font-bold">
                            {service.icon}
                          </div>
                          <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover/item:text-emerald-950 truncate">
                            {service.name}
                          </span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover/item:text-emerald-700 group-hover/item:translate-x-1 transition-transform shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <Link
                    href="#consultation"
                    className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-black ${dept.textColor} hover:underline`}
                  >
                    Book Consultation <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-xs font-bold text-slate-500">
                    {dept.services.length} {dept.services.length === 1 ? 'Service' : 'Services'}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Feature Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 bg-white rounded-[24px] p-6 sm:p-8 shadow-md border border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 border border-blue-200">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-black text-slate-900 text-sm">100% Confidential</h4>
              <p className="text-slate-700 text-xs font-bold">Complete privacy & judgment-free</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200">
              <Stethoscope className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-black text-slate-900 text-sm">30 Years Experience</h4>
              <p className="text-slate-700 text-xs font-bold">Second-generation certified doctors</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 border border-purple-200">
              <Activity className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-black text-slate-900 text-sm">Personalized Care</h4>
              <p className="text-slate-700 text-xs font-bold">Ayurvedic & Unani herb therapies</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-700 flex items-center justify-center shrink-0 border border-orange-200">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-black text-slate-900 text-sm">10,000+ Patients</h4>
              <p className="text-slate-700 text-xs font-bold">Trusted by couples & individuals</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}