"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { HeartPulse, Leaf, Plus, Baby, Heart } from "@/components/Icons";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scrolling while preloader is active
    document.body.style.overflow = "hidden";

    // Total animation timeline before exiting is roughly 4.3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
      
      // Unlock scrolling after the exit animation finishes (0.6s)
      setTimeout(() => {
        document.body.style.overflow = "";
      }, 600);
    }, 4300);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-b from-white to-emerald-50 overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            transition: { duration: 0.6, ease: "easeInOut" } 
          }}
        >
          {/* Subtle animated organic background wave/blobs */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute -bottom-1/4 -left-1/4 w-[150%] h-[50%] bg-emerald-100/30 rounded-[100%] blur-[80px]" 
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute -top-1/4 -right-1/4 w-[150%] h-[50%] bg-brand-cyan/10 rounded-[100%] blur-[100px]" 
          />

          {/* Floating Particles Background (CSS-based) */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: -20, x: Math.sin(i) * 20 }}
                transition={{ 
                  opacity: { delay: 1.3 + (i * 0.2), duration: 1 },
                  y: { delay: 1.3, duration: 3 + i, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
                  x: { delay: 1.3, duration: 4 + i, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }
                }}
                className={`absolute rounded-full bg-emerald-400 blur-[1px]`}
                style={{
                  width: `${Math.abs(Math.sin(i * 123)) * 4 + 2}px`,
                  height: `${Math.abs(Math.cos(i * 321)) * 4 + 2}px`,
                  left: `${20 + (i * 12)}%`,
                  top: `${40 + (i * 8)}%`,
                }}
              />
            ))}
          </div>

          <div className="flex flex-col items-center justify-center w-full max-w-sm relative z-10 px-6 mt-12 sm:mt-8">
            
            {/* Logo Container */}
            <div className="relative w-full aspect-[3/1] max-w-[200px] sm:max-w-[240px] flex items-center justify-center mb-10">
              
              {/* Expanding Circular Ring / Aura */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: [0, 0.4, 0.1], scale: [0.5, 1.4, 1.3] }}
                transition={{ delay: 0.6, duration: 3, ease: "easeOut" }}
                className="absolute w-[280px] h-[280px] rounded-full border border-emerald-300 shadow-[0_0_40px_rgba(16,185,129,0.1)]"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: [0, 0.2, 0], scale: [0.5, 1.6, 1.8] }}
                transition={{ delay: 0.8, duration: 3.5, ease: "easeOut" }}
                className="absolute w-[280px] h-[280px] rounded-full border border-brand-cyan/30"
              />

              {/* Four Floating Healthcare Icons */}
              {/* 1. HeartPulse (Top Right) */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
                transition={{ delay: 0.9, duration: 0.5, y: { delay: 1.4, duration: 3, repeat: Infinity, ease: "easeInOut" } }}
                className="absolute -top-12 -right-8 sm:-right-12 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-[#16a34a] z-20"
              >
                <HeartPulse size={18} strokeWidth={2.5} />
              </motion.div>

              {/* 2. Leaf (Bottom Right) */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, y: [0, 5, 0] }}
                transition={{ delay: 1.0, duration: 0.5, y: { delay: 1.5, duration: 3, repeat: Infinity, ease: "easeInOut" } }}
                className="absolute -bottom-10 -right-6 sm:-right-8 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-[#16a34a] z-20"
              >
                <Leaf size={16} strokeWidth={2.5} />
              </motion.div>

              {/* 3. Medical Plus (Top Left) */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, y: [0, -4, 0] }}
                transition={{ delay: 1.1, duration: 0.5, y: { delay: 1.6, duration: 3, repeat: Infinity, ease: "easeInOut" } }}
                className="absolute -top-8 -left-8 sm:-left-12 w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center text-[#0284c7] z-20"
              >
                <Plus size={18} strokeWidth={3} />
              </motion.div>

              {/* 4. Family/Baby (Bottom Left) */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, y: [0, 6, 0] }}
                transition={{ delay: 1.2, duration: 0.5, y: { delay: 1.7, duration: 3, repeat: Infinity, ease: "easeInOut" } }}
                className="absolute -bottom-12 -left-4 sm:-left-6 w-11 h-11 bg-white rounded-full shadow-md flex items-center justify-center text-[#0284c7] z-20"
              >
                <Baby size={20} strokeWidth={2.5} />
              </motion.div>

              {/* Main Logo Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.75, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ scale: 1.05, transition: { duration: 0.5 } }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-30 w-full h-full"
              >
                <Image
                  src="/logo.png"
                  alt="Kovai Health Center Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </div>

            {/* Minimal Mother & Baby Line Art SVG */}
            <div className="relative mb-4 flex justify-center items-center h-20 w-20 mt-4">
              <svg width="70" height="70" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Mother's Head */}
                <motion.circle 
                  cx="40" cy="25" r="9" 
                  stroke="#16a34a" 
                  strokeWidth="3.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 1.6, duration: 1, ease: "easeInOut" }}
                />
                {/* Baby's Head */}
                <motion.circle 
                  cx="58" cy="42" r="5" 
                  stroke="#16a34a" 
                  strokeWidth="3.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 1.7, duration: 1, ease: "easeInOut" }}
                />
                {/* Mother's Body Sweeping Curve */}
                <motion.path 
                  d="M 40 40 C 15 50, 15 90, 50 90 C 80 90, 85 75, 75 60 C 70 52, 62 55, 58 55" 
                  stroke="#16a34a" 
                  strokeWidth="3.5" 
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 1.9, duration: 1.5, ease: "easeInOut" }}
                />
                {/* Baby's Body */}
                <motion.path 
                  d="M 58 52 C 55 60, 48 65, 42 68" 
                  stroke="#16a34a" 
                  strokeWidth="3.5" 
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 2.1, duration: 0.8, ease: "easeInOut" }}
                />
              </svg>
              
              {/* Popping Pink Heart */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.2, type: "spring", stiffness: 300, damping: 15 }}
                className="absolute top-1 right-1 text-pink-400"
              >
                <Heart size={14} fill="currentColor" />
              </motion.div>
            </div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4, duration: 0.8, ease: "easeOut" }}
              className="text-center"
            >
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-800">
                Better Health. <span className="text-[#16a34a]">Brighter Lives.</span>
              </h2>
            </motion.div>



          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
// cache clear
