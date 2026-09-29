"use client";

import { motion } from "framer-motion";
import { Star, MessageSquareQuote, CheckCircle2, ShieldCheck, HeartHandshake, MessageCircle, Smile, Sparkles, User } from "@/components/Icons";

interface ReviewItem {
  name: string;
  location?: string;
  text: string;
  rating: number;
  tag: string;
  color: string;
}

const patientReviewsRow1: ReviewItem[] = [
  {
    name: "Guna",
    location: "Coimbatore",
    text: "My name is Guna. I saw the doctor in Kovai Health Center. That time I had no child and sperm count was only 5 million. After treatment I got excellent result, at present I have two children! So many thanks to God and the doctor.",
    rating: 5,
    tag: "Fertility Success",
    color: "blue"
  },
  {
    name: "Amar",
    location: "Tirupur",
    text: "Great doctor, wonderful and warm experience from start to finish. Appreciate Dr. Jalal taking time to go over the diagnosis clearly. Finally my wife got conceived! Thanks a ton doctor.",
    rating: 5,
    tag: "Conception Result",
    color: "pink"
  },
  {
    name: "Ajmal",
    location: "Coimbatore",
    text: "You are the miracle person in our life! Thank you so much for your support. We are blessed with a baby girl yesterday. I am happy to give you full 5-star rating. No words to say thank you sir.",
    rating: 5,
    tag: "Blessed with Baby",
    color: "emerald"
  },
  {
    name: "Hari Prasadh",
    location: "Erode",
    text: "I had problems for more than 10 years. But we are very happy to see the miracle positive result. 5 star rating for Jalal sir. Thank you so much, we will never forget this support in our lifetime.",
    rating: 5,
    tag: "10 Years Problem Solved",
    color: "purple"
  },
  {
    name: "Sakthivel G.",
    location: "Pollachi",
    text: "Very useful medicine, now I am completely cured with no side effects. Doctor Jalal is a great, affectionate and principled man. Perfectly cured and healthy life. Thank you very much Doctor.",
    rating: 5,
    tag: "Holistic Care",
    color: "amber"
  },
  {
    name: "Vivek Kumar",
    location: "Coimbatore",
    text: "Very satisfied. Dr. Jalal sir said we will see the results in 4 months, and exactly as per his words, my wife got conceived! You are unforgettable in our lifetime.",
    rating: 5,
    tag: "Conception Success",
    color: "teal"
  },
  {
    name: "Prabagaran",
    location: "Salem",
    text: "I got positive result in 3 months! So satisfied with KHC. Dr. Jalal sir gave me excellent treatment and made the wonder (conceived) happen. God bless him for his service.",
    rating: 5,
    tag: "Conceived in 3 Months",
    color: "cyan"
  },
  {
    name: "Muthusami",
    location: "Coimbatore",
    text: "I know sir for the past 20 years. Any problem I will visit here only and get results as well as confidence and peace of mind. Thank you very much doctor.",
    rating: 5,
    tag: "20 Years Patient",
    color: "blue"
  },
  {
    name: "Sounder Raj",
    location: "Tirupur",
    text: "I am Sounder Raj from Tirupur. Very good result, so I am very happy. It is truly value for my money and my future.",
    rating: 5,
    tag: "Patient Experience",
    color: "emerald"
  },
  {
    name: "Kishore Kumar",
    location: "Coimbatore",
    text: "I met Dr. Jalal sir 8 months ago. He is a trustworthy person, very good doctor and a good advisor. Highly satisfied with best results. 5 stars well deserved.",
    rating: 5,
    tag: "5 Star Care",
    color: "indigo"
  },
  {
    name: "Suresh",
    location: "Coimbatore",
    text: "Excellent results after taking medication within 10 days! Doctor is available on phone 24/7 to clear any doubts anytime. I feel very confident. Thank you doctor.",
    rating: 5,
    tag: "10 Days Visible Result",
    color: "rose"
  }
];

