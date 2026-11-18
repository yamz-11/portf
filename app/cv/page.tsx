import Link from "next/link";
import PrintButton from "../components/PrintButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curriculum Vitae | Muhammad Tyler J. R. Wiratama",
  description: "Curriculum Vitae dan Resume profesional Muhammad Tyler J. R. Wiratama - Full-Stack Web Developer.",
};

const projects = [
  {
    title: "Kasiroff",
    category: "Web App",
    role: "Full-Stack Developer",
    period: "2026",
    desc: "Sistem Point of Sales (POS) multi-cabang modern dengan kapabilitas offline-first dan sinkronisasi otomatis saat online. Mengelola transaksi kasir, stok inventaris, dan arus kas secara real-time.",
    tech: ["Next.js", "Tailwind CSS", "Supabase", "Offline-First"],
    link: "https://kasiroff.vercel.app",
  },
  {
    title: "Journal Trades",
    category: "Web App",
    role: "Full-Stack Developer",
    period: "2026",
    desc: "Platform dashboard analitik trading tingkat lanjut. Dilengkapi grafik interaktif, kalender kalkulasi P&L, manajemen riwayat trade, jurnal harian, dan evaluasi performa mingguan.",
    tech: ["Next.js", "Tailwind CSS", "Supabase", "Analytics"],
    link: "https://yamztrades.netlify.app",
  },
  {
    title: "DocApi RS",
    category: "Sistem & Tools",
    role: "Backend & Frontend",
    period: "2026",
    desc: "Portal dokumentasi dan manajemen endpoint RESTful API terintegrasi untuk kebutuhan sistem rumah sakit.",
    tech: ["Next.js", "Tailwind CSS", "REST API"],
    link: "https://doc-api-rsma.netlify.app/",
  },
  {
    title: "Task Manager IT",
    category: "Web App",
    role: "Full-Stack Developer",
    period: "2026",
    desc: "Aplikasi pencatatan dan pelaporan kegiatan tim IT rumah sakit dengan alur pelacakan status pekerjaan terpusat.",
    tech: ["Next.js", "MySQL", "Tailwind CSS"],
    link: "https://taskmanager-itrsma.netlify.app/",
  },
  {
    title: "Jadwal Piket & Shift",
    category: "Web App",
    role: "Full-Stack Developer",
    period: "2026",
    desc: "Sistem otomasi pengaturan jadwal shift kerja tim yang praktis, transparan, dan mudah dipantau secara berkala.",
    tech: ["Next.js", "Tailwind CSS", "Supabase"],
    link: "https://yamztrades.netlify.app",
  },
  {
    title: "Simple Perpustakaan",
    category: "Sistem & Tools",
    role: "Backend Developer",
    period: "2022",
    desc: "Sistem informasi perpustakaan untuk manajemen katalog buku, pendataan anggota, serta pencatatan peminjaman & pengembalian.",
    tech: ["Laravel", "Blade", "MySQL"],
    link: "https://github.com/yamz-11/perpustakaan",
  },
  {
    title: "Apps Pemesanan Tiket Bus",
    category: "Sistem & Tools",
    role: "Desktop App Developer",
    period: "2022",
    desc: "Aplikasi desktop reservasi tiket bus dengan alokasi kursi penumpang dan kalkulasi tarif perjalanan otomatis.",
    tech: ["Java", "Desktop GUI", "OOP"],
    link: "https://github.com/yamz-11/TugasAkhir",
  },
];

const certificates = [
  {
    title: "Sertifikasi Web Development",
    issuer: "Platform Pembelajaran Digital",
    year: "2025",
  },
  {
    title: "Sertifikasi Database & Backend",
    issuer: "Institusi Pelatihan Teknologi",
    year: "2024",
  },
  {
    title: "Sertifikasi Software Engineering",
    issuer: "Lembaga Sertifikasi Kompetensi",
    year: "2024",
  },
];

