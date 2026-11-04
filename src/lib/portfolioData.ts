export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  clientOrLocation: string;
  year: string;
  description: string;
  summary: string;
  image: string;
  tags: string[];
  url?: string;
  featured?: boolean;
  spotlight?: boolean;
  isVideo?: boolean;
}

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  // --- TOP FEATURED 3 CARDS (Sesuai Row 1 di Gambar) ---
  {
    id: "fajar-baru",
    number: "01",
    title: "DIGITALISASI DESA: INOVASI PORTAL TRANSPARANSI PUBLIK",
    category: "E-GOVERNMENT / WEB PLATFORM",
    tagline: "TRANSPARANSI & EFISIENSI LAYANAN WARGA",
    clientOrLocation: "Desa Fajar Baru, Lampung Selatan",
    year: "2025",
    description: "Pengembangan web application terpadu untuk transparansi administrasi desa, pelayanan surat menyurat digital, dan publikasi APBDes secara terbuka.",
    summary: "Mempercepat pelayanan surat & akses informasi bagi 4.000+ warga desa secara real-time.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Next.js", "Tailwind CSS", "Node.js"],
    url: "https://desafajarbaru.web.id",
    featured: true,
  },
  {
    id: "digibooster",
    number: "02",
    title: "DIGIBOOSTER INDONESIA: PLATFORM EKOSISTEM DIGITAL UMKM",
    category: "ENTERPRISE / DIGITAL AGENCY",
    tagline: "TRANSFORMASI & AUTOMATION SCALING",
    clientOrLocation: "Bandar Lampung, Indonesia",
    year: "2025",
    description: "Hub solusi komprehensif transformasi digital, marketing automation, dan arsitektur web modern yang mendukung puluhan pemilik bisnis lokal scale-up.",
    summary: "Mendongkrak traffic digital klien hingga 320% dengan arsitektur UI/UX berstandar tinggi.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    tags: ["Next.js", "TypeScript", "Tailwind", "Automation"],
    url: "https://digibooster.web.id",
    featured: true,
    isVideo: true,
  },
  {
    id: "lamsel-maju",
    number: "03",
    title: "LAMSEL MAJU: PORTAL DESTINASI & WISATA TERINTEGRASI",
    category: "TOURISM / PUBLIC PORTAL",
    tagline: "INTERACTIVE GEO-TOURISM CATALOG",
    clientOrLocation: "Lampung Selatan, Indonesia",
    year: "2025",
    description: "Platform direktori wisata, sentra UMKM, dan pemetaan atraksi pesisir Lampung Selatan berbasis peta interaktif dengan performa optimal.",
    summary: "Mempromosikan 50+ destinasi wisata bahari dan sentra oleh-oleh UMKM daerah.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    tags: ["Vite", "React", "Mapbox", "Tailwind CSS"],
    url: "https://lamselmaju-id.lovable.app",
    featured: true,
  },

  // --- QUICK STRIP ITEMS (Row 2 bernomor kecil 1, 2, 3 di Gambar) ---
  {
    id: "ylbh-merdeka",
    number: "1",
    title: "PORTAL BANTUAN HUKUM DIGITAL YLBH MERDEKA",
    category: "LEGAL TECH / ADVOCACY",
    tagline: "AKSES KEADILAN TERBUKA",
    clientOrLocation: "Lampung Selatan",
    year: "2025",
    description: "Sistem konsultasi hukum gratis dan monitoring kasus berbasis online untuk masyarakat pra-sejahtera.",
    summary: "Memfasilitasi konsultasi litigasi dan non-litigasi secara terjadwal.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80",
    tags: ["React", "PostgreSQL", "Tailwind"],
    url: "https://ylbh-merdeka.lovable.app",
  },
  {
    id: "eco-edu-tourism",
    number: "2",
    title: "ECO-EDU-TOURISM PULAU LEGUNDI & GARAM RAKYAT",
    category: "COMMUNITY & ENVIRONMENT",
    tagline: "VALUASI POTENSI MARITIM",
    clientOrLocation: "Pulau Legundi, Pesawaran",
    year: "2024",
    description: "Program pengembangan komoditas garam rakyat dan diversifikasi produk turunan skincare lokal berbasis kelestarian laut.",
    summary: "Pemberdayaan kelompok petambak garam lokal menuju pasar produk bernilai tambah.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    tags: ["Sustainable Tech", "Community", "Branding"],
  },
  {
    id: "ai-smart-crm",
    number: "3",
    title: "AI WORKFLOW ENGINE & AUTONOMOUS LEAD AGENT",
    category: "AI & AUTOMATION",
    tagline: "INTELLIGENT PIPELINE WORKFLOW",
    clientOrLocation: "Global / Remote",
    year: "2025",
    description: "Orkestrasi multi-agent untuk kualifikasi calon klien, follow-up cerdas, dan sinkronisasi CRM instan.",
    summary: "Menghemat 18+ jam kerja manual tim penjualan setiap minggu.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    tags: ["Python", "FastAPI", "OpenAI / Claude", "n8n"],
    url: "https://github.com/robinsyaifuddin",
  },

  // --- ASYMMETRIC MAIN BODY: Feed Proyek Kiri (Gambar horizontal) ---
  {
    id: "cloud-supply-chain",
    number: "04",
    title: "SMART LOGISTICS & MARITIME FLEET TRACKING SYSTEM",
    category: "LOGISTICS / IOT SYSTEM",
    tagline: "REAL-TIME TELEMETRY PLATFORM",
    clientOrLocation: "Pelabuhan Bakauheni - Merak",
    year: "2025",
    description: "Platform pemantauan posisi armada kapal penyeberangan secara real-time, kalkulasi estimasi sandar (ETA), serta peringatan dini kondisi cuaca laut ekstrem.",
    summary: "Memastikan sinkronisasi data jadwal keberangkatan tanpa jeda delay (sub-second telemetry).",
    image: "https://images.unsplash.com/photo-1505705694340-019e1e335916?auto=format&fit=crop&w=1200&q=80",
    tags: ["Next.js 14", "WebSockets", "Leaflet", "Tailwind"],
    url: "https://github.com/robinsyaifuddin",
  },
  {
    id: "financial-pulse",
    number: "05",
    title: "FINANCIAL PULSE: REAL-TIME LEDGER & ANALYTICS DASHBOARD",
    category: "FINTECH / ENTERPRISE",
    tagline: "HIGH-THROUGHPUT TRANSACTION ENGINE",
    clientOrLocation: "Jakarta, Indonesia",
    year: "2024",
    description: "Dashboard analitik keuangan multi-rekening dengan rekonsiliasi otomatis, deteksi anomali fraud berbasis aturan AI, dan visualisasi cash flow interaktif.",
    summary: "Memproses 100k+ event transaksi per hari dengan zero lag rendering.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    tags: ["TypeScript", "Recharts", "Node.js", "Redis"],
    url: "https://github.com/robinsyaifuddin",
    isVideo: true,
  },
  {
    id: "clinical-records",
    number: "06",
    title: "CLINICFLOW: REKAM MEDIS ELEKTRONIK & RESERVASI PASIEN",
    category: "HEALTHTECH / WEB APP",
    tagline: "ENCRYPTED PATIENT MANAGEMENT",
    clientOrLocation: "Lampung, Indonesia",
    year: "2024",
    description: "Sistem informasi fasilitas kesehatan tingkat pertama berstandar SatuSehat Kemenkes dengan enkripsi data riwayat medis dan antrean pasien via WhatsApp bot.",
    summary: "Diadopsi oleh 3 klinik swasta untuk mempercepat pelayanan poli hingga 45%.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "PostgreSQL", "Docker", "REST API"],
    url: "https://github.com/robinsyaifuddin",
  },

  // --- ASYMMETRIC MAIN BODY: Spotlight Card Kanan (Sesuai card tinggi di gambar) ---
  {
    id: "autonomous-ai-foundry",
    number: "07",
    title: "AGENTIC AI SYSTEM FOUNDRY: AUTONOMOUS DIGITAL WORKERS",
    category: "ARTIFICIAL INTELLIGENCE",
    tagline: "NEXT-GENERATION AUTONOMY",
    clientOrLocation: "Remote / Enterprise Client",
    year: "2025",
    description: "Arsitektur multi-agent otonom yang mampu menjalankan riset dokumen, validasi data analitik, dan pembuatan draft laporan otomatis dengan akurasi 99.2%.",
    summary: "Mengeliminasi 80% proses repetitif data entry internal.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
    tags: ["Python", "LangChain", "FastAPI", "VectorDB", "Next.js"],
    url: "https://github.com/robinsyaifuddin",
    spotlight: true,
  }
];
