"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/horarios", label: "Horarios" },
  { href: "/precios", label: "Planes" },
  { href: "/contacto", label: "Contacto" },
];

/**
 * Navbar - Sistema de navegación principal.
 * Incluye variantes para escritorio y móvil con gestión de estados activos y barra promocional.
 */
export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const pathname = usePathname();

  const handleToggle = () => setMenuAbierto(!menuAbierto);
  const handleClose = () => setMenuAbierto(false);

  return (
    <header className="sticky top-0 z-[100] w-full">
      {/* NAVEGACIÓN DESKTOP: Layout con blur y bordes sutiles */}
      <nav className="hidden md:flex w-full bg-black/70 backdrop-blur-md border-b border-white/10 h-16 items-center px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
          {/* Brand Identity */}
          <Link href="/" className="group flex items-center gap-3">
            <img
              src="/img/icono.png"
              alt="Logo Joe Palooka"
              className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-white text-xl font-bold uppercase tracking-tight leading-none transition-colors duration-300 group-hover:text-zinc-300">
              Joe Palooka
            </span>
          </Link>

          {/* Navigation Links & CTA */}
          <div className="flex gap-8 items-center">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-[13px] font-medium uppercase tracking-[0.2em] transition-colors duration-300 group ${
                    isActive ? "text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute left-0 -bottom-2 h-[1px] bg-white/80 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}

            <Link
              href="/contacto"
              className="ml-4 px-4 py-2 text-[12px] font-bold uppercase tracking-widest border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              Clase gratis
            </Link>
          </div>
        </div>
      </nav>

      {/* FRANJA PROMOCIONAL: Elemento de alto contraste para destacar la oferta principal */}
      <div className="w-full h-5 flex justify-center items-center bg-white text-black text-[10px] uppercase tracking-[0.25em] border-b border-black/10 select-none">
        Primera clase gratis
      </div>

      {/* NAVEGACIÓN MÓVIL: Panel colapsable con efectos de desenfoque */}
      <nav className="md:hidden w-full">
        <div className="relative bg-black border-b border-white/10 h-16 px-6 flex justify-between items-center">
          <Link
            href="/"
            onClick={handleClose}
            className="flex items-center gap-2 text-white text-lg font-bold uppercase tracking-tight"
          >
            <img
              src="/img/icono.png"
              alt="Logo"
              className="w-6 h-6 object-contain"
            />
            Joe Palooka
          </Link>

          <button
            onClick={handleToggle}
            className="flex flex-col gap-1.5 p-2 -mr-2 relative z-[120]"
            aria-label="Menú principal"
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-all ${menuAbierto ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all ${menuAbierto ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all ${menuAbierto ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

        {/* Panel desplegable móvil */}
        <div
          className={`absolute top-full left-0 w-full bg-black/80 backdrop-blur-xl border-b border-white/10 overflow-hidden transition-all duration-300 ${
            menuAbierto
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center justify-center gap-6 py-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleClose}
                className={`font-bold uppercase tracking-widest text-lg transition-colors ${
                  pathname === link.href
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contacto"
              onClick={handleClose}
              className="mt-2 px-5 py-2 border border-white/20 text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all"
            >
              Clase gratis
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
