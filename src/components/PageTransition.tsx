
import { useEffect, useCallback, useState } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);

  // Optimasi scroll dengan useCallback
  const scrollToTop = useCallback(() => {
    // Gunakan requestAnimationFrame untuk performa yang lebih baik
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    });
  }, []);

  useEffect(() => {
    setIsLoaded(false);
    scrollToTop();
    
    // Trigger animasi setelah komponen mount
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    // Preload gambar untuk halaman berikutnya (opsional)
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = '/lovable-uploads/0b2e3fc5-f4eb-476f-a858-bda20d9e1e4c.png';
    document.head.appendChild(link);
    
    return () => {
      clearTimeout(timer);
      document.head.removeChild(link);
    };
  }, [location.pathname, scrollToTop]);

  return (
    <div className="relative">
      {/* Main Content */}
      <div 
        className={`relative z-10 transition-all duration-1000 ease-out ${
          isLoaded 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default PageTransition;
