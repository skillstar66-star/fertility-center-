import React from "react";

// Helper for SVG Gradient definitions
export const IconGradients = () => (
  <svg width="0" height="0" className="absolute hidden">
    <defs>
      <linearGradient id="emerald-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
      <linearGradient id="cyan-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#0891b2" />
      </linearGradient>
      <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#2563eb" />
      </linearGradient>
      <linearGradient id="rose-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f43f5e" />
        <stop offset="100%" stopColor="#e11d48" />
      </linearGradient>
    </defs>
  </svg>
);

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  gradient?: "emerald" | "cyan" | "blue" | "rose";
  size?: number | string;
}

const getColors = (gradient?: string, currentColor?: string) => {
  if (gradient) return { stroke: `url(#${gradient}-gradient)`, fill: "none" };
  return { stroke: currentColor || "currentColor", fill: "none" };
};

export const MapPin = ({ gradient, className, size, width, height, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...getColors(gradient)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);

export const Phone = ({ gradient, className, size, width, height, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...getColors(gradient)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

export const Mail = ({ gradient, className, size, width, height, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...getColors(gradient)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

export const Clock = ({ gradient, className, size, width, height, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...getColors(gradient)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
);

export const Send = ({ gradient, className, size, width, height, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...getColors(gradient)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
);

export const CheckCircle2 = ({ gradient, className, size, width, height, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...getColors(gradient)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><circle cx="12" cy="12" r="10"></circle><polyline points="9 12 11 14 15 10"></polyline></svg>
);

export const Sparkles = ({ gradient, className, size, width, height, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...getColors(gradient)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>
);

export const MessageSquare = ({ gradient, className, size, width, height, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...getColors(gradient)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
);

export const User = ({ gradient, className, size, width, height, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...getColors(gradient)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
);

export const ClipboardCheck = ({ gradient, className, size, width, height, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...getColors(gradient)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m9 14 2 2 4-4"></path></svg>
);

export const CalendarCheck = ({ gradient, className, size, width, height, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...getColors(gradient)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line><path d="m9 16 2 2 4-4"></path></svg>
);

export const ShieldCheck = ({ gradient, className, size, width, height, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...getColors(gradient)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
);

export const Lock = ({ gradient, className, size, width, height, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...getColors(gradient)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
);

export const Users = ({ gradient, className, size, width, height, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...getColors(gradient)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
);

export const HeartHandshake = ({ gradient, className, size, width, height, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...getColors(gradient)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"></path></svg>
);

export const ArrowRight = ({ gradient, className, size, width, height, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...getColors(gradient)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
);

export const Star = ({ gradient, className, size, width, height, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...getColors(gradient)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
);

export const MessageSquareQuote = ({ gradient, className, size, width, height, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...getColors(gradient)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><path d="M8 12a2 2 0 0 0 2-2V8H8"></path><path d="M14 12a2 2 0 0 0 2-2V8h-2"></path></svg>
);

export const MessageCircle = ({ gradient, className, size, width, height, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...getColors(gradient)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
);

export const Heart = ({ gradient, className, size, width, height, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...getColors(gradient)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
);

export const Leaf = ({ gradient, className, size, width, height, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...getColors(gradient)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
);

export const Smile = ({ gradient, className, size, width, height, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...getColors(gradient)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
);

export const Activity = ({ gradient, className, size, width, height, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...getColors(gradient)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
);

export const HeartPulse = ({ gradient, className, size, width, height, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...getColors(gradient)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path></svg>
);

export const Scale = ({ gradient, className, size, width, height, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...getColors(gradient)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="M7 21h10"></path><path d="M12 3v18"></path><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path></svg>
);

export const Dna = ({ gradient, className, size, width, height, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...getColors(gradient)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><path d="M2 15c6.667-6 13.333 0 20-6"></path><path d="M9 22c1.798-1.998 2.518-3.995 2.808-5.993"></path><path d="M15 2c-1.798 1.998-2.518 3.995-2.808 5.993"></path><path d="m17 6-2.5-2.5"></path><path d="m14 8-1-1"></path><path d="m7 18 2.5 2.5"></path><path d="m3.5 14.5.5.5"></path><path d="m20 9 .5.5"></path><path d="m6.5 12.5 1 1"></path><path d="m16.5 10.5 1 1"></path><path d="m10 16 1.5 1.5"></path></svg>
);

export const Droplets = ({ gradient, className, size, width, height, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...getColors(gradient)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7 6.3 7 6.3s-2.15 2.76-3.29 3.76S2 11.09 2 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
);

export const FlaskConical = ({ gradient, className, size, width, height, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...getColors(gradient)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><path d="M10 2v7.31"></path><path d="M14 9.3V1.99"></path><path d="M8.5 2h7"></path><path d="M14 9.3a6.5 6.5 0 1 1-4 0"></path><path d="M5.52 16h12.96"></path></svg>
);

export const Stethoscope = ({ gradient, className, size, width, height, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...getColors(gradient)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"></path><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"></path><circle cx="20" cy="10" r="2"></circle></svg>
);

export const Dumbbell = ({ gradient, className, size, width, height, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...getColors(gradient)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><path d="m6.5 6.5 11 11"></path><path d="m21 21-1-1"></path><path d="m3 3 1 1"></path><path d="m18 22 4-4"></path><path d="m2 6 4-4"></path><path d="m3 10 7-7"></path><path d="m14 21 7-7"></path></svg>
);

export const Flower2 = ({ gradient, className, size, width, height, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...getColors(gradient)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><path d="M12 5a3 3 0 1 1-3 3m3-3a3 3 0 1 0 3 3m-3-3v6m-4.5 1.5a3 3 0 1 1 0 4.24m0-4.24a3 3 0 1 0-4.24 0m4.24 0 4.24 4.24m4.24-4.24a3 3 0 1 1 4.24 0m-4.24 0a3 3 0 1 0 0 4.24m0-4.24-4.24 4.24m0 0a3 3 0 1 1-3 3m3-3a3 3 0 1 0 3 3m-3-3v-6"></path></svg>
);

export const Circle = ({ gradient, className, size, width, height, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...getColors(gradient)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><circle cx="12" cy="12" r="10"></circle></svg>
);

export const Dot = ({ gradient, className, size, width, height, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...getColors(gradient)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><circle cx="12.1" cy="12.1" r="1"></circle></svg>
);

export const Calendar = ({ gradient, className, size, width, height, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...getColors(gradient)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
);

export const MessageSquarePlus = ({ gradient, className, size, width, height, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...getColors(gradient)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><path d="M12 7v6"></path><path d="M9 10h6"></path></svg>
);

export const ClipboardList = ({ gradient, className, size, width, height, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...getColors(gradient)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path><path d="M8 16h.01"></path></svg>
);

export const Headphones = ({ gradient, className, size, width, height, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...getColors(gradient)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
);

export const Shield = ({ gradient, className, size, width, height, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...getColors(gradient)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
);

export const Award = ({ gradient, className, size, width, height, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...getColors(gradient)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
);

export const Plus = ({ gradient, className, size, width, height, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...getColors(gradient)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
);

export const Baby = ({ gradient, className, size, width, height, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...getColors(gradient)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
);

export const Menu = ({ gradient, className, size, width, height, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...getColors(gradient)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
);

export const X = ({ gradient, className, size, width, height, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...getColors(gradient)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);

export const ArrowLeft = ({ gradient, className, size, width, height, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...getColors(gradient)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
);

export const ChevronRight = ({ gradient, className, size, width, height, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...getColors(gradient)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><polyline points="9 18 15 12 9 6"></polyline></svg>
);

export const UserCheck = ({ gradient, className, size, width, height, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...getColors(gradient)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg>
);

export const Brain = ({ gradient, className, size, width, height, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...getColors(gradient)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path></svg>
);
