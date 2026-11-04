
import { CheckCircle, Eye } from "lucide-react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { useEffect, useState } from "react";

const StatsSection = () => {
  const { elementRef: contentRef, isIntersecting: contentVisible } = useIntersectionObserver<HTMLDivElement>();
  const { elementRef: statsRef, isIntersecting: statsVisible } = useIntersectionObserver<HTMLDivElement>();
  const [animatedValues, setAnimatedValues] = useState({ percentage: 0, progress: [0, 0, 0] });

  useEffect(() => {
    if (statsVisible) {
      const timer = setTimeout(() => {
        setAnimatedValues({ 
          percentage: 85, 
          progress: [83, 67, 83] // percentages for the progress bars
        });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [statsVisible]);

  return (
    <section className="py-20 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div 
            ref={contentRef}
            className={`transform transition-all duration-1000 ${
              contentVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-8'
            }`}
          >
            <p className="text-primary text-sm uppercase tracking-wider mb-4">
              Data Insights
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Improved <span className="text-gradient">decision-making</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Access to up-to-date information enables more effective and analysis, you can make informed decisions with confidence, reducing uncertainty.
            </p>

            <div className="space-y-6">
              <div className={`flex items-start space-x-4 transform transition-all duration-700 ${
                contentVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`} style={{ transitionDelay: '0.3s' }}>
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0 animate-scale-in" />
                <div>
                  <h3 className="text-foreground font-semibold mb-2">
                    Comprehensive Data Visualization
                  </h3>
                  <p className="text-muted-foreground">
                    With our advanced visualization tools, turn complex datasets into easy-to-understand charts and graphs.
                  </p>
                </div>
              </div>

              <div className={`flex items-start space-x-4 transform transition-all duration-700 ${
                contentVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`} style={{ transitionDelay: '0.5s' }}>
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0 animate-scale-in" />
                <div>
                  <h3 className="text-foreground font-semibold mb-2">
                    Predictive Modeling
                  </h3>
                  <p className="text-muted-foreground">
                    Leverage machine learning predictive analytics to forecast future trends and outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Stats */}
          <div 
            ref={statsRef}
            className={`relative transform transition-all duration-1000 ${
              statsVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="glass-morphism rounded-2xl p-8 border border-primary/20 hover-lift 
              relative overflow-hidden group">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-muted-foreground text-sm mb-2">Improvement Rate</p>
                    <div className="text-5xl font-bold text-foreground transition-all duration-1000">
                      {animatedValues.percentage}%
                    </div>
                    <p className="text-primary text-sm">+ 12%</p>
                  </div>
                  <Eye className="w-8 h-8 text-primary animate-float" />
                </div>

                <div className="space-y-4">
                  {['Users', 'Revenue', 'Target'].map((label, index) => (
                    <div key={label} className="flex justify-between items-center">
                      <span className="text-muted-foreground">{label}</span>
                      <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-2 bg-gradient-to-r from-primary to-primary/80 rounded-full 
                            transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${animatedValues.progress[index]}%`,
                            transitionDelay: `${index * 0.2}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
