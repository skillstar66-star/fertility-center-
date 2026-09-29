"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, MessageSquare, ShieldCheck, ArrowRight } from "@/components/Icons";
import Image from "next/image";
import { cn } from "@/lib/utils";

const slugMap: Record<string, string> = {
  "Premature Ejaculation": "premature-ejaculation",
  "Erectile Dysfunction": "erectile-dysfunction",
  "Low Sperm Count": "low-sperm-count",
  "Male Hormonal Imbalances": "male-hormonal-imbalances",
  "Hormonal Imbalances": "male-hormonal-imbalances",
  "Azoospermia": "azoospermia",
  "Anejaculation": "anejaculation",
  "Varicocele": "varicocele",
  "Hydrocele": "hydrocele",
  "Epididymal Cyst": "epididymal-cyst",
  "Sexual Wellness": "sexual-wellness",
  "PCOS / PCOD": "pcos-pcod",
  "Ovarian Cyst": "ovarian-cyst",
  "Uterine Cyst": "uterine-cyst",
  "Female Hormonal Imbalances": "female-hormonal-imbalances",
  "Low Libido": "low-libido-female",
  "Low Libido in Men": "low-libido-male",
  "Male Low Libido": "low-libido-male",
  "Male Pre-Marital Fitness": "male-pre-marital-fitness",
  "Female Pre-Marital Fitness": "female-pre-marital-fitness",
  "Pre-Marital Fitness": "male-pre-marital-fitness",
  "Female Preconception Health Care": "female-preconception-health-care",
  "Male Preconception Health Care": "male-preconception-health-care",
  "Couple Counselling": "couple-counselling",
};

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Treatments", href: "/#treatments" },
  { 
    name: "Male Fertility", 
    href: "/#treatments",
    dropdown: [
      "Premature Ejaculation", "Erectile Dysfunction", "Low Sperm Count", 
      "Male Hormonal Imbalances", "Azoospermia", "Anejaculation", 
      "Varicocele", "Hydrocele", "Epididymal Cyst", "Low Libido in Men", 
      "Male Preconception Health Care", "Male Pre-Marital Fitness", 
      "Couple Counselling", "Sexual Wellness"
    ]
  },
  { 
    name: "Female Fertility", 
    href: "/#treatments",
    dropdown: [
      "PCOS / PCOD", "Ovarian Cyst", "Uterine Cyst", "Female Hormonal Imbalances", 
      "Low Libido", "Female Pre-Marital Fitness", "Female Preconception Health Care", 
      "Couple Counselling"
    ]
  },
  { name: "Doctors", href: "/#doctors" },
  { name: "Awards", href: "/awards" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSubmenu = (name: string) => {
    setExpandedMenu(expandedMenu === name ? null : name);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-3 sm:px-6 lg:px-8",
          isScrolled ? "py-2" : "py-4 sm:py-6"
        )}
      >
        <div className="max-w-7xl mx-auto">
          <nav
            className={cn(
              "flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl md:rounded-full transition-all duration-300",
              isScrolled || isOpen
                ? "bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg shadow-blue-950/5"
                : "bg-white/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none border border-slate-200/50 md:border-transparent"
            )}
          >
            {/* Logo */}
            <Link 
              href="/" 
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 group transition-all duration-300"
            >
              <Image 
                src="/logo.png?v=2" 
                alt="Kovai Health Center Logo" 
                width={180} 
                height={50} 
                className="object-contain h-8 sm:h-11 w-auto"
                unoptimized
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-6">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group py-2">
                  <Link
                    href={link.href}
                    className="text-sm font-bold text-slate-800 hover:text-brand-primary transition-colors relative inline-block"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-full rounded-full" />
                  </Link>
                  
                  {link.dropdown && (
                    <div className="absolute top-[100%] left-0 pt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0 z-[60]">
                      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 py-3 flex flex-col max-h-[60vh] overflow-y-auto custom-scrollbar">
                        {link.dropdown.map((item) => {
                          const targetSlug = slugMap[item] || item.toLowerCase().replace(/ \/ /g, '-').replace(/ /g, '-');
                          return (
                            <Link 
                              key={item} 
                              href={`/treatments/${targetSlug}`}
                              className="px-5 py-2.5 text-sm text-slate-700 hover:bg-emerald-50 hover:text-brand-primary transition-colors font-bold border-l-2 border-transparent hover:border-brand-primary"
                            >
                              {item}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Actions: Desktop CTA + Mobile Toggle Button */}
            <div className="flex items-center gap-2.5 sm:gap-4">
              <Link
                href="/#consultation"
                className="hidden md:inline-flex items-center justify-center px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-black text-white bg-brand-dark hover:bg-brand-primary rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/20 transform hover:-translate-y-0.5 shadow-sm"
              >
                Book Consultation
              </Link>

              {/* Mobile Hamburger / Toggle Button */}
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isOpen}
                className="xl:hidden w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200/80 flex items-center justify-center transition-all duration-200 active:scale-95 shadow-xs"
              >
                {isOpen ? (
                  <X className="w-5 h-5 text-slate-900" />
                ) : (
                  <Menu className="w-5 h-5 text-slate-900" />
                )}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="xl:hidden max-w-7xl mx-auto mt-2 px-1"
            >
              <div className="bg-white/98 backdrop-blur-xl rounded-[28px] border-2 border-slate-200/90 shadow-2xl p-5 max-h-[82vh] overflow-y-auto custom-scrollbar">
                
                {/* Navigation Links */}
                <div className="flex flex-col divide-y divide-slate-100">
                  {navLinks.map((link) => {
                    const hasSubmenu = Boolean(link.dropdown && link.dropdown.length > 0);
                    const isExpanded = expandedMenu === link.name;

                    if (hasSubmenu) {
                      return (
                        <div key={link.name} className="py-2.5">
                          <button
                            type="button"
                            onClick={() => toggleSubmenu(link.name)}
                            className="w-full flex items-center justify-between py-1.5 text-base font-black text-slate-900 hover:text-brand-primary transition-colors text-left"
                          >
                            <span>{link.name}</span>
                            <div className={`w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center transition-transform duration-200 ${isExpanded ? 'rotate-180 bg-emerald-50 text-emerald-700' : 'text-slate-600'}`}>
                              <ChevronDown className="w-4 h-4" />
                            </div>
                          </button>

                          {/* Submenu Dropdown Items */}
                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden pl-2 pr-1 pt-2 space-y-1"
                              >
                                {link.dropdown?.map((item) => {
                                  const targetSlug = slugMap[item] || item.toLowerCase().replace(/ \/ /g, '-').replace(/ /g, '-');
                                  return (
                                    <Link
                                      key={item}
                                      href={`/treatments/${targetSlug}`}
                                      onClick={() => setIsOpen(false)}
                                      className="flex items-center justify-between p-2 rounded-xl text-xs sm:text-sm font-bold text-slate-700 hover:bg-emerald-50 hover:text-emerald-900 border border-transparent hover:border-emerald-200 transition-all"
                                    >
                                      <span>{item}</span>
                                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                                    </Link>
                                  );
                                })}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="py-3 text-base font-black text-slate-900 hover:text-brand-primary transition-colors flex items-center justify-between"
                      >
                        <span>{link.name}</span>
                        <ArrowRight className="w-4 h-4 text-slate-400" />
                      </Link>
                    );
                  })}
                </div>

                {/* Mobile Quick Action Buttons */}
                <div className="mt-5 pt-4 border-t-2 border-slate-100 flex flex-col gap-2.5">
                  <Link
                    href="/#consultation"
                    onClick={() => setIsOpen(false)}
                    className="w-full py-3.5 px-4 rounded-2xl bg-brand-primary hover:bg-emerald-700 text-white font-black text-center text-sm shadow-md flex items-center justify-center gap-2 transition-colors"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    Book Free Consultation
                  </Link>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href="tel:+919385405040"
                      className="py-2.5 px-3 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      Call Us
                    </a>
                    <a
                      href="https://wa.me/919385405040"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      WhatsApp
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
