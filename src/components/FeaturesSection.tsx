
import { BarChart3, Target, Shield } from "lucide-react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const FeaturesSection = () => {
  const { elementRef: titleRef, isIntersecting: titleVisible } = useIntersectionObserver<HTMLDivElement>();
  const { elementRef: gridRef, isIntersecting: gridVisible } = useIntersectionObserver<HTMLDivElement>();

  const features = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Customer Insights",
      description: "Get to know your customers better. Unlock actionable insights across all touchpoints with the platform."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Product Metrics",
      description: "Track all important product data, performance insights and KPIs."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Campaign Optimization",
      description: "Measure campaign impact and drive better outcomes and metrics like conversion."
    }
  ];

  return (
    <section className="py-20 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transform transition-all duration-1000 ${
            titleVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-primary text-sm uppercase tracking-wider mb-4 animate-fade-in">
            Data of Control Of Your Web
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Business <span className="text-gradient">Application</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Data-driven businesses choose us to reimagine their processes and streamline operations
          </p>
        </div>

        <div 
          ref={gridRef}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-8 
                hover:border-primary/30 hover:bg-card/70 hover-lift 
                group relative overflow-hidden shimmer-effect
                transform transition-all duration-700 ${
                  gridVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
              style={{ 
                animationDelay: `${index * 0.2}s`,
                transitionDelay: `${index * 0.1}s`
              }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 
                group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 
                group-hover:shadow-lg group-hover:shadow-primary/25">
                <div className="text-primary group-hover:animate-pulse">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                {feature.description}
              </p>
              
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
