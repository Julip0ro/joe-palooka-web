"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
});

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

  // Cerrar menú al redimensionar a desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && menuAbierto) {
        setMenuAbierto(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuAbierto]);

  // Bloquear scroll del body cuando el menú está abierto en móvil
  useEffect(() => {
    if (menuAbierto) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuAbierto]);

  const handleToggle = () => setMenuAbierto(!menuAbierto);
  const handleClose = () => setMenuAbierto(false);

  const textColor = "text-white";
  const lineColor = "bg-white";
  const iconColor = "bg-white";

  const getNavBackground = () => {
    if (menuAbierto) {
      return "bg-transparent";
    }
    if (isScrolled) {
      return "bg-black/10 backdrop-blur-sm";
    }
    return "bg-transparent";
  };

  return (
    <header
      className={`fixed top-0 z-[100] w-full transition-all duration-500 ${getNavBackground()} ${poppins.variable} font-[family-name:var(--font-poppins)]`}
    >
      {/* DESKTOP NAV (md en adelante: 768px) */}
      <nav className="hidden md:flex h-16 lg:h-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
          <Link href="/" className="flex items-center gap-2 lg:gap-3 group">
            <img
              src="/img/icono.png"
              className="w-7 h-7 lg:w-8 lg:h-8 transition-transform duration-300 group-hover:scale-110"
              alt="Logo"
            />
            <span
              className={`${textColor} text-lg lg:text-xl font-semibold uppercase tracking-wide transition-colors duration-700`}
            >
              Joe Palooka
            </span>
          </Link>

          <div className="flex gap-6 lg:gap-8 items-center">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[12px] lg:text-[14px] font-medium uppercase tracking-[0.15em] transition-colors duration-500 group ${textColor}`}
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
              className="ml-2 lg:ml-4 px-3 lg:px-4 py-1.5 lg:py-2 text-[10px] lg:text-[11px] font-bold uppercase tracking-widest transition-all border border-white/30 text-white hover:bg-white hover:text-black rounded-sm"
            >
              Clase gratis
            </Link>
          </div>
        </div>
      </nav>

      {/* MOBILE NAV (menos de 768px) */}
      <nav className="md:hidden h-14 px-4 flex justify-between items-center relative z-[120]">
        <Link
          href="/"
          onClick={handleClose}
          className={`flex items-center gap-2 font-semibold uppercase tracking-wide ${textColor}`}
        >
          <img src="/img/icono.png" className="w-6 h-6" alt="Logo" />
          <span className="text-sm">Palooka</span>
        </Link>

        <button
          onClick={handleToggle}
          className="relative w-7 h-7 flex flex-col items-center justify-center gap-1.5 focus:outline-none z-[130]"
          aria-label="Menú"
        >
          <span
            className={`block h-0.5 w-5 ${iconColor} transition-all duration-300 transform ${
              menuAbierto ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 ${iconColor} transition-all duration-300 ${
              menuAbierto ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-5 ${iconColor} transition-all duration-300 transform ${
              menuAbierto ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        {/* Menú Desplegable Móvil - Pantalla completa */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-zinc-900 flex flex-col items-center justify-center gap-6 transition-all duration-500 ease-in-out z-[110] ${
            menuAbierto
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }`}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleClose}
              className={`text-2xl sm:text-3xl font-semibold uppercase tracking-wide transition-colors duration-300 ${
                pathname === link.href
                  ? "text-red-600"
                  : "text-white hover:text-red-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            onClick={handleClose}
            className="mt-6 px-8 py-3 bg-red-600 text-white font-bold uppercase text-xs tracking-[0.2em] rounded-sm active:scale-95 transition-transform"
          >
            Clase gratis
          </Link>
        </div>
      </nav>
    </header>
  );
}
