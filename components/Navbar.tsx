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

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const pathname = usePathname();

  const handleToggle = () => setMenuAbierto(!menuAbierto);
  const handleClose = () => setMenuAbierto(false);

  return (
    <header className="sticky top-0 z-[100] w-full">
      {/* NAVEGACIÓN DESKTOP */}
      <nav className="hidden md:flex w-full bg-black/30 backdrop-blur-md border-b border-zinc-900/10 h-16 items-center px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
          <Link href="/" className="group flex items-center gap-3">
            <img
              src="/img/icono.png"
              alt="Logo Joe Palooka"
              className="w-8 h-8 object-contain group-hover:scale-110 transition-transform"
            />
            <span className="text-white text-xl font-bold uppercase tracking-tight leading-none group-hover:text-red-600 transition-colors">
              Joe Palooka
            </span>
          </Link>

          <div className="flex gap-10 items-center">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-[13px] font-medium uppercase tracking-[0.2em] transition-colors group ${
                    isActive ? "text-white" : "text-zinc-300 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute left-0 -bottom-2 h-[2px] bg-red-600 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* FRANJA PROMOCIONAL */}
      <div className="relative w-full h-5 flex justify-center items-center bg-red-600 text-white backdrop-blur-sm border-y border-red-800/40 select-none overflow-hidden">
        <span className="relative px-5 text-[10px] font-medium uppercase tracking-[0.2em] text-center">
          ¡PIDE TU CLASE DE PRUEBA!
        </span>
      </div>

      {/* NAVEGACIÓN MÓVIL */}
      <nav className="md:hidden w-full">
        <div className="relative bg-zinc-900 border-b border-zinc-700 h-16 px-6 flex justify-between items-center">
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
              className={`block h-0.5 w-6 bg-white transition-all ${
                menuAbierto ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all ${
                menuAbierto ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all ${
                menuAbierto ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        <div
          className={`absolute top-full left-0 w-full bg-zinc-900/60 backdrop-blur-xl border-b border-zinc-700 overflow-hidden transition-all duration-300 ${
            menuAbierto
              ? "max-h-64 opacity-100"
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
                  pathname === link.href ? "text-red-600" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
