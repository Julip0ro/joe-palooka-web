import type { Metadata } from "next";
import { Inter, Archivo_Black } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FloatingActions from "@/components/FloatingActions";
import ScrollToTopOnRouteChange from "@/components/ScrollToTopOnRouteChange";
import AnuncioModal from "@/components/AnuncioModal";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const archivoBlack = Archivo_Black({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Joe Palooka | Boxeo de Alto Rendimiento",
  description:
    "Entrena con ex-seleccionados nacionales en el mejor gimnasio de boxeo de Surco.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Color de la barra de estado del navegador en móvil - Siempre hueso */}
        <meta name="theme-color" content="#f2f2f0" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        {/* Para navegadores que soportan prefers-color-scheme */}
        <meta
          name="theme-color"
          content="#f2f2f0"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#f2f2f0"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body
        className={`${inter.variable} ${archivoBlack.variable} antialiased flex flex-col min-h-screen bg-3d-grid text-zinc-50 font-sans`}
      >
        <ScrollToTopOnRouteChange />
        <Navbar />
        <AnuncioModal />
        <main className="grow relative z-10 w-full">{children}</main>
        <FloatingActions />
        <Footer />
      </body>
    </html>
  );
}
