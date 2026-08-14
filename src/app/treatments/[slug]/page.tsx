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
  Leaf
} from "@/components/Icons";
import { treatmentsData } from '@/data/treatments';

export default async function TreatmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  // Fetch treatment data or use generic fallback
  const treatment = treatmentsData[slug] || treatmentsData['generic'];

  // Use a generic treatment name if falling back to generic, or keep the original logic
  const displayTitle = treatmentsData[slug] ? treatment.title : slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return (
    <main className="min-h-screen bg-[#fafbfc] pt-[104px]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-white to-green-50/50 pt-8 pb-10 lg:pt-10 lg:pb-12 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Left Content */}
            <div className="lg:col-span-7 xl:col-span-6 relative z-20">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-sm font-bold mb-8 shadow-sm">
                <Leaf className="w-4 h-4" />
                {treatment.category}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#0f172a] mb-4 leading-[1.1]">
                {displayTitle} <br />
                <span className="text-emerald-600">
                  {treatment.subtitle}
                </span>
              </h1>

              <p className="text-lg text-slate-600 mb-12 leading-relaxed max-w-xl">
                {treatment.description}
              </p>

              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 sm:gap-8 pb-4 mt-6">
                {treatment.highlights.map((feature, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center text-emerald-600 mb-2 sm:mb-3 border-2 border-emerald-100/50 shadow-sm">
                      <feature.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold text-[#0f172a] leading-tight whitespace-pre-line">{feature.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Floating Image */}
            <div className="lg:col-span-5 xl:col-span-6 relative h-[250px] sm:h-[400px] lg:h-[600px] w-full mt-4 lg:mt-0 px-2 sm:px-0">
              <div className="w-full h-full lg:absolute lg:inset-0 lg:-right-24 xl:-right-32 lg:bottom-0 z-10 [mask-image:linear-gradient(to_bottom,black_95%,transparent_100%)] lg:[mask-image:linear-gradient(to_left,black_70%,transparent_100%)] flex justify-center lg:justify-end">
                <Image
                  src={treatment.imageSrc}
                  alt={displayTitle}
                  width={800}
                  height={900}
                  priority
                  className="w-full lg:w-[120%] h-full object-contain lg:object-cover object-center drop-shadow-2xl rounded-2xl lg:rounded-none lg:rounded-l-[8rem]"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What is it & Types */}
      <section className="py-20 lg:py-28 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* What is it? (Left Side) */}
          <div className="lg:col-span-4 flex flex-col pt-4">
            <h2 className="text-3xl lg:text-[32px] font-extrabold text-[#0f172a] mb-4">{treatment.whatIsIt.title}</h2>
            <div className="w-12 h-1 bg-emerald-400 rounded-full mb-8"></div>

            <p className="text-slate-600 mb-8 leading-relaxed font-medium">
              {treatment.whatIsIt.description}
            </p>

            <div className="bg-emerald-50/50 p-4 rounded-xl flex items-center gap-4">
              <div className="shrink-0">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
              </div>
              <p className="text-slate-600 text-sm font-medium">
                {treatment.whatIsIt.statText} <strong className="text-[#0f172a]">{treatment.whatIsIt.statHighlight}</strong>
              </p>
            </div>
          </div>

          {/* Types (Right Side) */}
          <div className="lg:col-span-8 flex flex-col h-full">
            <div className="bg-white rounded-[2rem] p-6 sm:p-10 shadow-[0_4px_40px_rgba(0,0,0,0.04)] border border-slate-50">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] mb-8 sm:mb-10 text-center">{treatment.typesTitle || 'Categories'}</h2>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10">
                {treatment.types.map((type, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center group">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-50/80 rounded-full flex items-center justify-center text-emerald-600 mb-4 sm:mb-5 relative group-hover:scale-110 transition-transform duration-300">
                      <div className="absolute inset-2 border border-emerald-200 rounded-full"></div>
                      <type.icon className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
                    </div>
                    <h3 className="font-bold text-[#0f172a] text-[12px] sm:text-sm mb-2 sm:mb-3 leading-tight">{type.title}</h3>
                    <p className="text-slate-500 leading-relaxed text-[11px] sm:text-[13px]">{type.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Symptoms & Causes */}
      <section className="py-20 lg:py-28 container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        <div className="bg-white rounded-[2rem] shadow-[0_4px_40px_rgba(0,0,0,0.03)] border border-slate-50 overflow-hidden">
          <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">

            {/* Symptoms */}
            <div className="p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-[28px] font-extrabold text-[#0f172a] mb-4">Symptoms</h2>
              <div className="w-10 h-1 bg-emerald-400 rounded-full mb-8 sm:mb-10"></div>

              <div className="flex flex-col xl:flex-row gap-8 items-center xl:items-start">
                <ul className="space-y-4 sm:space-y-6 flex-1 w-full">
                  {treatment.symptoms.map((symptom, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="text-slate-600 font-medium text-[15px]">{symptom}</span>
                    </li>
                  ))}
                </ul>

                {/* Symptoms Illustration */}
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 xl:w-80 xl:h-80 shrink-0 mt-6 sm:mt-8 xl:mt-0 mx-auto xl:mx-0 lg:-mr-4">
                  <Image
                    src={treatment.symptomsImage}
                    alt="Symptoms"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Causes */}
            <div className="p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-[28px] font-extrabold text-[#0f172a] mb-4">Causes</h2>
              <div className="w-10 h-1 bg-emerald-400 rounded-full mb-8 sm:mb-10"></div>

              <div className="space-y-10">
                {treatment.causes.psychological && (
                  <div className="flex gap-5 items-start">
                    <div className="w-14 h-14 bg-emerald-50/80 rounded-full flex items-center justify-center text-emerald-600 shrink-0 border border-emerald-100/50 shadow-sm">
                      <Brain className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-emerald-600 text-[17px] mb-3">Psychological Causes</h4>
                      <p className="text-slate-600 font-medium text-[14px] leading-relaxed flex flex-wrap items-center gap-x-2 gap-y-1">
                        {treatment.causes.psychological.map((item, i) => (
                          <React.Fragment key={i}>
                            <span>• {item}</span>
                          </React.Fragment>
                        ))}
                      </p>
                    </div>
                  </div>
                )}

                {(treatment.causes.physical || treatment.causes.general) && (
                  <div className="flex gap-5 items-start">
                    <div className="w-14 h-14 bg-emerald-50/80 rounded-full flex items-center justify-center text-emerald-600 shrink-0 border border-emerald-100/50 shadow-sm">
                      <ShieldCheck className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-emerald-600 text-[17px] mb-3">
                        {treatment.causes.physical ? 'Physical Causes' : 'General Causes'}
                      </h4>
                      <p className="text-slate-600 font-medium text-[14px] leading-relaxed flex flex-wrap items-center gap-x-2 gap-y-1">
                        {(treatment.causes.physical || treatment.causes.general || []).map((item, i) => (
                          <React.Fragment key={i}>
                            <span>• {item}</span>
                          </React.Fragment>
                        ))}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 relative">
        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-8">
            <HeartPulse className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0f172a] mb-6">
            Take the First Step Towards <br />
            <span className="text-emerald-600">Better Health</span>
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Book a confidential consultation with our specialists today and discover the right treatment plan for you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-emerald-600 text-white rounded-full font-bold text-lg hover:bg-emerald-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Book Consultation <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              href="tel:+919385405040"
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Activity className="w-5 h-5 text-emerald-600" />
              Call Support
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
