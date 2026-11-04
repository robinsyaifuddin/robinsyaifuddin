import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ExternalLink, Calendar, MapPin } from "lucide-react";

const Portfolio = () => {

  const projects = [
    {
      title: "Digitalisasi Desa: Inovasi Website untuk Transparansi",
      location: "Desa Fajar Baru, Lampung Selatan",
      year: "2025",
      description: "Pengembangan website untuk transparansi, layanan, dan informasi publik desa",
      url: "https://desafajarbaru.web.id"
    },
    {
      title: "Transformasi Digital Pariwisata Lamsel",
      location: "Lampung Selatan",
      year: "2025",
      description: "Pengembangan website untuk destinasi, kecamatan, dan UMKM lokal",
      url: "https://lamselmaju-id.lovable.app"
    },
    {
      title: "Portal Hukum Website Terintegrasi",
      location: "Lampung Selatan",
      year: "2025",
      description: "Website untuk edukasi dan layanan bantuan hukum online Yayayasan Lembaga Bantuan Hukum Merdeka",
      url: "https://ylbh-merdeka.lovable.app"
    },
    {
      title: "Digibooster Indonesia",
      location: "Bandar Lampung",
      year: "2025",
      description: "Platform Layanan Jasa Digital Terbaik untuk membantu bisnis bertransformasi digital dengan solusi komprehensif dan profesional",
      url: "https://digibooster.web.id"
    },
    {
      title: "Pengembangan Desa Eco-edu-tourism",
      location: "Pulau Legundi, Pesawaran",
      year: "2024",
      description: "Berbasis sumberdaya alam lokal dan diversifikasi produk skincare garam rakyat"
    }
  ];


  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Luxury Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card/20 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,102,0,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,102,0,0.06),transparent_60%)]" />
      </div>
      
      <Header />
      
      <main className="relative z-10 pt-24 pb-12">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center p-2 mb-6 rounded-full bg-primary/10 border border-primary/20">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-primary via-orange-400 to-yellow-400 bg-clip-text text-transparent">Portofolio</span> Saya
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Kumpulan proyek dan karya yang telah saya kembangkan
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-orange-400 rounded-full mx-auto mt-8" />
          </div>

          {/* Projects */}
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Proyek</h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                project.url ? (
                  <a 
                    key={index} 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="glass-card p-8 hover:shadow-2xl transition-all duration-500 group cursor-pointer block hover:scale-[1.02]"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors flex-1 pr-4">
                        {project.title}
                      </h3>
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 group-hover:scale-110 duration-300" />
                    </div>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2 text-primary" />
                        <span className="text-sm">{project.location}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2 text-primary" />
                        <span className="text-sm">{project.year}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                  </a>
                ) : (
                  <div key={index} className="glass-card p-8 hover:shadow-2xl transition-all duration-500 group hover:scale-[1.02]">
                    <div className="flex items-start justify-between mb-6">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="w-5 h-5" />
                    </div>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2 text-primary" />
                        <span className="text-sm">{project.location}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2 text-primary" />
                        <span className="text-sm">{project.year}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
