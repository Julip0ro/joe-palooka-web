import type { Metadata } from "next";
import { Inter, Archivo_Black } from "next/font/google"; // Importamos las nuevas fuentes
import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FloatingActions from "@/components/FloatingActions";
import ScrollToTopOnRouteChange from "@/components/ScrollToTopOnRouteChange";

// Fuente para el cuerpo (Sustituye a Geist Sans)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Fuente para títulos pesados
const archivoBlack = Archivo_Black({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Joe Palooka | Boxing Club",
  description: "Entrenamiento de boxeo profesional en Lima",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} ${archivoBlack.variable} antialiased flex flex-col min-h-screen bg-3d-grid text-zinc-50 font-sans`}
      >
        <ScrollToTopOnRouteChange />
        <Navbar />
        {/* IMPORTANTE: 
            Ahora puedes usar la clase 'font-archivo' en cualquier título 
            y todo lo demás usará Inter por defecto.
        */}
        <main className="grow relative z-10">{children}</main>
        <FloatingActions />
        <Footer />
      </body>
    </html>
  );
}
