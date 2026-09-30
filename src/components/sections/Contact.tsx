"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  MessageSquare, 
  ArrowRight,
  HeartHandshake
} from "@/components/Icons";
import { useState } from "react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("Fertility Consultation");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "Fertility Consultation",
    message: ""
  });

  const topics = [
    { label: "🌱 Fertility Care", value: "Fertility Consultation" },
    { label: "👨 Male Health", value: "Male Fertility & Wellness" },
    { label: "👩 Female / PCOS", value: "Female Care & PCOS" },
    { label: "💍 Pre-Marital", value: "Pre-Marital Fitness Check" },
    { label: "💬 General Query", value: "General Enquiry" },
  ];

  const handleTopicSelect = (val: string) => {
    setSelectedTopic(val);
    setFormData(prev => ({ ...prev, subject: val }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate smooth animated form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", phone: "", subject: "Fertility Consultation", message: "" });
      }, 4000);
    }, 1200);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us Directly",
      details: ["+91 93854 05040", "+91 83005 91849"],
      actionLabel: "Call",
      href: "tel:+919385405040",
      color: "text-blue-600",
      bg: "bg-blue-50/90",
      badgeBg: "bg-blue-100/90 text-blue-700",
      border: "border-blue-100",
      gradient: "from-blue-500/10 to-indigo-500/10",
      delay: 0.1,
    },
    {
      icon: Mail,
      title: "Email Support",
      details: ["kovaihealthcenter@gmail.com"],
      actionLabel: "Email",
      href: "mailto:kovaihealthcenter@gmail.com",
      color: "text-emerald-600",
      bg: "bg-emerald-50/90",
      badgeBg: "bg-emerald-100/90 text-emerald-700",
      border: "border-emerald-100",
      gradient: "from-emerald-500/10 to-teal-500/10",
      delay: 0.2,
    },
    {
      icon: MapPin,
      title: "Clinic Location",
      details: ["No.526, 2nd Floor, Fathima Manzil", "Gandhipuram, Coimbatore - 641018"],
      actionLabel: "Map",
      href: "https://maps.google.com/?q=Kovai+Health+Center+Gandhipuram+Coimbatore",
      color: "text-rose-600",
      bg: "bg-rose-50/90",
      badgeBg: "bg-rose-100/90 text-rose-700",
      border: "border-rose-100",
      gradient: "from-rose-500/10 to-pink-500/10",
      delay: 0.3,
    },
    {
      icon: Clock,
      title: "Consulting Hours",
      details: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sunday: 10:00 AM - 2:00 PM"],
      actionLabel: "Open 7 Days",
      href: "#contact-form",
      color: "text-amber-600",
      bg: "bg-amber-50/90",
      badgeBg: "bg-amber-100/90 text-amber-700",
      border: "border-amber-100",
      gradient: "from-amber-500/10 to-orange-500/10",
      delay: 0.4,
    },
  ];

  return (
    <section id="contact" className="py-10 md:py-14 relative overflow-hidden bg-gradient-to-b from-[#fafbfc] via-white to-[#f4f7fa]">
      {/* Ambient Glows */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-gradient-to-br from-emerald-200/20 to-transparent rounded-full blur-3xl pointer-events-none -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-cyan-200/20 to-transparent rounded-full blur-3xl pointer-events-none translate-y-1/3" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Compact Animated Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 font-semibold text-xs mb-2.5 shadow-sm border border-emerald-200/60"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
            <span>Get in Touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0f172a] mb-2 tracking-tight leading-snug"
          >
            We&apos;re Here to Help You on Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-brand-cyan">
              Journey to Wellness
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-xs sm:text-sm text-slate-600"
          >
            Have questions about fertility treatments or want a confidential doctor consultation? Reach out today.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Side: 4 Compact Contact Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {contactInfo.map((info, idx) => (
                <motion.a
                  key={idx}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: info.delay }}
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className={`bg-white/95 rounded-2xl p-3.5 sm:p-4 shadow-sm border ${info.border} hover:shadow-md transition-all duration-200 group block relative overflow-hidden`}
                >
                  <div className="flex items-center gap-3 relative z-10">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 ${info.bg} ${info.color} border ${info.border}`}>
                      <info.icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-0.5">
                        <h3 className="text-sm font-bold text-[#0f172a] group-hover:text-emerald-700 transition-colors">
                          {info.title}
                        </h3>
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${info.badgeBg} flex items-center gap-0.5`}>
                          {info.actionLabel}
                          <ArrowRight className="w-2.5 h-2.5" />
                        </span>
                      </div>

                      <div className="space-y-0">
                        {info.details.map((detail, dIdx) => (
                          <p key={dIdx} className="text-slate-600 text-xs font-medium truncate">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Compact Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                <HeartHandshake className="w-5 h-5 text-white" />
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-xs">100% Confidential Doctor Care</h4>
                <p className="text-[11px] text-emerald-100 truncate">Private 1-on-1 consultations with Dr. Jaleel.</p>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Compact Interactive Form (7 cols) */}
          <motion.div
            id="contact-form"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 bg-white/95 rounded-3xl p-5 sm:p-7 shadow-lg border border-slate-200/80 relative overflow-hidden"
          >
            <div className="relative z-10 mb-4 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-emerald-600 font-semibold text-[11px] uppercase tracking-wider mb-0.5">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Confidential Enquiry</span>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#0f172a]">
                  Send a Message
                </h3>
              </div>
              <span className="text-[11px] text-slate-400 font-medium hidden sm:inline">⚡ Quick Response</span>
            </div>

            {/* Compact Topic Pills */}
            <div className="relative z-10 mb-4 flex flex-wrap gap-1.5">
              {topics.map((t, tIdx) => {
                const isSelected = selectedTopic === t.value;
                return (
                  <button
                    key={tIdx}
                    type="button"
                    onClick={() => handleTopicSelect(t.value)}
                    className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg transition-all duration-150 border ${
                      isSelected 
                        ? "bg-emerald-600 text-white border-emerald-600 shadow-sm" 
                        : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200"
                    }`}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-3 relative z-10">
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-[11px] font-bold text-slate-700 uppercase tracking-wider ml-1">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium text-slate-800 placeholder-slate-400 text-xs"
                    placeholder="e.g. Anand Kumar"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="phone" className="text-[11px] font-bold text-slate-700 uppercase tracking-wider ml-1">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium text-slate-800 placeholder-slate-400 text-xs"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="subject" className="text-[11px] font-bold text-slate-700 uppercase tracking-wider ml-1">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium text-slate-800 placeholder-slate-400 text-xs"
                  placeholder="Consultation topic..."
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-[11px] font-bold text-slate-700 uppercase tracking-wider ml-1">
                  Message / Query <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium text-slate-800 placeholder-slate-400 resize-none text-xs"
                  placeholder="Briefly tell us about your condition or preferred appointment time..."
                ></textarea>
              </div>

              <AnimatePresence mode="wait">
                <motion.button
                  key={isSubmitted ? "submitted" : isSubmitting ? "submitting" : "idle"}
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  whileHover={!isSubmitted && !isSubmitting ? { scale: 1.01 } : {}}
                  whileTap={!isSubmitted && !isSubmitting ? { scale: 0.99 } : {}}
                  className={`w-full py-3 rounded-xl font-bold text-white shadow-md transition-all flex items-center justify-center gap-2 text-sm cursor-pointer ${
                    isSubmitted 
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 shadow-emerald-500/30 cursor-default" 
                      : isSubmitting
                      ? "bg-slate-700 cursor-wait"
                      : "bg-[#0f172a] hover:bg-emerald-700 transition-colors"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : isSubmitted ? (
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-white animate-bounce" />
                      <span>Message Sent Successfully!</span>
                    </div>
                  ) : (
                    <>
                      <span>Send Confidential Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </motion.button>
              </AnimatePresence>
            </form>
          </motion.div>
        </div>

        {/* Google Maps Location Section */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 sm:mt-12 relative w-full h-[400px] sm:h-[480px] rounded-3xl overflow-hidden border-2 border-slate-200 shadow-xl bg-slate-100"
        >
          {/* Exact Official Google Maps Business Embed with CID */}
          <iframe
            src="https://maps.google.com/maps?cid=10792462736540873178&t=m&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kovai Health Center & Nature Cure Fertility Center Location"
            className="w-full h-full"
          />
        </motion.div>

      </div>
    </section>
  );
}