const patientReviewsRow2: ReviewItem[] = [
  {
    name: "Balamurugan",
    location: "Coimbatore",
    text: "Doctor is very caring. He hears our problems with much patience and explains clearly. I feel comfortable and my confidence increased. Visibly seeing the results!",
    rating: 5,
    tag: "Doctor Consultation",
    color: "emerald"
  },
  {
    name: "Sathish Kumar",
    location: "Tirupur",
    text: "I had a great experience with Dr. Jalal sir. More than a doctor he is a very good human, down to earth. I feel very satisfied with his treatment and recommend him to all couples.",
    rating: 5,
    tag: "Patient Trust",
    color: "blue"
  },
  {
    name: "Mareeswaran",
    location: "Madurai",
    text: "We are well satisfied and worth for money. Happy to give 5 stars for Jalal sir. You gifted happiness for our family.",
    rating: 5,
    tag: "Family Happiness",
    color: "amber"
  },
  {
    name: "Rathinamoorthy",
    location: "Erode",
    text: "Very good result! We have finished six months of medicine, all ways very well. Lot of thanks, we are very happy.",
    rating: 5,
    tag: "Treatment Result",
    color: "purple"
  },
  {
    name: "Bino",
    location: "Coimbatore",
    text: "An amazing experience, very knowledgeable doctor and excellent treatment and result. I strongly recommend for people looking for results.",
    rating: 5,
    tag: "High Recommendation",
    color: "teal"
  },
  {
    name: "Mohammed Asif",
    location: "Coimbatore",
    text: "Dr. Jalal was knowledgeable and caring. I felt confident hearing his words. Very impressed with the overall experience. Highly recommend!",
    rating: 5,
    tag: "Verified Experience",
    color: "cyan"
  },
  {
    name: "Karuppusamy",
    location: "Dharapuram",
    text: "Started taking tablets as prescribed by Jalal sir, 1 month completed. I am visibly seeing positive results and great improvement.",
    rating: 5,
    tag: "Visible Progress",
    color: "rose"
  },
  {
    name: "Kaderesan",
    location: "Coimbatore",
    text: "I know Jalal sir since 2011. He is a very nice person and I always get exact treatment and positive results whenever I face any problem.",
    rating: 5,
    tag: "13+ Years Trust",
    color: "indigo"
  },
  {
    name: "Dheen",
    location: "Nilgiris",
    text: "Treatment was good and effective. Got results very quickly and treatment was completely successful.",
    rating: 5,
    tag: "Quick & Effective",
    color: "emerald"
  },
  {
    name: "Krishna Kumar",
    location: "Coimbatore",
    text: "Almost a month started treatment and feel very good both physically and mentally. Great positive improvement.",
    rating: 5,
    tag: "Physical & Mental Wellness",
    color: "blue"
  },
  {
    name: "Palani Samy",
    location: "Pollachi",
    text: "Very friendly approach by the doctors and staff. Pure Ayurvedic medicines with no side effects.",
    rating: 5,
    tag: "Zero Side Effects",
    color: "pink"
  }
];

