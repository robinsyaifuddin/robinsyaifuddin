import type { Metadata } from "next";
import "@/index.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { MusicProvider } from "@/components/MusicProvider";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Robin Syaifuddin | Full Stack Developer & Digital Specialist",
  description: "Portofolio profesional Robin Syaifuddin - Full Stack Developer & Digital Specialist. Mahasiswa Teknik Telekomunikasi ITERA.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Caveat:wght@600;700&family=Oswald:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#07090e] text-[#f1f5f9] antialiased selection:bg-[#0da2e7]/30 selection:text-white flex flex-col justify-between">
        <MusicProvider>
          <main className="flex-1">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
          <Toaster />
          <Sonner />
        </MusicProvider>
      </body>
    </html>
  );
}
