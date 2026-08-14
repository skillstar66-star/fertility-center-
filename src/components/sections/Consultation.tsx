"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Users, HeartHandshake, MessageSquarePlus, ClipboardList, User, MessageSquare, Clock, Headphones, Shield } from "@/components/Icons";

export function Consultation() {
  return (
    <section id="consultation" className="py-24 relative overflow-hidden bg-[#f4f7fc]">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-10 left-10 w-32 h-32" style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="absolute bottom-10 right-10 w-48 h-48" style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      </div>
      
      {/* Abstract Shield Outline Background */}
      <div className="absolute top-24 -right-24 sm:top-1/2 sm:left-1/2 sm:-translate-x-24 sm:-translate-y-1/2 opacity-[0.03] sm:opacity-10 pointer-events-none z-0">
        <svg width="400" height="500" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 8v4" />
          <path d="M12 16h.01" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm text-blue-600 font-bold text-xs tracking-wide uppercase mb-8 self-start border border-blue-100">
              <ShieldCheck className="w-4 h-4" />
              Your Privacy, Our Priority
            </div>

            <h2 className="text-5xl sm:text-[4rem] font-bold text-[#0f172a] leading-[1.1] mb-6 tracking-tight">
              Your Privacy <br/>
              <span className="text-blue-600">Matters.</span>
            </h2>
            
            <div className="w-16 h-1.5 bg-blue-500 rounded-full mb-8" />
            
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium max-w-lg">
              Discuss sensitive health concerns in a private, respectful, and confidential environment. Our experts are here to listen and help.
            </p>
            
            <div className="bg-blue-50/50 border border-blue-100/50 rounded-2xl p-4 sm:p-6 mb-8 sm:mb-12 flex items-center gap-4 sm:gap-5 shadow-sm max-w-xl group cursor-pointer">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-100/80 flex items-center justify-center shrink-0 border-2 sm:border-4 border-white shadow-sm">
                <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-[#0f172a] font-bold text-base sm:text-lg mb-0.5 sm:mb-1.5">Safe & Secure</h3>
                <p className="text-slate-500 text-[11px] sm:text-sm leading-snug sm:leading-relaxed">
                  Your information is protected with top-level security and complete confidentiality.
                </p>
              </div>
              <div className="text-slate-400 group-hover:text-blue-500 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="m9 18 6-6-6-6"/></svg>
              </div>
            </div>

            {/* Features Row */}
            <div className="hidden sm:grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-slate-200/60">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-blue-500 bg-white shadow-sm border border-slate-100 mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-800 text-xs mb-1">100% Confidential</h4>
                <p className="text-slate-500 text-[11px] leading-tight">Your privacy is always protected</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-emerald-500 bg-white shadow-sm border border-slate-100 mb-3">
                  <Lock className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-800 text-xs mb-1">Secure Platform</h4>
                <p className="text-slate-500 text-[11px] leading-tight">Industry-standard data protection</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-purple-500 bg-white shadow-sm border border-slate-100 mb-3">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-800 text-xs mb-1">Expert Support</h4>
                <p className="text-slate-500 text-[11px] leading-tight">Compassionate health experts</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-rose-500 bg-white shadow-sm border border-slate-100 mb-3">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-800 text-xs mb-1">Respect & Care</h4>
                <p className="text-slate-500 text-[11px] leading-tight">We listen. We understand. We care.</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column (Form) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-[32px] p-8 sm:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 relative"
          >
            <div className="flex items-center gap-5 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-md shadow-blue-500/20">
                <MessageSquarePlus className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] mb-1">Request Confidential Consultation</h3>
                <p className="text-slate-500 text-sm">Fill in your details and we'll get back to you.</p>
              </div>
            </div>

            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-6">
                
                <div className="flex gap-3 sm:gap-4">
                  <div className="w-10 sm:w-12 flex items-center justify-center pt-7 shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-[#f4f7fc] flex items-center justify-center text-blue-500">
                      <User className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 flex-1">
                    <label className="text-sm font-bold text-[#0f172a]">Name</label>
                    <input type="text" className="px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-white text-sm" placeholder="Your full name" />
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <div className="w-10 sm:w-12 flex items-center justify-center pt-7 shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-[#f4f7fc] flex items-center justify-center text-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 flex-1">
                    <label className="text-sm font-bold text-[#0f172a]">Phone Number</label>
                    <input type="tel" className="px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-white text-sm" placeholder="+91 12345 67890" />
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <div className="w-10 sm:w-12 flex items-center justify-center pt-7 shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-[#f4f7fc] flex items-center justify-center text-blue-500">
                      <User className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 flex-1">
                    <label className="text-sm font-bold text-[#0f172a]">Select Concern</label>
                    <select className="px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-white text-slate-500 text-sm appearance-none cursor-pointer">
                      <option value="">Select an option</option>
                      <option value="Men's Wellness">Men's Wellness</option>
                      <option value="Women's Wellness">Women's Wellness</option>
                      <option value="General Consultation">General Consultation</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4 mb-2">
                  <div className="w-10 sm:w-12 flex items-start pt-7 shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-[#f4f7fc] flex items-center justify-center text-blue-500">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 flex-1">
                    <label className="text-sm font-bold text-[#0f172a]">Message (Optional)</label>
                    <textarea rows={3} className="px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-white text-sm resize-none" placeholder="How can we help you?" />
                  </div>
                </div>

              </div>

              {/* Info Box */}
              <div className="hidden sm:grid bg-[#f8fafd] rounded-2xl p-5 border border-blue-100/50 grid-cols-1 sm:grid-cols-3 gap-4 mb-2">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-blue-600 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-blue-800">Private & Confidential</h4>
                    <p className="text-[10px] text-slate-500 leading-tight">Your information is never shared</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-600 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-blue-800">Quick Response</h4>
                    <p className="text-[10px] text-slate-500 leading-tight">We'll get back to you shortly</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Headphones className="w-5 h-5 text-blue-600 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-blue-800">Expert Guidance</h4>
                    <p className="text-[10px] text-slate-500 leading-tight">Personalized care for your concerns</p>
                  </div>
                </div>
              </div>

              <button type="button" className="w-full py-4 bg-[#3b82f6] hover:bg-blue-700 text-white rounded-xl font-bold transition-colors shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 text-[15px]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                Submit Request
              </button>
              
              <div className="flex sm:hidden items-center justify-between border border-slate-100 rounded-xl p-4 bg-white shadow-sm mt-2">
                <div>
                  <h4 className="font-bold text-[#0f172a] text-sm">Need help?</h4>
                  <p className="text-emerald-600 font-semibold text-sm">Chat with us 👋</p>
                </div>
                <a href="https://wa.me/919385405040" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 bg-emerald-100 text-emerald-700 px-3 py-2 rounded-lg font-bold text-sm hover:bg-emerald-200 transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  Chat Now
                </a>
              </div>

              <div className="hidden sm:flex items-center justify-center gap-1.5 text-xs text-slate-500 font-medium">
                <Lock className="w-3 h-3" />
                Your information is secure and encrypted
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
