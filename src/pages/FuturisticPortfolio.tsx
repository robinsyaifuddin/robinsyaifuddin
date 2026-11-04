import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Sun, 
  Moon, 
  Code, 
  Database, 
  Smartphone, 
  Globe,
  Zap,
  Brain,
  Cpu,
  Monitor
} from "lucide-react";

const FuturisticPortfolio = () => {
  const [isDark, setIsDark] = useState(true);
  
  const skills = [
    { name: "React/TypeScript", level: 95, icon: <Code className="w-4 h-4" /> },
    { name: "Node.js/Python", level: 88, icon: <Database className="w-4 h-4" /> },
    { name: "Mobile Development", level: 82, icon: <Smartphone className="w-4 h-4" /> },
    { name: "AI/ML Integration", level: 78, icon: <Brain className="w-4 h-4" /> },
    { name: "Cloud Architecture", level: 85, icon: <Globe className="w-4 h-4" /> }
  ];

  const services = [
    { title: "Full Stack Development", icon: <Code className="w-8 h-8" />, desc: "Modern web applications with React, Node.js, and cloud integration" },
    { title: "AI Automation", icon: <Brain className="w-8 h-8" />, desc: "Intelligent automation solutions using machine learning" },
    { title: "Mobile Apps", icon: <Smartphone className="w-8 h-8" />, desc: "Cross-platform mobile applications with modern frameworks" },
    { title: "System Architecture", icon: <Cpu className="w-8 h-8" />, desc: "Scalable and performant system design and implementation" }
  ];

  const projects = [
    { title: "E-Commerce Platform", image: "/lovable-uploads/0b2e3fc5-f4eb-476f-a858-bda20d9e1e4c.png", category: "Web" },
    { title: "AI Dashboard", image: "/lovable-uploads/55c66a71-0e35-40a1-a4d1-0ad1b2700206.png", category: "AI" },
    { title: "Mobile Banking App", image: "/lovable-uploads/d0cfe490-7b8f-4828-9c87-686191456de5.png", category: "Mobile" }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {/* Animated Background Grid */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center p-6 backdrop-blur-sm bg-black/20 border-b border-yellow-400/20">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
            <span className="text-black font-bold text-sm">R</span>
          </div>
          <h1 className="text-xl font-bold text-yellow-400 glow-text">Robin Syaifuddin</h1>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Sun className="w-4 h-4" />
            <Switch 
              checked={isDark} 
              onCheckedChange={setIsDark}
              className="data-[state=checked]:bg-yellow-400"
            />
            <Moon className="w-4 h-4" />
          </div>
          <Button className="bg-yellow-400 text-black hover:bg-yellow-500 glow-button font-semibold">
            LOGIN
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative z-10 text-center py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                  Programmer{" "}
                  <span className="text-yellow-400 glow-text">Full Stack</span>
                  <span className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-lg text-2xl ml-4 glow-button">
                    Senior
                  </span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Mahasiswa S1 Teknik Telekomunikasi yang passionate dalam pengembangan teknologi modern. 
                  Spesialis dalam AI automation, web development, dan digital innovation.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-4 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 glow-button">
                  <Mail className="w-5 h-5 mr-2" />
                  About Me
                </Button>
                <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-6 py-4 rounded-xl transform hover:scale-105 transition-all duration-300">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-6 py-4 rounded-xl transform hover:scale-105 transition-all duration-300">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>

            {/* Futuristic Profile Section */}
            <div className="relative">
              <div className="relative w-80 h-80 mx-auto">
                {/* Animated Rings */}
                <div className="absolute inset-0 border-2 border-yellow-400/30 rounded-full animate-spin glow-ring" style={{ animationDuration: '20s' }} />
                <div className="absolute inset-4 border border-yellow-400/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
                <div className="absolute inset-8 border border-yellow-400/10 rounded-full animate-pulse" />
                
                {/* Profile Image with Glow */}
                <div className="absolute inset-12 rounded-full overflow-hidden glow-image">
                  <img 
                    src="/lovable-uploads/d0cfe490-7b8f-4828-9c87-686191456de5.png" 
                    alt="Robin Syaifuddin" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>

                {/* Floating Tech Icons */}
                <div className="absolute -top-4 -right-4 bg-yellow-400/20 backdrop-blur-md border border-yellow-400/40 rounded-xl p-3 animate-float glow-card">
                  <Code className="w-6 h-6 text-yellow-400" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-yellow-400/20 backdrop-blur-md border border-yellow-400/40 rounded-xl p-3 animate-float glow-card" style={{ animationDelay: '1s' }}>
                  <Brain className="w-6 h-6 text-yellow-400" />
                </div>
                <div className="absolute top-20 -left-8 bg-yellow-400/20 backdrop-blur-md border border-yellow-400/40 rounded-xl p-3 animate-float glow-card" style={{ animationDelay: '2s' }}>
                  <Database className="w-6 h-6 text-yellow-400" />
                </div>
                <div className="absolute bottom-20 -right-8 bg-yellow-400/20 backdrop-blur-md border border-yellow-400/40 rounded-xl p-3 animate-float glow-card" style={{ animationDelay: '3s' }}>
                  <Zap className="w-6 h-6 text-yellow-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-yellow-400 mb-12 text-center glow-text">
            <Cpu className="w-8 h-8 inline mr-3" />
            Technical Skills
          </h3>
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-3" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <div className="text-yellow-400">{skill.icon}</div>
                    <span className="font-semibold">{skill.name}</span>
                  </div>
                  <span className="text-yellow-400 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden glow-bar">
                  <div 
                    className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full transition-all duration-1000 ease-out animate-pulse"
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.3}s`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="about" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-yellow-400 mb-12 text-center glow-text">
            <Monitor className="w-8 h-8 inline mr-3" />
            Professional Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title} 
                className="bg-gray-900/50 backdrop-blur-md border border-yellow-400/20 rounded-2xl p-6 text-center transform hover:scale-105 hover:border-yellow-400/40 transition-all duration-300 glow-card group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-yellow-400 mb-4 group-hover:animate-pulse">
                  {service.icon}
                </div>
                <h4 className="text-lg font-bold mb-3">{service.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section id="projects" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-yellow-400 mb-12 text-center glow-text">
            <Globe className="w-8 h-8 inline mr-3" />
            My Products
          </h3>
          <div className="flex justify-center mb-8 space-x-4">
            {["All", "Web", "AI", "Mobile"].map((filter) => (
              <Button 
                key={filter}
                variant={filter === "All" ? "default" : "outline"}
                className={filter === "All" 
                  ? "bg-yellow-400 text-black hover:bg-yellow-500 glow-button" 
                  : "border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                }
              >
                {filter}
              </Button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title} 
                className="bg-gray-900/50 backdrop-blur-md border border-yellow-400/20 rounded-2xl overflow-hidden transform hover:scale-105 hover:border-yellow-400/40 transition-all duration-300 glow-card group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-bold">{project.title}</h4>
                    <span className="bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full text-xs">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-yellow-400/20 py-8 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-400">
            © 2025 Robin Syaifuddin. All rights reserved. Built with passion and modern technology.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FuturisticPortfolio;