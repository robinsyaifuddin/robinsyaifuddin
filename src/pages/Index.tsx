import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Search,
  Lightbulb,
  Palette,
  Code2,
  Send,
  Mail,
  Globe,
  Phone,
  MapPin,
  Sparkles,
  Quote,
  X,
  Laptop
} from "lucide-react";

// Portfolio Data Robin Syaifuddin disesuaikan dengan template desain
const PROJECTS = [
  {
    num: "01",
    id: "desafajarbaru",
    title: "DESA FAJAR BARU",
    subtitle: "GOVERNMENT PORTAL",
    category: "Web Development",
    year: "2025",
    summary: "Pengembangan portal terpadu untuk transparansi administrasi, layanan publik warga, dan keterbukaan informasi desa.",
    impact: "Mempercepat pelayanan surat & akses informasi bagi 4.000+ warga.",
    tech: ["React", "Tailwind CSS", "Vite", "Node.js"],
    url: "https://desafajarbaru.web.id",
    tagline: "DIGITALISASI DESA & TRANSPARANSI PUBLIK",
    theme: "dark",
  },
  {
    num: "02",
    id: "digibooster",
    title: "DIGIBOOSTER ID",
    subtitle: "DIGITAL AGENCY",
    category: "Digital Agency",
    year: "2025",
    summary: "Platform Layanan Jasa Digital Terbaik untuk transformasi digital UMKM dan bisnis modern dengan solusi komprehensif.",
    impact: "Hub solusi digital branding, web design, automation, dan advertising.",
    tech: ["Next.js", "Tailwind CSS", "Automation", "SEO"],
    url: "https://digibooster.web.id",
    tagline: "TRANSFORMASI & OTOMASI DIGITAL BISNIS",
    theme: "light",
  },
  {
    num: "03",
    id: "lamselmaju",
    title: "LAMSEL MAJU",
    subtitle: "TOURISM & UMKM",
    category: "Tourism Tech",
    year: "2025",
    summary: "Platform eksplorasi destinasi pariwisata unggulan, profil kecamatan, serta direktori UMKM lokal se-Lampung Selatan.",
    impact: "Mendongkrak eksposur visual destinasi wisata pesisir Lampung Selatan.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    url: "https://lamselmaju-id.lovable.app",
    tagline: "EKSPLORASI PARIWISATA & UMKM MODERN",
    theme: "dark-blue",
  },
];

const EDUCATION_ITEMS = [
  {
    degree: "S1 Teknik Telekomunikasi",
    institution: "Institut Teknologi Sumatera (ITERA)",
    period: "2022 — Sekarang",
  },
  {
    degree: "MIPA — Lulusan Terbaik Nonakademik",
    institution: "SMA Teladan Way Jepara",
    period: "2019 — 2022",
  },
  {
    degree: "Infrastruktur Teknologi & Cloud",
    institution: "PT. Aerofood Indonesia (Garuda Indonesia Group)",
    period: "2025",
  },
];

const SKILLS_PILLS = [
  "FULL STACK WEB",
  "UI/UX DESIGN",
  "REACT / NEXT.JS",
  "TAILWIND CSS",
  "TYPESCRIPT",
  "NODE.JS & APIS",
  "SUPABASE / SQL",
  "AI AUTOMATION",
  "SYSTEM ARCH",
  "FIGMA / DESIGN SYSTEM",
  "SEO & PERFORMANCE",
  "TELECOM & NETWORK",
];

const WORK_STEPS = [
  {
    num: "01",
    icon: Search,
    title: "DISCOVER",
    desc: "Memahami tujuan sistem, analisis kebutuhan pengguna, dan riset arsitektur.",
  },
  {
    num: "02",
    icon: Lightbulb,
    title: "IDEATE",
    desc: "Perancangan wireframing, alur data terstruktur, dan konsep antarmuka taktil.",
  },
  {
    num: "03",
    icon: Palette,
    title: "DESIGN",
    desc: "Mendesain visual modern anti-slop dengan tipografi presisi & responsive UX.",
  },
  {
    num: "04",
    icon: Code2,
    title: "DEVELOP",
    desc: "Membangun kode bersih, cepat, secure (anti-SQLi/XSS), dan scalable.",
  },
  {
    num: "05",
    icon: Send,
    title: "DELIVER",
    desc: "Testing performa, optimasi Web Vitals, deployment cloud, dan automasi.",
  },
];

const STATS = [
  { value: "3+", label: "YEARS EXPERIENCE" },
  { value: "20+", label: "PROJECTS COMPLETED" },
  { value: "100%", label: "HAPPY CLIENTS & PARTNERS" },
];

