'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function AgentsWorkspacePage() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#091322]">
      {/* Tombol Keluar / Kembali ke Beranda */}
      <div className="absolute top-4 left-4 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#0B0F17]/80 hover:bg-[#0B0F17] text-slate-300 hover:text-white border border-white/[0.08] backdrop-blur-md text-xs font-medium transition-all duration-150 shadow-lg active:scale-[0.98]"
        >
          <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:text-white" />
          <span>Keluar ke Beranda</span>
        </Link>
      </div>

      {/* Frame Kantor Virtual 3D Full Screen */}
      <iframe
        src="/digibooster_office_engine.html"
        title="Kantor Virtual 3D"
        className="w-full h-full border-none block"
      />
    </div>
  );
}
