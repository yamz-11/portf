import Image from "next/image";
import CopyEmailButton from "./components/CopyEmailButton";
import ProjectsSection, { Project } from "./components/ProjectsSection";

const projects: Project[] = [
  {
    title: "Kasiroff",
    category: "Web App",
    desc: "Sistem Point of Sales (POS) multi-cabang modern dengan kapabilitas offline-first dan sinkronisasi otomatis saat online. Mengelola transaksi kasir, stok inventaris, dan arus kas secara real-time.",
    tags: ["Next.js", "Tailwind CSS", "Supabase", "Offline-First"],
    href: "https://kasiroff.vercel.app",
    year: "2026",
    featured: true,
  },
  {
    title: "Journal Trades",
    category: "Web App",
    desc: "Platform dashboard analitik trading tingkat lanjut. Dilengkapi grafik interaktif, kalender kalkulasi P&L, manajemen riwayat trade, jurnal harian, dan evaluasi performa mingguan.",
    tags: ["Next.js", "Tailwind CSS", "Supabase", "Analytics"],
    href: "https://yamztrades.netlify.app",
    year: "2026",
    featured: true,
  },
  {
    title: "DocApi RS",
    category: "Sistem & Tools",
    desc: "Portal dokumentasi dan manajemen endpoint RESTful API terintegrasi untuk kebutuhan sistem rumah sakit.",
    tags: ["Next.js", "Tailwind CSS", "REST API"],
    href: "https://doc-api-rsma.netlify.app/",
    year: "2026",
  },
  {
    title: "Task Manager IT",
    category: "Web App",
    desc: "Aplikasi pencatatan dan pelaporan kegiatan tim IT rumah sakit dengan alur pelacakan status pekerjaan terpusat.",
    tags: ["Next.js", "MySQL", "Tailwind CSS"],
    href: "https://taskmanager-itrsma.netlify.app/",
    year: "2026",
  },
  {
    title: "Jadwal Piket & Shift",
    category: "Web App",
    desc: "Sistem otomasi pengaturan jadwal shift kerja tim yang praktis, transparan, dan mudah dipantau secara berkala.",
    tags: ["Next.js", "Tailwind CSS", "Supabase"],
    href: "https://yamztrades.netlify.app",
    year: "2026",
  },
  {
    title: "Simple Perpustakaan",
    category: "Sistem & Tools",
    desc: "Sistem informasi perpustakaan untuk manajemen katalog buku, pendataan anggota, serta pencatatan peminjaman & pengembalian.",
    tags: ["Laravel", "Blade", "MySQL"],
    href: "https://github.com/yamz-11/perpustakaan",
    github: "https://github.com/yamz-11/perpustakaan",
    year: "2022",
  },
  {
    title: "Apps Pemesanan Tiket Bus",
    category: "Sistem & Tools",
    desc: "Aplikasi desktop reservasi tiket bus dengan alokasi kursi penumpang dan kalkulasi tarif perjalanan otomatis.",
    tags: ["Java", "Desktop GUI", "OOP"],
    href: "https://github.com/yamz-11/TugasAkhir",
    github: "https://github.com/yamz-11/TugasAkhir",
    year: "2022",
  },
];

const certificates = [
  {
    title: "Sertifikasi Web Development",
    issuer: "Platform Pembelajaran Digital",
    year: "2025",
    image: "/certificates/cert-1.jpg",
    href: "/certificates/cert-1.jpg",
  },
  {
    title: "Sertifikasi Database & Backend",
    issuer: "Institusi Pelatihan Teknologi",
    year: "2024",
    image: "/certificates/cert-2.jpg",
    href: "/certificates/cert-2.jpg",
  },
  {
    title: "Sertifikasi Software Engineering",
    issuer: "Lembaga Sertifikasi Kompetensi",
    year: "2024",
    image: "/certificates/cert-3.jpg",
    href: "/certificates/cert-3.jpg",
  },
];

const nav = [
  { label: "Tentang", href: "#about" },
  { label: "Proyek", href: "#projects" },
  { label: "Sertifikat", href: "#certificates" },
  { label: "Kontak", href: "#contact" },
];

