"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-8xl font-black text-[#0da2e7] tracking-tight">404</h1>
          <h2 className="text-2xl font-bold tracking-tight text-white">Halaman Tidak Ditemukan</h2>
          <p className="text-sm text-[#94a3b8]">
            Halaman yang Anda cari mungkin telah dipindahkan, dihapus, atau tautan yang dimasukkan salah.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Link href="/">
            <Button className="w-full sm:w-auto bg-[#0da2e7] hover:bg-[#0883bd] text-white gap-2">
              <Home className="w-4 h-4" />
              Kembali ke Beranda
            </Button>
          </Link>
          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="w-full sm:w-auto border-[#1f2d42] text-[#94a3b8] hover:text-white gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Sebelumnya
          </Button>
        </div>
      </div>
    </div>
  );
}
