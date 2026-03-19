import type { Metadata } from "next";
import { Inter, Archivo_Black } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FloatingActions from "@/components/FloatingActions";
import ScrollToTopOnRouteChange from "@/components/ScrollToTopOnRouteChange";

/** * Configuración de fuentes tipográficas
 */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: "400",
});

/** * Configuración de metadatos para optimización SEO (Search Engine Optimization)
 */
export const metadata: Metadata = {
  title: "Joe Palooka | Boxeo de Alto Rendimiento en Santiago de Surco",
  description:
    "Entrena con ex-seleccionados nacionales en el mejor gimnasio de boxeo de Surco. Ring profesional, técnica olímpica y clases para todos los niveles.",
  keywords: [
    "boxeo surco",
    "clases de boxeo lima",
    "entrenamiento funcional",
    "boxeo profesional perú",
  ],
  alternates: {
    canonical: "https://joepalooka.pe",
  },
  openGraph: {
    title: "Joe Palooka Boxing Club",
    description:
      "Domina el arte del boxeo con la metodología de la Selección Peruana en Surco.",
    url: "https://joepalooka.pe",
    siteName: "Joe Palooka",
    images: [
      {
        url: "/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Joe Palooka Boxing Club - Santiago de Surco",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
};

/** * Estructura principal de la aplicación (Root Layout)
 */
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

        {/* Contenido principal con renderizado dinámico */}
        <main className="grow relative z-10">{children}</main>

        <FloatingActions />
        <Footer />
      </body>
    </html>
  );
}
