"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InitialLoader() {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    // Cek apakah baru pertama kali diakses dalam sesi ini
    const hasVisited = sessionStorage.getItem("rs_visited");

    if (hasVisited) {
      setLoading(false);
      return;
    }

    // Tampilkan loader cepat dan dinamis (380ms) agar tidak lag, lalu fade out halus
    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("rs_visited", "true");
    }, 380);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="initial-curtain"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            },
          }}
          className="fixed inset-0 z-[9999] pointer-events-none flex flex-col items-center justify-center bg-[#06080d]"
        >
          {/* Ambient Blue Core Glow */}
          <div className="absolute w-72 h-72 rounded-full bg-[#0da2e7]/15 blur-3xl pointer-events-none" />

          {/* Minimalist Tactile Monogram & Indicator */}
          <div className="relative flex flex-col items-center gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="flex items-center gap-2.5"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#0da2e7] animate-pulse shadow-[0_0_12px_rgba(13,162,231,0.8)]" />
              <span className="font-display font-black tracking-[0.25em] text-white text-xs uppercase">
                ROBIN SYAIFUDDIN
              </span>
            </motion.div>

            {/* Micro subtle line indicator */}
            <div className="w-28 h-[2px] bg-white/[0.08] overflow-hidden rounded-full">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="w-1/2 h-full bg-[#0da2e7]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
