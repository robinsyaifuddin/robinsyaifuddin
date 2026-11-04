import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { User, GraduationCap, Award, Calendar, MapPin, ExternalLink } from "lucide-react";

const About = () => {
  const educations = [
    {
      institution: "Institut Teknologi Sumatera",
      degree: "Jurusan Teknologi Produksi dan Industri (S1 Teknik Telekomunikasi)",
      period: "2022 - sekarang"
    },
    {
      institution: "SMA Teladan Way Jepara",
      degree: "MIPA, Lulusan Terbaik Nonakademik",
      period: "2019 - 2022"
    }
  ];

  const skills = {
    teknis: ["AI Automasi", "Pengembang Website", "Desain Grafis", "Digital Marketing", "Administrasi"],
    interpersonal: ["Kepemimpinan", "Empati", "Manajemen", "Komunikasi", "Penyelesaian Masalah", "Kreatif", "Kritis"],
    bahasa: ["Indonesia (Mahir)", "Inggris (Sedang)"],
    software: ["Microsoft 360", "Windsurf", "Git/Github", "Supabase", "Canva", "Capcut", "Notion", "Meta Business Suite"]
  };

  const achievements = [
    "Delegasi Duta Pendidikan Leaders.id - Yayasan Edukasi Harapan Indonesia 2024",
    "Juara 2 Mufest Ikam Lamtim Essay Competition - Ikatan Mahasiswa Lampung Timur 2024",
    "Juara 3 Duta GenRe Institut Teknologi Sumatera - LPSDM ITERA 2023",
    "Duta Inspirasi Indonesia Batch 9 - Yayasan Duta Inspirasi Indonesia 2023",
    "Student Ambassador Diaspora Future Leader Scholarship - Diaspora Mengajar 2022"
  ];

  const experiences = [
    {
      title: "Magang Departemen Infrastruktur Teknologi",
      company: "PT. Aerofood Indonesia, Banten",
      period: "Juni 2025 - sekarang",
      achievements: [
        "Berhasil membuat panduan instalasi software dan hardware perangkat komputer dan printer",
        "Melakukan troubleshooting hardware & software serta pemeliharaan jaringan lokal pada kantor pusat"
      ]
    },
    {
      title: "Kepala Departemen Digital",
      company: "Rekaland Indonesia",
      period: "Maret 2025 - sekarang",
      achievements: [
        "Mengelola dan mengembangkan website serta media sosial untuk membangun branding yang kuat dan profesional",
        "Meningkatkan visibilitas online guna mendukung proses pemasaran dan mempermudah penjualan produk"
      ]
    },
    {
      title: "Magang Bidang Kemahasiswaan",
      company: "Institut Teknologi Sumatera, Lampung",
      period: "Juni 2024 - September 2024",
      achievements: [
        "Melakukan koordinasi dalam penyelenggaraan kegiatan melakukan pengolahan administrasi",
        "Pengelolaan media sosial dan tracer study penjaringan data alumni ITERA dan penyesuaian dalam website"
      ]
    }
  ];

  const organizations = [
    "CEO & Founder DigiBooster Indonesia, Maret 2025 - sekarang",
    "Anggota Bidang Wasit Esport Indonesia Kabupaten Lampung Timur, Juni 2025 - sekarang",
    "Anggota Komisi 2 Eksternal Medinfo Senat Keluarga Mahasiswa ITERA, Maret 2025 - sekarang",
    "Senator Himpunan Mahasiswa Telekomunikasi Quaestum ITERA, Maret 2025 - sekarang",
    "Kepala Bidang Perencanaan dan Pengembangan GenRe Kabupaten Lampung Timur, Juni 2022 - sekarang"
  ];

  const trainings = [
    "Peserta Leadership Development Program – Ikatan Mahasiswa Lampung Timur 2025",
    "Peserta Latihan Keterampilan Manajemen Mahasiswa TD-ITERA 2024",
    "Peserta Inspiring Leader Camp Batch 3 - Yayasan Duta Inspirasi Indonesia 2023",
    "Peserta International Model United Nations, Online Conference 94.0, - International Global Network 2022",
    "Peserta StartUp Youth Indonesia Leadership Camp, - StartUp Youth Indonesia dan Forum Osis Nasional 2021"
  ];

  const certifications = [
    "Sertifikasi Front Office Agroforestri ITERA - Agropreneur ITERA",
    "Certificate of Competence – Website Creation (habiskerja.com)",
    "Sertifikat WordPress dari Dasar Hingga Mahir (kursusdigital.id)",
    "Sertifikat Digital Marketing dari Dasar Hingga Mahir (kursusdigital.id)",
    "Certificate of Completion – HTML & CSS for Beginners (Learnoverse)"
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
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center p-2 mb-6 rounded-full bg-primary/10 border border-primary/20">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Tentang <span className="bg-gradient-to-r from-primary via-orange-400 to-yellow-400 bg-clip-text text-transparent">Saya</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
              Penggiat Teknologi dan Pengembangan Diri dengan pengalaman luas dalam pengembangan digitalisasi dan organisasi. 
              Terbukti aktif dalam berbagai kegiatan, proyek kolaboratif, dan program magang yang mengasah kemampuan teknis serta interpersonal.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-orange-400 rounded-full mx-auto mt-8" />
          </div>

          <div className="grid gap-8 lg:gap-12">
            {/* Personal Info */}
            <div className="glass-card p-8 lg:p-12 hover:shadow-2xl transition-all duration-500 group">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-primary/20 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <User className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Profil Pribadi</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <p className="text-muted-foreground"><strong className="text-foreground">Nama:</strong> Robin Syaifuddin</p>
                  <p className="text-muted-foreground"><strong className="text-foreground">Lokasi:</strong> Lampung Timur, Lampung</p>
                  <p className="text-muted-foreground"><strong className="text-foreground">Telepon:</strong> +62 887437525303</p>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground"><strong className="text-foreground">Email:</strong> mr.robinsyaifuddin@gmail.com</p>
                  <p className="text-muted-foreground"><strong className="text-foreground">LinkedIn:</strong> Robin Syaifuddin</p>
                  <p className="text-muted-foreground"><strong className="text-foreground">Website:</strong> robinsyaifuddin.web.id</p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="glass-card p-8 lg:p-12 hover:shadow-2xl transition-all duration-500 group">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-primary/20 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Pendidikan</h2>
              </div>
              <div className="space-y-8">
                {educations.map((edu, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-colors duration-300">
                    <div className="absolute -left-2 top-2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-md" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">{edu.institution}</h3>
                    <p className="text-muted-foreground mb-2">{edu.degree}</p>
                    <p className="text-primary font-medium">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="glass-card p-8 lg:p-12 hover:shadow-2xl transition-all duration-500 group">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-primary/20 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Keahlian</h2>
              </div>
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">Teknis</h3>
                    <div className="flex flex-wrap gap-3">
                      {skills.teknis.map((skill, index) => (
                        <span key={index} className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium hover:bg-primary/30 transition-colors cursor-default">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">Interpersonal</h3>
                    <div className="flex flex-wrap gap-3">
                      {skills.interpersonal.map((skill, index) => (
                        <span key={index} className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium hover:bg-primary/30 transition-colors cursor-default">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">Bahasa</h3>
                    <div className="flex flex-wrap gap-3">
                      {skills.bahasa.map((skill, index) => (
                        <span key={index} className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium hover:bg-primary/30 transition-colors cursor-default">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">Software/Tools</h3>
                    <div className="flex flex-wrap gap-3">
                      {skills.software.map((skill, index) => (
                        <span key={index} className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium hover:bg-primary/30 transition-colors cursor-default">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div className="glass-card p-8 lg:p-12 hover:shadow-2xl transition-all duration-500 group">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-primary/20 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Pengalaman Kerja</h2>
              </div>
              <div className="space-y-10">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-colors duration-300">
                    <div className="absolute -left-2 top-2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-md" />
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center text-muted-foreground mt-2 lg:mt-0">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground">{achievement}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Organizations */}
            <div className="glass-card p-8 lg:p-12 hover:shadow-2xl transition-all duration-500 group">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-primary/20 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Organisasi</h2>
              </div>
              <div className="grid gap-4">
                {organizations.map((org, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-xl bg-card/30 hover:bg-card/50 transition-colors duration-300">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-muted-foreground">{org}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Training & Certifications */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Training */}
              <div className="glass-card p-8 lg:p-10 hover:shadow-2xl transition-all duration-500 group">
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-primary/20 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Pelatihan</h2>
                </div>
                <div className="space-y-4">
                  {trainings.map((training, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-card/30 transition-colors duration-300">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground text-sm">{training}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="glass-card p-8 lg:p-10 hover:shadow-2xl transition-all duration-500 group">
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-primary/20 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Sertifikasi</h2>
                </div>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-card/30 transition-colors duration-300">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground text-sm">{cert}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="glass-card p-8 lg:p-12 hover:shadow-2xl transition-all duration-500 group">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-primary/20 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Penghargaan & Pencapaian</h2>
              </div>
              <div className="grid gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-xl bg-card/30 hover:bg-card/50 transition-colors duration-300">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-muted-foreground">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
