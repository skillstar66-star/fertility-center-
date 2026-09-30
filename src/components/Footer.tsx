import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "@/components/Icons";

export function Footer() {
  return (
    <footer className="bg-brand-navy text-slate-300 pt-16 sm:pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: 3 columns on mobile, 12 columns on desktop */}
        <div className="grid grid-cols-3 lg:grid-cols-12 gap-x-2.5 sm:gap-x-6 gap-y-8 lg:gap-8 mb-12 sm:mb-16">
          
          {/* Brand Column - Full width across 3 cols on mobile, 4 cols on desktop */}
          <div className="col-span-3 lg:col-span-4 pb-2 lg:pb-0 border-b border-white/10 lg:border-none">
            <Link href="/" className="inline-block mb-4 group">
              <div className="bg-white/95 rounded-2xl px-3.5 py-2 inline-flex items-center shadow-md border border-white/20 group-hover:bg-white group-hover:scale-105 transition-all duration-300">
                <Image 
                  src="/logo.png?v=2" 
                  alt="Kovai Health Center Logo" 
                  width={180} 
                  height={50} 
                  className="h-8 sm:h-10 w-auto object-contain"
                  unoptimized
                />
              </div>
            </Link>
            <p className="text-slate-400 mb-5 max-w-sm text-xs sm:text-base leading-relaxed">
              &ldquo;Personalized care. Trusted experience. Better wellbeing.&rdquo;
            </p>
            <div className="flex gap-2.5 mb-2">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/kovai_health_center?stkn=MTlpZGwyb2lleng4aA==" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white hover:border-transparent hover:scale-105 transition-all duration-300 shadow-sm"
              >
                <span className="sr-only">Instagram</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>

              {/* YouTube */}
              <a 
                href="https://youtube.com/@kovaihealthcenter?si=YAC3WrhN_6Yl9nfG" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="YouTube"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[#FF0000] hover:text-white hover:border-transparent hover:scale-105 transition-all duration-300 shadow-sm"
              >
                <span className="sr-only">YouTube</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 12 5 12 5s6.255 0 7.812.418zM9.75 15.02l5.75-3.02-5.75-3.02v6.04z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 1 on Mobile: Clinic (1 col mobile / 2 cols desktop) */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-white font-bold text-xs sm:text-base mb-2.5 sm:mb-5 tracking-wide">
              Clinic
            </h3>
            <ul className="space-y-1.5 sm:space-y-3">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Doctors', href: '/#doctors' },
                { name: 'Awards', href: '/awards' },
                { name: 'Reviews', href: '/#testimonials' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-slate-400 hover:text-brand-cyan transition-colors text-[11px] sm:text-sm block">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 on Mobile: Treatments (1 col mobile / 2 cols desktop) */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-white font-bold text-xs sm:text-base mb-2.5 sm:mb-5 tracking-wide">
              Treatments
            </h3>
            <ul className="space-y-1.5 sm:space-y-3">
              {[
                { name: 'Male Care', href: '/treatments/low-sperm-count' },
                { name: 'Female Care', href: '/treatments/pcos-pcod' },
                { name: 'Sexology', href: '/treatments/premature-ejaculation' },
                { name: 'Pre-Marital', href: '/treatments/male-pre-marital-fitness' },
                { name: 'Counseling', href: '/treatments/couple-counselling' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-slate-400 hover:text-brand-cyan transition-colors text-[11px] sm:text-sm block">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 on Mobile: Contact with Full Mail ID (1 col mobile / 4 cols desktop) */}
          <div className="col-span-1 lg:col-span-4">
            <h3 className="text-white font-bold text-xs sm:text-base mb-2.5 sm:mb-5 tracking-wide flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Contact
            </h3>

            <div className="space-y-2.5 sm:space-y-4">
              {/* Address */}
              <a 
                href="https://maps.google.com/?cid=10792462736540873178"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-1.5 sm:gap-3 group hover:opacity-90 transition-opacity"
              >
                <div className="w-6 h-6 sm:w-9 sm:h-9 rounded-md sm:rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5 group-hover:bg-emerald-500/20 transition-colors">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                <div className="text-[10px] sm:text-sm text-slate-300 leading-tight">
                  <p className="font-bold text-white text-[11px] sm:text-sm group-hover:text-emerald-400 transition-colors">Gandhipuram</p>
                  <p className="text-slate-400 text-[9.5px] sm:text-xs">CBE - 641018</p>
                </div>
              </a>

              {/* Phone Numbers */}
              <div className="flex items-start gap-1.5 sm:gap-3 group">
                <div className="w-6 h-6 sm:w-9 sm:h-9 rounded-md sm:rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                <div className="text-[10px] sm:text-sm flex flex-col space-y-0.5 leading-tight">
                  <a 
                    href="tel:+919385405040" 
                    className="font-bold text-white hover:text-emerald-400 transition-colors text-[10px] sm:text-sm"
                  >
                    93854 05040
                  </a>
                  <a 
                    href="tel:+918300591849" 
                    className="font-bold text-slate-300 hover:text-emerald-400 transition-colors text-[10px] sm:text-sm"
                  >
                    83005 91849
                  </a>
                </div>
              </div>

              {/* Email Address - Full Mail ID clearly displayed */}
              <div className="flex items-start gap-1.5 sm:gap-3 group">
                <div className="w-6 h-6 sm:w-9 sm:h-9 rounded-md sm:rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                <div className="text-[10px] sm:text-sm leading-tight min-w-0">
                  <a 
                    href="mailto:kovaihealthcenter@gmail.com" 
                    className="font-bold text-white hover:text-emerald-400 transition-colors break-all text-[9px] sm:text-sm block"
                    title="kovaihealthcenter@gmail.com"
                  >
                    kovaihealthcenter<wbr />@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs sm:text-sm text-slate-400 md:pr-28 pb-8 sm:pb-0">
          <p className="font-medium text-slate-400">
            © {new Date().getFullYear()} <span className="text-slate-200 font-semibold">Kovai Health Center</span>. All Rights Reserved.
          </p>

          <a 
            href="https://www.skillstardigitalsolutions.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 hover:bg-slate-900 text-xs text-slate-300 border border-white/15 hover:border-cyan-400/60 shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 group transform hover:-translate-y-0.5"
            title="Skillstar Digital Solutions - Web Development & Digital Solutions"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-slate-400 font-medium text-[11px] sm:text-xs">Created by</span>
            <span className="font-extrabold bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent tracking-wide text-[11px] sm:text-xs group-hover:brightness-125 transition-all">
              Skillstar Digital Solutions
            </span>
            <svg 
              className="w-3.5 h-3.5 text-cyan-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

