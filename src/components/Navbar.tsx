"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf } from "@/components/Icons";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/#about" },
  { name: "Treatments", href: "/#treatments" },
  { 
    name: "Male Fertility", 
    href: "/#treatments",
    dropdown: [
      "Premature Ejaculation", "Erectile Dysfunction", "Low Sperm Count", 
      "Hormonal Imbalances", "Azoospermia", "Anejaculation", 
      "Varicocele", "Hydrocele", "Sexual Wellness", "Pre-Marital Fitness"
    ]
  },
  { 
    name: "Female Fertility", 
    href: "/#treatments",
    dropdown: [
      "PCOS / PCOD", "Ovarian Cyst", "Uterine Cyst", "Hormonal Imbalances", 
      "Low Libido", "Pre-Marital Fitness", "Female Preconception Health Care", 
      "Couple Counselling"
    ]
  },
  { name: "Doctors", href: "/#doctors" },
  { name: "Awards", href: "/#awards" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 sm:px-6 lg:px-8",
          isScrolled ? "py-2" : "py-6"
        )}
      >
        <div className="max-w-7xl mx-auto">
          <nav
            className={cn(
              "flex items-center justify-between rounded-full md:px-6 py-3 transition-all duration-300",
              isScrolled
                ? "md:bg-white/60 md:backdrop-blur-md md:border md:border-white/50 md:shadow-lg md:shadow-blue-900/5"
                : "bg-transparent border border-transparent"
            )}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <Image 
                src="/logo.png" 
                alt="Kovai Health Center Logo" 
                width={150} 
                height={40} 
                className="object-contain h-8 sm:h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-6">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group py-2">
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors relative inline-block"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-full rounded-full" />
                  </Link>
                  
                  {link.dropdown && (
                    <div className="absolute top-[100%] left-0 pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0 z-[60]">
                      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 py-3 flex flex-col max-h-[60vh] overflow-y-auto custom-scrollbar">
                        {link.dropdown.map((item) => (
                          <Link 
                            key={item} 
                            href={item === "Premature Ejaculation" ? "/treatments/premature-ejaculation" : "#treatments"} 
                            className="px-5 py-2.5 text-sm text-slate-600 hover:bg-brand-cyan/10 hover:text-brand-primary transition-colors font-medium border-l-2 border-transparent hover:border-brand-primary"
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <Link
                href="/#consultation"
                className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-brand-dark hover:bg-brand-primary rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/20 transform hover:-translate-y-0.5"
              >
                Book Consultation
              </Link>
            </div>
          </nav>
        </div>
      </header>

    </>
  );
}
