"use client";

import { useState, useEffect } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll<HTMLElement>("[data-theme]");
      let currentTheme = "dark";

      let closestSection: HTMLElement | null = null;
      let closestDistance = Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const distanceFromTop = Math.abs(rect.top);

        if (rect.bottom > 0 && rect.top < window.innerHeight) {
          if (distanceFromTop < closestDistance) {
            closestDistance = distanceFromTop;
            closestSection = section;
          }
        }
      });

      if (closestSection) {
        currentTheme =
          (closestSection as HTMLElement).dataset.theme === "light"
            ? "light"
            : "dark";
      } else if (sections.length > 0) {
        currentTheme =
          (sections[0] as HTMLElement).dataset.theme === "light"
            ? "light"
            : "dark";
      }

      setIsLight(currentTheme === "light");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => setMenuAbierto(!menuAbierto);
  const handleClose = () => setMenuAbierto(false);

  // Colores dinámicos - mejor contraste sin cambiar colores
  const textColor = isLight ? "text-black" : "text-white";
  const textColorMuted = isLight ? "text-zinc-600" : "text-zinc-300";
  const lineColor = isLight ? "bg-black" : "bg-white";
  const iconColor = isLight ? "bg-black" : "bg-white";

  // Lógica de fondo
  const getNavBackground = () => {
    if (menuAbierto) {
      return isLight ? "bg-[#f2f2f0]" : "bg-black";
    }
    if (isScrolled) {
      return isLight
        ? "bg-white/70 backdrop-blur-xl"
        : "bg-black/40 backdrop-blur-xl";
    }
    return isLight ? "bg-[#f2f2f0]" : "bg-transparent";
  };

  return (
    <header
      className={`fixed top-0 z-[100] w-full transition-all duration-500 ${getNavBackground()}`}
    >
      {/* DESKTOP NAV */}
      <nav className="hidden md:flex h-16 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/img/icono.png"
              className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
              alt="Logo"
            />
            <span
              className={`${textColor} text-xl font-bold uppercase transition-colors duration-700`}
            >
              Joe Palooka
            </span>
          </Link>

          <div className="flex gap-8 items-center">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[13px] font-medium uppercase tracking-[0.2em] transition-colors duration-500 group ${
                  pathname === link.href
                    ? textColor
                    : `${textColorMuted} hover:${textColor}`
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-2 h-[1px] ${lineColor} transition-all duration-300 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
            <Link
              href="/contacto"
              className={`ml-4 px-4 py-2 text-[11px] font-black uppercase tracking-widest transition-all ${
                isLight
                  ? "border border-black text-black hover:bg-black hover:text-white"
                  : "border border-white/30 text-white hover:bg-white hover:text-black"
              }`}
            >
              Clase gratis
            </Link>
          </div>
        </div>
      </nav>

      {/* MOBILE NAV */}
      <nav className="md:hidden h-16 px-6 flex justify-between items-center relative z-[120]">
        <Link
          href="/"
          onClick={handleClose}
          className={`flex items-center gap-2 font-bold uppercase ${textColor}`}
        >
          <img src="/img/icono.png" className="w-6 h-6" alt="Logo" />
          Palooka
        </Link>

        <button
          onClick={handleToggle}
          className="relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
        >
          <span
            className={`block h-0.5 w-6 ${iconColor} transition-all duration-300 transform ${
              menuAbierto ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 ${iconColor} transition-all duration-300 ${
              menuAbierto ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-6 ${iconColor} transition-all duration-300 transform ${
              menuAbierto ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        {/* Menú Desplegable Móvil */}
        <div
          className={`absolute top-16 left-0 w-full ${
            isLight ? "bg-[#f2f2f0]" : "bg-black"
          } flex flex-col items-center py-10 gap-6 transition-all duration-500 ease-in-out z-[110] shadow-2xl ${
            menuAbierto
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleClose}
              className={`text-xl font-bold uppercase tracking-widest transition-colors duration-300 ${
                pathname === link.href
                  ? "text-red-600"
                  : isLight
                    ? "text-zinc-800"
                    : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            onClick={handleClose}
            className={`mt-4 px-10 py-4 font-black uppercase text-xs tracking-[0.2em] rounded-sm active:scale-95 transition-transform ${
              isLight ? "bg-zinc-900 text-white" : "bg-white text-black"
            }`}
          >
            Clase gratis
          </Link>
        </div>
      </nav>
    </header>
  );
}
