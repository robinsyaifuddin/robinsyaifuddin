"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  ExternalLink, 
  Play, 
  Share2, 
  Heart, 
  Eye, 
  Layers, 
  Code2, 
  Calendar, 
  MapPin,
  ChevronRight,
  ChevronDown,
  Sparkles,
  Search,
  Filter,
  Check
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PORTFOLIO_PROJECTS, ProjectItem } from "@/lib/portfolioData";
import { TACTILE_TRANSITION, TACTILE_EASE, VIEWPORT_ONCE } from "@/lib/motion";

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "ALL",
    "WEB PLATFORM",
    "E-GOVERNMENT",
    "AI & AUTOMATION",
    "LOGISTICS / IOT",
    "HEALTHTECH"
  ];

  // Filter projects berdasarkan kategori dan pencarian
  const filteredProjects = PORTFOLIO_PROJECTS.filter((p) => {
    const matchesCat = 
      selectedCategory === "ALL" || 
      p.category.toUpperCase().includes(selectedCategory);
    const matchesSearch = 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  // Top Featured: Ambil 3 proyek teratas
  const featuredThree = PORTFOLIO_PROJECTS.filter(p => p.featured).slice(0, 3);
  // Quick strip items (3 item ringkas)
  const quickItems = PORTFOLIO_PROJECTS.filter(p => ["ylbh-merdeka", "eco-edu-tourism", "ai-smart-crm"].includes(p.id));
  // Spotlight item (kanan)
  const spotlightItem = PORTFOLIO_PROJECTS.find(p => p.spotlight) || PORTFOLIO_PROJECTS[PORTFOLIO_PROJECTS.length - 1];
  // List feeds (kiri pada asymmetrical body)
  const feedItems = filteredProjects.filter(p => !p.featured && p.id !== spotlightItem.id);

  return (
    <div className="min-h-screen bg-[#070a10] text-[#e2e8f0] font-sans selection:bg-[#0da2e7] selection:text-white">
      {/* Background Ambience Subtle Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#0da2e7]/[0.04] rounded-full blur-[130px]" />
        <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#1e40af]/[0.03] rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10172608_1px,transparent_1px),linear-gradient(to_bottom,#10172608_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* ======================= TOP NAVIGATION BAR ======================= */}
      <header className="sticky top-0 z-50 bg-[#070a10]/90 backdrop-blur-md border-b border-[#131d2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#94a3b8] hover:text-[#0da2e7] transition-colors py-1 px-2.5 rounded-sm hover:bg-[#0da2e7]/10 border border-transparent hover:border-[#0da2e7]/30"
            >
              <ArrowLeft size={14} />
              <span>Kembali ke Beranda</span>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block text-[11px] font-mono tracking-wider text-[#64748b] uppercase">
              INDEX / PORTFOLIO ARCHIVE
            </span>
            <div className="h-4 w-px bg-[#1e293b] hidden sm:block" />
            <a 
              href="https://github.com/robinsyaifuddin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-bold uppercase tracking-wider text-white px-3 py-1.5 bg-[#0da2e7] hover:bg-[#0284c7] transition-colors rounded-sm"
            >
              GitHub Feed
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-16">
        
        {/* ======================= HERO EDITORIAL HEADER ======================= */}
        <section className="border-b border-[#131d2e] pb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#0da2e7]/10 border border-[#0da2e7]/25 text-[#0da2e7] text-[10px] font-mono uppercase tracking-widest mb-3">
                <Sparkles size={12} />
                <span>ARCHITECTED PORTFOLIO DIRECTORY</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-none">
                SELECTED WORKS <span className="text-[#0da2e7]">&amp;</span> BUILDS
              </h1>
              <p className="mt-3 text-sm sm:text-base text-[#94a3b8] max-w-2xl leading-relaxed">
                Eksplorasi tata letak editorial majalah untuk portofolio digital, solusi e-government desa, sistem enterprise, hingga arsitektur autonomous AI agent.
              </p>
            </div>

            {/* Quick stats counter */}
            <div className="flex items-center gap-6 border-l md:border-l border-[#131d2e] pl-4 sm:pl-6">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-[#0da2e7] font-mono">10+</p>
                <p className="text-[10px] uppercase font-mono tracking-wider text-[#64748b]">Total Proyek</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-white font-mono">100%</p>
                <p className="text-[10px] uppercase font-mono tracking-wider text-[#64748b]">Delivered</p>
              </div>
            </div>
          </div>

          {/* Filter Bar & Search */}
          <div className="mt-8 pt-6 border-t border-[#131d2e]/70 flex items-center gap-3 max-w-xl">
            {/* Category Dropdown */}
            <div className="shrink-0">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    className="flex items-center gap-2 px-3 py-1.5 bg-[#0d1422] hover:bg-[#131d2e] border border-[#162238] hover:border-[#0da2e7]/50 rounded-sm text-xs font-mono uppercase tracking-wider text-slate-200 transition-colors focus:outline-none focus:ring-1 focus:ring-[#0da2e7]"
                    title="Pilih Kategori"
                    aria-label="Pilih Kategori"
                  >
                    <Filter size={14} className="text-[#0da2e7] shrink-0" />
                    <span className="hidden sm:inline">
                      {selectedCategory}
                    </span>
                    <ChevronDown size={14} className="text-[#64748b] hidden sm:inline transition-transform duration-200" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="start" 
                  className="w-52 bg-[#0b121e] border border-[#162238] text-slate-200 shadow-xl rounded-sm p-1 z-50"
                >
                  {categories.map((cat) => {
                    const isSelected = selectedCategory === cat;
                    return (
                      <DropdownMenuItem
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`flex items-center justify-between px-3 py-2 text-xs font-mono uppercase tracking-wider cursor-pointer rounded-xs transition-colors ${
                          isSelected
                            ? "bg-[#0da2e7]/15 text-[#0da2e7] font-semibold"
                            : "hover:bg-[#131d2e] hover:text-white"
                        }`}
                      >
                        <span>{cat}</span>
                        {isSelected && <Check size={14} className="text-[#0da2e7]" />}
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Search Input */}
            <div className="relative flex-1">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#64748b]" />
              <input
                type="text"
                placeholder="Cari proyek / tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0d1422] border border-[#162238] focus:border-[#0da2e7] pl-8 pr-3 py-1.5 text-xs text-white placeholder-[#64748b] rounded-sm outline-none transition-colors"
              />
            </div>
          </div>
        </section>


        {/* ======================= ROW 1: TOP FEATURED 3 CARDS (Sesuai Gambar) ======================= */}
        {selectedCategory === "ALL" && !searchQuery && (
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#0da2e7] font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0da2e7] animate-pulse" />
                FEATURED SPOTLIGHTS
              </span>
              <span className="text-[10px] font-mono text-[#64748b] uppercase">GRID EDITORIAL / 01-03</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredThree.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1, ease: TACTILE_EASE }}
                  className="group relative bg-[#0b101a] border border-[#141f33] hover:border-[#0da2e7]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Top Image Container dengan Curved Framing khas Editorial Gambar */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#070a10]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    
                    {/* Corner Video/Play Icon if applicable */}
                    {item.isVideo && (
                      <div className="absolute top-3 right-3 w-7 h-7 bg-black/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-white text-xs">
                        <Play size={10} className="fill-white translate-x-0.5" />
                      </div>
                    )}

                    {/* Wave/Curved Cutout Shape di bawah gambar seperti referensi */}
                    <div className="absolute -bottom-[1px] inset-x-0 h-4 bg-[#0b101a] [clip-path:polygon(0_100%,100%_100%,100%_0,0_85%)]" />
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                    <div>
                      {/* Meta Category & Year */}
                      <div className="flex items-center justify-between text-[10px] font-mono text-[#64748b] uppercase tracking-wider mb-2">
                        <span className="text-[#0da2e7] font-semibold">{item.category}</span>
                        <span>{item.year}</span>
                      </div>

                      {/* Main Title (Kapital & Bold) */}
                      <h2 className="text-base sm:text-lg font-bold text-white group-hover:text-[#0da2e7] transition-colors uppercase leading-snug tracking-tight mb-3">
                        {item.title}
                      </h2>

                      {/* Wave Line Separator Khas Desain Gambar */}
                      <div className="w-12 h-1 bg-gradient-to-r from-[#0da2e7] to-transparent mb-4 rounded-full opacity-60" />

                      {/* Deskripsi ringkas */}
                      <p className="text-xs text-[#94a3b8] line-clamp-3 leading-relaxed mb-4">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom Author / Location & Read More Button */}
                    <div className="pt-4 border-t border-[#141f33] flex items-center justify-between">
                      <a
                        href={item.url || "#"}
                        target={item.url ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#070a10] group-hover:bg-[#0da2e7] border border-[#192740] group-hover:border-[#0da2e7] text-white text-[10px] font-mono uppercase tracking-wider transition-all duration-200"
                      >
                        <span>VIEW PROJECT</span>
                        <ChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                      </a>

                      <div className="flex items-center gap-3 text-[#64748b] text-[11px]">
                        <span className="flex items-center gap-1 text-[10px] font-mono">
                          <MapPin size={10} className="text-[#0da2e7]" />
                          {item.year}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>
        )}


        {/* ======================= ROW 2: QUICK STRIP ROW (Item 1, 2, 3 di Gambar) ======================= */}
        {selectedCategory === "ALL" && !searchQuery && (
          <section className="border-y border-[#131d2e] py-6 my-6 bg-[#090d16]/60">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-[#141f33]">
              {quickItems.map((item, idx) => (
                <div key={item.id} className={`flex items-center gap-3 ${idx > 0 ? "pt-4 md:pt-0 md:pl-6" : ""}`}>
                  {/* Badge Angka Kotak Hitam (Sesuai Gambar 1, 2, 3) */}
                  <div className="w-7 h-7 shrink-0 bg-[#070a10] border border-[#192740] text-[#0da2e7] font-mono font-bold text-xs flex items-center justify-center">
                    {idx + 1}
                  </div>

                  {/* Tiny Thumbnail */}
                  <div className="relative w-12 h-12 shrink-0 overflow-hidden border border-[#192740]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Text details */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[9px] font-mono uppercase text-[#0da2e7] tracking-wider truncate">
                      {item.category}
                    </p>
                    <h3 className="text-xs font-bold uppercase text-white truncate hover:text-[#0da2e7] transition-colors cursor-pointer">
                      <a href={item.url || "#"} target="_blank" rel="noopener noreferrer">
                        {item.title}
                      </a>
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}


        {/* ======================= ASYMMETRIC MAIN BODY (Rows 3 & 4) ======================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* SISI KIRI (Col 1-8): Horizontal Feed Cards */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#131d2e]">
              <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-white font-bold flex items-center gap-2">
                <span>PROJECT ARCHIVE &amp; CASE STUDIES</span>
                <span className="text-[#0da2e7]">({filteredProjects.length})</span>
              </h2>
              <span className="text-[10px] font-mono text-[#64748b] uppercase">EDITORIAL FEED</span>
            </div>

            {feedItems.length === 0 ? (
              <div className="p-8 text-center bg-[#0b101a] border border-[#141f33]">
                <p className="text-sm text-[#94a3b8]">Tidak ada proyek yang sesuai dengan kriteria filter.</p>
              </div>
            ) : (
              feedItems.map((item) => (
                <article
                  key={item.id}
                  className="group bg-[#0b101a] border border-[#141f33] hover:border-[#0da2e7]/50 transition-all duration-300 p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-12 gap-5 items-center"
                >
                  {/* Left: Thumbnail Proyek */}
                  <div className="sm:col-span-5 relative w-full aspect-[16/10] overflow-hidden bg-[#070a10] border border-[#162238]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 30vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    {item.isVideo && (
                      <div className="absolute top-2 right-2 w-6 h-6 bg-black/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-white text-xs">
                        <Play size={8} className="fill-white translate-x-0.5" />
                      </div>
                    )}
                  </div>

                  {/* Right: Info Proyek */}
                  <div className="sm:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-[#64748b] mb-1.5">
                        <span className="text-[#0da2e7] font-semibold">{item.category}</span>
                        <span>•</span>
                        <span>{item.year}</span>
                      </div>

                      <h3 className="text-sm sm:text-base font-bold uppercase text-white group-hover:text-[#0da2e7] transition-colors leading-snug tracking-tight mb-2">
                        {item.title}
                      </h3>

                      <p className="text-xs text-[#94a3b8] line-clamp-2 leading-relaxed mb-3">
                        {item.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {item.tags.map(t => (
                          <span key={t} className="text-[9px] font-mono px-2 py-0.5 bg-[#070a10] border border-[#18263e] text-[#8ea0be]">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-[#141f33]">
                      <a
                        href={item.url || "https://github.com/robinsyaifuddin"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-[#0da2e7] hover:text-white transition-colors"
                      >
                        <span>READ MORE / EXPLORE</span>
                        <ChevronRight size={12} />
                      </a>

                      <span className="text-[10px] font-mono text-[#64748b]">
                        {item.clientOrLocation}
                      </span>
                    </div>
                  </div>
                </article>
              ))
            )}
          </div>

          {/* SISI KANAN (Col 9-12): Spotlight Tall Dark Card (Persis Card Kanan di Gambar) */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="sticky top-24 space-y-6">
              
              {/* Spotlight Tall Editorial Card */}
              <div className="relative bg-[#05080e] border border-[#18263e] overflow-hidden group">
                {/* Cover Image di atas */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-black">
                  <Image
                    src={spotlightItem.image}
                    alt={spotlightItem.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out brightness-90"
                  />
                  {/* Dark Editorial Wave Cutout */}
                  <div className="absolute -bottom-[1px] inset-x-0 h-6 bg-[#05080e] [clip-path:polygon(0_100%,100%_100%,100%_0,0_70%)]" />
                </div>

                {/* Dark Card Body */}
                <div className="p-6">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#0da2e7] font-semibold block mb-2">
                    SPOTLIGHT ARCHITECTURE
                  </span>

                  <h3 className="text-lg font-black uppercase text-white leading-tight tracking-tight mb-3">
                    {spotlightItem.title}
                  </h3>

                  {/* Wave accent line */}
                  <div className="w-12 h-1 bg-[#0da2e7] mb-4" />

                  <p className="text-xs text-[#94a3b8] leading-relaxed mb-6">
                    {spotlightItem.description}
                  </p>

                  <div className="p-3 bg-[#0a0f1a] border border-[#141f33] mb-6 space-y-1.5">
                    <p className="text-[10px] font-mono text-[#64748b] uppercase tracking-wider">PRIMARY IMPACT</p>
                    <p className="text-xs font-semibold text-white">{spotlightItem.summary}</p>
                  </div>

                  <a
                    href={spotlightItem.url || "https://github.com/robinsyaifuddin"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#0da2e7] hover:bg-[#0284c7] text-white text-xs font-mono font-bold uppercase tracking-widest transition-colors"
                  >
                    <span>INSPECT ARCHITECTURE</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>

              {/* Mini Info Card / Call to Action */}
              <div className="p-5 bg-[#0b101a] border border-[#141f33] space-y-3">
                <p className="text-[10px] font-mono uppercase tracking-widest text-[#0da2e7]">
                  OPEN FOR INQUIRIES
                </p>
                <h4 className="text-sm font-bold uppercase text-white leading-snug">
                  Tertarik Mengembangkan Sistem Serupa?
                </h4>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  Konsultasikan arsitektur web platform, sistem otomatisasi desa, atau pipeline AI agent untuk organisasi Anda.
                </p>
                <Link
                  href="/#contact"
                  className="inline-block text-[10px] font-mono uppercase tracking-wider text-white hover:text-[#0da2e7] underline underline-offset-4 pt-1"
                >
                  Hubungi Robin Syaifuddin →
                </Link>
              </div>

            </div>
          </aside>

        </section>

      </main>

      {/* ======================= FOOTER ======================= */}
      <footer className="mt-20 border-t border-[#131d2e] py-8 bg-[#05080e] text-center text-[#64748b] text-xs font-mono">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Robin Syaifuddin. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/portfolio" className="text-[#0da2e7]">Portfolio</Link>
            <Link href="/#contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
