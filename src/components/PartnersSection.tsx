
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const PartnersSection = () => {
  const { elementRef: titleRef, isIntersecting: titleVisible } = useIntersectionObserver<HTMLDivElement>();
  const { elementRef: partnersRef, isIntersecting: partnersVisible } = useIntersectionObserver<HTMLDivElement>();

  const partners = [
    { name: "Chase", logo: "Chase" },
    { name: "Spotify", logo: "Spotify" },
    { name: "Slack", logo: "slack" },
    { name: "Dropbox", logo: "Dropbox" },
    { name: "Webflow", logo: "webflow" },
    { name: "Zoom", logo: "Zoom" },
  ];

  return (
    <section className="py-20 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div 
          ref={titleRef}
          className={`text-center mb-12 transform transition-all duration-800 ${
            titleVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-muted-foreground text-sm uppercase tracking-wider">
            Partnering with top industry experts
          </p>
        </div>
        
        <div 
          ref={partnersRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
        >
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className={`flex items-center justify-center 
                opacity-0 hover:opacity-100 transition-all duration-500 
                transform hover:scale-110 hover:-translate-y-2
                cursor-pointer group relative
                ${partnersVisible ? 'animate-fade-in-up' : ''}
              `}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                opacity: partnersVisible ? 0.6 : 0
              }}
            >
              <div className="text-muted-foreground font-semibold text-lg 
                group-hover:text-primary transition-colors duration-300
                relative z-10">
                {partner.logo}
              </div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-primary/10 rounded-lg 
                scale-0 group-hover:scale-100 transition-transform duration-300 
                opacity-0 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
