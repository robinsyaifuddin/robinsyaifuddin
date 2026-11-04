import { Mail, Phone, MapPin, Linkedin, Github, Globe, ArrowUp, Heart } from "lucide-react";
import { Link } from "react-router-dom";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const quickLinks = [{
    name: "Beranda",
    href: "/"
  }, {
    name: "Tentang",
    href: "/about"
  }, {
    name: "Portofolio",
    href: "/portfolio"
  }, {
    name: "Kontak",
    href: "/contact"
  }];
  const services = ["Web Development", "UI/UX Design", "Digital Marketing", "Konsultasi IT"];
  const socialLinks = [{
    icon: <Linkedin className="w-5 h-5" />,
    name: "LinkedIn",
    href: "https://linkedin.com/in/robin-syaifuddin",
    color: "hover:text-blue-400"
  }, {
    icon: <Github className="w-5 h-5" />,
    name: "GitHub",
    href: "https://github.com/robinsyaifuddin",
    color: "hover:text-purple-400"
  }, {
    icon: <Globe className="w-5 h-5" />,
    name: "Website",
    href: "https://robinsyaifuddin.web.id",
    color: "hover:text-green-400"
  }];
  return <footer className="relative bg-gradient-to-br from-background via-card to-background border-t border-border">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      </div>

      <div className="relative container mx-auto px-6 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-white/20 transform hover:scale-110 transition-all duration-300 glow-animation">
                <img 
                  src="/lovable-uploads/0b2e3fc5-f4eb-476f-a858-bda20d9e1e4c.png" 
                  alt="Robin Syaifuddin" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <span className="text-xl font-bold text-white">Robin Syaifuddin</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Penggiat Teknologi dan Pengembangan Diri yang berkomitmen untuk mewujudkan peradaban yang lebih baik melalui inovasi digital.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className={`p-3 bg-card border border-border rounded-lg text-gray-400 transition-all duration-300 transform hover:scale-110 hover:border-primary/50 ${social.color} group`}>
                  <div className="transform group-hover:rotate-12 transition-transform duration-300">
                    {social.icon}
                  </div>
                </a>)}
            </div>
          </div>

          {/* Mobile: 2 Column Layout for Menu and Services */}
          <div className="md:hidden grid grid-cols-2 gap-8 col-span-2">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 relative">
                Menu Utama
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-primary to-orange-500 rounded-full"></div>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => <li key={index}>
                    <Link to={link.href} className="text-gray-400 hover:text-primary transition-all duration-300 flex items-center group">
                      <div className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-3"></div>
                      {link.name}
                    </Link>
                  </li>)}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 relative">
                Layanan
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-primary to-orange-500 rounded-full"></div>
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => <li key={index} className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center group">
                    <div className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-3"></div>
                    {service}
                  </li>)}
              </ul>
            </div>
          </div>

          {/* Desktop: Normal Layout */}
          <div className="hidden md:block">
            <h3 className="text-lg font-semibold text-white mb-6 relative">
              Menu Utama
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-primary to-orange-500 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => <li key={index}>
                  <Link to={link.href} className="text-gray-400 hover:text-primary transition-all duration-300 flex items-center group">
                    <div className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-3"></div>
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          <div className="hidden md:block">
            <h3 className="text-lg font-semibold text-white mb-6 relative">
              Layanan
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-primary to-orange-500 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => <li key={index} className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center group">
                  <div className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-3"></div>
                  {service}
                </li>)}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-6 relative">
              Kontak
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-primary to-orange-500 rounded-full"></div>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-gray-400 group">
                <MapPin className="w-5 h-5 mt-1 group-hover:text-primary transition-colors duration-300" />
                <span>Lampung Timur, Lampung</span>
              </div>
              <a href="mailto:mr.robinsyaifuddin@gmail.com" className="flex items-start space-x-3 text-gray-400 hover:text-primary transition-colors duration-300 group">
                <Mail className="w-5 h-5 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <span>mr.robinsyaifuddin@gmail.com</span>
              </a>
              <a href="tel:+62887437525303" className="flex items-start space-x-3 text-gray-400 hover:text-primary transition-colors duration-300 group">
                <Phone className="w-5 h-5 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <span>+62 887437525303</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 pt-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Robin Syaifuddin. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-primary/10 to-orange-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl"></div>
    </footer>;
};
export default Footer;