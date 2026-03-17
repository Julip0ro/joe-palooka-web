"use client";
import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/horarios", label: "Horarios" },
  { href: "/precios", label: "Planes" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <>
      {/* NAVBAR DESKTOP */}
      <nav className="hidden md:flex w-full bg-zinc-900/70 backdrop-blur-md border-b border-zinc-800 h-16 items-center px-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
          <Link href="/" className="group">
            <span className="text-white text-xl font-bold uppercase tracking-tight leading-none group-hover:text-red-600 transition-colors">
              Joe Palooka
            </span>
          </Link>

          <div className="flex gap-10 items-center">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-zinc-300 hover:text-white text-[13px] font-meidum uppercase tracking-[0.2em] transition-colors group"
              >
                {link.label}
                <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* FRANJA PROMOCIONAL */}
      <div className="w-full h-6 flex justify-center items-center bg-red-600/70 text-white backdrop-blur-sm border-y border-red-800 select-none">
        <span className="px-5 text-[10px] font-medium uppercase tracking-[0.2em] text-center">
          ¡PIDE TU CLASE DE PRUEBA!
        </span>
      </div>

      {/* NAVBAR MÓVIL */}
      <nav className="md:hidden sticky top-0 left-0 w-full z-[110]">
        <div className="relative bg-zinc-800 border-b border-zinc-800 h-16 px-6 flex justify-between items-center">
          <Link
            href="/"
            className="text-white text-lg font-black uppercase tracking-tight"
          >
            Joe Palooka
          </Link>

          {/* BOTÓN HAMBURGUESA */}
          <button
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="flex flex-col gap-1.5 p-2 -mr-2 relative z-[120]"
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

        {/* MENÚ DESPLEGABLE */}
        <div
          className={`absolute top-16 left-0 w-full bg-zinc-900/70 backdrop-blur-md border-b border-zinc-800 overflow-hidden transition-all duration-300 ${
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
                onClick={() => setMenuAbierto(false)}
                className="font-bold uppercase tracking-widest text-white text-lg"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* ESTILOS PARA LA ANIMACIÓN CONTINUA */}
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slide {
          animation: slide 12s linear infinite;
        }
      `}</style>
    </>
  );
}