export default function CVPage() {
  const email = "wiratamajrz@gmail.com";
  const github = "https://github.com/yamz-11";

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8fafc", color: "#0f172a", paddingBottom: "4rem" }}>
      {/* Action Bar (Screen only) */}
      <div
        className="no-print"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #e2e8f0",
          padding: "0.75rem 1.5rem",
        }}
      >
        <div
          className="container-custom"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "#2563eb",
              textDecoration: "none",
            }}
          >
            ← Kembali ke Portfolio
          </Link>

          <PrintButton
            className="btn-blue"
            label="Cetak / Simpan PDF"
            style={{ padding: "0.5rem 1.25rem", fontSize: "0.85rem" }}
          />
        </div>
      </div>

      {/* CV Sheet Container */}
      <div
        className="container-custom"
        style={{
          marginTop: "2rem",
          maxWidth: "52rem",
          backgroundColor: "#ffffff",
          border: "1px solid #e2e8f0",
          borderRadius: "1rem",
          padding: "3rem 2.5rem",
          boxShadow: "0 4px 20px -4px rgba(15, 23, 42, 0.06)",
        }}
      >
        {/* CV Header */}
        <header
          style={{
            borderBottom: "2px solid #2563eb",
            paddingBottom: "1.5rem",
            marginBottom: "2rem",
          }}
        >
          <h1
            style={{
              fontSize: "2.25rem",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#0f172a",
              margin: "0 0 0.25rem 0",
            }}
          >
            Muhammad Tyler J. R. Wiratama
          </h1>
          <p
            style={{
              fontSize: "1.125rem",
              fontWeight: 600,
              color: "#2563eb",
              margin: "0 0 1rem 0",
            }}
          >
            Full-Stack Web Developer
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.5rem",
              fontSize: "0.875rem",
              color: "#475569",
            }}
          >
            <span>
              <strong>Email:</strong> {email}
            </span>
            <span>
              <strong>GitHub:</strong>{" "}
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#2563eb", textDecoration: "none" }}
              >
                github.com/yamz-11
              </a>
            </span>
            <span>
              <strong>Lokasi:</strong> Indonesia
            </span>
          </div>
        </header>

        {/* Ringkasan Profesional */}
        <section style={{ marginBottom: "2rem" }}>
          <h2
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#2563eb",
              margin: "0 0 0.75rem 0",
              borderBottom: "1px solid #e2e8f0",
              paddingBottom: "0.25rem",
            }}
          >
            Ringkasan Profil
          </h2>
          <p
            style={{
              fontSize: "0.925rem",
              lineHeight: 1.65,
              color: "#334155",
              margin: 0,
            }}
          >
            Pengembang Web Full-Stack dengan pengalaman dalam merancang dan membangun aplikasi web yang cepat,
            terstruktur, dan fungsional. Berpengalaman luas dalam ekosistem modern seperti{" "}
            <strong>Next.js</strong>, <strong>React</strong>, <strong>TypeScript</strong>,{" "}
            <strong>Tailwind CSS</strong>, serta arsitektur backend/database modern seperti{" "}
            <strong>Supabase</strong>, <strong>MySQL</strong>, dan arsitektur <em>offline-first</em>.
          </p>
        </section>

        {/* Proyek & Portofolio Karya */}
        <section style={{ marginBottom: "2rem" }}>
          <h2
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#2563eb",
              margin: "0 0 1rem 0",
              borderBottom: "1px solid #e2e8f0",
              paddingBottom: "0.25rem",
            }}
          >
            Portofolio Proyek
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {projects.map((p) => (
              <div
                key={p.title}
                style={{
                  borderLeft: "3px solid #bfdbfe",
                  paddingLeft: "1rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "#0f172a",
                      margin: 0,
                    }}
                  >
                    {p.title}{" "}
                    <span style={{ fontSize: "0.8rem", fontWeight: 500, color: "#64748b" }}>
                      — {p.category}
                    </span>
                  </h3>
                  <span
                    style={{
                      fontFamily: "monospace",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "#2563eb",
                    }}
                  >
                    {p.period}
                  </span>
                </div>

                <p
                  style={{
                    fontSize: "0.875rem",
                    lineHeight: 1.55,
                    color: "#475569",
                    margin: "0.35rem 0 0.5rem 0",
                  }}
                >
                  {p.desc}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: "0.725rem",
                        backgroundColor: "#eff6ff",
                        color: "#1d4ed8",
                        border: "1px solid #bfdbfe",
                        borderRadius: "9999px",
                        padding: "0.1rem 0.55rem",
                        fontWeight: 500,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sertifikasi */}
        <section style={{ marginBottom: "2rem" }}>
          <h2
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#2563eb",
              margin: "0 0 1rem 0",
              borderBottom: "1px solid #e2e8f0",
              paddingBottom: "0.25rem",
            }}
          >
            Sertifikasi
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {certificates.map((c) => (
              <div
                key={c.title}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "0.875rem",
                  paddingBottom: "0.5rem",
                  borderBottom: "1px dashed #e2e8f0",
                }}
              >
                <div>
                  <strong style={{ color: "#0f172a" }}>{c.title}</strong>
                  <div style={{ fontSize: "0.775rem", color: "#64748b" }}>{c.issuer}</div>
                </div>
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "#2563eb",
                  }}
                >
                  {c.year}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Keahlian & Teknologi Teknis */}
        <section>
          <h2
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#2563eb",
              margin: "0 0 1rem 0",
              borderBottom: "1px solid #e2e8f0",
              paddingBottom: "0.25rem",
            }}
          >
            Keahlian Teknis
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1rem",
              fontSize: "0.85rem",
              color: "#334155",
            }}
          >
            <div>
              <p style={{ fontWeight: 700, margin: "0 0 0.25rem 0", color: "#0f172a" }}>Frontend</p>
              <p style={{ margin: 0, color: "#64748b" }}>Next.js, React, TypeScript, Tailwind CSS, HTML5/CSS3</p>
            </div>
            <div>
              <p style={{ fontWeight: 700, margin: "0 0 0.25rem 0", color: "#0f172a" }}>Backend & Database</p>
              <p style={{ margin: 0, color: "#64748b" }}>Supabase, MySQL, REST API, Node.js, Laravel</p>
            </div>
            <div>
              <p style={{ fontWeight: 700, margin: "0 0 0.25rem 0", color: "#0f172a" }}>Tools & Platform</p>
              <p style={{ margin: 0, color: "#64748b" }}>Git, GitHub, Vercel, Netlify, VS Code</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
