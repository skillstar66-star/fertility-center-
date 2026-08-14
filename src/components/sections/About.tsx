"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "@/components/Icons";
import Image from "next/image";

export function About() {
  const features = [
    {
      title: "Patient First Approach",
      desc: "We prioritize your health and comfort at every step.",
      color: "blue",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M19 8v6m3-3h-6" />
        </svg>
      )
    },
    {
      title: "Expert Medical Team",
      desc: "Our experienced doctors and specialists provide the highest standard of care.",
      color: "green",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12h6m-3-3v6" />
        </svg>
      )
    },
    {
      title: "Advanced Technology",
      desc: "State-of-the-art facilities for accurate diagnosis and effective treatment.",
      color: "blue",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <path d="M8 21h8m-4-4v4" />
        </svg>
      )
    },
    {
      title: "Holistic & Natural Care",
      desc: "We believe in healing naturally and enhancing your quality of life.",
      color: "green",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col max-w-2xl"
          >
            <div className="text-[#16a34a] font-bold tracking-widest text-sm mb-4 uppercase">
              ABOUT US
            </div>

            <h2 className="text-4xl sm:text-[2.75rem] font-bold leading-[1.1] mb-6">
              <span className="text-[#0f172a]">Compassionate Care.</span><br />
              <span className="text-[#16a34a]">Better Health. Brighter Lives.</span>
            </h2>
            
            <p className="text-slate-600 mb-10 leading-relaxed font-medium text-lg">
              At Kovai Health Center, we are committed to providing comprehensive and personalized healthcare solutions with a focus on preventive care, advanced treatment, and patient well-being.
            </p>

            <div className="flex flex-col gap-6 mb-12">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-5">
                  <div className={`w-14 h-14 shrink-0 rounded-full flex items-center justify-center border-[3px] 
                    ${feature.color === 'blue' ? 'bg-[#f0f9ff] border-[#e0f2fe] text-[#0284c7]' : 'bg-[#f0fdf4] border-[#dcfce7] text-[#16a34a]'}`}>
                    {feature.icon}
                  </div>
                  <div className="pt-1">
                    <h3 className="font-bold text-[#0f172a] text-lg mb-1 leading-none">{feature.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Our Mission Box */}
            <div className="p-5 bg-white rounded-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-100 flex items-start gap-4 max-w-lg relative z-20">
              <div className="text-[#0284c7] shrink-0 pt-1">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  <path d="M12 8v4l3 3" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-[#0284c7] text-[15px] mb-1">Our Mission</h3>
                <p className="text-slate-600 text-[13px] leading-relaxed font-medium">
                  To deliver ethical, affordable and quality healthcare that improves lives and builds healthier communities.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-full flex justify-center lg:justify-end items-center"
          >
            <div className="relative w-full max-w-[700px] h-auto lg:-mr-12">
              <Image 
                src="/about-image-1.png" 
                alt="About Kovai Health Center" 
                width={800} 
                height={800} 
                className="w-full h-auto object-contain rounded-[32px]"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
