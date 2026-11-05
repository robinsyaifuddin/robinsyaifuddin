"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { MusicToggle } from "@/components/MusicToggle";
import { TACTILE_EASE } from "@/lib/motion";
import {
  ArrowRight,
  Download,
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
];

const SKILLS_PILLS = [
  "PROMPT ARCHITECTURE",
  "AI AGENT WORKSPACES",
  "VIBE CODING / RAPID DEV",
  "NEXT.JS & REACT",
  "AUTOMATION WORKFLOWS",
  "SYSTEM ARCHITECTURE",
  "TYPESCRIPT",
  "TAILWIND CSS",
  "NODE.JS & APIS",
  "SUPABASE / SQL",
  "UI/UX & DESIGN SYSTEM",
];

const WORK_STEPS = [
  {
    num: "01",
    icon: Search,
    title: "DISCOVER & LOGIC",
    desc: "Menganalisis kebutuhan sistem, memetakan flow logika, dan merancang system prompt presisi.",
  },
  {
    num: "02",
    icon: Lightbulb,
    title: "VIBE PROTOTYPING",
    desc: "Perancangan arsitektur AI agent, automasi data, dan wireframing antarmuka fungsional.",
  },
  {
    num: "03",
    icon: Palette,
    title: "TACTILE DESIGN",
    desc: "Mendesain visual modern anti-slop dengan tipografi bersih, responsive UX, dan interaksi mulus.",
  },
  {
    num: "04",
    icon: Code2,
    title: "BUILD & INTEGRATE",
    desc: "Menyusun kode web app cepat, secure, scalable, serta integrasi tool/API ke dalam AI workspace.",
  },
  {
    num: "05",
    icon: Send,
    title: "DEPLOY & SCALE",
    desc: "Cloud deployment, audit Web Vitals, testing performa, dan optimasi workflow agar siap jalan 24/7.",
  },
];

const STATS = [
  { value: "3+", label: "YEARS TECH BASE" },
  { value: "20+", label: "APPS & WORKFLOWS" },
  { value: "100%", label: "PRODUCTION READY" },
];

const SKILL_BARS = [
  { name: "WEB DEVELOPMENT", level: 95 },
  { name: "AI & WORKFLOW AUTOMATION", level: 90 },
  { name: "UI/UX & DIGITAL BRANDING", level: 85 },
  { name: "DIGITAL MARKETING & SEO", level: 80 },
];