function ReviewCard({ review }: { review: ReviewItem }) {
  const getTagColor = (color: string) => {
    switch (color) {
      case "blue": return "bg-blue-50 text-blue-700 border-blue-200/60";
      case "emerald": return "bg-emerald-50 text-emerald-700 border-emerald-200/60";
      case "pink": return "bg-pink-50 text-pink-700 border-pink-200/60";
      case "purple": return "bg-purple-50 text-purple-700 border-purple-200/60";
      case "amber": return "bg-amber-50 text-amber-700 border-amber-200/60";
      case "teal": return "bg-teal-50 text-teal-700 border-teal-200/60";
      case "cyan": return "bg-cyan-50 text-cyan-700 border-cyan-200/60";
      case "rose": return "bg-rose-50 text-rose-700 border-rose-200/60";
      case "indigo": return "bg-indigo-50 text-indigo-700 border-indigo-200/60";
      default: return "bg-slate-50 text-slate-700 border-slate-200/60";
    }
  };

  const getAvatarBg = (color: string) => {
    switch (color) {
      case "blue": return "bg-gradient-to-br from-blue-500 to-indigo-600";
      case "emerald": return "bg-gradient-to-br from-emerald-500 to-teal-600";
      case "pink": return "bg-gradient-to-br from-pink-500 to-rose-600";
      case "purple": return "bg-gradient-to-br from-purple-500 to-violet-600";
      case "amber": return "bg-gradient-to-br from-amber-500 to-orange-600";
      case "teal": return "bg-gradient-to-br from-teal-500 to-emerald-600";
      case "cyan": return "bg-gradient-to-br from-cyan-500 to-blue-600";
      case "rose": return "bg-gradient-to-br from-rose-500 to-red-600";
      case "indigo": return "bg-gradient-to-br from-indigo-500 to-purple-600";
      default: return "bg-gradient-to-br from-slate-600 to-slate-800";
    }
  };

  return (
    <div className="w-[360px] sm:w-[420px] bg-white rounded-[24px] p-6 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col justify-between shrink-0 mx-3 hover:shadow-[0_12px_35px_rgba(2,132,199,0.08)] hover:border-blue-200 transition-all duration-300 group">
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`w-11 h-11 rounded-full ${getAvatarBg(review.color)} text-white font-bold flex items-center justify-center text-sm shadow-sm`}>
              {review.name.charAt(0)}
            </div>
            <div>
              <h4 className="font-bold text-[#0f172a] text-sm sm:text-base leading-snug group-hover:text-blue-600 transition-colors">
                {review.name}
              </h4>
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Patient {review.location && `• ${review.location}`}</span>
              </div>
            </div>
          </div>

          {/* Rating */}
          <div className="flex gap-0.5">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
        </div>

        {/* Review text */}
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-4">
          "{review.text}"
        </p>
      </div>

      {/* Bottom Tag */}
      <div className="pt-3 border-t border-slate-100/80 flex items-center justify-between">
        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold border ${getTagColor(review.color)}`}>
          <Sparkles className="w-3 h-3" />
          {review.tag}
        </span>
        <span className="text-[11px] font-semibold text-slate-400">Google Review</span>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#fafbfc] via-white to-[#f8fafc]">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 text-blue-100/40 pointer-events-none z-0">
        <svg width="140" height="140" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.017 21v-7.391c0-5.714 4.143-9.609 9.983-9.609h.001v3.424c-2.482 0-3.645 1.579-3.645 3.324v.252h3.644V21h-9.983zm-14.017 0v-7.391c0-5.714 4.143-9.609 9.983-9.609h.001v3.424c-2.482 0-3.645 1.579-3.645 3.324v.252h3.644V21H0z" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-bold text-xs tracking-wide uppercase mb-4 border border-blue-100 shadow-sm">
            <MessageSquareQuote className="w-4 h-4" />
            Patient Testimonials
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] leading-tight mb-4 tracking-tight">
            Real Stories, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Real Blessings</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium max-w-2xl leading-relaxed">
            Read firsthand experiences from patients who found health, renewed hope, and parenthood with Dr. Jalal at Kovai Health Center.
          </p>
          
          <div className="w-16 h-1.5 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full mt-4" />
        </div>

        {/* Marquee Track 1 (Left Scrolling) */}
        <div className="relative w-full overflow-hidden mb-6 py-2">
          {/* Gradient edge fades */}
          <div className="absolute top-0 left-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#fafbfc] to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#fafbfc] to-transparent z-20 pointer-events-none" />

          <div className="animate-marquee-left">
            {patientReviewsRow1.concat(patientReviewsRow1).map((review, idx) => (
              <ReviewCard key={`r1-${idx}`} review={review} />
            ))}
          </div>
        </div>

        {/* Marquee Track 2 (Right Scrolling) */}
        <div className="relative w-full overflow-hidden mb-16 py-2">
          {/* Gradient edge fades */}
          <div className="absolute top-0 left-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#fafbfc] to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#fafbfc] to-transparent z-20 pointer-events-none" />

          <div className="animate-marquee-right">
            {patientReviewsRow2.concat(patientReviewsRow2).map((review, idx) => (
              <ReviewCard key={`r2-${idx}`} review={review} />
            ))}
          </div>
        </div>

        {/* Bottom Feature Bar & Metrics */}
        <div className="relative pt-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 grid grid-cols-2 gap-y-8 gap-x-2 lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-6 pb-12 sm:pb-12"
          >
            {/* Metric 1 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-4 w-full lg:w-auto px-1 sm:px-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                <Smile className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-[#0f172a] text-[15px] sm:text-lg leading-tight break-words">10,000+</h4>
                <p className="text-slate-600 text-[12px] sm:text-sm font-medium leading-tight mb-0.5">Satisfied Patients</p>
                <p className="text-slate-400 text-[10px] sm:text-xs leading-tight">30 years of clinical excellence</p>
              </div>
            </div>
            
            <div className="hidden lg:block w-px h-16 bg-slate-100" />
            
            {/* Metric 2 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-4 w-full lg:w-auto px-1 sm:px-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                <Star className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-[#0f172a] text-[15px] sm:text-lg leading-tight break-words">4.9 / 5.0</h4>
                <p className="text-slate-600 text-[12px] sm:text-sm font-medium leading-tight mb-0.5">Google Rating</p>
                <p className="text-slate-400 text-[10px] sm:text-xs leading-tight">Consistently rated 5 stars</p>
              </div>
            </div>
            
            <div className="hidden lg:block w-px h-16 bg-slate-100" />

            {/* Metric 3 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-4 w-full lg:w-auto px-1 sm:px-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-[#0f172a] text-[15px] sm:text-lg leading-tight break-words">100%</h4>
                <p className="text-slate-600 text-[12px] sm:text-sm font-medium leading-tight mb-0.5">Confidential Care</p>
                <p className="text-slate-400 text-[10px] sm:text-xs leading-tight">Strict privacy and empathy</p>
              </div>
            </div>

            <div className="hidden lg:block w-px h-16 bg-slate-100" />

            {/* Metric 4 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-4 w-full lg:w-auto px-1 sm:px-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 border border-orange-100">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-[#0f172a] text-[14px] sm:text-sm leading-tight break-words">Compassionate</h4>
                <p className="text-slate-600 text-[12px] sm:text-sm font-medium leading-tight mb-0.5">Guidance</p>
                <p className="text-slate-400 text-[10px] sm:text-xs leading-tight">Caring for you at every step</p>
              </div>
            </div>
          </motion.div>

          {/* Share Your Experience Button */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex justify-center w-full z-20">
            <a 
              href="https://g.page/r/your-google-review-link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white border border-slate-200 hover:border-blue-500 shadow-md hover:shadow-lg rounded-full px-8 py-3.5 flex items-center gap-2 font-bold text-blue-600 transition-all hover:-translate-y-1 group"
            >
              <MessageCircle className="w-5 h-5 text-blue-500 group-hover:text-blue-600" />
              Share Your Experience
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
