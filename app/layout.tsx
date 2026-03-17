import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FloatingActions from "@/components/FloatingActions";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joe Palooka | Boxing Club",
  description: "Entrenamiento de boxeo profesional en Lima",
};

// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-3d-grid text-zinc-50`}
      >
        <Navbar />
        {/* Sin animaciones aquí para que la Navbar no parpadee */}
        <main className="grow relative z-10">{children}</main>
        <FloatingActions></FloatingActions>
        <Footer />
      </body>
    </html>
  );
}