export default function Index() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  return (
    <div className="bg-[#06080d] text-[#f1f5f9] font-sans min-h-screen selection:bg-[#0da2e7] selection:text-white overflow-x-hidden">
      
      {/* ===================== HERO SECTION ===================== */}
      {/* Fully responsive editorial hero for Desktop, Tablet, and Mobile */}
      <section className="relative w-full min-h-0 md:min-h-[92vh] lg:min-h-screen lg:max-h-[1080px] bg-[#06080d] flex flex-col justify-between overflow-hidden px-4 sm:px-8 lg:px-14 pt-4 sm:pt-6 lg:pt-8 pb-3 md:pb-4">
        
        {/* Subtle Ambient Electric Blue Glow in background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] lg:w-[850px] h-[350px] sm:h-[600px] lg:h-[850px] bg-[radial-gradient(circle_at_center,rgba(13,162,231,0.18)_0%,transparent_65%)] pointer-events-none blur-3xl z-0" />

        {/* Top Header Row / Navbar */}
        <div className="relative w-full flex items-center justify-between text-[10px] sm:text-xs tracking-[0.16em] sm:tracking-[0.2em] uppercase font-bold z-30">
          <div className="flex items-center">
            {/* Logo favicon clean untuk semua resolusi (mobile & desktop) */}
            <a href="#" className="flex items-center gap-2 group">
              <img
                src="/favicon-clean.png"
                alt="Robin Syaifuddin"
                className="h-8 sm:h-10 lg:h-11 w-auto object-contain hover:opacity-90 transition-opacity duration-300"
              />
            </a>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-3">
            <MusicToggle showText={true} />
            <div className="hidden xs:flex items-center gap-1.5 sm:gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0da2e7] animate-pulse" />
              <span className="text-white/80 tracking-[0.14em] sm:tracking-[0.2em] text-[8px] sm:text-[11px] font-semibold">
                AVAILABLE FOR COLLABORATION
              </span>
              <span className="hidden sm:inline text-[#0da2e7] text-xs sm:text-sm font-bold leading-none select-none">✦</span>
            </div>
          </div>
        </div>

        {/* Center Canvas: 3-Kolom Side-by-Side (Kiri: Bio & Nama, Tengah: Foto, Kanan: Stats Vertikal) */}
        <div className="relative w-full flex-1 flex flex-row items-start md:items-center justify-between my-2 sm:my-3 md:my-0 min-h-0 pb-3 sm:pb-5 md:pb-0">
          
          {/* Giant PORTFOLIO Backdrop Text */}
          <div
            className="absolute inset-x-0 top-10 md:top-1/2 md:-translate-y-1/2 flex items-center justify-center pointer-events-none select-none z-0"
          >
            <span className="font-display font-black uppercase tracking-[-0.03em] text-[27vw] sm:text-[23vw] md:text-[22vw] lg:text-[20vw] leading-none scale-y-105 bg-gradient-to-b from-[#0ea5e9] via-[#0369a1] to-[#07090e] bg-clip-text text-transparent opacity-95 drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
              PORTFOLIO
            </span>
          </div>

          {/* SISI KIRI: Hello, I'm Robin Syaifuddin + Bio + Tombol (Diturunkan sedikit agar lega dan pas) */}
          <div
            className="relative z-20 w-[42%] xs:w-[40%] sm:w-auto md:max-w-xs lg:max-w-md pointer-events-auto text-left pt-0 self-start mt-7 sm:mt-12 md:self-end md:bottom-6 lg:bottom-12"
          >
            <p className="font-handwriting text-lg xs:text-xl sm:text-3xl lg:text-4xl text-[#0da2e7] italic mb-0.5 sm:mb-1 tracking-wide drop-shadow-[0_0_12px_rgba(13,162,231,0.35)]">
              Hello, I&apos;m
            </p>
            <h1 className="font-display uppercase text-2xl xs:text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl text-white tracking-tight leading-[0.92] drop-shadow-[0_4px_14px_rgba(0,0,0,0.85)] font-black">
              ROBIN <br />
              SYAIFUDDIN<span className="text-[#0da2e7]">.</span>
            </h1>
            
            <div className="mt-1.5 sm:mt-3 mb-1.5 sm:mb-2.5">
              <p className="text-[9px] xs:text-[10px] sm:text-xs lg:text-sm text-[#0da2e7] font-black tracking-[0.14em] sm:tracking-[0.2em] uppercase leading-tight">
                AI PRODUCT BUILDER &amp; WORKFLOW SPECIALIST
              </p>
            </div>

            <p className="text-[10px] xs:text-[11px] sm:text-[13px] lg:text-sm text-[#94a3b8] leading-snug sm:leading-relaxed mb-3 sm:mb-4 max-w-sm lg:max-w-[380px]">
              Membantu bisnis &amp; kreator mewujudkan ide menjadi web application modern dan sistem AI Agent otomatis—cepat, presisi, dan fungsional.
            </p>

            {/* CTA Button & Links */}
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <a
                href="#projects"
                className="whitespace-nowrap bg-[#0da2e7] hover:bg-[#0284c7] text-white py-1.5 xs:py-2 px-2.5 xs:px-3 text-center font-bold text-[10px] xs:text-xs uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-1.5 shadow-lg shadow-[#0da2e7]/20 active:scale-[0.98] shrink-0"
              >
                <span className="whitespace-nowrap">Lihat karya</span>
                <span className="text-xs">↓</span>
              </a>
              <a
                href="#contact"
                aria-label="Kontak pesan"
                className="w-7 h-7 xs:w-8 xs:h-8 border border-white/15 bg-white/5 rounded-sm flex items-center justify-center text-white/80 hover:text-white hover:border-[#0da2e7] transition-colors shrink-0 active:scale-[0.98]"
              >
                <Send size={12} />
              </a>
            </div>

            {/* Worldwide tag (Desktop/tablet only) */}
            <div className="hidden sm:inline-flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs tracking-[0.14em] sm:tracking-[0.18em] uppercase text-white/80 font-bold">
              <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border border-white/30 flex items-center justify-center text-[8px] text-[#0da2e7]">
                ◎
              </span>
              <span>AVAILABLE WORLDWIDE</span>
            </div>
          </div>

          {/* TENGAH: Foto Portrait Cutout - Diturunkan sedikit dari navbar */}
          <div
            className="relative md:absolute left-0 md:left-1/2 md:-translate-x-1/2 top-5 sm:top-5 md:top-auto md:bottom-0 z-10 w-[240px] xs:w-[270px] sm:w-[340px] md:w-[380px] lg:w-[480px] xl:w-[560px] max-h-[50vh] sm:max-h-[60vh] md:max-h-[70vh] lg:max-h-[78vh] flex items-end justify-center pointer-events-none -mx-10 xs:-mx-8 sm:mx-0"
          >
            <img
              src="/profil-icon.png"
              alt="Robin Syaifuddin"
              fetchPriority="high"
              decoding="async"
              className="w-full h-auto max-h-[50vh] sm:max-h-[60vh] md:max-h-[70vh] lg:max-h-[78vh] object-contain object-bottom filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)]"
            />
            {/* Natural bottom fade into the dark background */}
            <div className="absolute inset-x-0 bottom-0 h-14 sm:h-24 bg-gradient-to-t from-[#06080d] via-[#06080d]/85 to-transparent" />
          </div>

          {/* SISI KANAN: Stats Vertikal (Diturunkan sedikit sejajar bahu) */}
          <div
            className="relative z-20 flex flex-col space-y-2.5 sm:space-y-4 md:space-y-4 pointer-events-auto text-left max-w-[85px] xs:max-w-[95px] sm:max-w-[130px] md:max-w-none self-start mt-8 sm:mt-14 md:self-end md:bottom-6 lg:bottom-12"
          >
            
            {/* Stat 1 */}
            <div className="flex flex-col border-b border-[#151f2e]/80 pb-2 md:pb-3">
              <span className="font-display text-xl xs:text-2xl sm:text-3xl lg:text-[2.8rem] text-[#0da2e7] font-black leading-none drop-shadow-[0_2px_10px_rgba(13,162,231,0.25)]">
                3+
              </span>
              <span className="text-[7px] xs:text-[7.5px] sm:text-[9.5px] lg:text-[10px] text-white/70 tracking-[0.12em] uppercase font-bold leading-tight mt-1">
                TAHUN DI INDUSTRI<br />KREATIF &amp; TECH
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col border-b border-[#151f2e]/80 pb-2 md:pb-3">
              <span className="font-display text-xl xs:text-2xl sm:text-3xl lg:text-[2.8rem] text-[#0da2e7] font-black leading-none drop-shadow-[0_2px_10px_rgba(13,162,231,0.25)]">
                20+
              </span>
              <span className="text-[7px] xs:text-[7.5px] sm:text-[9.5px] lg:text-[10px] text-white/70 tracking-[0.12em] uppercase font-bold leading-tight mt-1">
                PROYEK APPS<br />&amp; AUTOMATION
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col">
              <span className="font-display text-xl xs:text-2xl sm:text-3xl lg:text-[2.8rem] text-[#0da2e7] font-black leading-none drop-shadow-[0_2px_10px_rgba(13,162,231,0.25)]">
                100%
              </span>
              <span className="text-[7px] xs:text-[7.5px] sm:text-[9.5px] lg:text-[10px] text-white/70 tracking-[0.12em] uppercase font-bold leading-tight mt-1">
                PRODUCTION<br />READY &amp; TESTED
              </span>
            </div>

          </div>

          {/* Right Top Badge (Desktop only) */}
          <div
            className="absolute right-0 lg:right-4 top-[10%] lg:top-[14%] -translate-y-1/2 z-20 hidden lg:flex items-center gap-3 max-w-[240px]"
          >
            <div className="w-10 h-10 rounded-full border border-[#0da2e7]/40 flex items-center justify-center text-[#0da2e7] bg-[#06080d]/80 backdrop-blur-sm shrink-0 shadow-[0_0_15px_rgba(13,162,231,0.2)]">
              <span className="text-sm font-bold">✦</span>
            </div>
            <p className="text-xs text-[#94a3b8] leading-snug">
              Turning prompts &amp; logic into scalable digital products.
            </p>
          </div>

        </div>

        {/* Bottom subtle note / scroll cue */}
        <div className="w-full flex items-center justify-between pt-2 border-t border-[#121824]/60 text-[9px] sm:text-[10px] tracking-wider text-[#64748b] z-20 mt-1 md:mt-0">
          <span>PORTFOLIO EDITORIAL // EDITION 2026</span>
          <span className="hidden sm:inline">ROBIN SYAIFUDDIN • AI PRODUCT ARCHITECTURE</span>
        </div>
      </section>

      {/* ===================== ABOUT ME & SKILLS SECTION (Tepat di bawah Hero) ===================== */}
      <section className="py-6 sm:py-10 lg:py-20 px-4 sm:px-8 lg:px-14 border-b border-[#121824] bg-[#07090e]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 items-start">
          
          {/* Sisi Kiri: About Me (Quote + Deskripsi + Tanda Tangan) */}
          <Reveal direction="up" distance={30} className="md:col-span-12 lg:col-span-7 flex flex-col justify-between pr-0 lg:pr-8 h-full">
            <div>
              <span className="text-[#0da2e7] text-xs font-bold tracking-[0.2em] uppercase block mb-2 sm:mb-3">
                ABOUT ME
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white leading-[1.15] mb-3 sm:mb-5 font-sans">
                DESIGNING IMPACTFUL DIGITAL PRODUCTS WITH AI &amp; PASSION.
              </h2>
              <p className="text-[#94a3b8] text-xs sm:text-sm md:text-base leading-relaxed max-w-xl font-normal">
                Penggiat teknologi, AI product builder, dan web developer yang berfokus menciptakan produk digital berdaya guna tinggi, sistem automasi alur kerja modern, serta solusi berdampak nyata bagi kemajuan bisnis dan masyarakat.
              </p>
            </div>

            {/* Signature style */}
            <div className="pt-4 sm:pt-6 lg:pt-8">
              <span className="font-handwriting text-2xl sm:text-3xl md:text-4xl text-[#0da2e7] tracking-wider select-none">
                Robin Syaifuddin
              </span>
            </div>
          </Reveal>

          {/* Container 2 Kolom untuk Foto & Skill Bars (Di mobile berdampingan 2 kolom, desktop tetap rapi sesuai grid) */}
          <Reveal direction="up" delay={0.15} distance={30} className="md:col-span-12 lg:col-span-5 grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-stretch pt-4 lg:pt-0 lg:border-l lg:border-[#151f2e] lg:pl-6">
            
            {/* Kolom Kiri: Foto Profile Portrait dengan Accent Box Biru */}
            <div className="col-span-5 sm:col-span-4 lg:col-span-5 flex items-start justify-center">
              <div className="relative w-full aspect-[4/5] max-w-[150px] lg:max-w-[170px] rounded-none">
                {/* Backing accent box warna biru web */}
                <div className="absolute -inset-1 sm:-inset-1.5 bg-[#0da2e7] -z-10 translate-x-1.5 translate-y-1.5 sm:translate-x-2 sm:translate-y-2 opacity-90" />
                <div className="relative w-full h-full overflow-hidden bg-[#0c1017] border border-[#1f2d42]">
                  <Image
                    src="/profil-about.png"
                    alt="Robin Syaifuddin"
                    fill
                    sizes="(max-width: 768px) 140px, 170px"
                    className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Kolom Kanan: Skill Bars & Download Resume */}
            <div className="col-span-7 sm:col-span-8 lg:col-span-7 flex flex-col justify-between pl-1 sm:pl-3 lg:pl-0 border-l border-[#151f2e] lg:border-l-0">
              <div className="space-y-2.5 sm:space-y-3 mb-4">
                {SKILL_BARS.map((skill, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between items-center text-[9px] sm:text-[10px] lg:text-[11px] tracking-wider leading-none">
                      <span className="font-bold text-white uppercase truncate pr-1">
                        {skill.name}
                      </span>
                      <span className="text-[#94a3b8] font-mono shrink-0">
                        {skill.level}%
                      </span>
                    </div>
                    {/* Progress Bar with Web Blue Accent */}
                    <div className="w-full h-1 bg-[#151f2e] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.2 + idx * 0.1, ease: TACTILE_EASE }}
                        className="h-full bg-[#0da2e7]"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button: Download Resume */}
              <div className="pt-1">
                <a
                  href="/about"
                  className="w-full inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-2 sm:py-2.5 border border-[#1f2d42] hover:border-[#0da2e7] hover:bg-[#0da2e7]/10 text-white text-[9px] sm:text-[11px] font-semibold uppercase tracking-[0.12em] sm:tracking-[0.15em] transition-all duration-200 group active:scale-[0.98]"
                >
                  <span>DOWNLOAD RESUME</span>
                  <Download size={12} className="text-[#0da2e7] group-hover:translate-y-0.5 transition-transform duration-200 shrink-0" />
                </a>
              </div>
            </div>

          </Reveal>

        </div>
      </section>

      {/* ===================== EDUCATION & SKILLS + WORK PROCESS + QUOTE ===================== */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-14 border-b border-[#121824]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Column 1: EDUCATION & SKILLS (4 cols) */}
          <Reveal direction="up" delay={0.05} distance={24} className="lg:col-span-4 pr-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-[#121824] pb-8 lg:pb-0">
            <h2 className="text-xs sm:text-sm uppercase tracking-widest font-bold text-white mb-6 sm:mb-8 pb-3 border-b border-[#121824]">
              EDUCATION &amp; SKILLS
            </h2>

            {/* Education Subheading */}
            <p className="text-[10px] font-bold tracking-widest uppercase text-[#0da2e7] mb-3 sm:mb-4">
              EDUCATION
            </p>

            <div className="space-y-4 sm:space-y-5 mb-8 sm:mb-10">
              {EDUCATION_ITEMS.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start gap-3 sm:gap-4">
                  <div>
                    <h3 className="text-xs font-semibold text-white leading-snug">
                      {edu.degree}
                    </h3>
                    <p className="text-[11px] text-[#777] mt-0.5">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-mono text-[#0da2e7] shrink-0 font-medium">
                    {edu.period}
                  </span>
                </div>
              ))}
            </div>

            {/* Skills Subheading */}
            <p className="text-[10px] font-bold tracking-widest uppercase text-[#0da2e7] mb-3 sm:mb-4">
              SKILLS
            </p>

            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {SKILLS_PILLS.map((skill) => (
                <span
                  key={skill}
                  className="text-[9px] font-semibold tracking-wider uppercase px-2.5 py-1.5 bg-[#0b0f16] text-[#94a3b8] border border-[#172233] hover:border-[#0da2e7] hover:text-white transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Column 2: WORK PROCESS (5 cols) */}
          <Reveal direction="up" delay={0.15} distance={24} className="lg:col-span-5 px-0 lg:px-6 border-b lg:border-b-0 lg:border-r border-[#121824] pb-8 lg:pb-0">
            <h2 className="text-xs sm:text-sm uppercase tracking-widest font-bold text-white mb-6 sm:mb-8 pb-3 border-b border-[#121824]">
              WORK PROCESS
            </h2>

            {/* Timeline Vertical Process */}
            <div className="space-y-5 sm:space-y-6 relative before:absolute before:left-[17px] sm:before:left-[19px] before:top-4 before:bottom-4 before:w-[1px] before:bg-[#1a2536]">
              {WORK_STEPS.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + idx * 0.08, ease: TACTILE_EASE }}
                    className="flex items-start gap-3.5 sm:gap-4 relative"
                  >
                    <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#090d14] border border-[#192435] text-[#0da2e7] flex items-center justify-center shrink-0 z-10 transition-colors duration-300 hover:border-[#0da2e7] hover:bg-[#0da2e7]/10">
                      <IconComponent size={14} />
                    </span>
                    <div className="pt-0.5 sm:pt-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-[#0da2e7] font-bold">
                          {step.num}
                        </span>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[#0da2e7]">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-[11px] text-[#8b9bb4] leading-relaxed mt-0.5 sm:mt-1">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </Reveal>

          {/* Column 3: QUOTE & CALLOUT (3 cols) Deep Azure Block */}
          <Reveal direction="up" delay={0.25} distance={24} className="lg:col-span-3 flex flex-col justify-between p-5 sm:p-7 bg-[#07131e] border border-[#0d2a42] rounded-sm text-white">
            <div>
              <Quote size={28} className="text-[#0da2e7] mb-3 sm:mb-4 opacity-80" />
              <blockquote className="text-base sm:text-xl font-semibold leading-snug tracking-tight text-white mb-4">
                “Bukan tentang mengetik ribuan baris kode, tapi mengorkestrasi logika dan AI menjadi solusi nyata.”
              </blockquote>
              <div className="inline-block pb-1 border-b border-[#0da2e7]/50">
                <p className="font-handwriting text-xl sm:text-2xl text-white/90 italic tracking-wide">
                  Robin Syaifuddin
                </p>
              </div>
            </div>

            <div className="pt-4 sm:pt-5 border-t border-[#0e314e] mt-6">
              <p className="text-[9px] uppercase tracking-widest font-bold text-[#0da2e7] mb-1">
                LET&apos;S AUTOMATE &amp; BUILD
              </p>
              <p className="text-xs font-bold uppercase tracking-wider text-white">
                SCALABLE AI SOLUTIONS.
              </p>
              <div className="w-3 h-3 text-[#0da2e7] mt-2 font-bold">+</div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* ===================== SELECTED PROJECTS ===================== */}
      <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-14 border-b border-[#121824]">
        {/* Section Header */}
        <Reveal direction="up" distance={20} className="flex items-center justify-between pb-6 sm:pb-8 border-b border-[#121824]">
          <h2 className="text-xs sm:text-sm uppercase tracking-widest font-bold text-white flex items-center gap-2">
            SELECTED PROJECTS
          </h2>
          <Link
            href="/portfolio"
            className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold text-[#8b9bb4] hover:text-[#0da2e7] transition-colors flex items-center gap-1.5"
          >
            VIEW ALL PROJECTS <ArrowRight size={13} />
          </Link>
        </Reveal>

        {/* 3 Projects Row (Responsive Grid: 1 col on mobile, 2 on tablet, 3 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-10">
          {PROJECTS.map((proj, idx) => (
            <Reveal
              key={proj.id}
              direction="up"
              distance={28}
              delay={idx * 0.1}
              duration={0.7}
              className="h-full"
            >
              <div
                onClick={() => setSelectedProject(proj)}
                className="group cursor-pointer flex flex-col justify-between h-full transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Card Visual Preview Box */}
                <div
                  className={`relative aspect-[16/10] sm:aspect-[4/3] rounded-sm overflow-hidden p-5 sm:p-6 flex flex-col justify-between border transition-all duration-300 group-hover:border-[#0da2e7] group-hover:shadow-[0_8px_30px_rgba(13,162,231,0.12)] ${
                    proj.theme === "light"
                      ? "bg-[#e5e0d8] text-[#111] border-[#333]"
                      : proj.theme === "dark-blue"
                      ? "bg-gradient-to-br from-[#0b1926] to-[#070e17] text-white border-[#13273c]"
                      : "bg-[#0b0f16] text-white border-[#16202e]"
                  }`}
                >
                  {/* Header within preview */}
                  <div className="flex justify-between items-center text-[9px] uppercase tracking-wider opacity-70">
                    <span className="font-semibold">{proj.category}</span>
                    <span>{proj.year}</span>
                  </div>

                  {/* Big Preview Title inside mockup */}
                  <div className="my-auto py-2">
                    <p className="text-[9px] sm:text-[10px] tracking-widest uppercase opacity-60 font-semibold mb-1">
                      {proj.subtitle}
                    </p>
                    <h3 className="font-display text-xl sm:text-2xl lg:text-3xl uppercase tracking-tight leading-tight">
                      {proj.title}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] mt-1.5 opacity-80 line-clamp-2">
                      {proj.tagline}
                    </p>
                  </div>

                  {/* Footer preview */}
                  <div className="flex justify-between items-center text-[9px] pt-3 border-t border-current/15">
                    <span className="font-mono">{proj.tech.slice(0, 2).join(" • ")}</span>
                    <ExternalLink size={12} className="opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>

                {/* Bottom Caption: 01 TITLE / CATEGORY -> */}
                <div className="flex items-center justify-between pt-3 sm:pt-4 mt-1 border-t border-[#131c2a]">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-lg sm:text-2xl font-bold text-[#0da2e7]">
                      {proj.num}
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-white tracking-wider uppercase group-hover:text-[#0da2e7] transition-colors">
                        {proj.title}
                      </h4>
                      <p className="text-[10px] text-[#777] uppercase tracking-wider">
                        {proj.subtitle}
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    size={15}
                    className="text-[#555] group-hover:text-[#0da2e7] group-hover:translate-x-1 transition-all"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom Centered [VIEW ALL PROJECTS] Button */}
        <Reveal direction="up" delay={0.2} distance={20} className="mt-10 sm:mt-12 flex justify-center">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2.5 px-6 py-3 bg-[#0b101a] hover:bg-[#0da2e7] border border-[#162238] hover:border-[#0da2e7] text-white text-xs font-mono font-bold uppercase tracking-widest rounded-sm transition-all duration-200 active:scale-[0.98] shadow-sm hover:shadow-md hover:shadow-[#0da2e7]/20"
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </Reveal>
      </section>

      {/* ===================== PROJECT DETAIL MODAL ===================== */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0b0f17] border border-[#1b2637] max-w-lg w-full p-6 sm:p-8 relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 text-[#777] hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <span className="text-[10px] font-mono font-bold text-[#0da2e7]">
                PROJECT {selectedProject.num} // {selectedProject.year}
              </span>
              <h3 className="text-2xl font-display uppercase tracking-tight text-white mt-1 mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-xs text-[#94a3b8] mb-6 leading-relaxed">
                {selectedProject.summary}
              </p>

              <div className="space-y-3 text-xs mb-6 border-t border-b border-[#151f2e] py-4">
                <div>
                  <span className="text-white font-semibold">Dampak / Value:</span>{" "}
                  <span className="text-[#94a3b8]">{selectedProject.impact}</span>
                </div>
                <div>
                  <span className="text-white font-semibold">Stack:</span>{" "}
                  <span className="text-[#0da2e7]">{selectedProject.tech.join(", ")}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 bg-[#0da2e7] hover:bg-[#0883bd] text-white text-[11px] uppercase tracking-wider font-semibold text-center flex items-center justify-center gap-1.5 transition-colors"
                >
                  Visit Live Site <ExternalLink size={13} />
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 border border-[#1f2d42] hover:border-white text-[11px] uppercase tracking-wider font-semibold text-white transition-colors"
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
