"use client";

import { useEffect, useRef } from "react";

/**
 * Sección que contiene una imagen a pantalla completa con efecto de zoom out.
 * En desktop, al hacer scroll, la imagen se aleja progresivamente.
 * En móvil, la imagen es completamente estática.
 */
export default function ZoomOutSection() {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Detectar si es móvil (pantalla menor a 768px)
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      // En móvil, no aplicar efecto, mantener imagen estática
      if (imageRef.current) {
        imageRef.current.style.transform = "scale(1)";
      }
      return;
    }

    const handleScroll = () => {
      if (!containerRef.current || !imageRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calcular qué porcentaje de la sección es visible en el viewport
      const visibleTop = Math.max(0, rect.top);
      const visibleBottom = Math.min(windowHeight, rect.bottom);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);
      const visibleRatio = visibleHeight / windowHeight;

      // El zoom out se intensifica a medida que la sección entra al viewport
      const progress = Math.min(1, Math.max(0, visibleRatio * 1.25));
      const scale = 1.15 - progress * 0.15;

      imageRef.current.style.transform = `scale(${scale})`;
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-zinc-950"
    >
      {/* Contenedor de la imagen con efecto de zoom */}
      <div
        ref={imageRef}
        className="absolute inset-0 will-change-transform transition-transform duration-100 ease-out"
        style={{
          transform: "scale(1.15)",
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/img/bg-gym.webp')",
            filter: "grayscale(100%)",
          }}
        />
      </div>
    </section>
  );
}
