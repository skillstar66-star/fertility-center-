import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  UserCheck,
  Brain,
  CheckCircle2,
  Activity,
  HeartPulse,
  Stethoscope,
  HeartHandshake,
  MessageCircle,
  ChevronRight,
  Leaf,
  Phone,
  Clock,
  Sparkles,
  HelpCircle
} from "@/components/Icons";
import { treatmentsData } from '@/data/treatments';

export default async function TreatmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  // Fetch treatment data or use generic fallback
  const treatment = treatmentsData[slug] || treatmentsData['generic'];

  const displayTitle = treatmentsData[slug] 
    ? treatment.title 
    : slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return (
    <main className="min-h-screen bg-[#fafbfc] pt-[90px] lg:pt-[104px]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-white to-emerald-50/40 pt-8 pb-10 lg:pt-12 lg:pb-16 overflow-hidden border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-6">
            <Link href="/" className="hover:text-brand-primary">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/#treatments" className="hover:text-brand-primary">Treatments</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-800 font-semibold truncate">{displayTitle}</span>
          </div>

          {/* Fluid Modern Hero Showcase (Non-grid organic layout) */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 relative z-10">

            {/* Left Content */}
            <div className="flex-1 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs sm:text-sm font-extrabold mb-5 shadow-2xs border border-emerald-200/80">
                <Leaf className="w-4 h-4 text-emerald-600" />
                <span>{treatment.category}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-black text-[#0f172a] mb-4 leading-[1.15] tracking-tight">
                {displayTitle} <br />
                <span className="text-brand-primary text-2xl sm:text-3xl md:text-4xl font-extrabold">
                  {treatment.subtitle}
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 mb-6 leading-relaxed font-normal">
                {treatment.description}
              </p>

              {/* Highlights - Fluid Pill Badges (Non-Grid) */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-8">
                {treatment.highlights.map((feature, idx) => (
                  <div 
                    key={idx} 
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/95 border border-slate-200/90 shadow-2xs text-xs font-bold text-slate-800 hover:border-emerald-300 transition-colors"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <feature.icon className="w-3 h-3" />
                    </div>
                    <span>{feature.title.replace('\n', ' ')}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3.5">
                <Link
                  href="#consultation"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#0f172a] hover:bg-brand-primary text-white rounded-full font-extrabold text-sm transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
                >
                  <span>Book a Confidential Consultation</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+919385405040"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-slate-700 border border-slate-200 hover:border-brand-primary hover:text-brand-primary rounded-full font-bold text-sm transition-all duration-300 shadow-2xs"
                >
                  <Phone className="w-4 h-4 text-brand-primary" />
                  <span>Call Us Today</span>
                </a>
              </div>
            </div>

            {/* Right Content - Seamless Medical Illustration */}
            <div className="w-full lg:w-[440px] xl:w-[480px] h-[280px] sm:h-[360px] lg:h-[440px] relative shrink-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src={treatment.imageSrc}
                  alt={displayTitle}
                  fill
                  priority
                  className="object-contain object-center drop-shadow-2xl hover:scale-103 transition-transform duration-500"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What is it & Types */}
      <section className="py-16 lg:py-24 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* What is it? (Left Side) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="inline-flex items-center gap-2 text-brand-primary font-bold text-xs uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Medical Overview
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mb-3">{treatment.whatIsIt.title}</h2>
            <div className="w-12 h-1 bg-brand-primary rounded-full mb-6"></div>

            <p className="text-slate-600 mb-6 leading-relaxed font-normal text-base sm:text-lg">
              {treatment.whatIsIt.description}
            </p>

            {treatment.whatIsIt.extraParagraphs && treatment.whatIsIt.extraParagraphs.map((para, pIdx) => (
              <p key={pIdx} className="text-slate-600 mb-4 leading-relaxed font-normal text-sm sm:text-base">
                {para}
              </p>
            ))}

            <div className="bg-emerald-50/80 p-4 sm:p-5 rounded-2xl border border-emerald-100 flex items-center gap-4 mt-2">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <p className="text-slate-700 text-xs sm:text-sm font-semibold leading-snug">
                {treatment.whatIsIt.statText} <strong className="text-[#0f172a] block text-sm sm:text-base">{treatment.whatIsIt.statHighlight}</strong>
              </p>
            </div>
          </div>

          {/* Types (Right Side) */}
          <div className="lg:col-span-7 flex flex-col h-full">
            {treatment.types && treatment.types.length > 0 && (
              <div className="bg-white rounded-[28px] p-6 sm:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-slate-100">
                <h3 className="text-lg sm:text-xl font-bold text-[#0f172a] mb-6 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-brand-primary" />
                  {treatment.typesTitle || 'Categories & Types'}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {treatment.types.map((type, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-emerald-200 transition-all">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-white text-emerald-600 flex items-center justify-center shadow-xs">
                          <type.icon className="w-4 h-4" />
                        </div>
                        <h4 className="font-bold text-[#0f172a] text-sm leading-tight">{type.title}</h4>
                      </div>
                      <p className="text-slate-500 leading-relaxed text-xs sm:text-sm">{type.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Symptoms & Causes */}
      <section className="py-12 lg:py-16 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="bg-white rounded-[28px] shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-slate-100 overflow-hidden">
          <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">

            {/* Symptoms */}
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="inline-flex items-center gap-2 text-rose-600 font-bold text-xs uppercase tracking-wider mb-2">
                <Activity className="w-3.5 h-3.5" />
                Signs to Look For
              </div>
              <h3 className="text-2xl font-extrabold text-[#0f172a] mb-3">Symptoms</h3>
              <div className="w-10 h-1 bg-rose-400 rounded-full mb-6"></div>

              <ul className="space-y-3.5">
                {treatment.symptoms.map((symptom, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-2.5 rounded-xl bg-rose-50/40 border border-rose-100/50">
                    <div className="w-5 h-5 bg-rose-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-rose-600" />
                    </div>
                    <span className="text-slate-700 font-medium text-xs sm:text-sm">{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Causes */}
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="inline-flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-wider mb-2">
                <Brain className="w-3.5 h-3.5" />
                Contributing Factors
              </div>
              <h3 className="text-2xl font-extrabold text-[#0f172a] mb-3">Causes</h3>
              <div className="w-10 h-1 bg-emerald-400 rounded-full mb-6"></div>

              <div className="space-y-6">
                {treatment.causes.psychological && (
                  <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100">
                    <h4 className="font-bold text-blue-700 text-sm mb-2 flex items-center gap-2">
                      <Brain className="w-4 h-4" />
                      Psychological Factors
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {treatment.causes.psychological.join(' • ')}
                    </p>
                  </div>
                )}

                {treatment.causes.physical && (
                  <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100">
                    <h4 className="font-bold text-emerald-700 text-sm mb-2 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4" />
                      Physical & Medical Factors
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {treatment.causes.physical.join(' • ')}
                    </p>
                  </div>
                )}

                {treatment.causes.lifestyle && (
                  <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-100">
                    <h4 className="font-bold text-amber-700 text-sm mb-2 flex items-center gap-2">
                      <Activity className="w-4 h-4" />
                      Lifestyle Factors
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {treatment.causes.lifestyle.join(' • ')}
                    </p>
                  </div>
                )}

                {treatment.causes.general && (
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <h4 className="font-bold text-slate-700 text-sm mb-2">General & Contributing Factors</h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {treatment.causes.general.join(' • ')}
                    </p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Evaluation & Treatment Management */}
      {(treatment.evaluation || treatment.treatmentOptions) && (
        <section className="py-12 lg:py-16 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {treatment.evaluation && (
              <div className="bg-white rounded-[28px] p-6 sm:p-8 border border-slate-100 shadow-sm">
                <div className="inline-flex items-center gap-2 text-brand-primary font-bold text-xs uppercase tracking-wider mb-2">
                  <Stethoscope className="w-3.5 h-3.5" />
                  Clinical Evaluation
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] mb-3">{treatment.evaluation.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{treatment.evaluation.desc}</p>
                {treatment.evaluation.points && (
                  <ul className="space-y-2">
                    {treatment.evaluation.points.map((pt, pIdx) => (
                      <li key={pIdx} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {treatment.treatmentOptions && (
              <div className="bg-white rounded-[28px] p-6 sm:p-8 border border-slate-100 shadow-sm">
                <div className="inline-flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-wider mb-2">
                  <Leaf className="w-3.5 h-3.5" />
                  Care Protocol
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] mb-3">{treatment.treatmentOptions.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{treatment.treatmentOptions.desc}</p>
                {treatment.treatmentOptions.items && (
                  <div className="space-y-3">
                    {treatment.treatmentOptions.items.map((item, iIdx) => (
                      <div key={iIdx} className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-100">
                        <h5 className="font-bold text-slate-800 text-xs sm:text-sm">{item.title}</h5>
                        <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Frequently Asked Questions */}
      {treatment.faqs && treatment.faqs.length > 0 && (
        <section className="py-12 lg:py-20 bg-white border-y border-slate-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 font-bold text-xs uppercase tracking-wider mb-3">
                <HelpCircle className="w-3.5 h-3.5" />
                Frequently Asked Questions
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0f172a]">
                Common Questions & Medical Clarity
              </h3>
            </div>

            <div className="space-y-4">
              {treatment.faqs.map((faq, fIdx) => (
                <div key={fIdx} className="p-5 sm:p-6 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-emerald-200 transition-all">
                  <h4 className="text-sm sm:text-base font-bold text-[#0f172a] mb-2 flex items-start gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 text-xs flex items-center justify-center shrink-0 mt-0.5">Q</span>
                    {faq.question}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Coimbatore Care & Booking Section */}
      <section id="consultation" className="py-16 lg:py-24 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-[32px] p-8 sm:p-12 lg:p-16 text-white text-center relative overflow-hidden shadow-2xl">
          {/* Background shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 text-emerald-400 mb-6 border border-white/10">
              <HeartPulse className="w-7 h-7" />
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4 leading-tight">
              {treatment.clinicCare?.title || `${displayTitle} Care in Coimbatore`}
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              {treatment.clinicCare?.desc || 'At Kovai Health Center, patients can discuss their health and fertility concerns in a professional, respectful, and 100% confidential environment.'}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+919385405040"
                className="w-full sm:w-auto px-8 py-4 bg-brand-primary text-white rounded-full font-bold text-sm sm:text-base hover:bg-emerald-500 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4" />
                Call +91 93854 05040
              </a>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white border border-white/20 rounded-full font-bold text-sm sm:text-base hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Visit Clinic in Gandhipuram <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <p className="text-xs text-slate-400 mt-6">
              No.526, 2nd Floor, Fathima Manzil, Opp. Arasu Medicals, Nehru Street, Gandhipuram, Coimbatore - 641018.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
