import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Muhammad Tyler J. R. Wiratama — Full-Stack Developer",
  description:
    "Portfolio Muhammad Tyler J. Riches Wiratama (Yama) — Full-Stack Developer spesialis aplikasi web modern dengan Next.js, TypeScript, Tailwind CSS, dan Supabase.",
  keywords: [
    "Muhammad Tyler Wiratama",
    "Yama",
    "Full-Stack Developer",
    "Web Developer Indonesia",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
  ],
  authors: [{ name: "Muhammad Tyler J. Riches Wiratama" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