export default function Home() {
  const email = "wiratamajrz@gmail.com";

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8fafc", color: "#0f172a" }}>
      {/* Sticky Header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #e2e8f0",
        }}
      >
        <div
          className="container-custom"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "1rem",
            paddingBottom: "1rem",
          }}
        >
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "1.125rem",
              fontWeight: 800,
              textDecoration: "none",
              color: "#0f172a",
              letterSpacing: "-0.025em",
            }}
          >
            <span>Yama</span>
            <span
              style={{
                display: "inline-block",
                width: "0.5rem",
                height: "0.5rem",
                borderRadius: "9999px",
                backgroundColor: "#2563eb",
              }}
            />
          </a>

          <nav style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  color: "#64748b",
                  transition: "color 0.2s ease",
                }}
              >
                {n.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="btn-blue" style={{ padding: "0.45rem 1.1rem", fontSize: "0.8rem" }}>
            Hubungi
          </a>
        </div>
      </header>

      <main className="container-custom" style={{ paddingTop: "2.5rem", paddingBottom: "4rem" }}>
        {/* Hero Section */}
        <section
          id="about"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2.5rem",
            paddingTop: "2rem",
            paddingBottom: "2.5rem",
            flexWrap: "wrap-reverse",
          }}
        >
          <div style={{ flex: "1 1 340px", maxWidth: "560px" }}>
            {/* Status Pill */}
            {/* <div className="pill-status" style={{ marginBottom: "1.25rem" }}>
              <span className="pulse-dot">
                <span className="pulse-dot-ping" />
                <span className="pulse-dot-core" />
              </span>
              <span>Tersedia untuk proyek freelance & kolaborasi baru</span>
            </div> */}

            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#2563eb",
                marginBottom: "0.5rem",
              }}
            >
              Full-Stack Web Developer
            </p>

            <h1
              style={{
                fontSize: "2.5rem",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                color: "#0f172a",
                margin: "0 0 1rem 0",
              }}
            >
              {/* Halo, saya{" "} */}
              <span style={{ color: "#2563eb" }}>
                Muhammad Tyler J. Riches Wiratama
              </span>
            </h1>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.65,
                color: "#475569",
                margin: "0 0 1.5rem 0",
              }}
            >
              Fokus merancang dan membangun aplikasi web modern yang cepat, terstruktur, dan
              intuitif. Menguasai ekosistem{" "}
              <strong style={{ color: "#0f172a", fontWeight: 600 }}>Next.js</strong>,{" "}
              <strong style={{ color: "#0f172a", fontWeight: 600 }}>TypeScript</strong>,{" "}
              <strong style={{ color: "#0f172a", fontWeight: 600 }}>Tailwind CSS</strong>, dan
              arsitektur database cloud modern (<strong style={{ color: "#0f172a", fontWeight: 600 }}>Supabase</strong> /{" "}
              <strong style={{ color: "#0f172a", fontWeight: 600 }}>MySQL</strong>).
            </p>

            {/* Quick Actions */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.75rem" }}>
              <a href="#projects" className="btn-blue">
                <span>Lihat Proyek</span>
                <span style={{ fontSize: "1rem", lineHeight: 1 }}>↓</span>
              </a>

              <CopyEmailButton email={email} className="btn-white" />

              <a
                href="https://github.com/yamz-11"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-white"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          {/* Profile Avatar Frame */}
          <div
            style={{
              position: "relative",
              width: "220px",
              height: "220px",
              minWidth: "220px",
              minHeight: "220px",
              borderRadius: "1.5rem",
              overflow: "hidden",
              border: "1px solid #bfdbfe",
              backgroundColor: "#ffffff",
              boxShadow: "0 12px 28px -6px rgba(37, 99, 235, 0.15)",
              margin: "0 auto",
            }}
          >
            <Image
              src="/avatar.svg"
              alt="Avatar Muhammad Tyler Wiratama"
              width={220}
              height={220}
              priority
              unoptimized
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </section>

        {/* Highlights Row (4 clean columns) */}
        <section style={{ paddingBottom: "2.5rem", paddingTop: "0.5rem" }}>
          <div className="stat-row">
            <div className="stat-card">
              <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "#2563eb" }}>7+</span>
              <p style={{ margin: "0.25rem 0 0 0", fontSize: "0.75rem", fontWeight: 500, color: "#64748b" }}>
                Proyek Selesai
              </p>
            </div>
            <div className="stat-card">
              <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "#2563eb" }}>Modern</span>
              <p style={{ margin: "0.25rem 0 0 0", fontSize: "0.75rem", fontWeight: 500, color: "#64748b" }}>
                Next.js & Supabase
              </p>
            </div>
            <div className="stat-card">
              <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "#2563eb" }}>Offline</span>
              <p style={{ margin: "0.25rem 0 0 0", fontSize: "0.75rem", fontWeight: 500, color: "#64748b" }}>
                First Sync Capable
              </p>
            </div>
            <div className="stat-card">
              <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "#2563eb" }}>Clean</span>
              <p style={{ margin: "0.25rem 0 0 0", fontSize: "0.75rem", fontWeight: 500, color: "#64748b" }}>
                Code Architecture
              </p>
            </div>
          </div>
        </section>

        {/* Koleksi Proyek */}
        <ProjectsSection projects={projects} />

        {/* Sertifikasi */}
        <section id="certificates" style={{ scrollMarginTop: "5rem", paddingTop: "2rem", paddingBottom: "3rem" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", marginBottom: "1.5rem" }}>
            <span style={{ fontFamily: "monospace", fontSize: "0.85rem", fontWeight: 700, color: "#2563eb" }}>
              02
            </span>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#0f172a", margin: 0, letterSpacing: "-0.02em" }}>
              Sertifikasi
            </h2>
          </div>

          <div className="cert-grid">
            {certificates.map((c) => (
              <a
                key={c.title}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-card"
              >
                <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", backgroundColor: "#eff6ff", overflow: "hidden" }}>
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    sizes="(min-width: 1024px) 270px, (min-width: 640px) 50vw, 100vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: "1.25rem" }}>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#0f172a", margin: "0 0 0.35rem 0" }}>
                    {c.title}
                  </h3>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.75rem", color: "#64748b" }}>
                    <span>{c.issuer}</span>
                    <span style={{ fontFamily: "monospace", color: "#2563eb", fontWeight: 600 }}>{c.year}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Kontak Section */}
        <section id="contact" style={{ scrollMarginTop: "5rem", paddingTop: "2rem", paddingBottom: "3rem" }}>
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "1.25rem",
              padding: "2.5rem 1.5rem",
              textAlign: "center",
              boxShadow: "0 2px 8px -2px rgba(15, 23, 42, 0.04)",
            }}
          >
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: 800,
                color: "#0f172a",
                margin: "0 0 0.5rem 0",
                letterSpacing: "-0.02em",
              }}
            >
              Hit Me Up!
            </h2>
            {/* <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.6,
                color: "#64748b",
                maxWidth: "440px",
                margin: "0 auto 1.5rem auto",
              }}
            >
              Saya terbuka untuk proyek freelance, kolaborasi aplikasi, maupun peluang kerja.
            </p> */}

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "0.75rem" }}>
              <a href={`mailto:${email}`} className="btn-blue" style={{ padding: "0.65rem 1.75rem" }}>
                {email}
              </a>

              <CopyEmailButton email={email} className="btn-white" style={{ padding: "0.65rem 1.5rem" }} />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid #e2e8f0",
          backgroundColor: "#ffffff",
          padding: "2rem 0",
          fontSize: "0.8rem",
          color: "#64748b",
        }}
      >
        <div
          className="container-custom"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p style={{ margin: 0 }}>© 2026 Muhammad Tyler J. R. Wiratama. All rights reserved.</p>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <a
              href="https://github.com/yamz-11"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#475569", textDecoration: "none", fontWeight: 500 }}
            >
              GitHub
            </a>
            <span>·</span>
            <a
              href="#"
              style={{ color: "#475569", textDecoration: "none", fontWeight: 500 }}
            >
              Kembali ke Atas ↑
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
