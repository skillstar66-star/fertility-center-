"use client";

import { motion } from "framer-motion";
import { Sparkles, MessageSquare, User, ClipboardCheck, CalendarCheck, ShieldCheck, Lock, Users, HeartHandshake, ArrowRight } from "@/components/Icons";

export function Process() {
  const steps = [
    {
      num: "01",
      title: "Share Your Concern",
      desc: "Reach out to us completely confidentially.",
      color: "blue",
      icon: <MessageSquare className="w-8 h-8" />
    },
    {
      num: "02",
      title: "Consult Our Doctor",
      desc: "Private session with experienced specialists.",
      color: "teal",
      icon: <User className="w-8 h-8" />
    },
    {
      num: "03",
      title: "Understand Options",
      desc: "We explain your condition and possible treatments.",
      color: "purple",
      icon: <ClipboardCheck className="w-8 h-8" />
    },
    {
      num: "04",
      title: "Follow Care Plan",
      desc: "A personalized & convenient treatment plan.",
      color: "pink",
      icon: <CalendarCheck className="w-8 h-8" />
    }
  ];

  const getColorClass = (color: string, type: 'bg' | 'text' | 'border' | 'lightBg' | 'gradient') => {
    switch (color) {
      case 'blue':
        if (type === 'bg') return 'bg-blue-600';
        if (type === 'text') return 'text-blue-600';
        if (type === 'border') return 'border-blue-600';
        if (type === 'lightBg') return 'bg-blue-50';
        if (type === 'gradient') return 'from-blue-100 to-blue-50/20';
        break;
      case 'teal':
        if (type === 'bg') return 'bg-teal-500';
        if (type === 'text') return 'text-teal-500';
        if (type === 'border') return 'border-teal-500';
        if (type === 'lightBg') return 'bg-teal-50';
        if (type === 'gradient') return 'from-teal-100 to-teal-50/20';
        break;
      case 'purple':
        if (type === 'bg') return 'bg-purple-600';
        if (type === 'text') return 'text-purple-600';
        if (type === 'border') return 'border-purple-600';
        if (type === 'lightBg') return 'bg-purple-50';
        if (type === 'gradient') return 'from-purple-100 to-purple-50/20';
        break;
      case 'pink':
        if (type === 'bg') return 'bg-pink-500';
        if (type === 'text') return 'text-pink-500';
        if (type === 'border') return 'border-pink-500';
        if (type === 'lightBg') return 'bg-pink-50';
        if (type === 'gradient') return 'from-pink-100 to-pink-50/20';
        break;
    }
    return '';
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#fafbfc]">
      {/* Background abstract lines */}
      <div className="absolute top-0 right-0 opacity-20 pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
          <path d="M400 0C300 0 200 50 150 150C100 250 50 350 0 400" stroke="#bfdbfe" strokeWidth="2" strokeDasharray="10 10"/>
          <path d="M400 50C300 50 200 100 150 200C100 300 50 400 0 450" stroke="#bfdbfe" strokeWidth="2" strokeDasharray="10 10"/>
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-bold text-sm tracking-wide mb-6">
            <Sparkles className="w-4 h-4" />
            OUR PROCESS
          </div>
          <h2 className="text-4xl sm:text-[3.25rem] font-bold text-[#0f172a] mb-6 leading-tight">
            Simple<span className="text-blue-500">.</span> Private<span className="text-blue-500">.</span> Personalized<span className="text-blue-500">.</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            Your journey to better health in <span className="text-blue-500">four simple steps.</span>
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative mb-16">
          {/* Dotted connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] border-t-2 border-dashed border-slate-200 -z-10 -translate-y-1/2" />
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Connecting Arrow (Desktop) */}
                {idx < 3 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-8 w-6 h-6 bg-white rounded-full items-center justify-center text-blue-400 z-10 -translate-y-1/2 shadow-sm border border-slate-100">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                )}
                
                {/* Number Badge */}
                <div className={`absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 w-6 h-6 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-base shadow-lg z-20 ${getColorClass(step.color, 'bg')}`}>
                  {step.num}
                </div>

                <div className="bg-white rounded-[24px] sm:rounded-[32px] p-3 sm:p-8 pt-8 sm:pt-12 text-center h-full shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                  
                  {/* Icon Circle */}
                  <div className={`w-14 h-14 sm:w-24 sm:h-24 mx-auto rounded-full bg-gradient-to-br flex items-center justify-center mb-3 sm:mb-6 relative ${getColorClass(step.color, 'gradient')} ${getColorClass(step.color, 'text')}`}>
                    {/* Small decorative dots around icon */}
                    <div className={`absolute top-2 right-4 w-1 h-1 rounded-full ${getColorClass(step.color, 'bg')}`} />
                    <div className={`absolute bottom-4 left-2 w-1.5 h-1.5 rounded-full ${getColorClass(step.color, 'bg')}`} />
                    <div className={`absolute top-1/2 -right-1 w-2 h-2 rounded-full ${getColorClass(step.color, 'bg')} opacity-50`} />
                    
                    <div className="scale-75 sm:scale-100">
                      {step.icon}
                    </div>
                  </div>

                  <h3 className="font-bold text-[#0f172a] text-[13px] sm:text-lg mb-1 sm:mb-3 leading-tight">{step.title}</h3>
                  <p className="text-slate-500 text-[10px] sm:text-sm leading-snug sm:leading-relaxed mb-4 sm:mb-6">
                    {step.desc}
                  </p>

                  {/* Bottom Colored Bar */}
                  <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1.5 rounded-t-full ${getColorClass(step.color, 'bg')}`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Feature Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-[24px] sm:rounded-[32px] p-4 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 grid grid-cols-2 gap-y-6 gap-x-2 lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-6"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-4 w-full lg:w-auto">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-blue-600 mb-1 text-[13px] sm:text-base leading-tight break-words">100% Confidential</h4>
              <p className="text-slate-500 text-[11px] sm:text-sm leading-tight">Your privacy is our top priority.</p>
            </div>
          </div>
          
          <div className="hidden lg:block w-px h-12 bg-slate-100" />
          
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-4 w-full lg:w-auto">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
              <Lock className="w-5 h-5 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-teal-600 mb-1 text-[13px] sm:text-base leading-tight break-words">Trusted Specialists</h4>
              <p className="text-slate-500 text-[11px] sm:text-sm leading-tight">Experienced & certified doctors.</p>
            </div>
          </div>
          
          <div className="hidden lg:block w-px h-12 bg-slate-100" />

          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-4 w-full lg:w-auto">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-purple-600 mb-1 text-[13px] sm:text-base leading-tight break-words">Personalized Care</h4>
              <p className="text-slate-500 text-[11px] sm:text-sm leading-tight">Tailored treatments just for you.</p>
            </div>
          </div>

          <div className="hidden lg:block w-px h-12 bg-slate-100" />

          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-4 w-full lg:w-auto">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center shrink-0">
              <HeartHandshake className="w-5 h-5 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-pink-600 mb-1 text-[13px] sm:text-base leading-tight break-words">Here for You</h4>
              <p className="text-slate-500 text-[11px] sm:text-sm leading-tight">Support at every step.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
