"use client";

import { useState } from "react";

export interface Project {
  title: string;
  category: "Web App" | "Sistem & Tools";
  desc: string;
  tags: string[];
  href: string;
  github?: string;
  year: string;
  featured?: boolean;
}

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  const [activeTab, setActiveTab] = useState<"Semua" | "Web App" | "Sistem & Tools">("Semua");

  const filteredProjects =
    activeTab === "Semua" ? projects : projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" style={{ scrollMarginTop: "5rem", paddingTop: "2rem", paddingBottom: "3rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "1rem",
          marginBottom: "1.5rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem" }}>
          <span style={{ fontFamily: "monospace", fontSize: "0.85rem", fontWeight: 700, color: "#2563eb" }}>
            01
          </span>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#0f172a", margin: 0, letterSpacing: "-0.02em" }}>
            Projects
          </h2>
        </div>

        {/* Filter Bar */}
        <div className="filter-bar no-print">
          {(["Semua", "Web App", "Sistem & Tools"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={activeTab === tab ? "filter-btn-active" : "filter-btn-inactive"}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {filteredProjects.map((p) => (
          <div key={p.title} className="project-card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                  <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#0f172a", margin: 0 }}>
                    {p.title}
                  </h3>
                  {p.featured && (
                    <span
                      style={{
                        backgroundColor: "#eff6ff",
                        color: "#1d4ed8",
                        border: "1px solid #bfdbfe",
                        borderRadius: "9999px",
                        padding: "0.15rem 0.6rem",
                        fontSize: "0.65rem",
                        fontWeight: 700,
                      }}
                    >
                      Unggulan
                    </span>
                  )}
                </div>
                <p style={{ margin: "0.25rem 0 0 0", fontSize: "0.75rem", fontFamily: "monospace", color: "#2563eb", fontWeight: 600 }}>
                  {p.category}
                </p>
                <p style={{ margin: "0.625rem 0 0 0", fontSize: "0.875rem", lineHeight: 1.6, color: "#475569", maxWidth: "680px" }}>
                  {p.desc}
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ fontFamily: "monospace", fontSize: "0.75rem", color: "#94a3b8" }}>{p.year}</span>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Buka Proyek"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "2rem",
                    height: "2rem",
                    borderRadius: "9999px",
                    backgroundColor: "#eff6ff",
                    border: "1px solid #bfdbfe",
                    color: "#2563eb",
                    textDecoration: "none",
                    fontWeight: 700,
                    fontSize: "0.875rem",
                  }}
                >
                  ↗
                </a>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "0.75rem",
                borderTop: "1px solid #f1f5f9",
                marginTop: "1.25rem",
                paddingTop: "1rem",
              }}
            >
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {p.tags.map((t) => (
                  <span key={t} className="tag-badge">
                    {t}
                  </span>
                ))}
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "1rem", fontSize: "0.8rem", fontWeight: 600 }}>
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#64748b", textDecoration: "none" }}
                    onMouseOver={(e) => (e.currentTarget.style.color = "#2563eb")}
                    onMouseOut={(e) => (e.currentTarget.style.color = "#64748b")}
                  >
                    Source Code ↗
                  </a>
                )}
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#2563eb", textDecoration: "none" }}
                >
                  Kunjungi Web ↗
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
