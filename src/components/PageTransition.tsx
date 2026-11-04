"use client";

"use client";

import { useEffect, useCallback, useState } from "react";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname();
  const [isLoaded, setIsLoaded] = useState(false);

  const scrollToTop = useCallback(() => {
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
    
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => {
      clearTimeout(timer);
    };
  }, [pathname, scrollToTop]);

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
