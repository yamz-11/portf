import Image from "next/image";

const projects = [
  { title: "Proyek Satu", desc: "Deskripsi singkat tentang proyek ini dan masalah yang diselesaikan.", tags: ["Next.js", "Tailwind"], href: "#", year: "2026" },
  { title: "Proyek Dua", desc: "Deskripsi singkat tentang proyek ini dan masalah yang diselesaikan.", tags: ["React", "Node.js"], href: "#", year: "2025" },
  { title: "Proyek Tiga", desc: "Deskripsi singkat tentang proyek ini dan masalah yang diselesaikan.", tags: ["TypeScript", "Prisma"], href: "#", year: "2025" },
];

const certificates = [
  { title: "Nama Sertifikat 1", issuer: "Penerbit", year: "2025", image: "/certificates/cert-1.jpg", href: "#" },
  { title: "Nama Sertifikat 2", issuer: "Penerbit", year: "2024", image: "/certificates/cert-2.jpg", href: "#" },
  { title: "Nama Sertifikat 3", issuer: "Penerbit", year: "2024", image: "/certificates/cert-3.jpg", href: "#" },
];

const nav = [
  { label: "Proyek", href: "#projects" },
  { label: "Sertifikat", href: "#certificates" },
  { label: "Kontak", href: "#contact" },
];

function SectionTitle({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-baseline gap-3">
      <span className="muted font-mono text-xs">{index}</span>
      <h2 className="text-2xl font-semibold tracking-tight">{children}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <header className="line sticky top-0 z-50 border-b backdrop-blur-md" style={{ background: "color-mix(in srgb, var(--bg) 80%, transparent)" }}>
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <a href="#" className="font-semibold tracking-tight">
            nama<span style={{ color: "var(--accent)" }}>.</span>
          </a>
          <ul className="muted flex gap-6 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="transition hover:opacity-70" style={{ color: "inherit" }}>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto max-w-4xl px-6">
        {/* Hero */}
        <section className="flex flex-col items-start gap-10 py-20 md:flex-row md:items-center md:justify-between md:py-28">
          <div className="max-w-lg space-y-6">
            <p className="fade-up inline-flex items-center gap-2 rounded-full border line px-3 py-1 text-xs muted">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Terbuka untuk proyek baru
            </p>
            <h1 className="fade-up delay-1 text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Halo, saya <span style={{ color: "var(--accent)" }}>Nama Kamu</span>.
            </h1>
            <p className="fade-up delay-2 muted text-lg leading-relaxed">
              Web developer yang suka membangun produk yang simpel, cepat, dan nyaman dipakai.
            </p>
            <div className="fade-up delay-3 flex gap-3 pt-1">
              <a href="#projects" className="btn rounded-full px-6 py-2.5 text-sm font-medium">
                Lihat Proyek
              </a>
              <a href="#contact" className="btn-ghost rounded-full px-6 py-2.5 text-sm font-medium">
                Hubungi Saya
              </a>
            </div>
          </div>

          <div className="fade-up delay-2 relative h-60 w-60 shrink-0 overflow-hidden rounded-3xl border line md:h-72 md:w-72">
            <Image
              src="/profile.jpg"
              alt="Foto profil"
              fill
              priority
              sizes="(min-width: 768px) 288px, 240px"
              className="object-cover"
            />
          </div>
        </section>

        {/* Proyek */}
        <section id="projects" className="scroll-mt-24 py-16">
          <SectionTitle index="01">Proyek</SectionTitle>
          <div className="grid gap-4">
            {projects.map((p) => (
              <a key={p.title} href={p.href} className="card group block rounded-2xl p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="muted mt-1.5 max-w-xl text-sm leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="muted font-mono text-xs">{p.year}</span>
                    <span className="muted transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="tag rounded-full px-3 py-1 text-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Sertifikat */}
        <section id="certificates" className="scroll-mt-24 py-16">
          <SectionTitle index="02">Sertifikat</SectionTitle>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((c) => (
              <a key={c.title} href={c.href} className="card block overflow-hidden rounded-2xl">
                <div className="relative aspect-[4/3]" style={{ background: "var(--line)" }}>
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    sizes="(min-width: 1024px) 270px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-medium">{c.title}</h3>
                  <p className="muted mt-1 text-sm">
                    {c.issuer} · {c.year}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Kontak */}
        <section id="contact" className="scroll-mt-24 py-16">
          <div className="card rounded-3xl p-10 text-center md:p-14" style={{ transform: "none" }}>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Punya ide? Ayo ngobrol.</h2>
            <p className="muted mx-auto mt-3 max-w-md">
              Saya terbuka untuk proyek freelance, kolaborasi, maupun peluang kerja.
            </p>
            <a
              href="mailto:wiratamajrz@gmail.com"
              className="btn mt-7 inline-block rounded-full px-7 py-3 text-sm font-medium"
            >
              Wiratamajrz@gmail.com
            </a>
          </div>
        </section>
      </main>

      <footer className="line border-t py-8 text-center text-sm muted">
        © {new Date().getFullYear()} Wiratama
      </footer>
    </>
  );
}