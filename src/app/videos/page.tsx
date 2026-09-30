"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, PlayCircle, Video, Search, Eye, Clock, 
  Sparkles, ShieldCheck, User, ArrowRight, X, Phone, MessageSquare 
} from "@/components/Icons";
import { videosData, videoCategories, VideoItem } from "@/data/videos";

export default function VideosPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  // Filtered videos based on category and search query
  const filteredVideos = useMemo(() => {
    return videosData.filter((vid) => {
      const matchesCategory = selectedCategory === "All" || vid.category === selectedCategory;
      const matchesSearch = 
        vid.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vid.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (vid.doctor && vid.doctor.toLowerCase().includes(searchQuery.toLowerCase())) ||
        vid.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredVideo = useMemo(() => {
    return videosData.find((v) => v.featured) || videosData[0];
  }, []);

  return (
    <div className="min-h-screen bg-[#fafbfc] pt-24 sm:pt-28 pb-20">
      
      {/* Hero Header Section */}
      <section className="relative overflow-hidden pt-6 pb-12 sm:pb-16 bg-gradient-to-b from-blue-50/60 via-slate-50 to-[#fafbfc] border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-900 font-black text-xs sm:text-sm tracking-wide mb-5 border border-blue-200 shadow-xs"
          >
            <Video className="w-4 h-4 text-blue-700" />
            OUR VIDEO LIBRARY & EXPERT TALKS
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0f172a] tracking-tight mb-5 leading-tight"
          >
            Doctor Guidance, Patient Stories <br className="hidden sm:inline" />
            <span className="text-blue-600">& Healthcare Insights</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-xl text-slate-800 font-bold max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Watch educational videos by our senior certified physicians covering male & female fertility, sexual wellness, and 30 years of authentic Ayurvedic care.
          </motion.p>

          {/* Search Bar & YouTube Link */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-3"
          >
            <div className="relative w-full">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by topic, doctor name, treatment..."
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border-2 border-slate-200 focus:border-blue-500 focus:outline-none text-slate-900 font-bold text-sm sm:text-base shadow-sm placeholder:text-slate-400"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 font-bold"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <a
              href="https://youtube.com/@kovaihealthcenter?si=YAC3WrhN_6Yl9nfG"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#FF0000] hover:bg-red-700 text-white font-black text-sm flex items-center justify-center gap-2 shrink-0 shadow-md transition-all hover:scale-102"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>YouTube Channel</span>
            </a>
          </motion.div>

        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-8 sm:mb-12 scrollbar-hide">
          {videoCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-black whitespace-nowrap transition-all duration-200 shrink-0 ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-md scale-105"
                  : "bg-white text-slate-800 border-2 border-slate-200 hover:border-blue-400 hover:text-blue-600 shadow-xs"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Video Card (Show when category is 'All' and no search query) */}
        {selectedCategory === "All" && !searchQuery && featuredVideo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 bg-white rounded-[32px] border-2 border-blue-100 shadow-lg p-5 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center"
          >
            {/* Thumbnail with Play Trigger */}
            <div 
              onClick={() => setActiveVideo(featuredVideo)}
              className="lg:col-span-7 relative h-64 sm:h-80 rounded-2xl overflow-hidden bg-slate-900 group cursor-pointer shadow-md"
            >
              <Image
                src={featuredVideo.thumbnail}
                alt={featuredVideo.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              
              {/* Featured Badge */}
              <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-blue-600 text-white font-black text-xs uppercase tracking-wider shadow-md flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Featured Video
              </div>

              {/* Duration Badge */}
              <div className="absolute bottom-4 right-4 z-10 px-2.5 py-1 rounded-lg bg-black/80 text-white font-bold text-xs flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {featuredVideo.duration}
              </div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 pl-1 border-4 border-white/80">
                  <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-current" />
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-4">
              <div>
                <span className="text-xs font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3">
                  {featuredVideo.category}
                </span>
                
                <h2 className="text-2xl sm:text-3xl font-black text-[#0f172a] leading-tight mb-3">
                  {featuredVideo.title}
                </h2>
                
                <p className="text-slate-700 text-sm sm:text-base font-bold leading-relaxed mb-4">
                  {featuredVideo.description}
                </p>

                {featuredVideo.doctor && (
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200 mb-4">
                    {featuredVideo.doctorImg ? (
                      <Image
                        src={featuredVideo.doctorImg}
                        alt={featuredVideo.doctor}
                        width={44}
                        height={44}
                        className="rounded-full object-cover border-2 border-white shadow-xs"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                        <User className="w-5 h-5" />
                      </div>
                    )}
                    <div>
                      <h4 className="font-black text-slate-900 text-sm">{featuredVideo.doctor}</h4>
                      <p className="text-slate-600 text-xs font-bold">{featuredVideo.doctorRole}</p>
                    </div>
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={() => setActiveVideo(featuredVideo)}
                className="w-full py-4 rounded-2xl bg-brand-primary hover:bg-emerald-700 text-white font-black text-base shadow-md flex items-center justify-center gap-2 transition-all hover:scale-101"
              >
                <Play className="w-5 h-5 fill-current" />
                Play Featured Video Now
              </button>
            </div>
          </motion.div>
        )}

        {/* Video Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl sm:text-2xl font-black text-[#0f172a] flex items-center gap-2">
              <Video className="w-6 h-6 text-blue-600" />
              <span>{selectedCategory === "All" ? "All Videos" : selectedCategory} ({filteredVideos.length})</span>
            </h3>
            {searchQuery && (
              <span className="text-xs sm:text-sm font-bold text-slate-600">
                Results for &ldquo;{searchQuery}&rdquo;
              </span>
            )}
          </div>

          {filteredVideos.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border-2 border-slate-200">
              <Video className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <h4 className="text-lg font-black text-slate-800 mb-1">No videos found</h4>
              <p className="text-sm font-bold text-slate-500 mb-4">Try searching with a different keyword or reset filters.</p>
              <button
                onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-black text-sm"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredVideos.map((video, idx) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-white rounded-[28px] border-2 border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                >
                  <div>
                    {/* Thumbnail Card */}
                    <div 
                      onClick={() => setActiveVideo(video)}
                      className="relative h-48 sm:h-52 overflow-hidden bg-slate-900 cursor-pointer"
                    >
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                      {/* Category Tag */}
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-slate-900 font-black text-[11px] shadow-xs">
                        {video.category}
                      </span>

                      {/* Duration */}
                      <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-black/80 text-white font-black text-xs flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {video.duration}
                      </span>

                      {/* Play Hover Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg group-hover:scale-115 transition-transform pl-0.5 border-2 border-white">
                          <Play className="w-5 h-5 fill-current" />
                        </div>
                      </div>
                    </div>

                    {/* Body Info */}
                    <div className="p-5 sm:p-6 pb-2">
                      <h4 
                        onClick={() => setActiveVideo(video)}
                        className="font-black text-[#0f172a] text-lg mb-2 leading-snug group-hover:text-blue-600 transition-colors cursor-pointer"
                      >
                        {video.title}
                      </h4>
                      
                      <p className="text-slate-700 text-xs sm:text-sm font-bold leading-relaxed line-clamp-2 mb-4">
                        {video.description}
                      </p>

                      {video.doctor && (
                        <div className="flex items-center gap-2.5 text-xs text-slate-800 font-bold mb-3">
                          {video.doctorImg && (
                            <Image
                              src={video.doctorImg}
                              alt={video.doctor}
                              width={24}
                              height={24}
                              className="rounded-full object-cover"
                            />
                          )}
                          <span>{video.doctor}</span>
                          {video.views && (
                            <>
                              <span className="text-slate-300">•</span>
                              <span className="text-slate-500">{video.views} views</span>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Footer Play Action */}
                  <div className="p-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setActiveVideo(video)}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-black text-blue-600 group-hover:text-blue-700"
                    >
                      <PlayCircle className="w-4 h-4" />
                      Watch Video
                    </button>

                    <Link
                      href="/#consultation"
                      className="text-[11px] font-bold text-slate-500 hover:text-emerald-700"
                    >
                      Consult Doctor →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Consultation CTA Banner */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-[32px] p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-black uppercase tracking-wider mb-4 border border-white/20">
              <ShieldCheck className="w-4 h-4" />
              100% Confidential Consultation
            </div>
            <h3 className="text-2xl sm:text-4xl font-black mb-3">
              Need Personal Advice from Our Doctors?
            </h3>
            <p className="text-slate-200 font-bold text-sm sm:text-base leading-relaxed mb-6">
              Discuss your reproductive health or sexual wellness concerns privately with Dr. Jalaludheen, Dr. Sijahudheen, or Dr. Sithara Mehroon.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/#consultation"
                className="px-6 py-3.5 rounded-2xl bg-brand-primary hover:bg-emerald-600 text-white font-black text-sm shadow-md transition-all hover:scale-102 flex items-center gap-2"
              >
                Book Private Appointment
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/919385405040"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                WhatsApp Consultation
              </a>
            </div>
          </div>
        </div>

      </main>

      {/* Video Modal Player (Play any video upon click) */}
      <AnimatePresence>
        {activeVideo && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveVideo(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[92vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 bg-[#0f172a] text-white flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-2 min-w-0 pr-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shrink-0" />
                  <h3 className="font-black text-sm sm:text-base text-white truncate">
                    {activeVideo.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveVideo(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center shrink-0 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Player Container */}
              <div className="relative w-full aspect-video bg-black">
                {activeVideo.videoType === "youtube" && activeVideo.youtubeId ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                    title={activeVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                ) : activeVideo.videoUrl ? (
                  <video
                    src={activeVideo.videoUrl}
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-white text-sm">
                    Video stream is loading...
                  </div>
                )}
              </div>

              {/* Modal Bottom Details & CTA */}
              <div className="p-5 sm:p-6 bg-white overflow-y-auto space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-black text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200 inline-block mb-1.5">
                      {activeVideo.category}
                    </span>
                    <h4 className="font-black text-slate-900 text-base sm:text-xl">
                      {activeVideo.title}
                    </h4>
                  </div>

                  <Link
                    href="/#consultation"
                    onClick={() => setActiveVideo(null)}
                    className="px-5 py-2.5 rounded-xl bg-brand-primary hover:bg-emerald-700 text-white font-black text-xs sm:text-sm text-center shadow-sm shrink-0"
                  >
                    Book Doctor Consultation
                  </Link>
                </div>

                <p className="text-slate-700 font-bold text-xs sm:text-sm leading-relaxed">
                  {activeVideo.description}
                </p>

                {activeVideo.doctor && (
                  <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                    {activeVideo.doctorImg && (
                      <Image
                        src={activeVideo.doctorImg}
                        alt={activeVideo.doctor}
                        width={36}
                        height={36}
                        className="rounded-full object-cover"
                      />
                    )}
                    <div>
                      <p className="font-black text-slate-900 text-xs sm:text-sm">{activeVideo.doctor}</p>
                      <p className="text-slate-500 font-bold text-[11px]">{activeVideo.doctorRole}</p>
                    </div>
                  </div>
                )}
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
