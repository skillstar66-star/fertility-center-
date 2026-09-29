"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Lock, CheckCircle2, Send, Sparkles } from "@/components/Icons";

export function ConsultationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    concern: "Male Infertility & Low Sperm Count",
    message: ""
  });

  useEffect(() => {
    // Check if user has already dismissed modal in this session
    const hasDismissed = sessionStorage.getItem("khc_consultation_popup_dismissed");
    if (hasDismissed) return;

    // Trigger popup exactly 15 seconds after entering website
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("khc_consultation_popup_dismissed", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.phone.trim()) {
      return;
    }

    // Format WhatsApp Message
    const whatsappMessage = `*🏥 CONFIDENTIAL CONSULTATION REQUEST - KOVAI HEALTH CENTER*\n\n` +
      `👤 *Full Name:* ${formData.fullName.trim()}\n` +
      `📞 *Phone Number:* ${formData.phone.trim()}\n` +
      (formData.email.trim() ? `✉️ *Email Address:* ${formData.email.trim()}\n` : "") +
      `🩺 *Concern / Topic:* ${formData.concern}\n` +
      (formData.message.trim() ? `💬 *Message:* ${formData.message.trim()}\n\n` : "\n") +
      `_Sent via kovaihealthcenter.com confidential booking form_`;

    const whatsappUrl = `https://wa.me/919385405040?text=${encodeURIComponent(whatsappMessage)}`;

    setIsSubmitted(true);

    // Open WhatsApp in new tab
    setTimeout(() => {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      setTimeout(() => {
        setIsSubmitted(false);
        handleClose();
      }, 2500);
    }, 600);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-white rounded-[28px] shadow-[0_25px_70px_rgba(0,0,0,0.25)] border border-slate-100 overflow-hidden z-10 my-8"
          >
            {/* Top Accent Gradient Bar */}
            <div className="h-2 w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-all duration-200 hover:rotate-90 z-20"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-6 sm:p-8">
              {/* Header */}
              <div className="mb-6 pr-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-bold uppercase tracking-wider mb-2.5 border border-emerald-200/80">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>100% Private & Confidential</span>
                </div>

                <h3 className="text-2xl sm:text-[26px] font-extrabold text-[#0f172a] tracking-tight leading-snug">
                  Confidential Consultation <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                    Fertility & Sexual Health
                  </span>
                </h3>
                <p className="text-slate-600 text-sm mt-1.5 leading-relaxed">
                  Your privacy is 100% protected. Speak with Dr. Jaleel & our certified experts today.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3.5">
                {/* Full Name */}
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <input
                    type="email"
                    placeholder="Email Address (Optional)"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium"
                  />
                </div>

                {/* Concern Select Dropdown */}
                <div>
                  <select
                    value={formData.concern}
                    onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium appearance-none cursor-pointer"
                  >
                    <option value="Male Infertility & Low Sperm Count">Male Infertility & Low Sperm Count</option>
                    <option value="Premature Ejaculation & ED">Premature Ejaculation & Erectile Dysfunction</option>
                    <option value="PCOS / PCOD & Female Infertility">PCOS / PCOD & Female Infertility</option>
                    <option value="Ovarian Cyst & Uterine Care">Ovarian Cyst & Uterine Care</option>
                    <option value="Pre-Marital Fitness Checkup">Pre-Marital Fitness Checkup (Male/Female)</option>
                    <option value="Low Libido & Intimate Wellness">Low Libido & Intimate Wellness</option>
                    <option value="Couple Counseling">Couple Counseling</option>
                    <option value="General Health Consultation">General Reproductive Consultation</option>
                  </select>
                </div>

                {/* Message / Query */}
                <div>
                  <textarea
                    rows={2}
                    placeholder="Message / Your Query (Optional)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className={`w-full py-3.5 rounded-xl font-bold text-white shadow-lg transition-all flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer ${
                    isSubmitted
                      ? "bg-emerald-600 shadow-emerald-600/30 cursor-default"
                      : "bg-gradient-to-r from-[#0f172a] via-slate-900 to-slate-800 hover:from-emerald-600 hover:to-teal-600 shadow-slate-900/20 hover:shadow-emerald-600/30 hover:-translate-y-0.5 active:translate-y-0"
                  }`}
                >
                  {isSubmitted ? (
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-white animate-bounce" />
                      Opening WhatsApp...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5 fill-[#25D366]" viewBox="0 0 24 24">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.7c.96.523 1.834.782 2.79.782 3.182 0 5.768-2.587 5.768-5.766 0-3.18-2.586-5.767-5.767-5.767zm7.553 5.766c0 4.156-3.385 7.541-7.553 7.541-1.306 0-2.531-.34-3.606-.934l-4.425 1.16 1.181-4.318c-.696-1.127-1.071-2.433-1.071-3.791 0-4.156 3.385-7.541 7.553-7.541 4.156 0 7.553 3.385 7.553 7.541z"/>
                      </svg>
                      Book Confidential Consultation
                    </span>
                  )}
                </button>

                {/* Footer Note */}
                <div className="flex items-center justify-center gap-1.5 pt-1 text-[12px] text-slate-500 font-medium text-center">
                  <Lock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Your information will be kept strictly confidential.</span>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
