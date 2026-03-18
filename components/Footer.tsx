"use client";

import Link from "next/link";
import { Instagram, Facebook, MessageCircle, Music2 } from "lucide-react";

/**
 * Footer - Componente de cierre de página.
 * Tipografía: Archivo Black para marca, Inter para navegación y datos técnicos.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const SOCIAL_LINKS = [
    {
      icon: <Instagram size={20} />,
      href: "https://www.instagram.com/joe.palooka",
      label: "Instagram",
    },
    {
      icon: <Facebook size={20} />,
      href: "https://www.facebook.com/gimnasio.palooka",
      label: "Facebook",
    },
    {
      icon: <Music2 size={20} />,
      href: "https://www.tiktok.com/@joepalooka_",
      label: "TikTok",
    },
    {
      icon: <MessageCircle size={20} />,
      href: "https://wa.me/51980775633",
      label: "WhatsApp",
    },
  ];

  const NAV_LINKS = [
    { label: "Inicio", href: "/" },
    { label: "Horarios", href: "/horarios" },
    { label: "Planes", href: "/precios" },
    { label: "Contacto", href: "/contacto" },
  ];

  return (
    <footer className="w-full bg-zinc-950 selection:bg-red-600/30 font-[family-name:var(--font-inter)]">
      {/* SECCIÓN: BARRA SOCIAL */}
      <section className="w-full bg-black border-t border-zinc-800/90 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-red-500 mb-6 font-bold">
            Síguenos en nuestras redes
          </p>
          <div className="flex items-center justify-center gap-6 md:gap-8">
            {SOCIAL_LINKS.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-zinc-900/50 border border-zinc-800 hover:bg-red-600 hover:border-red-600 transition-all duration-300 shadow-xl active:scale-90"
              >
                <div className="text-zinc-400 group-hover:text-white transition-colors">
                  {social.icon}
                </div>
                <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all bg-zinc-800 text-white text-[9px] uppercase tracking-widest px-3 py-1 rounded-md pointer-events-none font-bold hidden md:block">
                  {social.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN: CONTENIDO PRINCIPAL */}
      <div className="w-full bg-zinc-900/80 border-t border-zinc-900/50 pt-12 pb-28 md:pb-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 text-center md:text-left">
            {/* Identidad - ARCHIVO BLACK */}
            <div className="flex flex-col items-center md:items-start">
              <h2 className="text-base font-black uppercase text-zinc-50 tracking-tight font-[family-name:var(--font-archivo)]">
                Joe Palooka
              </h2>
              <p className="text-zinc-500 text-[10px] uppercase tracking-[0.25em] mt-1 font-bold">
                Santiago de Surco · Lima
              </p>
              <div className="w-12 h-px bg-red-600 mt-4" />
            </div>

            {/* Navegación y Contacto - INTER */}
            <div className="flex gap-12 md:gap-20">
              <nav className="flex flex-col gap-4">
                <p className="text-white text-[11px] font-bold uppercase tracking-widest">
                  Navegación
                </p>
                <div className="flex flex-col gap-2 text-zinc-400 text-[10px] uppercase tracking-[0.2em] font-medium">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </nav>

              <div className="flex flex-col gap-4">
                <p className="text-white text-[11px] font-bold uppercase tracking-widest">
                  Contacto
                </p>
                <div className="flex flex-col gap-2 text-zinc-400 text-[10px] uppercase tracking-[0.2em] font-medium">
                  <a
                    href="https://wa.me/51980775633"
                    target="_blank"
                    className="hover:text-red-500 transition-colors"
                  >
                    +51 980 775 633
                  </a>
                  <span className="text-zinc-600">Surco, Lima, Perú</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-zinc-900 my-10" />

          {/* Copyright - INTER */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-[9px] uppercase tracking-[0.25em] font-bold">
            <p>© {currentYear} Joe Palooka Boxing</p>
            <p className="hidden md:block">Todos los derechos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
