"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { doctorsData } from "@/data/doctors";
import {
  Users,
  ShieldCheck,
  Star,
  Briefcase,
  ChevronRight,
  ArrowRight,
  Sparkles
} from "@/components/Icons";

export default function DoctorsListPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] pt-[90px] lg:pt-[104px] pb-24 text-slate-800">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-brand-primary">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-800 font-semibold">Our Doctors</span>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 font-extrabold text-xs uppercase tracking-wider mb-4 border border-blue-200">
            <Users className="w-4 h-4 text-blue-600" />
            OUR EXPERT MEDICAL TEAM
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#0f172a] mb-4">
            Meet Our Senior <span className="text-blue-600">Healthcare Specialists</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Certified practitioners combining 30 years of traditional Ayurvedic & Unani wisdom with patient-centered compassionate care.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctorsData.map((doc, idx) => (
            <motion.div
              key={doc.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-[32px] p-6 border border-slate-200/80 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-10 rounded-xl bg-blue-50 text-blue-600 font-extrabold text-lg flex items-center justify-center">
                    {doc.initials}
                  </div>
                  <div className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified
                  </div>
                </div>

                {/* Profile Photo */}
                <div className="flex justify-center mb-6">
                  <div className="relative w-36 h-36 rounded-full p-1.5 bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-md">
                    <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-white">
                      <Image
                        src={doc.img}
                        alt={doc.name}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="text-center mb-6 space-y-1.5">
                  <h3 className="text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                    {doc.name}
                  </h3>
                  <p className="text-sm font-bold text-blue-600">{doc.qualification}</p>
                  <p className="text-xs text-slate-500 font-medium">{doc.designation}</p>

                  <div className="flex items-center justify-center gap-3 pt-3 text-xs">
                    <span className="flex items-center gap-1 font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200/60">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      {doc.rating}
                    </span>
                    <span className="font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200">
                      {doc.experience}
                    </span>
                  </div>
                </div>
              </div>

              {/* View Profile Button */}
              <Link
                href={`/doctors/${doc.slug}`}
                className="w-full py-3.5 rounded-2xl bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white font-extrabold text-sm transition-all flex items-center justify-center gap-2 group/btn"
              >
                <span>View Full Profile</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}
