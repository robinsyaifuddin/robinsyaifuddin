# Robin Syaifuddin — Personal Website & Portfolio

Website portofolio dan profil profesional **Robin Syaifuddin** (Full Stack Developer & Digital Specialist). Dibangun menggunakan arsitektur modern Next.js App Router, TypeScript, Tailwind CSS, dan komponen Shadcn UI.

---

## ⚡ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) & [Shadcn UI](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & CSS keyframes
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📁 Struktur Proyek

```text
├── public/                 # Static assets (gambar profil, favicon, dsb.)
├── src/
│   ├── app/                # Next.js App Router (pages & layout)
│   │   ├── about/          # Halaman Tentang
│   │   ├── contact/        # Halaman Kontak
│   │   ├── futuristic/     # Showroom portofolio interaktif
│   │   ├── portfolio/      # Halaman Portofolio
│   │   ├── layout.tsx      # Root Layout & Metadata
│   │   ├── not-found.tsx   # Custom 404 page
│   │   └── page.tsx        # Halaman Utama (Beranda)
│   ├── components/         # Komponen Modular & UI
│   │   └── ui/             # Shadcn UI primitives
│   ├── hooks/              # Custom React Hooks
│   ├── lib/                # Helper utilities (cn, dsb.)
│   └── index.css           # Global stylesheet & Tailwind directives
├── next.config.js          # Konfigurasi Next.js
├── tailwind.config.ts      # Konfigurasi Tailwind CSS
└── tsconfig.json           # Konfigurasi TypeScript
```

---

## 🚀 Memulai (Local Development)

### 1. Prasyarat
- Node.js (v18.17+ atau v20+)
- npm atau pnpm

### 2. Instalasi
```bash
npm install
```

### 3. Menjalankan Server Pengembangan
```bash
npm run dev
```
Buka browser di [http://localhost:3000](http://localhost:3000).

### 4. Build untuk Production
```bash
npm run build
npm run start
```

---

## 📄 Lisensi
Hak cipta © 2026 Robin Syaifuddin. Seluruh hak cipta dilindungi.
