"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-[#07090e] text-[#f1f5f9] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wider mb-3 text-[#0da2e7]">
          Terjadi Gangguan Sistem
        </h2>
        <p className="text-xs sm:text-sm text-[#94a3b8] max-w-md mb-6 leading-relaxed">
          {error?.message || "Sedang memuat ulang sistem..."}
        </p>
        <button
          onClick={() => reset()}
          className="px-6 py-2.5 bg-[#0da2e7] hover:bg-[#0284c7] text-white text-xs font-semibold uppercase tracking-widest rounded-sm transition-colors active:scale-95"
        >
          Muat Ulang
        </button>
      </body>
    </html>
  );
}
