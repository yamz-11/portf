import Image from "next/image";
import Link from "next/link";
import ProjectsSection, { Project } from "./components/ProjectsSection";
import PrintButton from "./components/PrintButton";

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
    image: "",
    href: "#",
  },
  {
    title: "Sertifikasi Database & Backend",
    issuer: "Institusi Pelatihan Teknologi",
    year: "2024",
    image: "",
    href: "#",
  },
  {
    title: "Sertifikasi Software Engineering",
    issuer: "Lembaga Sertifikasi Kompetensi",
    year: "2024",
    image: "",
    href: "#",
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
        className="no-print"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #e2e8f0",
        }}
      >
        <div className="container-custom header-wrapper">
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
              flexShrink: 0,
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

          <nav className="header-nav">
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
        </div>
      </header>

      <main className="container-custom" style={{ paddingTop: "2.5rem", paddingBottom: "4rem" }}>
        {/* Hero Section */}
        <section id="about" className="hero-section">
          <div className="hero-content">
            {/* <p
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
            </p> */}

            <h1 className="hero-title">
              Halo, saya{" "}
              <span style={{ color: "#2563eb" }}>
                Athallariq Tyler J. Riches Wiratama
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
            <div className="hero-actions no-print">
              <a href="#projects" className="btn-blue">
                <span>Lihat Proyek</span>
                <span style={{ fontSize: "1rem", lineHeight: 1 }}>↓</span>
              </a>

              <PrintButton />

              <a
                href="https://github.com/yamz-11"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-white"
              >
                GitHub ↗
              </a>
            </div>

            {/* Print-Only Contact Info */}
            <div
              className="print-only"
              style={{
                marginTop: "1.25rem",
                paddingTop: "0.75rem",
                borderTop: "1px solid #cbd5e1",
                fontSize: "0.85rem",
                color: "#334155",
              }}
            >
              {/* <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem" }}>
                <span><strong>Email:</strong> {email}</span>
                <span><strong>GitHub:</strong> github.com/yamz-11</span>
                <span><strong>Lokasi:</strong> Indonesia</span>
              </div> */}
            </div>
          </div>

          {/* Profile Avatar Frame */}
          <div className="hero-avatar">
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

        {/* Highlights Row */}
        <section className="no-print" style={{ paddingBottom: "2.5rem", paddingTop: "0.5rem" }}>
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
                <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", backgroundColor: "#f8fafc", borderBottom: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                  {c.image ? (
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      sizes="(min-width: 1024px) 270px, (min-width: 640px) 50vw, 100vw"
                      style={{ objectFit: "cover" }}
                    />
                  ) : (
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#94a3b8" }}>
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="18" height="14" x="3" y="5" rx="2" />
                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                        <circle cx="9" cy="9" r="2" />
                      </svg>
                    </div>
                  )}
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

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "0.75rem", marginTop: "1rem" }}>
              <a href={`mailto:${email}`} className="btn-blue" style={{ padding: "0.65rem 1.75rem" }}>
                {email}
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="no-print"
        style={{
          borderTop: "1px solid #e2e8f0",
          backgroundColor: "#ffffff",
          padding: "2rem 0",
          fontSize: "0.8rem",
          color: "#64748b",
        }}
      >
        <div className="container-custom footer-inner">
          <p style={{ margin: 0 }}>© 2026 Muhammad Tyler J. R. Wiratama. All rights reserved.</p>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Link
              href="/cv"
              style={{ color: "#2563eb", textDecoration: "none", fontWeight: 600 }}
            >
              Halaman CV ↗
            </Link>
            <span>·</span>
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
