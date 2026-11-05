"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import {
  ArrowUpRight,
  Download,
  Laptop,
  Quote,
  Mail,
  Phone,
  MapPin,
  Send,
  ChevronLeft,
  ChevronRight,
  Search,
  Lightbulb,
  Palette,
  Code2,
} from "lucide-react";

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

const skills = [
  { name: "WEB DEVELOPMENT", level: 95 },
  { name: "AI & WORKFLOW AUTOMATION", level: 90 },
  { name: "UI/UX & DIGITAL BRANDING", level: 85 },
  { name: "DIGITAL MARKETING & SEO", level: 80 },
];

const partners = [
  "DIGIBOOSTER",
  "DESA FAJAR BARU",
  "REKALAND",
  "AEROFOOD ACS",
  "ITERA",
  "GENRE",
];

const TESTIMONIALS = [
  {
    quote:
      "Robin adalah developer yang sangat adaptif dan berorientasi solusi. Pengerjaan website cepat, kode bersih, dan integrasi automasi sistemnya sangat membantu operasional kami.",
    name: "Ahmad Fauzi",
    role: "Founder, DigiBooster Partner",
    avatar: "/profil-icon.png",
  },
  {
    quote:
      "Pengembangan portal desa oleh Robin sangat mempercepat akses informasi & administrasi ribuan warga. Desainnya modern, responsif, dan mudah digunakan.",
    name: "Perangkat Desa",
    role: "Admin Pelayanan Publik, Desa Fajar Baru",
    avatar: "/favicon.png",
  },
  {
    quote:
      "Kombinasi kemampuan AI workflow automation dan vibe coding yang luar biasa. Proyek selesai tepat waktu dengan standar tampilan modern anti-slop.",
    name: "Reka Partner",
    role: "Digital Specialist, Rekaland ID",
    avatar: "/profil-icon.png",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <footer className="relative w-full bg-[#07090e] text-[#f1f5f9] border-t border-[#151f2e] overflow-hidden">
      {/* Container utama */}
      <div className="max-w-[1536px] w-full mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 lg:py-20 space-y-12 sm:space-y-16 lg:space-y-20">

        {/* SECTION 2: TRUSTED BY / PARTNERS (Middle Ribbon) */}
        <Reveal direction="up" distance={20} className="py-4 sm:py-6 border-b border-[#151f2e] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-y-3 gap-x-8">
          <div className="flex items-center gap-2">
            <span className="text-[#0da2e7] text-xs font-bold tracking-[0.2em] uppercase">
              TRUSTED BY
            </span>
          </div>
          <div className="w-full sm:w-auto flex-1 flex flex-wrap items-center justify-start sm:justify-end gap-x-6 sm:gap-x-12 gap-y-2 sm:gap-y-3">
            {partners.map((partner, idx) => (
              <span
                key={idx}
                className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#94a3b8] hover:text-white transition-colors cursor-default"
              >
                {partner}
              </span>
            ))}
          </div>
        </Reveal>

        {/* SECTION 3: CTA HERO BLOCK & ROBIN AI LAB WORKSPACE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch pb-10 sm:pb-14 border-b border-[#151f2e]">
          
          {/* Big Blue Banner CTA (Let's Create Something Great Together) - 7 cols */}
          <Reveal direction="up" distance={28} delay={0.1} className="lg:col-span-7 flex flex-col">
            <div className="h-full text-white p-6 sm:p-10 lg:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative group overflow-hidden bg-center bg-cover bg-no-repeat rounded-sm" style={{ backgroundImage: "url('/picture-background.png')" }}>
              {/* Gradasi gelap sekeliling (vignette ditebalkan sedikit) */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.65)_100%)] pointer-events-none z-0" />
              
              {/* Gradasi gelap dominan dari bawah (ditebalkan dan lebih pekat) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent pointer-events-none z-0" />

              {/* Lapisan biru di atas background (~50% transparansi) */}
              <div className="absolute inset-0 bg-[#0da2e7]/50 pointer-events-none z-0" />

              <div className="relative z-10 max-w-md">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight leading-[1.05] font-sans">
                  LET&apos;S CREATE SOMETHING GREAT TOGETHER.
                </h3>
              </div>
              
              {/* Circular Arrow Button with hover physics */}
              <a
                href="#contact"
                aria-label="Menuju formulir pesan"
                className="relative z-10 w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-white text-[#0da2e7] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <ArrowUpRight
                  size={28}
                  strokeWidth={2.2}
                  className="sm:w-[34px] sm:h-[34px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
                />
              </a>

              {/* Subtle background decoration with low opacity */}
              <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            </div>
          </Reveal>

          {/* Sisi Kanan: ROBIN AI LAB // WORKSPACE - 5 cols */}
          <Reveal direction="up" distance={28} delay={0.2} className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative w-full p-4 sm:p-6 bg-[#090d15] border border-[#151f2e] rounded-sm flex flex-col justify-between h-full">
              {/* Header card */}
              <div className="flex items-center justify-between pb-3 border-b border-[#151f2e] text-[10px] text-[#64748b]">
                <span className="flex items-center gap-1.5 text-white font-mono uppercase tracking-wider text-[10px] sm:text-[11px]">
                  <Laptop size={13} className="text-[#0da2e7]" /> ROBIN AI LAB // WORKSPACE
                </span>
                <span className="text-[#0da2e7] font-semibold tracking-widest text-[9px] sm:text-[10px]">ONLINE</span>
              </div>

              {/* Inner screen mockup */}
              <div className="my-3 sm:my-4 aspect-[16/9] bg-[#05080e] border border-[#162030] rounded flex flex-col justify-between p-3.5 sm:p-5 relative overflow-hidden group">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#0da2e7]/20 blur-3xl pointer-events-none" />
                <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#0da2e7] font-bold">
                  AI-POWERED PRODUCT CRAFT
                </div>
                <div className="space-y-1 sm:space-y-1.5">
                  <p className="font-display text-lg sm:text-2xl text-white tracking-tight leading-none">
                    RAPID. FUNCTIONAL. SCALABLE.
                  </p>
                  <p className="text-[9px] sm:text-[11px] text-[#94a3b8] leading-tight">
                    Vibe-Coded Web Apps • Autonomous Agent Workflows • High Conversion
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="h-1.5 w-8 bg-[#0da2e7] rounded-full" />
                  <span className="h-1.5 w-3 bg-[#1e293b] rounded-full" />
                </div>
              </div>

              {/* Card Footer */}
              <div className="flex justify-between items-center text-[10px] sm:text-[11px] text-[#94a3b8] pt-1">
                <span>Prompts, Logic &amp; Code</span>
                <a
                  href="#contact"
                  className="text-white hover:text-[#0da2e7] font-semibold flex items-center gap-1 transition-colors"
                >
                  Start Project →
                </a>
              </div>
            </div>
          </Reveal>

        </div>

        {/* SECTION 4: TESTIMONIALS & GET IN TOUCH (Diletakkan di paling bawah footer) */}
        <div id="contact" className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch pt-2">
          
          {/* SISI KIRI: TESTIMONIALS (5 cols) */}
          <Reveal direction="up" distance={28} delay={0.1} className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-[#0da2e7] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase block mb-1.5">
                TESTIMONIALS
              </span>
              <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white mb-4">
                What Clients Say
              </h2>

              {/* Testimonial Card */}
              <div className="relative p-4 sm:p-5 bg-[#090d15] border border-[#162030] rounded-lg overflow-hidden group">
                {/* Quote Icon Accent Biru */}
                <div className="text-[#0da2e7] mb-2">
                  <Quote size={22} className="fill-[#0da2e7]/20" />
                </div>

                <p className="text-[11px] sm:text-xs text-[#cbd5e1] leading-relaxed mb-4 italic">
                  &ldquo;{TESTIMONIALS[currentTestimonial].quote}&rdquo;
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-2.5 pt-3 border-t border-[#162030]">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden bg-[#121824] border border-[#0da2e7]/40 shrink-0">
                    <img
                      src={TESTIMONIALS[currentTestimonial].avatar}
                      alt={TESTIMONIALS[currentTestimonial].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-[11px] sm:text-xs font-bold text-white tracking-wide">
                      {TESTIMONIALS[currentTestimonial].name}
                    </h4>
                    <p className="text-[10px] text-[#64748b]">
                      {TESTIMONIALS[currentTestimonial].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Pagination & Navigation Arrows */}
            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-1.5">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    aria-label={`Lihat testimoni ${idx + 1}`}
                    className={`h-1 transition-all duration-300 rounded-full ${
                      idx === currentTestimonial ? "w-5 bg-[#0da2e7]" : "w-1.5 bg-[#1e293b] hover:bg-[#334155]"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={prevTestimonial}
                  aria-label="Testimonial sebelumnya"
                  className="w-7 h-7 rounded-full border border-[#1e293b] hover:border-[#0da2e7] text-[#94a3b8] hover:text-white flex items-center justify-center transition-colors"
                >
                  <ChevronLeft size={14} />
                </button>
                <button
                  onClick={nextTestimonial}
                  aria-label="Testimonial berikutnya"
                  className="w-8 h-8 rounded-full border border-[#1e293b] hover:border-[#0da2e7] text-[#94a3b8] hover:text-white flex items-center justify-center transition-colors"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </Reveal>

          {/* SISI KANAN: LET'S WORK TOGETHER / GET IN TOUCH WITH FORM (7 cols) */}
          <Reveal direction="up" distance={28} delay={0.2} className="lg:col-span-7 lg:border-l lg:border-[#151f2e] lg:pl-10 flex flex-col justify-between">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Kolom Info Kontak */}
              <div className="md:col-span-5 space-y-5">
                <div>
                  <span className="text-[#0da2e7] text-xs font-bold tracking-[0.2em] uppercase block mb-2">
                    LET&apos;S WORK TOGETHER
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-white mb-3">
                    Get In Touch
                  </h2>
                  <p className="text-xs text-[#8b9bb4] leading-relaxed">
                    Have a project in mind or just want to say hello? Feel free to reach out.
                  </p>
                </div>

                <div className="space-y-3.5 pt-2">
                  <a
                    href="mailto:mr.robinsyaifuddin@gmail.com"
                    className="flex items-center gap-3 text-xs text-[#94a3b8] hover:text-white transition-colors group"
                  >
                    <span className="w-8 h-8 rounded bg-[#090d15] border border-[#162030] flex items-center justify-center text-[#0da2e7] group-hover:border-[#0da2e7] transition-colors shrink-0">
                      <Mail size={14} />
                    </span>
                    <span className="break-all">mr.robinsyaifuddin@gmail.com</span>
                  </a>

                  <a
                    href="https://wa.me/62887437525303"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-xs text-[#94a3b8] hover:text-white transition-colors group"
                  >
                    <span className="w-8 h-8 rounded bg-[#090d15] border border-[#162030] flex items-center justify-center text-[#0da2e7] group-hover:border-[#0da2e7] transition-colors shrink-0">
                      <Phone size={14} />
                    </span>
                    <span>+62 887-4375-25303</span>
                  </a>

                  <div className="flex items-center gap-3 text-xs text-[#94a3b8]">
                    <span className="w-8 h-8 rounded bg-[#090d15] border border-[#162030] flex items-center justify-center text-[#0da2e7] shrink-0">
                      <MapPin size={14} />
                    </span>
                    <span>Lampung Timur, Indonesia</span>
                  </div>
                </div>
              </div>

              {/* Kolom Formulir Pesan Langsung */}
              <div className="md:col-span-7">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value || "";
                    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value || "";
                    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || "";
                    const mailtoUrl = `mailto:mr.robinsyaifuddin@gmail.com?subject=Project Inquiry from ${encodeURIComponent(
                      name
                    )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
                    window.location.href = mailtoUrl;
                  }}
                  className="space-y-3.5"
                >
                  <div>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-[#090d15] border border-[#162030] rounded-sm text-xs sm:text-sm text-white placeholder-[#475569] focus:outline-none focus:border-[#0da2e7] transition-colors"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-[#090d15] border border-[#162030] rounded-sm text-xs sm:text-sm text-white placeholder-[#475569] focus:outline-none focus:border-[#0da2e7] transition-colors"
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Your Message"
                      className="w-full px-4 py-3 bg-[#090d15] border border-[#162030] rounded-sm text-xs sm:text-sm text-white placeholder-[#475569] focus:outline-none focus:border-[#0da2e7] transition-colors resize-none"
                    />
                  </div>

                  {/* Tombol Send Message Biru Elektrik Web */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-[#0da2e7] hover:bg-[#0887c2] active:scale-[0.99] text-white text-xs font-bold uppercase tracking-[0.15em] flex items-center justify-center gap-2 rounded-sm transition-all shadow-lg shadow-[#0da2e7]/20 group"
                  >
                    <span>SEND MESSAGE</span>
                    <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </form>
              </div>

            </div>
          </Reveal>

        </div>

        {/* SECTION 5: COPYRIGHT BAR (Sub-footer) */}
        <div className="pt-6 border-t border-[#151f2e] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] tracking-wider uppercase text-[#64748b]">
          <div>
            © {currentYear} ROBIN SYAIFUDDIN
          </div>
          <div>
            ALL RIGHTS RESERVED
          </div>
        </div>

      </div>
    </footer>
  );
}
