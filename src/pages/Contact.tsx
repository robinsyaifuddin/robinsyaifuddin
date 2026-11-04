import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "mr.robinsyaifuddin@gmail.com",
      link: "mailto:mr.robinsyaifuddin@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Telepon",
      value: "+62 887437525303",
      link: "tel:+62887437525303"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Lokasi",
      value: "Lampung Timur, Lampung",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Robin Syaifuddin",
      link: "#"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      label: "Website",
      value: "robinsyaifuddin.web.id",
      link: "https://robinsyaifuddin.web.id"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/robinsyaifuddin",
      link: "https://github.com/robinsyaifuddin"
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
              Hubungi <span className="bg-gradient-to-r from-primary via-orange-400 to-yellow-400 bg-clip-text text-transparent">Saya</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Mari berkolaborasi dan berdiskusi tentang proyek atau peluang kerja sama
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-orange-400 rounded-full mx-auto mt-8" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="glass-card p-8 lg:p-10 hover:shadow-2xl transition-all duration-500 group">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">Informasi Kontak</h2>
                <div className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 rounded-xl bg-card/30 hover:bg-card/50 transition-all duration-300 group/item">
                      <div className="text-primary p-3 bg-primary/10 rounded-xl group-hover/item:scale-110 transition-transform duration-300">
                        {contact.icon}
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm mb-1">{contact.label}</p>
                        {contact.link ? (
                          <a href={contact.link} className="text-foreground hover:text-primary transition-colors font-medium">
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{contact.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-8 lg:p-10 hover:shadow-2xl transition-all duration-500 group">
                <h3 className="text-xl font-bold text-foreground mb-6">Media Sosial</h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 rounded-xl bg-card/30 hover:bg-card/50 transition-all duration-300 group/item">
                      <div className="text-primary p-3 bg-primary/10 rounded-xl group-hover/item:scale-110 transition-transform duration-300">
                        {social.icon}
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm mb-1">{social.label}</p>
                        <a href={social.link} className="text-foreground hover:text-primary transition-colors font-medium">
                          {social.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-8 lg:p-10 hover:shadow-2xl transition-all duration-500">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">Kirim Pesan</h2>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-foreground font-medium">Nama</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-4 bg-background/80 border border-border rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground transition-all duration-300"
                    placeholder="Nama lengkap Anda"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-foreground font-medium">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-4 bg-background/80 border border-border rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground transition-all duration-300"
                    placeholder="email@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-foreground font-medium">Subjek</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-4 bg-background/80 border border-border rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground transition-all duration-300"
                    placeholder="Subjek pesan"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-foreground font-medium">Pesan</label>
                  <textarea 
                    rows={6}
                    className="w-full px-4 py-4 bg-background/80 border border-border rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground resize-none transition-all duration-300"
                    placeholder="Tulis pesan Anda di sini..."
                  ></textarea>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20">
                  Kirim Pesan
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
