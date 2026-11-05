"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from "react";

interface MusicContextType {
  isPlaying: boolean;
  isReady: boolean;
  togglePlay: () => void;
  play: () => void;
  pause: () => void;
}

const MusicContext = createContext<MusicContextType>({
  isPlaying: false,
  isReady: false,
  togglePlay: () => {},
  play: () => {},
  pause: () => {},
});

export const useMusic = () => useContext(MusicContext);

declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void;
    YT?: any;
  }
}

const VIDEO_ID = "pP70g70WiXY";

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const playerRef = useRef<any>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    // 1. Injeksi script YouTube IFrame API jika belum terpasang
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
    }

    const forceStartPlay = () => {
      if (!playerRef.current || startedRef.current) return;
      try {
        if (typeof playerRef.current.setVolume === "function") {
          playerRef.current.unMute();
          playerRef.current.setVolume(50);
        }
        if (typeof playerRef.current.playVideo === "function") {
          playerRef.current.playVideo();
        }
      } catch (err) {
        // Abaikan jika browser menolak sebelum interaksi pertama
      }
    };

    const initPlayer = () => {
      if (!window.YT || !window.YT.Player) return;

      playerRef.current = new window.YT.Player("youtube-music-player", {
        height: "100%",
        width: "100%",
        videoId: VIDEO_ID,
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          loop: 1,
          playlist: VIDEO_ID,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          enablejsapi: 1,
          origin: typeof window !== "undefined" ? window.location.origin : undefined,
        },
        events: {
          onReady: (event: any) => {
            setIsReady(true);
            try {
              event.target.unMute();
              event.target.setVolume(50);
              event.target.playVideo();
            } catch (e) {
              console.warn("Direct autoplay:", e);
            }
          },
          onStateChange: (event: any) => {
            // YT.PlayerState.PLAYING === 1
            if (event.data === 1) {
              setIsPlaying(true);
              startedRef.current = true;
            } else if (event.data === 2 || event.data === 0) {
              // PAUSED (2) atau ENDED (0)
              setIsPlaying(false);
            }
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = () => {
        initPlayer();
      };
    }

    // Listener universal: begitu pengguna menggerakkan mouse, tap layar, scroll, atau tekan tombol,
    // musik langsung otomatis un-mute dan jalan di volume 50% tanpa harus cari tombol putar
    const handleImmediateGesture = () => {
      forceStartPlay();
      cleanupInteractionListeners();
    };

    const cleanupInteractionListeners = () => {
      window.removeEventListener("pointerdown", handleImmediateGesture);
      window.removeEventListener("mousemove", handleImmediateGesture);
      window.removeEventListener("click", handleImmediateGesture);
      window.removeEventListener("keydown", handleImmediateGesture);
      window.removeEventListener("touchstart", handleImmediateGesture);
      window.removeEventListener("scroll", handleImmediateGesture);
      window.removeEventListener("wheel", handleImmediateGesture);
    };

    window.addEventListener("pointerdown", handleImmediateGesture, { passive: true, once: true });
    window.addEventListener("mousemove", handleImmediateGesture, { passive: true, once: true });
    window.addEventListener("click", handleImmediateGesture, { passive: true, once: true });
    window.addEventListener("keydown", handleImmediateGesture, { passive: true, once: true });
    window.addEventListener("touchstart", handleImmediateGesture, { passive: true, once: true });
    window.addEventListener("scroll", handleImmediateGesture, { passive: true, once: true });
    window.addEventListener("wheel", handleImmediateGesture, { passive: true, once: true });

    return () => {
      cleanupInteractionListeners();
      try {
        if (playerRef.current && playerRef.current.destroy) {
          playerRef.current.destroy();
        }
      } catch (e) {
        // ignore
      }
    };
  }, []);

  const togglePlay = () => {
    if (!playerRef.current) return;
    try {
      if (isPlaying) {
        playerRef.current.pauseVideo();
        setIsPlaying(false);
      } else {
        playerRef.current.unMute();
        playerRef.current.setVolume(50);
        playerRef.current.playVideo();
        setIsPlaying(true);
      }
    } catch (e) {
      console.warn("Toggle play error:", e);
    }
  };

  const play = () => {
    if (!playerRef.current) return;
    try {
      playerRef.current.unMute();
      playerRef.current.setVolume(50);
      playerRef.current.playVideo();
      setIsPlaying(true);
    } catch (e) {
      console.warn("Play error:", e);
    }
  };

  const pause = () => {
    if (!playerRef.current) return;
    try {
      playerRef.current.pauseVideo();
      setIsPlaying(false);
    } catch (e) {
      console.warn("Pause error:", e);
    }
  };

  return (
    <MusicContext.Provider value={{ isPlaying, isReady, togglePlay, play, pause }}>
      {children}
      {/* Container iframe YouTube: allow="autoplay" wajib aktif agar browser mengizinkan autoplay */}
      <div
        aria-hidden="true"
        className="fixed pointer-events-none -left-[9999px] -top-[9999px] w-1 h-1 overflow-hidden opacity-0"
      >
        <div id="youtube-music-player" />
      </div>
    </MusicContext.Provider>
  );
}