export default function Index() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  return (
    <div className="bg-[#050505] text-[#f2efeb] font-sans min-h-screen selection:bg-[#e32b3c] selection:text-white overflow-x-hidden">
      
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative min-h-[92vh] sm:min-h-screen bg-[#070707] flex flex-col justify-between overflow-hidden px-4 sm:px-8 lg:px-14 pt-8 pb-10 border-b border-[#1f1a1a]">
        
        {/* Top Header Row */}
        <div className="w-full flex items-center justify-between text-[11px] sm:text-xs tracking-widest uppercase font-semibold text-[#8e8a88] z-30">
          <div>
            <span className="text-[#e32b3c] block font-bold tracking-widest text-[11px] sm:text-xs">FULL STACK DEVELOPER</span>
            <span className="text-[#a09c9a] text-[10px] tracking-wider">DIGITAL AUTOMATION SPECIALIST</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e32b3c] animate-pulse" />
            <span className="text-white tracking-widest text-[10px] sm:text-[11px]">AVAILABLE FOR FREELANCE & COLLAB</span>
            <Sparkles size={11} className="text-[#e32b3c]" />
          </div>
        </div>

        {/* Center Canvas: Giant Red Background Title + Big Portrait + Left/Right Cards */}
        <div className="relative w-full flex-1 flex items-center justify-center my-4 sm:my-0">
          
          {/* Giant PORTFOLIO Backdrop Text (Crimson Red) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
            <span className="font-display uppercase tracking-tighter text-[23vw] sm:text-[22vw] md:text-[21vw] lg:text-[19.5vw] text-[#850c18] font-bold leading-none scale-y-110 opacity-90">
              PORTFOLIO
            </span>
          </div>

          {/* Large Center Portrait */}
          <div className="relative z-10 w-[300px] sm:w-[420px] md:w-[480px] lg:w-[580px] xl:w-[640px] pointer-events-none mt-6 sm:mt-2">
            <img
              src="/lovable-uploads/d0cfe490-7b8f-4828-9c87-686191456de5.png"
              alt="Robin Syaifuddin"
              className="w-full h-auto object-contain filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)] contrast-105"
            />
            {/* Smooth bottom gradient fade to seamlessly blend into container */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#070707] via-[#070707]/70 to-transparent" />
          </div>

          {/* Left Hero Card: Hello, I'm ROBIN SYAIFUDDIN */}
          <div className="absolute left-0 bottom-6 sm:bottom-12 z-20 max-w-[270px] sm:max-w-xs md:max-w-sm pointer-events-auto">
            <p className="font-handwriting text-2xl sm:text-3xl text-white/90 italic mb-1 tracking-wide">
              Hello, I&apos;m
            </p>
            <h1 className="font-display uppercase text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[0.92] drop-shadow-lg">
              ROBIN <br />
              SYAIFUDDIN
            </h1>
            <p className="text-[11px] sm:text-xs text-[#e32b3c] font-bold tracking-widest uppercase mt-3 mb-2">
              FULL STACK DEVELOPER & DIGITAL SPECIALIST
            </p>
            <p className="text-[11px] sm:text-xs text-[#a09c9a] leading-relaxed mb-4 line-clamp-3">
              Mahasiswa Teknik Telekomunikasi ITERA yang memadukan rekayasa web modern, performa tinggi, dan otomasi digital yang berdampak nyata.
            </p>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-white font-semibold">
              <span className="w-2 h-2 rounded-full border border-[#e32b3c] flex items-center justify-center">
                <span className="w-1 h-1 bg-[#e32b3c] rounded-full" />
              </span>
              <span>LAMPUNG / BANTEN • AVAILABLE WORLDWIDE</span>
            </div>
          </div>

          {/* Right Hero Items: Sparkle quote + Vertical Stats */}
          <div className="absolute right-0 top-12 sm:top-16 z-20 hidden md:flex items-center gap-2 max-w-[220px]">
            <Sparkles size={16} className="text-[#e32b3c] shrink-0" />
            <p className="text-[11px] text-[#a09c9a] leading-tight">
              Turning ideas into powerful & scalable digital experiences.
            </p>
          </div>

          {/* Right Stats Vertical Counter */}
          <div className="absolute right-0 bottom-6 sm:bottom-12 z-20 space-y-6 text-right sm:text-left pointer-events-auto">
            {STATS.map((stat) => (
              <div key={stat.label} className="group">
                <p className="font-display text-3xl sm:text-4xl text-[#e32b3c] font-bold leading-none tracking-tight">
                  {stat.value}
                </p>
                <p className="text-[9px] sm:text-[10px] text-[#8e8a88] tracking-widest uppercase font-semibold mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom subtle note / scroll cue */}
        <div className="w-full flex items-center justify-between pt-4 border-t border-[#1f1a1a]/60 text-[10px] tracking-wider text-[#666] z-20">
          <span>PORTFOLIO EDITORIAL // EDITION 2025</span>
          <span className="hidden sm:inline">ROBIN SYAIFUDDIN • WEB ARCHITECTURE</span>
        </div>
      </section>

      {/* ===================== SELECTED PROJECTS ===================== */}
      <section id="projects" className="py-16 sm:py-20 px-4 sm:px-8 lg:px-14 border-b border-[#1f1a1a]">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-8 border-b border-[#1f1a1a]">
          <h2 className="text-xs sm:text-sm uppercase tracking-widest font-bold text-white flex items-center gap-2">
            SELECTED PROJECTS
          </h2>
          <a
            href="https://github.com/robinsyaifuddin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] sm:text-xs uppercase tracking-widest font-semibold text-[#8e8a88] hover:text-[#e32b3c] transition-colors flex items-center gap-1.5"
          >
            VIEW ALL PROJECTS <ArrowRight size={13} />
          </a>
        </div>

        {/* 3 Projects Row (Identik Layout Foto Style Card) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-10">
          {PROJECTS.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className="group cursor-pointer flex flex-col justify-between"
            >
              {/* Card Visual Preview Box */}
              <div
                className={`relative aspect-[16/10] sm:aspect-[4/3] rounded-sm overflow-hidden p-6 flex flex-col justify-between border transition-all duration-300 group-hover:border-[#e32b3c] ${
                  proj.theme === "light"
                    ? "bg-[#e5e0d8] text-[#111] border-[#333]"
                    : proj.theme === "dark-red"
                    ? "bg-gradient-to-br from-[#120809] to-[#0a0506] text-white border-[#241718]"
                    : "bg-[#0d0d0d] text-white border-[#1c1c1c]"
                }`}
              >
                {/* Header within preview */}
                <div className="flex justify-between items-center text-[9px] uppercase tracking-wider opacity-70">
                  <span className="font-semibold">{proj.category}</span>
                  <span>{proj.year}</span>
                </div>

                {/* Big Preview Title inside mockup */}
                <div className="my-auto">
                  <p className="text-[10px] tracking-widest uppercase opacity-60 font-semibold mb-1">
                    {proj.subtitle}
                  </p>
                  <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight leading-tight">
                    {proj.title}
                  </h3>
                  <p className="text-[10px] mt-1.5 opacity-80 line-clamp-2">
                    {proj.tagline}
                  </p>
                </div>

                {/* Footer preview */}
                <div className="flex justify-between items-center text-[9px] pt-3 border-t border-current/15">
                  <span className="font-mono">{proj.tech.slice(0, 2).join(" • ")}</span>
                  <ExternalLink size={12} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Bottom Caption: 01 TITLE / CATEGORY -> */}
              <div className="flex items-center justify-between pt-4 mt-1 border-t border-[#191919]">
                <div className="flex items-center gap-3">
                  <span className="font-display text-xl sm:text-2xl font-bold text-[#e32b3c]">
                    {proj.num}
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-white tracking-wider uppercase group-hover:text-[#e32b3c] transition-colors">
                      {proj.title}
                    </h4>
                    <p className="text-[10px] text-[#777] uppercase tracking-wider">
                      {proj.subtitle}
                    </p>
                  </div>
                </div>
                <ArrowRight
                  size={15}
                  className="text-[#555] group-hover:text-[#e32b3c] group-hover:translate-x-1 transition-all"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== EDUCATION & SKILLS + WORK PROCESS + QUOTE ===================== */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 lg:px-14 border-b border-[#1f1a1a]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: EDUCATION & SKILLS (4 cols) */}
          <div className="lg:col-span-4 pr-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-[#1f1a1a] pb-10 lg:pb-0">
            <h2 className="text-xs sm:text-sm uppercase tracking-widest font-bold text-white mb-8 pb-3 border-b border-[#1f1a1a]">
              EDUCATION & SKILLS
            </h2>

            {/* Education Subheading */}
            <p className="text-[10px] font-bold tracking-widest uppercase text-[#e32b3c] mb-4">
              EDUCATION
            </p>

            <div className="space-y-5 mb-10">
              {EDUCATION_ITEMS.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-xs font-semibold text-white leading-snug">
                      {edu.degree}
                    </h3>
                    <p className="text-[11px] text-[#777] mt-0.5">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-[#e32b3c] shrink-0 font-medium">
                    {edu.period}
                  </span>
                </div>
              ))}
            </div>

            {/* Skills Subheading */}
            <p className="text-[10px] font-bold tracking-widest uppercase text-[#e32b3c] mb-4">
              SKILLS
            </p>

            <div className="flex flex-wrap gap-2">
              {SKILLS_PILLS.map((skill) => (
                <span
                  key={skill}
                  className="text-[9px] font-semibold tracking-wider uppercase px-2.5 py-1.5 bg-[#0e0e0e] text-[#a09c9a] border border-[#222] hover:border-[#e32b3c] hover:text-white transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Column 2: WORK PROCESS (5 cols) */}
          <div className="lg:col-span-5 px-0 lg:px-6 border-b lg:border-b-0 lg:border-r border-[#1f1a1a] pb-10 lg:pb-0">
            <h2 className="text-xs sm:text-sm uppercase tracking-widest font-bold text-white mb-8 pb-3 border-b border-[#1f1a1a]">
              WORK PROCESS
            </h2>

            {/* Timeline Vertical Process */}
            <div className="space-y-6 relative before:absolute before:left-[19px] before:top-4 before:bottom-4 before:w-[1px] before:bg-[#222]">
              {WORK_STEPS.map((step) => {
                const IconComponent = step.icon;
                return (
                  <div key={step.num} className="flex items-start gap-4 relative">
                    <span className="w-10 h-10 rounded-full bg-[#0a0a0a] border border-[#282828] text-[#e32b3c] flex items-center justify-center shrink-0 z-10 group-hover:border-[#e32b3c] transition-colors">
                      <IconComponent size={14} />
                    </span>
                    <div className="pt-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-[#e32b3c] font-bold">
                          {step.num}
                        </span>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[#e32b3c]">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-[11px] text-[#8e8a88] leading-relaxed mt-1">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Column 3: QUOTE & CALLOUT (3 cols) Maroon Red Block */}
          <div className="lg:col-span-3 flex flex-col justify-between p-8 bg-[#180507] border border-[#3b0d12] rounded-sm text-white">
            <div>
              <Quote size={36} className="text-[#e32b3c] mb-6 opacity-80" />
              <blockquote className="text-lg font-medium leading-snug tracking-tight text-white/95 mb-6">
                “Good design is not just how it looks, but how it works and scales.”
              </blockquote>
              <p className="font-handwriting text-3xl text-white/90 italic tracking-wide">
                Robin
              </p>
            </div>

            <div className="pt-8 border-t border-[#3a1015] mt-10">
              <p className="text-[9px] uppercase tracking-widest font-bold text-[#e32b3c] mb-1">
                LET&apos;S CREATE
              </p>
              <p className="text-xs font-bold uppercase tracking-wider text-white">
                SOMETHING GREAT TOGETHER.
              </p>
              <div className="w-3 h-3 text-[#e32b3c] mt-4 font-bold">+</div>
            </div>
          </div>

        </div>
      </section>

      {/* ===================== LET'S WORK TOGETHER (CONTACT) ===================== */}
      <section id="contact" className="py-16 sm:py-20 px-4 sm:px-8 lg:px-14 border-b border-[#1f1a1a]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
                  LET&apos;S WORK
                </h2>
                <Sparkles size={18} className="text-[#e32b3c]" />
              </div>
              <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none mt-1">
                TOGETHER
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-[#8e8a88] max-w-md leading-relaxed">
              I&apos;m currently open for new projects and collaborations. Let&apos;s create something amazing that drives real measurable results.
            </p>

            {/* Contact details list */}
            <div className="space-y-3.5 pt-2">
              <a
                href="mailto:mr.robinsyaifuddin@gmail.com"
                className="flex items-center gap-3.5 text-xs text-[#a09c9a] hover:text-white transition-colors"
              >
                <span className="w-8 h-8 rounded-full bg-[#121212] border border-[#242424] flex items-center justify-center text-[#e32b3c]">
                  <Mail size={13} />
                </span>
                <span>mr.robinsyaifuddin@gmail.com</span>
              </a>

              <a
                href="https://digibooster.web.id"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 text-xs text-[#a09c9a] hover:text-white transition-colors"
              >
                <span className="w-8 h-8 rounded-full bg-[#121212] border border-[#242424] flex items-center justify-center text-[#e32b3c]">
                  <Globe size={13} />
                </span>
                <span>www.digibooster.web.id</span>
              </a>

              <a
                href="https://wa.me/62887437525303"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 text-xs text-[#a09c9a] hover:text-white transition-colors"
              >
                <span className="w-8 h-8 rounded-full bg-[#121212] border border-[#242424] flex items-center justify-center text-[#e32b3c]">
                  <Phone size={13} />
                </span>
                <span>+62 887-4375-25303 (WhatsApp)</span>
              </a>

              <div className="flex items-center gap-3.5 text-xs text-[#a09c9a]">
                <span className="w-8 h-8 rounded-full bg-[#121212] border border-[#242424] flex items-center justify-center text-[#e32b3c]">
                  <MapPin size={13} />
                </span>
                <span>Lampung / Banten, Indonesia</span>
              </div>
            </div>

            {/* Red Available pill / button */}
            <div className="pt-4">
              <a
                href="https://wa.me/62887437525303"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#e32b3c] text-[10px] uppercase tracking-widest font-semibold text-[#e32b3c] hover:bg-[#e32b3c] hover:text-white transition-all"
              >
                <ArrowRight size={12} />
                <span>AVAILABLE FOR FREELANCE</span>
              </a>
            </div>
          </div>

          {/* Right: Workspace & Laptop Mockup Visual */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md p-6 bg-[#0c0c0c] border border-[#1f1a1a] rounded-sm">
              <div className="flex items-center justify-between pb-4 border-b border-[#1f1a1a] text-[10px] text-[#666]">
                <span className="flex items-center gap-1.5 text-white font-mono">
                  <Laptop size={12} className="text-[#e32b3c]" /> ROBIN WORKSPACE
                </span>
                <span className="text-[#e32b3c] font-semibold">ONLINE</span>
              </div>

              <div className="my-6 aspect-video bg-[#050505] border border-[#222] rounded flex flex-col justify-between p-4 relative overflow-hidden group">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#e32b3c]/20 blur-3xl pointer-events-none" />
                <div className="text-[10px] uppercase tracking-wider text-[#e32b3c] font-bold">
                  WE BUILD DIGITAL EXPERIENCES
                </div>
                <div className="space-y-1">
                  <p className="font-display text-xl sm:text-2xl text-white tracking-tight leading-none">
                    ENGINEERED TO GROW
                  </p>
                  <p className="text-[9px] text-[#777]">
                    Modern Full Stack • High Conversion • Zero Clutter
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="h-1.5 w-8 bg-[#e32b3c] rounded-full" />
                  <span className="h-1.5 w-3 bg-[#333] rounded-full" />
                </div>
              </div>

              <div className="flex justify-between items-center text-[10px] text-[#777] pt-2">
                <span>Code, Coffee & Craft</span>
                <a
                  href="mailto:mr.robinsyaifuddin@gmail.com"
                  className="text-white hover:text-[#e32b3c] font-semibold flex items-center gap-1"
                >
                  Send Inquiry →
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="py-8 px-4 sm:px-8 lg:px-14 bg-[#050505] text-[10px] text-[#666] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-white font-display text-sm tracking-wider">ROBIN SYAIFUDDIN</span> • © {new Date().getFullYear()} All Rights Reserved.
        </div>
        <div className="flex gap-6">
          <a href="#projects" className="hover:text-white transition-colors">SELECTED PROJECTS</a>
          <a href="#contact" className="hover:text-white transition-colors">CONTACT</a>
          <a href="https://github.com/robinsyaifuddin" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GITHUB</a>
        </div>
      </footer>

      {/* ===================== PROJECT DETAIL MODAL ===================== */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0c0c0c] border border-[#2a2a2a] max-w-lg w-full p-6 sm:p-8 relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 text-[#777] hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <span className="text-[10px] font-mono font-bold text-[#e32b3c]">
                PROJECT {selectedProject.num} // {selectedProject.year}
              </span>
              <h3 className="text-2xl font-display uppercase tracking-tight text-white mt-1 mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-xs text-[#a09c9a] mb-6 leading-relaxed">
                {selectedProject.summary}
              </p>

              <div className="space-y-3 text-xs mb-6 border-t border-b border-[#1f1a1a] py-4">
                <div>
                  <span className="text-white font-semibold">Dampak / Value:</span>{" "}
                  <span className="text-[#a09c9a]">{selectedProject.impact}</span>
                </div>
                <div>
                  <span className="text-white font-semibold">Stack:</span>{" "}
                  <span className="text-[#e32b3c]">{selectedProject.tech.join(", ")}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 bg-[#e32b3c] hover:bg-[#c92030] text-white text-[11px] uppercase tracking-wider font-semibold text-center flex items-center justify-center gap-1.5 transition-colors"
                >
                  Visit Live Site <ExternalLink size={13} />
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 border border-[#333] hover:border-white text-[11px] uppercase tracking-wider font-semibold text-white transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
