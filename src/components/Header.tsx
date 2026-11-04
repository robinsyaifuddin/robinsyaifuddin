
import { Button } from "@/components/ui/button";
import { Menu, X, Home, User, Briefcase, Mail, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const navItems = [{
    name: "Home",
    href: "/",
    icon: Home
  }, {
    name: "About",
    href: "/about",
    icon: User
  }, {
    name: "Portfolio",
    href: "/portfolio",
    icon: Briefcase
  }, {
    name: "Contact",
    href: "/contact",
    icon: Mail
  }];
  
  const isActiveRoute = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-500 ${
      isScrolled 
        ? 'backdrop-blur-xl bg-background/95 border-b border-border/50 shadow-lg shadow-primary/10' 
        : 'backdrop-blur-md bg-background/60 border-b border-border/20'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-primary/30 transition-all duration-300 group-hover:border-primary/60 group-hover:shadow-lg group-hover:shadow-primary/20">
                <img 
                  src="/lovable-uploads/0b2e3fc5-f4eb-476f-a858-bda20d9e1e4c.png" 
                  alt="Robin Syaifuddin" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="hidden sm:block">
              <h2 className="text-lg font-bold bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                Robin
              </h2>
              <p className="text-xs text-muted-foreground -mt-1">Developer</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = isActiveRoute(item.href);
              return (
                <Link 
                  key={item.name} 
                  to={item.href} 
                  className={`group relative px-4 xl:px-6 py-2.5 xl:py-3 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? 'text-primary-foreground bg-primary shadow-lg shadow-primary/20 scale-105' 
                      : 'text-foreground hover:text-primary hover:bg-primary/10 hover:backdrop-blur-md hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center space-x-2 relative z-10">
                    <IconComponent size={16} className="transition-all duration-300 group-hover:scale-110" />
                    <span className="font-medium text-sm xl:text-base">{item.name}</span>
                  </div>
                  {!isActive && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="sm"
                className="group border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                <span className="text-sm font-medium">Let's Talk</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden relative p-2 rounded-xl transition-all duration-300 hover:bg-primary/10 group" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="relative z-10">
              {isMenuOpen ? (
                <X size={24} className="text-primary transition-all duration-300" />
              ) : (
                <Menu size={24} className="text-foreground transition-all duration-300 group-hover:text-primary" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = isActiveRoute(item.href);
                return (
                  <Link 
                    key={item.name} 
                    to={item.href} 
                    className={`group relative px-4 py-3 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? 'text-primary-foreground bg-primary shadow-md' 
                        : 'text-foreground hover:text-primary hover:bg-primary/10'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center justify-between relative z-10">
                      <div className="flex items-center space-x-3">
                        <IconComponent size={20} className="transition-all duration-300" />
                        <span className="font-medium">{item.name}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                    </div>
                  </Link>
                );
              })}
            </nav>
            
            {/* Mobile CTA */}
            <div className="pt-4 border-t border-border/20">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-lg shadow-primary/20"
                  size="lg"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
