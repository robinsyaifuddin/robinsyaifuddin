"use client";

import React from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useMusic } from "./MusicProvider";

interface MusicToggleProps {
  className?: string;
  showText?: boolean;
}

export function MusicToggle({ className = "", showText = false }: MusicToggleProps) {
  const { isPlaying, togglePlay } = useMusic();

  return (
    <button
      onClick={togglePlay}
      type="button"
      className={`group relative flex items-center gap-2 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-md text-white/90 hover:text-white transition-all duration-200 active:scale-95 focus:outline-none focus:ring-1 focus:ring-[#0da2e7]/50 ${className}`}
      title={isPlaying ? "Jeda Musik" : "Putar Musik"}
      aria-label={isPlaying ? "Jeda Musik" : "Putar Musik"}
    >
      {/* Equalizer Wave / Glow Effect saat playing */}
      {isPlaying && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0da2e7] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0da2e7]" />
        </span>
      )}

      {/* Icon: Play / Pause */}
      <span className="flex items-center justify-center text-[#0da2e7] transition-transform duration-200 group-hover:scale-110">
        {isPlaying ? (
          <Pause size={14} className="fill-[#0da2e7]/30 stroke-[2.2]" />
        ) : (
          <Play size={14} className="fill-[#0da2e7]/30 stroke-[2.2] translate-x-0.5" />
        )}
      </span>

      {/* Sound wave bars animasi halus saat menyala */}
      <div className="flex items-end gap-0.5 h-3.5 px-0.5">
        <span
          className={`w-[2px] bg-[#0da2e7] rounded-full transition-all duration-300 ${
            isPlaying ? "h-3 animate-pulse" : "h-1 opacity-40"
          }`}
          style={{ animationDuration: "600ms" }}
        />
        <span
          className={`w-[2px] bg-[#0da2e7] rounded-full transition-all duration-300 ${
            isPlaying ? "h-2 animate-pulse" : "h-1 opacity-40"
          }`}
          style={{ animationDuration: "400ms" }}
        />
        <span
          className={`w-[2px] bg-[#0da2e7] rounded-full transition-all duration-300 ${
            isPlaying ? "h-3.5 animate-pulse" : "h-1 opacity-40"
          }`}
          style={{ animationDuration: "750ms" }}
        />
      </div>

      {showText && (
        <span className="text-[11px] font-medium tracking-wide uppercase text-white/80 group-hover:text-white">
          {isPlaying ? "Jeda" : "Musik"}
        </span>
      )}
    </button>
  );
}
