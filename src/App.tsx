// ...existing code...
import AdminLogin from "./components/AdminLogin";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import PageTransition from "@/components/PageTransition";

// Lazy load components untuk performa yang lebih baik
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const FuturisticPortfolio = lazy(() => import("./pages/FuturisticPortfolio"));

// Optimasi QueryClient untuk performa
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

// Loading component untuk fallback
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="flex flex-col items-center gap-4">
      <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      <p className="text-muted-foreground">Memuat...</p>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<PageTransition><Index /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/portfolio" element={<PageTransition><Portfolio /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="/futuristic" element={<PageTransition><FuturisticPortfolio /></PageTransition>} />
            
            {/* Route admin login */}
            <Route path="/admin" element={<AdminLogin onLogin={token => {/* simpan token */}} />} />

            {/* Redirect routes untuk typo umum */}
            <Route path="/home" element={<PageTransition><Index /></PageTransition>} />
            <Route path="/beranda" element={<PageTransition><Index /></PageTransition>} />
            <Route path="/portofolio" element={<PageTransition><Portfolio /></PageTransition>} />
            <Route path="/kontak" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="/tentang" element={<PageTransition><About /></PageTransition>} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
