import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Smartphone, Globe, Briefcase, Mail, Brain, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return <section className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 pt-24 pb-12 overflow-hidden">
      {/* Futuristic Background Grid */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0" style={{
        backgroundImage: `
            linear-gradient(rgba(255, 102, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 102, 0, 0.1) 1px, transparent 1px)
          `,
        backgroundSize: '30px 30px'
      }} />
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card/50 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,102,0,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(255,102,0,0.05)_60deg,transparent_120deg)]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto gap-8 lg:gap-16 w-full">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left space-y-6 lg:space-y-8 order-2 lg:order-1">
          {/* Main Heading */}
          <div className={`space-y-4 lg:space-y-6 transform transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
          transitionDelay: '0.2s'
        }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-primary glow-text">Hi! I am Robin</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Passionate Full Stack Developer & UI/UX Designer creating innovative digital solutions
            </p>
            
            <div className="h-1 w-24 sm:w-32 lg:w-40 bg-gradient-to-r from-primary to-orange-400 rounded-full mx-auto lg:mx-0" />
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start transform transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
          transitionDelay: '0.6s'
        }}>
            <Link to="/about" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-xl transform hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,102,0,0.6)] group">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform" />
                About Me
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/portfolio" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-black px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-xl transform hover:scale-105 transition-all duration-300 group">
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Portfolio
              </Button>
            </Link>
          </div>
        </div>

        {/* Futuristic Profile Section */}
        <div className="flex-1 flex justify-center items-center order-1 lg:order-2">
          <div className={`relative transform transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
          transitionDelay: '0.8s'
        }}>
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
              {/* Animated Rings */}
              <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-spin shadow-[0_0_20px_rgba(255,102,0,0.3)]" style={{
              animationDuration: '20s'
            }} />
              <div className="absolute inset-3 sm:inset-4 border border-primary/20 rounded-full animate-spin" style={{
              animationDuration: '15s',
              animationDirection: 'reverse'
            }} />
              <div className="absolute inset-6 sm:inset-8 border border-primary/10 rounded-full animate-pulse" />
              
              {/* Profile Image with Glow */}
              <div className="absolute inset-8 sm:inset-10 lg:inset-12 rounded-full overflow-hidden shadow-[0_0_30px_rgba(255,102,0,0.4)]">
                <img src="/lovable-uploads/d0cfe490-7b8f-4828-9c87-686191456de5.png" alt="Robin Syaifuddin" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              </div>

              {/* Floating Tech Icons - Mobile Optimized */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-primary/20 backdrop-blur-md border border-primary/40 rounded-xl p-2 sm:p-3 animate-float shadow-[0_0_15px_rgba(255,102,0,0.3)]">
                <Code className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-primary/20 backdrop-blur-md border border-primary/40 rounded-xl p-2 sm:p-3 animate-float shadow-[0_0_15px_rgba(255,102,0,0.3)]" style={{
              animationDelay: '1s'
            }}>
                <Database className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="absolute top-12 -left-8 sm:top-16 sm:-left-12 bg-primary/20 backdrop-blur-md border border-primary/40 rounded-xl p-2 sm:p-3 animate-float shadow-[0_0_15px_rgba(255,102,0,0.3)]" style={{
              animationDelay: '2s'
            }}>
                <Brain className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="absolute bottom-12 -right-8 sm:bottom-16 sm:-right-12 bg-primary/20 backdrop-blur-md border border-primary/40 rounded-xl p-2 sm:p-3 animate-float shadow-[0_0_15px_rgba(255,102,0,0.3)]" style={{
              animationDelay: '3s'
            }}>
                <Smartphone className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Curved Line */}
      <div className={`relative z-10 w-full max-w-4xl mt-16 transform transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
      transitionDelay: '1s'
    }}>
        <div className="curved-line bg-gradient-to-r from-transparent via-primary to-transparent h-0.5 rounded-full" />
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${isLoaded ? 'opacity-100 animate-bounce' : 'opacity-0'}`} style={{
      transitionDelay: '2s'
    }}>
        
      </div>
    </section>;
};
export default HeroSection;