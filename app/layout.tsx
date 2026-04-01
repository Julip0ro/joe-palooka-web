import type { Metadata } from "next";
import { Inter, Archivo_Black } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FloatingActions from "@/components/FloatingActions";
import ScrollToTopOnRouteChange from "@/components/ScrollToTopOnRouteChange";

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
      <body
        className={`${inter.variable} ${archivoBlack.variable} antialiased flex flex-col min-h-screen bg-3d-grid text-zinc-50 font-sans`}
      >
        <ScrollToTopOnRouteChange />
        <Navbar />
        <main className="grow relative z-10 w-full">{children}</main>
        <FloatingActions />
        <Footer />
      </body>
    </html>
  );
}
