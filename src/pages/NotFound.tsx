
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Log error untuk debugging
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Cek apakah ini adalah route yang seharusnya ada
    const validRoutes = ['/', '/about', '/portfolio', '/contact'];
    const currentPath = location.pathname.toLowerCase();
    
    // Redirect otomatis jika ada typo kecil
    if (currentPath === '/home' || currentPath === '/beranda') {
      navigate('/', { replace: true });
      return;
    }
    
    if (currentPath === '/portofolio') {
      navigate('/portfolio', { replace: true });
      return;
    }
    
    if (currentPath === '/kontak') {
      navigate('/contact', { replace: true });
      return;
    }
    
    if (currentPath === '/tentang') {
      navigate('/about', { replace: true });
      return;
    }
  }, [location.pathname, navigate]);

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Halaman Tidak Ditemukan
          </h2>
          <p className="text-muted-foreground mb-8">
            Maaf, halaman yang Anda cari tidak dapat ditemukan. 
            Mungkin halaman telah dipindahkan atau URL yang Anda masukkan salah.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={handleGoBack}
            variant="outline"
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali
          </Button>
          
          <Button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            Beranda
          </Button>
        </div>
        
        <div className="mt-8 text-sm text-muted-foreground">
          <p>Atau kunjungi halaman:</p>
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            <button 
              onClick={() => navigate('/about')}
              className="text-primary hover:underline"
            >
              Tentang
            </button>
            <span>•</span>
            <button 
              onClick={() => navigate('/portfolio')}
              className="text-primary hover:underline"
            >
              Portfolio
            </button>
            <span>•</span>
            <button 
              onClick={() => navigate('/contact')}
              className="text-primary hover:underline"
            >
              Kontak
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
