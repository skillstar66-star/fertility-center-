import Link from "next/link";
import { Leaf, Phone, Mail, MapPin } from "@/components/Icons";

export function Footer() {
  return (
    <footer className="bg-brand-navy text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-y-10 gap-x-6 lg:gap-8 mb-16">
          {/* Brand - 4 cols */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="bg-brand-primary/20 p-2 rounded-xl text-brand-cyan border border-brand-primary/30">
                <Leaf className="w-6 h-6" />
              </div>
              <span className="font-extrabold text-2xl text-white tracking-tight">
                Kovai Health Center
              </span>
            </Link>
            <p className="text-slate-400 mb-6 max-w-sm text-base leading-relaxed">
              &ldquo;Personalized care. Trusted experience. Better wellbeing.&rdquo;
            </p>
            <div className="flex gap-3">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/kovai_health_center?stkn=MTlpZGwyb2lleng4aA==" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white hover:border-transparent hover:scale-105 transition-all duration-300 shadow-sm"
              >
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>

              {/* YouTube */}
              <a 
                href="https://youtube.com/@kovaihealthcenter?si=YAC3WrhN_6Yl9nfG" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="YouTube"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[#FF0000] hover:text-white hover:border-transparent hover:scale-105 transition-all duration-300 shadow-sm"
              >
                <span className="sr-only">YouTube</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 12 5 12 5s6.255 0 7.812.418zM9.75 15.02l5.75-3.02-5.75-3.02v6.04z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links - 2 cols */}
          <div className="sm:col-span-1 lg:col-span-2">
            <h3 className="text-white font-bold text-base mb-5 tracking-wide">Clinic</h3>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Doctors', href: '/#doctors' },
                { name: 'Awards', href: '/awards' },
                { name: 'Gallery', href: '/awards' },
                { name: 'Testimonials', href: '/#testimonials' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-slate-400 hover:text-brand-cyan transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments - 2 cols */}
          <div className="sm:col-span-1 lg:col-span-2">
            <h3 className="text-white font-bold text-base mb-5 tracking-wide">Treatments</h3>
            <ul className="space-y-3">
              {['Male Fertility', 'Female Fertility', 'Sexual Wellness', 'Preconception', 'Counselling'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-slate-400 hover:text-brand-cyan transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details - 4 cols with clean aligned design */}
          <div className="sm:col-span-2 lg:col-span-4">
            <h3 className="text-white font-bold text-base mb-5 tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Contact Info
            </h3>

            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3.5 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 shrink-0 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-sm text-slate-300 leading-relaxed">
                  <p className="font-semibold text-white">No.526, 2nd Floor, Fathima Manzil,</p>
                  <p className="text-slate-400">Opp. Arasu Medicals, Nehru Street,</p>
                  <p className="text-slate-400">Gandhipuram, Coimbatore - 641018.</p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-3.5 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 shrink-0 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-sm flex flex-col space-y-1">
                  <a 
                    href="tel:+919385405040" 
                    className="font-semibold text-white hover:text-brand-cyan transition-colors inline-flex items-center gap-1.5"
                  >
                    +91 93854 05040
                  </a>
                  <a 
                    href="tel:+918300591849" 
                    className="font-semibold text-slate-300 hover:text-brand-cyan transition-colors inline-flex items-center gap-1.5"
                  >
                    +91 83005 91849
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3.5 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 shrink-0 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-sm">
                  <a 
                    href="mailto:kovaihealthcenter@gmail.com" 
                    className="text-slate-300 hover:text-white transition-colors break-all"
                  >
                    kovaihealthcenter@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Kovai Health Center. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="#privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
